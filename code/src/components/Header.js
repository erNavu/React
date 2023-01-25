import React, { useState } from 'react'
import companyLogo from '../assets/foodLogo.png';
import { FaUser } from 'react-icons/fa';


export default function Header() {
    const [search, setSearch] = useState("")

    handleSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className='header'>
            <div className='logo'>
                <img className='company_logo' alt="logo" src={companyLogo} />
                <div className='company_name'> Bite Buddy</div>
            </div>
            <div className='searchBar'>
                <input
                    className='search_input'
                    type="text"
                    placeholder='Type to search...'
                    onChange={handleSearch}
                    value={search} />
            </div>
            <div className='userIcon'> <FaUser size="2em" color='#cf5b47' /></div>
        </div>
    )
}
