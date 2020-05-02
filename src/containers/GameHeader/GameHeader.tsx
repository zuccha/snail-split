import React from 'react'
import { useSelector } from 'react-redux'
import { BoxProps } from 'ink'
import Header from '../../components/Header'
import selectTitle from '../../store/game/selectors/selectGameTitle'


interface IGameHeaderProps {
  containerProps?: BoxProps
}


const GameHeader: React.FC<IGameHeaderProps> = ({
  containerProps = undefined,
}) => {
  const title = useSelector(selectTitle)

  return (
    <Header title={title} containerProps={containerProps} />
  )
}


export default GameHeader
