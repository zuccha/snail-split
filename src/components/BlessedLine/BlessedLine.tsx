import React from 'react'
import { Widgets } from 'blessed'


type IBlessedLineProps = Widgets.LineOptions


const BlessedLine: React.FC<IBlessedLineProps> = (props) => {
  return <blessed-line {...props} />
}


export default BlessedLine
