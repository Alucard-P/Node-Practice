// const express = require("express");
// const router = express.Router();

const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  // console.log(__dirname);
  // res.send("Este es mi primera respuesta");
  res.render("index", { titulo: "mi titulo dinamicoo" });
});

router.get("/service", (req, res) => {
  // res.send("Este es mi segunda respuesta");
  res.render("service", { servicio: "este es mi servicio dinamico" });
});

module.exports = router;
