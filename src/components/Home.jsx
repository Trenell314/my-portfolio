import {Suspense} from 'react'
import {Canvas} from '@react-three/fiber';
import ShaderComponent from './ShaderComponent';
import About from './About'


const Home = () => {
  return (
    <div className="home-container">
      <section className="hero" id="home-section">
      <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          onCreated={({ gl, size }) => {
            gl.setClearColor('#000000');
            gl.setSize(size.width, size.height);
          }}
          gl={{ 
            antialias: true,
            alpha: false,
            powerPreference: "high-performance"
          }}
          orthographiccamera={{ zoom: 1, position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <ShaderComponent />
          </Suspense>
        </Canvas>
      <div className="hero-info">
        <img src="images/Trenell_Logo_Gafta.svg" alt="an svg" className="logo"/>
        <h2>Front-End Developer</h2>
        </div>
    </section>
    <About />
    </div>
  )
}

export default Home
