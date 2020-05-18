import {
  pipe, fork, assign, tap, tryCatch, switchCase,
  map, filter, reduce, transform,
  any, all, and, or, not,
  eq, gt, lt, gte, lte,
  get, pick, omit,
} from 'https://deno.land/x/rubico/rubico.js'

import { serve } from 'https://deno.land/std@0.51.0/http/server.ts'
import { readFileStr } from 'https://deno.land/std@0.51.0/fs/mod.ts'
import { join as joinPath } from 'https://deno.land/std@0.51.0/path/mod.ts'

const { bundle } = Deno

const join = delim => x => x.join(delim)

const putEntryTime = req => {
  req.entry_time = (new Date()).toJSON()
  return req
}

const traceRequest = pipe([
  fork([
    pipe([get('entry_time'), x => '[' + x + ']']),
    get('method'),
    get('url'),
  ]),
  join(' '),
  console.log,
])

const sendBundle = path => pipe([
  req => {
    req.headers.append('Access-Control-Allow-Origin', '*')
    req.headers.append('Content-Type', 'text/javascript')
    return req
  },
  fork({
    req: x => x,
    body: pipe([() => bundle(path), get(1)]),
    headers: get('headers'),
  }),
  ({ req, ...response }) => {
    req.respond(response)
    return req
  },
])

const sendNotFound = req => {
  req.respond({ status: 404, body: 'Not Found' })
  return req
}

const route = switchCase([
  eq('/main.js', get('url')), sendBundle('./main.js'),
  sendNotFound,
])

const onRequest = tryCatch(pipe([
  putEntryTime,
  route,
  tap(traceRequest),
]), (err, x) => {
  console.error('caught', err, x)
})

const s = serve({ port: 8001 })
console.log('http://localhost:8001/')
transform(map(onRequest), null)(s)
