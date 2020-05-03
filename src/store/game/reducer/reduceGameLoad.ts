import immer from 'immer'
import readJson from '../../../utils/readJson'
import validate, { validateArray, validateObject, validateString } from '../../../utils/validate'
import initialGame from '../initialGame'
import { IActionGameLoad, IStateGame } from '../types'


interface IStateSegmentInput {
  name?: string
  timeBestRelative?: number
  timeGoldRelative?: number
  timeLastRelative: number
}

interface IStateGameInput {
  title?: string
  segments: IStateSegmentInput[]
}


const validateTime: (value: unknown, defaultValue: number | undefined) => number | undefined =
  validate(['number', 'undefined'])

const reduceGameLoad = (
  game: IStateGame,
  action: IActionGameLoad,
): IStateGame => {
  const filename = action.payload
  const json = readJson(filename)

  if (json.errorMessage !== undefined) {
    return {
      ...initialGame,
      errorMessage: `Failed to load game: ${json.errorMessage}.`,
    }
  }

  const gameInput = validateObject(json.data, {} as IStateGameInput)
  return immer(game, gameDraft => {
    gameDraft.title = validateString(gameInput.title, '')
    gameDraft.segments = validateArray(gameInput.segments, [])
      .map(segmentInput => validateObject(segmentInput, {} as IStateSegmentInput))
      .map((segmentInput, segmentInputIndex) => {
        return {
          name: validateString(segmentInput.name, `${segmentInputIndex}`),
          timeBestRelative: validateTime(segmentInput.timeBestRelative, undefined),
          timeGoldRelative: validateTime(segmentInput.timeGoldRelative, undefined),
          timeLastRelative: validateTime(segmentInput.timeLastRelative, undefined),
        }
      })
  })
}


export default reduceGameLoad
