import React from 'react'
import SplitsColumn from './SplitsColumn'
import { ISplit } from './types'


interface ISplitsColumnLastAbsolutesProps {
  splits: ISplit[]
}


const SplitsColumnLastAbsolutes: React.FC<ISplitsColumnLastAbsolutesProps> = ({
  splits,
}) => {
  const lastAbsolutes = splits.reduce<number[]>((acc, split) => {
    return [...acc, split.lastRelative + (acc.length > 0 ? acc[0] : 0)]
  }, [])

  return (
    <SplitsColumn
      title='Last (a)'
      type='time'
      values={lastAbsolutes}
      containerProps={{ width: 12 }}
    />
  )
}


export default SplitsColumnLastAbsolutes
