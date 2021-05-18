import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import './Row.css';
import {remove} from '../data/action';


export default function Row() {
     const data = useSelector(state => state.updater);
     const dispatch =useDispatch();
    return (
       <div>
       
            { data.topics.map( (item, i)=> (<div className="Row"> <li className ="list_item" key={i} >{ item }</li> <button className="delBtn" onClick ={ () => dispatch(remove(i))}>Delete</button></div>))

            }
       
    </div>
    )
}
