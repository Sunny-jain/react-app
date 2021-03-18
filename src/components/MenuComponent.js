import React from 'react';
import RenderMenuItems from './renderMenuItemsComponent'
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";


const Menu = (props) => {
    const menu = props.dishes.dishes.map((dish) => {
        return (
            <div key = {dish.id} className = "col-12 offset-md-1 col-md-4">
               <RenderMenuItems 
                    dish = {dish}
               />
            </div>
        );
    });
    
    if(props.dishes.isLoading){
        return (
            <div className = "container"> 
                <div className = "row">
                    <Loading />
                </div>
            </div>
        )
    }
    else if(props.dishes.errmsg){
        return(
            <div className = "container"> 
                <div className = "row">
                    <h4>{props.dishErrMsg}</h4>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className = "container">
                <div className="row">
                    <ol className="col-12 breadcrumb">
                        <li className="breadcrumb-item"><Link to = "/home">Home</Link></li>
                        <li className="breadcrumb-item active">Menu</li>
                    </ol>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className = "row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;