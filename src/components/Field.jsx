import { useContext,useRef, useState } from 'react'
import { PyroContext } from '../context.js'
import { useLocalstorageState } from "rooks"

const Field = () => {
    const inputRef = useRef(null)
    const [val,setVal] = useState("")
    const { dispatch } = useContext(PyroContext)
    const [_,setFieldView] = useLocalstorageState("fieldView",0)
    const [typeableFieldStep] = useLocalstorageState("typeableFieldStep",0)
    const placeholders = [null,null,"Your beautiful name","Your beautiful name..."]
    const currentPlaceholder = placeholders[typeableFieldStep]
    const inputType = typeableFieldStep > 3 ? "password":"text"
    const buttonIsActive = typeableFieldStep > 4

    const handleNextClick = ()=>{
        if(typeableFieldStep > 5)dispatch({type:"SET_USERNAME",payload:val})
        setFieldView(1)
    }

    return (
        <div className="Field">
            <div className="FieldCtn">
                <div className="labelCtn">
                    <span>Username:</span>
                    {typeableFieldStep>0?(
                        <input
                            ref={inputRef}
                            className="input"
                            placeholder={currentPlaceholder}
                            value={val}
                            onChange={e=>setVal(e.target.value)}
                            type={inputType}
                        />
                    ):<div className="input"/>}
                </div>

                <div className="btnCtn">
                    {buttonIsActive?
                        <button
                            className="btn primary"
                            onClick={handleNextClick}
                        >Next</button> :
                        <div className="btn primary">Next</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Field