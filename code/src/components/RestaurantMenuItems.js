import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import ratingIcon from '../assets/ratingIcon.png';
import { CDN_URL } from "../utils/contants"
import { addItem, clearCart } from '../redux/cartSlice';

const RestaurantMenuItems = ({ item }) => {
    const dispatch = useDispatch()
    const resId = useSelector(state => state.cart.restaurantId)
    const [restaurantId, setRestaurantId] = useState(null);

    useEffect(() => {
        const id = JSON.parse(localStorage.getItem('restaurantId'));
        if (id) {
            setRestaurantId(id);
        }
    }, []);

    const handleCartItems = (item) => {
        const { id, price, defaultPrice } = item
        if (resId !== null && resId !== restaurantId) {
            dispatch(clearCart())
        }
        dispatch(addItem({ id, price: (price || defaultPrice) / 100, item, restaurantId }))
    }

    return (
        <div>
            <div className="flex justify-between border-b-slate-100 border-b-2 my-5 pb-6">
                <div className='w-2/3'>
                    <h3 className='mb-1 font-semibold'>{item.name}</h3>
                    <p className="flex items-center m-0">
                        <span >₹ {item.defaultPrice / 100 || item.price / 100}</span></p>
                    <p className="text-sm text-justify">{item.description}</p>

                    {item.ratings.aggregatedRating.rating ? <p className="flex items-center">
                        <span className="mr-1"><img className="w-4 mt-[2px]" src={ratingIcon} alt="ratingIcon" /></span>
                        <span className="text-green-800 mr-1">{item.ratings.aggregatedRating.rating}</span>
                        <span className='mr-1'>{`(${item.ratings.aggregatedRating.ratingCount})`}</span>
                    </p> : null}
                </div>
                <div className="ml-3 w-44 relative">
                    {item.imageId ?
                        <img className='rounded-xl max-h-36 w-40 mt-5' src={CDN_URL + item.imageId} alt="item image" />
                        : null}
                    <div className='absolute bottom-[-30px] left-28'>
                        <button
                            className="m-2 py-2 px-6 font-extrabold bg-black text-white rounded-md"
                            onClick={() => handleCartItems(item)}
                        > +
                        </button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default RestaurantMenuItems