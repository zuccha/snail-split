import { useEffect } from 'react'
import screen from '../screen'


const useKeybinding = (
  keybinding: string,
  onKeyPressed: () => void,
): void => {
  useEffect(() => {
    screen.key(keybinding, onKeyPressed)
    return () => { screen.unkey(keybinding, onKeyPressed) }
  }, [onKeyPressed])
}


export default useKeybinding
