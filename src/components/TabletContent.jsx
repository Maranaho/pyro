import pyrologo from "../assets/svg/pyro_logo1.svg" 

const TabletContent = () => (
    <div className="TabletContent">
        <div className="logoCtn">
            <img
                className="pyrologo"
                src={pyrologo}
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