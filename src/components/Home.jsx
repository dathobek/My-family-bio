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
                </Jumbotron> 
                <Link to="/About">
                   <Button bsStyle="primary">About</Button>
                </Link>
            </Grid>    
        )
    }

}