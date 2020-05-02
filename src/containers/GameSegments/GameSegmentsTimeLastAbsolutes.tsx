import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { BoxProps } from 'ink'
import { SegmentsColumnTime } from '../../components/Segments'
import selectGameSegmentTimeLastAbsolutes from '../../store/game/selectors/selectGameSegmentTimeLastAbsolutes'


interface IGameSegmentsTimeLastAbsolutesProps {
  containerProps?: BoxProps
}


const GameSegmentsTimeLastAbsolutes: React.FC<IGameSegmentsTimeLastAbsolutesProps> = ({
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


export default GameSegmentsTimeLastAbsolutes
