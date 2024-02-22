import {shaderMaterial ,useTexture ,useGLTF, OrbitControls } from '@react-three/drei'
import { useFrame ,extend, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import { Perf } from 'r3f-perf'
import Home from './Home'
import portalVertexShader from './shaders/portal/vertex.glsl'
import portalFragmentShader from './shaders/portal/fragment.glsl'
import glitchVertexShader from './shaders/glitch/vertex.glsl'
import glitchFragmentShader from './shaders/glitch/fragment.glsl'


const PlanMaterial = shaderMaterial(
    {
        uBigWavesSpeed : 0.4,
        uBigWavesElevation: 0.15,
        uBigWavesFrequency: new THREE.Vector2(1.5, 1.5),
        uTime : 0,
        uColorStart : new THREE.Color('#1f90cf'),
        uColorEnd : new THREE.Color('#9bd8ff')
    },
    portalVertexShader,
    portalFragmentShader
)

extend({PlanMaterial})

const GlitchMaterial = shaderMaterial(
    {
        
    },
    glitchVertexShader,
    glitchFragmentShader
)

extend({GlitchMaterial})

export default function Experience()
{
    const {nodes} = useGLTF('./model/portal.glb')
    const planMaterial = useRef()
    const glitchMaterial = useRef()
    const {camera} = useThree()

    useFrame((state, delta) => 
    {

        planMaterial.current.uTime += delta
        
    })

    const backedTexture = useTexture('./model/baked.jpg')
    backedTexture.flipY = false

    camera.position.set(11.48, 3.31, 1.98);
    camera.lookAt(0, 0.5, 0)
    
    return <>

        <Perf />

        <color args={['#030202']} attach="background"/>

        {/*<OrbitControls makeDefault />*/}

        
        <mesh geometry={nodes.Cube013.geometry} position={nodes.Cube013.position}>
            <meshBasicMaterial map={ backedTexture }/>
            <Home/>
        </mesh>
        <mesh
            geometry={nodes.Cube002.geometry}
            position={nodes.Cube002.position}
        />
        <mesh
            geometry={nodes.Cube014.geometry}
            position={nodes.Cube014.position}
        />
        <mesh
            geometry={nodes.Cube015.geometry}
            position={nodes.Cube015.position}
        />
        <mesh
            geometry={nodes.Cube033.geometry}
            position={nodes.Cube033.position}
        />
        <mesh rotation={[-Math.PI / 2, 0, 0]} >
            <planeBufferGeometry args={[8, 8, 512, 512]}/>
            <planMaterial ref= {planMaterial} />
        </mesh>
        <mesh
            geometry={nodes.Cube027.geometry}
            position={nodes.Cube027.position}
        >
            <glitchMaterial ref= {glitchMaterial} />

        </mesh>
        <mesh
            geometry={nodes.Cube028.geometry}
            position={nodes.Cube028.position}
        >
            <glitchMaterial />

        </mesh>
        <mesh
            geometry={nodes.Cube029.geometry}
            position={nodes.Cube029.position}
        >
             <glitchMaterial />

        </mesh>
        <mesh
            geometry={nodes.Cube030.geometry}
            position={nodes.Cube030.position}
        >
             <glitchMaterial />

        </mesh>
        <mesh
            geometry={nodes.Cube011.geometry}
            position={nodes.Cube011.position}
        >
             <glitchMaterial />

        </mesh>
        <mesh
            geometry={nodes.Cube012.geometry}
            position={nodes.Cube012.position}
        >
             <glitchMaterial />

        </mesh>


    </>
}