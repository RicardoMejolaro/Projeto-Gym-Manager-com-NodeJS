const db = require('../../config/db');

module.exports = {
  all(callback) {
    db.query(`SELECT * FROM instructors`, (err, results) => {
      if (err) throw `Erro no banco de dados! ${err}`;

      callback(results.rows);
    });
  },
  create(data, callback) {
    const query = `
          INSERT INTO instructors (
            avatar_url,
            name,
            birth,
            gender,
            services,
            created_at
          ) VALUES ($1, $2, $3, $4, $5, $6)
          RETURNING id
        `

    db.query(query, data, (err, results) => {
      if (err) throw `Erro no banco de dados! ${err}`;

      callback(results.rows[0]);

    });
  },
  find(id, callback) {
    db.query(`SELECT * FROM instructors where id = $1`, [id], (err, results) => {
      if (err) throw `Erro no banco de dados! ${err}`;

      callback(results.rows[0]);
    });
  },
  update(data, callback) {
    const query = `
          UPDATE INSTRUCTORS SET 
          avatar_url=($1),
          name=($2),
          birth=($3),
          gender=($4),
          services=($5)
          WHERE id = $6
    `
    db.query(query, data, (err, results) => {
      if (err) throw `Erro no banco de dados! ${err}`;

      callback();

    });
  },
  delete(id, callback) {
    db.query(`DELETE FROM instructors WHERE id = $1`, [id], (err, results) => {
      if (err) throw `Erro no banco de dados! ${err}`;

      callback();
    });
  }
}