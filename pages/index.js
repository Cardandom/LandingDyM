import Image from "next/image";

// import ParticlesContainer from "../components/ParticlesContainer";
import ProyectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-[#6453e6] bg-gradient-to-t to-[#9053e6]">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-screen container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Soluciones Digitales<br />para
            <span className="text-accent">Tu Negocio</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-md xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-sm md:text-base"
          >
            Bienvenidos a esta página donde ofrecemos soluciones digitales a tu
            negocio, estrategias digitales a tu emprendimiento, empresa o
            negocio. Es hora de ser visible en línea y expandir tus ideas a
            través de la web.
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProyectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProyectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-full h-full absolute right-0 bottom-0">
        <div className="bg-none md:bg-explosion md:bg-cover h-screen xl:bg-right xl:bg-no-repeat w-screen absolute mix-blend-color-dodge translate"></div>
        {/* <ParticlesContainer/> */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{duration: 1, ease: 'easeInOut'}}
          className="w-full max-w-[737px] max-h-[578px] relative lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
