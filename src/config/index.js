const db = {};

// ------------------------------------------------------------------------------------------------------------
// putting models in an obj
db.connection = require("./connection");
db.student = require("../models/studentModel");
db.stream = require("../models/streamModel");
db.year = require("../models/yearModel");
db.book = require("../models/bookModel");
db.author = require("../models/authorModel");
db.studentBookJunction = require("../models/student_book_junction");
db.authorBookJunction = require("../models/author_book_junction");
db.authorStreamJunction = require("../models/author_stream_junction");
db.admin = require("../models/adminModel");

// ------------------------------------------------------------------------------------------------------------
// creation of reelation ships

// ------------------------------------------------------------------------------------------------------------
//  stream hasMany student  and student hasOne stream
db.stream.hasMany(db.student, { foreignKey: "streamId" });
db.student.belongsTo(db.stream, { foreignKey: "streamId" });

// ------------------------------------------------------------------------------------------------------------
// year hasMany student  and student hasOne year
db.year.hasMany(db.student, { foreignKey: "yearId" });
db.student.belongsTo(db.year, { foreignKey: "yearId" });

// ------------------------------------------------------------------------------------------------------------
// student many-to-many books  and books many-to-many student
db.student.belongsToMany(db.book, {
  through: "studentBookJunction",
  foreignKey: "studentId",
});
db.book.belongsToMany(db.student, {
  through: "studentBookJunction",
  foreignKey: "bookId",
});

// ------------------------------------------------------------------------------------------------------------
// author many-to-many books  and books many-to-many author
db.book.belongsToMany(db.author, {
  through: "authorBookJunction",
  foreignKey: "bookId",
});
db.author.belongsToMany(db.book, {
  through: "authorBookJunction",
  foreignKey: "authorId",
});

// ------------------------------------------------------------------------------------------------------------
// stream hasMany books  and books hasOne stream
db.stream.hasMany(db.book, { foreignKey: "streamId" });
db.book.belongsTo(db.stream, { foreignKey: "streamId" });

// ------------------------------------------------------------------------------------------------------------
// synchronising data base
db.connection.sync({ force: false }).then(({ models }) => {
  console.log(`tables are created and the models are `);
  console.log(models);
});

// ------------------------------------------------------------------------------------------------------------
// exportind connection
module.exports = db;
