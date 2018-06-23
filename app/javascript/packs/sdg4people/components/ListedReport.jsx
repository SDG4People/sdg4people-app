import React from 'react';

export default class ListedReport extends React.Component {
  render() {
    let { title, description, status } = this.props.report;
    return (
      <div>
        <h2>Title: {title}</h2>
        <p>Description: {description}</p>
        <p>Status: {status}</p>
      </div>
    )
  }
}
