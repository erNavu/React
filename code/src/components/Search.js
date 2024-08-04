import { useState } from "react"

const Search = ({ onChangeSearchInput }) => {

    const [text, setText] = useState('')

    const handleInput = (e) => {
        let text = e.target.value
        setText(text)
        onChangeSearchInput(text)
    }

    return (
        <div className='search_bar'>
            <input
                className='search_input'
                type="text"
                placeholder='Type to search...'
                onChange={handleInput}
                value={text}
            />

        </div>
    )
}

export default Search