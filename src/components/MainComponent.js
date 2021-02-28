import { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from "../shared/dishes"; 
import Details from './DishDetailComponent';
import Header from "./HeaderComponent";
import Home from './HomeComponent';
import Footer from "./FooterComponent";
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component{

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }

  
  
  render()  {

    
    return (
      <div>
          <Header />
          <Switch>
            <Route path = "/home" component = {() => <Home />} />
            <Route exact path = "/menu" component = {() => <Menu dishes = {this.state.dishes}/>} />
            <Redirect to = "/home"/>
          </Switch>  
          <Footer />
      </div>
    );
  }
}
export default Main;
