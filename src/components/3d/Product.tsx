import {useLoader} from '@react-three/fiber';
import { TextureLoader } from 'three';

export const Product = ({color, metalness}: any) => {
    const texture = useLoader(TextureLoader, '/catmeme.jpg');
    return(
        <mesh>
            <sphereGeometry args={[1, 64, 64]}/>
            <meshStandardMaterial
                color={color}
                map={texture}
                metalness={metalness}
            />
        </mesh>
    );
}