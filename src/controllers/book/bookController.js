const { Op } = require("sequelize");
// -----------------------------------------------------------------------------------------------------------
// importing year model
const authorModel = require("../../models/authorModel");
const Book = require("../../models/bookModel");
const streamModel = require("../../models/streamModel");

// -------------------------------------------------------------------------------------------------------------------------
// filterfunction
const filterFunction = require("../../utils/functions/filterFunction");

// -----------------------------------------------------------------------------------------------------------
//exporting book controller
module.exports = {
  // -----------------------------------------------------------------------------------------------------------
  //creating book controller
  createBook: async (req, res) => {
    const { title, quantity, catogery, stream } = req.body;
    try {
      const bookData = await Book.create({
        bookTitle: title,
        bookQuantity: quantity,
        bookCatogery: catogery,
        bookStatus: quantity > 0 ? true : false,
        streamId: stream,
      });

      return res
        .status(200)
        .json({ message: "book created", data: bookData, status: true });
    } catch (e) {
      return res.status(400).json({
        message: "something wrong inside creat book conrtoller",
        data: null,
        status: false,
        e,
      });
    }
  },
  // -----------------------------------------------------------------------------------------------------------
  //getting book controller
  getBookBySearch: async (req, res) => {
    // const { title, quantity, catogery, stream } = req.body;
    try {
      const bookData = await Book.findAndCountAll();

      return res
        .status(200)
        .json({ message: "book got", data: bookData, status: true });
    } catch (e) {
      return res.status(400).json({
        message: "something wrong inside got book conrtoller",
        data: null,
        status: false,
        e,
      });
    }
  },

  // -----------------------------------------------------------------------------------------------------------
  //getting book by id controller
  getBookById: async (req, res) => {
    const { _id, authors, quantity, stream, bookName, orderByQuantity } =
      req.query;
    try {
      if (_id) {
        const bookData = await Book.findAll({
          where: { ...filterFunction.idFilter(_id.trim(), "bookId", Op.eq) },
          include: [
            {
              model: authorModel,
              through: { attributes: [] },
              attributes: { exclude: ["createdAt", "updatedAt"] },
            },
            {
              model: streamModel,
              attributes: { exclude: ["createdAt", "updatedAt"] },
            },
          ],
        });

        return res.status(200).json({
          message: "book got",
          data: {
            boodId: bookData[0].bookId,
            title: bookData[0].bookTitle,
            category: bookData[0].bookCatogery,
            quantity: quantity && bookData[0].bookQuantity,
            stream: stream && bookData[0].stream,
            author: authors && bookData[0].authors,
          },
          status: true,
        });
      }

      const searchReasult = await Book.findAndCountAll({
        include: [
          ...(authors
            ? [
                {
                  model: authorModel,
                  through: { attributes: [] },
                  attributes: { exclude: ["createdAt", "updatedAt"] },
                },
              ]
            : []),
          ...(stream
            ? [
                {
                  model: streamModel,
                  attributes: { exclude: ["createdAt", "updatedAt"] },
                },
              ]
            : []),
        ],
        where: {
          ...filterFunction.stringFilter(bookName, "bookTitle", Op.substring),
        },
        order: [...filterFunction.orderFitler(orderByQuantity, "bookQuantity")],
        attributes: { exclude: ["createdAt", "updatedAt", "streamId"] },
      });

      console.log(undefined && { name: "sandeep" });
      return res.status(200).json({
        message: "book got",
        data: searchReasult,
        status: true,
      });
    } catch (e) {
      return res.status(400).json({
        message: "something wrong inside got book conrtoller",
        data: null,
        status: false,
        e,
      });
    }
  },
};
