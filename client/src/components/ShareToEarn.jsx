import React from 'react';

function ShareToEarn() {
  const shareProfile = () => {
    const shareUrl = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: 'Connect & Collect Game',
        text: 'Join me in the Connect & Collect game and earn rewards!',
        url: shareUrl,
      }).catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback for browsers without navigator.share
      alert('Copy this link to share: ' + shareUrl);
    }
  };

  return (
    <div className="bg-white rounded shadow p-4 max-w-md w-full text-gray-900 mb-6">
      <h2 className="text-xl font-semibold mb-4">Share to Earn</h2>
      <p className="mb-4">Earn small boosts by sharing your Connect & Collect profile on social media or inviting friends.</p>
      <button
        onClick={shareProfile}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Share Your Profile
      </button>
    </div>
  );
}

export default ShareToEarn;
