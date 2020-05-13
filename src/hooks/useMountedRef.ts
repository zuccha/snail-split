import { useEffect, useRef } from 'react'


const useMountedRef = (): React.MutableRefObject<boolean> => {
  const mountedRef = useRef(true)
  useEffect(() => {
    mountedRef.current = true
    return () => { mountedRef.current = false }
  }, [])

  return mountedRef
}


export default useMountedRef
