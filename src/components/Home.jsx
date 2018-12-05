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
            <h3 style={{backgroundColor:'lightgrey'}}>OFFERING VALUE CFTB</h3>
          </div>
          <div className='col s6'></div>
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
