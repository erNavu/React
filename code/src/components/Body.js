import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import RestaurantCard from '../components/RestaurantCard';
import Search from '../components/Search';
import BodyShimmer from '../shimmer/BodyShimmer';
import useRestaurantList from '../utils/useRestaurantList';
import withDiscountTagRestaurantCard from '../utils/withDiscountTagRestaurantCard';
import { useGetAllRestaurantsListQuery } from "../redux/apiSlice"

const Body = () => {
    // const restaurants = useRestaurantList([])
    // data from redux toolkit query
    const { data } = useGetAllRestaurantsListQuery()
    const restaurants = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([])
    const DiscountTagRestaurantCard = withDiscountTagRestaurantCard(RestaurantCard)

    const handleScroll = (e) => {
        const el = e.target.documentElement
        if (el.scrollTop + el.clientHeight >= el.scrollHeight - 1) {
            //load more data
            //loadMoreRestaurants()
        }
    }
    useEffect(() => {
        setFilteredRestaurantList(restaurants)
    }, [restaurants])

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll)
    // }, [])

    const onChangeSearchInput = (searchParam) => {
        const filteredList = restaurants.filter((item) => item.info.name.toLowerCase()
            .includes(searchParam.toLowerCase()) ||
            JSON.stringify(item.info.cuisines).toLowerCase().includes(searchParam.toLowerCase())
        )
        setFilteredRestaurantList(filteredList)
    }

    const loadMoreRestaurants = async () => {
        const response = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/update", {
            method: 'POST',
            body: JSON.stringify({
                // "lat": 30.3397809,
                // "lng": 76.3868797,
                // "nextOffset": "CJhlELQ4KICo6e3n07+TWzCnEzgE",
                "widgetOffset": {
                    // "NewListingView_category_bar_chicletranking_TwoRows": "",
                    // "NewListingView_category_bar_chicletranking_TwoRows_Rendition": "",
                    // "Restaurant_Group_WebView_SEO_PB_Theme": "",
                    "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo": "9",
                    // "inlineFacetFilter": "",
                    // "restaurantCountWidget": ""
                },
                // "filters": {},
                // "seoParams": {
                //     "seoUrl": "https://www.swiggy.com/",
                //     "pageType": "FOOD_HOMEPAGE",
                //     "apiName": "FoodHomePage"
                // },
                // "page_type": "DESKTOP_WEB_LISTING",
                // "_csrf": "1iCtTh7l17fj-9FvbeRvKGzvnC-FbxbSvMLmhRjI"
            }),
            headers: {
                'Content-Type': 'application/json',
                '__fetch_req__': true,

            },
        });
        const json = await response.json();
        console.log("swiggy post api", json)
        // const resData = json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // setRestaurants(resData);
        // setFilteredRestaurantList(resData);
    };
    return (
        <div >
            <Search
                onChangeSearchInput={onChangeSearchInput} />
            <div className='flex flex-wrap justify-center my-4' >
                {filteredRestaurantList?.length ?
                    filteredRestaurantList.map((restaurant) =>
                    (<Link className="mb-6" to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
                        {/* {console.log("hello data", restaurant.info.aggregatedDiscountInfoV3)} */}
                        {restaurant.info.aggregatedDiscountInfoV3?.discountTag ? <DiscountTagRestaurantCard resData={restaurant.info} /> : <RestaurantCard resData={restaurant.info} />}

                    </Link>))
                    : <BodyShimmer />}
            </div>
        </div>
    )
}

export default Body;

