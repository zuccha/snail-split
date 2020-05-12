import { useEffect, useState, useCallback } from 'react'
import screen from '../../screen'
import useSelector from '../../store/useSelector'
import selectGameCurrentSegmentIndex from '../../store/game/selectors/selectGameCurrentSegmentIndex'
import selectGameSegmentsCount from '../../store/game/selectors/selectGameSegmentsCount'
import useKeybinding from '../../hooks/useKeybinding'


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

  const moveWindowUp = useCallback(() => {
    setWindowOffset(prevWindowOffset => (
      Math.max(0, prevWindowOffset - 1)
    ))
  }, [])

  const moveWindowDown = useCallback(() => {
    setWindowOffset(prevWindowOffset => (
      Math.min(Math.max(0, segmentsCount - windowSize), prevWindowOffset + 1)
    ))
  }, [segmentsCount, windowSize])

  useKeybinding('up', moveWindowUp)
  useKeybinding('down', moveWindowDown)

  useEffect(() => {
    setWindowOffset(focusCurrentSegment(currentSegmentIndex, windowSize))
  }, [currentSegmentIndex, windowSize])

  return windowOffset
}


export default useWindowOffset
