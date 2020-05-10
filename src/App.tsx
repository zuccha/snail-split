import React, { useState, useEffect } from 'react'
import Game from './containers/Game'
import createActionConfigLoad from './store/config/actions/createActionConfigLoad'
import createActionGameLoad from './store/game/actions/createActionGameLoad'
import useDispatch from './store/useDispatch'


const App: React.FC = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    dispatch(createActionConfigLoad('./examples/configs/base.json'))
    dispatch(createActionGameLoad('./examples/games/dark-souls.json'))
    setLoading(false)
  }, [])

  if (loading) {
    return null
  }

  return <Game />
}


export default App
