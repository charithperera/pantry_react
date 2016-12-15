import React from 'react'
import './food_list_item.css';


const FoodListItem = (props) => {
  const food = props.food;
  const onFoodSelect = props.onFoodSelect;
  const addFood = props.addFood;
  return (
    <li onClick={() => onFoodSelect(food)} className="list-group-item food-item">
      <div className="row food-info">
        <div className="col-md-12">
          <h5>{food.brand} {food.name}</h5>
        </div>
      </div>
      <div className="row food-nutrition">
        <div className="col-md-2 col-md-offset-1">
          <h6>Calories</h6>{food.calories}
        </div>
        <div className="col-md-2">
          <h6>Protein</h6>{food.protein}
        </div>
        <div className="col-md-2">
          <h6>Carbs</h6>{food.carbs}
        </div>
        <div className="col-md-2">
          <h6>Fat</h6>{food.fat}
        </div>
        <div className="col-md-2">
          <button onClick={() => addFood(food)} type="button" className="btn btn-success add">Add</button>
        </div>
      </div>
    </li>
  )
}

export default FoodListItem;
