import React, { useState } from 'react';

function FriendPoints() {
  const [points, setPoints] = useState(0);
  const [connectedWallets, setConnectedWallets] = useState([]);

  // Placeholder function to simulate connecting a new wallet
  const connectNewWallet = () => {
    const newWallet = 'Wallet_' + (connectedWallets.length + 1);
    if (!connectedWallets.includes(newWallet)) {
      setConnectedWallets([...connectedWallets, newWallet]);
      setPoints(points + 10); // Award 10 points per new wallet
    }
  };

  return (
    <div className="bg-white rounded shadow p-4 max-w-md w-full text-gray-900 mb-6">
      <h2 className="text-xl font-semibold mb-4">Friend Points</h2>
      <p className="mb-2">Points earned: <span className="font-bold">{points}</span></p>
      <p className="mb-4">Connected wallets: {connectedWallets.length}</p>
      <button
        onClick={connectNewWallet}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Connect New Wallet (Simulate)
      </button>
    </div>
  );
}

export default FriendPoints;
