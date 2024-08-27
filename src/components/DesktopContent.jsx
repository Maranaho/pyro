import { useLocalstorageState } from "rooks"
import AssetsBank from "./AssetsBank"
import pyrologo from "../assets/svg/pyro_logo1.svg" 

const DesktopContent = () => {

    const [responsiveFrameStep] = useLocalstorageState("responsiveFrameStep",0)

    return (
        <div className="DesktopContent">
            {responsiveFrameStep !== 4 &&<AssetsBank/>}
            <div className="viewport">
                <div className="logoCtn tile">
                    <img
                        className="canvalogo"
                        src={pyrologo}
                    />
                </div>
            </div>
        </div>
    )
}

export default DesktopContent