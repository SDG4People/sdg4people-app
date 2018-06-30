import React from 'react';
import ListedReport from './ListedReport';
import SearchBar from './SearchBar';
import { Api } from '../middleware/api'
import { Link } from 'react-router-dom'

export default class Reports extends React.Component {
  constructor() {
    super();

    this.state = {
      reports: []
    }
  }

  componentDidMount() {
    Api.getReports((reports) => {
      this.setState({reports})
    });
  }

  _displayReports = () => {
    return this.state.reports.map((report) => {
      return <ListedReport report={report} key={report.title} />
    })
  }

  _search = (query) => {
    Api.searchReports(query, (reports) => {
      this.setState({reports});
    });
  }

  render() {
    return (
      <div>
        <Link to="/reports/new">New Report</Link>
        <SearchBar search={this._search} />
        {this._displayReports()}
      </div>
    )
  }
}

