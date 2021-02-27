import { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from "../shared/dishes"; 
import Details from './DishDetailComponent';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

class Main extends Component{

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish : null
    };
  }

  
  onDishSelect(dish){
    this.setState({selectedDish: dish})
  }

    renderDish(dish){
        
        if(dish != null){
            return (
                <Details dish = {dish} />
            );
        }
        else{
            return (
                <div></div>
            );
        }
    }

  render()  {
    return (
      <div>
          <Header />
            <div className = "container">
                <Menu 
                    dishes = {this.state.dishes}
                    onClick = {(dish) => this.onDishSelect(dish)}
                />
                <br></br>
                {this.renderDish(this.state.selectedDish)}
            </div>
            <Footer />
      </div>
    );
  }
}
export default Main;
