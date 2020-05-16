import minimist from 'minimist'
import logger from '../utils/logger'


interface Args {
  savefile: string
  configfile: string | undefined
  themefile: string | undefined
}

const SUPPORTED_OPTIONS = [
  '_',
  'h', 'help',
  'v', 'version',
  'c', 'config',
  't', 'theme',
]

const HELP = `\
OVERVIEW: Speedrun timer for the terminal.

USAGE: yarn start <savefile> [flags]

OPTIONS:
  -c, --config <file>    Read config from <file>
  -h, --help             Display help
  -t, --theme <file>     Read theme from <file>
  -v, --version          Display version

EXAMPLES:
  yarn start ./savefiles/dark-souls.json
  yarn start ./savefiles/dark-souls.json -t ./themes/dark.json
  yarn start ./savefiles/dark-souls.json --config=./configs/minimal.json
  yarn start ./savefiles/dark-souls.json --theme=./themes/dark.json -c ./configs/minimal.json

MORE INFO:
  https://github.com/zuccha/snail-split
`

const parseArgs = (): Args => {
  const argv = minimist(process.argv.slice(2))

  if (argv.h || argv.help) {
    console.log(HELP)
    process.exit(0)
  }

  if (argv.v || argv.version) {
    console.log('1.0.0')
    process.exit(0)
  }

  if (argv._.length === 0) {
    logger.fatal('No filename provided, one is expected.')
  }

  if (argv._.length > 1) {
    logger.fatal('Too many filenames provided, one is expected.')
  }

  Object.keys(argv).forEach(option => {
    if (!SUPPORTED_OPTIONS.includes(option)) {
      logger.fatal(`Unrecognized option "${option}".`)
    }
  })

  // TODO: Check for duplicates.

  const savefile = argv._[0]
  const configfile = argv.c || argv.config || undefined
  const themefile = argv.t || argv.theme || undefined

  return {
    savefile,
    configfile,
    themefile,
  }
}


export default parseArgs
