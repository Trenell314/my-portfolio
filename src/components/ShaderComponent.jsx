import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const ShaderComponent = () => {
  const meshRef = useRef();
  const mousePos = useRef(new THREE.Vector2(0.5, 0.5));
  const { size, viewport } = useThree();
  
  const shaderMaterialRef = useRef(
    new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uResolution: { value: new THREE.Vector2(size.width, size.height) }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          // Scale to fill screen
          vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * modelViewPosition;
        }
      `,
      fragmentShader: `
        precision mediump float;
        varying vec2 vUv;
        uniform float uTime;
        uniform vec2 uMouse;
        uniform vec2 uResolution;

        void main() {
          // Adjust UV to fill screen (fix aspect ratio)
          vec2 uv = vUv;
          float aspect = uResolution.x / uResolution.y;
          
          vec3 c1 = vec3(1.,0.835,0.663); //Cream
          vec3 c2 = vec3(0.286,0.122,0.); //Dark Brown
          vec3 c3 = vec3(0.91,0.569,0.329);  //Orange
          
          float time = uTime * 0.0003;
          
          float mouseEffect = 0.0;
          vec2 mouseFlow = vec2(0.0);
          
          if (uMouse.x > 0.0 && uMouse.y > 0.0) {
            float dist = distance(uv, uMouse);
            mouseEffect = exp(-dist * .5);
            
            mouseFlow = (uv - uMouse) * mouseEffect;
          }
          
          float wave1 = sin(uv.x * 6.0 + time * 2.0 + mouseFlow.x * 4.0) * 
                        (0.1 + mouseEffect * 0.15);
          
          float wave2 = cos(uv.y * 4.0 + time * 1.5 + mouseFlow.y * 3.0) * 
                        (0.55 + mouseEffect * 0.2);
          
          float wave3 = sin(uv.x * 3.0 + uv.y * 3.0 + time + length(mouseFlow) * 5.0) * 
                        (0.08 + mouseEffect * 0.1);
          
          float baseGradient = uv.x + mouseFlow.x * 0.3;
          float gradientPos = baseGradient + wave1 + wave2 + wave3;
          gradientPos = fract(gradientPos);
          
          vec3 color;
          if (gradientPos < 0.33) {
            color = mix(c1, c2, gradientPos * 3.0);
          } else if (gradientPos < 0.66) {
            color = mix(c2, c3, (gradientPos - 0.33) * 3.0);
          } else {
            color = mix(c3, c1, (gradientPos - 0.66) * 3.0);
          }
          
          gl_FragColor = vec4(color, 1.0);
        }
      `
    })
  );

  useEffect(() => {
    if (shaderMaterialRef.current) {
      shaderMaterialRef.current.uniforms.uResolution.value.set(size.width, size.height);
    }
  }, [size]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = document.getElementById('shader-container');
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      
      mousePos.current.set(x, y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useFrame((state) => {
    if (shaderMaterialRef.current) {
      shaderMaterialRef.current.uniforms.uTime.value = state.clock.elapsedTime * 1000;
      shaderMaterialRef.current.uniforms.uMouse.value.copy(mousePos.current);
    }
  });

  return (
    <mesh ref={meshRef} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <primitive object={shaderMaterialRef.current} attach="material" />
    </mesh>
  );
};

export default ShaderComponent;