import React from 'react'
import BlessedText from '../../components/BlessedText'
import makeSelectGameSegmentDeltaTime from '../../store/game/selectors/makeSelectGameSegmentDeltaTime'
import useSelector from '../../store/useSelector'
import theme from '../../theme'
import { IColumnDefinitionDelta } from '../../types/column-definition'
import { isError, equalEitherErrorOr } from '../../types/either-error-or'
import ISpace from '../../types/space'
import { formatTime } from '../../types/time'
import when from '../../utils/when'


interface IGameSegmentDeltaTimeProps {
  space?: ISpace
}


const makeGameSegmentDeltaTime = (
  segmentIndex: number,
  columnDefinition: IColumnDefinitionDelta,
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
    const time = useSelector(selectGameSegmentDeltaTime, equalEitherErrorOr)

    if (isError(time)) {
      return null
    }

    const colorFg = when([
      [time.data === undefined, () => theme.segments.deltaTimeColorFgNeutral],
      [time.data! < 0, () => theme.segments.deltaTimeColorFgNegative],
      [time.data! > 0, () => theme.segments.deltaTimeColorFgPositive],
    ], theme.segments.deltaTimeColorFgNeutral)

    return (
      <BlessedText
        content={formatTime(time.data, { showPlus: true })}
        align='right'
        style={{
          bg: colorBg,
          fg: colorFg,
        }}
        {...space}
      />
    )
  }

  return GameSegmentDeltaTime
}


export default makeGameSegmentDeltaTime
