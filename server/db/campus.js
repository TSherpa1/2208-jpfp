const Sequelize = require("sequelize");
const db = require("./database");

const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      "https://www.istockphoto.com/photo/quandrangle-lawn-at-the-university-of-washington-gm157505397-10826173",
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: Sequelize.TEXT,
});

module.exports = Campus;
