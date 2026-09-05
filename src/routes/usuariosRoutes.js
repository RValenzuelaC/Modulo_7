const express = require("express");
const { obtenerUsuarios } = require("../controllers/usuariosController");

const router = express.Router();

router.get("/", obtenerUsuarios);

module.exports = router;
