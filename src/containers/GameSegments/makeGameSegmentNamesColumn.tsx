import React from 'react'
import { BoxProps } from 'ink'
import { SegmentsColumnTexts } from '../../components/Segments'
import { isError, shallowEqualEitherErrorOrData } from '../../types/either-error-or'
import selectGameSegmentNames from '../../store/game/selectors/selectGameSegmentNames'
import { IColumnDefinitionText } from '../../types/column-definition'
import { useSelector } from 'react-redux'


interface IMakeGameSegmentNamesColumnOptions {
  containerProps?: BoxProps
}

interface IGameSegmentNamesColumnColumnProps {
  containerProps?: BoxProps
}


const makeGameSegmentNamesColumn = (
  columnDefinitionText: IColumnDefinitionText,
  options: IMakeGameSegmentNamesColumnOptions = {},
): React.FC<IGameSegmentNamesColumnColumnProps> => {
  const { title } = columnDefinitionText

  const GameSegmentNamesColumn: React.FC<IGameSegmentNamesColumnColumnProps> = ({
    containerProps = undefined,
  }) => {
    const names = useSelector(selectGameSegmentNames, shallowEqualEitherErrorOrData)
    if (isError(names)) {
      return null
    }

    return (
      <SegmentsColumnTexts
        title={title}
        texts={names.data}
        containerProps={{ ...options.containerProps, ...containerProps }}
      />
    )
  }

  return GameSegmentNamesColumn
}


export default makeGameSegmentNamesColumn
