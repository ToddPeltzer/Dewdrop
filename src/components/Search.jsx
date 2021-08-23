import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Search(props) {

const key = process.env.REACT_APP_WEATHER_KEY

const [search, setSearch] = useState("")
const initialSearch = ""

function handleChange(e) {
    setSearch({ ...search, [e.target.id]: e.target.value })
}

function handleSubmit(e) {
    e.preventDefault()
    setSearch("")
}

    return (
        <form onSubmit={handleSubmit}>
            <input
                id="location"
                type="text"
                onChange={handleChange}
                value={search.initialSearch} />
            <Link to={`/states/cities/${initialSearch}`} key={initialSearch}>Search</Link>
        </form>
    );
}


export default Search;