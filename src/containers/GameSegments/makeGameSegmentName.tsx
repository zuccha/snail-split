import React from 'react'
import BlessedText from '../../components/BlessedText'
import selectGameCurrentSegmentIndex from '../../store/game/selectors/selectGameCurrentSegmentIndex'
import makeSelectGameSegmentName from '../../store/game/selectors/makeSelectGameSegmentName'
import useSelector from '../../store/useSelector'
import theme from '../../theme'
import ISpace from '../../types/space'


interface IGameSegmentNameProps {
  space?: ISpace
}


const makeGameSegmentName = (
  segmentIndex: number,
): React.FC<IGameSegmentNameProps> => {
  const selectGameSegmentName = makeSelectGameSegmentName(segmentIndex)

  const colorBg = segmentIndex % 2 === 0
    ? theme.segments.itemEvenColorBg
    : theme.segments.itemOddColorBg

  const colorFg = segmentIndex % 2 === 0
    ? theme.segments.itemEvenColorFg
    : theme.segments.itemOddColorFg

  const GameSegmentName: React.FC<IGameSegmentNameProps> = ({
    space = {},
  }) => {
    const name = useSelector(selectGameSegmentName)
    const currentSegmentIndex = useSelector(selectGameCurrentSegmentIndex)

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
        content={name}
        {...space}
        style={style}
      />
    )
  }

  return GameSegmentName
}


export default makeGameSegmentName
