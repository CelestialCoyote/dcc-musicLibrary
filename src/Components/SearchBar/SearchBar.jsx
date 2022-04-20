import React from 'react';


const SearchBar = (props) => {

    let textInput = React.createRef();  // React use ref to get input value

    let onOnclickHandler = (e) => {
        console.log(textInput.current.value); 
    };

    //handleSearch(songs) {
    //  
    //    let foundMedia = songs.filter(function (potentialMatch) {
    //      if (potentialMatch.album === songs.album) {
    //        return true;
    //      }
    //      else {
    //        return false;
    //      }
    //    });
    //  
    //    console.log(foundMedia);
    //    return foundMedia;
    //  }
      


    return (

        <div id='search-bar'>
            <label id='search-label'>Find Song</label>
            <input id='search-input' ref={textInput} type='text' placeholder='Search by: Song Title, Ablum Name, Artist or Group Name, or Release Date'></input>
            <button id='search-button' onClick={onOnclickHandler}>Search</button>
        </div>

    );
}


export default SearchBar;
