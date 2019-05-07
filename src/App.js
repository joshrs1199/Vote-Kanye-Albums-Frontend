import React from 'react';
import './App.css';
import AlbumContainer from './containers/AlbumContainer';
import VotedAlbumContainer from './containers/VotedAlbumContainer'
import Filter from './components/Filter'
import Form from './components/Form'

class App extends React.Component {

  state = {
    albums: [],
    currentAlbum: {},
    currentSearch: ''
  }
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNlLaxqQChNxfEL0YSJ4HKGtrwBugXKfdbXKKql5YFAcEkO4j6
  componentDidMount(){
    fetch('http://localhost:3001/albums')
    .then((response) => {
      return response.json()
    }).then((albums) => {
      this.setState({
        albums: albums
      })
    })
  }

  handleClick = (event) => {
    this.setState({
      currentAlbum: event
    })
  }

  handleChange = (event) => {
    this.setState({
      currentSearch: event.target.value
    })
  }

  handleSubmit = (event, createdAlbum) => {
    event.preventDefault();
    this.setState({
      albums: [createdAlbum, ...this.state.albums]
    })
  }

  render() {
    return <div>
            <Filter handleChange={this.handleChange} currentSearch={this.state.currentSearch}/>
            <Form handleSubmit={this.handleSubmit}/>
            <AlbumContainer currentSearch={this.state.currentSearch} albums={this.state.albums} handleClick={this.handleClick}/>
            <VotedAlbumContainer album={this.state.currentAlbum}/>
          </div>
  }
}

export default App;
