import React from 'react';
import RenderMenuItems from './renderMenuItemsComponent'

const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div key = {dish.id} className = "col-12 offset-md-1 col-md-4">
               <RenderMenuItems 
                    dish = {dish}
                    onClick = {props.onClick}
               />
            </div>
        );
    });

    return (
        
            <div className = "row">
                {menu}
            </div>

    );
}

export default Menu;