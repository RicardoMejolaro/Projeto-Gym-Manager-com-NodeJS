const { age, date } = require('../../lib/utils');
const db = require('../../config/db');

module.exports = {
  index(req, res) {
    return res.render('instructors/index');
  },
  create(req, res) {
    return res.render('instructors/create');
  },
  post(req, res) {
    //Validação todos os campos obrigatórios
    const keys = Object.keys(req.body)

    for (const key of keys) {
      if (req.body[key] == "")
        return res.send("Por gentileza preencha todos os campos!")
    }

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
     const { avatar_url, name, birth, gender, services} = req.body   

    const values = [
      avatar_url,
      name,
      date(birth).iso,
      gender,
      services,
      date(Date.now()).iso
    ];

    db.query(query, values, (err, results) => {
      if (err) return res.send('Erro no banco de dados!');

      return res.redirect(`/instructors/${results.rows[0].id}`);
    });

  },
  show(req, res) {
    return
  },
  edit(req, res) {
    return
  },
  put(req, res) {
    //Validação todos os campos obrigatórios
    const keys = Object.keys(req.body)

    for (const key of keys) {
      if (req.body[key] == "")
        return res.send("Por gentileza preencha todos os campos!")
    }
    return
  },
  delete(req, res) {
    return
  },
}

