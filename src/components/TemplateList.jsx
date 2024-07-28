import { useContext } from 'react'
import { PyroContext } from '../context.js'
import { useLocalstorageState } from "rooks"
import templates from "../templates"

const TemplateList = () => {
    
    const [templateStep] = useLocalstorageState("templateStep",0)
    const { state:{ searchValue } } = useContext(PyroContext)

    return (
        <div className={`TemplateList ${templateStep < 4?"centered":""}`}>
            {Object.keys(templates)
            .filter(templateName=>{
                if(templateStep < 3)return true
                return templateName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
            })
            .map(templateName=>{
                const { label,thumb } = templates[templateName]
                return (
                    <div key={templateName}>
                        <img
                            width="200"
                            height="145"
                            src={thumb}
                        />
                        <span>{label}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default TemplateList