import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { BoxProps } from 'ink'
import { SegmentsColumnString } from '../../components/Segments'
import selectGameSegmentNames from '../../store/game/selectors/selectGameSegmentNames'


interface IGameSegmentsNamesProps {
  containerProps?: BoxProps
}


const GameSegmentsNames: React.FC<IGameSegmentsNamesProps> = ({
  containerProps = undefined,
}) => {
  const names = useSelector(selectGameSegmentNames, shallowEqual)

  return (
    <SegmentsColumnString
      title='Name'
      values={names}
      containerProps={containerProps}
    />
  )
}


export default GameSegmentsNames
