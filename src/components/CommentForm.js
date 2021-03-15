import React,{ Component } from "react";
import { Button, Modal, ModalBody, ModalHeader, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            isModalOpen : false, 
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal = () =>{
        this.setState({
            isModalOpen : !this.state.isModalOpen
        })
    }

    handleSubmit = (event) =>{
        alert(JSON.stringify(event))
    }

    render(){
        return(
            <>
                <Button outline onClick = {this.toggleModel} onClick = {this.toggleModal}>
                    <span className = "fa fa-pencil"> Submit Comment</span>
                </Button>
                <Modal isOpen = {this.state.isModalOpen} toggle = {this.toggleModal}>
                    <ModalHeader toggle = {this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit = {this.handleSubmit}>
                            <Row className = "form-group">
                                <Label htmlFor = "Rating" sm = {12}>Rating</Label>
                                <Col sm = {12}>
                                    <Control.select model = ".rating" name = "rating" className = "form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className = "form-group">
                                <Label htmlfor = "Name" sm = {12}>Your Name</Label>
                                <Col sm = {12}>
                                    <Control.text model = ".name" 
                                    name = "name" 
                                    id = "name" 
                                    className = "form-control" 
                                    placeholder = "Your Name"
                                    validators = {{
                                        required,
                                        minLength : minLength(3),
                                        maxLength : maxLength(15)
                                    }}
                                    />
                                    <Errors 
                                         className = "text-danger"
                                         model = ".name"
                                         show = "touched"
                                         messages={{
                                            required: "Required",
                                            minLength: "Must be greater than 2 characters",
                                            maxLength: "Must be 15 characters or less"
                                          }}
                                    />
                                </Col>
                            </Row>
                            <Row className = "form-group">
                                <Label htmlFor = "comment" sm = {12}>Comments</Label>
                                <Col sm = {12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size : 2}}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

export default CommentForm;