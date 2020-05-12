import React from 'react'
import BlessedBox from '../../components/BlessedBox'
import useKeybinding from '../../hooks/useKeybinding'
import * as Space from '../../types/space'


interface ViewHelpProps {
  space?: Space.Space
  onClose?: () => void
}


const ViewHelp: React.FC<ViewHelpProps> = ({
  space = {},
  onClose = () => { /* do nothing */ },
}) => {
  useKeybinding('escape', onClose)
  useKeybinding('q', onClose)

  return (
    <BlessedBox {...space} style={{ bg: 'yellow' }}>

    </BlessedBox>
  )
}


export default ViewHelp
