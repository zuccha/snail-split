import React from 'react'
import BlessedText from '../../components/BlessedText'
import useSnackbar from '../../store/snackbar/hooks/useSnackbar'
import theme from '../../theme'
import when from '../../utils/when'
import ISpace from '../../types/space'


interface IStyle {
  bg?: string
  fg?: string
}

interface IGameSnackbarProps {
  space?: ISpace
}


const GAME_SNACKBAR_HEIGHT = 1


const GameSnackbar: React.FC<IGameSnackbarProps> = ({
  space = {},
}) => {
  const snackbar = useSnackbar()

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


export default GameSnackbar

export { GAME_SNACKBAR_HEIGHT }
