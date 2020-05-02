import React from 'react'
import SplitsColumn from './SplitsColumn'
import { ISplit } from './types'


interface ISplitsColumnGoldRelativesProps {
  splits: ISplit[]
}


const SplitsColumnGoldRelatives: React.FC<ISplitsColumnGoldRelativesProps> = ({
  splits,
}) => {
  const goldRelatives = splits.map(split => split.goldRelative)

  return (
    <SplitsColumn
      title='Gold (r)'
      type='time'
      values={goldRelatives}
      containerProps={{ width: 12 }}
    />
  )
}


export default SplitsColumnGoldRelatives
