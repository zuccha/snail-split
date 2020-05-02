import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { BoxProps } from 'ink'
import { SegmentsColumnTime } from '../../components/Segments'
import selectGameSegmentTimeBestAbsolutes from '../../store/game/selectors/selectGameSegmentTimeBestAbsolutes'


interface IGameSegmentsTimeBestAbsolutesProps {
  containerProps?: BoxProps
}


const GameSegmentsTimeBestAbsolutes: React.FC<IGameSegmentsTimeBestAbsolutesProps> = ({
  containerProps = undefined,
}) => {
  const bestAbsolutes = useSelector(selectGameSegmentTimeBestAbsolutes, shallowEqual)

  return (
    <SegmentsColumnTime
      title='Best (a)'
      values={bestAbsolutes}
      containerProps={containerProps}
    />
  )
}


export default GameSegmentsTimeBestAbsolutes
