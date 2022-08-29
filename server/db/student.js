const Sequelize = require("sequelize");
const db = require("./database");

const Student = db.define("student", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fqph.cf2.quoracdn.net%2Fmain-qimg-0b4f50ac59d3deb32175dd53c06c6b74&imgrefurl=https%3A%2F%2Fwww.quora.com%2FWhat-is-the-best-use-of-internet-for-a-college-student-in-June-2021&tbnid=UF9cE361QY4ydM&vet=10CA0QxiAoBWoXChMI8Kj98IDm-QIVAAAAAB0AAAAAEAY..i&docid=5DQxRq7WNQZPoM&w=512&h=512&itg=1&q=student%20image&hl=en&ved=0CA0QxiAoBWoXChMI8Kj98IDm-QIVAAAAAB0AAAAAEAY",
  },
  gpa: {
    type: Sequelize.DOUBLE,
    min: 0.0,
    max: 4.0,
  },
});

module.exports = Student;
