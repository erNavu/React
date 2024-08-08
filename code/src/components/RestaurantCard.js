import React from 'react'
import { CDN_URL } from '../utils/contants'

export default function RestaurantCard({ avgRating, name, cuisines, cloudinaryImageId, sla, costForTwo }) {

    return (
        <div className='restaurant_card'>
            <div>
                <img alt='restaurant_picture'
                    className='restaurant_img'
                    src={CDN_URL + cloudinaryImageId} />
            </div>
            <div className='restaurant_card_text'>
                <div className='restaurant_card_name'>{name}</div>
                <div className='restaurant_card_cuisines'>{cuisines?.join(", ")}</div>
                <div className='restaurant_card_footer'>
                    <div className='restaurant_card_rating'>{avgRating}</div>
                    {/* <div></div> */}
                    <div className='restaurant_card_cost'> • {costForTwo}</div>
                    {/* <div>•</div> */}
                    <div className='restaurant_card_minutes'> • {sla.slaString}</div>
                </div>
            </div>
        </div>
    )
}
