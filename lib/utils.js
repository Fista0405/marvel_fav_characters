import MD5 from "crypto-js/md5";
import { API_URL } from "./constants";

const getHash = (ts, secretKey, publicKey) => {
  return MD5(ts + secretKey + publicKey).toString();
};

function fetcher(url, query) {
  const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
  const publicKey = process.env.NEXT_PUBLIC_PUB_KEY;
  const ts = new Date().getTime();
  const hash = MD5(ts + privateKey + publicKey).toString();

  if (query) {
    return fetch(
      `${url}?nameStartsWith=${query}&ts=${ts}&apikey=${publicKey}&hash=${hash}`
    ).then((r) => r.json());
  }

  return fetch(`${url}?ts=${ts}&apikey=${publicKey}&hash=${hash}`).then((r) =>
    r.json()
  );
}

const getCharacters = async () => {
  let baseUrl = `${API_URL}/v1/public/characters`;
  try {
    const response = await fetcher(baseUrl);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

const getCharacter = async (id) => {
  let baseUrl = `${API_URL}/v1/public/characters/${id}`;
  try {
    const response = await fetcher(baseUrl);
    return response.data.results[0];
  } catch (error) {
    console.log(error);
  }
};

const getFilteredCharacters = async (value) => {
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

export { getFilteredCharacters, getCharacter, getCharacters, fetcher };
