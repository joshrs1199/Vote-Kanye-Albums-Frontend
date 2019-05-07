import React, { Component } from "react";

class Form extends React.Component {
  
  state = {
    name: '',
    cover: '',
    artist: '',
    votes: 0
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }

  render() {
    return (
      <form onSubmit={(event) => this.props.handleSubmit(event, this.state)}>
        <h4>Create Album</h4>
        <label>Album: </label>
        <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
        <br/>
        <label>Cover: </label>
        <input type='text' name='cover' value={this.state.cover} onChange={this.handleChange}/>
        <br/>
        <label>Artist: </label>
        <input type='text' name='artist' value={this.state.artist} onChange={this.handleChange}/>
        <br/>
        <input type="submit"/>
      </form>
    )
  }
}

export default Form;