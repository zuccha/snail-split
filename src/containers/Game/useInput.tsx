import screen from '../../screen'
import createActionGameReset from '../../store/game/actions/createActionGameReset'
import createActionGameSplit from '../../store/game/actions/createActionGameSplit'
import createActionGameToggle from '../../store/game/actions/createActionGameToggle'
import useDispatch from '../../store/useDispatch'


const useInput = (): void => {
  const dispatch = useDispatch()

  screen.key(['escape', 'q', 'C-c'], () => {
    return process.exit(0)
  })

  screen.key(['r'], () => {
    return dispatch(createActionGameReset())
  })

  screen.key(['space'], () => {
    return dispatch(createActionGameToggle())
  })

  screen.key(['return'], () => {
    return dispatch(createActionGameSplit())
  })
}


export default useInput
