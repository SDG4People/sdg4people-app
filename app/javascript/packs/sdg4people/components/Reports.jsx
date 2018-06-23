import React from 'react';
import ListedReport from './ListedReport';
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

  render() {
    return (
      <div>
        <Link to="/reports/new">New Report</Link>
        {this._displayReports()}
      </div>
    )
  }
}

