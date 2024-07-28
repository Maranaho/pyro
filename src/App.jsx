import { useReducer,useEffect } from 'react'
import { PyroContext,pyroReducer, initialState } from './context.js'
import { useLocalstorageState } from "rooks"
import getRandomNb from "./utils/getRandomNb" 

import Topbar from './components/Topbar'
import Content from './components/Content'
import Loading from './components/Loading'

const App = () => {
  let time
  const min = 1800
  const max = 3800
  const [state,dispatch] = useReducer(pyroReducer,initialState)
  const [topbarGone,setTopbarGone] = useLocalstorageState("topbarGone",false)
  const handleKeyDown = e =>{
    if(e.key === "f" && e.target.classList.contains("Pyro")){
      setTopbarGone(!topbarGone)
    }
  }
const handleMove = () =>{
  if(!state.loaded)time = setTimeout(()=>{
    dispatch({type:"LOAD",payload:true})
  },getRandomNb(min,max))
} 

useEffect(()=>{
  return ()=> clearTimeout(time)
},[])

  return (  
    <PyroContext.Provider value={{state,dispatch}}>
      <main
        tabIndex="0"
        onKeyDown={handleKeyDown}
        onMouseMove={handleMove}
        style={{background:state.fileBG}}
        className={`Pyro ${topbarGone?"topbarGone":""}`}
      >
        <Topbar/>
        {state.loaded?<Content/>:<Loading/>}
      </main>
    </PyroContext.Provider>
  )
}

export default App