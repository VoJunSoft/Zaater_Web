import React, { useRef } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { TextureLoader } from "three/src/loaders/TextureLoader"

export default function JuSo() {
    const Model = () => {
        const model = useLoader(GLTFLoader, "../3D/Space/lego_space/scene.gltf")
      
        return (
          <primitive object={model.scene} />
        )
    }

    const Box = () => {
        //const texture = useLoader(TextureLoader, "../assets/zaatar.png")
        const meshRef = useRef()
      
        useFrame((state) => {
          meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01
        })
      
        return (
          <mesh ref={meshRef}>
            <boxBufferGeometry />
            <meshStandardMaterial 
                //map={texture}
                />
          </mesh>
        )
    }

    return (
         <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box />
       </Canvas>
    )
}
