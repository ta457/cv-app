import '../../styles/PDetails.css'
import { TextInp } from '../TextInp'
import { InputHead } from '../InputHead'

// eslint-disable-next-line react/prop-types
function PDetailsInput({ onChange }) {

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    onChange(name, value);
  }

  const handleMenuToggle = () => {
    const content = document.querySelector('.p-details-inp div');
    const icon = document.querySelector('.p-details-inp h1 > img')
    if(content.classList.contains('hide')) {
      content.classList.remove('hide');
      icon.src = '/src/assets/chevron-up.svg';
    } else {
      content.classList.add('hide');
      icon.src = '/src/assets/chevron-down.svg';
    }
  }

  return (
    <div className='card p-details-inp'>
      <InputHead text="Personal Details" onClick={handleMenuToggle} />
      <div>
        <TextInp 
          id="fullName"
          label="Full name"
          type="text"
          placeholder="Enter your full name" 
          onChange={handleInputChange}
        />
        <TextInp 
          id="email"
          label="Email" 
          type="email"
          placeholder="Enter your email" 
          onChange={handleInputChange}
        />
        <TextInp 
          id="phoneNumber"
          label="Phone number" 
          type="tel"
          placeholder="Enter your phone number" 
          onChange={handleInputChange}
        />
        <TextInp 
          id="address"
          label="Address" 
          type="text"
          placeholder="Enter your address" 
          onChange={handleInputChange}
        />
      </div>
    </div>
  )
}

export { PDetailsInput }