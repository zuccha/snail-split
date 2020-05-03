import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { BoxProps } from 'ink'
import { SegmentsColumnTime } from '../../components/Segments'
import selectGameSegmentDeltaLastBestAbsolutes from '../../store/game/selectors/selectGameSegmentDeltaLastBestAbsolutes'


interface IGameSegmentDeltaLastBestAbsolutesProps {
  containerProps?: BoxProps
}


const GameSegmentDeltaLastBestAbsolutes: React.FC<IGameSegmentDeltaLastBestAbsolutesProps> = ({
  containerProps = undefined,
}) => {
  const deltaLastBestAbsolutes = useSelector(selectGameSegmentDeltaLastBestAbsolutes, shallowEqual)

  return (
    <SegmentsColumnTime
      title='Delta (a)'
      values={deltaLastBestAbsolutes}
      containerProps={containerProps}
    />
  )
}


export default GameSegmentDeltaLastBestAbsolutes
