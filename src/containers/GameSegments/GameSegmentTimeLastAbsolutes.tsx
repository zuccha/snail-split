import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { BoxProps } from 'ink'
import { SegmentsColumnTime } from '../../components/Segments'
import selectGameSegmentTimeLastAbsolutes from '../../store/game/selectors/selectGameSegmentTimeLastAbsolutes'


interface IGameSegmentTimeLastAbsolutesProps {
  containerProps?: BoxProps
}


const GameSegmentTimeLastAbsolutes: React.FC<IGameSegmentTimeLastAbsolutesProps> = ({
  containerProps = undefined,
}) => {
  const lastAbsolutes = useSelector(selectGameSegmentTimeLastAbsolutes, shallowEqual)

  return (
    <SegmentsColumnTime
      title='Last (a)'
      values={lastAbsolutes}
      containerProps={containerProps}
    />
  )
}


export default GameSegmentTimeLastAbsolutes
