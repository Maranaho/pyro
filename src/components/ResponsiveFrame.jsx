import { useContext } from 'react'
import { PyroContext } from '../context.js'
import { useLocalstorageState } from "rooks"

import Mobile from './Mobile'
import Tablet from './Tablet'
import Desktop from './Desktop'

const ResponsiveFrame = () => {
    
    const { state:{ breakpoint } } = useContext(PyroContext)
    const [responsiveFrameStep] = useLocalstorageState("responsiveFrameStep",0)
    const isResponsive = responsiveFrameStep > 0

    if(!isResponsive) return  <Mobile/>
    switch (breakpoint) {
        case 0: return <Mobile/>
        case 1: return <Tablet/>
        case 2: return <Desktop/>
        default: return <Mobile/>
    }
}

export default ResponsiveFrame