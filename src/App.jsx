import { useState } from 'react'
import './styles/App.css'
import { PDetailsInput } from './components/personal-info/PDetailsInput'
import { PDetails } from './components/personal-info/PDetails'
import { SkillsInput } from './components/skills/SkillsInput'
import { Skills } from './components/skills/Skills'
import { EduInput } from './components/education/EduInput'
import { Edu } from './components/education/Edu'
import { ExpInput } from './components/experience/ExpInput'
import { Exp } from './components/experience/Exp'

function App() {
  const [pInfoValues, setPInfoValues] = useState({
    fullName: '', email: '', phoneNumber: '', address: ''
  });
  const [skills, setSkills] = useState([]);

  const handlePInfoChange = (name, value) => {
    setPInfoValues(
      (prevValues) => ({...prevValues, [name]: value})
    );
  };

  const addSkill = (item) => {
    setSkills((prevItem) => [...prevItem, item]);
  }

  const deleteSkill = (index) => {
    //filter creates a new array containing all elements 
    //that meet the condition defined in the callback function
    //if i != index => true => item is included in the new array
    setSkills((prevItem) => prevItem.filter((item, i) => i !== index));
  };

  return (
    <>
      <div className='edit-box'>
        <PDetailsInput onChange={handlePInfoChange} />
        
        <SkillsInput addSkill={addSkill} skills={skills} deleteSkill={deleteSkill} />
        
        <EduInput />

        <ExpInput />
      </div>

      <div className='resume-box'>
        <PDetails 
          fullName={pInfoValues.fullName}
          email={pInfoValues.email}
          phone={pInfoValues.phoneNumber}
          address={pInfoValues.address}
        />

        <Skills skills={skills} />
        
        <Edu />

        <Exp />
      </div>
    </>
  )
}

export default App
