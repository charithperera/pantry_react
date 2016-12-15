import React, { Component } from 'react'
import './my_food_item.css';
import Select from 'react-select';


class MyFoodItem extends Component {
  constructor(props) {
    super(props);
    this.food = props.food
    this.onQuantityChange = this.onQuantityChange.bind(this);
  }

  onQuantityChange(servings) {
    const updateInfo = {
      type: "serving_quantity",
      value: servings,
      food: this.food,

    }
    this.props.onQuantityChange(updateInfo);
  }

  render() {
    return (
      <li className="list-group-item">
        <div className="row food-info">
          <div className="col-md-12">
            {this.food.brand} {this.food.name}
          </div>
        </div>
        <div className="row food-nutrition">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-5">
                <input onChange={event => this.onQuantityChange(event.target.value)} type="number" defaultValue="1"/>
              </div>
              <div className="col-md-7">
                <select className="form-control">
                  <option value="servings" defaultValue>Servings</option>
                  <option value="units">{this.food.serving_type}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  }
};

export default MyFoodItem;
