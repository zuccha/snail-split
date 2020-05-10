import React, { useState, useEffect } from 'react'
import Game from './containers/Game'
import createActionConfigLoad from './store/config/actions/createActionConfigLoad'
import createActionGameLoad from './store/game/actions/createActionGameLoad'
import useDispatch from './store/useDispatch'


const configFilename = './examples/configs/base.json'
const gameFilenameInput = './examples/games/dark-souls.json'
const gameFilenameOutput = './examples/games/dark-souls-save.json'


const App: React.FC = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    dispatch(createActionConfigLoad(configFilename))
    dispatch(createActionGameLoad(gameFilenameInput))
    setLoading(false)
  }, [])

  if (loading) {
    return null
  }

  return <Game filename={gameFilenameOutput} />
}


export default App
