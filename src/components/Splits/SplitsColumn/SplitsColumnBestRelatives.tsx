import React from 'react'
import SplitsColumn from './SplitsColumn'
import { ISplit } from './types'


interface ISplitsColumnBestRelativesProps {
  splits: ISplit[]
}


const SplitsColumnBestRelatives: React.FC<ISplitsColumnBestRelativesProps> = ({
  splits,
}) => {
  const bestRelatives = splits.map(split => split.bestRelative)

  return (
    <SplitsColumn
      title='Best (r)'
      type='time'
      values={bestRelatives}
      containerProps={{ width: 12 }}
    />
  )
}


export default SplitsColumnBestRelatives
