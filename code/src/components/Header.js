import React from 'react'
import companyLogo from '../assets/foodLogo.png';
import { FaUser } from 'react-icons/fa';


export default function Header() {
    // const [search, setSearch] = useState("")
    // handleSearch = (e) => {
    //     setSearch(e.target.value)
    // }
    const navItems = [{ name: "Home", Id: "home", url: "/home", icon: "" },
    { name: "About Us ", Id: "about", url: "/about", icon: "" },
    { name: "Contact", Id: "contact", url: "/contact", icon: "" },
    { name: "Cart", Id: "cart", url: "/cart", icon: "" }]


    return (
        <div className='header'>
            <div className='logo'>
                <img className='company_logo' alt="logo" src={companyLogo} />
                <div className='company_name'>Bite Buddy</div>
            </div>
            {navItems?.length ?
                <ul className='navItems'>
                    {navItems.map((item) => (
                        <li key={item.id}> {item.name}</li>
                    ))}
                </ul> : null}
            {/* <div className='searchBar'>
                <input
                    className='search_input'
                    type="text"
                    placeholder='Type to search...'
                    onChange={handleSearch}
                    value={search} />
            </div> */}
            {/* <div className='userIcon'> <FaUser size="2em" color='#cf5b47' /></div> */}
        </div>
    )
}
