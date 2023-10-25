import React from 'react';
import { Link } from 'react-router-dom';
import './MainButton.css'

const MainButton = ({ to, text }) => {
  return (
    <Link to={to} style={{ textDecoration: 'none', fontFamily:'Poppins' }}>
      <button className='main'>{text}</button>
    </Link>
  );
};

export default MainButton;
