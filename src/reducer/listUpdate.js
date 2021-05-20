const initialState ={
    topics : []
}


 const updater = (state =initialState,action) => {
    switch(action.type) {
        case 'UpdateItem' :{
            return {
                ...state,
                topics : action.data,
            }
        }
        case 'ADD' :
        { 
            document.getElementById('inputVal').value="";
            //console.log(action.data);
        return {
            ...state,
            topics :[...state.topics,action.data]
            }
        }
    
    case 'postItem':{
       // state.topics.push(action.data);
       // console.log(state.topics);
        return {...state,
        data : state.topics,
        
    }
    }
        case 'REMOVE' :
        { 
      //  console.log(action.data);
state.topics.splice(action.data, 1);
//console.log(state.topics);

return {...state,
    topics: state.topics}
  }
       
        default :
            return state;
    }
} 

export default updater;