import React from 'react'
import { Box, useStdout } from 'ink'
import GameHeader from '../GameHeader'
import GameSegments from '../GameSegments'
import GameTime from '../GameTime'


interface IGameProps {

}


const Game: React.FC<IGameProps> = ({

}) => {
  const { stdout } = useStdout()

  return (
    <Box
      height={stdout.rows}
      width={stdout.columns}
      flexDirection='column'
    >
      <GameHeader
        containerProps={{ flexGrow: 1 }}
      />
      <GameSegments />
      <GameTime
        containerProps={{
          flexGrow: 1,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}
      />
    </Box>
  )
}


export default Game
