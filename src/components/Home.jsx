import React from 'react';
import greenPepper from '../images/greenPepppercopy.png';
import {Row, Col} from 'react-materialize';

const Home = () =>{
  return(
    <div>
      <section className='intro'>
        <div className='title'>
          <h1 className='bcr center-align'>Bikes, Cars, &amp; Rock N Roll</h1>
          <h1 className='welcome center-align'>CF Tv</h1>
          <h1 className='adv center-align'>Join the Adventure &amp; Enjoy the Ride.</h1>
        </div>
      </section>

      <section className='cars'>
        <div className='row'>
          <div className='col s6 test' style={{backgroundColor:'#757575', height:'50vh'}}>
            <h3 style={{marginTop:'20px'}}>OFFERING VALUE <br/><span style={{color:'#333',fontWeight:'bold'}}>CFTV</span></h3>
            <ul className=''>
              <li>Cycle Fever Tv</li>
              <li>Cars Tv <small>(Certain Marques, Porsche Etc)</small></li>
              <li>Small Town America Tv</li>
              <li>Rolling Media Channel</li>
            </ul>
          </div>
          <div className='triangle-up'></div>
          <div className='col s6'></div>
        </div>
      </section>

      <section className='agenda'>
        <div className='row'>
          <div className='col s6'></div>
          <div className='col s6' style={{backgroundColor:'#616161', height:'50vh'}}>
            <h3 style={{marginTop:'20px'}}>AGENDA</h3>
            <ol className=''>
              <li>What We Do, and Why?</li>
              <li>The Big Picture</li>
              <li>The Journey There</li>
              <li>How You Can Join Us</li>
            </ol>
          </div>
        </div>
      </section>

      <section className='bikes'>
        <h1 className='wwdawTitle'>What We Do, and Why</h1>
      </section>

      <section className='wwdaw'>
        <div className='row'>
          <div className='col s4'>
            <img src={greenPepper} alt='pepper1' className='pepper'></img>
            <ol className='list'><li>Provide local resource information in a video magazine format</li></ol>
          </div>
          <div className='col s4'>
            <img src={greenPepper} alt='pepper2' className='pepper'></img>
            <ol className='list'><li>Provide a platform to advertise produces, events and locations to a key known audience</li></ol>
          </div>
          <div className='col s4'>
            <img src={greenPepper} alt='pepper3' className='pepper'></img>
            <ol className='list'><li>create partnerships with key companies who have a shared ethos</li><li>In the Future, we will bring on more platforms and more outlets to bring the message to a greater audience</li></ol>
          </div>
        </div>
      </section>

      <section className='motovation'>
        <div className='row'>
          <div className='col s6' style={{height:'50vh', backgroundColor:'#757575'}}>
            <h3>What Motivates us?</h3>
            <ul>
              <li>We have over 40 years of TB Production and presenting experience</li>
              <li>We want to do something different</li>
              <li>We want to meet a need from the community</li>
              <li>We want to provide a quality service</li>
              <li>We will follow the technology path for delivery (distribution)</li>
              <li>We are building on our following: Viewers, Followers, Fans</li>
            </ul>
          </div>
          <div className='col s6'></div>
        </div>
      </section>
      <Row>
        <Col s={5} m={5} l={5} xl={5}>5</Col>
        <Col s={7} m={7} l={7} xl={7}>7</Col>
      </Row>
      <section className='structure'>
        <div className='row'>
          <div className='s6 m6 l6'>
            <div className='cftvSign'>
              <h3>CFTV</h3>
            </div>
            <ul>
              <li>Cycle Fever Tv</li>
              <li>Porsche Tv</li>
              <li>Small Town America Tv</li>
            </ul>
          </div>
          <div className='s6 m6 l6'>
            <div className='structureList'>
              <ul>
                <li>Events - Rides, Meetup, Dealerships</li>
                <li>Locations - Where to go What to do</li>
                <li>Interviews - who is who and what they do</li>
                <li>Trips - Document day trips of interest</li>
                <li>Holidays - Document Holidays and Things to do</li>
                <li>Tricks and Tips - From clubs of sponsors</li>
                <li>Endorse Products - Sponsor products</li>
                <li>Rolling Media Channel - Includes All the Above</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
