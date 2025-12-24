import {Suspense, useRef} from 'react'
import {Canvas} from '@react-three/fiber';
import ShaderComponent from './ShaderComponent';
import {motion, useScroll, useTransform} from 'framer-motion';

const Home = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [-100, 500]);
 
  return (
    <div className="home-container" ref={ref}>
      <section className="hero" id="hero-section">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          onCreated={({ gl, size }) => {
            gl.setClearColor('#000000');
          }}
          gl={{ 
            antialias: true,
            alpha: false,
            powerPreference: "high-performance"
          }}>
          <Suspense fallback={null}>
            <ShaderComponent />
          </Suspense>
        </Canvas>
        <motion.div className="hero-info" style={{y: textY, x: '-50%'}}>
          <img src="images/Trenell_SS_Logo.svg" alt="Trenell Holmes logo" className="logo"/>
          <h2>Front-End Developer</h2>
        </motion.div>
      </section>
    </div>
  )
}

export default Home
