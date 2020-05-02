import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import Game from './containers/Game'
import store from './store'


const App: React.FC<{}> = () => {
  return (
    <ReduxProvider store={store}>
      <Game />
    </ReduxProvider>
  )
}


export default App
