const withCartTagRestaurantMenuItems = (RestaurantMenuItems) => {

    return (props) => {
        const { item, quantity, price, onReduceQuantity } = props
        return (
            <div>
                <div className="relative h-[100%]">
                    <div className="absolute py-1 px-2 right-56 bottom-1 z-10 font-semibold text-lg">
                        Price : ₹ {quantity * price}
                    </div>

                    <RestaurantMenuItems {...props} />

                    <button
                        onClick={() => onReduceQuantity({ item, quantity })}
                        className="absolute py-2 px-6 font-extrabold text-center rounded-md flex justify-between right-36 bottom-[4px] z-10 bg-black text-white">
                        -
                    </button>

                    <div className="absolute py-[6px] right-11 bottom-[4px] z-[4] text-white px-12 bg-black font-extrabold text-lg">
                        <span className=""> {quantity}</span>
                    </div>
                </div>
            </div >)
    }
}

export default withCartTagRestaurantMenuItems

