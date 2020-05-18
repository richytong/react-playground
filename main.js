'use strict'

import React from 'https://dev.jspm.io/react'
import ReactDOM from 'https://dev.jspm.io/react-dom'

import {
  Hey,
} from './lib.jsx'

const Root = Hey

ReactDOM.render(React.createElement(Root), document.querySelector('#root'))
