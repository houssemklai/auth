import { FAIL, SIGNUP, SIGNIN , GET_CURRENT,LOGOUT,CLEARERRORS } from "../types/authTypes"



const initialState= {
    user: {}, 
    auth:false,
    errors:[]
}

const authReducer= (state=initialState, action)=>{

    switch (action.type) {
        case SIGNUP:
            case SIGNIN:
            localStorage.setItem('token', action.payload.token)
            return {...state, user:action.payload.user, auth:true}
            case GET_CURRENT: 
            return {...state,  user:action.payload, auth:true }
            case FAIL:
            return {...state,errors:action.payload.errors,auth:false}
            case LOGOUT: 
            localStorage.removeItem('token')
            return {...state, auth: false, user:null}
            case CLEARERRORS:
          return {...state, errors:[]}

            default:
                return state
    }
}

export default authReducer