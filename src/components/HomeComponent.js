import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap'
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform } from "react-animation-components";

const RenderCard = (props) =>{
    if(props.loading){
        return(
            <Loading />
        )
    }
    else if(props.errmsg){
        return(
            <p>{props.errmsg}</p>
        )
    }
    else{
        return(
            <FadeTransform in
                transformProps = {{
                    exitTransform : 'scale(0.5) translateY(-50)'
                }}>
                <Card>
                    <CardImg src = { baseUrl + props.item.image} alt = {props.item.name} />
                    <CardBody>
                        <CardTitle>
                            <b>{props.item.name}</b>
                        </CardTitle>
                        {props.item.designation ? <CardSubtitle>{props.item.designation}</CardSubtitle> : null}
                        <CardText>{props.item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        ); 
    }
}

const Home = (props) =>
{
    return(
        <div className = "container">
            <div className = "row align-items-start">
                <div className = "col-12 col-md m-1">
                    <RenderCard item = {props.dish} loading = {props.dishesLoading} errmsg = {props.dishesErrMsg}/>
                </div>
                <div className = "col-12 col-md m-1">
                    <RenderCard item = {props.promotion} loading = {props.promoLoading} errmsg = {props.promoErrMsg}/>
                </div>
                <div className = "col-12 col-md m-1">
                    <RenderCard item = {props.leader}/>
                </div>
            </div>
        </div>
    )
}

export default Home;