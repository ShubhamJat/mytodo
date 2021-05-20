import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import './Row.css';
import {remove} from '../data/action';


export default function Row() {
    
    // 
     const dispatch =useDispatch();
      const data = useSelector(state => state.updater);
      var a=data.topics;
    // console.log( a );
    return (
       <div>
       
            { data.topics.length > 0  ? data.topics.map( (item, i)=> (<div className="Row" key={i}> <li className ="list_item" key={i} >{ item}</li> <button className="delBtn" onClick ={ () => dispatch(remove(i))}>Delete</button></div>))
               : <h3 className="defText">Please enter a Task</h3>
            }
       
    </div>
    )
}
