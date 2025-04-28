import { Client, Account, Databases } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://[YOUR_APPWRITE_ENDPOINT]') // Your Appwrite Endpoint
  .setProject('[YOUR_PROJECT_ID]'); // Your project ID

const account = new Account(client);
const databases = new Databases(client);

export { client, account, databases };
