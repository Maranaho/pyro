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
import ResponsiveFrame from './ResponsiveFrame'
import MovieSearch from './MovieSearch'
import IntuitPrivate from './IntuitPrivate'

import '../resize.css'

const fileKeys = {
  basicFrameKey:"OUFQg2oawakojO7YiRbfSg-pyro",
  typeableField:"OUFQg2oawakojO7YiRbfSg-typeable-field",
  responsiveFrame:"OUFQg2oawakojO7YiRbfSg-responsive-frame",
  movieSearch:"OUFQg2oawakojO7YiRbfSg-movie-search"
}
const {
  basicFrameKey,
  typeableField,
  responsiveFrame,
  movieSearch,
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
                <Route path={responsiveFrame} element={<ResponsiveFrame />} />
                <Route path={movieSearch} element={<MovieSearch />} />
                <Route path="*" element={<IntuitPrivate />} />
              </Routes>
          </div>
        </Resizable>
      </BrowserRouter>
  )
}

export default Content