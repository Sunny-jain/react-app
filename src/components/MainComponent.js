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
import { postComment, fetchComments, fetchDishes, fetchPromo, fetchLeaders, postFeedback } from '../redux/actionCreates';
import { actions } from "react-redux-form";
import { TransitionGroup, CSSTransition } from "react-transition-group";


const mapStateToProps = state =>{
  return {
    dishes : state.dishes,
    comments : state.comments,
    leaders : state.leaders,
    promotions : state.promotions
  }
}

const mapDispatchToProps = dispatch => ({
  
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes : () => {dispatch(fetchDishes())},
  resetFeedbackform : () => {dispatch(actions.reset('feedback'))},
  fetchComments : () => {dispatch(fetchComments())},
  fetchPromo : () => {dispatch(fetchPromo())},
  fetchLeaders : () => {dispatch(fetchLeaders())},
  postFeedback : (firstname, lastname, telnum, email, agree, contactType, message) => {dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, message))}
});

class Main extends Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchPromo();
    this.props.fetchComments();
    this.props.fetchLeaders();
  }
  
  render()  {

    const DishWithId = (props) =>{
      return (
        <Details dish = {this.props.dishes.dishes.filter((dish) => dish.id === parseInt(props.match.params.dishId, 10))[0]}
          dishesLoading = {this.props.dishes.isLoading}
          dishesErrMsg = {this.props.dishes.errmsg}
          comment = {this.props.comments.comments.filter((comment) => comment.dishId === parseInt(props.match.params.dishId, 10))} 
          postComment={this.props.postComment}
          commentErrMsg = {this.props.comments.errmsg}
        />
      )
    }
    
    return (
      <div>
          <Header />
          <TransitionGroup>
            <CSSTransition key = {this.props.location.key} classNames = "page" timeout = {300}>
              <Switch>
                <Route path = "/home" component = {() => <Home 
                  dish = {this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                  dishesLoading = {this.props.dishes.isLoading}
                  dishesErrMsg = {this.props.dishes.errmsg}
                  promotion = {this.props.promotions.promotions.filter((promotion) => promotion.featured)[0]}
                  leader = {this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                  leadersLoading = {this.props.leaders.isLoading}
                  leadersErrMsg = {this.props.leaders.errmsg}
                  promoLoading = {this.props.promotions.isLoading}
                  promoErrMsg = {this.props.promotions.errmsg}
                  />} />
                <Route exact path = "/menu" component = {() => <Menu dishes = {this.props.dishes}/>} />
                <Route path = "/menu/:dishId" component = {DishWithId} />
                <Route exact path = "/contact" component = {() => <Contact resetFeedbackform = {this.props.resetFeedbackform} postFeedback = {this.props.postFeedback}/>} />
                <Route exact path = "/aboutus" component = {() => <About 
                  leaders = {this.props.leaders.leaders} 
                  leadersLoading = {this.props.leaders.isLoading} 
                  leadersErrMsg = {this.props.leaders.errmsg}
                  />} />
                <Redirect to = "/home"/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          <Footer />
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));