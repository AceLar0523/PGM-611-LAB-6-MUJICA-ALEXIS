import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

interface TetrahedronProductProps {
    color: string;
    metalness: number;
    position?: [number, number, number];
}

export const TetrahedronProduct = ({ color, metalness, position = [0, 0, 0] }: TetrahedronProductProps) => {
    const texture = useLoader(TextureLoader, '/cat4.jpg');

    return (
        <mesh position={position} castShadow>
            <tetrahedronGeometry args={[1.2, 0]} />
            <meshStandardMaterial map={texture} color={color} metalness={metalness} roughness={0.36} />
        </mesh>
    );
};
