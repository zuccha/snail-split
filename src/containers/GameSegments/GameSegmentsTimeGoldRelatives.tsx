import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { BoxProps } from 'ink'
import { SegmentsColumnTime } from '../../components/Segments'
import selectGameSegmentTimeGoldRelatives from '../../store/game/selectors/selectGameSegmentTimeGoldRelatives'


interface IGameSegmentsTimeGoldRelativesProps {
  containerProps?: BoxProps
}


const GameSegmentsTimeGoldRelatives: React.FC<IGameSegmentsTimeGoldRelativesProps> = ({
  containerProps = undefined,
}) => {
  const goldRelatives = useSelector(selectGameSegmentTimeGoldRelatives, shallowEqual)

  return (
    <SegmentsColumnTime
      title='Gold (r)'
      values={goldRelatives}
      containerProps={containerProps}
    />
  )
}


export default GameSegmentsTimeGoldRelatives
