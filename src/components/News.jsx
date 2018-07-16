import React, {Component} from 'react';
import {Grid,Row,Col,Image} from 'react-bootstrap';
import './News.css';



export default class News extends Component{
    render(){
        return(
            <div>
              <Image src="assets/star.jpg" className="display"/>
              <Grid>
                <h2>NEWS</h2>  
                <Row>
                  <Col xm={12} sm={8}>

                  </Col>
                  <Col xm={12} sm={4}>
                  <Image src="" className=""/>

                  </Col>
                </Row>   
              </Grid>    
            </div>
        )
    }
}