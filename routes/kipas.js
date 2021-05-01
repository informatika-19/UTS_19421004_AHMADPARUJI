const router = require('express').Router()
const kipasController = require('../controller/kipas')

router.post('/insert', (req, res)=> {
    kipasController.create(req.body)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  
  router.get('/getall', (req, res)=> {
    kipasController.showAllData()
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  
  router.get('/getbyid/:id', (req, res)=> {
    kipasController.showbyID(req.params.id)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  
  router.put('/update/:id', (req, res)=> {
   kipasController.update(req.params.id, req.body)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  
  router.delete('/delete/:id', (req, res)=> {
    kipasController.delete(req.params.id)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  module.exports = router
