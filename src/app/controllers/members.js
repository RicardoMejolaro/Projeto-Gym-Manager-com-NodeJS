const { age, date } = require('../../lib/utils');

module.exports = {
  index(req, res) {
    return res.render('members/index', { members });
  },
  create(req, res) {
    return res.render('members/create');
  },
  post(req, res) {
    //Validação todos os campos obrigatórios
    const keys = Object.keys(req.body)

    for (const key of keys) {
      if (req.body[key] == "")
        return res.send("Por gentileza preencha todos os campos!")
    }

    let { avatar_url, name, birth, gender, services } = req.body;

    return

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