const { age, date } = require('../../lib/utils');
const Member = require('../models/Member');

module.exports = {
  index(req, res) {
    Member.all((members) => {
      return res.render('members/index', { members });
    });
  },
  create(req, res) {
    Member.instructorsSelectOptions((options) => {
      return res.render('members/create', { instructorOptions: options });
    });
  },
  post(req, res) {
     //Validação todos os campos obrigatórios
     const keys = Object.keys(req.body)

     for (const key of keys) {
       if (req.body[key] == "")
         return res.send("Por gentileza preencha todos os campos!")
     }

     const { avatar_url, name, email, birth, gender, blood, weight, height, instructor } = req.body;

     const data = [
       avatar_url,
       name,
       email,
       date(birth).iso,
       gender,
       blood,
       weight,
       height,
       instructor
     ];

     Member.create(data, (member) => {
      return res.redirect(`/members/${member.id}`);
     });
  },
  show(req, res) {
    Member.find(req.params.id, (member) => {
      if(!member) return res.send('Membro não localizado!');

      member.birth = date(member.birth).birthDay;

      return res.render('members/show', { member })
    });
    
  },
  edit(req, res) {
    Member.find(req.params.id, (member) => {
      if(!member) return res.send('Membro não localizado!');

      member.birth = date(member.birth).iso;

      Member.instructorsSelectOptions((options) => {
        return res.render('members/edit', { member, instructorOptions: options });
      });

    });
  },
  put(req, res) {
    //Validação todos os campos obrigatórios
    const keys = Object.keys(req.body)

    for (const key of keys) {
      if (req.body[key] == "")
        return res.send("Por gentileza preencha todos os campos!")
    }
    
    const { avatar_url, name, email, birth, gender, blood, weight, height, instructor, id } = req.body;

    const data = [
      avatar_url,
      name,
      email,
      date(birth).iso,
      gender,
      blood,
      weight,
      height,
      instructor,
      id
    ];

    Member.update(data, () => {
     return res.redirect(`/members/${id}`);
    });
  },
  delete(req, res) {
    Member.delete(req.body.id, () => {
      return res.redirect(`/members`);
     });
  },
}

