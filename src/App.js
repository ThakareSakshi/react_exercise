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
      'X-RapidAPI-Key': 'cf4d5e6099msh4319fd91e2cfce2p110419jsnb558428ce19d',
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

     }
    } catch (error) {
      console.error(error);
    }
   }

   fetchData()
  },[])


  return (
    <div className="App">
      <Header/>
      <Images/>
      <Exercises data={data}/>
      
      
    </div>
  );
}

export default App;
