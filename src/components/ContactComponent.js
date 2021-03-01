import React from 'react';
import { Link } from 'react-router-dom';

function Contact(props) {
    return(
        <div className="container">
            <div class="row">
                <ol class="col-12 breadcrumb">
                    <li class="breadcrumb-item"><Link to = "/home">Home</Link></li>
                    <li class="breadcrumb-item active">Contact Us</li>
                </ol>
                <div class="col-12">
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
            <div class="row row-content">
                <div class="col-12">
                    <h3>Send us your Feedback</h3>
                </div>
                <div class="col-12 col-md-9">
                    <form>
                        <div class="form-group row">
                            <label for="firstname" class="col-md-2 col-form-label">First Name</label>
                            <div class="col-md-10">
                                <input type="text" class="form-control" id="firstname" name="firstname" placeholder="First Name" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="lastname" class="col-md-2 col-form-label">Last Name</label>
                            <div class="col-md-10">
                                <input type="text" class="form-control" id="lastname" name="lastname" placeholder="Last Name" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="telnum" class="col-12 col-md-2 col-form-label">Contact tel.</label>
                            <div class="col-5 col-md-2">
                                <input type="tel" class="form-control" id="contrycode" name="contrycode" placeholder="Country code" />
                            </div>
                            <div class="col-7 col-md-8">
                                <input type="tel" class="form-control" id="telnum" name="telnum" placeholder="Tel. Number" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="email" class="col-md-2 col-form-label">E mail</label>
                            <div class="col-md-10">
                                <input type="email" class="form-control" id="email" name="email" placeholder="Email" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-6 offset-md-2">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" name="approve" id="approve" value="" />
                                    <label for="approve" class="form-check-label"><strong> May we contact U?</strong></label>
                                </div>
                            </div>
                            <div class="col-md-3 offset-md-1">
                                <select class="form-control">
                                    <option>Tel.</option>
                                    <option>E mail</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="Feedback" class="col-md-2 col-form-label">Your Feedback</label>
                            <div class="col-md-10">
                                <textarea id="Feedback" class="form-control" name="Feedback" rows="12"></textarea>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="offset-md-2 col-md-10">
                                <button type="button" class="btn btn-primary">Submit Feedback</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;