import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { fragmentShader } from '../shaders/fragment_background.js';
import { vertexShader } from '../shaders/vertex_background.js';

const Background = () => {
  const materialRef = useRef();

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.elapsedTime;
    }
  });

  return (
    <group>
    <mesh>
        <planeBufferGeometry args={[2, 2]} />
        <shaderMaterial
            ref={materialRef}
            fragmentShader={fragmentShader}
            vertexShader={vertexShader}
            uniforms={{
            uTime: { value: 1.0 },
            uResolution: { value: new THREE.Vector2(10.0, 10.0) },
            tex: { value: null }, // You can set a texture here if needed
            }}
        />
    </mesh>
    </group>
    
  );
};

export default Background;
