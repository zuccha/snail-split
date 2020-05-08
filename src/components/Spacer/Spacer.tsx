import React from 'react'
import ISpace from '../../types/space'
import BlessedText from '../BlessedText'


interface ISpacerProps {
  separator?: string
  space?: ISpace
}


const Spacer: React.FC<ISpacerProps> = ({
  separator = '-',
  space = {},
}) => {
  return (
    <BlessedText
      content={separator.repeat(space.width || 0)}
      fg='white'
      {...space}
    />
  )
}


export default Spacer
