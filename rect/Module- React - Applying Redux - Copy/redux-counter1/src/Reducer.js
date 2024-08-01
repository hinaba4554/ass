const initialstate={
    count:0
}

// to create reducer for increment value
const rootreducer=(state=initialstate,action)=>{
   switch(action.type){
    case"Increment":
     return {...state,count:state.count+1}
  
   case"decrement":
     return {...state,count:state.count-1}
   
   default:
     return state
    }
}
export default rootreducer