import React from 'react';
import './searchBox.css';
import {add} from '../data/action';
import {useSelector,useDispatch} from 'react-redux';
import {updater} from '../reducer/listUpdate';

 const SearchBox = () => {
 const dispatch =useDispatch();   
 const data = useSelector(state => state.updater);

      return (
        <div >
        <div className="searchBoxBody"> 
            <input type="text" placeholder="Please Enter Your Task"  id="inputVal" />
            <button className="addBtn" onClick ={ () => dispatch( add(document.getElementById('inputVal').value ) ) } >Add</button>
        </div>
        <div>
        
        </div>
        </div>  
    )
}

export default SearchBox;