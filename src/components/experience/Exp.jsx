/* eslint-disable react/prop-types */
import '../../styles/Exp.css'
import { SectionHead } from '../SectionHead'

function Exp({ companies }) {
  return (
    <div className='exp'>
      <SectionHead text="Experience" />
      <div>
        {companies?.map((comp, index) => (
          <div className='exp-item' key={index}>
            <div>{comp.startD} - {comp.endD}</div>
            <div>{comp.name}</div>
            <div>{comp.position}</div>
            <div>{comp.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { Exp }