import React from 'react'
import ISpace from '../../types/space'
import BlessedBox from '../BlessedBox'
import BlessedText from '../BlessedText'
import Spacer, { SPACER_HEIGHT } from '../Spacer'


interface IHeaderProps {
  title: string
  space?: ISpace
}


const HEADER_HEIGHT = SPACER_HEIGHT * 2 + 1

const Header: React.FC<IHeaderProps> = ({
  title,
  space = {},
}) => {
  return (
    <BlessedBox {...space}>
      <Spacer space={{ width: space.width }} separator='=' />
      <BlessedText content={title} align='center' width='100%' top={1} />
      <Spacer space={{ width: space.width, top: 2 }} separator='=' />
    </BlessedBox>
  )
}


export default Header

export { HEADER_HEIGHT }
