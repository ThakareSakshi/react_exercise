import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
import Header from './components/Header';
import Images from './components/Images';
import Exercises from './components/Exercises';

function App() {

  const [bodypart,setbodypart]=useState("back")
  const [data,setData]=useState([]);

  const options = {
    method: 'GET',
    url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}`,
    params: {limit: '10'},
    headers: {
      'X-RapidAPI-Key': '87a200e624mshab5cff6970a3a3ap1ffb1ejsn7e0637884834',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  useEffect(()=>{
   const fetchData=async()=>{
    try {
      const response = await axios.request(options);
      console.log(response.data);
     if(response.data){ 
      setData(response.data)
      console.log(data)

     }
    } catch (error) {
      console.log(error);
      setbodypart("back")
    }
   }

   fetchData()
  },[bodypart])

  function handleInputData(text){
       setbodypart(text)
  }


  return (
    <div className="App">
      <Header/>
      <Images/>
      <Exercises data={data} handleInputData={handleInputData}/>
      
      
    </div>
  );
}

export default App;
