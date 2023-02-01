import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="header-footer p-6 text-center text-xs md:text-base grid grid-rows-2">
      <div className="flex justify-evenly items-center mb-4">
        <Image
          src="/static/images/marvel-m.png"
          alt="Marvel Letter M Logo"
          width={75}
          height={75}
        />
        <div>Social Network Grid</div>
      </div>
      <ul className="place-items-center grid grid-rows-2 grid-cols-2 md:grid md:grid-cols-4 md:grid-rows-1">
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
