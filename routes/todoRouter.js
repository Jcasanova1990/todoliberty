const todoctrl = require('../controllers/todoController.js')
const express = require('express')
const router = express.router()


router.get('/', todoCtrl.index)
router.post('/', todoctrl.create)
router.put('/:id', todoctrl.update)
router.delete('/:id', todoctrl.destroy)
router.get('/:id', todoctrl.show)

module.exports = router