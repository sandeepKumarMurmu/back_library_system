// library methode
const { Op } = require("sequelize");

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// models
const streamModel = require("../../models/streamModel");
const yearModel = require("../../models/yearModel");
const studentModel = require("../../models/studentModel");
const bookModel = require("../../models/bookModel");

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// filter functions
const filters = require("../../utils/functions/filterFunction");

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
//exporting controllers
module.exports = {
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------
  //get Student by id controller
  getStudentById: async (req, res) => {
    const { books, year, stream } = req.query;
    try {
      const studentData = await studentModel.findByPk(+req.params.id, {
        include: [
          {
            model: bookModel,
            attributes: ["bookTitle", "bookId", "bookCatogery"],
          },
          {
            model: streamModel,
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
          {
            model: yearModel,
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
        ],
      });

      return res.status(200).json({
        message: "student recieved",
        data: {
          id: studentData.studentId,
          fullName: studentData.studentFullName,
          email: studentData.studentEmail,
          address: studentData.studentAddress,
          stream: stream && studentData.stream,
          year: year && studentData.year,
          book: books && studentData.books,
        },
        status: true,
      });
    } catch (e) {
      return res.status(400).json({
        message: "something wrong inside  student conrtoller",
        data: null,
        status: false,
      });
    }
  },
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------
  //get Student by queries controller
  getStudentBySearch: async (req, res) => {
    const { name, stream, order, orderByName, limit, page } = req.query;
    try {
      const studentData = await studentModel.findAndCountAll({
        include: [
          {
            model: yearModel,
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
          {
            model: streamModel,
            where: {
              ...filters.stringFilter(stream, "streamName", Op.substring),
            },
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
        ],
        where: {
          ...filters.stringFilter(name, "studentFullName", Op.substring),
        },
        attributes: {
          exclude: ["updatedAt", "createdAt", "yearId", "streamId"],
        },
        order: [
          ...filters.orderFitler(order, "yearId"),
          ...filters.orderFitler(orderByName, "studentFullName"),
        ],

        ...filters.pagination(page, limit),
      });

      return res.status(200).json({
        message: "student found",
        data: studentData,
        status: true,
      });
    } catch (e) {
      return res.status(400).json({
        message: "something wrong inside  student conrtoller",
        data: null,
        status: false,
        e,
      });
    }
  },

  // -------------------------------------------------------------------------------------------------------------------------------------------------------------
  //create Student by queries controller
  createStudent: async (req, res) => {
    const { fullName, email, type, address, stream, year } = req.body;
    try {
      const studentData = await Student.create({
        studentFullName: fullName,
        studentEmail: email,
        studentType: type,
        studentAddress: address,
        streamId: stream,
        yearId: year,
      });

      return res
        .status(200)
        .json({ message: "student created", data: req.body, status: true });
    } catch (e) {
      return res.status(400).json({
        message: "something wrong inside creat student conrtoller",
        data: null,
        status: false,
        e,
      });
    }
  },

  updateStudent: async (req, res) => {
    try {
      const studentData = await studentModel.update(req.body, {
        where: { studentId: req.params.id },
      });
      return res.status(200).json({ data: studentData });
    } catch (e) {
      return res.status(400).json({ message: "error in update student", e });
    }
  },
};
