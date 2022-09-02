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
      res.status(404).send("<h1>Student doesn't exist!</h1>");
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

router.delete("/:id", async (req, res, next) => {
  try {
    const studentToRemove = await Student.findByPk(req.params.id);
    if (!studentToRemove) {
      res.status(404).send("<h1>Student not found!</h1>");
    } else {
      await studentToRemove.destroy();
      //setting status of 204 prevented the studentToRemove from being sent
      res.send(studentToRemove);
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const studentToUpdate = await Student.findByPk(req.params.id);
    if (!studentToUpdate) {
      res.status(404).send("<h1>Student not found!</h1>");
    } else {
      await studentToUpdate.update(req.body);
      res.send(studentToUpdate);
    }
  } catch (error) {
    next(error);
  }
});
module.exports = router;
