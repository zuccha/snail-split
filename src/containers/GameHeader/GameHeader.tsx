import React from 'react'
import { useSelector } from 'react-redux'
import { BoxProps } from 'ink'
import Header from '../../components/Header'
import selectTitle from '../../store/game/selectors/selectGameTitle'
import { isError } from '../../types/either-error-or'


interface IGameHeaderProps {
  containerProps?: BoxProps
}


const GameHeader: React.FC<IGameHeaderProps> = ({
  containerProps = undefined,
}) => {
  const title = useSelector(selectTitle)
  if (isError(title)) {
    return null
  }

  return (
    <Header title={title.data} containerProps={containerProps} />
  )
}


export default GameHeader
