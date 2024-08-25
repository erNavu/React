import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "../styles/restaurantMenu.css"
import { CDN_URL } from "../utils/contants"
import Accordion from "../components/Accordion"
import resRating from "../assets/resRating.png"
import useOnlineStatus from '../utils/useOnlineStatus'
import useRestaurantMenu from "../utils/useRestaurantMenu"
import Loader from "../components/Loader"
import { useGetRestaurantMenuQuery } from "../redux/apiSlice"

const RestaurantMenu = () => {
    const { res } = useParams()
    const isOnline = useOnlineStatus()
    // const restaurantDetails = useRestaurantMenu(res)
    const { data, isLoading } = useGetRestaurantMenuQuery(res)
    const restaurantDetails = data?.data?.cards

    const [isAccordionActive, setIsAccordionActive] = useState(null)

    useEffect(() => {
        localStorage.setItem('restaurantId', JSON.stringify(res));
    }, [res]);

    if (isLoading) return (<Loader />)

    const { name, cuisines, avgRating, costForTwoMessage, totalRatingsString, expectationNotifiers, sla, logo } = restaurantDetails[2]?.card?.card?.info
    const menuItemsData = restaurantDetails[4]?.groupedCard?.cardGroupMap.REGULAR.cards?.filter(item => item.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || item.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")

    const handleAccordionClick = (title) => {
        title === isAccordionActive ? setIsAccordionActive(null) : setIsAccordionActive(title)
    }

    if (!isOnline) return <h1>Please check your internet connect</h1>

    return (
        <div className="restaurant-menu-details-container">
            <div className="restaurant-name-logo mb-2">
                {logo ? <img src={CDN_URL + logo} /> : null}
                <span><h1 className="text-2xl mb-3">{name} </h1></span></div>
            <div className="restaurant-details mb-3 shadow-lg">
                <div className="restaurant-detail-rating my-1">
                    <img src={resRating}></img>
                    <h4>{avgRating} ( {totalRatingsString}) • {costForTwoMessage}
                    </h4>
                </div>
                <div>{cuisines.join(",")}</div>
                <div className="restaurant-detail-delivery-time">{sla.slaString}</div>
                {expectationNotifiers?.length ? <div className="restaurant-detail-delivery">
                    <img src={CDN_URL + expectationNotifiers[0]?.icon.imageId}></img>
                    <span> {expectationNotifiers[0].enrichedText}</span></div>
                    : null}
            </div>

            {menuItemsData.length ? menuItemsData.map((menuItem, i) => {
                if (menuItem.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") {
                    return < Accordion
                        key={i + menuItem.card.card.title}
                        isActive={isAccordionActive === menuItem.card.card.title}
                        onClickAccordion={() => handleAccordionClick(menuItem.card.card.title)}
                        data={menuItem.card.card}
                    />
                }
                if (menuItem.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory") {
                    return (<div key={i + menuItem.card.card.title} >
                        <h3 className="text-lg font-bold ml-1">{menuItem.card.card.title}</h3>
                        {menuItem.card.card.categories.map((category, j) => {
                            return < Accordion
                                key={j + category.title}
                                isActive={isAccordionActive === category.title}
                                onClickAccordion={() => handleAccordionClick(category.title)}
                                data={category} />
                        })}
                    </div>)
                }
            }) : null}

        </div>)
}
export default RestaurantMenu