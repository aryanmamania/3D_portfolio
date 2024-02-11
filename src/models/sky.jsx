import { useGLTF } from '@react-three/drei'
import React from 'react'

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

import skyScene from '../assets/3d/sky.glb'

const sky = ({ isRotating }) => {

    const sky = useGLTF(skyScene);
    const skyRef = useRef();
  return (
    <mesh ref={skyRef}>
<primitive object={sky.scene} />
    </mesh>
  )
}

export default sky
