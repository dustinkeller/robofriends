import React from 'react';
// State >> props

const SearchBox = ({ searchField, searchChange }) => {
    return <div className="pa2">
        <input
            className='pa3 ba b--gray bg-light-gray'
            type='search'
            placeholder='Search robots...'
            onChange={searchChange}
            />
    </div>
}

export default SearchBox;