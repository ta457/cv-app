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
  //personal info useState hook
  const [pInfoValues, setPInfoValues] = useState({
    fullName: '', email: '', phoneNumber: '', address: ''
  });
  //skills useState hook
  const [skills, setSkills] = useState([]);
  //education useState hook
  const [schools, setSchools] = useState([]);
  //experience useState hook
  const [companies, setCompanies] = useState([]);
  
  //update the personal info section in the Resume box on input change
  const handlePInfoChange = (name, value) => {
    setPInfoValues(
      (prevValues) => ({...prevValues, [name]: value})
    );
  };
  //update the skill list inside input box
  const addSkill = (item) => {
    setSkills((prevItem) => [...prevItem, item]);
  }
  //update the school list inside input box
  const addSchool = (item) => {
    setSchools((prevItem) => [...prevItem, item]);
  }
  //update the company list inside input box
  const addComp = (item) => {
    setCompanies((prevItem) => [...prevItem, item]);
  }

  //when delete a skill in the input box, remove it from both lists
  //filter creates a new array containing all elements 
  //that meet the condition defined in the callback function
  //if i != index => true => item is included in the new array
  const deleteSkill = (index) => {
    setSkills((prevItem) => prevItem.filter((item, i) => i !== index));
  };
  //same way, delete school from list
  const deleteSchool = (index) => {
    setSchools((prevItem) => prevItem.filter((item, i) => i !== index));
  }
  //delete company from list
  const deleteComp = (index) => {
    setCompanies((prevItem) => prevItem.filter((item, i) => i !== index));
  }

  return (
    <>
      <div className='edit-box'>
        <PDetailsInput onChange={handlePInfoChange} />
        
        <SkillsInput addSkill={addSkill} skills={skills} deleteSkill={deleteSkill} />
        
        <EduInput 
          addSchool={addSchool} 
          schools={schools} 
          deleteSchool={deleteSchool} 
        />

        <ExpInput 
          addComp={addComp} 
          companies={companies} 
          deleteComp={deleteComp} 
        />
      </div>

      <div className='resume-box'>
        <PDetails 
          fullName={pInfoValues.fullName}
          email={pInfoValues.email}
          phone={pInfoValues.phoneNumber}
          address={pInfoValues.address}
        />
        <div>
          <Skills skills={skills} />
          
          <Edu schools={schools} />

          <Exp companies={companies} />
        </div>
      </div>
    </>
  )
}

export default App
