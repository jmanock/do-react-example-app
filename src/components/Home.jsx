import React from 'react';

const Home = () =>{
  return(
    <div>
      <section className='intro'>
        <h1><span style={{color:'white'}}>Welcome to</span> <br /><strong>CF Tv</strong></h1>
      </section>
      <section className='cars'>
        <div className='row'>
          <div className='col s6'>
            <h3>OFFERING VALUE CFTV</h3>
            <ul className='center'>
              <li><a href=''>Cycle Fever Tv</a></li>
              <li><a href=''>Cars Tv</a></li>
              <li><a href=''>Small Town America Tv</a></li>
              <li><a href=''>Rolling Media Channel</a></li>
            </ul>
          </div>
          <div className='col s6'>
            <h3>AGENDA</h3>
            <ul className='center'>
              <li><a href=''>What We Do and Why?</a></li>
              <li><a href=''>The Big Picture</a></li>
              <li><a href=''>The Journey There...</a></li>
              <li><a href=''>How you can Join Us</a></li>
            </ul>
          </div>
        </div>
      </section>
      <section className='bikes'>
        <h1>What We Do, and Why</h1>
      </section>
      <section className='wwdaw'>

      </section>
    </div>
  );
};

export default Home;
