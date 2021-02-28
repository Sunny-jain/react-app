import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from "react-router-dom";


class Header extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            isNavOpen : false
        };

    }

    toggleNav = () =>{
        this.setState({
            isNavOpen : !this.state.isNavOpen
        })
    }

    render() {

       
        return(
            <>
                <Navbar dark expand = "md">
                    <div className="container">
                        <NavbarToggler onClick = {this.toggleNav} />
                        <NavbarBrand className = "mr-auto" href="/">Restorente Con Fusion</NavbarBrand>
                        <Collapse isOpen = {this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className = "nav-link" to = "/home"><span className = "fa fa-home"> Home</span></NavLink>
                                </NavItem>
                            </Nav>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className = "nav-link" to = "/aboutus"><span className = "fa fa-info"> About Us</span></NavLink>
                                </NavItem>
                            </Nav>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className = "nav-link" to = "/contact"><span className = "fa fa-phone "> Contact Us</span></NavLink>
                                </NavItem>
                            </Nav>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className = "nav-link" to = "/menu"><span className = "fa fa-address-card"> Menu</span></NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
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