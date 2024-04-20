import {createRoot} from 'react-dom/client'
import Experience  from './Experience'
import { Canvas } from '@react-three/fiber'

const root = createRoot(document.getElementById('root'))

root.render(
    <Canvas                 
        camera={{ position: [2, 3, 5] }} // primer elemento: x, segundo: y, tercero: z
    >
        <Experience />
    </Canvas>
)