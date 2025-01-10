import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {

const [weapons , setweapons] = useState([])
const[error , seterror] = useState(false)
const [loading , setLoading] = useState(false)
useEffect(()  => {  
   (async() => {
  try {
     seterror(false)
     setLoading(true)
     const response = await axios.get('/api/weapons')
     console.log(response.data);
     setweapons(response.data)
     setLoading(false)
  } catch (error) {
           
    seterror(true)
    setLoading(false)

  }  //select & put it in try catch 
 } )() // IIF

  } , [])


  // custum Query used


 // const [weapons , loading , error ]  = CustumTorpedoQueryustumTorpedoQuery('/api/weapons')

  if(error) {
    return <h1> Something went wrong</h1>
  }

  if(loading) {
    return <h1> Loading....</h1>
  }

  return (
    <>
     
      <h1>Shakti Torpedo Listing</h1>
     
        <p>
          Numbers of Weapons are : {
             weapons.length
          }
        </p>
    
    
    </>
  )
}

export default App





//Custum Query 

// const CustumTorpedoQuery = (urlPath) => {

//   const [weapons , setweapons] = useState([])
// const[error , seterror] = useState(false)
// const [loading , setLoading] = useState(false)


// useEffect(()  => {  
//    (async() => {
//   try {
//      seterror(false)
//      setLoading(true)
//      const response = await axios.get(urlPath)
//      console.log(response.data);
//      setweapons(response.data)
//      setLoading(false)
//   } catch (error) {
           
//     seterror(true)
//     setLoading(false)

//   }  //select & put it in try catch 
//  } )() // IIF

//   } , [])


//  return [weapons , loading , error]

// }


//race Condition => debouncing =>  response of multiple APIs