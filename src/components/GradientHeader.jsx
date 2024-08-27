import crop from "../assets/svg/crop.svg" 
import copy from "../assets/svg/copy.svg" 
import fullscreen from "../assets/svg/fullscreen.svg" 
import user from "../assets/svg/user.svg" 
import align from "../assets/svg/align.svg" 
import close from "../assets/svg/close.svg" 

const GradientHeader = ({desktop}) => {
    return (
        <div className="gradientHeader">
                <div className="darkGradient header1">
                    <div className="tabs">
                        <div className="tab shortGradient">
                            <span>Pyro</span>
                            <img src={close}/>
                        </div>
                        {desktop?(
                            <>
                                <div className="tab low shortGradient">
                                    <span>Awesome Figma plugin</span>
                                    <img src={close}/>
                                </div>
                                <div className="tab low shortGradient">
                                    <span>JS Interview</span>
                                    <img src={close}/>
                                </div>
                            </>
                        ):<span>+2</span>}
                    </div>
                </div>
                <div className="lightGradient header2">
                    <img src={crop}/>
                    <div className="iconCtn">
                        <img src={copy}/>
                        <img src={fullscreen}/>
                        <img src={user}/>
                        <img src={align}/>
                        <img src={close}/>
                    </div>
                </div>
            </div>
    )
}

export default GradientHeader