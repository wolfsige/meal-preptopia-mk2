import { Router } from 'express'

const router = Router()

// GET localhost:3000/
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Meal Preptopia',
    user: req.user
  })
})

export { router }
