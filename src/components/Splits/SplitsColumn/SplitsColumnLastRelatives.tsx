import React from 'react'
import SplitsColumn from './SplitsColumn'
import { ISplit } from './types'


interface ISplitsColumnLastRelativesProps {
  splits: ISplit[]
}


const SplitsColumnLastRelatives: React.FC<ISplitsColumnLastRelativesProps> = ({
  splits,
}) => {
  const lastRelatives = splits.map(split => split.lastRelative)

  return (
    <SplitsColumn
      title='Last (r)'
      type='time'
      values={lastRelatives}
      containerProps={{ width: 12 }}
    />
  )
};


export default SplitsColumnLastRelatives
