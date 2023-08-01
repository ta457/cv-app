/* eslint-disable react/prop-types */
import '../../styles/Edu.css'
import { TextInp } from '../TextInp'
import { Button } from '../Button'
import { useState } from 'react'


function EduInput() {

  return (
    <div className='card edu-inp'>
      <h1>Education</h1>
      <TextInp 
        label="School"
        placeholder="Enter school / university"
      />
      <TextInp 
        label="Degree"
        placeholder="Enter degree / field of study"
      />
      <div>
        <TextInp 
          type="date"
          label="Study from"
          placeholder="Enter start date"
        />
        <TextInp 
          type="date"
          label="To"
          placeholder="Enter end date"
        />
      </div>
    </div>
  )
}

export { EduInput }