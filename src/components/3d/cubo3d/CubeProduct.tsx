import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

interface CubeProductProps {
    color: string;
    metalness: number;
    position?: [number, number, number];
}

export const CubeProduct = ({ color, metalness, position = [0, 0, 0] }: CubeProductProps) => {
    // Cada entrada representa la textura de una cara del cubo (derecha, izquierda, arriba, abajo, frente, atras).
    const textures = useLoader(TextureLoader, [
        '/cat1.jpg',
        '/cat2.jpg',
        '/cat3.jpg',
        '/cat4.jpg',
        '/catmeme.jpg',
        '/cat5.jpg',
    ]);

    return (
        <mesh position={position} castShadow>
            <boxGeometry args={[1.6, 1.6, 1.6]} />
            {textures.map((texture, index) => (
                <meshStandardMaterial
                    // Se adjunta un material por cara para permitir imagen distinta en cada lado.
                    key={index}
                    attach={`material-${index}`}
                    map={texture}
                    color={color}
                    metalness={metalness}
                    roughness={0.35}
                />
            ))}
        </mesh>
    );
};
