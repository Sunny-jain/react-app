import React, {Component} from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';


class Header extends Component{
    render() {
        return(
            <>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">Restorente Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className = "container">
                        <div className = "row row-header">
                            <div className = "col col-sm-6">
                                <h1>Ristorente Con Fusion</h1>
                                <p>We take the inspiration from the World's best cuisines, and create a unique experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        )
    }
}

export default Header;