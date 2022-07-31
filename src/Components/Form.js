import {useState} from "react";


const Form = (props)=>{
    const [first, getFirst] = useState("");
    const [second, getSecond] = useState("");
    const [third, getThird] = useState("");
    const [ing,getIng]= useState(false);

    
    const handleChange=(e)=>{
       getFirst(e.target.value);
    }
    const handleChangeTwo=(e)=>{
        getSecond(e.target.value);
    }
    const handleChangeThree=(e)=>{
        getThird(e.target.value);
    }

    const handleSubmit = (e)=>{

        e.preventDefault();
        getIng(true);
        // console.log(first, second, third);
        // props.passFood(first, second, third);
    }

    const handleClick = ()=>{
        props.passFood(first, second, third);
        props.display();
    }

    return(

        <form onSubmit={handleSubmit}>
            <input onChange = {handleChange} type="text" value={first}/>
            <input onChange = {handleChangeTwo} type="text" value={second}/>
            <input onChange = {handleChangeThree} type="text" value={third}/>
            <button>Inspire Me</button>
            {
                ing?
                <>
            
                <div className="radio-flex">
                    <label className="do-not" htmlfor="vegan">Gluten</label>
                    <input type="checkbox" id="vegan"/>
                    <label for="vegan">Vegan</label>
                    <input type="checkbox"/>
                    <button onClick = {handleClick}>Done</button>
                </div>
                </>
                :<></>
            }
        </form>
        

       


    )

}

export default Form;