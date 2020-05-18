'use strict'

import React from 'https://dev.jspm.io/react'
import ReactDOM from 'https://dev.jspm.io/react-dom'

// SCOPE: external libraries are expected not to change

const Hey = x => (
  <div>
    <h1>HeyHeyHey</h1>
    {...x.chlidren}
  </div>
)

const Root = Hey

ReactDOM.render(React.createElement(Root), document.querySelector('#root'))
