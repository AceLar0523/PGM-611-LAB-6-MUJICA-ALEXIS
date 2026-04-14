import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

interface IcosahedronProductProps {
    color: string;
    metalness: number;
    position?: [number, number, number];
}

export const IcosahedronProduct = ({ color, metalness, position = [0, 0, 0] }: IcosahedronProductProps) => {
    const texture = useLoader(TextureLoader, '/catmeme.jpg');

    return (
        <mesh position={position} castShadow>
            <icosahedronGeometry args={[1.05, 0]} />
            <meshStandardMaterial map={texture} color={color} metalness={metalness} roughness={0.32} />
        </mesh>
    );
};
