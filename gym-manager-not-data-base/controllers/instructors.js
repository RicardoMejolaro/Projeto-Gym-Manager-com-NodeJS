// create
exports.post = (req, res) => {
  //Validação todos os campos obrigatórios
  const keys = Object.keys(req.body)

  for (const key of keys) {
    if(req.body[key] == "") 
      return res.send("Por gentileza preencha todos os campos!")
  }

  return res.send(req.body);
}