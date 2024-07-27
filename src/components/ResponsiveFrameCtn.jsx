import { useContext,useEffect, useRef,useState } from 'react'
import { PyroContext } from '../context.js'
import { useLocalstorageState } from "rooks"

import ResponsiveFrame from './ResponsiveFrame'

const ResponsiveFrameCtn = () => {

    const responsiveRef = useRef(null)
    const [responsiveFrameStep,setResponsiveFrameStep] = useLocalstorageState("responsiveFrameStep",0)
    const { state:{ protoWidth },dispatch } = useContext(PyroContext)
    
    const steps = 5
    const width = 259
    const height = 608
    const breakpoints = [259,1200,1610]

    const updateBP = w => {
        const idx = breakpoints.findIndex(i => w <= i)
        dispatch({type:"SET_BREAKPOINT",payload:idx >= 0 ? idx : 2 })
      }

    const incrementLayout =()=>{
        if(responsiveFrameStep < steps)setResponsiveFrameStep(responsiveFrameStep=>responsiveFrameStep+1)
    }

    useEffect(()=>{
        dispatch({type:'SET_WIDTH',payload:width})
        dispatch({type:'SET_HEIGHT',payload:height})

        window.addEventListener('beforeunload', incrementLayout)
    },[])

    useEffect(()=>{
        updateBP(protoWidth)
    },[protoWidth])


    
    return (
        <div
            ref={responsiveRef}
            className="ResponsiveFrameCtn"
        >
            <ResponsiveFrame/>
        </div>
    )
}

export default ResponsiveFrameCtn