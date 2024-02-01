import { Html } from "@react-three/drei";
import './Home.css'

export default function Home (){

    return<>
    
        <Html position={[3.0,-0.2,0]}>
            <div className="label">
                Contact
            </div>
        </Html>

        <Html position={[-0.5,1.2,0]}>
            <div className="label">
                About us
            </div>
        </Html>
    
    </>

}