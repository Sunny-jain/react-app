import React from 'react';
import RenderMenuItems from './renderMenuItemsComponent'
import { BreadcrumbItem, Breadcrumb } from "reactstrap";
import { Link } from "react-router-dom";

const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div key = {dish.id} className = "col-12 offset-md-1 col-md-4">
               <RenderMenuItems 
                    dish = {dish}
               />
            </div>
        );
    });

    return (
        <div className = "container">
            <div class="row">
                <ol class="col-12 breadcrumb">
                    <li class="breadcrumb-item"><Link to = "/home">Home</Link></li>
                    <li class="breadcrumb-item active">Menu</li>
                </ol>
                <div class="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>
            </div>
            <div className = "row">
                {menu}
            </div>
        </div>
    );
}

export default Menu;