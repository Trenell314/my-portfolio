import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import ShaderComponent from './ShaderComponent';
import About from './About'


const Home = () => {
  return (
    <div className="home-container">
      <section className="hero" id="home-section">
      <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{
          position: 'absolute', 
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          borderRadius: '0px 0px 20px 20px',
          zIndex: 0
        }}
          onCreated={({ gl }) => {
            gl.setClearColor('#000000');
          }}
        >
          <Suspense fallback={null}>
            <ShaderComponent />
          </Suspense>
        </Canvas>
      <div id="shader-container"></div>
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
