/* eslint-disable react/prop-types */
import '../../styles/Exp.css'
import { TextInp } from '../TextInp'
import { Button } from '../Button'
import { useState } from 'react'
import { InputHead } from '../InputHead'


function ExpInput({ addComp, companies, deleteComp }) {
  const [comp, setComp] = useState('');
  const [pos, setPos] = useState('');
  const [desc, setDesc] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const handleCompChange = (e) => {
    setComp(e.target.value);
  }
  const handlePosChange = (e) => {
    setPos(e.target.value);
  }
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  }
  const handleStartChange = (e) => {
    setStart(e.target.value);
  }
  const handleEndChange = (e) => {
    setEnd(e.target.value);
  }

  const handleButtonClick = () => {
    if(comp.trim() !== '' && pos.trim() !== '' && desc.trim() 
      && start.trim() !== '' && end.trim() !== '') {
      addComp({ 
        name: comp, 
        position: pos, 
        description: desc, 
        startD: start, 
        endD: end 
      });
      setComp('');
      setPos('');
      setDesc('');
      setStart('');
      setEnd('');
    }
  }

  const handleMenuToggle = () => {
    const content = document.querySelector('.exp-inp div');
    if(content.classList.contains('hide')) {
      content.classList.remove('hide');
    } else {
      content.classList.add('hide');
    }
  }

  return (
    <div className='card exp-inp'>
      <InputHead text="Experience" onClick={handleMenuToggle} />
      <div>
        <ul>
          {companies?.map((item, index) => (
            <li key={index}>
              {item.name}
              <Button 
                text="Remove"
                className="normalBtn"
                onClick={() => deleteComp(index)}
              />
            </li>
          ))}
        </ul>
        <TextInp 
          type="text"
          value={comp}
          onChange={handleCompChange}
          label="Company"
          placeholder="Enter company name"
        />
        <TextInp 
          type="text"
          value={pos}
          onChange={handlePosChange}
          label="Position"
          placeholder="Enter position / title"
        />
        <TextInp 
          type="text"
          value={desc}
          onChange={handleDescChange}
          label="Description"
          placeholder="Enter description"
        />
        <TextInp 
          type="text"
          value={start}
          onChange={handleStartChange}
          label="Work from"
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

export { ExpInput }