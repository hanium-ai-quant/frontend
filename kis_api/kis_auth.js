import axios from 'axios';
import fs from 'fs';

// Constants
const APP_KEY = 'PSyaXJzZcoT29nlEMCh5TkJ9vvVdqVZotlX6';
const APP_SECRET = 'ingcb3WRQBNVApTEm/lxDxHtLM4qO78vhO9tNrq8+4OVQJAOpkDavmMRsi8CusZLMv3N33kOgjTwGWT+NgANAsHt2fNuBCzwZ3CoaDEnf1XH40qDpxk8h8wYA4/WZERvRXhTyZym0kQsz0+dUoAyoAd6N0w6eFcMzHapdOW6I+Jtu2MzXoo=';
const URL_BASE = 'https://openapivts.koreainvestment.com:29443';

// Function to save token to file
export const saveToken = (access_token, access_token_expired) => {
  const data = {
    ACCESS_TOKEN: access_token,
    ACCESS_TOKEN_EXPIRED: access_token_expired,
  };
  fs.writeFileSync('kis_token.json', JSON.stringify(data));
};

// Function to authenticate and get the token
export const auth = async () => {
  const URL = `${URL_BASE}/oauth2/tokenP`;
  const body = {
    grant_type: 'client_credentials',
    appkey: APP_KEY,
    appsecret: APP_SECRET,
  };

  try {
    const res = await axios.post(URL, body, {
      headers: { 'Content-Type': 'application/json' },
    });

    const { access_token, access_token_expired } = res.data;
    saveToken(access_token, access_token_expired);
  } catch (e) {
    console.error('Authentication failed:', e);
  }
};

// Function to get the access token from file or authenticate to get a new one
export const getAccessToken = async () => {
  try {
    const data = JSON.parse(fs.readFileSync('kis_token.json', 'utf8'));
    return [data.ACCESS_TOKEN, data.ACCESS_TOKEN_EXPIRED];
  } catch (e) {
    await auth();
    const data = JSON.parse(fs.readFileSync('kis_token.json', 'utf8'));
    return [data.ACCESS_TOKEN, data.ACCESS_TOKEN_EXPIRED];
  }
};

