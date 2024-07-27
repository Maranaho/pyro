import { useContext, useEffect,useState } from 'react'
import { PyroContext } from "../context.js"
import { useLocalstorageState } from "rooks"

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import { Resizable } from "react-resizable"
import BasicFrame from './BasicFrame'
import TypeableField from './TypeableField'
import ResponsiveFrameCtn from './ResponsiveFrameCtn'
import TemplateSearch from './TemplateSearch'
import IntuitPrivate from './IntuitPrivate'

import '../resize.css'

const fileKeys = {
  basicFrameKey:"OUFQg2oawakojO7YiRbfSg-pyro",
  typeableField:"OUFQg2oawakojO7YiRbfSg-typeable-field",
  responsiveFrame:"OUFQg2oawakojO7YiRbfSg-responsive-frame",
  templateSearch:"OUFQg2oawakojO7YiRbfSg-template-search"
}
const {
  basicFrameKey,
  typeableField,
  responsiveFrame,
  templateSearch,
} = fileKeys

const Content = () => {
  const { state:{
      protoWidth,
      protoHeight,
  },dispatch } = useContext(PyroContext)


  const [topbarGone] = useLocalstorageState("topbarGone",false)
  const [topGap,setTopGap] = useState(topbarGone)
  const minWidth = 200
  const minHeight = 200


  const handleResize = (e,{size}) =>{
      const { width,height } = size
      dispatch({type:'SET_WIDTH',payload:width})
      dispatch({type:'SET_HEIGHT',payload:height})
    }
    
  useEffect(()=>{
    setTopGap(topbarGone?0:40)
  },[topbarGone])
  
  return (  
    <BrowserRouter>
        <Resizable
          maxConstraints={[window.innerWidth, window.innerHeight - topGap]}
          minConstraints={[minWidth, minHeight]}
          onResize={handleResize}
          width={protoWidth}
          height={protoHeight}>
          <div
            style={{
              width:protoWidth,
              height:protoHeight
            }}
          >
              <Routes>
                <Route path="/" element={<div><h1>Hello World</h1></div>} />
                <Route path={basicFrameKey} element={<BasicFrame />} />
                <Route path={typeableField} element={<TypeableField />} />
                <Route path={responsiveFrame} element={<ResponsiveFrameCtn />} />
                <Route path={templateSearch} element={<TemplateSearch />} />
                <Route path="*" element={<IntuitPrivate />} />
              </Routes>
          </div>
        </Resizable>
      </BrowserRouter>
  )
}

export default Content