import React from 'react';
import { useLazyQuery } from '@apollo/client';
import GET_WEATHER from '../graphql/queries';

function Home() {
  const [getWeather, { error, data }] = useLazyQuery(GET_WEATHER, {
    variables: {
      name: 'Mogilev',
    },
  });

  if (error) return <h1>Error...</h1>;

  if (data) {
    console.log('data', data);
  }
  return (
    <div className="home">
      <h1>Search For Weather</h1>
      <input type="text" placeholder="City name..." />
      <button type="button" onClick={() => getWeather()}>Search</button>
    </div>
  );
}

export default Home;
