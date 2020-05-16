import React from 'react'
import { render } from 'react-blessed'
import App from './App'
import screen from './screen'
import parseArgs from './startup/parseArgs'


const args = parseArgs()


render(<App {...args} />, screen)
