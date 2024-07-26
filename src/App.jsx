import { useReducer,useState,useEffect } from 'react'
import { PyroContext,pyroReducer, initialState } from './context.js'
import { useLocalstorageState } from "rooks"
import getRandomNb from "./utils/getRandomNb" 

import Topbar from './components/Topbar'
import Content from './components/Content'
import Loading from './components/Loading'

const App = () => {
  let time
  const min = 600
  const max = 2400
  const [state,dispatch] = useReducer(pyroReducer,initialState)
  const [topbarGone,setTopbarGone] = useLocalstorageState("topbarGone",false)
  const [loaded,setLoaded] = useState(false)
  const handleKeyDown = e =>{
    if(e.key === "f" && e.target.classList.contains("Pyro")){
      setTopbarGone(!topbarGone)
    }
  }
const handleMove = () =>{
  if(!loaded)time = setTimeout(()=>{
    setLoaded(true)
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
        {loaded?<Content/>:<Loading/>}
      </main>
    </PyroContext.Provider>
  )
}

export default App