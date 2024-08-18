const withDiscountTagRestaurantCard = (RestaurantCard) => {
    return (props) => {
        return (<div className="relative h-[100%]">
            <label className="absolute py-1 px-2 rounded-md left-5 bg-slate-900 text-white">
                {props.resData.aggregatedDiscountInfoV3?.discountTag}</label>
            <RestaurantCard {...props} />
        </div>)
    }
}

export default withDiscountTagRestaurantCard