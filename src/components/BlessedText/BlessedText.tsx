import React from 'react'
import { Widgets } from 'blessed'
import when from '../../utils/when'


type IBlessedTextProps = Widgets.TextOptions


const BlessedText: React.FC<IBlessedTextProps> = ({
  content = '',
  align,
  width,
  height,
  top,
  bottom,
  left,
  right,
  ...props
}) => {
  const contentLeft = when<string | number>([
    [align === 'center', () => 'center'],
    [align === 'right', () => `100%-${content.length}`],
  ], 0)

  return (
    <blessed-text
      width={width}
      height={height}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      {...props}
    >
      <blessed-text {...props} content={content} left={contentLeft} />
    </blessed-text>
  )
}


export default BlessedText

export { IBlessedTextProps }
