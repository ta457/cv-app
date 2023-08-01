import '../styles/Button.css'

// eslint-disable-next-line react/prop-types
function Button({text, className, onClick}) {

  return (
    <button className={className} onClick={onClick}>{text}</button>
  )
}

export { Button }