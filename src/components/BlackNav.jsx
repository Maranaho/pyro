import copy from "../assets/svg/copy.svg" 
import fullscreen from "../assets/svg/fullscreen.svg" 
import close from "../assets/svg/close.svg" 
import user from "../assets/svg/user.svg" 
import align from "../assets/svg/align.svg" 

const BlackNav = () => (
    <div className="BlackNav blackNav">
        <div className="iconCtn">
            <img src={copy}/>
            <img src={fullscreen}/>
            <img src={close}/>
            <img src={user}/>
            <img src={align}/>
            <img src={copy}/>
            <img src={fullscreen}/>
            <img src={user}/>
            <img src={align}/>
        </div>
        <div className="iconCtn">
            <img src={fullscreen}/>
            <img src={close}/>
        </div>
    </div>
)

export default BlackNav