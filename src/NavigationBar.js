import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export const NavigationBar = () => (
    <Navbar collapseOnSelect expand="lg"  variant="dark" style ={{backgroundColor :'#00d09c'}}>
        <Navbar.Brand href="#"><i class="fa fa-bank"></i> GROWW</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                {/* <Nav.Link href="/apply"><i class="fa fa-file-text-o" aria-hidden="true"></i> Apply</Nav.Link>
                <Nav.Link href="/deposit"><i class="fa fa-usd" aria-hidden="true"></i> Deposit</Nav.Link> */}
            </Nav>
        </Navbar.Collapse>
        <Nav>
            <Nav.Link href="#"><i class="fa fa-user-circle" aria-hidden="true"></i>Back</Nav.Link>
            {/* <Nav.Link href="/login">
                <i class="fa fa-power-off" aria-hidden="true"></i> Logout
            </Nav.Link> */}
        </Nav>
    </Navbar>
)
