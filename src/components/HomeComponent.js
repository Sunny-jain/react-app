import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap'
import { Loading } from "./LoadingComponent";

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
            <Card>
                <CardImg src = {props.item.image} alt = {props.item.name} />
                <CardBody>
                    <CardTitle>
                        <b>{props.item.name}</b>
                    </CardTitle>
                    {props.item.designation ? <CardSubtitle>{props.item.designation}</CardSubtitle> : null}
                    <CardText>{props.item.description}</CardText>
                </CardBody>
            </Card>
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
                    <RenderCard item = {props.promotion}/>
                </div>
                <div className = "col-12 col-md m-1">
                    <RenderCard item = {props.leader}/>
                </div>
            </div>
        </div>
    )
}

export default Home;