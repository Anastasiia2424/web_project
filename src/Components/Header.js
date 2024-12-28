import React, { Component } from 'react';
import {  Nav, Navbar, Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from '../Pages/Home';
import Donuts from '../Pages/Donuts';
import Comments from '../Pages/Comments';
// import Contacts from '../Pages/Contacts';
import Maps from '../Pages/Map';

import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect variant="light" className="header p-1">
                    <Container className="header-container px-5">
                        <Navbar.Brand href="/" className="brand">Ponchyk & Co</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" class="d-flex flex-row-reverse bd-highlight">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/donuts">Donuts</Nav.Link>
                                <Nav.Link href="/comments">Comments</Nav.Link>
                                {/* <Nav.Link href="/contacts">Contacts</Nav.Link> */}
                                <Nav.Link href="/about">About us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/donuts" element={<Donuts />} />
                        <Route path="/comments" element={<Comments />} /> 
                        {/* <Route path="/contacts" element={<Contacts />} /> */}
                        <Route path="/about" element={<Maps />} />
                    </Routes>
                </Router>
            </>
        );
    }
}
