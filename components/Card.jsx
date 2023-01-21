import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Card = ({ name, tumbnail, id }) => {
  const [isFavorite, setIsFavorite] = useState(() => {
    const saved = localStorage.getItem(id);
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });
  const router = useRouter();

  const favoriteHandler = (e) => {
    e.stopPropagation();
    setIsFavorite((isFavorite) => !isFavorite);
  };

  const navigateHandler = (e) => {
    e.stopPropagation();
    router.push(id.toString());
  };

  useEffect(() => {
    localStorage.setItem(id, JSON.stringify(isFavorite));
  }, [isFavorite]);

  return (
    <article
      onClick={navigateHandler}
      className="flex flex-col items-center justify-start border rounded-md w-36 h-60 cursor-pointer hover:border hover:border-red-600"
    >
      <Image
        className="rounded-md mb-2"
        width={140}
        height={140}
        src={tumbnail}
        alt="img"
      />
      <h4 className="text-sm text-center">{name}</h4>
      <FontAwesomeIcon
        className="mt-auto mb-2"
        size="lg"
        onClick={favoriteHandler}
        icon={faStar}
        color={isFavorite ? "red" : "gray"}
      />
    </article>
  );
};

export default Card;
