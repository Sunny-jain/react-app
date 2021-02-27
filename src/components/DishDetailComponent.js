import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle  } from 'reactstrap'


    function RenderComments({comments}){
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
            return <div></div>
            
        }
    }

    function RenderDish(props){
        return (
            <Card >
                <CardImg object src = {props.dish.image} alt = {props.dish.name}></CardImg>
                <CardBody>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>{props.dish.description}</CardText>
                    </CardBody>
            </Card>
        );
    }

    const DishDetailComponent = (props) => {
        
        
        return (
            <div className="row">
                <div className = "col-12 offset-md-1 col-md-4">
                    <RenderDish 
                        dish = {props.dish}
                    />
                </div>
                <div className="col-12 offset-md-1 col-md-4">
                    <h3>Comments</h3>
                    <RenderComments 
                        comments = {props.dish.comments}
                    />
                </div>
            </div>  
        );
    }


export default DishDetailComponent;