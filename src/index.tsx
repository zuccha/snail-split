import React, { Component } from 'react'
import blessed from 'blessed'
import { render } from 'react-blessed'
import App from './App'


const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'react-blessed hello world',
})

screen.key(['escape', 'q', 'C-c'], () => {
  return process.exit(0)
})

render(<App />, screen)
