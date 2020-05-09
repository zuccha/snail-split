import React from 'react'
import Header, { HEADER_HEIGHT } from '../../components/Header'
import selectTitle from '../../store/game/selectors/selectGameTitle'
import useSelector from '../../store/useSelector'
import { isError } from '../../types/either-error-or'
import ISpace from '../../types/space'


interface IGameHeaderProps {
  space?: ISpace
}


const GAME_HEADER_HEIGHT = HEADER_HEIGHT

const GameHeader: React.FC<IGameHeaderProps> = ({
  space = {},
}) => {
  const title = useSelector(selectTitle)

  if (isError(title)) {
    return null
  }

  return (
    <Header title={title.data} space={space} />
  )
}


export default GameHeader

export { GAME_HEADER_HEIGHT }
