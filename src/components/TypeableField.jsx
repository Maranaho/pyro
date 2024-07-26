import { useContext,useEffect } from 'react'
import { PyroContext } from '../context.js'
import { useLocalstorageState } from "rooks"

import Field from './Field'
import Greeting from './Greeting'

const TypeableField = () => {

    const [fieldView] = useLocalstorageState("fieldView",0)
    const [typeableFieldStep,setTypeableFieldStep] = useLocalstorageState("typeableFieldStep",0)
    const { dispatch } = useContext(PyroContext)
    const steps = 6
    const width = 541
    const height = 541
    const incrementLayout =()=>{
        if(typeableFieldStep < steps)setTypeableFieldStep(typeableFieldStep=>typeableFieldStep+1)
    }

    useEffect(()=>{
        dispatch({type:'SET_WIDTH',payload:width})
        dispatch({type:'SET_HEIGHT',payload:height})

        window.addEventListener('beforeunload', incrementLayout)
    },[])
    
    return (
        <div className="TypeableField">
            {fieldView === 0 ? <Field/>:<Greeting/>}
        </div>
    )
}

export default TypeableField