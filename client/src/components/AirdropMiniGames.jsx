import React from 'react';

function AirdropMiniGames() {
  return (
    <div className="bg-white rounded shadow p-4 max-w-md w-full text-gray-900 mb-6">
      <h2 className="text-xl font-semibold mb-4">Airdrop Mini-Games</h2>
      <p className="mb-2">Short, addictive games that occasionally drop SCLZ tokens to top scorers.</p>
      <ul className="list-disc list-inside text-blue-600">
        <li>Tap-to-collect</li>
        <li>Meme match</li>
        <li>Social trivia</li>
      </ul>
      <p className="mt-4 italic text-gray-600">Mini-games coming soon!</p>
    </div>
  );
}

export default AirdropMiniGames;
