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

function getHeroSWR(id) {
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

function fetchCharacters() {
  const { data, error, isLoading } = useSWR(
    `${API_URL}/${GET_CHARACTERS}`,
    fetcher
  );

  console.log(data);

  return {
    data: data?.data.results,
    isLoading,
    isError: error,
  };
}

function fetchCharactersList(query) {
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

//Bottom code is out of date, both functions are updated in code above.
//Still here because other components needs to be updated

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

export {
  getHeroSWR,
  fetchCharacters,
  fetchCharactersList,
  fetchCharacterDataList,
  getHero,
};
