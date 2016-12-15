import React from 'react'
import FoodListItem from './food_list_item'
import './food_list.css';

const FoodList = (props) => {
  const foodItems = props.foods.map(function(food) {
    return (
      <FoodListItem
        addFood={props.addFood}
        onFoodSelect={props.onFoodSelect}
        key={food.id}
        food={food}
      />
    );
  });

  return (
    <div className="food-list">
      <ul className="list-group">
        {foodItems}
      </ul>
    </div>
  )
}

export default FoodList;
