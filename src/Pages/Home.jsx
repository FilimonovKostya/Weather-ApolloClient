import React from 'react';

function Home() {
  return (
    <div className="home">
      <h1>Search For Weather</h1>
      <input type="text" placeholder="City name..." />
      <button type="button">Search</button>
    </div>
  );
}

export default Home;
