'use strict'

import { Parser } from 'https://unpkg.com/acorn@7.1.0/dist/acorn.mjs'
import jsx from './vendor/acorn-jsx/index.js'

const parse = x => Parser.extend(jsx()).parse(x, {
  sourceType: 'module',
})

export default parse

