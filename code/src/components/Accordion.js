import { useState, useRef } from "react"
import RestaurantMenuItems from "./RestaurantMenuItems";

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
    <div className="my-3">
      <button
        ref={buttonRef}
        className="accordion"
        onClick={handleClick}
      >
        {data.title} ({data.itemCards.length})</button>
      <div ref={panel} className="px-4 bg-white overflow-hidden max-h-0">
        <RestaurantMenuItems itemCards={data.itemCards} />
      </div>
    </div>
  )
}

export default Accordion


