import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/NavBarL.css';

export default function Homepage() {
  const [selected, setSelected] = useState('Home');

  const handleNavClick = (itemName) => {
    setSelected(itemName);
  };

  console.log(selected);

  return (
    <header>
      <div className='logo'>Prommate</div>
      <nav>
        <ul className='navList'>
          <li onClick={() => handleNavClick('Home')}>
            <Link to='./'>Home</Link>
          </li>
          <li onClick={() => handleNavClick('AboutMe')}>
            <Link to='./AboutMe'>About me</Link>
          </li>
          <li onClick={() => handleNavClick('Projects')}>
            <Link to='./Projects'>Projects</Link>
          </li>
        </ul>
      </nav>
      <Link className='cta' to='./Contact'>
        <button>Contact</button>
      </Link>
    </header>
  );
}
