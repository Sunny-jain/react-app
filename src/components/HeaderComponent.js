import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalBody, ModalHeader, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from "react-router-dom";


class Header extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            isNavOpen : false,
            isModalOpen :false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

    }

    toggleNav = () =>{
        this.setState({
            isNavOpen : !this.state.isNavOpen
            
        })
    }

    toggleModal = () =>{
        this.setState({
            isModalOpen : !this.state.isModalOpen
        })
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }

    render() {

       
        return(
            <>
                <Navbar dark expand = "md">
                    <div className="container">
                        <NavbarToggler onClick = {this.toggleNav} />
                        <NavbarBrand className = "mr-auto" to = "/home">Restorente Con Fusion</NavbarBrand>
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
                            <Nav navbar className = "ml-auto">
                                <NavItem>
                                    <a role = "button" className = "login" onClick = {this.toggleModal}><span className = "fa fa-sign-in"> Login</span></a>    
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
                <Modal isOpen = {this.state.isModalOpen} toggle = {this.toggleModal}>
                    <ModalHeader toggle = {this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

export default Header;