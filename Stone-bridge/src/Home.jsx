import { Html } from "@react-three/drei";
import './Home.css'
import { useControls } from 'leva'

export default function Home (){

    const { position,position1,position2 } = useControls({ position:
        {
            value: { x: -56.4, y: -7.6 },
            step: 0.1
        }
        ,position1:
        {
            value: { x1: - 22, y1: -3 },
            step: 0.1
        }
        ,position2:
        {
            value: { x2: - 11.5, y2: -1.6 },
            step: 0.1
        }
    })
    
    
    return<>
    
        <Html position={ [ position.x, position.y, 0 ]}>
            <div className="label">
                Who?
            </div>
        </Html>

        <Html position={ [ position1.x1, position1.y1, 0 ]}>
            <div className="label">
                What?
            </div>
        </Html>

        <Html position={ [ position2.x2, position2.y2, 0 ]}>
            <div className="label">
                When?
            </div>
        </Html>
    
    </>

}