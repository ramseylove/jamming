import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from "../SearchResults/SearchResults";
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);

    this.state = {
      searchResults: [
        {
          id: 1,
          name: '1,2,3,4',
          artist: 'Coolio',
          album: 'Fantastic Voyage',
        },
        {
          id: 2,
          name: 'Fantastic Voyage',
          artist: 'Coolio',
          album: 'Fantastic Voyage',
        }
      ], 
      playlistName: 'hard rock',
      playlistTracks: [
        {
          id: 6,
          name: '1,2,3,4,5',
          artist: 'Coolio',
          album: 'Gangsters Paradise',
        },
        {
          id: 7,
          name: '1,2,3,4,5,6,7',
          artist: 'Coolio',
          album: 'Gangsters Paradise',
        },
      ]
    }
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (this.state.playlistTracks.find(newTrack => newTrack.id === track.id)) {
      return;
    } else {
      tracks.push(track)
      this.setState({playlistTracks: tracks})
    }
  }
  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id )

    this.setState({ playlistTracks: tracks})
  }
  render () {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} 
                        onAdd={this.addTrack} 
                         />
          <Playlist playlistName={this.state.playlistName} 
                    playlistTracks={this.state.playlistTracks}
                    onRemove={this.removeTrack} />
        </div>
      </div>
    </div>
  );
}}

export default App;
