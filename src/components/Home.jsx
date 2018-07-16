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
                     <Image src = "assests/davidA.jpeg" circle className="profile-pic" />
                     <h3>David</h3>
                     <p>There isn't a rule. You just practice and find out which way works best for you.In your world you have total and absolute power..</p>
                   </Col>
                   <Col xs={12} sm={4} className="person-wrapper">
                     <Image src = "assests/Faith-nd-Abi.jpeg" circle className="profile-pic" />
                     <h3>Faith Nd Abigail</h3>
                     <p>Let your heart take you to wherever you want to be..Always Smile</p>
                   </Col>
                   <Col xs={12} sm={4} className="person-wrapper">
                     <Image src = "assests/emma.jpeg" circle className="profile-pic" />
                     <h3>Emmanuel</h3>
                     <p>It looks so good, I might as well not stop. Just a happy little shadow that lives in there. It's amazing what you can do with a little love in your heart...</p>
                   </Col>
               </Row>
               
                
                
                
            </Grid>    
        )
    }

}