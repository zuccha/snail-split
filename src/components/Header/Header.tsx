import React from 'react'
import ISpace from '../../types/space'
import BlessedBox from '../BlessedBox'
import BlessedText from '../BlessedText'


interface IHeaderProps {
  title: string
  space?: ISpace
  titleColorBg?: string
  titleColorFg?: string
  borderColorBg?: string
  borderColorFg?: string
}


const HEADER_HEIGHT = 3

const Header: React.FC<IHeaderProps> = ({
  title,
  space = {},
  titleColorBg = undefined,
  titleColorFg = undefined,
  borderColorBg = undefined,
  borderColorFg = undefined,
}) => {
  return (
    <BlessedBox
      height={HEADER_HEIGHT}
      {...space}
      border='line'
      style={{
        border: {
          bg: borderColorBg,
          fg: borderColorFg,
        },
      }}
    >
      <BlessedText
        content={title}
        align='center'
        width='100%-2'
        style={{
          bg: titleColorBg,
          fg: titleColorFg,
          bold: true,
        }}
      />
    </BlessedBox>
  )
}


export default Header

export { HEADER_HEIGHT }
