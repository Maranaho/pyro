import { createContext } from "react"

const initialState = {
    user: null,
    protoWidth:375,
    protoHeight:812,
    fileBG:"#F2F2F2",
    fieldView:0,
    userName:"",
    breakpoint:0,
    searchValue:"",
    loaded: false
}

const pyroReducer = (state,action) => {

    switch (action.type) {

        case 'LOAD':
            let LOAD = {...state}
            LOAD.loaded = action.payload
          return LOAD;

        case 'SET_SEARCHVALUE':
            let SET_SEARCHVALUE = {...state}
            SET_SEARCHVALUE.searchValue = action.payload
          return SET_SEARCHVALUE;

        case 'SET_BREAKPOINT':
            let SET_BREAKPOINT = {...state}
            SET_BREAKPOINT.breakpoint = action.payload
          return SET_BREAKPOINT;

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