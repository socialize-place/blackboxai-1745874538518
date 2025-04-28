import React, { useState } from 'react';

function ViralityTriggers() {
  const [connectionStreak, setConnectionStreak] = useState(3); // example streak
  const [inviteFrenzyActive, setInviteFrenzyActive] = useState(true);

  return (
    <div className="bg-white rounded shadow p-4 max-w-md w-full text-gray-900 mb-6">
      <h2 className="text-xl font-semibold mb-4">Virality Triggers</h2>
      <div className="mb-4">
        <h3 className="font-semibold">Connection Streaks</h3>
        <p>You've connected {connectionStreak} days in a row! Keep it up to earn bonuses.</p>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Invite Frenzy</h3>
        {inviteFrenzyActive ? (
          <p className="text-red-600 font-bold">Limited-time invite frenzy event is active! Invite friends now!</p>
        ) : (
          <p>No active invite events currently.</p>
        )}
      </div>
      <div>
        <h3 className="font-semibold">Memes</h3>
        <p>Memes are integrated throughout the game UI and mini-games for fun and engagement.</p>
      </div>
    </div>
  );
}

export default ViralityTriggers;
