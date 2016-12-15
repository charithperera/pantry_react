import React from 'react'
import MyFoodItem from './my_food_item'
// import './food_list.css';

const MyFoodList = (props) => {
  const myfoodItems = props.foods.map(function(food) {
    return (
      <MyFoodItem
        onFoodSelect={props.onFoodSelect}
        key={food.id}
        food={food}
        onQuantityChange={props.onQuantityChange}
        onDelete={props.onDelete}
      />
    );
  });

  return (
    <div className="food-list">
      <ul className="list-group">
        {myfoodItems}
      </ul>
    </div>
  )
}

export default MyFoodList;
