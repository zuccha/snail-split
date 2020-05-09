import React from 'react'
import ISpace from '../../types/space'
import BlessedBox from '../BlessedBox'
import BlessedText from '../BlessedText'
import Spacer, { SPACER_HEIGHT } from '../Spacer'


interface IHeaderProps {
  title: string
  space?: ISpace
  titleColorBg?: string
  titleColorFg?: string
  borderColorBg?: string
  borderColorFg?: string
  borderGlyph?: string
}


const HEADER_HEIGHT = SPACER_HEIGHT * 2 + 1

const Header: React.FC<IHeaderProps> = ({
  title,
  space = {},
  titleColorBg = undefined,
  titleColorFg = undefined,
  borderColorBg = undefined,
  borderColorFg = undefined,
  borderGlyph = '=',
}) => {
  return (
    <BlessedBox {...space}>
      <Spacer
        space={{ width: space.width }}
        separator={borderGlyph}
        colorBg={borderColorBg}
        colorFg={borderColorFg}
      />
      <BlessedText
        content={title}
        align='center'
        width='100%'
        top={1}
        style={{
          bg: titleColorBg,
          fg: titleColorFg,
          bold: true,
        }}
      />
      <Spacer
        space={{ width: space.width, top: 2 }}
        separator={borderGlyph}
        colorBg={borderColorBg}
        colorFg={borderColorFg}
      />
    </BlessedBox>
  )
}


export default Header

export { HEADER_HEIGHT }
