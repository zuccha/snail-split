import blessed from 'blessed'


const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'Rigel LiveSplit',
  dockBorders: true,
})


export default screen
