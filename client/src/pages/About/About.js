import React from "react";
import Hero from "../../components/Hero/index";
import Container from "../../components/Container/index";
import Row from "../../components/Row/index";
import Column from "../../components/Column/index";

 import './about.css';

function About() {
    return (
      <div>
        <Hero>
          <h1>GOOGLE BOOKS REACT APP</h1>
        </Hero>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Column size="md-12">
              <h1 className="welcome">Welcome To My Google Books App</h1>
            </Column>
          </Row>
          <Row>
            <Column size="md-12">
              <p>
                This application will allow a user to search for books and save books that they
                <br></br>
                 are interested in using a database to store the books that the user saved
              </p>
              <br></br>
              <p>Technologies Used for this project:</p>
              <ul>
                <li>React, Framework website is built on</li>
                <li>Axios, to make an API call for the Books</li>
                <li>React Router DOM, for the seperate pages</li>
                <li>Mongo DB to save information for saved books</li>
              </ul>
              <br></br>
              <p className="ty"> Thank you for visiting. - Andrew Kessler</p>
            </Column>
          </Row>
        </Container>
        
      </div>
    );
  }
  
  export default About;