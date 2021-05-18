const initialState ={
    topics : ["aa","bb"]
}


 const updater = (state =initialState,action) => {
    switch(action.type) {
        case 'ADD' :
        { 
            document.getElementById('inputVal').value="";
        return {
            ...state,
            topics :[...state.topics,action.data]
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