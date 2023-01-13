import MD5 from "crypto-js/md5";

const API_URL = process.env.NEXT_PUBLIC_BASE_URL;

const getHash = (ts, secretKey, publicKey) => {
  return MD5(ts + secretKey + publicKey).toString();
};

const fetchData = async () => {
  let baseUrl = `${API_URL}/v1/public/characters`;

  let ts = Date.now().toString();
  let apiKey = process.env.NEXT_PUBLIC_PUB_KEY;
  let privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
  let hash = getHash(ts, privateKey, apiKey);

  let url = `${baseUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

  try {
    let res = await fetch(url);
    let data = await res.json();

    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return;
  }
};

export { fetchData };
