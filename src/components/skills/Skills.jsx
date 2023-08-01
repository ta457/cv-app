/* eslint-disable react/prop-types */
import '../../styles/Skills.css'
import { SectionHead } from '../SectionHead'

function Skills({ skills }) {

  return (
    <div className='skills'>
      <SectionHead text={"Skills"} />
      
      <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
      </ul>

    </div>
  )
}

export { Skills }