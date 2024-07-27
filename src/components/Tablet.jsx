import GradientHeader from "./GradientHeader"
import BlackNav from "./BlackNav"
import TabletContent from "./TabletContent"

const Tablet = () => {
    
    return (
        <div className="Tablet">
            <GradientHeader/>
            <div className="tabletMain">
                <BlackNav/>
                <TabletContent/>
            </div>
        </div>
    )
}

export default Tablet