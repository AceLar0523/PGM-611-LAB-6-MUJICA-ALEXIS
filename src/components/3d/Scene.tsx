/* import {useLoader} from '@react-three/fiber';
import { TextureLoader } from 'three'; */
import {Canvas} from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { Product } from './Product';
import { CubeProduct } from './cubo3d/CubeProduct';
import './Scene.scss';


interface SceneProps {
    color: string;
    metalness: number;
}

export const Scene = ({ color, metalness }: SceneProps) => (
    <div className="scene-wrapper">
        <Canvas shadows camera={{position: [0, 0.5, 7], fov: 45}}>
            {/* Luz base para evitar zonas totalmente oscuras. */}
            <ambientLight intensity={0.6}/>
            <directionalLight position={[4, 6, 5]} intensity={1} castShadow />
            <Environment preset="city"/>
            {/* Esfera a la izquierda, cubo a la derecha, ambos controlados por el panel. */}
            <Product color={color} metalness={metalness} position={[-1.8, 0, 0]}/>
            <CubeProduct color={color} metalness={metalness} position={[1.8, 0, 0]} />
            <ContactShadows position={[0, -1.5, 0]} opacity={0.5} scale={10} blur={1}/>
            <OrbitControls
                makeDefault
                target={[0, 0, 0]}
                enableDamping
                minDistance={4}
                maxDistance={12}
            />


        </Canvas>
    </div>
);