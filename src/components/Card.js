import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div>
     <img src={props.gifUrl} alt=""/>
     <h2>{props.bodyPart}</h2>
     <p>{}</p>
     <p>{}</p>
      
    </div>
  )
}

export default Card
