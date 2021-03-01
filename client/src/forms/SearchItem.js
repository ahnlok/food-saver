
import React from 'react';

function SearchItem({ onSearch }) {
    const onSub = (e) => {
        onSearch(e.target.value.toLowerCase());
    };

    return (
        <form>
            <input
            onChange={onSub}
            className="search-input"
            placeholder="Search your item by name, category, or expiration date"
            name="search"
            />
        </form>
    )
}
export default SearchItem;