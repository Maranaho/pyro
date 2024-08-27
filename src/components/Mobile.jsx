import pyrologo from "../assets/svg/pyro_logo1.svg" 
import crop from "../assets/svg/crop.svg" 
import align from "../assets/svg/align.svg" 
import close from "../assets/svg/close.svg" 
import user from "../assets/svg/user.svg" 
import fullscreen from "../assets/svg/fullscreen.svg" 
import copy from "../assets/svg/copy.svg" 


const Mobile = () => {
    
    return (
        <div className="Mobile">
            <div className="lightGradient MobileHead">
                <div><img src={crop}/></div>
                <div className="icnCtn">
                    <img src={align}/>
                    <img src={close}/>
                </div>
            </div>
            <div className="mainContent">
                <div className="logoCtn">
                    <img
                        className="pyrologo"
                        src={pyrologo}
                    />
                </div>
                <div className="tileCtn">
                    <div className="tile"/>
                    <div className="tile"/>
                </div>
                <div className="footer blackNav">
                    <img src={user}/>
                    <img src={align}/>
                    <img src={copy}/>
                    <img src={fullscreen}/>
                </div>
            </div>
        </div>
    )
}

export default Mobile