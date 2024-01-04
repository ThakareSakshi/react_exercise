import React from 'react'
import Card from './Card'
import {useState} from 'react'

const Exercises = ({data,handleInputData}) => {

    const [inputText,setInputText]=useState("")
    // console.log(data)

    const handleInput=(e)=>{
        setInputText(e.target.value);
        
        handleInputData(e.target.value);
        

    }
  return (
    <div>
        <input type='text' placeholder='enter bodypart' value={inputText} onChange={handleInput}/>

      <div className='cards'>
        {

           data.map((info)=>{
          //  { console.log(info)}
                return  <Card key={info.id} url={info.gifUrl} bodyPart={info.bodyPart} name={info.name} equipment={info.equipment}/>
           }) 

        }
      </div>
    </div>
  )
}

export default Exercises
