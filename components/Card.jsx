import Image from "next/image";
import { useRouter } from "next/router";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ id, name, tumbnail, isFavorited, toggleFavorite }) => {
  const router = useRouter();

  const navigateHandler = (e) => {
    e.stopPropagation();
    router.push(id.toString());
  };

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
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(id);
        }}
        icon={faStar}
        color={isFavorited ? "red" : "gray"}
      />
    </article>
  );
};

export default Card;
