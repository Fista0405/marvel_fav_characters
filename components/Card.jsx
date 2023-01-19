import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Card = ({ name, tumbnail, id }) => {
  return (
    <Link href={id.toString()}>
      <div className="w-40 h-60 flex flex-col border border-black rounded-md p-2">
        <Image width={140} height={140} src={tumbnail} alt="img" />
        <h4 className="text-center">{name || "Hero Name"}</h4>
        <FontAwesomeIcon icon={faStar} />
      </div>
    </Link>
  );
};

export default Card;
