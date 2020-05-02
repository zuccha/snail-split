type ICharacter = (0 | 1)[][]

type IFont = {
  alphabet: {
    [character: string]: ICharacter
  }
  separator: ICharacter
  height: number
}


export { ICharacter }
export { IFont }
