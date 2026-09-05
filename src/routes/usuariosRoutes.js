const express = require("express");

const {
	obtenerUsuarios,
	obtenerUsuarioConHistorial,
	actualizarUsuario,
	eliminarUsuario,
	crearUsuarioConHistorial,
} = require("../controllers/usuariosController");

const router = express.Router();

router.get("/", obtenerUsuarios);
router.get("/:id/historiales", obtenerUsuarioConHistorial);
router.post("/con-historial", crearUsuarioConHistorial);
router.put("/:id", actualizarUsuario);
router.delete("/:id", eliminarUsuario);

module.exports = router;
