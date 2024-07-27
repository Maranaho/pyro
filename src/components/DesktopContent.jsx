import { useLocalstorageState } from "rooks"
import AssetsBank from "./AssetsBank"
import canvalogo from "../assets/svg/canvalogo.svg" 

const DesktopContent = () => {

    const [responsiveFrameStep] = useLocalstorageState("responsiveFrameStep",0)

    return (
        <div className="DesktopContent">
            {responsiveFrameStep !== 4 &&<AssetsBank/>}
            <div className="viewport">
                <div className="logoCtn tile">
                    <img
                        className="canvalogo"
                        src={canvalogo}
                    />
                </div>
            </div>
        </div>
    )
}

export default DesktopContent