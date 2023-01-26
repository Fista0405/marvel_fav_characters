import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="header-footer grid grid-cols-1 grid-rows-2 gap-2 mt-auto ">
      <div className="flex justify-around items-center ">
        <Image
          src="/../public/static/images/marvel-m.png"
          alt="Marvel Letter M Logo"
          width={75}
          height={75}
        />
        <div>Social Network Grid</div>
      </div>
      <ul className="flex justify-around items-center">
        <Link href="/" className="hover:text-red-500">
          Terms of Use
        </Link>
        <Link href="/" className="hover:text-red-500">
          Privacy Policy
        </Link>
        <Link href="/" className="hover:text-red-500">
          License Agreement
        </Link>
        <Link
          href="https://www.marvel.com/"
          target="_blank"
          className="hover:text-red-500"
        >
          Data provided by Marvel. © 2014 Marvel
        </Link>
      </ul>
    </footer>
  );
};

export default Footer;
