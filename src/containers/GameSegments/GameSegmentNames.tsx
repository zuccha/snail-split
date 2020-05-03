import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { BoxProps } from 'ink'
import { SegmentsColumnString } from '../../components/Segments'
import selectGameSegmentNames from '../../store/game/selectors/selectGameSegmentNames'


interface IGameSegmentNamesProps {
  containerProps?: BoxProps
}


const GameSegmentNames: React.FC<IGameSegmentNamesProps> = ({
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


export default GameSegmentNames
