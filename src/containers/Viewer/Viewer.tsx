import React, { useCallback, useEffect, useRef, useState } from 'react'
import createActionGameStop from '../../store/game/actions/createActionGameStop'
import useDispatch from '../../store/useDispatch'
import * as Space from '../../types/space'
import when from '../../utils/when'
import ViewHelp from '../ViewHelp'
import ViewTimer from '../ViewTimer'
import BlessedBox from '../../components/BlessedBox'
import useKeybinding from '../../hooks/useKeybinding'


type ViewName = 'timer' | 'help' | undefined

interface ViewProps {
  space?: Space.Space
  onClose?: () => void
}


const Viewer: React.FC = () => {
  const mountedRef = useRef(true)
  const dispatch = useDispatch()

  const [selectedView, setSelectedView] = useState<ViewName>('timer')

  const [screenSize, setScreenSize] = useState({
    width: process.stdout.columns,
    height: process.stdout.rows,
  })

  const handleToggle = useCallback(() => {
    if (mountedRef.current) {
      dispatch(createActionGameStop())

      setSelectedView(prevSelectedView => {
        return when([
          [prevSelectedView === 'help', () => 'timer'],
          [prevSelectedView === 'timer', () => 'help'],
        ], undefined)
      })
    }
  }, [dispatch])

  const handleExit = useCallback(() => {
    process.exit()
  }, [])

  const handleSelectTimer = useCallback(() => {
    setSelectedView('timer')
  }, [])

  useKeybinding('h', handleToggle)
  useKeybinding('C-c', handleExit)

  useEffect(() => {
    mountedRef.current = true
    return () => { mountedRef.current = false }
  }, [])

  const handleResize = useCallback(() => {
    setScreenSize({
      width: process.stdout.columns,
      height: process.stdout.rows,
    })
  }, [process])

  const View = when<React.FC<ViewProps>>([
    [selectedView === 'help', () => ViewHelp],
    [selectedView === 'timer', () => ViewTimer],
  ], () => null)

  const onClose = when([
    [selectedView === 'help', () => handleSelectTimer],
    [selectedView === 'timer', () => handleExit],
  ], () => { /* do nothing */ })

  return (
    <BlessedBox onResize={handleResize}>
      <View space={screenSize} onClose={onClose} />
    </BlessedBox>
  )
}


export default Viewer
