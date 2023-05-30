import React, {useState} from 'react'
import Animals from '../Data/FakeData'

function AnimalCard({Animal}) {
    let {name, origin, classification, img} = Animal
    //(name, classificatio, origin, averAge, img)
  return (
    <div className='animalcard'>
        <h2>{Animal.name}</h2>
        <p>{Animal.classification}</p>
        <p>{Animal.origin}</p>
        <p>{Animal.averAge}</p> 
        <img className ='animalimg'
        src = {Animal.img} alt="" />
        </div>
  )
}

export default AnimalCard