import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Reports from '../reports/index.jsx'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Reports name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})

Reports.defaultProps = {
  name: 'David'
}

Reports.propTypes = {
  name: PropTypes.string
}

