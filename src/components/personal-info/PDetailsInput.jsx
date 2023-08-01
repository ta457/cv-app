import '../../styles/PDetails.css'
import arrowUp from '../../assets/chevron-up.svg'
import { TextInp } from '../TextInp'

// eslint-disable-next-line react/prop-types
function PDetailsInput({ onChange }) {

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    onChange(name, value);
  }

  return (
    <div className='card'>
      <form>
        <h1>Personal Details
          <img src={arrowUp} alt="hide" />
        </h1>
        <TextInp 
          id="fullName"
          label="Full name"
          type="text"
          placeholder="Enter your full name" 
          onChange={handleChange}
        />
        <TextInp 
          id="email"
          label="Email" 
          type="email"
          placeholder="Enter your email" 
          onChange={handleChange}
        />
        <TextInp 
          id="phoneNumber"
          label="Phone number" 
          type="tel"
          placeholder="Enter your phone number" 
          onChange={handleChange}
        />
        <TextInp 
          id="address"
          label="Address" 
          type="text"
          placeholder="Enter your address" 
          onChange={handleChange}
        />
      </form>
    </div>
  )
}

export { PDetailsInput }