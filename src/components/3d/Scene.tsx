/* import {useLoader} from '@react-three/fiber';
import { TextureLoader } from 'three'; */
import {Canvas} from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { Product } from './Product';
import './Scene.scss';


interface SceneProps {
    color: string;
    metalness: number;
}

export const Scene = ({ color, metalness }: SceneProps) => (
    <div className="scene-wrapper">
        <Canvas shadows camera={{position: [0,0,4], fov: 45}}>
            <ambientLight intensity={0.5}/>
            <Environment preset="city"/>
            <Product color={color} metalness={metalness}/>
            <ContactShadows position={[0, -1.5, 0]} opacity={0.5} scale={10} blur={1}/>
            <OrbitControls makeDefault/>


        </Canvas>
    </div>
);