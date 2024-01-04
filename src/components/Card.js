import React from 'react'

const Card = (props) => {
    // console.log(props)
  return (
    <div className='card'>
     <img src={props.url} alt=""/>
     <h2>{props.name}</h2>
     <p>{props.equipment}</p>
     <p>{props.bodyPart}</p>
      
    </div>
  )
}

export default Card
