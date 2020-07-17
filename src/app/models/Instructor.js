const db = require('../../config/db');

module.exports = {
  all(callback) {
    db.query(`SELECT * FROM instructors`, (err, results) => {
      if (err) return res.send('Erro no banco de dados!');

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
      if (err) return res.send('Erro no banco de dados!');

      callback(results.rows[0]);

    });
  },
  find(id, callback) {
    db.query(`SELECT * FROM instructors where id = $1`, [id], (err, results) => {
      if (err) return res.send('Erro no banco de dados!');

      callback(results.rows[0]);
    });
  }
}