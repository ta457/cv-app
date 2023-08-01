/* eslint-disable react/prop-types */
import '../../styles/Edu.css'
import { SectionHead } from '../SectionHead'


function Edu({ schools }) {
  return (
    <div className='edu'>
      <SectionHead text="Education" />
      <div>
        {/* <div className="time">08/2020 - present</div>
        <div className="school">London City University</div>
        <div className="degree">Bachelors in Economics</div> */}

        {schools?.map((school, index) => (
          <div className='school-item' key={index}>
            <div>{school.startD} - {school.endD}</div>
            <div>{school.name}</div>
            <div>{school.deg}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { Edu }