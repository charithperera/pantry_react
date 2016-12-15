import _ from 'lodash'
import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar'
import FoodList from './components/food_list'
import MyFoodList from './components/my_food_list'
import FoodDetail from './components/food_detail'
import MyStats from './components/my_stats'
import axios from 'axios';
import 'react-select/dist/react-select.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedFood: null,
      foods: [],
      myFoods: [],
      myStats: {
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0
      }
    }

    // this.foodSearch('apple');
    // this.addFood = this.addFood.bind(this);
    this.removeFood = this.removeFood.bind(this);
  }

  componentDidMount() {
    // console.log(JSON.parse(localStorage.state));
    // this.setState(JSON.parse(localStorage.state));
  }

  foodSearch(term) {
    axios.get(`http://localhost:3000/search?term=${term}`).then(function(res) {
      this.setState({
        foods: res.data,
        selectedFood: res.data[0]
      })
    }.bind(this));
  }


  addFood = (selectedFood) => {
    this.setState({selectedFood})
    if (!this.state.myFoods.includes(selectedFood)) {
      this.setState({
        myFoods: this.state.myFoods.concat(selectedFood)
      })
      this.updateCalories(selectedFood, 1)
    }
    // localStorage.state = JSON.stringify(this.state);
  }

  removeFood(selectedFood) {
    const index = (this.state.myFoods.findIndex(function(food) {
      return food === selectedFood
    }))

    const myFoods = this.state.myFoods;
    myFoods.splice(index, 1)
    this.setState({
      myFoods: myFoods
    })

    this.updateCalories(selectedFood, -1)
    // localStorage.state = JSON.stringify(this.state);

  }

  updateCalories = (update) => {
    switch (update.type) {
      case "serving_quantity":
        console.log(update.food)
        break;
      default:

    }
    // let newStats = {};
    // if (addOrRemove ===  1) {
    //   newStats = {
    //     calories: this.state.myStats.calories += selectedFood.calories,
    //     protein: this.state.myStats.protein += selectedFood.protein,
    //     carbs: this.state.myStats.carbs += selectedFood.carbs,
    //     fat: this.state.myStats.fat += selectedFood.fat
    //   }
    // }
    // else {
    //   newStats = {
    //     calories: this.state.myStats.calories -= selectedFood.calories,
    //     protein: this.state.myStats.protein -= selectedFood.protein,
    //     carbs: this.state.myStats.carbs -= selectedFood.carbs,
    //     fat: this.state.myStats.fat -= selectedFood.fat
    //   }
    // }
    //
    // this.setState({ myStats: newStats })
  }

  render() {
    const foodSearch = _.debounce((term) => {
      if (term !== '') {
        this.foodSearch(term)
      }
    }, 100);

    return (
      <div className="container">
        <div className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="sr-only">Toggle Navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">PANTRY Calorie Counter</a>
              </div>
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                </ul>
              </div>
            </div>
        </div>
        <div className="content">
          <div className = "row">
            <MyStats stats={this.state.myStats}/>
          </div>
          <div className="row">
            <SearchBar onSearchTermChange={foodSearch} />
          </div>
          <div className="row">
            <div className="col-md-3">
              <h3>Find Food</h3>
              <FoodList
                onFoodSelect={this.addFood}
                foods={this.state.foods}
              />
            </div>
            <div className="col-md-6">
              <h3>Nutrition</h3>
              <FoodDetail food={this.state.selectedFood}/>
            </div>
            <div className="col-md-3">
              <h3>My Food</h3>
              {/*
              <FoodList
                foods={this.state.myFoods}
                onFoodSelect={this.removeFood}
              />
              */}
              <MyFoodList
                foods={this.state.myFoods}
                onQuantityChange={this.updateCalories}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
