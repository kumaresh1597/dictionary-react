import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { postRequest } from '../Redux/Actions/postActions';

const History = ({setSearch}) => {

    const history = useSelector((state)=>state.history);
    const dispatch = useDispatch();

    console.log(history)

  return (
    <div className='history-div'>
    <h1>History</h1>
    {
        history.length > 0 && history.map((word,index)=>(
            <div className='link-div'>
                <Link  to={`/word/${word}`} key={index} onClick={()=>(setSearch(word))}>{word}</Link>
            </div>
        ))
    }
    </div>
  )
}

export default History