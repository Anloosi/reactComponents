import React from 'react'
import AnimalCard from './AnimalCard'
import Animals from '../Data/FakeData'

function OpenField() {

  return (
    <div className='field'>
        <AnimalCard Animal = {Animals[0]} />
        <AnimalCard Animal = {Animals[1]} />
        <AnimalCard Animal = {Animals[2]} />
        <AnimalCard Animal = {Animals[3]} />
    </div>

  )
}

export default OpenField