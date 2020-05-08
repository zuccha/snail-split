import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../../components/Header'
import selectTitle from '../../store/game/selectors/selectGameTitle'
import { isError } from '../../types/either-error-or'
import ISpace from '../../types/space'


interface IGameHeaderProps {
  space?: ISpace
}


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
