import React from 'react'
import ratingIcon from '../assets/ratingIcon.png';
import { CDN_URL } from "../utils/contants"

const RestaurantMenuItems = ({ itemCards }) => {
    return (
        <div className="menu-item-container">
            {itemCards.map((item) => (<div key={item.card.info.id} className="menu-item">
                <div>
                    <h3 className='mb-1'>{item.card.info.name}</h3>
                    <p className="menu-item-price-container">
                        {/* <span><img src={discountIcon} /></span> */}
                        <span>₹ {item.card.info.defaultPrice / 100 || item.card.info.price / 100}</span></p>
                    <p className="menu-item-description">{item.card.info.description}</p>

                    {item.card.info.ratings.aggregatedRating.rating ? <p className="menu-item-rating">
                        <span className="ratingIcon"><img src={ratingIcon} alt="ratingIcon" /></span>
                        <span className="menu-item-rating-aggregatedRating">{item.card.info.ratings.aggregatedRating.rating}</span>
                        <span>{`(${item.card.info.ratings.aggregatedRating.ratingCount})`}</span>
                    </p> : null}
                </div>
                {item.card.info.imageId ? <div className="menu-item-img"> <img src={CDN_URL + item.card.info.imageId} alt="item image" /></div> : null}
            </div>))}
        </div>
    )
}

export default RestaurantMenuItems