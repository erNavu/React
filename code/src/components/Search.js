import { useState } from "react"

const Search = ({ onChangeSearchInput }) => {

    const [text, setText] = useState('')

    const handleInput = (e) => {
        let text = e.target.value
        setText(text)
        onChangeSearchInput(text)
    }

    return (
        <div className='m-4 text-center'>
            <input
                className='ml-[-28px] !w-2/5 h-12 py-[2px] px-4 text-xl rounded-lg border-[1px] border-gray-300'
                type="text"
                placeholder='Type to search...'
                onChange={handleInput}
                value={text}
            />

        </div>
    )
}

export default Search