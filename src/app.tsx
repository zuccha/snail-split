import React, { useEffect, useState } from 'react'
import { Text, Color } from 'ink'


interface AppProps {
  name: string
}

const App: React.FC<AppProps> = ({
  name = 'Stranger',
}) => {
  const [time, setTime] = useState(0);
  
  useEffect(() => {
    setInterval(() => setTime(prevTime => prevTime + 1), 1000)
  }, []);

  return (
    <Text>
      Hello, <Color green>{name}</Color>, {time} seconds have passed.
    </Text>
  )
}


export default App
