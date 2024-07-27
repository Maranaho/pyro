import { useLocalstorageState } from "rooks"

import logo from "../assets/svg/pyro-txt.svg"
import naho from "../assets/png/naho.png"

const Topbar = () => {
    const [topbarGone] = useLocalstorageState("topbarGone",false)

    const [_,setBasicFrameStep] = useLocalstorageState("basicFrameStep",0)
    const [__,setTypeableFieldStep] = useLocalstorageState("typeableFieldStep",0)
    const [___,setResponsiveFrameStep] = useLocalstorageState("responsiveFrameStep",0)
    const [____,setTemplateStep] = useLocalstorageState("templateStep",0)

    const deleteMemory = ()=>{
        setBasicFrameStep(-1)
        setTypeableFieldStep(-1)
        setResponsiveFrameStep(-1)
        setTemplateStep(-1)
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