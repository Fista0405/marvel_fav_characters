import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="header-footer flex justify-around items-center uppercase border-b drop-shadow-lg">
      <Link href="/">
        <Image
          src="/../public/marvel.png"
          alt="Marvel Logo"
          width={130}
          height={52}
        />
      </Link>
      <Link className="hover:text-red-500" href="/about">
        About
      </Link>
    </nav>
  );
};

export default Nav;
