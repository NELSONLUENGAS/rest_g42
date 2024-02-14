const createTablePosts = `CREATE TABLE IF NOT EXISTS posts (
    id SERIAL,
    titulo VARCHAR(25) UNIQUE,
    img VARCHAR(1000) UNIQUE,
    descripcion VARCHAR(255),
    likes INT
    );
`;

const insertPosts = `INSERT INTO posts (titulo, img, descripcion, likes) VALUES
    ('Título 1', 'imagen1.jpg', 'Descripción del post 1', 10),
    ('Título 2', 'imagen2.jpg', 'Descripción del post 2', 25),
    ('Título 3', 'imagen3.jpg', 'Descripción del post 3', 8),
    ('Título 4', 'imagen4.jpg', 'Descripción del post 4', 15),
    ('Título 5', 'imagen5.jpg', 'Descripción del post 5', 30),
    ('Título 6', 'imagen6.jpg', 'Descripción del post 6', 5),
    ('Título 7', 'imagen7.jpg', 'Descripción del post 7', 20),
    ('Título 8', 'imagen8.jpg', 'Descripción del post 8', 12),
    ('Título 9', 'imagen9.jpg', 'Descripción del post 9', 18),
    ('Título 10', 'imagen10.jpg', 'Descripción del post 10', 22),
    ('Título 11', 'imagen11.jpg', 'Descripción del post 11', 14),
    ('Título 12', 'imagen12.jpg', 'Descripción del post 12', 7),
    ('Título 13', 'imagen13.jpg', 'Descripción del post 13', 28),
    ('Título 14', 'imagen14.jpg', 'Descripción del post 14', 11),
    ('Título 15', 'imagen15.jpg', 'Descripción del post 15', 19)
;`;

const selectAllPosts = `SELECT * FROM posts;`;

const createNewPost = `INSERT INTO posts (titulo, img, descripcion) VALUES
    ($1, $2, $3) RETURNING *`;

const verifyPostExist = 'SELECT * FROM posts WHERE id = $1';
const updatePost =
	'UPDATE posts SET titulo = $1, img = $2, descripcion = $3, likes = $4 WHERE id = $5 RETURNING *';

module.exports = {
	selectAllPosts,
	createTablePosts,
	insertPosts,
	createNewPost,
	verifyPostExist,
	updatePost,
};
