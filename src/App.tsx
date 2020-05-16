import React, { useState, useEffect } from 'react'
import Viewer from './containers/Viewer'
import createActionConfigLoad from './store/config/actions/createActionConfigLoad'
import createActionGameLoad from './store/game/actions/createActionGameLoad'
import createActionSavefileLoad from './store/savefile/actions/createActionSavefileLoad'
import createActionThemeLoad from './store/theme/actions/createActionThemeLoad'
import useDispatch from './store/useDispatch'
import * as EitherErrorOr from './types/either-error-or'
import * as Config from './types/config'
import * as Game from './types/game'
import * as Theme from './types/theme'


interface AppProps {
  savefile: string
  configfile: string | undefined
  themefile: string | undefined
}


const App: React.FC<AppProps> = ({
  savefile,
  configfile,
  themefile,
}) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (configfile !== undefined) {
      const eitherErrorOrConfig = Config.load(configfile)
      if (EitherErrorOr.isError(eitherErrorOrConfig)) {
        console.error(`Failed to load config: ${eitherErrorOrConfig.error}.`)
        process.exit(1)
      }
      dispatch(createActionConfigLoad(eitherErrorOrConfig.data))
    }

    if (themefile !== undefined) {
      const eitherErrorOrTheme = Theme.load(themefile)
      if (EitherErrorOr.isError(eitherErrorOrTheme)) {
        console.error(`Failed to load theme: ${eitherErrorOrTheme.error}.`)
        process.exit(1)
      }
      dispatch(createActionThemeLoad(eitherErrorOrTheme.data))
    }

    const eitherErrorOrGame = Game.load(savefile)
    if (EitherErrorOr.isError(eitherErrorOrGame)) {
      console.error(`Failed to load game: ${eitherErrorOrGame.error}.`)
      process.exit(1)
    }
    dispatch(createActionGameLoad(eitherErrorOrGame.data))
    dispatch(createActionSavefileLoad(savefile))

    setLoading(false)
  }, [])

  if (loading) {
    return null
  }

  return <Viewer />
}


export default App
