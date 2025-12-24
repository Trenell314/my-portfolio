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
          Hello! I'm Trenell Holmes, a front-end developer interested in
          creating visually appealing and user-friendly web applications.
          I'm a fast learner and eager to continuously improve my skills by
          learning new technologies!
        </motion.p>
      </motion.div>
    </section>
  )
}

export default About