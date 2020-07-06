const fs = require('fs');
const data = require('../file-system/data.json');
const { age, date } = require('../utils/utils');

//Index
exports.index = (req, res) => {
  return res.render('instructors/index', { instructors: data.instructors });
}
//Create
exports.create = (req, res) => {
  return res.render('instructors/create'); 
}
//Post
exports.post = (req, res) => {
  //Validação todos os campos obrigatórios
  const keys = Object.keys(req.body)

  for (const key of keys) {
    if (req.body[key] == "")
      return res.send("Por gentileza preencha todos os campos!")
  }

  let { avatar_url, name, birth, gender, services } = req.body;

  birth = Date.parse(birth);

  let id = 1;
  const lastMember = data.members[data.members.length - 1];

  if (lastMember) {
    id = Number(lastMember.id + 1);
  }  
  
  const created_at = Date.now();

  data.instructors.push({
    id,
    avatar_url,
    name,
    birth,
    gender,
    services,
    created_at
  });

  fs.writeFile('file-system/data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send('Erro ao salvar o arquivo!')

    return res.redirect(`/instructors/${id}`);
  });

}
//Show
exports.show = (req, res) => {
  const { id } = req.params

  const foundInstructor = data.instructors.find((instructor) => {
    return instructor.id == id;
  });

  if (!foundInstructor) return res.send('Instrutor não encontrado!');

  const instructor = {
    ...foundInstructor,
    age: age(foundInstructor.birth),
    services: foundInstructor.services.split(','),
    created_at: new Intl.DateTimeFormat("en-GB").format(foundInstructor.created_at)
  }

  return res.render('instructors/show', { instructor });

}
//Edit
exports.edit = (req, res) => {
  const { id } = req.params

  const foundInstructor = data.instructors.find((instructor) => {
    return instructor.id == id;
  });

  if (!foundInstructor) return res.send('Instrutor não encontrado!');

  const instructor = {
    ...foundInstructor,
    birth: date(foundInstructor.birth).iso
  }

  return res.render('instructors/edit', { instructor });
}
//Put
exports.put = (req, res) => {
  const { id } = req.body;
  let index = 0;

  const foundInstructor = data.instructors.find((instructor, foundIndex) => {
    if (instructor.id == id) {
      index = foundIndex;

      return true
    }
  });

  if (!foundInstructor) return res.send('Instrutor não encontrado!');

  const instructor = {
    ...foundInstructor,
    ...req.body,
    id: Number(req.body.id),
    birth: Date.parse(req.body.birth)
  }

  data.instructors[index] = instructor;

  fs.writeFile('file-system/data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send('Erro ao salvar dados no arquivo!');

    return res.redirect(`/instructors/${id}`);
  });
}
//Delete
exports.delete = (req, res) => {
  const { id } = req.body

  const filteredInstructors = data.instructors.filter((instructor) => {
    return instructor.id != id;
  });

  data.instructors = filteredInstructors;

  fs.writeFile('file-system/data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send('Erro ao salvar dados no arquivo!');

    return res.redirect('/instructors');

  });
}
