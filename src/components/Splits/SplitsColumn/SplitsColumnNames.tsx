import React from 'react'
import SplitsColumn from './SplitsColumn'
import { ISplit } from './types'


interface ISplitsColumnNamesProps {
  splits: ISplit[]
}


const SplitsColumnNames: React.FC<ISplitsColumnNamesProps> = ({
  splits,
}) => {
  const names = splits.map(split => split.name)

  return (
    <SplitsColumn
      title='Name'
      type='string'
      values={names}
      containerProps={{ flexGrow: 1 }}
    />
  )
}


export default SplitsColumnNames
