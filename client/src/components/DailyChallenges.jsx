import React, { useState } from 'react';

const challengesList = [
  { id: 1, title: 'Join Telegram or Discord room', completed: false },
  { id: 2, title: 'Participate in a meme challenge', completed: false },
  { id: 3, title: 'Attend a live AMA or space', completed: false },
  { id: 4, title: 'Vote in a community poll', completed: false },
];

function DailyChallenges() {
  const [challenges, setChallenges] = useState(challengesList);

  const toggleComplete = (id) => {
    setChallenges(challenges.map(challenge =>
      challenge.id === id ? { ...challenge, completed: !challenge.completed } : challenge
    ));
  };

  return (
    <div className="bg-white rounded shadow p-4 max-w-md w-full text-gray-900 mb-6">
      <h2 className="text-xl font-semibold mb-4">Daily Challenges</h2>
      <ul>
        {challenges.map(({ id, title, completed }) => (
          <li key={id} className="mb-2 flex items-center">
            <input
              type="checkbox"
              checked={completed}
              onChange={() => toggleComplete(id)}
              className="mr-2"
            />
            <span className={completed ? 'line-through text-gray-500' : ''}>{title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DailyChallenges;
