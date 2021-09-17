import React, { useState } from 'react';
import '../App.css'

function Search({match}) {


const [search, setSearch] = useState("")

//function to change search variable based on user input
function handleChange(e) {
    setSearch(e.target.value)
}

//function to push the input to slug and provide results of page searching for. resets search variable to empty. prevent default not used.
function handleSubmit() {
   match.history.push(`/search/${search}`)
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