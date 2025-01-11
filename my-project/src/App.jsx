import { useState, useEffect } from 'react';
import { weatherData, weatherDataLondon } from './data';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Information from './information';
import Details from './details';

function App() {
  const [count, setCount] = useState(0);
  const [chosenCity, setChosenCity] = useState('');

  const [data, setData] = useState(null);

  const handleChange = (e) => {
    setChosenCity(e.target.value);
    console.log(chosenCity);
  };

  const handleSubmit = (e) => {
    if (chosenCity === 'London') {
      setData(weatherDataLondon);
    } else if (chosenCity === 'Lisbon') {
      setData(weatherData);
    } else {
      alert('City not found');
    }
  };

  return (
    <>
      <input
        type="text"
        className="bg-gray-200 text-black"
        value={chosenCity}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      <div className="max-w-2xl mx-auto my-8 px-4">
        {data && (
          <>
            <section className="mb-6 p-6 bg-white rounded-lg shadow-md">
              <Information weatherData={data} />
            </section>

            <section className="p-6 bg-white rounded-lg shadow-md">
              <Details weatherData={data} />
            </section>
          </>
        )}
      </div>
    </>
  );
}

export default App;
