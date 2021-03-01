import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom';

function renderMenuItems(props){
    return(
        <Link to = {`/menu/${props.dish.id}`}>
            <Card>
                <CardImg className = "d-flex mr-3 img-thumbnail align-self-center" height = "300px" width = "80%" object src = {props.dish.image} alt = {props.dish.name}></CardImg>
                <CardImgOverlay>
                    <CardTitle>{props.dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    );
}

export default renderMenuItems