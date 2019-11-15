import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.js'

class App extends Component {
// loads on page
  componentDidMount() {
    console.log('running in app component');
    this.onGet();
  }

// local state
  state = {
    photoList: [],
    lastLiked: `You Haven't liked a photo yet.`,
  }
;

//function to go GET photos from /gallery and store in the state
  onGet = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
      .then(response => {
        this.setState({
          photoList: response.data
        })
        console.log('in GET')
      })
      .catch((error) => {
        console.log('error in GET', error)
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery</h1>
        </header>
        <br />
<div className="App-body">
        < GalleryList
          onLikeClick={this.onLikeClick}
          photoList={this.state.photoList}
          onGet={this.onGet}
         />
        {/* <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre> */}
</div>
      </div >
    );
  }
}

export default App;
