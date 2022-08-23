// importing year model
const bookModel = require("../../models/bookModel");
const studentModel = require("../../models/studentModel");
const studentBookJunction = require("../../models/student_book_junction");

//create  Student controller

module.exports = {
  creatStudentBookJunction: async (req, res) => {
    const { bookId } = req.body;
    try {
      const singleBook = await bookModel.findByPk(bookId);

      if (!singleBook.bookStatus) {
        return res.json({
          message: "no books available",
          data: [],
          status: false,
        });
      }
      let count = singleBook.bookQuantity - 1;
      let status = count > 0 ? true : false;
      await bookModel.update(
        {
          bookStatus: status,
          bookQuantity: count,
        },
        { where: { bookId } }
      );
      const junction = await studentBookJunction.create(req.body);
      return res.status(200).json({
        message: "studentBookJunction created",
        data: junction,
        status: true,
      });
    } catch (e) {
      return res.status(400).json({
        message: "something wrong inside creat studentBookJunction conrtoller",
        data: null,
        status: false,
      });
    }
  },
  getStudentBookJunction: async (req, res) => {
    const { id } = req.params;
    try {
      const studentBookJunctionData = await studentBookJunction.findAll({
        // where: { studentId: id },
        include: [{ model: studentModel }],
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });

      return res.status(200).json({
        message: "studentBookJunction found",
        data: studentBookJunctionData,
        status: true,
      });
    } catch (e) {
      return res.status(400).json({
        message: "something wrong inside found studentBookJunction conrtoller",
        data: null,
        status: false,
        e,
      });
    }
  },
  destroyStudentBookJunction: async (req, res) => {
    const { bookId, returnBook } = req.query;
    try {
      const singleBook = await bookModel.findByPk(+bookId);
      const count = singleBook.bookQuantity + 1;
      await bookModel.update(
        {
          bookStatus: true,
          bookQuantity: count,
        },
        { where: { bookId: +bookId } }
      );
      const junction = await studentBookJunction.destroy({
        where: { studentBookJunctionId: +returnBook },
      });

      return res.status(200).json({
        message: "studentBookJunction created",
        singleBook,
        junction,
        status: true,
      });
    } catch (e) {
      return res.status(400).json({
        message: "something wrong inside creat studentBookJunction conrtoller",
        data: null,
        status: false,
      });
    }
  },
};
