import {useState, useEffect} from 'react';
import Form from "./Components/Form.js";
import './App.css';
import axios from'axios';

function App() {

  const [recipes,getRecipes] = useState(false)
  const [ing,setIng]=useState([""]);
  const [open,setOpen] = useState(false)
  
  useEffect(()=>{

  axios( {
    method:'GET',
    url:'https://api.spoonacular.com/recipes/complexSearch',
 
      params: {
        apiKey:'e451ade8c07b4ca6b0fb9fd14bb5370d',
        includeIngredients:`${ing[0],ing[1],ing[2]}`,
        addRecipeInformation:true
      }
    })
    .then((res) =>{
      console.log(res.data.results);
    });
  },[ing])




    const getFood=(item, itemT, itemTr)=>{
      console.log(item, itemT, itemTr);



      let newOne =[];
      newOne.push(item, itemT, itemTr)
      const food=newOne.filter(item=>{
        return item;
      })
      console.log(food[0]);

      setIng(food);
   
    }

    const handleClick =()=>{
     setOpen(!open);
    }

    return (

      <>
    
   
    
      <h1>What's in the Fridge?</h1>
      <p>Click our fridge then enter what you found in yours to get some inspiration!</p>

        {
        open?
        <div className="fridge">
            <div className="shelves">
              <div>

              </div>
              <div>
                
                </div>
                <div>
                
                </div>
            </div>
          <Form passFood={getFood}/>
          <div className="inner-fridge change">
      
       
        </div>
        </div>
        :
        <div onClick={handleClick} className="fridge">
           
              <div className="inner-fridge">
             
                <div className="handlecon">
                  <div className="handle">

                  </div>
                </div>
        </div>
   
        </div>
      }
        
        


      </>
    
  );
}

export default App;
