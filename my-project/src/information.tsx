import React from 'react';

const Information = ({ weatherData }: { weatherData: any }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Location Information
      </h2>
      <div className="space-y-2">
        <p className="text-gray-700">City: {weatherData.location.name}</p>
        <p className="text-gray-700">Region: {weatherData.location.region}</p>
        <p className="text-gray-700">Country: {weatherData.location.country}</p>
        <p className="text-gray-700">
          Local Time: {weatherData.location.localtime}
        </p>
        <p className="text-gray-700">
          Coordinates: {weatherData.location.lat}, {weatherData.location.lon}
        </p>
      </div>
    </div>
  );
};

export default Information;
