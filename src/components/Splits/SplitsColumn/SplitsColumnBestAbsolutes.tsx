import React from 'react'
import SplitsColumn from './SplitsColumn'
import { ISplit } from './types'


interface ISplitsColumnBestAbsolutesProps {
  splits: ISplit[]
}


const SplitsColumnBestAbsolutes: React.FC<ISplitsColumnBestAbsolutesProps> = ({
  splits,
}) => {
  const bestAbsolutes = splits.reduce<number[]>((acc, split) => {
    return [...acc, split.bestRelative + (acc.length > 0 ? acc[0] : 0)]
  }, [])

  return (
    <SplitsColumn
      title='Best (a)'
      type='time'
      values={bestAbsolutes}
      containerProps={{ width: 12 }}
    />
  )
}


export default SplitsColumnBestAbsolutes
