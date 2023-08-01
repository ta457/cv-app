/* eslint-disable react/prop-types */
import '../../styles/Skills.css'
import { TextInp } from '../TextInp'
import { Button } from '../Button'
import { useState } from 'react'


function SkillsInput({ addSkill, skills, deleteSkill }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    if(inputValue.trim() !== '') {
      addSkill(inputValue);
      setInputValue('');
    }
  }

  return (
    <div className='card skills-inp'>
      <h1>Skill</h1>
      <ul>
          {skills?.map((item, index) => (
            <li key={index}>
              {item}
              <Button
                text="Remove"
                className="normalBtn"
                onClick={() => deleteSkill(index)}
              />
            </li>
          ))}
      </ul>
      <TextInp 
        id="skill-inp"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a skill"
      />
      <Button
        text="Add"
        className="blueBtn"
        onClick={handleButtonClick}
      />
    </div>
  )
}

export { SkillsInput }