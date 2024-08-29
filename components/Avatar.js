import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none xl:absolute xl:-right-[800px]">
      <Image src={'/avatar.png'} width={737} height={678} className="w-full h-screen"/>
    </div>
  );
};

export default Avatar;
