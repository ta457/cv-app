/* eslint-disable react/prop-types */
import '../../styles/Skills.css'
import { TextInp } from '../TextInp'
import { Button } from '../Button'
import { useState } from 'react'
import { InputHead } from '../InputHead'

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

  const handleMenuToggle = () => {
    const content = document.querySelector('.skills-inp div');
    const icon = document.querySelector('.skills-inp h1 > img')
    if(content.classList.contains('hide')) {
      content.classList.remove('hide');
      icon.src = '/src/assets/chevron-up.svg';
    } else {
      content.classList.add('hide');
      icon.src = '/src/assets/chevron-down.svg';
    }
  }

  return (
    <div className='card skills-inp'>
      <InputHead text="Skills" onClick={handleMenuToggle} />
      <div>
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
    </div> 
  )
}

export { SkillsInput }