var express = require('express');
var router = express.Router();
var Obra = require('../controllers/obras')

/* GET home page. */
router.get('/obras', function(req, res, next) {
  if(req.query.compositor == undefined && req.query.instrumento == undefined){
  Obra.listar()
  .then(dados=>{
    res.jsonp(dados)
  })
  .catch(erro=>{
    res.jsonp(erro)
  })
  }
  else if(req.query.compositor != undefined && req.query.instrumento == undefined){
  console.log('entrei')
  console.log(req.query.compositor)
  Obra.listarCompositor(req.query.compositor)
  .then(dados=>{
    res.jsonp(dados)
  })
  .catch(erro=>{
    res.jsonp(erro)
  })
  }
  else if(req.query.compositor == undefined && req.query.instrumento != undefined){
    console.log('entrei')
    console.log(req.query.instrumento)
    Obra.listarInstrumento(req.query.instrumento)
    .then(dados=>{
      res.jsonp(dados)
    })
    .catch(erro=>{
      res.jsonp(erro)
    })
    }
});

router.get('/obrasQuant', function(req, res, next) {
  Obra.listarPartituras()
  .then(dados=>{
    res.jsonp(dados)
  })
  .catch(erro=>{
    res.jsonp(erro)
  })
});

router.get('/obras/:id', function(req, res, next) {
  Obra.listarId(req.params.id)
  .then(dados=>{
    res.jsonp(dados)
  })
  .catch(erro=>{
    res.jsonp(erro)
  })
});


router.get('/tipos', function(req, res, next) {
  Obra.tipos()
  .then(dados=>{
    res.jsonp(dados)
  })
  .catch(erro=>{
    res.jsonp(erro)
  })
});

module.exports = router;
