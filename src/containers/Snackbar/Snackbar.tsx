import React from 'react'
import BlessedText from '../../components/BlessedText'
import useSnackbar from '../../store/snackbar/hooks/useSnackbar'
import useTheme from '../../store/theme/hooks/useTheme'
import when from '../../utils/when'
import * as Space from '../../types/space'


interface IStyle {
  bg?: string
  fg?: string
}

interface ISnackbarProps {
  space?: Space.Space
}


const SNACKBAR_HEIGHT = 1


const Snackbar: React.FC<ISnackbarProps> = ({
  space = {},
}) => {
  const snackbar = useSnackbar()
  const theme = useTheme()

  const style = when<IStyle>([
    [snackbar.variant === 'neutral', () => ({
      bg: theme.snackbar.neutralColorBg,
      fg: theme.snackbar.neutralColorFg,
    })],
    [snackbar.variant === 'success', () => ({
      bg: theme.snackbar.successColorBg,
      fg: theme.snackbar.successColorFg,
    })],
    [snackbar.variant === 'failure', () => ({
      bg: theme.snackbar.failureColorBg,
      fg: theme.snackbar.failureColorFg,
    })],
    [snackbar.variant === 'warning', () => ({
      bg: theme.snackbar.warningColorBg,
      fg: theme.snackbar.warningColorFg,
    })],
  ], {})

  return (
    <BlessedText
      content={snackbar.message}
      style={style}
      {...space}
    />
  )
}


export default Snackbar

export { SNACKBAR_HEIGHT }
