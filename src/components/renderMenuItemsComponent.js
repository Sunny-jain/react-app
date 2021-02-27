import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'

function renderMenuItems(props){
    return(
        <Card onClick = {() =>props.onClick(props.dish)}>
            <CardImg className = "d-flex mr-3 img-thumbnail align-self-center" height = "300px" width = "80%" object src = {props.dish.image} alt = {props.dish.name}></CardImg>
            <CardImgOverlay>
                <CardTitle>{props.dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

export default renderMenuItems