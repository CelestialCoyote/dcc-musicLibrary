import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TitleBar from './Components/TitleBar/TitleBar';
import SearchBar from './Components/SearchBar/SearchBar';
import MusicTable from './Components/MusicTable/MusicTable';
import './App.css';


function App() {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        makeGetLibraryRequest();
    }, []);

    useEffect(() => {
        //makeGetLibraryRequest();
    }, [songs]);

    const makeGetLibraryRequest = async () => {
        try {
            //let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
            let response = await axios.get('http://localhost:5005/api/songs');
            
            setSongs(response.data);
            console.log(response.data);
        } catch (err) {
            console.log(err.message);
        }
    };

    const handleSearch = (searchString) => {
        if (searchString === '') {
            makeGetLibraryRequest();
        } else {
            let foundMedia = songs.filter((potentialMatch) => {
                if (potentialMatch.title.toLowerCase().includes(searchString.toLowerCase()) ||
                    potentialMatch.album.toLowerCase().includes(searchString.toLowerCase()) ||
                    potentialMatch.artist.toLowerCase().includes(searchString.toLowerCase()) ||
                    potentialMatch.genre.toLowerCase().includes(searchString.toLowerCase()) ||
                    potentialMatch.releaseDate.toLowerCase().includes(searchString.toLowerCase())) {
                    return true;
                }
                else {
                    return false;
                }
            });

            console.log(foundMedia);
            return setSongs(foundMedia);
        }
    };

    const handleDeleteSong = async (id) => {
        try {
            let response = await axios.delete(`http://localhost:5005/api/songs/${id}`).then((response)=> {
                setSongs(response.data);
            });
            
            console.log(response.data);
        } catch (err) {
            console.log(err.message);
        }
        console.log(`Delete song ${id} button clicked.`);
    }

    return (

        <div className='App'>

            <div id='main-container'>
                <div style={{ width: '100%' }}>
                    <TitleBar />
                </div>

                <div className='centered'>
                    <SearchBar handleSearch={handleSearch} />
                    <MusicTable mediaData={songs} handleDeleteSong={handleDeleteSong} />
                </div>

            </div>

        </div>
    );

};


export default App;
