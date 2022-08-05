import {useState} from "react";
import Fridge from './Fridge.js'
const Results = (props)=>{

    const [index, setIndex]=useState(0);
    const [newSearch, setNewSearch]=useState(true);
    let copy = index;
    console.log("this nimber", copy);


    const handleClickNext = () =>{
        if(copy===props.recipes.length-1){
            setIndex(0);
        }
        else{
        setIndex(copy+1);
        }
    }

    const handleClickBack = () =>{
        if(copy===0){
            setIndex(props.recipes.length-1);
        }
        else{
        setIndex(copy-1);
        }
    }

    const handleClickSearch=()=>{
        props.setNewSearch();
    }

    return (
            <>
            {
                props.recipes?

              
             
                <div className="plate">

                    <h2>{props.recipes[index].title}</h2>

                    <div className="recipe-info">

                       
                        <div className="time">
                            <h3>🕗 </h3>
                            <p>{props.recipes[index].readyInMinutes}</p>
                        </div>

                        <div className="time">
                            <h3>Servings</h3>
                            <p>{props.recipes[index].servings}</p>
                        </div>

                    </div>

                    

                    <div className="recipe-img">
                    <a href={props.recipes[index].sourceUrl} rel="noopener noreferrer" target="_blank"><img src={props.recipes[index].image}/></a>
                    </div>
                  
                      
                   
                
                    <div className="recipe-direction">
                        <button onClick={ ()=>handleClickSearch()}>New Search</button>
                        <button onClick={ ()=>handleClickBack()}>⏪</button>
                        <button onClick={ ()=>handleClickNext()}>⏩</button>
                        
                    </div>
                </div>
      
                 
         :<></>
    
            }

            </>
    )
        }

export default Results;