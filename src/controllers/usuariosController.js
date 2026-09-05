const Usuario = require("../models/usuario");

async function obtenerUsuarios(req, res) {
	try {
		const usuarios = await Usuario.findAll({
			attributes: ["id", "nombre", "email"],
			order: [["id", "ASC"]],
		});

		res.status(200).json({
			total: usuarios.length,
			usuarios,
		});
	} catch (error) {
		console.error("Error al consultar usuarios:", error.message);

		res.status(500).json({
			error: "No se pudieron obtener los usuarios",
		});
	}
}

module.exports = {
	obtenerUsuarios,
};
