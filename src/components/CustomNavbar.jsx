import React, {Component} from 'react';
import {Navbar, Nav, Navitem} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class CustomNavbar extends Component{
    render(){
        return(
            <Navbar default collapseOnSelect>
               <Navbar.Header>
                 <Navbar.Brand>
                   <Link to = "">Family-Bio</Link>
                </Navbar.Brand>
                    <Navbar.Toggle />
                  </Navbar.Header>  
                <Navbar.Collapse>
                   <Nav pullRight>
                     <Navitem eventKey = {1} componentClass = {Link} to ="">
                        Home
                     </Navitem>  
                     <Navitem eventKey = {2} componentClass = {Link} to ="/about">
                        About
                     </Navitem> 
                     <Navitem eventKey = {3} componentClass = {Link} to ="/news">
                        News
                     </Navitem>   
                   </Nav>
                </Navbar.Collapse>            
            </Navbar>
        )
    }
}