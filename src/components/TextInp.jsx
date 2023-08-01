import '../styles/TextInp.css'

// eslint-disable-next-line react/prop-types
function TextInp({id, label, type, placeholder, onChange}) {

  return (
    <div className="inp-row">
      <label htmlFor={id}>{label}</label>
      <input
        id={id} 
        type={type} 
        name={id}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}

export { TextInp }