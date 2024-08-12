import { useParams } from "react-router-dom"
import "../styles/restaurantMenu.css"
import { CDN_URL } from "../utils/contants"
import Accordion from "../components/Accordion"
import resRating from "../assets/resRating.png"
import useOnlineStatus from '../utils/useOnlineStatus'
import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestaurantMenu = () => {
    const { res } = useParams()
    const isOnline = useOnlineStatus()
    const restaurantDetails = useRestaurantMenu(res)

    if (!restaurantDetails?.length) return (<h1>data loading...</h1>)

    const { name, cuisines, avgRating, costForTwoMessage, totalRatingsString, expectationNotifiers, sla, logo } = restaurantDetails[2]?.card?.card?.info
    const menuItemsData = restaurantDetails[4]?.groupedCard?.cardGroupMap.REGULAR.cards
    if (!isOnline) return <h1>Please check your internet connect</h1>

    return (
        <div className="restaurant-menu-details-container">
            <div className="restaurant-name-logo">
                {logo ? <img src={CDN_URL + logo} /> : null}
                <span><h1>{name} </h1></span></div>
            <div className="restaurant-details">
                <div className="restaurant-detail-rating">
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
                if (typeof menuItem.card.card.title !== 'undefined' && typeof menuItem.card.card.itemCards !== 'undefined') {
                    return < Accordion key={i + menuItem.card.card.title} data={menuItem.card.card} />
                }
                if (typeof menuItem.card.card.title !== 'undefined' && typeof menuItem.card.card.categories !== 'undefined') {
                    return (<div key={i + menuItem.card.card.title} >
                        <h3>{menuItem.card.card.title}</h3>
                        {menuItem.card.card.categories.map((category, j) => {
                            return < Accordion key={j + category.title} data={category} />
                        })}
                    </div>)
                }
            }) : null}

        </div>)
}
export default RestaurantMenu