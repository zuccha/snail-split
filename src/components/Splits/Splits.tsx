import React from 'react'
import { Box, BoxProps, Color, Text } from 'ink'
import { ISplit } from './SplitsColumn/types'
import SplitsColumnNames from './SplitsColumn/SplitsColumnNames'
import SplitsColumnBestRelatives from './SplitsColumn/SplitsColumnBestRelatives'
import SplitsColumnBestAbsolutes from './SplitsColumn/SplitsColumnBestAbsolutes'
import SplitsColumnLastRelatives from './SplitsColumn/SplitsColumnLastRelatives'
import SplitsColumnLastAbsolutes from './SplitsColumn/SplitsColumnLastAbsolutes'
import SplitsColumnGoldRelatives from './SplitsColumn/SplitsColumnGoldRelatives'
import SplitsColumnDeltaLastBestRelatives from './SplitsColumn/SplitsColumnDeltaLastBestRelatives'
import SplitsColumnDeltaLastBestAbsolutes from './SplitsColumn/SplitsColumnDeltaLastBestAbsolutes'


interface ISplitsProps {
  splits: ISplit[]
  showHeader?: boolean
  showNames?: boolean
  showBestRelatives?: boolean
  showBestAbsolutes?: boolean
  showLastRelatives?: boolean
  showLastAbsolutes?: boolean
  showGoldRelatives?: boolean
  showDeltaLastBestRelatives?: boolean
  showDeltaLastBestAbsolutes?: boolean
  containerProps?: BoxProps
}


const Splits: React.FC<ISplitsProps> = ({
  splits,
  showHeader = false,
  showNames = false,
  showBestRelatives = false,
  showBestAbsolutes = false,
  showLastRelatives = false,
  showLastAbsolutes = false,
  showGoldRelatives = false,
  showDeltaLastBestRelatives = false,
  showDeltaLastBestAbsolutes = false,
  containerProps = undefined,
}) => {
  return (
    <Box {...containerProps}>
      {showNames && <SplitsColumnNames splits={splits} />}
      {showBestRelatives && <SplitsColumnBestRelatives splits={splits} />}
      {showBestAbsolutes && <SplitsColumnBestAbsolutes splits={splits} />}
      {showLastRelatives && <SplitsColumnLastRelatives splits={splits} />}
      {showLastAbsolutes && <SplitsColumnLastAbsolutes splits={splits} />}
      {showGoldRelatives && <SplitsColumnGoldRelatives splits={splits} />}
      {showDeltaLastBestRelatives && <SplitsColumnDeltaLastBestRelatives splits={splits} />}
      {showDeltaLastBestAbsolutes && <SplitsColumnDeltaLastBestAbsolutes splits={splits} />}
    </Box>
  )
}


export default Splits
