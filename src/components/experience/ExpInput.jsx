/* eslint-disable react/prop-types */
import '../../styles/Exp.css'
import { TextInp } from '../TextInp'
import { Button } from '../Button'
import { useState } from 'react'


function ExpInput() {

  return (
    <div className='card edu-inp'>
      <h1>Experience</h1>
      <TextInp 
        label="Company"
        placeholder="Enter company name"
      />
      <TextInp 
        label="Position"
        placeholder="Enter position / title"
      />
      <TextInp 
        label="Description"
        placeholder="Enter description"
      />
      <div>
        <TextInp 
          type="date"
          label="Work from"
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

export { ExpInput }