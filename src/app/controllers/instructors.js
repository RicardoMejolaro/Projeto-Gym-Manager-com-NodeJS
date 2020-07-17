const { age, date } = require('../../lib/utils');
const Instructor = require('../models/Instructor');

module.exports = {
  index(req, res) {
    Instructor.all((instructors) => {
      return res.render('instructors/index', { instructors });
    });
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

     const { avatar_url, name, birth, gender, services } = req.body;

     const data = [
       avatar_url,
       name,
       date(birth).iso,
       gender,
       services,
       date(Date.now()).iso
     ];

     Instructor.create(data, (instructor) => {
      return res.redirect(`/instructors/${instructor.id}`);
     });
  },
  show(req, res) {
    Instructor.find(req.params.id, (instructor) => {
      if(!instructor) return res.send('Instrutor não localizado!');

      instructor.age = age(instructor.birth);
      instructor.services = instructor.services.split(',');
      instructor.created_at = date(instructor.created_at).format;

      return res.render('instructors/show', { instructor })
    });
    
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

