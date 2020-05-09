import React from 'react'
import BlessedText from '../../components/BlessedText'
import selectGameCurrentSegmentIndex from '../../store/game/selectors/selectGameCurrentSegmentIndex'
import makeSelectGameSegmentTime from '../../store/game/selectors/makeSelectGameSegmentTime'
import useSelector from '../../store/useSelector'
import theme from '../../theme'
import { IColumnDefinitionTime } from '../../types/column-definition'
import { isError, equalEitherErrorOr } from '../../types/either-error-or'
import ISpace from '../../types/space'
import { formatTime } from '../../types/time'


interface IGameSegmentTimeProps {
  space?: ISpace
}


const makeGameSegmentTime = (
  segmentIndex: number,
  columnDefinition: IColumnDefinitionTime,
): React.FC<IGameSegmentTimeProps> => {
  const selectGameSegmentTime = makeSelectGameSegmentTime(
    segmentIndex,
    columnDefinition.timeCategory,
    columnDefinition.timeFrame,
  )

  const colorBg = segmentIndex % 2 === 0
    ? theme.segments.itemEvenColorBg
    : theme.segments.itemOddColorBg

  const colorFg = segmentIndex % 2 === 0
    ? theme.segments.itemEvenColorFg
    : theme.segments.itemOddColorFg

  const GameSegmentTime: React.FC<IGameSegmentTimeProps> = ({
    space = {},
  }) => {
    const time = useSelector(selectGameSegmentTime, equalEitherErrorOr)
    const currentSegmentIndex = useSelector(selectGameCurrentSegmentIndex)

    if (isError(time)) {
      return null
    }

    const style = segmentIndex === currentSegmentIndex
      ? {
        bg: theme.segments.itemCurrentColorBg,
        fg: theme.segments.itemCurrentColorFg,
        bold: true,
      }
      : {
        bg: colorBg,
        fg: colorFg,
        bold: false,
      }

    return (
      <BlessedText
        content={formatTime(time.data)}
        align='right'
        {...space}
        style={style}
      />
    )
  }

  return GameSegmentTime
}


export default makeGameSegmentTime
