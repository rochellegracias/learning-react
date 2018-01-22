import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props){
    super(props)
  }

  render(){
    const {title,children} = this.props;
    return(
      <h1 className='header'>Enter</h1>
    );
  }
}

export default SearchBar;
