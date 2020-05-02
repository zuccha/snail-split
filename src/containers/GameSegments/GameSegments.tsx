import React from 'react'
import { BoxProps } from 'ink'
import { SegmentsContainer } from '../../components/Segments'
import GameSegmentsNames from './GameSegmentsNames'
import GameSegmentsDeltaLastBestAbsolutes from './GameSegmentsDeltaLastBestAbsolutes'
import GameSegmentsDeltaLastBestRelatives from './GameSegmentsDeltaLastBestRelatives'
import GameSegmentsTimeBestAbsolutes from './GameSegmentsTimeBestAbsolutes'
import GameSegmentsTimeBestRelatives from './GameSegmentsTimeBestRelatives'
import GameSegmentsTimeGoldRelatives from './GameSegmentsTimeGoldRelatives'
import GameSegmentsTimeLastAbsolutes from './GameSegmentsTimeLastAbsolutes'
import GameSegmentsTimeLastRelatives from './GameSegmentsTimeLastRelatives'


interface IGameSegmentsProps {
  containerProps?: BoxProps
}


const COLUMN_TIME_WIDTH = 12

const GameSegments: React.FC<IGameSegmentsProps> = ({
  containerProps = undefined,
}) => {
  return (
    <SegmentsContainer containerProps={containerProps}>
      <GameSegmentsNames containerProps={{ flexGrow: 1 }} />

      <GameSegmentsTimeLastAbsolutes containerProps={{ width: COLUMN_TIME_WIDTH }} />
      <GameSegmentsDeltaLastBestAbsolutes containerProps={{ width: COLUMN_TIME_WIDTH }} />
      <GameSegmentsTimeBestAbsolutes containerProps={{ width: COLUMN_TIME_WIDTH }} />

      <GameSegmentsTimeLastRelatives containerProps={{ width: COLUMN_TIME_WIDTH }} />
      <GameSegmentsDeltaLastBestRelatives containerProps={{ width: COLUMN_TIME_WIDTH }} />
      <GameSegmentsTimeBestRelatives containerProps={{ width: COLUMN_TIME_WIDTH }} />

      <GameSegmentsTimeGoldRelatives containerProps={{ width: COLUMN_TIME_WIDTH }} />
    </SegmentsContainer>
  )
}


export default GameSegments
