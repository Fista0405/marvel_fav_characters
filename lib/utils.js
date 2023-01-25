import axios from "axios";
import MD5 from "crypto-js/md5";
import useSWR from "swr";

const API_URL = process.env.NEXT_PUBLIC_BASE_URL;
const GET_CHARACTERS = "v1/public/characters";

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

// Client Side with SWRHook +++

function getCharactersSWR() {
  const { data, error, isLoading } = useSWR(
    `${API_URL}/${GET_CHARACTERS}`,
    fetcher
  );

  return {
    data: data?.data.results,
    isLoading,
    isError: error,
  };
}

function getFilteredCharactersSWR(query) {
  const { data, error, isLoading } = useSWR(
    `${API_URL}/${GET_CHARACTERS}`,
    (url) => fetcher(url, query)
  );

  console.log(data);

  return {
    data: data?.data.results,
    isLoading,
    isError: error,
  };
}

function getCharacterSWR(id) {
  const { data, error, isLoading } = useSWR(
    `${API_URL}/${GET_CHARACTERS}/${id}`,
    fetcher
  );

  return {
    data: data?.data.results[0],
    isLoading,
    isError: error,
  };
}

// Without SWRHook ---

const getCharacters = async () => {
  let baseUrl = `${API_URL}/v1/public/characters`;
  try {
    const response = await fetcher(baseUrl);
    return response.data.results;
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

const getCharacter = async (id) => {
  let baseUrl = `${API_URL}/v1/public/characters/${id}`;
  try {
    const response = await fetcher(baseUrl);
    return response.data.results[0];
  } catch (error) {
    console.log(error);
  }
};

export {
  getCharacterSWR,
  getCharactersSWR,
  getFilteredCharactersSWR,
  getFilteredCharacters,
  getCharacter,
  getCharacters,
};
