import React from 'react'
import * as Space from '../../types/space'
import BlessedText from '../BlessedText'


interface ISpacerProps {
  separator?: string
  space?: Space.Space
  colorBg?: string
  colorFg?: string
}


const SPACER_HEIGHT = 1

const Spacer: React.FC<ISpacerProps> = ({
  separator = '-',
  space = {},
  colorBg = undefined,
  colorFg = undefined,
}) => {
  return (
    <BlessedText
      content={separator.repeat(space.width || 0)}
      {...space}
      style={{
        bg: colorBg,
        fg: colorFg,
        bold: true,
      }}
    />
  )
}


export default Spacer

export { SPACER_HEIGHT }
