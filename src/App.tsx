import React, { useState, useEffect } from 'react'
import Game from './containers/Game'
import createActionConfigLoad from './store/config/actions/createActionConfigLoad'
import createActionGameLoad from './store/game/actions/createActionGameLoad'
import useDispatch from './store/useDispatch'
import readJson from './utils/readJson'


const configFilename = './examples/configs/base.json'
const gameFilenameInput = './examples/games/dark-souls.json'
const gameFilenameOutput = './examples/games/dark-souls-save.json'


const App: React.FC = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const configJson = readJson(configFilename)
    if (configJson.errorMessage !== undefined) {
      console.error(`Failed to load config: ${configJson.errorMessage}.`)
      process.exit(1)
    }

    const gameJson = readJson(gameFilenameInput)
    if (configJson.errorMessage !== undefined) {
      console.error(`Failed to game config: ${gameJson.errorMessage}.`)
      process.exit(1)
    }

    dispatch(createActionConfigLoad(configJson.data))
    dispatch(createActionGameLoad(gameJson.data))

    setLoading(false)
  }, [])

  if (loading) {
    return null
  }

  return <Game filename={gameFilenameOutput} />
}


export default App
