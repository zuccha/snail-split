import React, { useCallback, useEffect, useRef, useState } from 'react'
import screen from '../../screen'
import createActionGameStop from '../../store/game/actions/createActionGameStop'
import useDispatch from '../../store/useDispatch'
import * as Space from '../../types/space'
import when from '../../utils/when'
import ViewHelp from '../ViewHelp'
import ViewTimer from '../ViewTimer'
import BlessedBox from '../../components/BlessedBox'


type ViewName = 'timer' | 'help' | undefined

interface ViewProps {
  space?: Space.Space
}


const Viewer: React.FC = () => {
  const mountedRef = useRef(true)
  const dispatch = useDispatch()

  const [selectedView, setSelectedView] = useState<ViewName>('timer')

  const [screenSize, setScreenSize] = useState({
    width: process.stdout.columns,
    height: process.stdout.rows,
  })

  useEffect(() => {
    mountedRef.current = true
    return () => { mountedRef.current = false }
  }, [])

  useEffect(() => {
    const toggleView = (): void => {
      if (mountedRef.current) {
        dispatch(createActionGameStop())

        setSelectedView(prevSelectedView => {
          return when([
            [prevSelectedView === 'help', () => 'timer'],
            [prevSelectedView === 'timer', () => 'help'],
          ], undefined)
        })
      }
    }

    screen.key('h', toggleView)
    return () => {
      screen.unkey('h', toggleView)
    }
  }, [dispatch])

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

  return (
    <BlessedBox onResize={handleResize}>
      <View space={screenSize} />
    </BlessedBox>
  )
}


export default Viewer
