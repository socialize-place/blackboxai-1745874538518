import React from 'react';
import WalletConnect from './components/WalletConnect';
import FriendPoints from './components/FriendPoints';
import DailyChallenges from './components/DailyChallenges';
import CountryRankings from './components/CountryRankings';
import AirdropMiniGames from './components/AirdropMiniGames';
import ShareToEarn from './components/ShareToEarn';
import ViralityTriggers from './components/ViralityTriggers';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6 mt-6">Connect & Collect</h1>
        <p className="text-lg max-w-xl text-center mb-8">
          Welcome to the Connect & Collect game! Connect your wallet, complete daily challenges, and compete in country rankings.
        </p>
        <WalletConnect />
        <FriendPoints />
        <DailyChallenges />
        <CountryRankings />
        <AirdropMiniGames />
        <ShareToEarn />
        <ViralityTriggers />
      </div>
    </div>
  );
}

export default App;
