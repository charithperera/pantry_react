import React, { Component } from 'react'
import './my_food_item.css';
import Select from 'react-select';


class MyFoodItem extends Component {
  constructor(props) {
    super(props);
    this.food = props.food
    this.onQuantityChange = this.onQuantityChange.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onQuantityChange(servings) {
    this.food.quantity = +servings
    const updateInfo = {
      type: "serving_quantity",
      value: servings,
      food: this.food,

    }
    this.props.onQuantityChange(updateInfo);
  }

  onDelete(food) {
    this.props.onDelete(food);
  }

  render() {
    return (
      <li className="list-group-item">
        <div className="row food-info">
          <div className="col-md-12">
            <h5>{this.food.brand} {this.food.name}</h5>
          </div>
        </div>
        <div className="row food-nutrition">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4">
                <input min="1" onChange={event => this.onQuantityChange(event.target.value)} type="number" defaultValue="1"/>
              </div>
              <div className="col-md-5">
                <select className="form-control">
                  <option value="servings" defaultValue>Servings</option>
                  <option value="units">{this.food.serving_type}</option>
                </select>
              </div>
              <div className="col-md-3 pull-left">
                <button onClick={() => this.onDelete(this.food)} type="button" className="btn btn-danger delete">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  }
};

export default MyFoodItem;
