import mongoose from 'mongoose'

//short hand mongoose.Schema class
const Schema = mongoose.Schema
	
const mealSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  cookTime: {
    type: Number,
    default: 45
  },
  ingredient: {
    type: [String],
    required: true
  },
  guide: {
    type: [String],
  },
  vegan: {type: Boolean, default: false},
  vegetarian: {type: Boolean, default: false},
})

const Meal = mongoose.model('Meal', mealSchema)

export {
  Meal
}