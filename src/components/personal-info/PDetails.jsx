import '../../styles/PDetails.css'
import emailIcon from '../../assets/email.svg'
import phoneIcon from '../../assets/phone.svg'
import locationIcon from '../../assets/map-marker.svg'

// eslint-disable-next-line react/prop-types
function PDetails( {fullName, email, phone, address} ) {
  return (
    <div className="p-details">
      <h1>{fullName}</h1>
      <div>
        <div>
          <img src={emailIcon} alt="email" />
          <span>{email}</span>
        </div>

        <div>
          <img src={phoneIcon} alt="phone" />
          <span>{phone}</span>
        </div>

        <div>
          <img src={locationIcon} alt="location" />
          <span>{address}</span>
        </div>
      </div>
    </div>
  )
}

export { PDetails }