import React, { useRef, Suspense } from "react"
import {
  OrbitControls,
  Text,
  Stars,
  Center,
  Environment,
  Text3D
} from '@react-three/drei'
import { Canvas, useFrame, useLoader} from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { TextureLoader } from "three/src/loaders/TextureLoader"
import imgURL from '../assets/JuSo.png'
import sceneURL from './SceneJuSo/Dragon'
import JuSoHouse from './SceneJuSo/CoffeeShop'
import fontUrl from './SceneJuSo/Mrs. Monster 3D_Regular.json'
import fontUrlMarlb from './SceneJuSo/Bullpen 3D_Regular.json'

export default function JuSo() {

      const Model = () => {
          const model = useLoader(GLTFLoader, sceneURL)
        
          return (
            <Suspense fallback={null}>
              <primitive object={model.scene} position={[-.5, -1, -1]}/>
              {/* <Environment preset="night" background /> */}
            </Suspense>
          )
      }

      const ModelHouse = () => {
        const model = useLoader(GLTFLoader, JuSoHouse)
      
        return (
          <Suspense fallback={null}>
            <primitive object={model.scene} position={[.3, -.88, 3]}/>
            {/* <Environment preset="night" background /> */}
          </Suspense>
        )
    }

    const Box = () => {
        const texture = useLoader(TextureLoader, imgURL)
        const meshRef = useRef()
        useFrame((state) => {
          meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01
        })
      
        return (
          <mesh 
              ref={meshRef} 
              position={[2, 0, 0]}>
              <boxGeometry />
              <meshStandardMaterial map={texture} />
          </mesh>
        )
    }

    const JuSoText = () => {
      return(
          < >
            <Text3D font={fontUrl} size={1} color={'#fac300'}  position={[-3, 5, -5]}>
              JungleSoft
            </Text3D>
            <Text3D font={fontUrlMarlb} size={.4} color={'#fac300'} position={[-3, 4, -5]}>
                Warehouse solutions
            </Text3D>
            <Text3D font={fontUrlMarlb} size={.4} color={'black'} position={[-4, 3, -5]}>
                We are proud to introduce
            </Text3D>
            <Text3D font={fontUrlMarlb} size={.4} color={'black'} position={[-3, 2, -5]}>
                the Zaater project
            </Text3D>
          </>
      )
    }

    return (
        <Canvas >
            <ambientLight  intensity={0.1} />
            <pointLight color="white" position={[0, 10, 30]} />
            <OrbitControls/>
            <JuSoText />
            <ModelHouse />
            <Box/>
            <Model />
            <Stars/>
       </Canvas>
    )
}
