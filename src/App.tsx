import React, { useState, useEffect } from 'react'
import GameComponent from './containers/Game'
import createActionConfigLoad from './store/config/actions/createActionConfigLoad'
import createActionGameLoad from './store/game/actions/createActionGameLoad'
import useDispatch from './store/useDispatch'
import { isError } from './types/either-error-or'
import { loadConfig } from './types/config'
import * as Game from './types/game'


const configFilename = './examples/configs/base.json'
const gameFilenameInput = './examples/games/dark-souls.json'
const gameFilenameOutput = './examples/games/dark-souls-save.json'


const App: React.FC = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const eitherErrorOrConfig = loadConfig(configFilename)
    if (isError(eitherErrorOrConfig)) {
      console.error(`Failed to load config: ${eitherErrorOrConfig.error}.`)
      process.exit(1)
    }

    const eitherErrorOrGame = Game.load(gameFilenameInput)
    if (isError(eitherErrorOrGame)) {
      console.error(`Failed to load game: ${eitherErrorOrGame.error}.`)
      process.exit(1)
    }

    dispatch(createActionConfigLoad(eitherErrorOrConfig.data))
    dispatch(createActionGameLoad(eitherErrorOrGame.data))

    setLoading(false)
  }, [])

  if (loading) {
    return null
  }

  return <GameComponent filename={gameFilenameOutput} />
}


export default App
