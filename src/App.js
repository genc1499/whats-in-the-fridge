import {useState, useEffect} from 'react';
import Form from "./Components/Form.js";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import './App.css';
import axios from'axios';


function App() {

  const [recipes,getRecipes] = useState(false)
  const [ing,setIng]=useState('');
  const [open,setOpen] = useState(false)
  
  useEffect(()=>{

  axios( {
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
    });
  },[ing])




  const getFood=(item, itemT, itemTr)=>{
      
      




      let newOne =[];
      newOne.push(item, itemT, itemTr)


      const food=newOne.filter(item=>{
        return item
      })

      console.log(...food);

      setIng(...food);
      console.log(ing);
    
    }

    const handleClick =()=>{
    
      setOpen(!open);
    }

    return (

      <>
    
   
      <Header/>
     

        {
        open?
        <section>
          <div className = "fridge-section">
        <div className="fridge">
          
            <div className="shelves">

               <div className="shelfX shelf">

              </div>

              <div className="shelfX shelf">
                
              </div> 

              <div className="shelf shelfY">
 
              </div>

              <div className="bread">
                <div className="ear">

                </div>
                <div className="ear">
                  
                  </div>
                  <div className="ear">
                  
                  </div>
              </div>

              <div className="olive-oil">

              </div>


              <div className="eggplant">


              </div>

              <div className="mushroom">


              </div>
              
          </div>
   
          <Form passFood={getFood}/>
          <div className="inner-fridgeT">
          <div className="handlecon">
                  <div className="handle">

                  </div>
                </div>
      
       
          </div>
        </div>
        </div>
        </section>
        :

        <section>
        <div className = "fridge-section">
        <div onClick={handleClick} className="fridge">
           
              <div className="inner-fridge">
             
                <div className="handlecon">
                  <div className="handle">

                  </div>
                </div>
        </div>
   
        </div>
        </div>
        </section>
      }
        
        

      <Footer/>
      </>
    
  );
}

export default App;
