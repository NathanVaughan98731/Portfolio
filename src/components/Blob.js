import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { fragmentShader } from "../shaders/fragment";
import { vertexShader } from "../shaders/vertex.js";
import dunes from "../images/dunes.jpg";
import { TextGeometry } from 'three/src/geometries/TextGeometry';
import { MeshBasicMaterial } from 'three/src/materials/MeshBasicMaterial';
import { FontLoader } from 'three/src/loaders/FontLoader';


// Image by @timdegroot
// https://unsplash.com/photos/yNGQ830uFB4
const IMG_SRC = dunes;

const fontLoader = new FontLoader();
let font;

fontLoader.load('https://threejsfundamentals.org/threejs/resources/threejs/fonts/helvetiker_regular.typeface.json', (loadedFont) => {
  font = loadedFont;
});

const Blob = (props) => {
  var scene = new THREE.Scene();
    var textGeometry = new THREE.TextGeometry('Hello, Three.js!', {
      font: font,
      size: 0.2,
      height: 0.02
  });
  const ref = useRef();
  const textRef = useRef();

  const tex = useLoader(THREE.TextureLoader, IMG_SRC);
  const img = useLoader(THREE.ImageLoader, IMG_SRC);

  const planeWidth = props.width;
  const planeHeight = props.height;
  const speed = {
    value: 0.006
  };

  useFrame(({ scene, camera }) => {
    if (ref.current) {
      ref.current.material.uniforms.uTime.value += speed.value;
    }
  });

  var textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  var textMesh = new THREE.Mesh(textGeometry, textMaterial);
  // Position the text relative to the cube
  textMesh.position.set(0, 1.2, 0);

  // Add the text mesh to the scene
  scene.add(textMesh);

  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);


  // Set the camera position
  camera.position.z = 2;
    return (
      <group>
        <mesh ref={ref}>
          <planeBufferGeometry args={[planeWidth, planeHeight]} />
          <shaderMaterial
            uniforms={{
              uPlaneSize: { value: new THREE.Vector2(planeWidth, planeHeight) },
              // uImageSize: { value: new THREE.Vector2(img.width, img.height) },
              uTime: { value: 0.0 },
              uRadius: { value: 0.5 },
              // uTexture: { value: tex },
              uSpikes: { value: 1 } // adjust the waviness
            }}
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    );
  };

export default Blob;
