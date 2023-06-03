const { Router } = require("express");
const router = Router();

const Mascota = require("../models/mascota");

router.get("/", async (req, res) => {
  try {
    const arrayMascotasDB = await Mascota.find();
    console.log(arrayMascotasDB);
    res.render("mascotas", {
      arrayMascotas: arrayMascotasDB,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/crear", (req, res) => {
  res.render("crear");
});

router.post("/", async (req, res) => {
  const body = req.body;
  try {
    //metodo 1
    // const mascotadb = new Mascota(body)
    // await mascotadb.save()

    //metodo 2
    await Mascota.create(body);
    res.redirect("/mascotas");
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const mascotaDB = await Mascota.findOne({ _id: id });

    console.log(mascotaDB);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
