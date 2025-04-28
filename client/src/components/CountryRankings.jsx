import React from 'react';

const sampleRankings = [
  { country: 'USA', points: 1200 },
  { country: 'France', points: 1100 },
  { country: 'Germany', points: 950 },
  { country: 'Japan', points: 900 },
  { country: 'Brazil', points: 850 },
];

function CountryRankings() {
  return (
    <div className="bg-white rounded shadow p-4 max-w-md w-full text-gray-900 mb-6">
      <h2 className="text-xl font-semibold mb-4">Country Rankings</h2>
      <ol className="list-decimal list-inside">
        {sampleRankings.map(({ country, points }, index) => (
          <li key={index} className="mb-2 flex justify-between">
            <span>{country}</span>
            <span className="font-bold">{points} pts</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default CountryRankings;
