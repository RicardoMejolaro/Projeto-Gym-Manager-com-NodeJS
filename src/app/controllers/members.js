const fs = require('fs');
const data = require('../file-system/data.json');
const { date } = require('../../lib/utils');

//Index
exports.index = (req, res) => {
  return res.render('members/index', { members: data.members });
}
//Create
exports.create = (req, res) => {
  return res.render('members/create'); 
}
//Post
exports.post = (req, res) => {
  //Validação todos os campos obrigatórios
  const keys = Object.keys(req.body)

  for (const key of keys) {
    if (req.body[key] == "")
      return res.send("Por gentileza preencha todos os campos!")
  }

  let { avatar_url, name, email, birth, gender, blood, weight, height } = req.body;

  birth = Date.parse(birth);

  let id = 1;
  const lastMember = data.members[data.members.length - 1];

  if (lastMember) {
    id = Number(lastMember.id + 1);
  }  

  data.members.push({
    id,
    avatar_url,
    name,
    email,
    birth,
    gender,
    blood,
    weight,
    height
  });

  fs.writeFile('file-system/data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send('Erro ao salvar o arquivo!');

    return res.redirect(`/members/${id}`);
  });

}
//Show
exports.show = (req, res) => {
  const { id } = req.params

  const foundMember = data.members.find((member) => {
    return member.id == id;
  });

  if (!foundMember) return res.send('Instrutor não encontrado!');

  const member = {
    ...foundMember,
    birth: date(foundMember.birth).birthDay
  }

  return res.render('members/show', { member });

}
//Edit
exports.edit = (req, res) => {
  const { id } = req.params

  const foundMember = data.members.find((member) => {
    return member.id == id;
  });

  if (!foundMember) return res.send('Instrutor não encontrado!');

  const member = {
    ...foundMember,
    birth: date(foundMember.birth).iso
  }

  return res.render('members/edit', { member });
}
//Put
exports.put = (req, res) => {
  const { id } = req.body;
  let index = 0;

  const foundMember = data.members.find((member, foundIndex) => {
    if (member.id == id) {
      index = foundIndex;

      return true
    }
  });

  if (!foundMember) return res.send('Instrutor não encontrado!');

  const member = {
    ...foundMember,
    ...req.body,
    id: Number(req.body.id),
    birth: Date.parse(req.body.birth)
  }

  data.members[index] = member;

  fs.writeFile('file-system/data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send('Erro ao salvar dados no arquivo!');

    return res.redirect(`/members/${id}`);
  });
}
//Delete
exports.delete = (req, res) => {
  const { id } = req.body

  const filteredMembers = data.members.filter((member) => {
    return member.id != id;
  });

  data.members = filteredMembers;

  fs.writeFile('file-system/data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send('Erro ao salvar dados no arquivo!');

    return res.redirect('/members');

  });
}
