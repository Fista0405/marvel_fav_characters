import Image from "next/image";

const Footer = () => {
  return (
    <footer className="header-footer grid grid-cols-1 grid-rows-2 gap-2">
      <div className="flex justify-around items-center">
        <Image
          src="/../public/marvel-m.png"
          alt="Marvel Letter M Logo"
          width={75}
          height={75}
        />
        <div>Social Network Grid</div>
      </div>
      <ul className="flex justify-around items-center">
        <li className="hover:text-red-500">Terms of Use</li>
        <li className="hover:text-red-500">Privacy Policy</li>
        <li className="hover:text-red-500">License Agreement</li>
        <li className="hover:text-red-500">Marvel Insider Terms</li>
        <li className="hover:text-red-500">Copyrigh 2023 MARVEL</li>
      </ul>
    </footer>
  );
};

export default Footer;
