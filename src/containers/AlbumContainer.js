import React, { Component } from "react";
import AlbumCard from '../components/AlbumCard';

class AlbumContainer extends React.Component {
  render() {
  let filteredAlbum = this.props.albums.filter(album => album.name.toLowerCase().includes(this.props.currentSearch.toLowerCase()))
return <div className='album-list'>
            <h2>Albums</h2>
            <ul>
              {filteredAlbum.map((album) => {
                return <AlbumCard album={album} handleClick={this.props.handleClick}/>
              })}
            </ul>

          </div>
  }
}

export default AlbumContainer; 