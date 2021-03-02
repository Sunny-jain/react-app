import React, { Component } from 'react';
import { Form, Button, Input, FormGroup, Label, Col, FormFeedback } from "reactstrap";
import { Link } from 'react-router-dom';

class Contact extends Component {
    constructor(props){
        super(props);

        this.state = {
            firstname : '',
            lastname : '',
            telnum : '',
            email : '',
            agree : false,
            contactType : 'Tel.',
            message : '',
            touched : {
                firstname : false,
                lastname : false,
                email : false,
                telnum : false
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.validate = this.validate.bind(this);
    }

    handleBlur = (feild) => (event) =>{
        this.setState({
            touched : {
                ...this.state.touched, [feild] : true
            }
        })
    }
    

    validate(firstname, lastname, telnum, email){
        const error  = {
            firstname : '',
            lastname : '',
            telnum : '',
            email : ''
        }
        if(!this.state.touched.firstname){
            error.firstname = 'First name is empty';
        }
        if(!this.state.touched.lastname){
            error.lastname = 'Last name is empty';
        }
        if(!this.state.touched.telnum){
            error.telnum = 'Tel. number is empty';
        }
        if(!this.state.touched.email){
            error.email  = 'Email is empty';
        }

        if(this.state.touched.firstname && firstname.length < 3){
            error.firstname = 'First name too short';
        }
        else if(this.state.touched.firstname && firstname.length > 10){
            error.firstname = 'First name too long';
        }

        if(this.state.touched.lastname && lastname.length < 3){
            error.lastname = 'Last name too short';
        }
        else if(this.state.touched.lastname && lastname.length > 10){
            error.lastname = 'Last name too long';
        }

        const reg = /^\d+$/;
        if(this.state.touched.telnum && !reg.test(telnum)){
            error.telnum = 'Tel. number should not contains alphabets';
        } 
        else if(this.state.touched.telnum && telnum.length != 10){
            error.telnum = 'Tel. number should contains 10 digits';
        }

        if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1){
            error.email = 'Email should contain a @ sign';
        }
        return error;
    }

    handleInputChange(event){
        var target = event.target;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        var name = target.name;
        this.setState({ [name] : value });
    }

    handleSubmit(event){
        event.preventDefault();
    }


    render(){
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);

        return(
            <div className="container">
                <div className="row">
                    <ol className="col-12 breadcrumb">
                        <li className="breadcrumb-item"><Link to = "/home">Home</Link></li>
                        <li className="breadcrumb-item active">Contact Us</li>
                    </ol>
                    <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit = {this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor = "firstname" md = {2}>First Name</Label>
                                <Col md = {10}>
                                    <Input type = "text" id = "firstname" name = "firstname" valid = {errors.firstname === ''} invalid = {errors.firstname !== ''} placeholder = "First Name" value = {this.state.firstname} onChange = {this.handleInputChange} onBlur = {this.handleBlur('firstname')}></Input>
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor = "lastname" md = {2}>Last Name</Label>
                                <Col md = {10}>
                                    <Input type = "text" id = "lastname" name = "lastname" valid = {errors.lastname === ''} invalid = {errors.lastname !== ''} placeholder = "Last Name" value = {this.state.lastname} onChange = {this.handleInputChange} onBlur = {this.handleBlur('lastname')}></Input>
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor = "telnum" md = {2}>Contact Number</Label>
                                <Col md = {10}>
                                    <Input type = "tel" id = "telnum" name = "telnum" valid = {errors.telnum === ''} invalid = {errors.telnum !== ''} placeholder = "Contact Number" value = {this.state.telnum} onChange = {this.handleInputChange} onBlur = {this.handleBlur('telnum')}></Input>
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor = "email" md = {2}>E-mail</Label>
                                <Col md = {10}>
                                    <Input type = "email" id = "email" name = "email" valid = {errors.email === ''} invalid = {errors.email !== ''} placeholder = "E-mail" value = {this.state.email} onChange = {this.handleInputChange} onBlur = {this.handleBlur('email')}></Input>
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md = {{size : 6, offset : 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type = "checkbox" name = "agree" checked = {this.state.agree} onChange = {this.handleInputChange}/>{' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md = {{size : 3, offset : 1}}>
                                    <Input type = "select" name = "contactType" value = {this.state.contactType} onChange = {this.handleInputChange}>
                                        <option>
                                            Tel.
                                        </option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor = "feedback" md = {2}>Your Feedback</Label>
                                <Col md = {10}>
                                    <Input type = "textarea" name = "message" id = "message" rows = "12" placeholder = "Feedback" value = {this.state.message} onChange = {this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md = {{size : 10, offset : 2}}>
                                    <Button type = "submit" color = "primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;