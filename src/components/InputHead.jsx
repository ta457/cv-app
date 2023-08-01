import arrowUp from '../assets/chevron-up.svg'

//eslint-disable-next-line react/prop-types
function InputHead({text, onClick}) {
  return (
    <h1>{text}
      <img onClick={onClick} src={arrowUp} alt="menu toggle" />
    </h1>
  )
}

export { InputHead }