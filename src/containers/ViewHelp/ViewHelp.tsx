import React from 'react'
import BlessedBox from '../../components/BlessedBox'
import useKeybinding from '../../hooks/useKeybinding'
import useConfig from '../../store/config/hooks/useConfig'
import * as Space from '../../types/space'


interface ViewHelpProps {
  space?: Space.Space
  onClose?: () => void
}


const ViewHelp: React.FC<ViewHelpProps> = ({
  space = {},
  onClose = () => { /* do nothing */ },
}) => {
  const config = useConfig()
  useKeybinding(config.keybindings.quit, onClose)

  return (
    <BlessedBox {...space} style={{ bg: 'yellow' }}>

    </BlessedBox>
  )
}


export default ViewHelp
