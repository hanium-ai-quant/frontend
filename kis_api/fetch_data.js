import axios from 'axios';
import { getAccessToken } from './kis_auth';

export const fetchStockData = async (stockCode) => {
  let [accessToken, accessTokenExpired] = await getAccessToken();
  const currentTime = new Date().toISOString();

  if (currentTime < accessTokenExpired) {
    // Access token is still valid
  } else {
    // Refresh your token here and then update accessToken and accessTokenExpired
  }

  const URL_BASE = "https://openapivts.koreainvestment.com:29443";
  const PATH = "uapi/domestic-stock/v1/quotations/inquire-price";
  const URL = `${URL_BASE}/${PATH}`;
  const APP_KEY = "PSyaXJzZcoT29nlEMCh5TkJ9vvVdqVZotlX6"; // Make sure to replace with your actual app key
  const APP_SECRET = "ingcb3WRQBNVApTEm/lxDxHtLM4qO78vhO9tNrq8+4OVQJAOpkDavmMRsi8CusZLMv3N33kOgjTwGWT+NgANAsHt2fNuBCzwZ3CoaDEnf1XH40qDpxk8h8wYA4/WZERvRXhTyZym0kQsz0+dUoAyoAd6N0w6eFcMzHapdOW6I+Jtu2MzXoo="; // Make sure to replace with your actual app secret

  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${accessToken}`,
    "appKey": APP_KEY,
    "appSecret": APP_SECRET,
    "tr_id": "FHKST01010100"
  };

  const params = {
    fid_cond_mrkt_div_code: "J",
    fid_input_iscd: stockCode
  };

  try {
    const response = await axios.get(URL, { headers, params });
    const { stck_prpr, prdy_vrss, prdy_ctrt, stck_hgpr, stck_lwpr } = response.data.output;

    return { stck_prpr, prdy_vrss, prdy_ctrt, stck_hgpr, stck_lwpr };
  } catch (error) {
    console.error("An error occurred:", error);
    return null;
  }
};
