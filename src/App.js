import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavigationBar from './Components/NavigationBar/NavigatonBar';
import TitleBar from './Components/TitleBar/TitleBar';
import SearchBar from './Components/SearchBar/SearchBar';
import MusicTable from './Components/MusicTable/MusicTable';
import './App.css';


function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    makeGetLibraryRequest();
  }, []);

  async function makeGetLibraryRequest() {
    try {
      let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
      setSongs(response.data);
      console.log(response.data);
    } catch(err) {
      console.log(err.message);
    }
  }

  return (
    <div className='App'>

      <div id='main-container'>
        <div style={{width: '100%'}}>
          <TitleBar />
        </div>

        <div className='centered'>
          <SearchBar />
          <MusicTable mediaData={songs} />
        </div>
       
      </div>
      
    </div>
  );
}


export default App;
