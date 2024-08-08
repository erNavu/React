import { useState, useRef } from "react"
import RestaurantMenuItems from "./RestaurantMenuItems";
import '../styles/accordion.css'

const Accordion = ({ data }) => {
  const [isActive, setIsActive] = useState(false)
  const panel = useRef();
  const buttonRef = useRef()

  const handleClick = () => {
    !isActive ? panel.current.style.maxHeight = panel.current.scrollHeight + "px" : panel.current.style.maxHeight = null
    !isActive ? buttonRef.current.classList.add('active') : buttonRef.current.classList.remove('active')
    setIsActive(!isActive)
  }
  return (
    <div className="accordion-container">
      <button
        ref={buttonRef}
        className="accordion"
        onClick={handleClick}
      >
        {data.title} ({data.itemCards.length})</button>
      <div ref={panel} className="panel">
        <RestaurantMenuItems itemCards={data.itemCards} />
      </div>
    </div>
  )
}

export default Accordion


