import GradientHeader from "./GradientHeader"
import BlackNav from "./BlackNav"
import DesktopContent from "./DesktopContent"

const Desktop = () => {
    
    return (
        <div className="Desktop">
            <GradientHeader desktop/>
            <div className="tabletMain">
                <BlackNav/>
                <DesktopContent/>
            </div>
        </div>
    )
}

export default Desktop