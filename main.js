'use strict'

/*
import React from 'https://dev.jspm.io/react'
import ReactDOM from 'https://dev.jspm.io/react-dom'
*/

// SCOPE: external libraries are expected not to change

const Hey = x => (
  <div>
    <h1>HeyHeyHey</h1>
    {x.children}
  </div>
)

const Ho = () => <h1>Ho Child</h1>

const Root = () => (
  <div>
    <Hey>
      <h1>Yoo</h1>
      <Ho />
    </Hey>
  </div>
)

ReactDOM.render(<Root />, document.querySelector('#root'))
