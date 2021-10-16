
import { SET_MODAL } from "../context/contants"

interface _action{
    type:string,
    payload:any
}
interface _state{
    isShowModal: boolean,
    item: any,
    type:number,
}

export const modalReducer = (state:_state,action:_action)=>{
    const {type,payload} = action
    switch(type){
        case SET_MODAL:
            return {
                isShowModal: payload.isShowModal,
                item:payload.item,
                type:payload.type
            }
        default:
            return state
    }
}