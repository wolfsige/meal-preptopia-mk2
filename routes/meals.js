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

// POST
router.post('/', mealsCtrl.create)

export { router }