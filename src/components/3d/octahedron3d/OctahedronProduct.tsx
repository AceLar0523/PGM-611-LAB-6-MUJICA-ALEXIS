import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

interface OctahedronProductProps {
    color: string;
    metalness: number;
    position?: [number, number, number];
}

export const OctahedronProduct = ({ color, metalness, position = [0, 0, 0] }: OctahedronProductProps) => {
    const texture = useLoader(TextureLoader, '/cat5.jpg');

    return (
        <mesh position={position} castShadow>
            <octahedronGeometry args={[1.15, 0]} />
            <meshStandardMaterial map={texture} color={color} metalness={metalness} roughness={0.35} />
        </mesh>
    );
};
