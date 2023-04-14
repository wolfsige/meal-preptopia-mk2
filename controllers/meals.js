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

  if (req.body.guide) {
		// remove whitespace next to commas
    req.body.guide = req.body.guide.split(', ')
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
      if (err) return res.render('meals/new', {
        title: "Add Meal"
      })
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

function edit(req,res){
  Meal.findById(req.params.id)
  .then(meal => {
    res.render('meals/edit', {
      meal: meal,
      title: "Edit Meal"
    })
  })
}

function update(req, res){

  if (req.body.ingredient) {
		// remove whitespace next to commas
    req.body.ingredient = req.body.ingredient.split(',')
  }
  
  for (let key in req.body) {
    if(req.body[key] === '') delete req.body[key]
  }
  Meal.findByIdAndUpdate(req.params.id, req.body)
  .then(meal => {
    res.redirect(`/meals/${meal._id}`)
  })
}

export {
  newMeal as new,
  create,
  index,
  show,
  deleteMeal as delete,
  edit,
  update
}