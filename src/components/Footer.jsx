import React from 'react';

const Footer = () =>{
  return(
    <footer className='page-footer blue-grey darken-4'>
      <div className='footer-copyright'>
        <div className='container center'>
          &copy; 2018 CycleFeverTV | All Rights Reserved
           <a href='https://www.facebook.com/CycleFeverTV/' target='_blank'> <i className='fab fa-facebook-f' style={{fontSize:'20px'}}></i></a>
           <a href='https://twitter.com/CycleFeverTV' target='_blank'> <i className='fab fa-twitter' style={{fontSize:20}}></i></a>
           <a href='https://www.instagram.com/cyclefevertv/' target='_blank'><i className='fab fa-instagram' style={{fontSize:20}}></i></a>
           <a href='https://www.youtube.com/channel/UC5lBCpUunSuN3lCxxTfkunA' target='_blank'><i className='fab fa-youtube' style={{fontSize:20}}></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
