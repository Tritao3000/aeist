import React from 'react';
import { Cloud, Thermometer, Wind, Droplet } from 'lucide-react';

const Details = ({ weatherData }: { weatherData: any }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">
        Current Weather
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center space-x-4">
          <img
            src={weatherData.current.condition.icon}
            alt={weatherData.current.condition.text}
            className="w-20 h-20"
          />
          <div>
            <p className="text-4xl font-bold text-gray-800">
              {weatherData.current.temp_c}°C
            </p>
            <p className="text-xl text-gray-600">
              {weatherData.current.condition.text}
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Thermometer className="text-blue-500" />
            <p className="text-gray-700">
              Feels Like: {weatherData.current.feelslike_c}°C /{' '}
              {weatherData.current.feelslike_f}°F
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Wind className="text-blue-500" />
            <p className="text-gray-700">
              Wind: {weatherData.current.wind_kph} km/h{' '}
              {weatherData.current.wind_dir}
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Droplet className="text-blue-500" />
            <p className="text-gray-700">
              Humidity: {weatherData.current.humidity}%
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 text-sm text-gray-500">
        <p>
          Last updated:{' '}
          {new Date(weatherData.current.last_updated).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Details;
