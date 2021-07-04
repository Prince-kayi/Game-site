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
               <img src="Users/PRINCE/Desktop/sandbox/public/game_logo.jpg"/>
       {/* todo add the logo, copyright, website name, and 4 social icons with fontawesome */}

                      
<li><a href="facebook"> <i class="fab fa-facebook-f"  aria-hidden="true"></i></a></li>
<li><a href="twiiter"> <i class="fab fa-twitter" aria-hidden="true"></i></a></li>
<li><a href="instagram"> <i class="fab fa-instagram" aria-hidden="true"></i></a></li>
<li><a href="linkedin"> <i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                   
                   </Col>
                       <Col>
                       <h4>movies</h4>
                       <p>Exclusives</p>
                       <p>Top Rated</p>
                       <p>Box Office</p>
                       <p>Coming soon</p>
                       <p>In Theaters</p>
                       </Col>
                       <Col>
                       <h4>stars</h4>
                       <p>Interveiw</p>
                       <p>Starmeter</p>
                       <p>Gallery</p>
                       <p>Awards</p>
                       </Col>
                       <Col>
                       <h4>community</h4>
                       <p>Headlines</p>
                       <p>Polls</p>
                       <p>Events</p>
                       <p>Social</p>
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