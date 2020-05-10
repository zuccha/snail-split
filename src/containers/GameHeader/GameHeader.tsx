import React from 'react'
import Header, { HEADER_HEIGHT } from '../../components/Header'
import selectGameCategory from '../../store/game/selectors/selectGameCategory'
import selectGameTitle from '../../store/game/selectors/selectGameTitle'
import useSelector from '../../store/useSelector'
import theme from '../../theme'
import ISpace from '../../types/space'


interface IGameHeaderProps {
  space?: ISpace
}


const GAME_HEADER_HEIGHT = HEADER_HEIGHT

const GameHeader: React.FC<IGameHeaderProps> = ({
  space = {},
}) => {
  const title = useSelector(selectGameTitle)
  const category = useSelector(selectGameCategory)

  const formattedTitle = category === ''
    ? title
    : `${title} (${category})`

  return (
    <Header
      title={formattedTitle}
      space={space}
      titleColorBg={theme.header.titleColorBg}
      titleColorFg={theme.header.titleColorFg}
      borderColorBg={theme.header.borderColorBg}
      borderColorFg={theme.header.borderColorFg}
    />
  )
}


export default GameHeader

export { GAME_HEADER_HEIGHT }
