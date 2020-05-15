import { useEffect } from 'react'
import screen from '../screen'
import { Keybinding } from '../types/keybinding'


const useKeybinding = (
  keybinding: Keybinding,
  onKeyPressed: () => void,
): void => {
  useEffect(() => {
    if (keybinding !== undefined) {
      screen.key(keybinding, onKeyPressed)
    }

    return () => {
      if (keybinding !== undefined) {
        screen.unkey(keybinding, onKeyPressed)
      }
    }
  }, [keybinding, onKeyPressed])
}


export default useKeybinding
