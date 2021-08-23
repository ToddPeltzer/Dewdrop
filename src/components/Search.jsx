import React, { useState } from 'react';
import '../styling/search.css'

function Search({match}) {


const [search, setSearch] = useState("")


function handleChange(e) {
    setSearch(e.target.value)
}

function handleSubmit(e) {
   match.history.push(`/${search}`)
   setSearch("")
}

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Search Locations..."
                type="text"
                onChange={handleChange}
                value={search} 
                />
            <button className="button" type="submit">Search</button>
        </form>
    );
}


export default Search;