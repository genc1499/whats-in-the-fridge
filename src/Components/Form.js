import {useState} from "react";


const Form = (props)=>{
    const [first, getFirst] = useState("");
    const [second, getSecond] = useState("");
    const [third, getThird] = useState("");

    
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
        console.log(first, second, third);
        props.passFood(first, second, third);

    }

    return(

        <form onSubmit={handleSubmit}>
            <input onChange = {handleChange} type="text" value={first}/>
            <input onChange = {handleChangeTwo} type="text" value={second}/>
            <input onChange = {handleChangeThree} type="text" value={third}/>
            <button>Inspire Me</button>
        </form>


    )

}

export default Form;