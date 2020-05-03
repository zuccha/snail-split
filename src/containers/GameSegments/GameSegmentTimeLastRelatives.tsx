import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { BoxProps } from 'ink'
import { SegmentsColumnTime } from '../../components/Segments'
import selectGameSegmentTimeLastRelatives from '../../store/game/selectors/selectGameSegmentTimeLastRelatives'


interface IGameSegmentTimeLastRelativesProps {
  containerProps?: BoxProps
}


const GameSegmentTimeLastRelatives: React.FC<IGameSegmentTimeLastRelativesProps> = ({
  containerProps = undefined,
}) => {
  const lastRelatives = useSelector(selectGameSegmentTimeLastRelatives, shallowEqual)

  return (
    <SegmentsColumnTime
      title='Last (r)'
      values={lastRelatives}
      containerProps={containerProps}
    />
  )
}


export default GameSegmentTimeLastRelatives
