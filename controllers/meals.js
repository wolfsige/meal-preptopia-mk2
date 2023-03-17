import { Meal } from '../models/meal.js'

function newMeal(req, res) {
  res.render('meals/new', {
    title: "Add Meal"
  })
}

function create(req, res){
  req.body.vegan = !!req.body.vegan
  req.body.vegetarian = !!req.body.vegetarian

  if (req.body.ingredient) {
		// remove whitespace next to commas
    req.body.ingredient = req.body.ingredient.split(', ')
  }

  // remove empty properties
  for (let key in req.body) {
	  if (req.body[key] === '') delete req.body[key]
	}

  const meal = new Meal(req.body)

  meal.save()
    .then(item => {
      res.redirect('/meals/index')
    })
    .catch(err => {
      if (err) return res.render('meals/new')
    })
}

function index(req, res) {
  Meal.find({})
  .then(meals => {
    res.render("meals/index", {
      meals: meals,
      title: "All Meals"
    })
  })
}

function show(req, res){
  Meal.findById(req.params.id)
  .then( meal => {
    res.render('meals/show', {
      title: 'Meal Detail',
      meal: meal
    })
  })
}

function deleteMeal(req, res){
  Meal.findByIdAndDelete(req.params.id)
  .then(meal => {
    res.redirect('/meals/index')
  })
}

export {
  newMeal as new,
  create,
  index,
  show,
  deleteMeal as delete
}