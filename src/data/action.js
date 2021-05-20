import axios from 'axios';

export const add = (topic) => {
    return {
        type : 'ADD',
        data : topic
    }
}
export const remove = (key) => {
    return {
        type : 'REMOVE',
        data : key
    }
}

export const fetchdata = () => {

    return async  (dispatch) => {
       console.log('fetchdata called');
        const res =await axios.get('http://localhost:3000/topics');
        console.log('abc'+ res.data);
        dispatch({
             type : 'ADD',
        data : res.data
        });
    }
};

export const postdata = (topics) => {

    return async  (dispatch) => {
        console.log('postdata topics');
        const res =await axios.post('http://localhost:3000/topics',topics).then((response) => {
  console.log(response);
}, (error) => {
  console.log(error);
});
       // console.log(res.data);
        dispatch({
             type : 'ADD',
        data : topics
        });
       
    }
};