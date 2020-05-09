import React from 'react'
import BlessedText from '../../components/BlessedText'
import makeSelectGameSegmentName from '../../store/game/selectors/makeSelectGameSegmentName'
import useSelector from '../../store/useSelector'
import theme from '../../theme'
import { isError, equalEitherErrorOr } from '../../types/either-error-or'
import ISpace from '../../types/space'


interface IGameSegmentNameProps {
  space?: ISpace
}


const makeGameSegmentName = (
  segmentIndex: number,
): React.FC<IGameSegmentNameProps> => {
  const selectGameSegmentName = makeSelectGameSegmentName(segmentIndex)

  const style = segmentIndex % 2 === 0
    ? {
      bg: theme.segments.itemEvenColorBg,
      fg: theme.segments.itemEvenColorFg,
    }
    : {
      bg: theme.segments.itemOddColorBg,
      fg: theme.segments.itemOddColorFg,
    }

  const GameSegmentName: React.FC<IGameSegmentNameProps> = ({
    space = {},
  }) => {
    const name = useSelector(selectGameSegmentName, equalEitherErrorOr)

    if (isError(name)) {
      return null
    }

    return <BlessedText content={name.data} {...space} style={style} />
  }

  return GameSegmentName
}


export default makeGameSegmentName
