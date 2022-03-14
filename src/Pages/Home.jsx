import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import GET_WEATHER from '../graphql/queries';

function Home() {
  const [city, setCity] = useState('');

  const [getWeather, { error, data }] = useLazyQuery(GET_WEATHER, {
    variables: {
      name: city,
    },
  });

  if (error) return <h1>Error...</h1>;

  return (
    <div className="home">
      <h1>Search For Weather</h1>
      <input type="text" placeholder="City name..." value={city} onChange={(event) => setCity(event.currentTarget.value)} />
      <button type="button" onClick={() => getWeather()}>Search</button>
      <div>
        {data && (
        <>
          <h1>
            City name :
            {data.getCityByName.name}
          </h1>
          <h1>
            Temperature :
            {data.getCityByName.weather.temperature.feelsLike}
          </h1>
          <h1>
            Description :
            {data.getCityByName.weather.summary.description}
          </h1>
          <h1>
            Wind :
            {data.getCityByName.weather.wind.speed}
          </h1>
        </>
        )}
      </div>
    </div>
  );
}

export default Home;
