import React, { Component } from 'react';
import {Image, Grid, Col} from 'react-bootstrap';
import './About.css';

export default class About extends Component{
    render(){
        return(
            <div>
               <Image src="assets/allFam.jpg" className="header-image"/> 
              <Grid>
                <Col xm={12} sm={8} smOffset={2}>
                 <Image src="assets/davidA.jpeg" className="about-profile-pic" rounded/>
                 <h3>D Boy</h3>
                 <p>The most important thing in the world is family and love. ..</p>
                 <p>I am blessed to have so many great things in my life - family, friends and God. All will be in my thoughts daily.</p>
                 <p>You need a strong family because at the end, they will love you and support you unconditionally. Luckily, I have two Sons,two Daughters,A wife, mom and sisters.</p>
                 <p>A real man loves his wife, and places his family as the most important thing in life. Nothing has brought me more peace and content in life than simply being a good husband and father.</p>
                 <p>Family always gonna be there. The material things, they come and go.</p>
                </Col>
              </Grid>     
            </div>
        )
    }
}