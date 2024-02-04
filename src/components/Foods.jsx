import React, { useState } from 'react'
import FoodData from './FoodData.Jsx'
import './foods.css'
import './button.css'
import './navbar.css'



function Foods() {

const [items, setItems] = useState(FoodData);

// const [searchTerm, setSearchTerm] = useState('');
// const [filteredData, setFilteredData] = useState(FoodData);


const filterItem = (typeItem) => {
    const updatedItem = FoodData.filter((curElem) => {
      return curElem.type === typeItem
    })

    setItems(updatedItem);
}


// const handleSearch = (event) => {
//     const term = event.target.value.toLowerCase();
//     console.log(term);
//     setSearchTerm(term);

//     const filtered = FoodData.filter((food) =>
//       food.name.toLowerCase().includes(term)
//     );
//     setFilteredData(filtered);
//   };


 


  return (

    <>

    <div className="navbar">


            <div className="nav-logo">
                <h2>Food-<span>Hunt</span></h2>

            </div>

            <div className="search">

            <input type='text' placeholder='Search food...'   />
                
            </div>

    </div>


    <div className="btn-container">


        <button onClick={() => setItems (FoodData)}>All</button>
        <button onClick={() => filterItem ("breakfast")}>Breakfast</button>
        <button onClick={() => filterItem ("lunch")}>Lunch</button>
        <button onClick={() => filterItem ("dinner")}>Dinner</button> 


    </div> 

   
    <div  className="container">

            {

                    items.map((curElm) => {

                    return (

                        <>
                        
                        <div  className="card-container">

                            <div className="image-container">

                                <img src={curElm.image}></img>

                            </div>


                            <div className="food">          

                            <div className="food-name">

                                  <h3>{curElm.name}</h3>  

                            </div>
                           

                            <div className="food-details">

                                    {curElm.text}

                            </div>

                            
                            <div className="food-price">

                                 <button>{curElm.price.toFixed(2)}</button>   

                            </div>

                            </div>

                        </div>
                                               
                        
                        </>

                    )

                })    

            }

    </div>


    </>
    
  )
}

export default Foods