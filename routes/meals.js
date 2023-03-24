import { Router } from 'express'
import { get } from 'mongoose'
import * as mealsCtrl from '../controllers/meals.js'


const router = Router()

// GET localhost:3000/meals
router.get('/', function(req, res) {
  res.send('respond with a resource')
})

// GET
router.get('/new', mealsCtrl.new)
router.get('/index', mealsCtrl.index)
router.get('/:id', mealsCtrl.show)
router.get("/:id/edit", mealsCtrl.edit)

// POST
router.post('/', mealsCtrl.create)

// DELETE
router.delete('/:id', mealsCtrl.delete)

// PUT
router.put("/:id", mealsCtrl.update)

export { router }