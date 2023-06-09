const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
// app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads

require("dotenv").config();

const rutas = require("./router/rutasWeb");
const mascotas = require("./router/mascotas");

//conexion a base de datos
const mongoose = require("mongoose");

// const uri = `mongodb+srv://${user}:${password}@cluster0.cypjuib.mongodb.net/?retryWrites=true&w=majority`;
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.cypjuib.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() => console.log("Base de Datos Conectada"))
  .catch((e) => console.log(e));

const port = process.env.PORT || 3000;

// motor de plantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

//Rutas web
app.use("/", rutas);
app.use("/mascotas", mascotas);

app.use((req, res, next) => {
  // res.status(404).sendFile(__dirname + "/public/404.html");
  res.status(404).render("404", {
    error: "Soy un supererror , aguantaaaaaaaaaaaa",
    description: "Soy la descripcion de tu error",
  });
});
app.listen(port, () => {
  console.log(`Servidor alojado en el port: ${port}`);
});
