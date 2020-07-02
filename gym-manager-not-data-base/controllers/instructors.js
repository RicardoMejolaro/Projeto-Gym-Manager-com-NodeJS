const fs = require('fs');
const data = require('../file-system/data.json')

// create
exports.post = (req, res) => {
  //Validação todos os campos obrigatórios
  const keys = Object.keys(req.body)

  for (const key of keys) {
    if(req.body[key] == "") 
      return res.send("Por gentileza preencha todos os campos!")
  }

  let { avatar_url, name, birth, gender, services } = req.body;

  birth = Date.parse(birth);
  const id = Number(data.instructors.length + 1);
  const created_at = Date.now();

  data.instructors.push({
    id,  
    avatar_url,
    name,
    birth,
    gender,
    services,
    created_at});

  fs.writeFile('file-system/data.json', JSON.stringify(data, null, 2), (err) => {
      if(err) return res.send('Erro ao salvar o arquivo!')

      return res.redirect('/instructors')
  });

}