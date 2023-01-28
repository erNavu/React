import React from 'react'

export default function RestaurantCard({ avgRating, name, cuisines, cloudinaryImageId, slaString, costForTwoString }) {
    return (
        <div className='restaurant_card'>
            <div>
                <img alt='restaurant_picture'
                    className='restaurant_img'
                    src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} />
            </div>
            <div className='restaurant_card_text'>
                <div className='restaurant_card_name'>{name}</div>
                <div className='restaurant_card_cuisines'>{cuisines?.join(", ")}</div>
                <div className='restaurant_card_footer'>
                    <div className='restaurant_card_rating'>{avgRating}</div>
                    <div>•</div>
                    <div className='restaurant_card_cost'>{costForTwoString}</div>
                    <div>•</div>
                    <div className='restaurant_card_minutes'>{slaString}</div>
                </div>
            </div>
        </div>
    )
}
