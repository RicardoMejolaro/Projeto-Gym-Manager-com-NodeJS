const db = require('../../config/db');

module.exports = {
  all(callback) {
    db.query(`SELECT * FROM members`, (err, results) => {
      if (err) throw `Erro no banco de dados! ${err}`;

      callback(results.rows);
    });
  },
  create(data, callback) {
    const query = `
          INSERT INTO members (
            avatar_url,
            name,
            email,
            birth,
            gender,
            blood,
            weight,
            height
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
          RETURNING id
        `

    db.query(query, data, (err, results) => {
      if (err) throw `Erro no banco de dados! ${err}`;

      callback(results.rows[0]);

    });
  },
  find(id, callback) {
    db.query(`SELECT * FROM members where id = $1`, [id], (err, results) => {
      if (err) throw `Erro no banco de dados! ${err}`;

      callback(results.rows[0]);
    });
  },
  update(data, callback) {
    const query = `
          UPDATE members SET 
          avatar_url=($1),
          name=($2),
          email=($3),
          birth=($4),
          gender=($5),
          blood=($6),
          weight=($7),
          height=($8)
          WHERE id = $9
    `
    db.query(query, data, (err, results) => {
      if (err) throw `Erro no banco de dados! ${err}`;

      callback();

    });
  },
  delete(id, callback) {
    db.query(`DELETE FROM members WHERE id = $1`, [id], (err, results) => {
      if (err) throw `Erro no banco de dados! ${err}`;

      callback();
    });
  }
}