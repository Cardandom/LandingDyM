import { motion } from "framer-motion";
const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%'
  },
  animate: {
    x: '0%',
    width: '0%'
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%']
  },
};

const Transition = () => {
  return (
    <>
      <motion.div className="fixed bottom-0 top-0 right-full h-screen w-screen z-30 bg-secondary"
      variants={transitionVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{delay: 0.2 , duration: 0.5, ease: 'easeInOut'}}
      >
      </motion.div>
      <motion.div className="fixed bottom-0 top-0 right-full h-screen w-screen z-30 bg-terciary"
      variants={transitionVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{delay: 0.3 , duration: 0.5, ease: 'easeInOut'}}
      >
      </motion.div>
      <motion.div className="fixed bottom-0 top-0 right-full h-screen w-screen z-30 bg-primary"
      variants={transitionVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{delay: 0.5 , duration: 0.4, ease: 'easeInOut'}}
      >
      </motion.div>
    </>
  );
};

export default Transition;
