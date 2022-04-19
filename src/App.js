import React, { useEffect } from 'react';
import axios from 'axios';
import NavigationBar from './Components/NavigationBar/NavigatonBar';
import SearchBar from './Components/SearchBar/SearchBar';
import './App.css';


function App() {

  useEffect(() => {
    makeGetLibraryRequest();
  }, []);

  async function makeGetLibraryRequest() {
    try {
      let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
      console.log(response.data);
    } catch(err) {
      console.log(err.message);
    }
  }

  return (
    <div className="App">

      <NavigationBar />
      <SearchBar />
    </div>
  );
}


export default App;
