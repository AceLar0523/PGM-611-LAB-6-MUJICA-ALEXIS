import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

interface DodecahedronProductProps {
    color: string;
    metalness: number;
    position?: [number, number, number];
}

export const DodecahedronProduct = ({ color, metalness, position = [0, 0, 0] }: DodecahedronProductProps) => {
    const texture = useLoader(TextureLoader, '/cat3.jpg');

    return (
        <mesh position={position} castShadow>
            <dodecahedronGeometry args={[1.05, 0]} />
            <meshStandardMaterial map={texture} color={color} metalness={metalness} roughness={0.4} />
        </mesh>
    );
};
