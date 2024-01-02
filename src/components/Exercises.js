import React from 'react'
import Card from './Card'
import {useState} from 'react'

const Exercises = ({data}) => {

    const [inputText,setInputText]=useState("")

    const handleInput=(e)=>{
        setInputText(e.target.value);

    }
  return (
    <div>
        <input type='text' placeholder='enter bodypart' value={inputText} onChange={handleInput}/>

      <div className='cards'>
        {
           data.map((info)=>{
                 <Card key={info.id} {...info}/>
           }) 

        }
      </div>
    </div>
  )
}

export default Exercises
