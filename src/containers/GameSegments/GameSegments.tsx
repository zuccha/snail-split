import React, { useMemo } from 'react'
import { BoxProps } from 'ink'
import { SegmentsContainer } from '../../components/Segments'
import GameSegmentNames from './GameSegmentNames'
import GameSegmentDeltaLastBestAbsolutes from './GameSegmentDeltaLastBestAbsolutes'
import GameSegmentDeltaLastBestRelatives from './GameSegmentDeltaLastBestRelatives'
import GameSegmentTimeBestAbsolutes from './GameSegmentTimeBestAbsolutes'
import GameSegmentTimeBestRelatives from './GameSegmentTimeBestRelatives'
import GameSegmentTimeGoldRelatives from './GameSegmentTimeGoldRelatives'
import GameSegmentTimeLastAbsolutes from './GameSegmentTimeLastAbsolutes'
import GameSegmentTimeLastRelatives from './GameSegmentTimeLastRelatives'


type IColumnId =
  'names'
  | 'deltaLastBestAbsolutes'
  | 'deltaLastBestRelatives'
  | 'timeBestAbsolutes'
  | 'timeBestRelatives'
  | 'timeGoldRelatives'
  | 'timeLastAbsolutes'
  | 'timeLastRelatives'

interface IGetColumnComponent {
  columnTimeWidth: number
}

interface IGameSegmentsProps {
  containerProps?: BoxProps
}


const getColumnComponent = (columnId: IColumnId, { columnTimeWidth }: IGetColumnComponent): React.FC => {
  /* eslint-disable react/display-name */
  switch (columnId) {
  case 'names':
    return () => <GameSegmentNames containerProps={{ flexGrow: 1 }} />
  case 'deltaLastBestAbsolutes':
    return () => <GameSegmentDeltaLastBestAbsolutes containerProps={{ width: columnTimeWidth }}/>
  case 'deltaLastBestRelatives':
    return () => <GameSegmentDeltaLastBestRelatives containerProps={{ width: columnTimeWidth }}/>
  case 'timeBestAbsolutes':
    return () => <GameSegmentTimeBestAbsolutes containerProps={{ width: columnTimeWidth }}/>
  case 'timeBestRelatives':
    return () => <GameSegmentTimeBestRelatives containerProps={{ width: columnTimeWidth }}/>
  case 'timeGoldRelatives':
    return () => <GameSegmentTimeGoldRelatives containerProps={{ width: columnTimeWidth }}/>
  case 'timeLastAbsolutes':
    return () => <GameSegmentTimeLastAbsolutes containerProps={{ width: columnTimeWidth }}/>
  case 'timeLastRelatives':
    return () => <GameSegmentTimeLastRelatives containerProps={{ width: columnTimeWidth }}/>
  default:
    return () => null
  }
  /* eslint-enable react/display-name */
}

const COLUMN_TIME_WIDTH = 12

const columnIds: IColumnId[] = [
  'names',
  'deltaLastBestAbsolutes',
  'deltaLastBestRelatives',
  'timeBestAbsolutes',
  'timeBestRelatives',
  'timeGoldRelatives',
  'timeLastAbsolutes',
  'timeLastRelatives',
]

const GameSegments: React.FC<IGameSegmentsProps> = ({
  containerProps = undefined,
}) => {
  const columns = useMemo(() => {
    return columnIds.map(columnId => {
      const ColumnComponent = getColumnComponent(columnId, {
        columnTimeWidth: COLUMN_TIME_WIDTH,
      })
      return <ColumnComponent key={columnId} />
    })
  }, [columnIds])

  return (
    <SegmentsContainer containerProps={containerProps}>
      {columns}
    </SegmentsContainer>
  )
}


export default GameSegments
