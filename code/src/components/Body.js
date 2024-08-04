import { useEffect, useState } from 'react'
import RestaurantCard from '../components/RestaurantCard';
import Search from '../components/Search';
import { SWIGGY_URL } from '../utils/contants'
import BodyShimmer from '../shimmer/BodyShimmer';

const Body = () => {
    const [restaurants, setRestaurants] = useState([])
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([])

    const onChangeSearchInput = (searchParam) => {
        const filteredList = restaurants.filter((item) => item.info.name.toLowerCase()
            .includes(searchParam.toLowerCase()) ||
            JSON.stringify(item.info.cuisines).toLowerCase().includes(searchParam.toLowerCase())
        )
        setFilteredRestaurantList(filteredList)
    }
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(SWIGGY_URL);
        const json = await data.json();
        // console.log(json)
        const resData = json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(resData)
        setRestaurants(resData);
        setFilteredRestaurantList(resData);
    };

    if (!restaurants?.length) {
        return <BodyShimmer />
    }

    return (
        <div>
            <Search
                onChangeSearchInput={onChangeSearchInput} />
            <div className='restaurant_list'>
                {filteredRestaurantList?.length ?
                    filteredRestaurantList.map((restaurant) =>
                        (<RestaurantCard key={restaurant.info.id} {...restaurant.info} />))
                    : <div>No Found</div>}
            </div>
        </div>
    )
}

export default Body;
