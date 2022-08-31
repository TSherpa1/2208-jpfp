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

router.get("/:id", async (req, res, next) => {
  try {
    let student = await Student.findByPk(req.params.id, {
      include: Campus,
    });
    if (!student) {
      res.status(404).send("<h1>Campus doesn't exist!</h1>");
    } else {
      res.status(200).send(student);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let newStudent = await Student.create(req.body);
    res.status(201).send(newStudent);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
