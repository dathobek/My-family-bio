import React, { Component } from 'react';
import {Image, Grid, Col} from 'react-bootstrap';
import './About.css';

export default class About extends Component{
    render(){
        return(
            <div>
               <Image src="assets/all.jpeg" ClassName="header-image"/> 
              <Grid>
                <Col xm={12} sm={8} smOffset={2}>
                 <Image src="assets/davidA.jpeg" ClassName="about-profile-pic" rounded/>
                 <h3>D Boy</h3>
                </Col>
              </Grid>     
            </div>
        )
    }
}