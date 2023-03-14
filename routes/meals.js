import { Router } from 'express'
import { get } from 'mongoose'

const router = Router()

// GET localhost:3000/meals
router.get('/', function(req, res) {
  res.send('respond with a resource')
})

// GET /meals/new
router.get('/new', mealCtrl.new)

export { router }
