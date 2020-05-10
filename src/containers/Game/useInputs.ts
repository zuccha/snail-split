import { useEffect } from 'react'
import fs from 'fs'
import screen from '../../screen'
import createActionGameReset from '../../store/game/actions/createActionGameReset'
import createActionGameSplit from '../../store/game/actions/createActionGameSplit'
import createActionGameToggle from '../../store/game/actions/createActionGameToggle'
import store from '../../store'
import useDispatch from '../../store/useDispatch'


const useInputs = (filename: string): void => {
  const dispatch = useDispatch()

  useEffect(() => {
    const exit = (): void => {
      process.exit(0)
    }

    const toggleGame = (): void => {
      dispatch(createActionGameToggle())
    }

    const resetGame = (): void => {
      dispatch(createActionGameReset())
    }

    const saveGame = (): void => {
      try {
        const game = store.getState().game
        const gameJson = JSON.stringify(game, null, 2)
        fs.writeFileSync(filename, gameJson)
        // TODO: Notify success.
      } catch (e) {
        // TODO: Notify failure.
      }
    }

    const splitGame = (): void => {
      dispatch(createActionGameSplit())
    }

    screen.key('escape', exit)
    screen.key('q', exit)
    screen.key('C-c', exit)
    screen.key('space', toggleGame)
    screen.key('r', resetGame)
    screen.key('s', saveGame)
    screen.key('return', splitGame)

    return () => {
      screen.unkey('escape', exit)
      screen.unkey('q', exit)
      screen.unkey('C-c', exit)
      screen.unkey('space', toggleGame)
      screen.unkey('s', saveGame)
      screen.unkey('r', resetGame)
      screen.unkey('return', splitGame)
    }
  }, [dispatch])
}


export default useInputs
