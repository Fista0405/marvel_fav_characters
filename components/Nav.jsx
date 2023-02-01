import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="header-footer z-50 sticky top-0 border-b drop-shadow-lg">
      <ul className="flex items-center justify-around uppercase">
        <li>
          <Link href="/">
            <Image
              priority
              src="/static/images/marvel.png"
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
      </ul>
    </nav>
  );
};

export default Nav;
