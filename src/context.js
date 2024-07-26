import { createContext } from "react"

const initialState = {
    user: null,
    protoWidth:375,
    protoHeight:812,
    fileBG:"#F2F2F2",
    fieldView:0,
    userName:"",
}

const pyroReducer = (state,action) => {

    switch (action.type) {

        case 'SET_USERNAME':
            let SET_USERNAME = {...state}
            SET_USERNAME.userName = action.payload
          return SET_USERNAME;
      

        case 'SET_FIELD_VIEW':
            let SET_FIELD_VIEW = {...state}
            SET_FIELD_VIEW.fieldView = action.payload
          return SET_FIELD_VIEW;
      

        case 'SET_WIDTH':
            let SET_WIDTH = {...state}
            SET_WIDTH.protoWidth = action.payload
          return SET_WIDTH;
      
        case 'SET_HEIGHT':
            let SET_HEIGHT = {...state}
            SET_HEIGHT.protoHeight = action.payload
        return SET_HEIGHT;

        case "SET_FILE_BG": return {...state,fileBG:action.payload}
        case "USER": return {...state,user:action.payload}
            
        default: {
            console.error(`Type ${action.type} is not defined`);
            return state
        }
    }
}

const PyroContext = createContext({ state:initialState, dispatch: null })

export { PyroContext, pyroReducer, initialState } 