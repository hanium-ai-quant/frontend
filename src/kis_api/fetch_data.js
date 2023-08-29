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
  const APP_KEY = process.env.APP_KEY; // Make sure to replace with your actual app key
  const APP_SECRET = process.env.APP_SECRET; // Make sure to replace with your actual app secret

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

