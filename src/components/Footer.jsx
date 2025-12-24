import {useRef} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const childVariants = {
  initial: {
    opacity: 0,
    y: 25
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 50
    }
  }
};

const starVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const Footer = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["-20vh", "0vh"]);
  return (

    <footer ref={ref}>
      <div className="footer" id="contact-section">
        <div className="footer-wrap">
          <a href="#hero-section">
          <motion.img src="/images/Trenell_SS_Logo.svg" alt="Trenell Holmes Logo" className="footer-logo" 
           style={{y: textY}}/>
          </a>
          <motion.div className="footer-links" 
          variants={containerVariants}
          initial="initial"
          whileInView="animate">
            <a href="https://www.linkedin.com/in/trenell-holmes-9b9a72274/" target="_blank">
            <motion.img src="/images/linkedin_icon.svg" alt="LinkedIn Icon" className="footer-icon" variants={childVariants}
             whileHover={{
             scale: 0.9}}/>
            </a>

            <a href="mailto:trenell314@gmail.com">
            <motion.img src="/images/email_icon.svg" alt="Email Icon" className="footer-icon" variants={childVariants}
             whileHover={{
             scale: 0.9}}/>
            </a>

            <a href="https://github.com/Trenell314" target="_blank">
            <motion.img src="/images/github_icon.svg" alt="Github Icon" className="footer-icon" variants={childVariants}
             whileHover={{
             scale: 0.9}}/>
            </a>
          </motion.div>
          <div className="footer-stars">
            <motion.img src="/images/star.svg" alt="a star svg" 
             animate={{rotate: -360}}
             transition={{ease: "linear", duration: 3, repeat: Infinity}}/>
            <motion.img src="/images/star.svg" alt="a star svg" 
             animate={{rotate: 360}}
             transition={{ease: "linear", duration: 3, repeat: Infinity}}/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer