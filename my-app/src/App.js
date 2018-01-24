import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      name: 'World'
    }
  }

  update( e ){
    this.setState({name: e.target.value})
  }

  render(){
    let name = this.props.name
    return (
      <div>
        <input type="text"
          onChange={this.update.bind(this)}/>
        <h1>Hello, {this.state.name}</h1>
      </div>
    )
  }
}

export default App
