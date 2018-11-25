import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const Navbar = () =>{
  return(
    <nav className='nav-wrapper red darken-3'>
      <div className='container'>
        <span className='brand-logo'><Link to='/'>C.F. Tv</Link></span>
        <ul className='right'>
          <li><Link to='/About'>About Us</Link></li>
          <li><Link to='/Contact'>Contact</Link></li>
          <li><Link to='/Bikes'>Bikes</Link></li>
          <li><Link to='/Cars'>Cars</Link></li>
          <li><Link to='/SmallTown'>Small Town</Link></li>
          <li><Link to='/ThingsToDo'>Events</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
