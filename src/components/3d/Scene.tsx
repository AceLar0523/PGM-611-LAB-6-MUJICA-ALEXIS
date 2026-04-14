import {Canvas} from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { Product } from './Product';
import { CubeProduct } from './cubo3d/CubeProduct';
import { CapsuleProduct } from './Capsule3d/CapsuleProduct';
import { DodecahedronProduct } from './Dodecahedron3d/DodecahedronProduct';
import { TetrahedronProduct } from './tetrahedron3d/TetrahedronProduct';
import { OctahedronProduct } from './octahedron3d/OctahedronProduct';
import { IcosahedronProduct } from './icosahedron3d/IcosahedronProduct';
import type { FigureType } from './figureOptions';
import './Scene.scss';

interface FigureInstance {
    id: string;
    type: FigureType;
    position: [number, number, number];
}

interface SceneProps {
    color: string;
    metalness: number;
    figures: FigureInstance[];
    isAllView: boolean;
}

const renderFigure = (type: FigureType, color: string, metalness: number, position: [number, number, number]) => {
    switch (type) {
        case 'sphere':
            return <Product color={color} metalness={metalness} position={position} />;
        case 'cube':
            return <CubeProduct color={color} metalness={metalness} position={position} />;
        case 'capsule':
            return <CapsuleProduct color={color} metalness={metalness} position={position} />;
        case 'dodecahedron':
            return <DodecahedronProduct color={color} metalness={metalness} position={position} />;
        case 'tetrahedron':
            return <TetrahedronProduct color={color} metalness={metalness} position={position} />;
        case 'octahedron':
            return <OctahedronProduct color={color} metalness={metalness} position={position} />;
        case 'icosahedron':
            return <IcosahedronProduct color={color} metalness={metalness} position={position} />;
        default:
            return null;
    }
};

export const Scene = ({ color, metalness, figures, isAllView }: SceneProps) => (
    <div className="scene-wrapper">
        <Canvas shadows camera={{position: isAllView ? [0, 1.8, 13] : [0, 1, 8], fov: 45}}>
            {/* Luz base y direccional para mantener legibles todas las figuras. */}
            <ambientLight intensity={0.62}/>
            <directionalLight position={[6, 8, 6]} intensity={1.15} castShadow />
            <Environment preset="city"/>

            {figures.map((figure) => (
                <group key={figure.id}>
                    {renderFigure(figure.type, color, metalness, figure.position)}
                </group>
            ))}

            <ContactShadows position={[0, -1.7, 0]} opacity={0.52} scale={20} blur={1.2}/>
            <OrbitControls
                makeDefault
                target={[0, 0, 0]}
                enableDamping
                minDistance={isAllView ? 7 : 4}
                maxDistance={isAllView ? 22 : 14}
            />
        </Canvas>
    </div>
);