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
  // meal.save(function(err) {
	// 	if (err) return res.redirect('/meals/new')
  //   res.redirect('/meals/new')
  // })

  meal.save()
    .then(item => {
      res.redirect('/meals/new')
    })
    .catch(err => {
      res.status(400).send("unable to save to database")
    })
}

export {
  newMeal as new,
  create
}