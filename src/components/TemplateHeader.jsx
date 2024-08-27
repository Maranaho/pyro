import { useContext } from 'react'
import { PyroContext } from '../context.js'
import { useLocalstorageState } from "rooks"
import search from "../assets/svg/search.svg"

const TemplateHeader = () => {
    
    const { state:{ searchValue },dispatch } = useContext(PyroContext)
    const [templateStep] = useLocalstorageState("templateStep",0)

    return (
        <div className="TemplateHeader diagonalGradient">
            <span>What will you design today?</span>
            <div className="searchCtn">
                <div><img src={search}/></div>
                {templateStep > 0 ?(
                    <input
                        className="searchInput"
                        value={searchValue}
                        placeholder={templateStep > 1?"Search your content":null}
                        onChange={e=>dispatch({type:"SET_SEARCHVALUE",payload:e.target.value})}
                    />
                ):<div className="searchInput"/>}
            </div>
        </div>
    )
}

export default TemplateHeader