import { useLocalstorageState } from "rooks"

import logo from "../assets/svg/pyro-txt.svg"
import naho from "../assets/png/naho.png"

const Topbar = () => {
    const [topbarGone] = useLocalstorageState("topbarGone",false)

    const [basicFrameStep,setBasicFrameStep] = useLocalstorageState("basicFrameStep",0)
    const [typeableFieldStep,setTypeableFieldStep] = useLocalstorageState("typeableFieldStep",0)

    const deleteMemory = ()=>{
        setBasicFrameStep(-1)
        setTypeableFieldStep(-1)
    }
    return (
        <nav className={topbarGone?"gone":""}>
            <div onClick={deleteMemory}><img width="40" src={logo}/></div>
            <div className="User">
                <span>Naho</span>
                <img width="20" src={naho}/>
            </div>
        </nav>
    )
}

export default Topbar