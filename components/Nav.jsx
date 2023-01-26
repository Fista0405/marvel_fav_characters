import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <ul className="header-footer flex justify-evenly items-center uppercase border-b drop-shadow-lg">
        <li>
          <Link href="/">
            <Image
              priority
              src="/../public/static/images/marvel.png"
              alt="Marvel Logo"
              width={130}
              height={52}
            />
          </Link>
        </li>
        <li>
          <Link className="hover:text-red-500" href="/favorites">
            Favorites
          </Link>
        </li>
        <li>
          <Link className="hover:text-red-500" href="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
