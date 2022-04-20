import React from 'react';


const SearchBar = (props) => {

    let textInput = React.createRef();  // React use ref to get input value

    let handleSearch = (event) => {
        let searchStr = textInput.current.value;
        let foundMedia = props.mediaData.filter(function (potentialMatch) {
            if (potentialMatch.title.toLowerCase().includes(searchStr.toLowerCase()) ||
                potentialMatch.album.toLowerCase().includes(searchStr.toLowerCase()) ||
                potentialMatch.artist.toLowerCase().includes(searchStr.toLowerCase()) ||
                potentialMatch.genre.toLowerCase().includes(searchStr.toLowerCase()) ||
                potentialMatch.releaseDate.toLowerCase().includes(searchStr.toLowerCase())) {
                return true;
            }
            else {
                return false;
            }
        });

        console.log(textInput.current.value);
        //console.log(props.mediaData);

        console.log(foundMedia);
        return foundMedia;
    }

    return (

        <div id='search-bar'>
            <label id='search-label'>Find Song</label>
            <input id='search-input' ref={textInput} type='text' placeholder='Search by: Song Title, Ablum Name, Artist or Group Name, or Release Date'></input>
            <button id='search-button' onClick={handleSearch}>Search</button>
        </div>

    );
}


export default SearchBar;
