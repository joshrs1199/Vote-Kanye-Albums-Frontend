import React, { Component } from "react";
import AlbumCard from '../components/AlbumCard'

class VotedAlbumContainer extends React.Component {
  render() {
    return <div className='voted-album-list'>
            <h2>Voted Albums</h2>
            <ul>
              <AlbumCard album={this.props.album}/>
            </ul>
          </div>
  }
}

export default VotedAlbumContainer; 