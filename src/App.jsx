import { useEffect, useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <Counter></Counter>
      <LoadComments></LoadComments>
      <LoadCountries></LoadCountries>
    </>
  )
}

function LoadCountries () {
  
  const [countries, setCountries] = useState([])
  // console.log(countries)
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then( data => setCountries(data) )
  },[])
  return (
    <div className='container'>
      {
      countries.map(country => displayCountry(country))
    }
    </div>
  )
}
function displayCountry (props) {
  // console.log(props.name.common)
  return(
    <div className='sub-container'>
      <h5>{props.name.common}</h5>
      <img src={props.flags.png}/>
    </div>
  )
}
// function Search () {
//   const [result, setResult] = useState([])
//   console.log(result)
//   useEffect(() =>{
//     fetch(`https://restcountries.com/v3.1/name/${name}`)
//     .then(res => res.json())
//     .then(data => setResult(data))
//   },[])
//   return(
//     <div>

//     </div>
//   )
// }
// function SearchBox (){
//   return(
//     <div>
//       <input type='text' id='search-container'></input>
//       <button onClick={Search}>Search</button>
//     </div>
//   )
// }
function Counter () {
  const [count, setCount] = useState(0)
const Increase = () => setCount(count + 1)
const Decrees = () => setCount(count - 1)
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={Increase}>Increse</button>
      <button onClick={Decrees}>Decrese</button>
    </div>
  )
}

function LoadComments() {
  const [comments, setComments] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => setComments(data))
  },[])
  return(
    <div className='container'>
      {
        comments.map(comment => ShowComments(comment))
      }
    </div>
  )
}
function ShowComments (props) {
  console.log(props)
  return(
    <div className='sub-container'>
      <h1>{props.id}</h1>
        <h4>Name: {props.name}</h4>
          <h5>Email: {props.email}</h5>
          <p>{props.body}</p>
    </div>
  )
}
export default App
