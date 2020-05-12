import React from 'react'
import BlessedBox from '../../components/BlessedBox'
import * as Space from '../../types/space'


interface ViewHelpProps {
  space?: Space.Space
}


const ViewHelp: React.FC<ViewHelpProps> = ({
  space = {},
}) => {
  return (
    <BlessedBox {...space} style={{ bg: 'yellow' }}>

    </BlessedBox>
  )
}


export default ViewHelp
