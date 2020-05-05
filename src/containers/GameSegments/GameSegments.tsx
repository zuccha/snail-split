import React, { useMemo } from 'react'
import { BoxProps } from 'ink'
import { SegmentsContainer } from '../../components/Segments'
import IColumnDefinition from '../../types/column-definition'
import when from '../../utils/when'
import makeGameSegmentDeltaTimesColumn from './makeGameSegmentDeltaTimesColumn'
import makeGameSegmentNamesColumn from './makeGameSegmentNamesColumn'
import makeGameSegmentTimesColumn from './makeGameSegmentTimesColumn'


const columnDefinitions: IColumnDefinition[] = [
  {
    type: 'text',
    title: 'Names',
  },
  {
    title: 'Delta (abs.)',
    type: 'delta',
    leftTimeCategory: 'current',
    rightTimeCategory: 'pb',
    timeFrame: 'absolute',
  },
  {
    title: 'PB (abs.)',
    type: 'time',
    timeCategory: 'pb',
    timeFrame: 'absolute',
  },
]


interface IGameSegmentsProps {
  containerProps?: BoxProps
}

const COLUMN_TIME_WIDTH = 12

const GameSegments: React.FC<IGameSegmentsProps> = ({
  containerProps = undefined,
}) => {
  const columns = useMemo(() => {
    return columnDefinitions.map(columnDefinition => {
      const namesOptions = { containerProps: { flexGrow: 1 } }
      const timesOptions = { containerProps: { width: COLUMN_TIME_WIDTH } }

      let Column: React.FC = () => null
      switch (columnDefinition.type) {
      case 'text':
        Column = makeGameSegmentNamesColumn(columnDefinition, namesOptions)
        break
      case 'time':
        Column = makeGameSegmentTimesColumn(columnDefinition, timesOptions)
        break
      case 'delta':
        Column = makeGameSegmentDeltaTimesColumn(columnDefinition, timesOptions)
        break
      }

      return <Column key={columnDefinition.title} />
    })
  }, [columnDefinitions])

  return (
    <SegmentsContainer containerProps={containerProps}>
      {columns}
    </SegmentsContainer>
  )
}


export default GameSegments
