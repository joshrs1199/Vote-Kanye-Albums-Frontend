import React, { Component } from "react";

const AlbumCard = (props) => {
  return (
    <div className='album-card'>
      <h3>{props.album.name}</h3>
      <img src={props.album.cover} alt="Kanye Album" height="100" width="100"/>
      <p>{props.album.artist}</p>
      <p>Votes: {props.album.votes}</p>
      <button type="button" onClick={() => props.handleClick(props.album)}>Vote</button>
    </div>
  );
};

export default AlbumCard;