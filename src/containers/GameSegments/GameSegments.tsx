import React, { useMemo } from 'react'
import BlessedBox from '../../components/BlessedBox'
import BlessedText from '../../components/BlessedText'
import Spacer from '../../components/Spacer'
import IColumnDefinition from '../../types/column-definition'
import ISpace from '../../types/space'
import makeGameSegmentDeltaTime from './makeGameSegmentDeltaTime'
import makeGameSegmentName from './makeGameSegmentName'
import makeGameSegmentTime from './makeGameSegmentTime'


const columnDefinitions: IColumnDefinition[] = [
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

const segmentIndices = [0, 1, 2, 3, 4, 5]

interface IGameSegmentsProps {
  space?: ISpace
}

const COLUMN_WIDTH = 14

const GameSegments: React.FC<IGameSegmentsProps> = ({
  space = {},
}) => {
  const columnNameWidth = typeof space.width === 'number'
    ? space.width - columnDefinitions.length * COLUMN_WIDTH
    : 0
  return (
    <BlessedBox {...space}>
      {/* Header */}
      <BlessedText content='Names' />
      {columnDefinitions.map((columnDefinition, columnDefinitionIndex) => {
        const key = `${columnDefinitionIndex}`
        const title = columnDefinition.title
        const cellSpace = {
          width: COLUMN_WIDTH,
          left: columnNameWidth + COLUMN_WIDTH * columnDefinitionIndex,
        }
        return <BlessedText key={key} content={title} {...cellSpace} align='right' />
      })}
      {/* Content */}
      <Spacer space={{ width: space.width, top: 1 }} />
      {segmentIndices.map(segmentIndex => {
        const rowSpace = {
          width: space.width,
          top: 2 + segmentIndex,
        }
        const GameSegmentName = makeGameSegmentName(segmentIndex)
        return (
          <BlessedBox key={segmentIndex} {...rowSpace}>
            <GameSegmentName />
            {columnDefinitions.map((columnDefinition, columnDefinitionIndex) => {
              const key = `${segmentIndex}-${columnDefinitionIndex}`
              const cellSpace = {
                width: COLUMN_WIDTH,
                left: columnNameWidth + COLUMN_WIDTH * columnDefinitionIndex,
              }

              if (columnDefinition.type === 'time') {
                const GameSegmentTime = makeGameSegmentTime(segmentIndex, columnDefinition)
                return <GameSegmentTime key={key} space={cellSpace} />
              }

              if (columnDefinition.type === 'delta') {
                const GameSegmentDeltaTime = makeGameSegmentDeltaTime(segmentIndex, columnDefinition)
                return <GameSegmentDeltaTime key={key} space={cellSpace} />
              }

              return null
            })}
          </BlessedBox>
        )})
      }
      <Spacer space={{ width: space.width, top: segmentIndices.length + 2 }} />
    </BlessedBox>
  )
}


export default GameSegments
