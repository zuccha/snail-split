import React from 'react'
import BlessedBox from '../../components/BlessedBox'
import BlessedText from '../../components/BlessedText'
import useKeybinding from '../../hooks/useKeybinding'
import useConfig from '../../store/config/hooks/useConfig'
import useTheme from '../../store/theme/hooks/useTheme'
import * as Space from '../../types/space'
import KeybindingDescription from './KeybindingDescription'


interface ViewHelpProps {
  space?: Space.Space
  onClose?: () => void
}


const PADDING = 2
const HEADER_TOP = 1
const COMMANDS_TOP = HEADER_TOP + 2
const MORE_TOP = COMMANDS_TOP + 14

const ViewHelp: React.FC<ViewHelpProps> = ({
  space = {},
  onClose = () => { /* do nothing */ },
}) => {
  const config = useConfig()
  const theme = useTheme()
  useKeybinding(config.keybindings.quit, onClose)

  return (
    <BlessedBox {...space} style={{ bg: theme.app.colorBg }}>
      <BlessedText
        content='AVAILABLE COMMANDS:'
        left={PADDING}
        top={HEADER_TOP}
        style={{
          bg: theme.app.colorBg,
          fg: theme.app.colorFg,
        }}
      />
      <KeybindingDescription
        keybinding={config.keybindings.startTimer}
        description='Start the timer.'
        space={{ left: PADDING * 2, top: COMMANDS_TOP }}
      />
      <KeybindingDescription
        keybinding={config.keybindings.stopTimer}
        description='Stop the timer.'
        space={{ left: PADDING * 2, top: COMMANDS_TOP + 1 }}
      />
      <KeybindingDescription
        keybinding={config.keybindings.toggleTimer}
        description='Start the timer if stopped, and vice-versa.'
        space={{ left: PADDING * 2, top: COMMANDS_TOP + 2 }}
      />
      <KeybindingDescription
        keybinding={config.keybindings.resetTimer}
        description='Clear all current times and stop timer.'
        space={{ left: PADDING * 2, top: COMMANDS_TOP + 3 }}
      />
      <KeybindingDescription
        keybinding={config.keybindings.splitCurrentSegment}
        description='Set time for current segment, go to next and update best times if run has ended. Can be done only if timer is running.'
        space={{ left: PADDING * 2, top: COMMANDS_TOP + 4 }}
      />
      <KeybindingDescription
        keybinding={config.keybindings.invalidatePreviousSegment}
        description='Clear time for previous segment.'
        space={{ left: PADDING * 2, top: COMMANDS_TOP + 5 }}
      />
      <KeybindingDescription
        keybinding={config.keybindings.scrollSegmentsUp}
        description='Move segments window up.'
        space={{ left: PADDING * 2, top: COMMANDS_TOP + 6 }}
      />
      <KeybindingDescription
        keybinding={config.keybindings.scrollSegmentsDown}
        description='Move segments window down.'
        space={{ left: PADDING * 2, top: COMMANDS_TOP + 7 }}
      />
      <KeybindingDescription
        keybinding={config.keybindings.save}
        description='Save current timer state.'
        space={{ left: PADDING * 2, top: COMMANDS_TOP + 8 }}
      />
      <KeybindingDescription
        keybinding={config.keybindings.quit}
        description='Close program if in timer view, or goes back to timer view if in help view.'
        space={{ left: PADDING * 2, top: COMMANDS_TOP + 9 }}
      />
      <KeybindingDescription
        keybinding={config.keybindings.forceQuit}
        description='Close program (even if in help view).'
        space={{ left: PADDING * 2, top: COMMANDS_TOP + 10 }}
      />
      <KeybindingDescription
        keybinding={config.keybindings.help}
        description='Stop timer and open help view, or close help view if already open.'
        space={{ left: PADDING * 2, top: COMMANDS_TOP + 11 }}
      />
      <BlessedText
        content='MORE INFO:'
        left={PADDING}
        top={MORE_TOP}
        style={{
          bg: theme.app.colorBg,
          fg: theme.app.colorFg,
        }}
      />
      <BlessedText
        content='https://github.com/zuccha/snail-split'
        left={PADDING * 2}
        top={MORE_TOP + 2}
        style={{
          bg: theme.app.colorBg,
          fg: theme.app.colorFg,
        }}
      />
    </BlessedBox>
  )
}


export default ViewHelp
