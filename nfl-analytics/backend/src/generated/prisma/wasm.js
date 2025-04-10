
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.PlayerScalarFieldEnum = {
  id: 'id',
  name: 'name',
  position: 'position',
  dob: 'dob'
};

exports.Prisma.TeamScalarFieldEnum = {
  code: 'code',
  name: 'name',
  conference: 'conference',
  division: 'division'
};

exports.Prisma.GameScalarFieldEnum = {
  key: 'key',
  week: 'week',
  season: 'season',
  gameDate: 'gameDate',
  homeTeam: 'homeTeam',
  awayTeam: 'awayTeam',
  homeScore: 'homeScore',
  awayScore: 'awayScore',
  stadium: 'stadium',
  surface: 'surface',
  weather: 'weather'
};

exports.Prisma.WeeklyRosterScalarFieldEnum = {
  id: 'id',
  playerId: 'playerId',
  week: 'week',
  season: 'season',
  team: 'team',
  jerseyNumber: 'jerseyNumber',
  position: 'position'
};

exports.Prisma.PlayerGameStatScalarFieldEnum = {
  id: 'id',
  playerId: 'playerId',
  gameKey: 'gameKey',
  team: 'team',
  position: 'position',
  snaps: 'snaps',
  snapShare: 'snapShare',
  fantasyPoints: 'fantasyPoints',
  passAttempts: 'passAttempts',
  completions: 'completions',
  passYards: 'passYards',
  passTDs: 'passTDs',
  interceptions: 'interceptions',
  carries: 'carries',
  rushYards: 'rushYards',
  rushTDs: 'rushTDs',
  targets: 'targets',
  receptions: 'receptions',
  receivingYards: 'receivingYards',
  receivingTDs: 'receivingTDs',
  airYards: 'airYards',
  scrimmageYards: 'scrimmageYards',
  totalTDs: 'totalTDs',
  totalTouches: 'totalTouches',
  opportunities: 'opportunities',
  evadedTackles: 'evadedTackles',
  yardsCreated: 'yardsCreated',
  yardsPerCarry: 'yardsPerCarry',
  yardsPerTarget: 'yardsPerTarget',
  yardsPerReception: 'yardsPerReception'
};

exports.Prisma.PlayScalarFieldEnum = {
  id: 'id',
  gameKey: 'gameKey',
  week: 'week',
  quarter: 'quarter',
  minutes: 'minutes',
  seconds: 'seconds',
  down: 'down',
  yardsToGo: 'yardsToGo',
  offTeam: 'offTeam',
  defTeam: 'defTeam',
  playType: 'playType',
  yardsGained: 'yardsGained',
  isFirstDown: 'isFirstDown',
  redZone: 'redZone',
  passPlay: 'passPlay',
  runPlay: 'runPlay',
  touchdown: 'touchdown',
  turnover: 'turnover'
};

exports.Prisma.PlayPlayerScalarFieldEnum = {
  id: 'id',
  playId: 'playId',
  playerId: 'playerId',
  role: 'role',
  airYards: 'airYards',
  yardsGained: 'yardsGained',
  targeted: 'targeted',
  completed: 'completed',
  routeType: 'routeType',
  coverage: 'coverage',
  cushion: 'cushion'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Player: 'Player',
  Team: 'Team',
  Game: 'Game',
  WeeklyRoster: 'WeeklyRoster',
  PlayerGameStat: 'PlayerGameStat',
  Play: 'Play',
  PlayPlayer: 'PlayPlayer'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
