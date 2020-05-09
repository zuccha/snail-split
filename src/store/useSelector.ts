import { useEffect, useRef, useState } from 'react'
import store from './store'
import { IStateRoot } from './types'


const equalIdentity = <T>(left: T, right: T): boolean => {
  return left === right
}

const useSelector = <T>(
  select: (state: IStateRoot) => T,
  equal: (left: T, right: T) => boolean = equalIdentity,
): T => {
  const stateRef = useRef(select(store.getState()))
  const [, forceUpdate] = useState(0)

  useEffect(() => {
    const update = (): void => {
      const newState = select(store.getState())
      if (equal(stateRef.current, newState)) {
        return
      }

      stateRef.current = newState
      forceUpdate(i => i + 1)
    }

    const unsubscribe = store.subscribe(update)
    return unsubscribe
  }, [select, equal])

  return stateRef.current
}


export default useSelector
