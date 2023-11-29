import React from 'react'
import './Card.css'
import Blob from './Blob'
import { Canvas } from '@react-three/fiber';


const Card = (props) => {
  

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
    <Canvas style={{ position: 'absolute', top: 0, left: 0 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Blob height={props.height} width={props.width} />
    </Canvas>
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <div style={{ color: 'black'}}>
        {props.children}
    </div>
  </div>
  </div>

  )
}

export default Card