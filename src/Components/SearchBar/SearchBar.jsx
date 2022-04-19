import React from 'react';


const SearchBar = (props) => {
    return (

        <div id='search-bar'>
            <label id='search-label'>Find Song</label>
            <input id='search-input' placeholder='Search by: Song Title, Ablum Name, Artist or Group Name, or Release Date'></input>
            <button id='search-button'>Search</button>
        </div>

    );
}


export default SearchBar;
