import React from 'react';
import RestaurantCard from '../components/RestaurantCard';
import { RESTAURANTS_LIST } from '../data/restaurantsList';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
    console.log(RESTAURANTS_LIST)
    return (<>
        <Header />
        <div className='restaurant_list'>
            {RESTAURANTS_LIST?.length ? RESTAURANTS_LIST.map((restaurant) =>
                (<RestaurantCard key={restaurant.data.id} {...restaurant.data} />)) :
                <div>NO RESTAURANT found in Your Location</div>}</div>
        <Footer />
    </>
    )
}
