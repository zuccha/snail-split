import React from 'react'
import BlessedText from '../../components/BlessedText'
import * as Keybinding from '../../types/keybinding'
import * as Space from '../../types/space'
import useTheme from '../../store/theme/hooks/useTheme'


interface KeybindingDescriptionProps {
  keybinding: Keybinding.Keybinding
  description: string
  space?: Space.Space
}


const KeybindingDescription: React.FC<KeybindingDescriptionProps> = ({
  keybinding,
  description,
  space,
}) => {
  const theme = useTheme()

  const formattedKeybinding = keybinding === undefined
    ? 'none'.padEnd(12)
    : keybinding.padEnd(12)

  return (
    <BlessedText
      content={`${formattedKeybinding}${description}`}
      {...space}
      style={{
        bg: theme.app.colorBg,
        fg: theme.app.colorFg,
      }}
    />
  )
}


export default KeybindingDescription
