import React from 'react'
import ISpace from '../../types/space'
import BlessedText from '../BlessedText'


interface IErrorMessageProps {
  errorMessage: string
  space?: ISpace
}


const ErrorMessage: React.FC<IErrorMessageProps> = ({
  errorMessage,
  space = {},
}) => {
  return <BlessedText content={errorMessage} {...space} />
}


export default ErrorMessage
