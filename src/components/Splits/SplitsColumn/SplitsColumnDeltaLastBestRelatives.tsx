import React from 'react'
import SplitsColumn from './SplitsColumn'
import { ISplit } from './types'


interface ISplitsColumnDeltaLastBestRelativesProps {
  splits: ISplit[]
}


const SplitsColumnDeltaLastBestRelatives: React.FC<ISplitsColumnDeltaLastBestRelativesProps> = ({
  splits,
}) => {
  const deltaLastBestRelatives = splits.map(split => (
    split.lastRelative - split.bestRelative
  ))

  return (
    <SplitsColumn
      title='Name'
      type='time'
      values={deltaLastBestRelatives}
      containerProps={{ width: 12 }}
    />
  )
}


export default SplitsColumnDeltaLastBestRelatives
