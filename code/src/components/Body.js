import React, { useState } from 'react'
import RestaurantCard from '../components/RestaurantCard';
import { RESTAURANTS_LIST } from '../config';

const filterData = (restaurantList, searchText) => {
    return restaurantList.filter(restaurant => restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()))
}


export default function Body() {
    const [search, setSearch] = useState("")
    const [restaurants, setRestaurants] = useState(RESTAURANTS_LIST)
    handleInput = (e) => {
        if (e.target.value === "") {
            setRestaurants(RESTAURANTS_LIST)
        }
        setSearch(e.target.value)
    }
    handleSearch = (e) => {
        e.preventDefault();
        const data = filterData(RESTAURANTS_LIST, search)
        setRestaurants(data)
    }
    return (
        <div>
            <div className='search_bar'>
                <input
                    className='search_input'
                    type="text"
                    placeholder='Type to search...'
                    onChange={handleInput}
                    value={search} />
                <button
                    className='btn'
                    type="submit"
                    onClick={handleSearch}
                > Search</button>
            </div>
            <div className='restaurant_list'>
                {restaurants?.length ? restaurants.map((restaurant) =>
                    (<RestaurantCard key={restaurant.data.id} {...restaurant.data} />)) :
                    <div>NO RESTAURANT found in Your Location</div>}
            </div>
        </div>
    )
}
