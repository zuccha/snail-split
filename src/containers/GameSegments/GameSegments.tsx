import React from 'react'
import BlessedBox from '../../components/BlessedBox'
import BlessedText from '../../components/BlessedText'
import useConfig from '../../store/config/hooks/useConfig'
import useTheme from '../../store/theme/hooks/useTheme'
import * as Space from '../../types/space'
import range from '../../utils/range'
import makeGameSegmentDeltaTime from './makeGameSegmentDeltaTime'
import makeGameSegmentName from './makeGameSegmentName'
import makeGameSegmentTime from './makeGameSegmentTime'
import useWindowOffset from './useWindowOffset'


interface IGameSegmentsProps {
  space?: Space.Space
}


const WINDOW_SIZE = 10

const ROW_HEADER_HEIGHT = 3
const ROW_ITEM_HEIGHT = 1
const WINDOW_HEIGHT = WINDOW_SIZE * ROW_ITEM_HEIGHT + 2
const COLUMN_WIDTH = 14

const ROW_HEADER_TOP = 0
const WINDOW_TOP = ROW_HEADER_TOP + ROW_HEADER_HEIGHT - 1

const GAME_SEGMENTS_HEIGHT = WINDOW_TOP + WINDOW_HEIGHT

const GameSegments: React.FC<IGameSegmentsProps> = ({
  space = {},
}) => {
  const config = useConfig()
  const theme = useTheme()
  const windowOffset = useWindowOffset(WINDOW_SIZE)

  const columnDefinitions = config.segmentColumnDefinitions
  const columnNameWidth = typeof space.width === 'number'
    ? (space.width - 2) - columnDefinitions.length * COLUMN_WIDTH
    : 0

  return (
    <BlessedBox height={GAME_SEGMENTS_HEIGHT} {...space}>
      {/* Header */}
      <BlessedBox
        height={ROW_HEADER_HEIGHT}
        top={ROW_HEADER_TOP}
        border='line'
        style={{
          border: {
            bg: theme.segments.dividerColorBg,
            fg: theme.segments.dividerColorFg,
          },
        }}
      >
        <BlessedText
          content='Names'
          width={columnNameWidth}
          style={{
            bg: theme.segments.headerColorBg,
            fg: theme.segments.headerColorFg,
          }}
        />
        {columnDefinitions.map((columnDefinition, columnDefinitionIndex) => {
          const key = `${columnDefinitionIndex}`
          const title = columnDefinition.title
          const cellSpace = {
            width: COLUMN_WIDTH,
            left: columnNameWidth + COLUMN_WIDTH * columnDefinitionIndex,
          }
          return (
            <BlessedText
              key={key}
              content={title}
              {...cellSpace}
              align='right'
              style={{
                bg: theme.segments.headerColorBg,
                fg: theme.segments.headerColorFg,
              }}
            />
          )
        })}
      </BlessedBox>
      {/* Content */}
      <BlessedBox
        height={WINDOW_HEIGHT}
        top={WINDOW_TOP}
        border='line'
        style={{
          border: {
            bg: theme.segments.headerColorBg,
            fg: theme.segments.headerColorFg,
          },
        }}
      >
        {range(WINDOW_SIZE).map(rowIndex => {
          const segmentIndex = rowIndex + windowOffset
          const rowSpace = { top: rowIndex * ROW_ITEM_HEIGHT }
          const GameSegmentName = makeGameSegmentName(segmentIndex)
          return (
            <BlessedBox key={rowIndex} {...rowSpace}>
              <GameSegmentName space={{ width: columnNameWidth }} />
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
      </BlessedBox>
    </BlessedBox>
  )
}


export default GameSegments

export { GAME_SEGMENTS_HEIGHT }
