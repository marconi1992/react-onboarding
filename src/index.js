import React from 'react'
import ReactDOM from 'react-dom'

const heading = React.createElement('h1', { key: 0 }, 'React Vanilla')
const button = React.createElement('button', { key: 1 }, 'button')
const container = React.createElement('div', {}, [ heading, button ])

ReactDOM.render(
  container,
  document.getElementById('app')
)