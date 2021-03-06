import React from "react";
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { TiSocialInstagram } from 'react-icons/ti'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaTwitch } from 'react-icons/fa'
import { FaRebel } from 'react-icons/fa'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Home() {
  return (
    <>
    <Navbar sticky="top" className="navbar navbar-light bg-dark ">
    <Container className="main d-flex  justify-content-center">
        <h1 className="navbar-brand mb-0 text-warning  ">
          <FaRebel
            size="30px"
            className="border rounded-circle border-warning mr-2 mb-2"
          />
          Chase Graffeo
        </h1>
      </Container>
      </Navbar >
    <br></br>
    <Container className="container">
    <div className="text-center">
        <img id="pic" src={require("./me.jpg")} className="rounded-circle" alt=""></img>
    </div>
    <br></br>
    <p className="d-flex justify-content-center text-warning"> My name is Chase.</p>
    <p className="d-flex justify-content-center text-warning">I enjoy spending time with my son, video games, anime, traveling and all food. </p>
</Container>
   <br></br>
<Container className="main d-flex justify-content-center">
      <Card className="card" style={{ width: 600 }}>
        <Card.Body className="card-body d-flex justify-content-center text-warning bg-secondary  ">
          <AiFillFacebook size="30px" />
          <a href="https://www.facebook.com/chase.graffeo.7" className="d-flex justify-content-center text-warning ">
            <h4>Lets be Friends</h4>
          </a>
        </Card.Body>
      </Card>
    </Container>
    <br></br>
   <Container className="main d-flex justify-content-center">
   <Card className="card " style={{ width: 600 }}>
     <Card.Body className="card-body d-flex justify-content-center text-warning bg-secondary " >
       <TiSocialInstagram size="30px" />
       <a href="https://www.instagram.com/chasegraffeo/" className="d-flex justify-content-center text-warning">
         <h4>My Instagram</h4>
       </a>
     </Card.Body>
   </Card>
 </Container>
<br></br>
<Container className="main d-flex justify-content-center">
      <Card className="card" style={{ width: 600 }}>
        <Card.Body className="card-body d-flex justify-content-center text-warning bg-secondary" >
          <TiSocialInstagram size="30px" />
          <a href="https://www.instagram.com/graffeophotos/" className="d-flex justify-content-center text-warning" >
            <h4> My Photography</h4>
          </a>
        </Card.Body>
      </Card>
    </Container>
    <br></br>
    <Container className="main d-flex justify-content-center">
    <Card className="card" style={{ width: 600 }}>
        <Card.Body className=" d-flex justify-content-center text-warning bg-secondary">
            <FaTwitch size="30px" />
            <a href="https://www.twitch.tv/diamondart" className="d-flex justify-content-center text-warning" >
                <h4>My Twitch</h4>
            </a>
        </Card.Body>
    </Card>
</Container>
<br></br>
<Container className="main d-flex justify-content-center">
<Card className="card" style={{ width: 600 }}>
  <Card.Body className="card-body d-flex justify-content-center text-warning bg-secondary">
    <AiFillGithub size="30px" />
    <a href="https://github.com/chasegraffeo" className="d-flex justify-content-center text-warning">
      <h4>My Github</h4>
    </a>
  </Card.Body>
</Card>
</Container>
<br></br>
</>
  );
}

export default Home;
