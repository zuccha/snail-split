import React from 'react'
import { Widgets } from 'blessed'


type IBlessedBoxProps = Omit<Widgets.BoxOptions, 'children'> & {
  children?: React.ReactNode
}


const BlessedBox: React.FC<IBlessedBoxProps> = ({
  children = null,
  ...containerProps
}) => {
  return (
    <blessed-box {...containerProps}>
      {children}
    </blessed-box>
  )
}


export default BlessedBox

export { IBlessedBoxProps }
