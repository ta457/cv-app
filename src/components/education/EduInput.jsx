/* eslint-disable react/prop-types */
import '../../styles/Edu.css'
import { TextInp } from '../TextInp'
import { Button } from '../Button'
import { useState } from 'react'
import { InputHead } from '../InputHead'


function EduInput({ addSchool, schools, deleteSchool }) {
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const handleSchoolChange = (e) => {
    setSchool(e.target.value);
  }
  const handleDegreeChange = (e) => {
    setDegree(e.target.value);
  }
  const handleStartChange = (e) => {
    setStart(e.target.value);
  }
  const handleEndChange = (e) => {
    setEnd(e.target.value);
  }

  const handleButtonClick = () => {
    if(school.trim() !== '' && degree.trim() !== '' 
      && start.trim() !== '' && end.trim() !== '') {
      addSchool({ name: school, deg: degree, startD: start, endD: end });
      setSchool('');
      setDegree('');
      setStart('');
      setEnd('');
    }
  }

  const handleMenuToggle = () => {
    const content = document.querySelector('.edu-inp div');
    if(content.classList.contains('hide')) {
      content.classList.remove('hide');
    } else {
      content.classList.add('hide');
    }
  }

  return (
    <div className='card edu-inp'>
      <InputHead text="Education" onClick={handleMenuToggle} />
      <div>
        <ul>
          {schools?.map((item, index) => (
            <li key={index}>
              {item.name}
              <Button 
                text="Remove"
                className="normalBtn"
                onClick={() => deleteSchool(index)}
              />
            </li>
          ))}
        </ul>
        <TextInp 
          type="text"
          value={school}
          onChange={handleSchoolChange}
          label="School"
          placeholder="Enter school / university"
        />
        <TextInp 
          type="text"
          value={degree}
          onChange={handleDegreeChange}
          label="Degree"
          placeholder="Enter degree / field of study"
        />
        <TextInp 
          type="text"
          value={start}
          onChange={handleStartChange}
          label="Study from"
          placeholder="Enter start date"
        />
        <TextInp 
          type="text"
          value={end}
          onChange={handleEndChange}
          label="To"
          placeholder="Enter end date"
        />
        <Button
          text="Add"
          className="blueBtn"
          onClick={handleButtonClick}
        />
      </div>
    </div>
  )
}

export { EduInput }