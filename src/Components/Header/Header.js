import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';



export default function Header() {
  return (
      <div className="Header">
        
        <h1>Callahan AutoParts</h1>
        <div className='header_link_box'>
        <Link to='/'>Home</Link>
        <Link to='/myList'>My Parts List</Link>
      </div>
    </div>
  );
}