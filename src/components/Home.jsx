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
          <div className='col s6 test' style={{backgroundColor:'#82b1ff', height:'50vh'}}>
            <h3 style={{marginTop:'20px'}}>OFFERING VALUE <br/><span style={{color:'#333',fontWeight:'bold'}}>CFTV</span></h3>
            <ul style={{color:'#333'}}>
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
      <section style={{backgroundColor:'green'}}>
        <Row>
          <Col l={1} s={1} m={1} xl={1} className='white'>1</Col>
          <Col l={4} className='green'>3</Col>
          <Col className='orange' l={4}>3</Col>
          <Col className='pink' l={3}>3</Col>
        </Row>
      </section>
      <section className='structure'>
        <div className='cftvSign'>
          <h3>CFTV</h3>
        </div>

      </section>
    </div>
  );
};

export default Home;
