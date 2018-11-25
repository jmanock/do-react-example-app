import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const Navbar = () =>{
  return(
    <nav className='nav-wrapper red darken-3'>
      <div className='container'>
        <span className='brand-logo'>C.F.Tv</span>
        <ul className='right'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/About'>About</Link></li>
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
