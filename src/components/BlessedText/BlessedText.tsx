import React from 'react'
import { Widgets } from 'blessed'
import when from '../../utils/when'


type IBlessedTextProps = Widgets.TextOptions


const BlessedText: React.FC<IBlessedTextProps> = ({
  content = '',
  align,
  ...props
}) => {
  const left = when<string | number>([
    [align === 'center', () => 'center'],
    [align === 'right', () => `100%-${content.length}`],
  ], 0)

  return (
    <blessed-text {...props}>
      <blessed-text content={content} left={left} />
    </blessed-text>
  )
}


export default BlessedText

export { IBlessedTextProps }
