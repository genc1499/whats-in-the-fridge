import {useState, useEffect} from 'react';
import Form from "./Components/Form.js";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import Results from "./Components/Results.js";
import Fridge from "./Components/Fridge.js";
import './App.css';
import axios from'axios';


function App() {

  const [recipes,getRecipes] = useState(false)
  const [ing,setIng]=useState("");
  const [open,setOpen] = useState(false);
  const [display, setDisplay]=useState(false);


  useEffect(()=>{

  axios({ 
    method:'GET',
    url:'https://api.spoonacular.com/recipes/complexSearch',
 
      params: {
        apiKey:'e451ade8c07b4ca6b0fb9fd14bb5370d',
        includeIngredients:ing,
        addRecipeInformation:true
      }
    })
    .then((res) =>{
      console.log(res.data.results);
      getRecipes(res.data.results);
    
    });

  },[ing])

  const getFood=(item, itemT, itemTr)=>{
      
      let newOne =[];
      newOne.push(item, itemT, itemTr)
      console.log(newOne);

      const food=newOne.filter(item=>{
        return item
      })

      console.log(food);
      let foodNew=food.toString();
      setIng(foodNew);
   
      console.log(ing);
    }

    const handleClick =()=>{
      setOpen(!open);
    }

    const displayRecipe=()=>{
      setDisplay(true);
    }

    const getNewSearch = ()=>{
      setDisplay(!display);
    }


    return (

      <>
    
      <Header/>

      {
      open && display?
      <section>
         <Fridge/>
      <div className = "fridge-section">
       
      <Results recipes={recipes} setNewSearch={getNewSearch}/>
      <div className="fridge">


    
        <div className="shelves">

          <div className="shelfX shelf"></div>
          <div className="shelfX shelf"></div> 
          <div className="shelf shelfY"></div>

          <div className="bread">

            <div className="ear"></div>
            <div className="ear"></div>
            <div className="ear"></div>

          </div>

          <div className="olive-oil"></div>
          <div className="eggplant"></div>
          <div className="mushroom"></div>
          
        </div>

        <Form passFood={getFood} display = {displayRecipe}/>

        <div className="inner-fridgeTDone">
          <div className="handlecon">
            <div className="handle"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
      // :<></>
    // }
    // {
        :open && !display?
        <section>
        
          <div className = "fridge-section">
          
          
            <div className="fridge">

          
              <div className="shelves">

                <div className="shelfX shelf"></div>
                <div className="shelfX shelf"></div> 
                <div className="shelf shelfY"></div>

                <div className="bread">

                  <div className="ear"></div>
                  <div className="ear"></div>
                  <div className="ear"></div>

                </div>

                <div className="olive-oil"></div>
                <div className="eggplant"></div>
                <div className="mushroom"></div>
                
              </div>
   
              <Form passFood={getFood} display = {displayRecipe}/>

              <div className="inner-fridgeT">
                <div className="handlecon">
                  <div className="handle"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        :!open && !display?
        
        <section>
        
          <div className = "fridge-section">
       
            <div onClick={handleClick} className="fridge">
           
              <div className="inner-fridge">
             
                <div className="handlecon">
                  <div className="handle"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        :<></>
}

      
   
      </>
    
  );
}

export default App;
