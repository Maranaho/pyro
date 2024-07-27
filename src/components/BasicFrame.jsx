import { useContext,useEffect,useState } from 'react'
import { PyroContext } from '../context.js'
import { useLocalstorageState } from "rooks"

const BasicFrame = () => {

    const [basicFrameStep,setBasicFrameStep] = useLocalstorageState("basicFrameStep",0)
    const { dispatch } = useContext(PyroContext)
    const defaultWidth = [500,200,200]
    const defaultHeight = [500,200,200]
    const width = "100%"
    const height = "100%"
    const style = [
        {
            width,height,
            background:"#fff",
            borderRadius:"30px"
        },
        {
            width,height,
            background:"#fff",
            borderRadius:"30px",
            border:"1px solid #DDDDDD"
        },
        {
            width,height,
            background:"#FFDCDC",
            borderRadius:"30px"
        }
    ]
    const bg = ["#f2f2f2","#fff","#fff"]
    const incrementLayout =()=>{
        if(basicFrameStep < style.length - 1)setBasicFrameStep(basicFrameStep=>basicFrameStep+1)
    }

    useEffect(()=>{
        let step = basicFrameStep === -1 ? 0 : basicFrameStep
        dispatch({type:'SET_FILE_BG',payload:bg[step]})
        dispatch({type:'SET_WIDTH',payload:defaultWidth[step]})
        dispatch({type:'SET_HEIGHT',payload:defaultHeight[step]})
        // incrementLayout()
        window.addEventListener('beforeunload', incrementLayout)
    },[])
    
    return (
        <div
            className="BasicFrame"
            style={style[basicFrameStep]}
        />
    )
}

export default BasicFrame