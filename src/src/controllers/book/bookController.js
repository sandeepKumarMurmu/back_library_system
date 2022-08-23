// -----------------------------------------------------------------------------------------------------------
// importing year model
const Book = require("../../models/bookModel");

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
      });
    }
  },
};
