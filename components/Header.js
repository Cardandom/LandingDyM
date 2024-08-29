import Image from "next/image";

import Link from "next/link";

import Socials from "../components/Socials"

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-2 md:py-4">
          <Link href={'/'}>
            <Image src={'/logosf.png'} width={150} height={150} alt="LogoDyM" priority={true} className="xl:mt-20"/>
          </Link>
          <Socials/>
        </div>
      </div>
    </header>
  );
};

export default Header;
