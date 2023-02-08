import { useState } from "react";

const useFavorites = () => {
  const storedFavorites =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("favorites"))
      : null;
  const [favorites, setFavorites] = useState(storedFavorites || []);

  const toggleFavorite = (characterId) => {
    if (favorites.includes(characterId)) {
      setFavorites(favorites.filter((id) => id !== characterId));
      localStorage.setItem(
        "favorites",
        JSON.stringify(favorites.filter((id) => id !== characterId))
      );
    } else {
      setFavorites([...favorites, characterId]);
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, characterId])
      );
    }
  };

  const deleteAll = () => {
    setFavorites([]);
    localStorage.removeItem("favorites");
  };

  return { favorites, toggleFavorite, deleteAll };
};

export default useFavorites;
