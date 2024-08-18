import React from 'react'
import ratingIcon from '../assets/ratingIcon.png';
import { CDN_URL } from "../utils/contants"

const RestaurantMenuItems = ({ itemCards }) => {
    return (
        <div>
            {itemCards.map((item) => (<div key={item.card.info.id} className="flex justify-between border-b-slate-100 border-b-2 my-5 pb-4">
                <div className='w-2/3'>
                    <h3 className='mb-1 font-semibold'>{item.card.info.name}</h3>
                    <p className="flex items-center m-0">
                        <span >₹ {item.card.info.defaultPrice / 100 || item.card.info.price / 100}</span></p>
                    <p className="text-sm text-justify">{item.card.info.description}</p>

                    {item.card.info.ratings.aggregatedRating.rating ? <p className="flex items-center">
                        <span className="mr-1"><img className="w-4 mt-[2px]" src={ratingIcon} alt="ratingIcon" /></span>
                        <span className="text-green-800 mr-1">{item.card.info.ratings.aggregatedRating.rating}</span>
                        <span className='mr-1'>{`(${item.card.info.ratings.aggregatedRating.ratingCount})`}</span>
                    </p> : null}
                </div>
                <div className="ml-3 w-44 relative">
                    {item.card.info.imageId ?
                        <img className='rounded-xl max-h-36 w-40 mt-5' src={CDN_URL + item.card.info.imageId} alt="item image" />
                        : null}
                    <button className="m-2 py-2 px-4 absolute font-semibold bg-black text-white rounded-md bottom-[-20px] left-1/4 ">ADD + </button>
                </div>
            </div>))}
        </div>
    )
}

export default RestaurantMenuItems