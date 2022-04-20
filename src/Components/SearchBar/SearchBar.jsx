import React from 'react';


const SearchBar = (props) => {

    let searchString = React.createRef();  // React use ref to get input value

    const startSearch = () => {
        props.handleSearch(searchString.current.value);
    };

    return (

        <div id='search-bar'>
            <label id='search-label'>Find Song</label>
            <input id='search-input' ref={searchString} type='text' placeholder='Search by: Song Title, Ablum Name, Artist or Group Name, or Release Date'></input>
            
            <button id='search-button' onClick={startSearch}>Search</button>
        </div>

    );
};


export default SearchBar;
