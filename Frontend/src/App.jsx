import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {

const [weapons , setweapons] = useState([])
const[error , seterror] = useState(false)
const [loading , setLoading] = useState(false)
const [search , setSearch] = useState('')

useEffect(()  => {  
  // make abort controller Cancel old request 
  const controller = new AbortController() ;
   (async() => {
  try {
     seterror(false)
     setLoading(true)
     const response = await axios.get('/api/weapons?search=' + search 
      ,
      { signal: controller.signal  } )

     console.log(response.data);
     setweapons(response.data)
     setLoading(false)
  } catch (error) {
      if(axios.isCancel( error)  ){
        log(
          'Request Canceled' , error.message)
          return }
        
      
    seterror(true)
    setLoading(false)

  }  //select & put it in try catch 
 } )() // IIF
 
 //clean up method 

 return () => {
  controller.abort()
 }
  } , [
    search
  ])


  // custum Query used


 // const [weapons , loading , error ]  = CustumTorpedoQueryustumTorpedoQuery('/api/weapons')

  if(error) {
    return <h1> Something went wrong</h1>
  }

  // if(loading) {
  //   return <h1> Loading....😊</h1>
  // }

  return (
    <>
     
      <h1>Shakti Torpedo Listing</h1>
      <input type="text" placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)}/>     
      {loading && (<h1>Loading...😊</h1>)}
      {error && (<h1>Something went wrong...😠🤨😏</h1>)}
        <p>
          Numbers of Available Weapons are : {
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