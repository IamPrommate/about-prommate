import './css/Homepage.css';
import background from './colorful.jpg';
import topPhoto from './Toppu.png';
import React from 'react';

export default function App() {
  const containerStyle = {
    backgroundImage: `url(${background})`,
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="flexbox">
        <div className="item">
          <div className="introduction">
          <span className='big-text'> Welcome </span> <br/> To My Homepage.
          </div>
        </div>
        <div className="item">
          <img src={topPhoto} alt="Top Photo" className="top-photo" />
        </div>
      </div>
    </div>
  );
}
