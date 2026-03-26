import {motion} from 'framer-motion';

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    }
  }
};

const childVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      duration: 0.6,
      ease: 'easeInOut'
    }
  }
};

const About = () => {
  return (
    <section className="about" id="about-section">
      <motion.div
      className="about-wrap" 
      variants={containerVariants}
      initial="initial"
      whileInView="animate">
        <motion.h2 variants={childVariants}>
          About Me
        </motion.h2>
        <motion.p variants={childVariants}>
          Hello! My name is Trenell. 
          I enjoy all things graphic design, product design, and front-end web development.
        </motion.p>
      </motion.div>
    </section>
  )
}

export default About