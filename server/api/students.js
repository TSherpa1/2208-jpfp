const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const { Student, Campus } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    let allStudents = await Student.findAll({
      include: Campus,
    });
    res.status(200).send(allStudents);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
