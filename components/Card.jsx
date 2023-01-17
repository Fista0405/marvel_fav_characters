import Image from "next/image";
import Link from "next/link";

const Card = ({ name, tumbnail }) => {
  return (
    <>
      <div className="w-36 h-40 flex flex-col border border-black rounded-md p-2">
        <Image width={140} height={140} src={tumbnail} alt="img" />
        <h3>{name || "Hero Name"}</h3>
      </div>
    </>
  );
};

export default Card;
