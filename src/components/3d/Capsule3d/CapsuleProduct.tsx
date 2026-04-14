import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

interface CapsuleProductProps {
    color: string;
    metalness: number;
    position?: [number, number, number];
}

export const CapsuleProduct = ({ color, metalness, position = [0, 0, 0] }: CapsuleProductProps) => {
    const texture = useLoader(TextureLoader, '/cat2.jpg');

    return (
        <mesh position={position} castShadow>
            <capsuleGeometry args={[0.65, 1.2, 8, 16]} />
            {/* La superficie completa mantiene el estilo de textura de gato aplicado al material. */}
            <meshStandardMaterial map={texture} color={color} metalness={metalness} roughness={0.38} />
        </mesh>
    );
};
