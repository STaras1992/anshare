import React from 'react';
import './Home.scss';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-title'>
        <h1>AnShare</h1>
        <h2>Want to share something but you are alone or feel shame?</h2>
        <h3>Share your emotions anonymously with peaple like you</h3>
      </div>
      <div className='home-nav'>
        <button className='nav-button'>Positive</button>
        <button className='nav-button'>Neutral</button>
        <button className='nav-button'>Negative</button>
        {/* <select className='nav-select'>Period</select> */}
      </div>
      <div className='home-content-container'>
        <div className='home-content-results'></div>
        <div className='home-content-share'>
          <h2>Want to share something?</h2>
          <button className='share-button'>Share</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
