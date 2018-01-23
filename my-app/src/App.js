import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  render(){
    let txt = this.props.txt
    return (
      <div>
        <h1>
          Hello {txt}
        </h1>
        <b>Bold</b>
      </div>
    )
  }
}

App.propTypes = {
    txt: PropTypes.string,
    cat: PropTypes.number.isRequired
}

App.defaultProps = {
    txt: 'World'
}

export default App
