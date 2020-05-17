import blessed from 'blessed'


const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'Snail Split',
  dockBorders: true,
})


export default screen
