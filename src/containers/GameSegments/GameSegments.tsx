import React from 'react'
import BlessedBox from '../../components/BlessedBox'
import BlessedText from '../../components/BlessedText'
import Spacer, { SPACER_HEIGHT } from '../../components/Spacer'
import IColumnDefinition from '../../types/column-definition'
import ISpace from '../../types/space'
import range from '../../utils/range'
import makeGameSegmentDeltaTime from './makeGameSegmentDeltaTime'
import makeGameSegmentName from './makeGameSegmentName'
import makeGameSegmentTime from './makeGameSegmentTime'
import useWindowOffset from './useWindowOffset'


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

interface IGameSegmentsProps {
  space?: ISpace
}


const WINDOW_SIZE = 6

const ROW_HEADER_HEIGHT = 1
const ROW_ITEM_HEIGHT = 1
const WINDOW_HEIGHT = WINDOW_SIZE * ROW_ITEM_HEIGHT
const COLUMN_WIDTH = 14

const SPACER_0_TOP = 0
const ROW_HEADER_TOP = SPACER_0_TOP + SPACER_HEIGHT
const SPACER_1_TOP = ROW_HEADER_TOP + ROW_HEADER_HEIGHT
const WINDOW_TOP = SPACER_1_TOP + SPACER_HEIGHT
const SPACER_2_TOP = WINDOW_TOP + WINDOW_HEIGHT

const GAME_SEGMENTS_HEIGHT = SPACER_2_TOP + SPACER_HEIGHT

const GameSegments: React.FC<IGameSegmentsProps> = ({
  space = {},
}) => {
  const windowOffset = useWindowOffset(WINDOW_SIZE)

  const columnNameWidth = typeof space.width === 'number'
    ? space.width - columnDefinitions.length * COLUMN_WIDTH
    : 0

  return (
    <BlessedBox {...space}>
      {/* Header */}
      <Spacer space={{ width: space.width, top: SPACER_0_TOP }} />
      <BlessedBox top={ROW_HEADER_TOP}>
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
      </BlessedBox>
      <Spacer space={{ width: space.width, top: SPACER_1_TOP }} />
      {/* Content */}
      {range(WINDOW_SIZE).map(rowIndex => {
        const segmentIndex = rowIndex + windowOffset
        const rowSpace = {
          width: space.width,
          top: WINDOW_TOP + rowIndex * ROW_ITEM_HEIGHT,
        }
        const GameSegmentName = makeGameSegmentName(segmentIndex)
        return (
          <BlessedBox key={rowIndex} {...rowSpace}>
            <GameSegmentName />
            {columnDefinitions.map((columnDefinition, columnDefinitionIndex) => {
              const key = `${rowIndex}-${columnDefinitionIndex}`
              const segmentIndex = rowIndex + windowOffset
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
      {/* Footer */}
      <Spacer space={{ width: space.width, top: SPACER_2_TOP }} />
    </BlessedBox>
  )
}


export default GameSegments

export { GAME_SEGMENTS_HEIGHT }
