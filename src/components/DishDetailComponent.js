import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle  } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';



    function RenderComments({comments}){
        let format = {year : "numeric", month : "short", day : "numeric"}
        if(comments != null){
            return <>{comments.map(comment => (
                
                    <ul key = {comment.id} className="list-unstyled">
                        <li className = "mb-1">
                            {comment.comment}
                        </li>
                        <li className="mb-2">
                            -- {comment.author}, {new Date(comment.date).toLocaleDateString("en-US", format)}
                        </li>
                    </ul>
                    
                
            ))}<CommentForm />
            </>
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
            <div className = "container">
                <div class="row">
                    <ol class="col-12 breadcrumb">
                        <li class="breadcrumb-item"><Link to = "/home">Home</Link></li>
                        <li class="breadcrumb-item"><Link to = "/menu">Menu</Link></li>
                        <li class = "breadcrumb-item active">{props.dish.name}</li>
                    </ol>
                    <div class="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className = "col-12 offset-md-1 col-md-4">
                        <RenderDish 
                            dish = {props.dish}
                        />
                    </div>
                    <div className="col-12 offset-md-1 col-md-4">
                        <h3>Comments</h3>
                        <RenderComments 
                            comments = {props.comment}
                        />
                    </div>
                </div>
            </div>
        );
    }


export default DishDetailComponent;