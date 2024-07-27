import { useContext,useEffect } from 'react'
import { PyroContext } from '../context.js'
import { useLocalstorageState } from "rooks"
import TemplateHeader from "./TemplateHeader"
import TemplateList from "./TemplateList"

const TemplateSearch = () => {

    const [templateStep,setTemplateStep] = useLocalstorageState("templateStep",0)
    const { dispatch } = useContext(PyroContext)
    
    const steps = 4
    const width = 935
    const height = 832

    const incrementLayout =()=>{
        if(templateStep < steps)setTemplateStep(templateStep=>templateStep+1)
    }
    
    useEffect(()=>{
        dispatch({type:'SET_WIDTH',payload:width})
        dispatch({type:'SET_HEIGHT',payload:height})
        incrementLayout()
    },[])

    return (
        <div className="TemplateSearch">
            <TemplateHeader/>
            <TemplateList/>
        </div>
    )
}

export default TemplateSearch