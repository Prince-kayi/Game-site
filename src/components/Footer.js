import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

function Footer(){
    return(
        <div>
           <div className="foot">
               <Container>
                   <Row>
                   <Col className="red_col">
                       {/* todo add the logo, copyright, website name, and 4 social icons with fontawesome */}
                   logo
                   icons
                   </Col>
                       <Col>
                       <h4>movies</h4>
                       <p>Exclusives</p>
                       <p>Top Rated</p>
                       <p>...</p>
                       <p>...</p>
                       <p>...</p>
                       </Col>
                       <Col>
                       <h4>stars</h4>
                       <p>Interveiw</p>
                       <p>...</p>
                       <p>...</p>
                       <p>...</p>
                       </Col>
                       <Col>
                       <h4>community</h4>
                       <p>Headlines</p>
                       <p>...</p>
                       <p>...</p>
                       <p>...</p>
                       </Col>
                   </Row>
               </Container>

           </div>
           <div className="copyright">
               <Container>
               <p>© Copyright 2021 by the gaming website!</p>
               </Container>
           </div>
        </div>
    );
    
    
    }
    export default Footer