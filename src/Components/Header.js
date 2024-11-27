import React, { Component } from 'react';
import { 
    FormControl, 
    Nav, 
    Navbar, 
    Container, 
    Form, 
    Button 
} from "react-bootstrap";
import logo from "./logo192.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from '../Pages/Home';
import Comments from '../Pages/Comments';
import Contacts from '../Pages/Contacts';
import Maps from '../Pages/Map';

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="danger" variant="light">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            /> Ponchyk & Co
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/comments">Comments</Nav.Link>
                                <Nav.Link href="/contacts">Contacts</Nav.Link>
                                <Nav.Link href="/maps">Maps</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                />
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/comments" element={<Comments />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/maps" element={<Maps />} />
                    </Routes>
                </Router>
            </>
        );
    }
}
