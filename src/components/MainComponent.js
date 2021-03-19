import { Component } from 'react';
import Menu from './MenuComponent';
import Details from './DishDetailComponent';
import Header from "./HeaderComponent";
import Contact from "./ContactComponent";
import Home from './HomeComponent';
import Footer from "./FooterComponent";
import About from "./AboutUsComponent";
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import { addComment, fetchDishes } from '../redux/actionCreates';
import { actions } from "react-redux-form";


const mapStateToProps = state =>{
  return {
    dishes : state.dishes,
    comments : state.comments,
    leaders : state.leaders,
    promotions : state.promotions
  }
}

const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes : () => {dispatch(fetchDishes())},
  resetFeedbackform : () => {dispatch(actions.reset('feedback'))}
});

class Main extends Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchDishes();
  }
  
  render()  {

    const DishWithId = (props) =>{
      return (
        <Details dish = {this.props.dishes.dishes.filter((dish) => dish.id === parseInt(props.match.params.dishId, 10))[0]}
          dishesLoading = {this.props.dishes.isLoading}
          dishesErrMsg = {this.props.dishes.errmsg}
          comment = {this.props.comments.filter((comment) => comment.dishId === parseInt(props.match.params.dishId, 10))} 
          addComment={this.props.addComment}
        />
      )
    }
    
    return (
      <div>
          <Header />
          <Switch>
            <Route path = "/home" component = {() => <Home 
              dish = {this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading = {this.props.dishes.isLoading}
              dishesErrMsg = {this.props.dishes.errmsg}
              promotion = {this.props.promotions.filter((promotion) => promotion.featured)[0]}
              leader = {this.props.leaders.filter((leader) => leader.featured)[0]}
              />} />
            <Route exact path = "/menu" component = {() => <Menu dishes = {this.props.dishes}/>} />
            <Route path = "/menu/:dishId" component = {DishWithId} />
            <Route exact path = "/contact" component = {() => <Contact resetFeedbackform = {this.props.resetFeedbackform}/>} />
            <Route exact path = "/aboutus" component = {() => <About leaders = {this.props.leaders}/>} />
            <Redirect to = "/home"/>
          </Switch>  
          <Footer />
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));