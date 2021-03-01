
import React, {useState} from 'react';

function SearchItem({ onSearch }) {
    const onSub = (e) => {
        onSearch(e.target.value.toLowerCase());
    };

    return (
        <form>
            <input
            onChange={onSub}
            className="search-input"
            placeholder="Search"
            name="search"
            />
        </form>
    )
}
export default SearchItem;