const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const { Campus, Student } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    let allCampuses = await Campus.findAll({
      include: Student,
    });
    res.status(200).send(allCampuses);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let campus = await Campus.findByPk(req.params.id, {
      include: Student,
    });
    if (!campus) {
      res.status(404).send("<h1>Campus doesn't exist!</h1>");
    } else {
      res.status(200).send(campus);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let newCampus = await Campus.create(req.body);
    res.status(201).send(newCampus);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const campusToRemove = await Campus.findByPk(req.params.id);
    if (!campusToRemove) {
      res.status(404).send("<h1>Campus not found!</h1>");
    } else {
      await campusToRemove.destroy();
      res.send(campusToRemove);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
