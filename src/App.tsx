import React, { useState, useEffect } from 'react'
import Viewer from './containers/Viewer'
import createActionConfigLoad from './store/config/actions/createActionConfigLoad'
import createActionGameLoad from './store/game/actions/createActionGameLoad'
import useDispatch from './store/useDispatch'
import * as EitherErrorOr from './types/either-error-or'
import * as Config from './types/config'
import * as Game from './types/game'


const configFilename = './examples/configs/base.json'
const gameFilenameInput = './examples/games/dark-souls.json'


const App: React.FC = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const eitherErrorOrConfig = Config.load(configFilename)
    if (EitherErrorOr.isError(eitherErrorOrConfig)) {
      console.error(`Failed to load config: ${eitherErrorOrConfig.error}.`)
      process.exit(1)
    }

    const eitherErrorOrGame = Game.load(gameFilenameInput)
    if (EitherErrorOr.isError(eitherErrorOrGame)) {
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

  return <Viewer />
}


export default App
