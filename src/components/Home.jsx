import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css'


export default class Home extends Component{
    render(){
        return (
            <Grid>
                <Jumbotron>
                    <h1>Welcome To Athobe's Family</h1>
                    <p>This is God's Family</p>
                 <Link to="/About">
                   <Button bsStyle="primary">About</Button>
                 </Link>  
                </Jumbotron> 
               <Row className="show-grid text-center">
                   <Col xs={12} sm={4} className="person-wrapper">
                     <Image src = "assests/david.jpeg" circle className="profile-pic" />
                     <h3>David</h3>
                     <p>There isn't a rule. You just practice and find out which way works best for you. See there, told you that would be easy. I thought today we would do a happy little picture.</p>
                   </Col>
                   <Col xs={12} sm={4} className="person-wrapper">
                     <Image src = "assests/david.jpeg" circle className="profile-pic" />
                     <h3>David</h3>
                     <p>There isn't a rule. You just practice and find out which way works best for you. See there, told you that would be easy. I thought today we would do a happy little picture.</p>
                   </Col>
                   <Col xs={12} sm={4} className="person-wrapper">
                     <Image src = "assests/david.jpeg" circle className="profile-pic" />
                     <h3>David</h3>
                     <p>There isn't a rule. You just practice and find out which way works best for you. See there, told you that would be easy. I thought today we would do a happy little picture.</p>
                   </Col>
               </Row>
               
                
                
                
            </Grid>    
        )
    }

}