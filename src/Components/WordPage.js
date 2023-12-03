import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postRequest } from '../Redux/Actions/postActions';
import { addHistory } from '../Redux/Actions/historyAction';
import { useNavigate } from 'react-router';


const WordPage = ({search}) => {

    const {isLoading,data,error} = useSelector((state)=>state.post)

    const dispatch = useDispatch();
    const navigator = useNavigate();

    console.log(data);

    useEffect(()=>{
        if(search===""){
            navigator("/");
        }
        implementSearch();
    },[])

    function implementSearch(){
        dispatch(postRequest(search));
        dispatch(addHistory(search));
    }

  return (
    <div className='word-div'>
        {
            isLoading && <div className='loader'> <div className='spinning-Loader'></div> </div>
        }
        {
           data.length > 0 &&  data.map((item,index)=>(
              <div key={index} className='card'>
                 <h1>{item.word}</h1>
                 <p>{item.phonetic}</p>
                 {
                   item.phonetics.length > 0 && item.phonetics.map((ph,i)=>(     
                        ph.audio !== "" && <div key={i} className='phonetic'>
                            <audio src={ph.audio} controls/>
                            <p>{ph.text}</p>
                        </div> 
                  ))
                 }
                 {
                  item.meanings.length > 0 && item.meanings.map((mean,j)=>(
                    <div key={j} className='meaning'>
                      <h3>{mean.partOfSpeech}</h3>
                      {
                        mean.definitions.length > 0 && mean.definitions.map((def,k)=>(
                          <div key={k} className='def'>
                            <p>{def.definition}</p>
                          </div>
                        ))
                      }
                      {
                        mean.synonyms.length > 0 &&
                        <div>
                            <h3>Synonyms</h3>
                            {
                                mean.synonyms.map((syn,l)=>(
                                    <span key={l}>
                                        <span>{syn},</span>
                                    </span>
                                ))
                            }
                        </div>  
                      }
                      {
                        mean.antonyms.length > 0 &&
                        <div>
                            <h3>Antonyms</h3>
                            {
                                mean.antonyms.map((ant,l)=>(
                                    <span key={l}>
                                        <span>{ant},</span>
                                    </span>
                                ))
                            }
                        </div> 
                      }
                    </div>
                  ))
                 }
              </div>
           ))
        }
    </div>
  )
}

export default WordPage