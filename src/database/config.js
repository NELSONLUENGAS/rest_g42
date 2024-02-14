require('dotenv').config();
const { Pool } = require('pg');
const { HOST, USER, PASSWORD, DBNAME } = process.env;

const { createTablePosts, insertPosts } = require('../querys/index');

const db = new Pool({
	host: HOST,
	user: USER,
	password: PASSWORD,
	database: DBNAME,
	allowExitOnIdle: true,
});

db.connect((error, client, done) => {
	if (error) {
		console.log('Se produjo un error al conectarse a la base de datos', error);
	} else {
		console.log('Conexión a la base de datos con éxito');

		// Create tables when the server init
		client.query(createTablePosts, (error, result) => {
			if (error) {
				// console.log(error);
			} else {
				// console.log(result);
			}
		});

		// client.query(insertPosts, (error, result) => {
		// 	if (error) {
		// 		console.log(error);
		// 	} else {
		// 		console.log(result);
		// 	}
		// });
	}
});

module.exports = db;
