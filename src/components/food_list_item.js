import React from 'react'

const FoodListItem = (props) => {
  const food = props.food;
  const onFoodSelect = props.onFoodSelect;
  return (
    <li onClick={() => onFoodSelect(food)} className="list-group-item">
      <div className="row food-info">
        <div className="col-md-12">
          {food.brand} {food.name}
        </div>
      </div>
      <div className="row food-nutrition">
        <div className="col-md-12">
          Cals {food.calories} Carbs {food.carbs} Protein {food.protein} Fat {food.fat}
        </div>
      </div>
    </li>
  )
}

export default FoodListItem;
