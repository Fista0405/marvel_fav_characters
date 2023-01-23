import MD5 from "crypto-js/md5";
const API_URL = process.env.NEXT_PUBLIC_BASE_URL;
import axios from "axios";

const getHash = (ts, secretKey, publicKey) => {
  return MD5(ts + secretKey + publicKey).toString();
};

const fetchCharacters = async () => {
  let baseUrl = `${API_URL}/v1/public/characters`;

  let ts = Date.now().toString();
  let apiKey = process.env.NEXT_PUBLIC_PUB_KEY;
  let privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
  let hash = getHash(ts, privateKey, apiKey);

  let url = `${baseUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

  try {
    let res = await fetch(url);
    let data = await res.json();

    console.log(data.data.results);
    return data.data.results;
  } catch (err) {
    console.error(err);
    return;
  }
};

const fetchCharacterDataList = async (value) => {
  let baseUrl = `${API_URL}/v1/public/characters`;

  let ts = Date.now().toString();
  let apiKey = process.env.NEXT_PUBLIC_PUB_KEY;
  let privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
  let hash = getHash(ts, privateKey, apiKey);

  let url = `${baseUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${value}`;

  try {
    let res = await fetch(url);
    let data = await res.json();

    console.log(data.data.results);
    return data.data.results;
  } catch (err) {
    console.error(err);
    return;
  }
};

const getHero = async (heroId) => {
  let baseUrl = `${API_URL}/v1/public/characters/${heroId}`;

  let ts = Date.now().toString();
  let apiKey = process.env.NEXT_PUBLIC_PUB_KEY;
  let privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
  let hash = getHash(ts, privateKey, apiKey);

  let url = `${baseUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

  try {
    const response = await axios.get(url);
    return response.data.data.results[0];
  } catch (error) {
    console.log(error);
  }
};

export { fetchCharacters, fetchCharacterDataList, getHero };
