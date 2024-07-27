import canvalogo from "../assets/svg/canvalogo.svg" 

const TabletContent = () => (
    <div className="TabletContent">
        <div className="logoCtn">
            <img
                className="canvalogo"
                src={canvalogo}
            />
        </div>
        <div className="tileCtn">
            <div className="tiles">
                <div className="tile"/>
                <div className="tile"/>
                <div className="tile"/>
            </div>
            <div className="tile cropped"/>
        </div>
    </div>
)

export default TabletContent