import React from 'react'
import {Card,Button} from 'react-bootstrap';
import DATA from '../Data';
import './Services.css';
import { Container,Row,Col } from 'react-bootstrap'; 

export default function Services() {
    const card = (props) => {
         return(
            <Container>
            <Row>
              <Col sm={4}>sm=4</Col>
              <Col sm={4}>sm=4</Col>
              <Col sm={4}>sm=4</Col>
            </Row>
            
          </Container>
        );
    //     <div className="col-md-4 mb-5 pb-5">
    //       <div className="card text-center py-5" key={props.id}>
    //         <img src=".." className="card-img-top" alt={props.title}/>
    //         <div className="card-body">
    //             <h5 className="card-title">{props.title}</h5>
    //             <p className="card-text">{props.description}</p>
    //         </div>
    //      </div>
    //  </div>
    
    }
  return (
    <div>
        <div className="container">
            <div className="row"> 
                <div className="col-12 text-center py-4 mb-5">
                    <h1>Services</h1>
                    <hr/>

             </div> 
         </div>
         <div className="row">
             {DATA.map(card)}

         </div>
         
      </div>
 </div>
  )
}
