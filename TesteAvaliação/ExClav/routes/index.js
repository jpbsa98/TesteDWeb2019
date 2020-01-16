var express = require('express');
var router = express.Router();
var axios = require('axios')
const apikey = '?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ'

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('http://clav-api.dglab.gov.pt/api/entidades' + apikey)
  .then(dados=>{
    res.render('index', { lista: dados.data});
  })
  .catch(erro=>res.render('erro',{error: erro}))
});

router.get('/entidade/:id', function(req, res, next) {
  axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+ req.params.id + apikey)
  .then(dados=>{
    axios.get('http://clav-api.dglab.gov.pt/api/entidades/' + req.params.id + '/tipologias' + apikey)
    .then(tipos=>{
      axios.get('http://clav-api.dglab.gov.pt/api/entidades/' + req.params.id + '/intervencao/dono' + apikey)
      .then(donos=>{
        axios.get('http://clav-api.dglab.gov.pt/api/entidades/' + req.params.id + '/intervencao/participante' + apikey)
        .then(part=>{
          //console.log(tipos.data)
          //console.log(donos.data)
          console.log(part.data)
          res.render('entidade', { lista: dados.data,lista1:tipos.data,lista2:donos.data,lista3:part.data});
        })
        .catch(erro=>res.render('erro',{error:erro}))
      })
      .catch(erro=>res.render('erro',{error:erro}))
    })
    .catch(erro=>res.render('erro',{error:erro}))
  })
  .catch(erro=>res.render('erro',{error: erro}))
});



module.exports = router;
