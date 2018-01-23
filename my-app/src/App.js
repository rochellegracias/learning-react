import React, { Component } from 'react';
import searchicon from './search.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='navbar'>
          <a className='homelink' href="#">Home</a>
          <div class="search-container">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit"><i src="searchicon"></i></button>
          </div>
        </div>
        <div className='home-container'>

        </div>
      </div>
    );
  }
}

export default App;
