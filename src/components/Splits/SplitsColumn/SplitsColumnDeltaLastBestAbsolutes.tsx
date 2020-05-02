import React from 'react'
import SplitsColumn from './SplitsColumn'
import { ISplit } from './types'


interface ISplitsColumnDeltaLastBestAbsolutesProps {
  splits: ISplit[]
}


const SplitsColumnDeltaLastBestAbsolutes: React.FC<ISplitsColumnDeltaLastBestAbsolutesProps> = ({
  splits,
}) => {
  const deltaLastBestAbsolutes = splits
    .map(split => split.lastRelative - split.bestRelative)
    .reduce<number[]>((acc, deltaLastBestRelative) => {
      return [...acc, deltaLastBestRelative + (acc.length > 0 ? acc[0] : 0)]
    }, [])

  return (
    <SplitsColumn
      title='Delta (a)'
      type='time'
      values={deltaLastBestAbsolutes}
      containerProps={{ width: 12 }}
    />
  )
}


export default SplitsColumnDeltaLastBestAbsolutes
