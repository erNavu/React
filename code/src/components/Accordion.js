import RestaurantMenuItems from "./RestaurantMenuItems"

const Accordion = ({ data, isActive, onClickAccordion }) => {

  return (
    <div className="my-3">
      <button
        className="accordion"
        onClick={onClickAccordion}
      >
        {data.title} ({data.itemCards.length})
        <span className="float-right mx-3">{isActive ? <>&#8722;</> : <>&#43;</>}</span>
      </button>

      {isActive && <div className="px-4 bg-white ">
        {data.itemCards?.map(item => <RestaurantMenuItems key={item.card.info.id} item={item.card.info} />)}
      </div>}
    </div>
  )
}

export default Accordion


