import React from 'react';
import { Api } from '../middleware/api'
import { Link } from 'react-router-dom'

export default class NewReport extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      description: ''
    }
  }

  handleTitleChange = (event) => {
    this.setState({title: event.target.value});
  }

  handleDescriptionChange = (event) => {
    this.setState({description: event.target.value});
  }

  handleSubmit = (event) => {
    let { title, description } = this.state;
    Api.createReport({
      report: {
        title,
        description,
        status: 'open'
      }
    });
    window.location = '/'
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
          </label>
          <label>
            Description:
            <input type="text" value={this.state.description} onChange={this.handleDescriptionChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

