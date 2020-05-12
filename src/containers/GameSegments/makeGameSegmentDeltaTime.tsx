import React from 'react'
import BlessedText from '../../components/BlessedText'
import useConfig from '../../store/config/hooks/useConfig'
import makeSelectGameSegmentDeltaTime from '../../store/game/selectors/makeSelectGameSegmentDeltaTime'
import selectGameCurrentSegmentIndex from '../../store/game/selectors/selectGameCurrentSegmentIndex'
import useSelector from '../../store/useSelector'
import theme from '../../theme'
import * as ColumnDefinition from '../../types/column-definition'
import * as Space from '../../types/space'
import * as Time from '../../types/time'
import when from '../../utils/when'


interface IGameSegmentDeltaTimeProps {
  space?: Space.Space
}


const makeGameSegmentDeltaTime = (
  segmentIndex: number,
  columnDefinition: ColumnDefinition.ColumnDefinitionDelta,
): React.FC<IGameSegmentDeltaTimeProps> => {
  const selectGameSegmentDeltaTime = makeSelectGameSegmentDeltaTime(
    segmentIndex,
    columnDefinition.leftTimeCategory,
    columnDefinition.rightTimeCategory,
    columnDefinition.timeFrame,
  )

  const colorBg = segmentIndex % 2 === 0
    ? theme.segments.itemEvenColorBg
    : theme.segments.itemOddColorBg

  const GameSegmentDeltaTime: React.FC<IGameSegmentDeltaTimeProps> = ({
    space = {},
  }) => {
    const config = useConfig()
    const time = useSelector(selectGameSegmentDeltaTime)
    const currentSegmentIndex = useSelector(selectGameCurrentSegmentIndex)

    const colorFg = when([
      [time === undefined, () => theme.segments.deltaTimeColorFgNeutral],
      [time! < 0, () => theme.segments.deltaTimeColorFgNegative],
      [time! > 0, () => theme.segments.deltaTimeColorFgPositive],
    ], theme.segments.deltaTimeColorFgNeutral)

    const formattedTime = segmentIndex <= currentSegmentIndex
      ? Time.format(time, {
        formatDefault: config.segmentDeltaFormatDefault,
        formatBelowHour: config.segmentDeltaFormatBelowHour,
        formatBelowMinute: config.segmentDeltaFormatBelowMinute,
        formatBelowSecond: config.segmentDeltaFormatBelowSecond,
        formatZero: config.segmentDeltaFormatZero,
        formatEmpty: config.segmentDeltaFormatEmpty,
        showPlus: true,
      })
      : ''

    const style = segmentIndex === currentSegmentIndex
      ? {
        bg: theme.segments.itemCurrentColorBg,
        fg: colorFg,
        bold: true,
      }
      : {
        bg: colorBg,
        fg: colorFg,
        bold: false,
      }

    return (
      <BlessedText
        content={formattedTime}
        align='right'
        style={style}
        {...space}
      />
    )
  }

  return GameSegmentDeltaTime
}


export default makeGameSegmentDeltaTime
