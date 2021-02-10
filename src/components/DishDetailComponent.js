import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle  } from 'reactstrap'

class DishDetailComponent extends Component {

    renderComments(comments){
        let format = {year : "numeric", month : "short", day : "numeric"}
        if(comments != null){
            return comments.map(comment => (
                <ul key = {comment.id} className="list-unstyled">
                    <li className = "mb-1">
                        {comment.comment}
                    </li>
                    <li className="mb-2">
                        -- {comment.author}, {new Date(comment.date).toLocaleDateString("en-US", format)}
                    </li>
                </ul>
            ))
        }
        else{
            return <div>dsdsdsdsdsdsd</div>
            
        }
    }

    render() {
        const { dish } = this.props;
        
        return (
            <div className="row">
                <div className = "col-12 offset-md-1 col-md-4">
                    <Card >
                        <CardImg object src = {dish.image} alt = {dish.name}></CardImg>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 offset-md-1 col-md-4">
                    <h3>Comments</h3>
                    {this.renderComments(dish.comments)}
                </div>
            </div>  
        );
    }
}

export default DishDetailComponent;