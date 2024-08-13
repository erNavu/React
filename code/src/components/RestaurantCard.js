import React from 'react'
import { CDN_URL } from '../utils/contants'

export default function RestaurantCard({ avgRating, name, cuisines, cloudinaryImageId, sla, costForTwo }) {
    return (
        <div className='w-72 h-[100%] my-0 mr-1 ml-6 rounded-2xl bg-gray-200 hover:bg-gray-300'>
            <div>
                <img alt='restaurant_picture'
                    className='h-56 rounded-t-2xl w-[100%]'
                    src={CDN_URL + cloudinaryImageId} />
            </div>
            <div className='px-2 py-1'>
                <div className='pb-4 font-semibold text-2xl'>{name}</div>
                <div className='my-1 text-[16px] text-gray-600'>{cuisines?.join(", ")}</div>
                <div className='text-gray-600 text-xs flex items-center py-1 px-[1px]'>
                    {avgRating ? <div className='mr-4'>{"✭" + avgRating} </div> : null}
                    <div className='mr-4'> {costForTwo}</div>
                    {/* <div>•</div> */}
                    <div className='mr-4'> {sla.slaString}</div>
                </div>
            </div>
        </div>
    )
}
