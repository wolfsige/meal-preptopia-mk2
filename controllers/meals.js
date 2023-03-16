import { Meal } from '../models/meal.js'

function newMeal(req, res) {
  res.render('meals/new')
}

function create(req, res){
  req.body.vegan = !!req.body.vegan
  req.body.vegetarian = !!req.body.vegetarian

  if (req.body.ingredient) {
		// remove whitespace next to commas
    req.body.ingredient = req.body.ingredient.split(', ')
  }

  const meal = new Meal(req.body)

  meal.save()
    .then(item => {
      res.redirect('/meals/index')
    })
    .catch(err => {
      res.status(400).send("unable to save to database")
    })
}

function index(req, res) {
  Meal.find({})
  .then(meals => {
    res.render("meals/index", {
      meals
    })
  })
}

export {
  newMeal as new,
  create,
  index
}