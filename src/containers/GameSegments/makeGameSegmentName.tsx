import React from 'react'
import { useSelector } from 'react-redux'
import BlessedText from '../../components/BlessedText'
import makeSelectGameSegmentName from '../../store/game/selectors/makeSelectGameSegmentName'
import { isError, shallowEqualEitherErrorOrData } from '../../types/either-error-or'
import ISpace from '../../types/space'


interface IGameSegmentNameProps {
  space?: ISpace
}


const makeGameSegmentName = (
  segmentIndex: number,
): React.FC<IGameSegmentNameProps> => {
  const selectGameSegmentName = makeSelectGameSegmentName(segmentIndex)

  const GameSegmentName: React.FC<IGameSegmentNameProps> = ({
    space = {},
  }) => {
    const name = useSelector(selectGameSegmentName, shallowEqualEitherErrorOrData)

    if (isError(name)) {
      return null
    }

    return <BlessedText content={name.data} {...space} />
  }

  return GameSegmentName
}


export default makeGameSegmentName
