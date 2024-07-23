import Image from "next/image";

import Link from "next/link";

import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link href={'/work'} className="relative w-[125px] h-[125px] flex justify-center items-center group bg-circleStar bg-cover bg-center">
        <Image src="/rounded-text.png" width={101} height={108} className="text-white w-full h-full max-w-[101px] max-h-[108px] animate-spin-slow"/>
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300"/>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
