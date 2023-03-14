import mongoose from 'mongoose'

//short hand mongoose.Schema class
const Schema = mongoose.Schema
	
const mealSchema = new Schema({
  title: String,
  cookTime: Number,
  ingredient: [String],
  guide: [String],
  vegan: Boolean,
  vegetarian: Boolean,
})

const Meal = mongoose.model('Meal', mealSchema)

export {
  Meal
}