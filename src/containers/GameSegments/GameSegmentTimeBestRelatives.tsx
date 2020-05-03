import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { BoxProps } from 'ink'
import { SegmentsColumnTime } from '../../components/Segments'
import selectGameSegmentTimeBestRelatives from '../../store/game/selectors/selectGameSegmentTimeBestRelatives'


interface IGameSegmentTimeBestRelativesProps {
  containerProps?: BoxProps
}


const GameSegmentTimeBestRelatives: React.FC<IGameSegmentTimeBestRelativesProps> = ({
  containerProps = undefined,
}) => {
  const bestRelatives = useSelector(selectGameSegmentTimeBestRelatives, shallowEqual)

  return (
    <SegmentsColumnTime
      title='Best (r)'
      values={bestRelatives}
      containerProps={containerProps}
    />
  )
}


export default GameSegmentTimeBestRelatives
