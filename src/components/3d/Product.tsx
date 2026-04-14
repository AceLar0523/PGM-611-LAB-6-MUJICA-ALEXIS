import {useLoader} from '@react-three/fiber';
import { TextureLoader } from 'three';

interface ProductProps {
    color: string;
    metalness: number;
    position?: [number, number, number];
}

export const Product = ({ color, metalness, position = [0, 0, 0] }: ProductProps) => {
    const texture = useLoader(TextureLoader, '/catmeme.jpg');
    return(
        <mesh position={position} castShadow>
            <sphereGeometry args={[1, 64, 64]}/>
            <meshStandardMaterial
                color={color}
                map={texture}
                metalness={metalness}
            />
        </mesh>
    );
}