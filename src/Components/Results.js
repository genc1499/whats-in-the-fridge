import {useState} from "react";

const Results = (props)=>{
    const [index, setIndex]=useState(0);
let copy = index;
console.log("this nimber", copy);


    const handleClick = () =>{
       
        setIndex(copy+1);
    }

    return (
        <>
            <div className="fridge-section">
            <div className="fridge-wth-recipe">
     
                <p>{props.recipes[index].title}</p>
                <img src={props.recipes[x].image}/>
            
                <button onClick={ ()=>handleClick()}>Click for next</button>
                </div>
         
        </div>
    
        </>
    )
}

export default Results;