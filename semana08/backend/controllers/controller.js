const db = require('../config/db.;config.js');
const Cliente = db.Cliente;

// adiciona registros na tabela
exports.createCliente = (req, res) => {
	let cliente = {};

	try {
		// capturando dados do body
		cliente.nome = req.body.nome;
		cliente.email = req.body.email;
		cliente.idade = req.body.idade;

		// salvando cliente no BD
		Cliente.create(cliente, {
			attributes: ['id', 'nome', 'email', 'idade'],
		}).then(result => res.status(200).json(result));
	} catch (error) {
		res.status(500).json({
			message: 'Fail!',
			error: error.message,
		});
	}
};

exports.getCliente = (req, res) => {
	Cliente.findByPk(re.params.id, {
		attributes: ['id', 'nome', 'email', 'idade'],
	})
		.then(cliente => {
			res.status(200).json(cliente);
		})
		.catch(error => {
			console.log(error);

			res.status(500).json({
				message: 'Fail!',
				error: error,
			});
		});
};

exports.getCliente = (req, res) => {
	Cliente.findAll(re.params.id, {
		attributes: ['id', 'nome', 'email', 'idade'],
	})
		.then(cliente => {
			res.status(200).json(clientes);
		})
		.catch(error => {
			console.log(error);

			res.status(500).json({
				message: 'Fail!',
				error: error,
			});
		});
};
