import { SET_AIR,SET_WATER } from "../context/contants";

interface _action{
    type:string,
    payload:any
}
interface _state{
    dataAir: any,
    dataWater: any,
}
export const monitoringStationsReducer = (state:_state,action:_action)=>{
    const {type,payload}=action;
    switch(type){
        case SET_AIR:
            return {
                ...state,
                dataAir:payload.dataAir
            }
            case SET_WATER:
                return {
                    ...state,
                    dataWater:payload.dataWater
                }
        default:
            return state
    }
}