import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { BoxProps } from 'ink'
import { SegmentsColumnTime } from '../../components/Segments'
import selectGameSegmentDeltaLastBestRelatives from '../../store/game/selectors/selectGameSegmentDeltaLastBestRelatives'


interface IGameSegmentDeltaLastBestRelativesProps {
  containerProps?: BoxProps
}


const GameSegmentDeltaLastBestRelatives: React.FC<IGameSegmentDeltaLastBestRelativesProps> = ({
  containerProps = undefined,
}) => {
  const deltaLastBestRelatives = useSelector(selectGameSegmentDeltaLastBestRelatives, shallowEqual)

  return (
    <SegmentsColumnTime
      title='Delta (r)'
      values={deltaLastBestRelatives}
      containerProps={containerProps}
    />
  )
}


export default GameSegmentDeltaLastBestRelatives
