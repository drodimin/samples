// use async_hooks to trace async operations of http get request
const async_hooks = require('async_hooks');
const http = require('http');
const fs = require('fs');
const util = require('util');

const log = (...args) => {
    fs.writeFileSync(1, `${util.format(...args)}\n`, { flag: 'a' });
}

const init =  (asyncId, type) => {
    log('init', asyncId, type);
}

const destroy = (asyncId) => {
    log('destroy', asyncId);
}


const asyncHook = async_hooks.createHook({ init, destroy });
asyncHook.enable()

const options = {
    hostname: 'google.com',
    path: '/',
    method: 'GET'
  }

  const req = http.request(options, res => { 
    res.on('data', d => {
        log('http request complete', d);
    })
  })

  req.on('error', error => {
    log('http request failed', error)
  })
  
  req.end()