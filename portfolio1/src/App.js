import { useState } from 'react';
import AlbumData from './components/AlbumData';
import './App.css';
import RateMyAlbums from './components/RateMyAlbums';

function App() {

  let albumData = [ // data for the photo gallery
    {
      "albumName":"Woods",
      "albumPhotos": [
        {
          "photoId": 0,
          src: "woods.jpg"
        },
        {
          "photoId": 1,
          src : "woods2.jpg"
        },
        {
          "photoId": 2,
          src : "woods3.jpg"
        },
        {
          "photoId": 3,
          src : "woods4.jpg"
        }
      ]
    },
    {
      "albumName":"Beach",
      "albumPhotos": [
        {
          "photoId": 0,
          src: "beach.jpg"
        },
        {
          "photoId": 1,
          src : "beach2.jpg"
        },
        {
          "photoId": 2,
          src : "beach3.jpg"
        }
      ]
    },
    {
      "albumName":"lake",
      "albumPhotos": [
        {
          "photoId": 0,
          src: "lake.jpg"
        },
        {
          "photoId": 1,
          src: "lake2.jpg"
        },
        {
          "photoId": 2,
          src : "lake3.jpg"
        }
      ]
    }
  ]

  let [currentPage, setCurrentPage] = useState(0); // creates states to help switch screens

  let defaultReturn = (
    <div className="App">
      <header className="App-header">
        <h1>Select a Photo Album</h1>
        <button className="album-option" onClick={() => { setCurrentPage(currentPage = 1) }}>The Woods</button>
        <button className="album-option" onClick={() => { setCurrentPage(currentPage = 2) }}>The Beach</button>
        <button className="album-option" onClick={() => { setCurrentPage(currentPage = 3) }}>The Lake</button>
        <button className='album-option' onClick={() => { setCurrentPage(currentPage = 4) }}>Rate my Albums</button>
      </header>
    </div>
  );

  let woods = (
    <div className="App">
      <header className='App-header'>
        <h1>The Woods</h1>
      </header>
      <AlbumData data={albumData[0]}></AlbumData>
      <button className="album-option" onClick={() => { setCurrentPage(currentPage = 0) }}>Back to Main Page</button>
    </div>
  );

  let beach = (
    <div className="App">
      <header className='App-header'>
        <h1>The Beach</h1>
      </header>
        <AlbumData data={albumData[1]}></AlbumData>
        <button className="album-option" onClick={() => { setCurrentPage(currentPage = 0) }}>Back to Main Page</button>
    </div>
  )

  let lake = (
    <div className="App">
      <header className='App-header'>
        <h1>The Lake</h1>
      </header>
        <AlbumData data={albumData[2]}></AlbumData>
        <button className="album-option" onClick={() => { setCurrentPage(currentPage = 0) }}>Back to Main Page</button>
    </div>
  );

  let rateMyAlbums = (
    <div className="App">
      <header className='App-header'>
        <h1>Rate My Albums</h1>
        <RateMyAlbums data={albumData}></RateMyAlbums>
      </header>
        <button className="album-option" onClick={() => { setCurrentPage(currentPage = 0) }}>Back to Main Page</button>
    </div>
  )

  if (currentPage === 0) {
    return defaultReturn
  } else if (currentPage === 1) {
    return woods
  } else if (currentPage === 2) {
    return beach
  } else if (currentPage === 3) {
    return lake
  } else if (currentPage === 4) {
    return rateMyAlbums
  }
}

export default App;
