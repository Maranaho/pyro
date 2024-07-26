import { useContext } from 'react'
import { PyroContext } from '../context.js'
import { useLocalstorageState } from "rooks"

const Greeting = () => {
    const { state:{ userName } } = useContext(PyroContext)
    const [_,setFieldView] = useLocalstorageState("fieldView",0)

    return (
        <div className="Greeting">
            <div className="greetingMsg">
                <div>
                    <span>Hi, </span>
                    <span className="userName">{userName || "userName"}</span>
                </div>
                <span>Looking goood :)</span>
            </div>


            <div className="btnCtn">
                <button
                    className="btn ghost"
                    onClick={()=>setFieldView(0)}
                >Back</button>
            </div>
        </div>
    )
}

export default Greeting