import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  _updateValue = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  _submitSearch = () => {
    this.props.search(this.state.value)
  }

  render() {
    return (
      <div>
        <input onChange={this._updateValue} value={this.state.value} type="text" placeholder={'search here'} />
        <button onClick={this._submitSearch}>Submit</button>
      </div>
    )
  }
}
