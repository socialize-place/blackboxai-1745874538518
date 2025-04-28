import React, { useState, useEffect } from 'react';
import { account } from '../appwriteClient';

function WalletConnect() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [walletType, setWalletType] = useState(null);
  const [error, setError] = useState(null);

  // Connect Phantom Wallet (Solana)
  const connectPhantom = async () => {
    try {
      if (!window.solana || !window.solana.isPhantom) {
        setError('Phantom wallet not found. Please install it.');
        return;
      }
      const resp = await window.solana.connect();
      setWalletAddress(resp.publicKey.toString());
      setWalletType('Phantom');
      setError(null);
      // TODO: Save wallet info to Appwrite user session or database
    } catch (err) {
      setError('Failed to connect Phantom wallet.');
    }
  };

  // Connect MetaMask Wallet (Ethereum)
  const connectMetaMask = async () => {
    try {
      if (!window.ethereum) {
        setError('MetaMask not found. Please install it.');
        return;
      }
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setWalletAddress(accounts[0]);
      setWalletType('MetaMask');
      setError(null);
      // TODO: Save wallet info to Appwrite user session or database
    } catch (err) {
      setError('Failed to connect MetaMask wallet.');
    }
  };

  // Disconnect wallet
  const disconnectWallet = () => {
    setWalletAddress(null);
    setWalletType(null);
    setError(null);
    // TODO: Clear wallet info from Appwrite user session or database
  };

  return (
    <div className="p-4 bg-white rounded shadow max-w-md w-full text-gray-900">
      <h2 className="text-xl font-semibold mb-4">Connect Your Wallet</h2>
      {walletAddress ? (
        <div>
          <p className="mb-2">Connected with {walletType}:</p>
          <p className="break-all mb-4 font-mono">{walletAddress}</p>
          <button
            onClick={disconnectWallet}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <button
            onClick={connectPhantom}
            className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
          >
            Connect Phantom (Solana)
          </button>
          <button
            onClick={connectMetaMask}
            className="w-full px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
          >
            Connect MetaMask (Ethereum L2)
          </button>
        </div>
      )}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </div>
  );
}

export default WalletConnect;
