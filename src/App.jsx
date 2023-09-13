import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {puppyList} from './data.js'

function App() {
 
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId);
  console.log("puppyList: ", puppyList);
function handleClick() {
 
  }
  return (
    
    <div className="App">
     
      {featPupId && (
        <div id='details'>
          <h2>{featuredPup.name}</h2>
          <ul>
            
            <li>Id:{featuredPup.id}</li>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
           
           
            
          </ul>
        </div>
      )}

      {
        puppies.map((puppy) => {
          return (
           <button onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>
             {puppy.name} 
           </button>
          );
        
           })
           
       }
    </div>
    
  )
}

export default App
