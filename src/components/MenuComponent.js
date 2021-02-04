import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'

class Menu extends Component{
    constructor(props){
        super(props);

        this.state = {
            selectedDish : null
        }
    }

    onDishSelect(dish){
        this.setState({selectedDish: dish})
    }

    renderDish(dish){
        if(dish != null){
            return (
                <Card className = "col-12 offset-md-4 col-md-4">
                    <CardImg object src = {dish.image} alt = {dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return (
                <div></div>
            );
        }
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key = {dish.id} className = "col-12 offset-md-1 col-md-4">
                    <Card onClick = {() => this.onDishSelect(dish)}>
                        <CardImg className = "d-flex mr-3 img-thumbnail align-self-center" height = "300px" width = "80%" object src = {dish.image} alt = {dish.name}></CardImg>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className = "container">
                <div className = "row">
                    {menu}
                </div>
                <br></br>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}


export default Menu;