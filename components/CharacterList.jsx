import MD5 from "crypto-js/md5";
import Grid from "./Grid";
import Card from "./Card";
import React, { useState, useEffect } from "react";
const getHash = (ts, secretKey, publicKey) => {
  return MD5(ts + secretKey + publicKey).toString();
};

const API_URL = process.env.NEXT_PUBLIC_BASE_URL;
const IMG_SIZE = "standard_large";

const CharacterList = ({ filter, id }) => {
  const [characters, setCharacters] = useState([]);

  let baseUrl = `${API_URL}/v1/public/characters`;

  let ts = Date.now().toString();
  let apiKey = process.env.NEXT_PUBLIC_PUB_KEY;
  let privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
  let hash = getHash(ts, privateKey, apiKey);

  let url = `${baseUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let charactersData = data.data.results;
        if (filter) {
          charactersData = charactersData.filter((c) => c.id === id);
        }
        setCharacters(charactersData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [filter]);

  console.log(characters);

  return (
    <div className="flex flex-col items-center justify-center">
      <Grid>
        {characters?.map((character) => (
          <Card
            id={character.id}
            key={character.id}
            name={character.name}
            tumbnail={`${character.thumbnail.path}/${IMG_SIZE}.${character.thumbnail.extension}`}
          />
        ))}
      </Grid>
    </div>
  );
};

export default CharacterList;
