import React, { useState } from 'react';


const EditLibrary = (props) => {

//    const [songTitle, setSongTitle] = useState('');
//    const [songArtist, setSongArtist] = useState('');
//    const [songAlbum, setSongAlbum] = useState('');
//    const [songGenre, setSongGenre] = useState('');
//    const [songReleaseDate, setSongReleaseDate] = useState('');
//
//    const handleSubmit = (formEvent) => {
//        formEvent.preventDefault();
//        
//        let newSong = {
//            'title': {songTitle},
//            'album': {songAlbum},
//            'artist': {songArtist},
//            'genre': {songGenre},
//            'releaseDate': {songReleaseDate}
//        }
//        props.handleAddSong(newSong);
//    }

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseDate, setReleaseDate] = useState('');

    const handleSubmit = (formEvent) => {
        formEvent.preventDefault();
        
        let newSong = {
            title,
            album,
            artist,
            genre,
            releaseDate
        }
        props.handleAddSong(newSong);
    }

    return (

        <form id='add-song-form' onSubmit={handleSubmit}>
            <div className='add-song-div'>
                <input
                    id='song-title' className='add-song-input'
                    placeholder='Song Title' type='text'
                    onChange={(event) => setTitle(event.target.value)}
                    value={title}
                />
                <input
                    id='album-title' className='add-song-input'
                    placeholder='Album Title' type='text'
                    onChange={(event) => setAlbum(event.target.value)}
                    value={album}
                    />
                <input
                    id='artist-name' className='add-song-input'
                    placeholder='Artist Name' type='text'
                    onChange={(event) => setArtist(event.target.value)}
                    value={artist}
                    />
            </div>

            <div className='add-song-div'>
                <input
                    id='song-genre' className='add-song-input'
                    placeholder='Music Genre' type='text'
                    onChange={(event) => setGenre(event.target.value)}
                    value={genre}
                    />
                <input
                    id='song-release-date' className='add-song-input'
                    placeholder='Release Date mm/dd/yyyy' type='text'
                    onChange={(event) => setReleaseDate(event.target.value)}
                    value={releaseDate}
                />
                <button id='add-song-button' type='submit'>Add Song</button>
            </div>
        </form>

    );
};


export default EditLibrary;
