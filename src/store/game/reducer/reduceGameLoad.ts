import fs from 'fs'
import immer from 'immer'
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

  if (filename === '') {
    return {
      ...initialGame,
      errorMessage: 'Failed to load game: no filename provided.',
    }
  }

  if (!fs.existsSync(filename)) {
    return {
      ...initialGame,
      errorMessage: `Failed to load game: file "${filename}" does not exists.`,
    }
  }

  if (!fs.lstatSync(filename).isFile()) {
    return {
      ...initialGame,
      errorMessage: `Failed to load game: "${filename}" is not a file.`,
    }
  }

  try {
    const file = fs.readFileSync(filename, 'utf8')
    const gameInput = validateObject(JSON.parse(file), {} as IStateGameInput)
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
  } catch(e) {
    if (e instanceof SyntaxError) {
      return {
        ...initialGame,
        errorMessage: `Failed to load game: file "${filename}" is not formatted correctly.`,
      }
    }

    return {
      ...initialGame,
      errorMessage: 'Failed to load game: an error occurred, please restart the application',
    }
  }
}


export default reduceGameLoad
