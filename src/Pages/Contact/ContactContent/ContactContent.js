import React from 'react';
import { Container, Form } from 'react-bootstrap';
import './ContactContent.css';

const ContactContent = () => {
    return (
        <Container>
             <div className="courses-intro-text contact-header">
                <h1>Contact <span style={{color:'blue'}}>Us</span> </h1>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam totam iure vitae nesciunt quaerat sed, et ullam placeat ut? Impedit dolorem nostrum itaque molestias nemo delectus animi fuga illum magnam earum pariatur reiciendis, explicabo id velit facilis, necessitatibus cum! Magnam.</p>
            </div>
            <div className="content">
                <div className="content-form">
                    <section>
                        <i class="fa fa-map-marker fa-2x" aria-hidden="true"></i>
                        <h2>address</h2>
                    <p>
                        Dhaka, <br/>
                       Bangladesh <br/>
                    </p>
                    </section>
                    <section>
                    <i class="fa fa-phone fa-2x" aria-hidden="true"></i>
                    <h2>Phone</h2>
                    <p>+8801878901548</p>
                </section>

                <section>
                    <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
                    <h2>E-mail</h2>
                    <p>info@bikecity.com</p>
                </section>
                </div>
            
            <div className="form w-50 mt-5 mb-5">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Write Something</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <button className="btn btn-primary">Submit</button>
                </Form>

                
            </div>
            </div>
        </Container>
    );
};

export default ContactContent;