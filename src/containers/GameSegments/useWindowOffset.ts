import { useEffect, useState } from 'react'
import screen from '../../screen'
import useSelector from '../../store/useSelector'
import selectGameCurrentSegmentIndex from '../../store/game/selectors/selectGameCurrentSegmentIndex'
import selectGameSegmentsCount from '../../store/game/selectors/selectGameSegmentsCount'


const focusCurrentSegment = (
  currentSegmentIndex: number,
  windowSize: number,
): number => {
  return Math.max(0, currentSegmentIndex - windowSize + 1)
}

const useWindowOffset = (windowSize: number): number => {
  const segmentsCount = useSelector(selectGameSegmentsCount)
  const currentSegmentIndex = useSelector(selectGameCurrentSegmentIndex)
  const [windowOffset, setWindowOffset] = useState(focusCurrentSegment(currentSegmentIndex, windowSize))

  useEffect(() => {
    setWindowOffset(focusCurrentSegment(currentSegmentIndex, windowSize))
  }, [currentSegmentIndex, windowSize])

  useEffect(() => {
    const moveWindowUp = (): void => {
      setWindowOffset(prevWindowOffset => (
        Math.max(0, prevWindowOffset - 1)
      ))
    }

    const moveWindowDown = (): void => {
      setWindowOffset(prevWindowOffset => (
        Math.min(Math.max(0, segmentsCount - windowSize), prevWindowOffset + 1)
      ))
    }

    screen.key('up', moveWindowUp)
    screen.key('down', moveWindowDown)

    return () => {
      screen.unkey('up', moveWindowUp)
      screen.unkey('down', moveWindowDown)
    }
  }, [segmentsCount, windowSize])

  return windowOffset
}


export default useWindowOffset
