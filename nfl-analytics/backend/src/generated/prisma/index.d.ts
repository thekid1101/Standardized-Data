
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Player
 * 
 */
export type Player = $Result.DefaultSelection<Prisma.$PlayerPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model WeeklyRoster
 * 
 */
export type WeeklyRoster = $Result.DefaultSelection<Prisma.$WeeklyRosterPayload>
/**
 * Model PlayerGameStat
 * 
 */
export type PlayerGameStat = $Result.DefaultSelection<Prisma.$PlayerGameStatPayload>
/**
 * Model Play
 * 
 */
export type Play = $Result.DefaultSelection<Prisma.$PlayPayload>
/**
 * Model PlayPlayer
 * 
 */
export type PlayPlayer = $Result.DefaultSelection<Prisma.$PlayPlayerPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Players
 * const players = await prisma.player.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Players
   * const players = await prisma.player.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.player`: Exposes CRUD operations for the **Player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.PlayerDelegate<ExtArgs>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs>;

  /**
   * `prisma.weeklyRoster`: Exposes CRUD operations for the **WeeklyRoster** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeeklyRosters
    * const weeklyRosters = await prisma.weeklyRoster.findMany()
    * ```
    */
  get weeklyRoster(): Prisma.WeeklyRosterDelegate<ExtArgs>;

  /**
   * `prisma.playerGameStat`: Exposes CRUD operations for the **PlayerGameStat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerGameStats
    * const playerGameStats = await prisma.playerGameStat.findMany()
    * ```
    */
  get playerGameStat(): Prisma.PlayerGameStatDelegate<ExtArgs>;

  /**
   * `prisma.play`: Exposes CRUD operations for the **Play** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plays
    * const plays = await prisma.play.findMany()
    * ```
    */
  get play(): Prisma.PlayDelegate<ExtArgs>;

  /**
   * `prisma.playPlayer`: Exposes CRUD operations for the **PlayPlayer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayPlayers
    * const playPlayers = await prisma.playPlayer.findMany()
    * ```
    */
  get playPlayer(): Prisma.PlayPlayerDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Player: 'Player',
    Team: 'Team',
    Game: 'Game',
    WeeklyRoster: 'WeeklyRoster',
    PlayerGameStat: 'PlayerGameStat',
    Play: 'Play',
    PlayPlayer: 'PlayPlayer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "player" | "team" | "game" | "weeklyRoster" | "playerGameStat" | "play" | "playPlayer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Player: {
        payload: Prisma.$PlayerPayload<ExtArgs>
        fields: Prisma.PlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findFirst: {
            args: Prisma.PlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findMany: {
            args: Prisma.PlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          create: {
            args: Prisma.PlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          createMany: {
            args: Prisma.PlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          delete: {
            args: Prisma.PlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          update: {
            args: Prisma.PlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          deleteMany: {
            args: Prisma.PlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          aggregate: {
            args: Prisma.PlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayer>
          }
          groupBy: {
            args: Prisma.PlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      WeeklyRoster: {
        payload: Prisma.$WeeklyRosterPayload<ExtArgs>
        fields: Prisma.WeeklyRosterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeeklyRosterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyRosterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeeklyRosterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyRosterPayload>
          }
          findFirst: {
            args: Prisma.WeeklyRosterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyRosterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeeklyRosterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyRosterPayload>
          }
          findMany: {
            args: Prisma.WeeklyRosterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyRosterPayload>[]
          }
          create: {
            args: Prisma.WeeklyRosterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyRosterPayload>
          }
          createMany: {
            args: Prisma.WeeklyRosterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeeklyRosterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyRosterPayload>[]
          }
          delete: {
            args: Prisma.WeeklyRosterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyRosterPayload>
          }
          update: {
            args: Prisma.WeeklyRosterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyRosterPayload>
          }
          deleteMany: {
            args: Prisma.WeeklyRosterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeeklyRosterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WeeklyRosterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyRosterPayload>
          }
          aggregate: {
            args: Prisma.WeeklyRosterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeeklyRoster>
          }
          groupBy: {
            args: Prisma.WeeklyRosterGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeeklyRosterGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeeklyRosterCountArgs<ExtArgs>
            result: $Utils.Optional<WeeklyRosterCountAggregateOutputType> | number
          }
        }
      }
      PlayerGameStat: {
        payload: Prisma.$PlayerGameStatPayload<ExtArgs>
        fields: Prisma.PlayerGameStatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerGameStatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerGameStatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerGameStatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerGameStatPayload>
          }
          findFirst: {
            args: Prisma.PlayerGameStatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerGameStatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerGameStatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerGameStatPayload>
          }
          findMany: {
            args: Prisma.PlayerGameStatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerGameStatPayload>[]
          }
          create: {
            args: Prisma.PlayerGameStatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerGameStatPayload>
          }
          createMany: {
            args: Prisma.PlayerGameStatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerGameStatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerGameStatPayload>[]
          }
          delete: {
            args: Prisma.PlayerGameStatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerGameStatPayload>
          }
          update: {
            args: Prisma.PlayerGameStatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerGameStatPayload>
          }
          deleteMany: {
            args: Prisma.PlayerGameStatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerGameStatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlayerGameStatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerGameStatPayload>
          }
          aggregate: {
            args: Prisma.PlayerGameStatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerGameStat>
          }
          groupBy: {
            args: Prisma.PlayerGameStatGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerGameStatGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerGameStatCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerGameStatCountAggregateOutputType> | number
          }
        }
      }
      Play: {
        payload: Prisma.$PlayPayload<ExtArgs>
        fields: Prisma.PlayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayPayload>
          }
          findFirst: {
            args: Prisma.PlayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayPayload>
          }
          findMany: {
            args: Prisma.PlayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayPayload>[]
          }
          create: {
            args: Prisma.PlayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayPayload>
          }
          createMany: {
            args: Prisma.PlayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayPayload>[]
          }
          delete: {
            args: Prisma.PlayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayPayload>
          }
          update: {
            args: Prisma.PlayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayPayload>
          }
          deleteMany: {
            args: Prisma.PlayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayPayload>
          }
          aggregate: {
            args: Prisma.PlayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlay>
          }
          groupBy: {
            args: Prisma.PlayGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayCountArgs<ExtArgs>
            result: $Utils.Optional<PlayCountAggregateOutputType> | number
          }
        }
      }
      PlayPlayer: {
        payload: Prisma.$PlayPlayerPayload<ExtArgs>
        fields: Prisma.PlayPlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayPlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayPlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayPlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayPlayerPayload>
          }
          findFirst: {
            args: Prisma.PlayPlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayPlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayPlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayPlayerPayload>
          }
          findMany: {
            args: Prisma.PlayPlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayPlayerPayload>[]
          }
          create: {
            args: Prisma.PlayPlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayPlayerPayload>
          }
          createMany: {
            args: Prisma.PlayPlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayPlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayPlayerPayload>[]
          }
          delete: {
            args: Prisma.PlayPlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayPlayerPayload>
          }
          update: {
            args: Prisma.PlayPlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayPlayerPayload>
          }
          deleteMany: {
            args: Prisma.PlayPlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayPlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlayPlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayPlayerPayload>
          }
          aggregate: {
            args: Prisma.PlayPlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayPlayer>
          }
          groupBy: {
            args: Prisma.PlayPlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayPlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayPlayerCountArgs<ExtArgs>
            result: $Utils.Optional<PlayPlayerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PlayerCountOutputType
   */

  export type PlayerCountOutputType = {
    weeklyRosters: number
    playerGameStats: number
    playPlayers: number
  }

  export type PlayerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weeklyRosters?: boolean | PlayerCountOutputTypeCountWeeklyRostersArgs
    playerGameStats?: boolean | PlayerCountOutputTypeCountPlayerGameStatsArgs
    playPlayers?: boolean | PlayerCountOutputTypeCountPlayPlayersArgs
  }

  // Custom InputTypes
  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCountOutputType
     */
    select?: PlayerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountWeeklyRostersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyRosterWhereInput
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountPlayerGameStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerGameStatWhereInput
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountPlayPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayPlayerWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    homeGames: number
    awayGames: number
    weeklyRosters: number
    playerGameStats: number
    offensivePlays: number
    defensivePlays: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homeGames?: boolean | TeamCountOutputTypeCountHomeGamesArgs
    awayGames?: boolean | TeamCountOutputTypeCountAwayGamesArgs
    weeklyRosters?: boolean | TeamCountOutputTypeCountWeeklyRostersArgs
    playerGameStats?: boolean | TeamCountOutputTypeCountPlayerGameStatsArgs
    offensivePlays?: boolean | TeamCountOutputTypeCountOffensivePlaysArgs
    defensivePlays?: boolean | TeamCountOutputTypeCountDefensivePlaysArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountHomeGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountAwayGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountWeeklyRostersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyRosterWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountPlayerGameStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerGameStatWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountOffensivePlaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountDefensivePlaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayWhereInput
  }


  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    plays: number
    playerGameStats: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plays?: boolean | GameCountOutputTypeCountPlaysArgs
    playerGameStats?: boolean | GameCountOutputTypeCountPlayerGameStatsArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountPlaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountPlayerGameStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerGameStatWhereInput
  }


  /**
   * Count Type PlayCountOutputType
   */

  export type PlayCountOutputType = {
    playPlayers: number
  }

  export type PlayCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playPlayers?: boolean | PlayCountOutputTypeCountPlayPlayersArgs
  }

  // Custom InputTypes
  /**
   * PlayCountOutputType without action
   */
  export type PlayCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayCountOutputType
     */
    select?: PlayCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlayCountOutputType without action
   */
  export type PlayCountOutputTypeCountPlayPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayPlayerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Player
   */

  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerMinAggregateOutputType = {
    id: string | null
    name: string | null
    position: string | null
    dob: Date | null
  }

  export type PlayerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    position: string | null
    dob: Date | null
  }

  export type PlayerCountAggregateOutputType = {
    id: number
    name: number
    position: number
    dob: number
    _all: number
  }


  export type PlayerMinAggregateInputType = {
    id?: true
    name?: true
    position?: true
    dob?: true
  }

  export type PlayerMaxAggregateInputType = {
    id?: true
    name?: true
    position?: true
    dob?: true
  }

  export type PlayerCountAggregateInputType = {
    id?: true
    name?: true
    position?: true
    dob?: true
    _all?: true
  }

  export type PlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Player to aggregate.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }




  export type PlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithAggregationInput | PlayerOrderByWithAggregationInput[]
    by: PlayerScalarFieldEnum[] | PlayerScalarFieldEnum
    having?: PlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCountAggregateInputType | true
    _min?: PlayerMinAggregateInputType
    _max?: PlayerMaxAggregateInputType
  }

  export type PlayerGroupByOutputType = {
    id: string
    name: string
    position: string | null
    dob: Date | null
    _count: PlayerCountAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  type GetPlayerGroupByPayload<T extends PlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    position?: boolean
    dob?: boolean
    weeklyRosters?: boolean | Player$weeklyRostersArgs<ExtArgs>
    playerGameStats?: boolean | Player$playerGameStatsArgs<ExtArgs>
    playPlayers?: boolean | Player$playPlayersArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    position?: boolean
    dob?: boolean
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectScalar = {
    id?: boolean
    name?: boolean
    position?: boolean
    dob?: boolean
  }

  export type PlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weeklyRosters?: boolean | Player$weeklyRostersArgs<ExtArgs>
    playerGameStats?: boolean | Player$playerGameStatsArgs<ExtArgs>
    playPlayers?: boolean | Player$playPlayersArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Player"
    objects: {
      weeklyRosters: Prisma.$WeeklyRosterPayload<ExtArgs>[]
      playerGameStats: Prisma.$PlayerGameStatPayload<ExtArgs>[]
      playPlayers: Prisma.$PlayPlayerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      position: string | null
      dob: Date | null
    }, ExtArgs["result"]["player"]>
    composites: {}
  }

  type PlayerGetPayload<S extends boolean | null | undefined | PlayerDefaultArgs> = $Result.GetResult<Prisma.$PlayerPayload, S>

  type PlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlayerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlayerCountAggregateInputType | true
    }

  export interface PlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Player'], meta: { name: 'Player' } }
    /**
     * Find zero or one Player that matches the filter.
     * @param {PlayerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerFindUniqueArgs>(args: SelectSubset<T, PlayerFindUniqueArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Player that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PlayerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerFindFirstArgs>(args?: SelectSubset<T, PlayerFindFirstArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerWithIdOnly = await prisma.player.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerFindManyArgs>(args?: SelectSubset<T, PlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Player.
     * @param {PlayerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
     */
    create<T extends PlayerCreateArgs>(args: SelectSubset<T, PlayerCreateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Players.
     * @param {PlayerCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerCreateManyArgs>(args?: SelectSubset<T, PlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Players and returns the data saved in the database.
     * @param {PlayerCreateManyAndReturnArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Player.
     * @param {PlayerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
     */
    delete<T extends PlayerDeleteArgs>(args: SelectSubset<T, PlayerDeleteArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Player.
     * @param {PlayerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerUpdateArgs>(args: SelectSubset<T, PlayerUpdateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Players.
     * @param {PlayerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerDeleteManyArgs>(args?: SelectSubset<T, PlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerUpdateManyArgs>(args: SelectSubset<T, PlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Player.
     * @param {PlayerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
     */
    upsert<T extends PlayerUpsertArgs>(args: SelectSubset<T, PlayerUpsertArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayerCountArgs>(
      args?: Subset<T, PlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): Prisma.PrismaPromise<GetPlayerAggregateType<T>>

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerGroupByArgs['orderBy'] }
        : { orderBy?: PlayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Player model
   */
  readonly fields: PlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    weeklyRosters<T extends Player$weeklyRostersArgs<ExtArgs> = {}>(args?: Subset<T, Player$weeklyRostersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyRosterPayload<ExtArgs>, T, "findMany"> | Null>
    playerGameStats<T extends Player$playerGameStatsArgs<ExtArgs> = {}>(args?: Subset<T, Player$playerGameStatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerGameStatPayload<ExtArgs>, T, "findMany"> | Null>
    playPlayers<T extends Player$playPlayersArgs<ExtArgs> = {}>(args?: Subset<T, Player$playPlayersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayPlayerPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Player model
   */ 
  interface PlayerFieldRefs {
    readonly id: FieldRef<"Player", 'String'>
    readonly name: FieldRef<"Player", 'String'>
    readonly position: FieldRef<"Player", 'String'>
    readonly dob: FieldRef<"Player", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Player findUnique
   */
  export type PlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findUniqueOrThrow
   */
  export type PlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findFirst
   */
  export type PlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findFirstOrThrow
   */
  export type PlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findMany
   */
  export type PlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player create
   */
  export type PlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a Player.
     */
    data: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
  }

  /**
   * Player createMany
   */
  export type PlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player createManyAndReturn
   */
  export type PlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player update
   */
  export type PlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a Player.
     */
    data: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
    /**
     * Choose, which Player to update.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player updateMany
   */
  export type PlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
  }

  /**
   * Player upsert
   */
  export type PlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the Player to update in case it exists.
     */
    where: PlayerWhereUniqueInput
    /**
     * In case the Player found by the `where` argument doesn't exist, create a new Player with this data.
     */
    create: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
    /**
     * In case the Player was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
  }

  /**
   * Player delete
   */
  export type PlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter which Player to delete.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player deleteMany
   */
  export type PlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: PlayerWhereInput
  }

  /**
   * Player.weeklyRosters
   */
  export type Player$weeklyRostersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyRoster
     */
    select?: WeeklyRosterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyRosterInclude<ExtArgs> | null
    where?: WeeklyRosterWhereInput
    orderBy?: WeeklyRosterOrderByWithRelationInput | WeeklyRosterOrderByWithRelationInput[]
    cursor?: WeeklyRosterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeeklyRosterScalarFieldEnum | WeeklyRosterScalarFieldEnum[]
  }

  /**
   * Player.playerGameStats
   */
  export type Player$playerGameStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerGameStat
     */
    select?: PlayerGameStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerGameStatInclude<ExtArgs> | null
    where?: PlayerGameStatWhereInput
    orderBy?: PlayerGameStatOrderByWithRelationInput | PlayerGameStatOrderByWithRelationInput[]
    cursor?: PlayerGameStatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerGameStatScalarFieldEnum | PlayerGameStatScalarFieldEnum[]
  }

  /**
   * Player.playPlayers
   */
  export type Player$playPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayPlayer
     */
    select?: PlayPlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayPlayerInclude<ExtArgs> | null
    where?: PlayPlayerWhereInput
    orderBy?: PlayPlayerOrderByWithRelationInput | PlayPlayerOrderByWithRelationInput[]
    cursor?: PlayPlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayPlayerScalarFieldEnum | PlayPlayerScalarFieldEnum[]
  }

  /**
   * Player without action
   */
  export type PlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamMinAggregateOutputType = {
    code: string | null
    name: string | null
    conference: string | null
    division: string | null
  }

  export type TeamMaxAggregateOutputType = {
    code: string | null
    name: string | null
    conference: string | null
    division: string | null
  }

  export type TeamCountAggregateOutputType = {
    code: number
    name: number
    conference: number
    division: number
    _all: number
  }


  export type TeamMinAggregateInputType = {
    code?: true
    name?: true
    conference?: true
    division?: true
  }

  export type TeamMaxAggregateInputType = {
    code?: true
    name?: true
    conference?: true
    division?: true
  }

  export type TeamCountAggregateInputType = {
    code?: true
    name?: true
    conference?: true
    division?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    code: string
    name: string | null
    conference: string | null
    division: string | null
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    conference?: boolean
    division?: boolean
    homeGames?: boolean | Team$homeGamesArgs<ExtArgs>
    awayGames?: boolean | Team$awayGamesArgs<ExtArgs>
    weeklyRosters?: boolean | Team$weeklyRostersArgs<ExtArgs>
    playerGameStats?: boolean | Team$playerGameStatsArgs<ExtArgs>
    offensivePlays?: boolean | Team$offensivePlaysArgs<ExtArgs>
    defensivePlays?: boolean | Team$defensivePlaysArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    conference?: boolean
    division?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    code?: boolean
    name?: boolean
    conference?: boolean
    division?: boolean
  }

  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homeGames?: boolean | Team$homeGamesArgs<ExtArgs>
    awayGames?: boolean | Team$awayGamesArgs<ExtArgs>
    weeklyRosters?: boolean | Team$weeklyRostersArgs<ExtArgs>
    playerGameStats?: boolean | Team$playerGameStatsArgs<ExtArgs>
    offensivePlays?: boolean | Team$offensivePlaysArgs<ExtArgs>
    defensivePlays?: boolean | Team$defensivePlaysArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      homeGames: Prisma.$GamePayload<ExtArgs>[]
      awayGames: Prisma.$GamePayload<ExtArgs>[]
      weeklyRosters: Prisma.$WeeklyRosterPayload<ExtArgs>[]
      playerGameStats: Prisma.$PlayerGameStatPayload<ExtArgs>[]
      offensivePlays: Prisma.$PlayPayload<ExtArgs>[]
      defensivePlays: Prisma.$PlayPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      code: string
      name: string | null
      conference: string | null
      division: string | null
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const teamWithCodeOnly = await prisma.team.findMany({ select: { code: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `code`
     * const teamWithCodeOnly = await prisma.team.createManyAndReturn({ 
     *   select: { code: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    homeGames<T extends Team$homeGamesArgs<ExtArgs> = {}>(args?: Subset<T, Team$homeGamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany"> | Null>
    awayGames<T extends Team$awayGamesArgs<ExtArgs> = {}>(args?: Subset<T, Team$awayGamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany"> | Null>
    weeklyRosters<T extends Team$weeklyRostersArgs<ExtArgs> = {}>(args?: Subset<T, Team$weeklyRostersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyRosterPayload<ExtArgs>, T, "findMany"> | Null>
    playerGameStats<T extends Team$playerGameStatsArgs<ExtArgs> = {}>(args?: Subset<T, Team$playerGameStatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerGameStatPayload<ExtArgs>, T, "findMany"> | Null>
    offensivePlays<T extends Team$offensivePlaysArgs<ExtArgs> = {}>(args?: Subset<T, Team$offensivePlaysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayPayload<ExtArgs>, T, "findMany"> | Null>
    defensivePlays<T extends Team$defensivePlaysArgs<ExtArgs> = {}>(args?: Subset<T, Team$defensivePlaysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Team model
   */ 
  interface TeamFieldRefs {
    readonly code: FieldRef<"Team", 'String'>
    readonly name: FieldRef<"Team", 'String'>
    readonly conference: FieldRef<"Team", 'String'>
    readonly division: FieldRef<"Team", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
  }

  /**
   * Team.homeGames
   */
  export type Team$homeGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Team.awayGames
   */
  export type Team$awayGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Team.weeklyRosters
   */
  export type Team$weeklyRostersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyRoster
     */
    select?: WeeklyRosterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyRosterInclude<ExtArgs> | null
    where?: WeeklyRosterWhereInput
    orderBy?: WeeklyRosterOrderByWithRelationInput | WeeklyRosterOrderByWithRelationInput[]
    cursor?: WeeklyRosterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeeklyRosterScalarFieldEnum | WeeklyRosterScalarFieldEnum[]
  }

  /**
   * Team.playerGameStats
   */
  export type Team$playerGameStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerGameStat
     */
    select?: PlayerGameStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerGameStatInclude<ExtArgs> | null
    where?: PlayerGameStatWhereInput
    orderBy?: PlayerGameStatOrderByWithRelationInput | PlayerGameStatOrderByWithRelationInput[]
    cursor?: PlayerGameStatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerGameStatScalarFieldEnum | PlayerGameStatScalarFieldEnum[]
  }

  /**
   * Team.offensivePlays
   */
  export type Team$offensivePlaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Play
     */
    select?: PlaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayInclude<ExtArgs> | null
    where?: PlayWhereInput
    orderBy?: PlayOrderByWithRelationInput | PlayOrderByWithRelationInput[]
    cursor?: PlayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayScalarFieldEnum | PlayScalarFieldEnum[]
  }

  /**
   * Team.defensivePlays
   */
  export type Team$defensivePlaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Play
     */
    select?: PlaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayInclude<ExtArgs> | null
    where?: PlayWhereInput
    orderBy?: PlayOrderByWithRelationInput | PlayOrderByWithRelationInput[]
    cursor?: PlayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayScalarFieldEnum | PlayScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameAvgAggregateOutputType = {
    week: number | null
    season: number | null
    homeScore: number | null
    awayScore: number | null
  }

  export type GameSumAggregateOutputType = {
    week: number | null
    season: number | null
    homeScore: number | null
    awayScore: number | null
  }

  export type GameMinAggregateOutputType = {
    key: string | null
    week: number | null
    season: number | null
    gameDate: Date | null
    homeTeam: string | null
    awayTeam: string | null
    homeScore: number | null
    awayScore: number | null
    stadium: string | null
    surface: string | null
    weather: string | null
  }

  export type GameMaxAggregateOutputType = {
    key: string | null
    week: number | null
    season: number | null
    gameDate: Date | null
    homeTeam: string | null
    awayTeam: string | null
    homeScore: number | null
    awayScore: number | null
    stadium: string | null
    surface: string | null
    weather: string | null
  }

  export type GameCountAggregateOutputType = {
    key: number
    week: number
    season: number
    gameDate: number
    homeTeam: number
    awayTeam: number
    homeScore: number
    awayScore: number
    stadium: number
    surface: number
    weather: number
    _all: number
  }


  export type GameAvgAggregateInputType = {
    week?: true
    season?: true
    homeScore?: true
    awayScore?: true
  }

  export type GameSumAggregateInputType = {
    week?: true
    season?: true
    homeScore?: true
    awayScore?: true
  }

  export type GameMinAggregateInputType = {
    key?: true
    week?: true
    season?: true
    gameDate?: true
    homeTeam?: true
    awayTeam?: true
    homeScore?: true
    awayScore?: true
    stadium?: true
    surface?: true
    weather?: true
  }

  export type GameMaxAggregateInputType = {
    key?: true
    week?: true
    season?: true
    gameDate?: true
    homeTeam?: true
    awayTeam?: true
    homeScore?: true
    awayScore?: true
    stadium?: true
    surface?: true
    weather?: true
  }

  export type GameCountAggregateInputType = {
    key?: true
    week?: true
    season?: true
    gameDate?: true
    homeTeam?: true
    awayTeam?: true
    homeScore?: true
    awayScore?: true
    stadium?: true
    surface?: true
    weather?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _avg?: GameAvgAggregateInputType
    _sum?: GameSumAggregateInputType
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    key: string
    week: number
    season: number
    gameDate: Date
    homeTeam: string
    awayTeam: string
    homeScore: number | null
    awayScore: number | null
    stadium: string | null
    surface: string | null
    weather: string | null
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    week?: boolean
    season?: boolean
    gameDate?: boolean
    homeTeam?: boolean
    awayTeam?: boolean
    homeScore?: boolean
    awayScore?: boolean
    stadium?: boolean
    surface?: boolean
    weather?: boolean
    homeTeamRel?: boolean | TeamDefaultArgs<ExtArgs>
    awayTeamRel?: boolean | TeamDefaultArgs<ExtArgs>
    plays?: boolean | Game$playsArgs<ExtArgs>
    playerGameStats?: boolean | Game$playerGameStatsArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    week?: boolean
    season?: boolean
    gameDate?: boolean
    homeTeam?: boolean
    awayTeam?: boolean
    homeScore?: boolean
    awayScore?: boolean
    stadium?: boolean
    surface?: boolean
    weather?: boolean
    homeTeamRel?: boolean | TeamDefaultArgs<ExtArgs>
    awayTeamRel?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    key?: boolean
    week?: boolean
    season?: boolean
    gameDate?: boolean
    homeTeam?: boolean
    awayTeam?: boolean
    homeScore?: boolean
    awayScore?: boolean
    stadium?: boolean
    surface?: boolean
    weather?: boolean
  }

  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homeTeamRel?: boolean | TeamDefaultArgs<ExtArgs>
    awayTeamRel?: boolean | TeamDefaultArgs<ExtArgs>
    plays?: boolean | Game$playsArgs<ExtArgs>
    playerGameStats?: boolean | Game$playerGameStatsArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homeTeamRel?: boolean | TeamDefaultArgs<ExtArgs>
    awayTeamRel?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      homeTeamRel: Prisma.$TeamPayload<ExtArgs>
      awayTeamRel: Prisma.$TeamPayload<ExtArgs>
      plays: Prisma.$PlayPayload<ExtArgs>[]
      playerGameStats: Prisma.$PlayerGameStatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      key: string
      week: number
      season: number
      gameDate: Date
      homeTeam: string
      awayTeam: string
      homeScore: number | null
      awayScore: number | null
      stadium: string | null
      surface: string | null
      weather: string | null
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const gameWithKeyOnly = await prisma.game.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `key`
     * const gameWithKeyOnly = await prisma.game.createManyAndReturn({ 
     *   select: { key: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    homeTeamRel<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    awayTeamRel<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    plays<T extends Game$playsArgs<ExtArgs> = {}>(args?: Subset<T, Game$playsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayPayload<ExtArgs>, T, "findMany"> | Null>
    playerGameStats<T extends Game$playerGameStatsArgs<ExtArgs> = {}>(args?: Subset<T, Game$playerGameStatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerGameStatPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Game model
   */ 
  interface GameFieldRefs {
    readonly key: FieldRef<"Game", 'String'>
    readonly week: FieldRef<"Game", 'Int'>
    readonly season: FieldRef<"Game", 'Int'>
    readonly gameDate: FieldRef<"Game", 'DateTime'>
    readonly homeTeam: FieldRef<"Game", 'String'>
    readonly awayTeam: FieldRef<"Game", 'String'>
    readonly homeScore: FieldRef<"Game", 'Int'>
    readonly awayScore: FieldRef<"Game", 'Int'>
    readonly stadium: FieldRef<"Game", 'String'>
    readonly surface: FieldRef<"Game", 'String'>
    readonly weather: FieldRef<"Game", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game createManyAndReturn
   */
  export type GameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
  }

  /**
   * Game.plays
   */
  export type Game$playsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Play
     */
    select?: PlaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayInclude<ExtArgs> | null
    where?: PlayWhereInput
    orderBy?: PlayOrderByWithRelationInput | PlayOrderByWithRelationInput[]
    cursor?: PlayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayScalarFieldEnum | PlayScalarFieldEnum[]
  }

  /**
   * Game.playerGameStats
   */
  export type Game$playerGameStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerGameStat
     */
    select?: PlayerGameStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerGameStatInclude<ExtArgs> | null
    where?: PlayerGameStatWhereInput
    orderBy?: PlayerGameStatOrderByWithRelationInput | PlayerGameStatOrderByWithRelationInput[]
    cursor?: PlayerGameStatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerGameStatScalarFieldEnum | PlayerGameStatScalarFieldEnum[]
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
  }


  /**
   * Model WeeklyRoster
   */

  export type AggregateWeeklyRoster = {
    _count: WeeklyRosterCountAggregateOutputType | null
    _avg: WeeklyRosterAvgAggregateOutputType | null
    _sum: WeeklyRosterSumAggregateOutputType | null
    _min: WeeklyRosterMinAggregateOutputType | null
    _max: WeeklyRosterMaxAggregateOutputType | null
  }

  export type WeeklyRosterAvgAggregateOutputType = {
    id: number | null
    week: number | null
    season: number | null
    jerseyNumber: number | null
  }

  export type WeeklyRosterSumAggregateOutputType = {
    id: number | null
    week: number | null
    season: number | null
    jerseyNumber: number | null
  }

  export type WeeklyRosterMinAggregateOutputType = {
    id: number | null
    playerId: string | null
    week: number | null
    season: number | null
    team: string | null
    jerseyNumber: number | null
    position: string | null
  }

  export type WeeklyRosterMaxAggregateOutputType = {
    id: number | null
    playerId: string | null
    week: number | null
    season: number | null
    team: string | null
    jerseyNumber: number | null
    position: string | null
  }

  export type WeeklyRosterCountAggregateOutputType = {
    id: number
    playerId: number
    week: number
    season: number
    team: number
    jerseyNumber: number
    position: number
    _all: number
  }


  export type WeeklyRosterAvgAggregateInputType = {
    id?: true
    week?: true
    season?: true
    jerseyNumber?: true
  }

  export type WeeklyRosterSumAggregateInputType = {
    id?: true
    week?: true
    season?: true
    jerseyNumber?: true
  }

  export type WeeklyRosterMinAggregateInputType = {
    id?: true
    playerId?: true
    week?: true
    season?: true
    team?: true
    jerseyNumber?: true
    position?: true
  }

  export type WeeklyRosterMaxAggregateInputType = {
    id?: true
    playerId?: true
    week?: true
    season?: true
    team?: true
    jerseyNumber?: true
    position?: true
  }

  export type WeeklyRosterCountAggregateInputType = {
    id?: true
    playerId?: true
    week?: true
    season?: true
    team?: true
    jerseyNumber?: true
    position?: true
    _all?: true
  }

  export type WeeklyRosterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklyRoster to aggregate.
     */
    where?: WeeklyRosterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyRosters to fetch.
     */
    orderBy?: WeeklyRosterOrderByWithRelationInput | WeeklyRosterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeeklyRosterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyRosters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyRosters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeeklyRosters
    **/
    _count?: true | WeeklyRosterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeeklyRosterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeeklyRosterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeeklyRosterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeeklyRosterMaxAggregateInputType
  }

  export type GetWeeklyRosterAggregateType<T extends WeeklyRosterAggregateArgs> = {
        [P in keyof T & keyof AggregateWeeklyRoster]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeeklyRoster[P]>
      : GetScalarType<T[P], AggregateWeeklyRoster[P]>
  }




  export type WeeklyRosterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyRosterWhereInput
    orderBy?: WeeklyRosterOrderByWithAggregationInput | WeeklyRosterOrderByWithAggregationInput[]
    by: WeeklyRosterScalarFieldEnum[] | WeeklyRosterScalarFieldEnum
    having?: WeeklyRosterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeeklyRosterCountAggregateInputType | true
    _avg?: WeeklyRosterAvgAggregateInputType
    _sum?: WeeklyRosterSumAggregateInputType
    _min?: WeeklyRosterMinAggregateInputType
    _max?: WeeklyRosterMaxAggregateInputType
  }

  export type WeeklyRosterGroupByOutputType = {
    id: number
    playerId: string
    week: number
    season: number
    team: string
    jerseyNumber: number | null
    position: string | null
    _count: WeeklyRosterCountAggregateOutputType | null
    _avg: WeeklyRosterAvgAggregateOutputType | null
    _sum: WeeklyRosterSumAggregateOutputType | null
    _min: WeeklyRosterMinAggregateOutputType | null
    _max: WeeklyRosterMaxAggregateOutputType | null
  }

  type GetWeeklyRosterGroupByPayload<T extends WeeklyRosterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeeklyRosterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeeklyRosterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeeklyRosterGroupByOutputType[P]>
            : GetScalarType<T[P], WeeklyRosterGroupByOutputType[P]>
        }
      >
    >


  export type WeeklyRosterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    week?: boolean
    season?: boolean
    team?: boolean
    jerseyNumber?: boolean
    position?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    teamRel?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyRoster"]>

  export type WeeklyRosterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    week?: boolean
    season?: boolean
    team?: boolean
    jerseyNumber?: boolean
    position?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    teamRel?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyRoster"]>

  export type WeeklyRosterSelectScalar = {
    id?: boolean
    playerId?: boolean
    week?: boolean
    season?: boolean
    team?: boolean
    jerseyNumber?: boolean
    position?: boolean
  }

  export type WeeklyRosterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    teamRel?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type WeeklyRosterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    teamRel?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $WeeklyRosterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeeklyRoster"
    objects: {
      player: Prisma.$PlayerPayload<ExtArgs>
      teamRel: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      playerId: string
      week: number
      season: number
      team: string
      jerseyNumber: number | null
      position: string | null
    }, ExtArgs["result"]["weeklyRoster"]>
    composites: {}
  }

  type WeeklyRosterGetPayload<S extends boolean | null | undefined | WeeklyRosterDefaultArgs> = $Result.GetResult<Prisma.$WeeklyRosterPayload, S>

  type WeeklyRosterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WeeklyRosterFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WeeklyRosterCountAggregateInputType | true
    }

  export interface WeeklyRosterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeeklyRoster'], meta: { name: 'WeeklyRoster' } }
    /**
     * Find zero or one WeeklyRoster that matches the filter.
     * @param {WeeklyRosterFindUniqueArgs} args - Arguments to find a WeeklyRoster
     * @example
     * // Get one WeeklyRoster
     * const weeklyRoster = await prisma.weeklyRoster.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeeklyRosterFindUniqueArgs>(args: SelectSubset<T, WeeklyRosterFindUniqueArgs<ExtArgs>>): Prisma__WeeklyRosterClient<$Result.GetResult<Prisma.$WeeklyRosterPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WeeklyRoster that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WeeklyRosterFindUniqueOrThrowArgs} args - Arguments to find a WeeklyRoster
     * @example
     * // Get one WeeklyRoster
     * const weeklyRoster = await prisma.weeklyRoster.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeeklyRosterFindUniqueOrThrowArgs>(args: SelectSubset<T, WeeklyRosterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeeklyRosterClient<$Result.GetResult<Prisma.$WeeklyRosterPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WeeklyRoster that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyRosterFindFirstArgs} args - Arguments to find a WeeklyRoster
     * @example
     * // Get one WeeklyRoster
     * const weeklyRoster = await prisma.weeklyRoster.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeeklyRosterFindFirstArgs>(args?: SelectSubset<T, WeeklyRosterFindFirstArgs<ExtArgs>>): Prisma__WeeklyRosterClient<$Result.GetResult<Prisma.$WeeklyRosterPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WeeklyRoster that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyRosterFindFirstOrThrowArgs} args - Arguments to find a WeeklyRoster
     * @example
     * // Get one WeeklyRoster
     * const weeklyRoster = await prisma.weeklyRoster.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeeklyRosterFindFirstOrThrowArgs>(args?: SelectSubset<T, WeeklyRosterFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeeklyRosterClient<$Result.GetResult<Prisma.$WeeklyRosterPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WeeklyRosters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyRosterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeeklyRosters
     * const weeklyRosters = await prisma.weeklyRoster.findMany()
     * 
     * // Get first 10 WeeklyRosters
     * const weeklyRosters = await prisma.weeklyRoster.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weeklyRosterWithIdOnly = await prisma.weeklyRoster.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeeklyRosterFindManyArgs>(args?: SelectSubset<T, WeeklyRosterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyRosterPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WeeklyRoster.
     * @param {WeeklyRosterCreateArgs} args - Arguments to create a WeeklyRoster.
     * @example
     * // Create one WeeklyRoster
     * const WeeklyRoster = await prisma.weeklyRoster.create({
     *   data: {
     *     // ... data to create a WeeklyRoster
     *   }
     * })
     * 
     */
    create<T extends WeeklyRosterCreateArgs>(args: SelectSubset<T, WeeklyRosterCreateArgs<ExtArgs>>): Prisma__WeeklyRosterClient<$Result.GetResult<Prisma.$WeeklyRosterPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WeeklyRosters.
     * @param {WeeklyRosterCreateManyArgs} args - Arguments to create many WeeklyRosters.
     * @example
     * // Create many WeeklyRosters
     * const weeklyRoster = await prisma.weeklyRoster.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeeklyRosterCreateManyArgs>(args?: SelectSubset<T, WeeklyRosterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeeklyRosters and returns the data saved in the database.
     * @param {WeeklyRosterCreateManyAndReturnArgs} args - Arguments to create many WeeklyRosters.
     * @example
     * // Create many WeeklyRosters
     * const weeklyRoster = await prisma.weeklyRoster.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeeklyRosters and only return the `id`
     * const weeklyRosterWithIdOnly = await prisma.weeklyRoster.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeeklyRosterCreateManyAndReturnArgs>(args?: SelectSubset<T, WeeklyRosterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyRosterPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WeeklyRoster.
     * @param {WeeklyRosterDeleteArgs} args - Arguments to delete one WeeklyRoster.
     * @example
     * // Delete one WeeklyRoster
     * const WeeklyRoster = await prisma.weeklyRoster.delete({
     *   where: {
     *     // ... filter to delete one WeeklyRoster
     *   }
     * })
     * 
     */
    delete<T extends WeeklyRosterDeleteArgs>(args: SelectSubset<T, WeeklyRosterDeleteArgs<ExtArgs>>): Prisma__WeeklyRosterClient<$Result.GetResult<Prisma.$WeeklyRosterPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WeeklyRoster.
     * @param {WeeklyRosterUpdateArgs} args - Arguments to update one WeeklyRoster.
     * @example
     * // Update one WeeklyRoster
     * const weeklyRoster = await prisma.weeklyRoster.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeeklyRosterUpdateArgs>(args: SelectSubset<T, WeeklyRosterUpdateArgs<ExtArgs>>): Prisma__WeeklyRosterClient<$Result.GetResult<Prisma.$WeeklyRosterPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WeeklyRosters.
     * @param {WeeklyRosterDeleteManyArgs} args - Arguments to filter WeeklyRosters to delete.
     * @example
     * // Delete a few WeeklyRosters
     * const { count } = await prisma.weeklyRoster.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeeklyRosterDeleteManyArgs>(args?: SelectSubset<T, WeeklyRosterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklyRosters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyRosterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeeklyRosters
     * const weeklyRoster = await prisma.weeklyRoster.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeeklyRosterUpdateManyArgs>(args: SelectSubset<T, WeeklyRosterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WeeklyRoster.
     * @param {WeeklyRosterUpsertArgs} args - Arguments to update or create a WeeklyRoster.
     * @example
     * // Update or create a WeeklyRoster
     * const weeklyRoster = await prisma.weeklyRoster.upsert({
     *   create: {
     *     // ... data to create a WeeklyRoster
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeeklyRoster we want to update
     *   }
     * })
     */
    upsert<T extends WeeklyRosterUpsertArgs>(args: SelectSubset<T, WeeklyRosterUpsertArgs<ExtArgs>>): Prisma__WeeklyRosterClient<$Result.GetResult<Prisma.$WeeklyRosterPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WeeklyRosters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyRosterCountArgs} args - Arguments to filter WeeklyRosters to count.
     * @example
     * // Count the number of WeeklyRosters
     * const count = await prisma.weeklyRoster.count({
     *   where: {
     *     // ... the filter for the WeeklyRosters we want to count
     *   }
     * })
    **/
    count<T extends WeeklyRosterCountArgs>(
      args?: Subset<T, WeeklyRosterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeeklyRosterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeeklyRoster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyRosterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WeeklyRosterAggregateArgs>(args: Subset<T, WeeklyRosterAggregateArgs>): Prisma.PrismaPromise<GetWeeklyRosterAggregateType<T>>

    /**
     * Group by WeeklyRoster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyRosterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WeeklyRosterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeeklyRosterGroupByArgs['orderBy'] }
        : { orderBy?: WeeklyRosterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WeeklyRosterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeeklyRosterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeeklyRoster model
   */
  readonly fields: WeeklyRosterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeeklyRoster.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeeklyRosterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    teamRel<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WeeklyRoster model
   */ 
  interface WeeklyRosterFieldRefs {
    readonly id: FieldRef<"WeeklyRoster", 'Int'>
    readonly playerId: FieldRef<"WeeklyRoster", 'String'>
    readonly week: FieldRef<"WeeklyRoster", 'Int'>
    readonly season: FieldRef<"WeeklyRoster", 'Int'>
    readonly team: FieldRef<"WeeklyRoster", 'String'>
    readonly jerseyNumber: FieldRef<"WeeklyRoster", 'Int'>
    readonly position: FieldRef<"WeeklyRoster", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WeeklyRoster findUnique
   */
  export type WeeklyRosterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyRoster
     */
    select?: WeeklyRosterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyRosterInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyRoster to fetch.
     */
    where: WeeklyRosterWhereUniqueInput
  }

  /**
   * WeeklyRoster findUniqueOrThrow
   */
  export type WeeklyRosterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyRoster
     */
    select?: WeeklyRosterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyRosterInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyRoster to fetch.
     */
    where: WeeklyRosterWhereUniqueInput
  }

  /**
   * WeeklyRoster findFirst
   */
  export type WeeklyRosterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyRoster
     */
    select?: WeeklyRosterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyRosterInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyRoster to fetch.
     */
    where?: WeeklyRosterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyRosters to fetch.
     */
    orderBy?: WeeklyRosterOrderByWithRelationInput | WeeklyRosterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklyRosters.
     */
    cursor?: WeeklyRosterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyRosters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyRosters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyRosters.
     */
    distinct?: WeeklyRosterScalarFieldEnum | WeeklyRosterScalarFieldEnum[]
  }

  /**
   * WeeklyRoster findFirstOrThrow
   */
  export type WeeklyRosterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyRoster
     */
    select?: WeeklyRosterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyRosterInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyRoster to fetch.
     */
    where?: WeeklyRosterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyRosters to fetch.
     */
    orderBy?: WeeklyRosterOrderByWithRelationInput | WeeklyRosterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklyRosters.
     */
    cursor?: WeeklyRosterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyRosters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyRosters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyRosters.
     */
    distinct?: WeeklyRosterScalarFieldEnum | WeeklyRosterScalarFieldEnum[]
  }

  /**
   * WeeklyRoster findMany
   */
  export type WeeklyRosterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyRoster
     */
    select?: WeeklyRosterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyRosterInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyRosters to fetch.
     */
    where?: WeeklyRosterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyRosters to fetch.
     */
    orderBy?: WeeklyRosterOrderByWithRelationInput | WeeklyRosterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeeklyRosters.
     */
    cursor?: WeeklyRosterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyRosters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyRosters.
     */
    skip?: number
    distinct?: WeeklyRosterScalarFieldEnum | WeeklyRosterScalarFieldEnum[]
  }

  /**
   * WeeklyRoster create
   */
  export type WeeklyRosterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyRoster
     */
    select?: WeeklyRosterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyRosterInclude<ExtArgs> | null
    /**
     * The data needed to create a WeeklyRoster.
     */
    data: XOR<WeeklyRosterCreateInput, WeeklyRosterUncheckedCreateInput>
  }

  /**
   * WeeklyRoster createMany
   */
  export type WeeklyRosterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeeklyRosters.
     */
    data: WeeklyRosterCreateManyInput | WeeklyRosterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeeklyRoster createManyAndReturn
   */
  export type WeeklyRosterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyRoster
     */
    select?: WeeklyRosterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WeeklyRosters.
     */
    data: WeeklyRosterCreateManyInput | WeeklyRosterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyRosterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeeklyRoster update
   */
  export type WeeklyRosterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyRoster
     */
    select?: WeeklyRosterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyRosterInclude<ExtArgs> | null
    /**
     * The data needed to update a WeeklyRoster.
     */
    data: XOR<WeeklyRosterUpdateInput, WeeklyRosterUncheckedUpdateInput>
    /**
     * Choose, which WeeklyRoster to update.
     */
    where: WeeklyRosterWhereUniqueInput
  }

  /**
   * WeeklyRoster updateMany
   */
  export type WeeklyRosterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeeklyRosters.
     */
    data: XOR<WeeklyRosterUpdateManyMutationInput, WeeklyRosterUncheckedUpdateManyInput>
    /**
     * Filter which WeeklyRosters to update
     */
    where?: WeeklyRosterWhereInput
  }

  /**
   * WeeklyRoster upsert
   */
  export type WeeklyRosterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyRoster
     */
    select?: WeeklyRosterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyRosterInclude<ExtArgs> | null
    /**
     * The filter to search for the WeeklyRoster to update in case it exists.
     */
    where: WeeklyRosterWhereUniqueInput
    /**
     * In case the WeeklyRoster found by the `where` argument doesn't exist, create a new WeeklyRoster with this data.
     */
    create: XOR<WeeklyRosterCreateInput, WeeklyRosterUncheckedCreateInput>
    /**
     * In case the WeeklyRoster was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeeklyRosterUpdateInput, WeeklyRosterUncheckedUpdateInput>
  }

  /**
   * WeeklyRoster delete
   */
  export type WeeklyRosterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyRoster
     */
    select?: WeeklyRosterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyRosterInclude<ExtArgs> | null
    /**
     * Filter which WeeklyRoster to delete.
     */
    where: WeeklyRosterWhereUniqueInput
  }

  /**
   * WeeklyRoster deleteMany
   */
  export type WeeklyRosterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklyRosters to delete
     */
    where?: WeeklyRosterWhereInput
  }

  /**
   * WeeklyRoster without action
   */
  export type WeeklyRosterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyRoster
     */
    select?: WeeklyRosterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyRosterInclude<ExtArgs> | null
  }


  /**
   * Model PlayerGameStat
   */

  export type AggregatePlayerGameStat = {
    _count: PlayerGameStatCountAggregateOutputType | null
    _avg: PlayerGameStatAvgAggregateOutputType | null
    _sum: PlayerGameStatSumAggregateOutputType | null
    _min: PlayerGameStatMinAggregateOutputType | null
    _max: PlayerGameStatMaxAggregateOutputType | null
  }

  export type PlayerGameStatAvgAggregateOutputType = {
    id: number | null
    snaps: number | null
    snapShare: number | null
    fantasyPoints: number | null
    passAttempts: number | null
    completions: number | null
    passYards: number | null
    passTDs: number | null
    interceptions: number | null
    carries: number | null
    rushYards: number | null
    rushTDs: number | null
    targets: number | null
    receptions: number | null
    receivingYards: number | null
    receivingTDs: number | null
    airYards: number | null
    scrimmageYards: number | null
    totalTDs: number | null
    totalTouches: number | null
    opportunities: number | null
    evadedTackles: number | null
    yardsCreated: number | null
    yardsPerCarry: number | null
    yardsPerTarget: number | null
    yardsPerReception: number | null
  }

  export type PlayerGameStatSumAggregateOutputType = {
    id: number | null
    snaps: number | null
    snapShare: number | null
    fantasyPoints: number | null
    passAttempts: number | null
    completions: number | null
    passYards: number | null
    passTDs: number | null
    interceptions: number | null
    carries: number | null
    rushYards: number | null
    rushTDs: number | null
    targets: number | null
    receptions: number | null
    receivingYards: number | null
    receivingTDs: number | null
    airYards: number | null
    scrimmageYards: number | null
    totalTDs: number | null
    totalTouches: number | null
    opportunities: number | null
    evadedTackles: number | null
    yardsCreated: number | null
    yardsPerCarry: number | null
    yardsPerTarget: number | null
    yardsPerReception: number | null
  }

  export type PlayerGameStatMinAggregateOutputType = {
    id: number | null
    playerId: string | null
    gameKey: string | null
    team: string | null
    position: string | null
    snaps: number | null
    snapShare: number | null
    fantasyPoints: number | null
    passAttempts: number | null
    completions: number | null
    passYards: number | null
    passTDs: number | null
    interceptions: number | null
    carries: number | null
    rushYards: number | null
    rushTDs: number | null
    targets: number | null
    receptions: number | null
    receivingYards: number | null
    receivingTDs: number | null
    airYards: number | null
    scrimmageYards: number | null
    totalTDs: number | null
    totalTouches: number | null
    opportunities: number | null
    evadedTackles: number | null
    yardsCreated: number | null
    yardsPerCarry: number | null
    yardsPerTarget: number | null
    yardsPerReception: number | null
  }

  export type PlayerGameStatMaxAggregateOutputType = {
    id: number | null
    playerId: string | null
    gameKey: string | null
    team: string | null
    position: string | null
    snaps: number | null
    snapShare: number | null
    fantasyPoints: number | null
    passAttempts: number | null
    completions: number | null
    passYards: number | null
    passTDs: number | null
    interceptions: number | null
    carries: number | null
    rushYards: number | null
    rushTDs: number | null
    targets: number | null
    receptions: number | null
    receivingYards: number | null
    receivingTDs: number | null
    airYards: number | null
    scrimmageYards: number | null
    totalTDs: number | null
    totalTouches: number | null
    opportunities: number | null
    evadedTackles: number | null
    yardsCreated: number | null
    yardsPerCarry: number | null
    yardsPerTarget: number | null
    yardsPerReception: number | null
  }

  export type PlayerGameStatCountAggregateOutputType = {
    id: number
    playerId: number
    gameKey: number
    team: number
    position: number
    snaps: number
    snapShare: number
    fantasyPoints: number
    passAttempts: number
    completions: number
    passYards: number
    passTDs: number
    interceptions: number
    carries: number
    rushYards: number
    rushTDs: number
    targets: number
    receptions: number
    receivingYards: number
    receivingTDs: number
    airYards: number
    scrimmageYards: number
    totalTDs: number
    totalTouches: number
    opportunities: number
    evadedTackles: number
    yardsCreated: number
    yardsPerCarry: number
    yardsPerTarget: number
    yardsPerReception: number
    _all: number
  }


  export type PlayerGameStatAvgAggregateInputType = {
    id?: true
    snaps?: true
    snapShare?: true
    fantasyPoints?: true
    passAttempts?: true
    completions?: true
    passYards?: true
    passTDs?: true
    interceptions?: true
    carries?: true
    rushYards?: true
    rushTDs?: true
    targets?: true
    receptions?: true
    receivingYards?: true
    receivingTDs?: true
    airYards?: true
    scrimmageYards?: true
    totalTDs?: true
    totalTouches?: true
    opportunities?: true
    evadedTackles?: true
    yardsCreated?: true
    yardsPerCarry?: true
    yardsPerTarget?: true
    yardsPerReception?: true
  }

  export type PlayerGameStatSumAggregateInputType = {
    id?: true
    snaps?: true
    snapShare?: true
    fantasyPoints?: true
    passAttempts?: true
    completions?: true
    passYards?: true
    passTDs?: true
    interceptions?: true
    carries?: true
    rushYards?: true
    rushTDs?: true
    targets?: true
    receptions?: true
    receivingYards?: true
    receivingTDs?: true
    airYards?: true
    scrimmageYards?: true
    totalTDs?: true
    totalTouches?: true
    opportunities?: true
    evadedTackles?: true
    yardsCreated?: true
    yardsPerCarry?: true
    yardsPerTarget?: true
    yardsPerReception?: true
  }

  export type PlayerGameStatMinAggregateInputType = {
    id?: true
    playerId?: true
    gameKey?: true
    team?: true
    position?: true
    snaps?: true
    snapShare?: true
    fantasyPoints?: true
    passAttempts?: true
    completions?: true
    passYards?: true
    passTDs?: true
    interceptions?: true
    carries?: true
    rushYards?: true
    rushTDs?: true
    targets?: true
    receptions?: true
    receivingYards?: true
    receivingTDs?: true
    airYards?: true
    scrimmageYards?: true
    totalTDs?: true
    totalTouches?: true
    opportunities?: true
    evadedTackles?: true
    yardsCreated?: true
    yardsPerCarry?: true
    yardsPerTarget?: true
    yardsPerReception?: true
  }

  export type PlayerGameStatMaxAggregateInputType = {
    id?: true
    playerId?: true
    gameKey?: true
    team?: true
    position?: true
    snaps?: true
    snapShare?: true
    fantasyPoints?: true
    passAttempts?: true
    completions?: true
    passYards?: true
    passTDs?: true
    interceptions?: true
    carries?: true
    rushYards?: true
    rushTDs?: true
    targets?: true
    receptions?: true
    receivingYards?: true
    receivingTDs?: true
    airYards?: true
    scrimmageYards?: true
    totalTDs?: true
    totalTouches?: true
    opportunities?: true
    evadedTackles?: true
    yardsCreated?: true
    yardsPerCarry?: true
    yardsPerTarget?: true
    yardsPerReception?: true
  }

  export type PlayerGameStatCountAggregateInputType = {
    id?: true
    playerId?: true
    gameKey?: true
    team?: true
    position?: true
    snaps?: true
    snapShare?: true
    fantasyPoints?: true
    passAttempts?: true
    completions?: true
    passYards?: true
    passTDs?: true
    interceptions?: true
    carries?: true
    rushYards?: true
    rushTDs?: true
    targets?: true
    receptions?: true
    receivingYards?: true
    receivingTDs?: true
    airYards?: true
    scrimmageYards?: true
    totalTDs?: true
    totalTouches?: true
    opportunities?: true
    evadedTackles?: true
    yardsCreated?: true
    yardsPerCarry?: true
    yardsPerTarget?: true
    yardsPerReception?: true
    _all?: true
  }

  export type PlayerGameStatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerGameStat to aggregate.
     */
    where?: PlayerGameStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerGameStats to fetch.
     */
    orderBy?: PlayerGameStatOrderByWithRelationInput | PlayerGameStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerGameStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerGameStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerGameStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerGameStats
    **/
    _count?: true | PlayerGameStatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerGameStatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerGameStatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerGameStatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerGameStatMaxAggregateInputType
  }

  export type GetPlayerGameStatAggregateType<T extends PlayerGameStatAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerGameStat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerGameStat[P]>
      : GetScalarType<T[P], AggregatePlayerGameStat[P]>
  }




  export type PlayerGameStatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerGameStatWhereInput
    orderBy?: PlayerGameStatOrderByWithAggregationInput | PlayerGameStatOrderByWithAggregationInput[]
    by: PlayerGameStatScalarFieldEnum[] | PlayerGameStatScalarFieldEnum
    having?: PlayerGameStatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerGameStatCountAggregateInputType | true
    _avg?: PlayerGameStatAvgAggregateInputType
    _sum?: PlayerGameStatSumAggregateInputType
    _min?: PlayerGameStatMinAggregateInputType
    _max?: PlayerGameStatMaxAggregateInputType
  }

  export type PlayerGameStatGroupByOutputType = {
    id: number
    playerId: string
    gameKey: string
    team: string
    position: string | null
    snaps: number | null
    snapShare: number | null
    fantasyPoints: number | null
    passAttempts: number | null
    completions: number | null
    passYards: number | null
    passTDs: number | null
    interceptions: number | null
    carries: number | null
    rushYards: number | null
    rushTDs: number | null
    targets: number | null
    receptions: number | null
    receivingYards: number | null
    receivingTDs: number | null
    airYards: number | null
    scrimmageYards: number | null
    totalTDs: number | null
    totalTouches: number | null
    opportunities: number | null
    evadedTackles: number | null
    yardsCreated: number | null
    yardsPerCarry: number | null
    yardsPerTarget: number | null
    yardsPerReception: number | null
    _count: PlayerGameStatCountAggregateOutputType | null
    _avg: PlayerGameStatAvgAggregateOutputType | null
    _sum: PlayerGameStatSumAggregateOutputType | null
    _min: PlayerGameStatMinAggregateOutputType | null
    _max: PlayerGameStatMaxAggregateOutputType | null
  }

  type GetPlayerGameStatGroupByPayload<T extends PlayerGameStatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerGameStatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGameStatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGameStatGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGameStatGroupByOutputType[P]>
        }
      >
    >


  export type PlayerGameStatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    gameKey?: boolean
    team?: boolean
    position?: boolean
    snaps?: boolean
    snapShare?: boolean
    fantasyPoints?: boolean
    passAttempts?: boolean
    completions?: boolean
    passYards?: boolean
    passTDs?: boolean
    interceptions?: boolean
    carries?: boolean
    rushYards?: boolean
    rushTDs?: boolean
    targets?: boolean
    receptions?: boolean
    receivingYards?: boolean
    receivingTDs?: boolean
    airYards?: boolean
    scrimmageYards?: boolean
    totalTDs?: boolean
    totalTouches?: boolean
    opportunities?: boolean
    evadedTackles?: boolean
    yardsCreated?: boolean
    yardsPerCarry?: boolean
    yardsPerTarget?: boolean
    yardsPerReception?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
    teamRel?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerGameStat"]>

  export type PlayerGameStatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    gameKey?: boolean
    team?: boolean
    position?: boolean
    snaps?: boolean
    snapShare?: boolean
    fantasyPoints?: boolean
    passAttempts?: boolean
    completions?: boolean
    passYards?: boolean
    passTDs?: boolean
    interceptions?: boolean
    carries?: boolean
    rushYards?: boolean
    rushTDs?: boolean
    targets?: boolean
    receptions?: boolean
    receivingYards?: boolean
    receivingTDs?: boolean
    airYards?: boolean
    scrimmageYards?: boolean
    totalTDs?: boolean
    totalTouches?: boolean
    opportunities?: boolean
    evadedTackles?: boolean
    yardsCreated?: boolean
    yardsPerCarry?: boolean
    yardsPerTarget?: boolean
    yardsPerReception?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
    teamRel?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerGameStat"]>

  export type PlayerGameStatSelectScalar = {
    id?: boolean
    playerId?: boolean
    gameKey?: boolean
    team?: boolean
    position?: boolean
    snaps?: boolean
    snapShare?: boolean
    fantasyPoints?: boolean
    passAttempts?: boolean
    completions?: boolean
    passYards?: boolean
    passTDs?: boolean
    interceptions?: boolean
    carries?: boolean
    rushYards?: boolean
    rushTDs?: boolean
    targets?: boolean
    receptions?: boolean
    receivingYards?: boolean
    receivingTDs?: boolean
    airYards?: boolean
    scrimmageYards?: boolean
    totalTDs?: boolean
    totalTouches?: boolean
    opportunities?: boolean
    evadedTackles?: boolean
    yardsCreated?: boolean
    yardsPerCarry?: boolean
    yardsPerTarget?: boolean
    yardsPerReception?: boolean
  }

  export type PlayerGameStatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
    teamRel?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type PlayerGameStatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
    teamRel?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $PlayerGameStatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerGameStat"
    objects: {
      player: Prisma.$PlayerPayload<ExtArgs>
      game: Prisma.$GamePayload<ExtArgs>
      teamRel: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      playerId: string
      gameKey: string
      team: string
      position: string | null
      snaps: number | null
      snapShare: number | null
      fantasyPoints: number | null
      passAttempts: number | null
      completions: number | null
      passYards: number | null
      passTDs: number | null
      interceptions: number | null
      carries: number | null
      rushYards: number | null
      rushTDs: number | null
      targets: number | null
      receptions: number | null
      receivingYards: number | null
      receivingTDs: number | null
      airYards: number | null
      scrimmageYards: number | null
      totalTDs: number | null
      totalTouches: number | null
      opportunities: number | null
      evadedTackles: number | null
      yardsCreated: number | null
      yardsPerCarry: number | null
      yardsPerTarget: number | null
      yardsPerReception: number | null
    }, ExtArgs["result"]["playerGameStat"]>
    composites: {}
  }

  type PlayerGameStatGetPayload<S extends boolean | null | undefined | PlayerGameStatDefaultArgs> = $Result.GetResult<Prisma.$PlayerGameStatPayload, S>

  type PlayerGameStatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlayerGameStatFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlayerGameStatCountAggregateInputType | true
    }

  export interface PlayerGameStatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerGameStat'], meta: { name: 'PlayerGameStat' } }
    /**
     * Find zero or one PlayerGameStat that matches the filter.
     * @param {PlayerGameStatFindUniqueArgs} args - Arguments to find a PlayerGameStat
     * @example
     * // Get one PlayerGameStat
     * const playerGameStat = await prisma.playerGameStat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerGameStatFindUniqueArgs>(args: SelectSubset<T, PlayerGameStatFindUniqueArgs<ExtArgs>>): Prisma__PlayerGameStatClient<$Result.GetResult<Prisma.$PlayerGameStatPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PlayerGameStat that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PlayerGameStatFindUniqueOrThrowArgs} args - Arguments to find a PlayerGameStat
     * @example
     * // Get one PlayerGameStat
     * const playerGameStat = await prisma.playerGameStat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerGameStatFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerGameStatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerGameStatClient<$Result.GetResult<Prisma.$PlayerGameStatPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PlayerGameStat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGameStatFindFirstArgs} args - Arguments to find a PlayerGameStat
     * @example
     * // Get one PlayerGameStat
     * const playerGameStat = await prisma.playerGameStat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerGameStatFindFirstArgs>(args?: SelectSubset<T, PlayerGameStatFindFirstArgs<ExtArgs>>): Prisma__PlayerGameStatClient<$Result.GetResult<Prisma.$PlayerGameStatPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PlayerGameStat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGameStatFindFirstOrThrowArgs} args - Arguments to find a PlayerGameStat
     * @example
     * // Get one PlayerGameStat
     * const playerGameStat = await prisma.playerGameStat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerGameStatFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerGameStatFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerGameStatClient<$Result.GetResult<Prisma.$PlayerGameStatPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PlayerGameStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGameStatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerGameStats
     * const playerGameStats = await prisma.playerGameStat.findMany()
     * 
     * // Get first 10 PlayerGameStats
     * const playerGameStats = await prisma.playerGameStat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerGameStatWithIdOnly = await prisma.playerGameStat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerGameStatFindManyArgs>(args?: SelectSubset<T, PlayerGameStatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerGameStatPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PlayerGameStat.
     * @param {PlayerGameStatCreateArgs} args - Arguments to create a PlayerGameStat.
     * @example
     * // Create one PlayerGameStat
     * const PlayerGameStat = await prisma.playerGameStat.create({
     *   data: {
     *     // ... data to create a PlayerGameStat
     *   }
     * })
     * 
     */
    create<T extends PlayerGameStatCreateArgs>(args: SelectSubset<T, PlayerGameStatCreateArgs<ExtArgs>>): Prisma__PlayerGameStatClient<$Result.GetResult<Prisma.$PlayerGameStatPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PlayerGameStats.
     * @param {PlayerGameStatCreateManyArgs} args - Arguments to create many PlayerGameStats.
     * @example
     * // Create many PlayerGameStats
     * const playerGameStat = await prisma.playerGameStat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerGameStatCreateManyArgs>(args?: SelectSubset<T, PlayerGameStatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayerGameStats and returns the data saved in the database.
     * @param {PlayerGameStatCreateManyAndReturnArgs} args - Arguments to create many PlayerGameStats.
     * @example
     * // Create many PlayerGameStats
     * const playerGameStat = await prisma.playerGameStat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayerGameStats and only return the `id`
     * const playerGameStatWithIdOnly = await prisma.playerGameStat.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerGameStatCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerGameStatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerGameStatPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PlayerGameStat.
     * @param {PlayerGameStatDeleteArgs} args - Arguments to delete one PlayerGameStat.
     * @example
     * // Delete one PlayerGameStat
     * const PlayerGameStat = await prisma.playerGameStat.delete({
     *   where: {
     *     // ... filter to delete one PlayerGameStat
     *   }
     * })
     * 
     */
    delete<T extends PlayerGameStatDeleteArgs>(args: SelectSubset<T, PlayerGameStatDeleteArgs<ExtArgs>>): Prisma__PlayerGameStatClient<$Result.GetResult<Prisma.$PlayerGameStatPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PlayerGameStat.
     * @param {PlayerGameStatUpdateArgs} args - Arguments to update one PlayerGameStat.
     * @example
     * // Update one PlayerGameStat
     * const playerGameStat = await prisma.playerGameStat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerGameStatUpdateArgs>(args: SelectSubset<T, PlayerGameStatUpdateArgs<ExtArgs>>): Prisma__PlayerGameStatClient<$Result.GetResult<Prisma.$PlayerGameStatPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PlayerGameStats.
     * @param {PlayerGameStatDeleteManyArgs} args - Arguments to filter PlayerGameStats to delete.
     * @example
     * // Delete a few PlayerGameStats
     * const { count } = await prisma.playerGameStat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerGameStatDeleteManyArgs>(args?: SelectSubset<T, PlayerGameStatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerGameStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGameStatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerGameStats
     * const playerGameStat = await prisma.playerGameStat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerGameStatUpdateManyArgs>(args: SelectSubset<T, PlayerGameStatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlayerGameStat.
     * @param {PlayerGameStatUpsertArgs} args - Arguments to update or create a PlayerGameStat.
     * @example
     * // Update or create a PlayerGameStat
     * const playerGameStat = await prisma.playerGameStat.upsert({
     *   create: {
     *     // ... data to create a PlayerGameStat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerGameStat we want to update
     *   }
     * })
     */
    upsert<T extends PlayerGameStatUpsertArgs>(args: SelectSubset<T, PlayerGameStatUpsertArgs<ExtArgs>>): Prisma__PlayerGameStatClient<$Result.GetResult<Prisma.$PlayerGameStatPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PlayerGameStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGameStatCountArgs} args - Arguments to filter PlayerGameStats to count.
     * @example
     * // Count the number of PlayerGameStats
     * const count = await prisma.playerGameStat.count({
     *   where: {
     *     // ... the filter for the PlayerGameStats we want to count
     *   }
     * })
    **/
    count<T extends PlayerGameStatCountArgs>(
      args?: Subset<T, PlayerGameStatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerGameStatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerGameStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGameStatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerGameStatAggregateArgs>(args: Subset<T, PlayerGameStatAggregateArgs>): Prisma.PrismaPromise<GetPlayerGameStatAggregateType<T>>

    /**
     * Group by PlayerGameStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGameStatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerGameStatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerGameStatGroupByArgs['orderBy'] }
        : { orderBy?: PlayerGameStatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerGameStatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGameStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerGameStat model
   */
  readonly fields: PlayerGameStatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerGameStat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerGameStatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    teamRel<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlayerGameStat model
   */ 
  interface PlayerGameStatFieldRefs {
    readonly id: FieldRef<"PlayerGameStat", 'Int'>
    readonly playerId: FieldRef<"PlayerGameStat", 'String'>
    readonly gameKey: FieldRef<"PlayerGameStat", 'String'>
    readonly team: FieldRef<"PlayerGameStat", 'String'>
    readonly position: FieldRef<"PlayerGameStat", 'String'>
    readonly snaps: FieldRef<"PlayerGameStat", 'Int'>
    readonly snapShare: FieldRef<"PlayerGameStat", 'Float'>
    readonly fantasyPoints: FieldRef<"PlayerGameStat", 'Float'>
    readonly passAttempts: FieldRef<"PlayerGameStat", 'Int'>
    readonly completions: FieldRef<"PlayerGameStat", 'Int'>
    readonly passYards: FieldRef<"PlayerGameStat", 'Int'>
    readonly passTDs: FieldRef<"PlayerGameStat", 'Int'>
    readonly interceptions: FieldRef<"PlayerGameStat", 'Int'>
    readonly carries: FieldRef<"PlayerGameStat", 'Int'>
    readonly rushYards: FieldRef<"PlayerGameStat", 'Int'>
    readonly rushTDs: FieldRef<"PlayerGameStat", 'Int'>
    readonly targets: FieldRef<"PlayerGameStat", 'Int'>
    readonly receptions: FieldRef<"PlayerGameStat", 'Int'>
    readonly receivingYards: FieldRef<"PlayerGameStat", 'Int'>
    readonly receivingTDs: FieldRef<"PlayerGameStat", 'Int'>
    readonly airYards: FieldRef<"PlayerGameStat", 'Int'>
    readonly scrimmageYards: FieldRef<"PlayerGameStat", 'Int'>
    readonly totalTDs: FieldRef<"PlayerGameStat", 'Int'>
    readonly totalTouches: FieldRef<"PlayerGameStat", 'Int'>
    readonly opportunities: FieldRef<"PlayerGameStat", 'Int'>
    readonly evadedTackles: FieldRef<"PlayerGameStat", 'Int'>
    readonly yardsCreated: FieldRef<"PlayerGameStat", 'Int'>
    readonly yardsPerCarry: FieldRef<"PlayerGameStat", 'Float'>
    readonly yardsPerTarget: FieldRef<"PlayerGameStat", 'Float'>
    readonly yardsPerReception: FieldRef<"PlayerGameStat", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * PlayerGameStat findUnique
   */
  export type PlayerGameStatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerGameStat
     */
    select?: PlayerGameStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerGameStatInclude<ExtArgs> | null
    /**
     * Filter, which PlayerGameStat to fetch.
     */
    where: PlayerGameStatWhereUniqueInput
  }

  /**
   * PlayerGameStat findUniqueOrThrow
   */
  export type PlayerGameStatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerGameStat
     */
    select?: PlayerGameStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerGameStatInclude<ExtArgs> | null
    /**
     * Filter, which PlayerGameStat to fetch.
     */
    where: PlayerGameStatWhereUniqueInput
  }

  /**
   * PlayerGameStat findFirst
   */
  export type PlayerGameStatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerGameStat
     */
    select?: PlayerGameStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerGameStatInclude<ExtArgs> | null
    /**
     * Filter, which PlayerGameStat to fetch.
     */
    where?: PlayerGameStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerGameStats to fetch.
     */
    orderBy?: PlayerGameStatOrderByWithRelationInput | PlayerGameStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerGameStats.
     */
    cursor?: PlayerGameStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerGameStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerGameStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerGameStats.
     */
    distinct?: PlayerGameStatScalarFieldEnum | PlayerGameStatScalarFieldEnum[]
  }

  /**
   * PlayerGameStat findFirstOrThrow
   */
  export type PlayerGameStatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerGameStat
     */
    select?: PlayerGameStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerGameStatInclude<ExtArgs> | null
    /**
     * Filter, which PlayerGameStat to fetch.
     */
    where?: PlayerGameStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerGameStats to fetch.
     */
    orderBy?: PlayerGameStatOrderByWithRelationInput | PlayerGameStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerGameStats.
     */
    cursor?: PlayerGameStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerGameStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerGameStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerGameStats.
     */
    distinct?: PlayerGameStatScalarFieldEnum | PlayerGameStatScalarFieldEnum[]
  }

  /**
   * PlayerGameStat findMany
   */
  export type PlayerGameStatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerGameStat
     */
    select?: PlayerGameStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerGameStatInclude<ExtArgs> | null
    /**
     * Filter, which PlayerGameStats to fetch.
     */
    where?: PlayerGameStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerGameStats to fetch.
     */
    orderBy?: PlayerGameStatOrderByWithRelationInput | PlayerGameStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerGameStats.
     */
    cursor?: PlayerGameStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerGameStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerGameStats.
     */
    skip?: number
    distinct?: PlayerGameStatScalarFieldEnum | PlayerGameStatScalarFieldEnum[]
  }

  /**
   * PlayerGameStat create
   */
  export type PlayerGameStatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerGameStat
     */
    select?: PlayerGameStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerGameStatInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayerGameStat.
     */
    data: XOR<PlayerGameStatCreateInput, PlayerGameStatUncheckedCreateInput>
  }

  /**
   * PlayerGameStat createMany
   */
  export type PlayerGameStatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerGameStats.
     */
    data: PlayerGameStatCreateManyInput | PlayerGameStatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerGameStat createManyAndReturn
   */
  export type PlayerGameStatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerGameStat
     */
    select?: PlayerGameStatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PlayerGameStats.
     */
    data: PlayerGameStatCreateManyInput | PlayerGameStatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerGameStatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerGameStat update
   */
  export type PlayerGameStatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerGameStat
     */
    select?: PlayerGameStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerGameStatInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayerGameStat.
     */
    data: XOR<PlayerGameStatUpdateInput, PlayerGameStatUncheckedUpdateInput>
    /**
     * Choose, which PlayerGameStat to update.
     */
    where: PlayerGameStatWhereUniqueInput
  }

  /**
   * PlayerGameStat updateMany
   */
  export type PlayerGameStatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerGameStats.
     */
    data: XOR<PlayerGameStatUpdateManyMutationInput, PlayerGameStatUncheckedUpdateManyInput>
    /**
     * Filter which PlayerGameStats to update
     */
    where?: PlayerGameStatWhereInput
  }

  /**
   * PlayerGameStat upsert
   */
  export type PlayerGameStatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerGameStat
     */
    select?: PlayerGameStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerGameStatInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayerGameStat to update in case it exists.
     */
    where: PlayerGameStatWhereUniqueInput
    /**
     * In case the PlayerGameStat found by the `where` argument doesn't exist, create a new PlayerGameStat with this data.
     */
    create: XOR<PlayerGameStatCreateInput, PlayerGameStatUncheckedCreateInput>
    /**
     * In case the PlayerGameStat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerGameStatUpdateInput, PlayerGameStatUncheckedUpdateInput>
  }

  /**
   * PlayerGameStat delete
   */
  export type PlayerGameStatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerGameStat
     */
    select?: PlayerGameStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerGameStatInclude<ExtArgs> | null
    /**
     * Filter which PlayerGameStat to delete.
     */
    where: PlayerGameStatWhereUniqueInput
  }

  /**
   * PlayerGameStat deleteMany
   */
  export type PlayerGameStatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerGameStats to delete
     */
    where?: PlayerGameStatWhereInput
  }

  /**
   * PlayerGameStat without action
   */
  export type PlayerGameStatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerGameStat
     */
    select?: PlayerGameStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerGameStatInclude<ExtArgs> | null
  }


  /**
   * Model Play
   */

  export type AggregatePlay = {
    _count: PlayCountAggregateOutputType | null
    _avg: PlayAvgAggregateOutputType | null
    _sum: PlaySumAggregateOutputType | null
    _min: PlayMinAggregateOutputType | null
    _max: PlayMaxAggregateOutputType | null
  }

  export type PlayAvgAggregateOutputType = {
    week: number | null
    quarter: number | null
    minutes: number | null
    seconds: number | null
    down: number | null
    yardsToGo: number | null
    yardsGained: number | null
  }

  export type PlaySumAggregateOutputType = {
    week: number | null
    quarter: number | null
    minutes: number | null
    seconds: number | null
    down: number | null
    yardsToGo: number | null
    yardsGained: number | null
  }

  export type PlayMinAggregateOutputType = {
    id: string | null
    gameKey: string | null
    week: number | null
    quarter: number | null
    minutes: number | null
    seconds: number | null
    down: number | null
    yardsToGo: number | null
    offTeam: string | null
    defTeam: string | null
    playType: string | null
    yardsGained: number | null
    isFirstDown: boolean | null
    redZone: boolean | null
    passPlay: boolean | null
    runPlay: boolean | null
    touchdown: boolean | null
    turnover: boolean | null
  }

  export type PlayMaxAggregateOutputType = {
    id: string | null
    gameKey: string | null
    week: number | null
    quarter: number | null
    minutes: number | null
    seconds: number | null
    down: number | null
    yardsToGo: number | null
    offTeam: string | null
    defTeam: string | null
    playType: string | null
    yardsGained: number | null
    isFirstDown: boolean | null
    redZone: boolean | null
    passPlay: boolean | null
    runPlay: boolean | null
    touchdown: boolean | null
    turnover: boolean | null
  }

  export type PlayCountAggregateOutputType = {
    id: number
    gameKey: number
    week: number
    quarter: number
    minutes: number
    seconds: number
    down: number
    yardsToGo: number
    offTeam: number
    defTeam: number
    playType: number
    yardsGained: number
    isFirstDown: number
    redZone: number
    passPlay: number
    runPlay: number
    touchdown: number
    turnover: number
    _all: number
  }


  export type PlayAvgAggregateInputType = {
    week?: true
    quarter?: true
    minutes?: true
    seconds?: true
    down?: true
    yardsToGo?: true
    yardsGained?: true
  }

  export type PlaySumAggregateInputType = {
    week?: true
    quarter?: true
    minutes?: true
    seconds?: true
    down?: true
    yardsToGo?: true
    yardsGained?: true
  }

  export type PlayMinAggregateInputType = {
    id?: true
    gameKey?: true
    week?: true
    quarter?: true
    minutes?: true
    seconds?: true
    down?: true
    yardsToGo?: true
    offTeam?: true
    defTeam?: true
    playType?: true
    yardsGained?: true
    isFirstDown?: true
    redZone?: true
    passPlay?: true
    runPlay?: true
    touchdown?: true
    turnover?: true
  }

  export type PlayMaxAggregateInputType = {
    id?: true
    gameKey?: true
    week?: true
    quarter?: true
    minutes?: true
    seconds?: true
    down?: true
    yardsToGo?: true
    offTeam?: true
    defTeam?: true
    playType?: true
    yardsGained?: true
    isFirstDown?: true
    redZone?: true
    passPlay?: true
    runPlay?: true
    touchdown?: true
    turnover?: true
  }

  export type PlayCountAggregateInputType = {
    id?: true
    gameKey?: true
    week?: true
    quarter?: true
    minutes?: true
    seconds?: true
    down?: true
    yardsToGo?: true
    offTeam?: true
    defTeam?: true
    playType?: true
    yardsGained?: true
    isFirstDown?: true
    redZone?: true
    passPlay?: true
    runPlay?: true
    touchdown?: true
    turnover?: true
    _all?: true
  }

  export type PlayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Play to aggregate.
     */
    where?: PlayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plays to fetch.
     */
    orderBy?: PlayOrderByWithRelationInput | PlayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plays
    **/
    _count?: true | PlayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayMaxAggregateInputType
  }

  export type GetPlayAggregateType<T extends PlayAggregateArgs> = {
        [P in keyof T & keyof AggregatePlay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlay[P]>
      : GetScalarType<T[P], AggregatePlay[P]>
  }




  export type PlayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayWhereInput
    orderBy?: PlayOrderByWithAggregationInput | PlayOrderByWithAggregationInput[]
    by: PlayScalarFieldEnum[] | PlayScalarFieldEnum
    having?: PlayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayCountAggregateInputType | true
    _avg?: PlayAvgAggregateInputType
    _sum?: PlaySumAggregateInputType
    _min?: PlayMinAggregateInputType
    _max?: PlayMaxAggregateInputType
  }

  export type PlayGroupByOutputType = {
    id: string
    gameKey: string
    week: number
    quarter: number | null
    minutes: number | null
    seconds: number | null
    down: number | null
    yardsToGo: number | null
    offTeam: string
    defTeam: string
    playType: string | null
    yardsGained: number | null
    isFirstDown: boolean | null
    redZone: boolean | null
    passPlay: boolean | null
    runPlay: boolean | null
    touchdown: boolean | null
    turnover: boolean | null
    _count: PlayCountAggregateOutputType | null
    _avg: PlayAvgAggregateOutputType | null
    _sum: PlaySumAggregateOutputType | null
    _min: PlayMinAggregateOutputType | null
    _max: PlayMaxAggregateOutputType | null
  }

  type GetPlayGroupByPayload<T extends PlayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayGroupByOutputType[P]>
            : GetScalarType<T[P], PlayGroupByOutputType[P]>
        }
      >
    >


  export type PlaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameKey?: boolean
    week?: boolean
    quarter?: boolean
    minutes?: boolean
    seconds?: boolean
    down?: boolean
    yardsToGo?: boolean
    offTeam?: boolean
    defTeam?: boolean
    playType?: boolean
    yardsGained?: boolean
    isFirstDown?: boolean
    redZone?: boolean
    passPlay?: boolean
    runPlay?: boolean
    touchdown?: boolean
    turnover?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    offTeamRel?: boolean | TeamDefaultArgs<ExtArgs>
    defTeamRel?: boolean | TeamDefaultArgs<ExtArgs>
    playPlayers?: boolean | Play$playPlayersArgs<ExtArgs>
    _count?: boolean | PlayCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["play"]>

  export type PlaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameKey?: boolean
    week?: boolean
    quarter?: boolean
    minutes?: boolean
    seconds?: boolean
    down?: boolean
    yardsToGo?: boolean
    offTeam?: boolean
    defTeam?: boolean
    playType?: boolean
    yardsGained?: boolean
    isFirstDown?: boolean
    redZone?: boolean
    passPlay?: boolean
    runPlay?: boolean
    touchdown?: boolean
    turnover?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    offTeamRel?: boolean | TeamDefaultArgs<ExtArgs>
    defTeamRel?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["play"]>

  export type PlaySelectScalar = {
    id?: boolean
    gameKey?: boolean
    week?: boolean
    quarter?: boolean
    minutes?: boolean
    seconds?: boolean
    down?: boolean
    yardsToGo?: boolean
    offTeam?: boolean
    defTeam?: boolean
    playType?: boolean
    yardsGained?: boolean
    isFirstDown?: boolean
    redZone?: boolean
    passPlay?: boolean
    runPlay?: boolean
    touchdown?: boolean
    turnover?: boolean
  }

  export type PlayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    offTeamRel?: boolean | TeamDefaultArgs<ExtArgs>
    defTeamRel?: boolean | TeamDefaultArgs<ExtArgs>
    playPlayers?: boolean | Play$playPlayersArgs<ExtArgs>
    _count?: boolean | PlayCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    offTeamRel?: boolean | TeamDefaultArgs<ExtArgs>
    defTeamRel?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $PlayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Play"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
      offTeamRel: Prisma.$TeamPayload<ExtArgs>
      defTeamRel: Prisma.$TeamPayload<ExtArgs>
      playPlayers: Prisma.$PlayPlayerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameKey: string
      week: number
      quarter: number | null
      minutes: number | null
      seconds: number | null
      down: number | null
      yardsToGo: number | null
      offTeam: string
      defTeam: string
      playType: string | null
      yardsGained: number | null
      isFirstDown: boolean | null
      redZone: boolean | null
      passPlay: boolean | null
      runPlay: boolean | null
      touchdown: boolean | null
      turnover: boolean | null
    }, ExtArgs["result"]["play"]>
    composites: {}
  }

  type PlayGetPayload<S extends boolean | null | undefined | PlayDefaultArgs> = $Result.GetResult<Prisma.$PlayPayload, S>

  type PlayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlayFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlayCountAggregateInputType | true
    }

  export interface PlayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Play'], meta: { name: 'Play' } }
    /**
     * Find zero or one Play that matches the filter.
     * @param {PlayFindUniqueArgs} args - Arguments to find a Play
     * @example
     * // Get one Play
     * const play = await prisma.play.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayFindUniqueArgs>(args: SelectSubset<T, PlayFindUniqueArgs<ExtArgs>>): Prisma__PlayClient<$Result.GetResult<Prisma.$PlayPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Play that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PlayFindUniqueOrThrowArgs} args - Arguments to find a Play
     * @example
     * // Get one Play
     * const play = await prisma.play.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayClient<$Result.GetResult<Prisma.$PlayPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Play that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayFindFirstArgs} args - Arguments to find a Play
     * @example
     * // Get one Play
     * const play = await prisma.play.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayFindFirstArgs>(args?: SelectSubset<T, PlayFindFirstArgs<ExtArgs>>): Prisma__PlayClient<$Result.GetResult<Prisma.$PlayPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Play that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayFindFirstOrThrowArgs} args - Arguments to find a Play
     * @example
     * // Get one Play
     * const play = await prisma.play.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayClient<$Result.GetResult<Prisma.$PlayPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Plays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plays
     * const plays = await prisma.play.findMany()
     * 
     * // Get first 10 Plays
     * const plays = await prisma.play.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playWithIdOnly = await prisma.play.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayFindManyArgs>(args?: SelectSubset<T, PlayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Play.
     * @param {PlayCreateArgs} args - Arguments to create a Play.
     * @example
     * // Create one Play
     * const Play = await prisma.play.create({
     *   data: {
     *     // ... data to create a Play
     *   }
     * })
     * 
     */
    create<T extends PlayCreateArgs>(args: SelectSubset<T, PlayCreateArgs<ExtArgs>>): Prisma__PlayClient<$Result.GetResult<Prisma.$PlayPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Plays.
     * @param {PlayCreateManyArgs} args - Arguments to create many Plays.
     * @example
     * // Create many Plays
     * const play = await prisma.play.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayCreateManyArgs>(args?: SelectSubset<T, PlayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plays and returns the data saved in the database.
     * @param {PlayCreateManyAndReturnArgs} args - Arguments to create many Plays.
     * @example
     * // Create many Plays
     * const play = await prisma.play.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plays and only return the `id`
     * const playWithIdOnly = await prisma.play.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Play.
     * @param {PlayDeleteArgs} args - Arguments to delete one Play.
     * @example
     * // Delete one Play
     * const Play = await prisma.play.delete({
     *   where: {
     *     // ... filter to delete one Play
     *   }
     * })
     * 
     */
    delete<T extends PlayDeleteArgs>(args: SelectSubset<T, PlayDeleteArgs<ExtArgs>>): Prisma__PlayClient<$Result.GetResult<Prisma.$PlayPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Play.
     * @param {PlayUpdateArgs} args - Arguments to update one Play.
     * @example
     * // Update one Play
     * const play = await prisma.play.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayUpdateArgs>(args: SelectSubset<T, PlayUpdateArgs<ExtArgs>>): Prisma__PlayClient<$Result.GetResult<Prisma.$PlayPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Plays.
     * @param {PlayDeleteManyArgs} args - Arguments to filter Plays to delete.
     * @example
     * // Delete a few Plays
     * const { count } = await prisma.play.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayDeleteManyArgs>(args?: SelectSubset<T, PlayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plays
     * const play = await prisma.play.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayUpdateManyArgs>(args: SelectSubset<T, PlayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Play.
     * @param {PlayUpsertArgs} args - Arguments to update or create a Play.
     * @example
     * // Update or create a Play
     * const play = await prisma.play.upsert({
     *   create: {
     *     // ... data to create a Play
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Play we want to update
     *   }
     * })
     */
    upsert<T extends PlayUpsertArgs>(args: SelectSubset<T, PlayUpsertArgs<ExtArgs>>): Prisma__PlayClient<$Result.GetResult<Prisma.$PlayPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Plays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayCountArgs} args - Arguments to filter Plays to count.
     * @example
     * // Count the number of Plays
     * const count = await prisma.play.count({
     *   where: {
     *     // ... the filter for the Plays we want to count
     *   }
     * })
    **/
    count<T extends PlayCountArgs>(
      args?: Subset<T, PlayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Play.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayAggregateArgs>(args: Subset<T, PlayAggregateArgs>): Prisma.PrismaPromise<GetPlayAggregateType<T>>

    /**
     * Group by Play.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayGroupByArgs['orderBy'] }
        : { orderBy?: PlayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Play model
   */
  readonly fields: PlayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Play.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    offTeamRel<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    defTeamRel<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    playPlayers<T extends Play$playPlayersArgs<ExtArgs> = {}>(args?: Subset<T, Play$playPlayersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayPlayerPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Play model
   */ 
  interface PlayFieldRefs {
    readonly id: FieldRef<"Play", 'String'>
    readonly gameKey: FieldRef<"Play", 'String'>
    readonly week: FieldRef<"Play", 'Int'>
    readonly quarter: FieldRef<"Play", 'Int'>
    readonly minutes: FieldRef<"Play", 'Int'>
    readonly seconds: FieldRef<"Play", 'Int'>
    readonly down: FieldRef<"Play", 'Int'>
    readonly yardsToGo: FieldRef<"Play", 'Int'>
    readonly offTeam: FieldRef<"Play", 'String'>
    readonly defTeam: FieldRef<"Play", 'String'>
    readonly playType: FieldRef<"Play", 'String'>
    readonly yardsGained: FieldRef<"Play", 'Int'>
    readonly isFirstDown: FieldRef<"Play", 'Boolean'>
    readonly redZone: FieldRef<"Play", 'Boolean'>
    readonly passPlay: FieldRef<"Play", 'Boolean'>
    readonly runPlay: FieldRef<"Play", 'Boolean'>
    readonly touchdown: FieldRef<"Play", 'Boolean'>
    readonly turnover: FieldRef<"Play", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Play findUnique
   */
  export type PlayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Play
     */
    select?: PlaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayInclude<ExtArgs> | null
    /**
     * Filter, which Play to fetch.
     */
    where: PlayWhereUniqueInput
  }

  /**
   * Play findUniqueOrThrow
   */
  export type PlayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Play
     */
    select?: PlaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayInclude<ExtArgs> | null
    /**
     * Filter, which Play to fetch.
     */
    where: PlayWhereUniqueInput
  }

  /**
   * Play findFirst
   */
  export type PlayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Play
     */
    select?: PlaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayInclude<ExtArgs> | null
    /**
     * Filter, which Play to fetch.
     */
    where?: PlayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plays to fetch.
     */
    orderBy?: PlayOrderByWithRelationInput | PlayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plays.
     */
    cursor?: PlayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plays.
     */
    distinct?: PlayScalarFieldEnum | PlayScalarFieldEnum[]
  }

  /**
   * Play findFirstOrThrow
   */
  export type PlayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Play
     */
    select?: PlaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayInclude<ExtArgs> | null
    /**
     * Filter, which Play to fetch.
     */
    where?: PlayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plays to fetch.
     */
    orderBy?: PlayOrderByWithRelationInput | PlayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plays.
     */
    cursor?: PlayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plays.
     */
    distinct?: PlayScalarFieldEnum | PlayScalarFieldEnum[]
  }

  /**
   * Play findMany
   */
  export type PlayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Play
     */
    select?: PlaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayInclude<ExtArgs> | null
    /**
     * Filter, which Plays to fetch.
     */
    where?: PlayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plays to fetch.
     */
    orderBy?: PlayOrderByWithRelationInput | PlayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plays.
     */
    cursor?: PlayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plays.
     */
    skip?: number
    distinct?: PlayScalarFieldEnum | PlayScalarFieldEnum[]
  }

  /**
   * Play create
   */
  export type PlayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Play
     */
    select?: PlaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayInclude<ExtArgs> | null
    /**
     * The data needed to create a Play.
     */
    data: XOR<PlayCreateInput, PlayUncheckedCreateInput>
  }

  /**
   * Play createMany
   */
  export type PlayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plays.
     */
    data: PlayCreateManyInput | PlayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Play createManyAndReturn
   */
  export type PlayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Play
     */
    select?: PlaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Plays.
     */
    data: PlayCreateManyInput | PlayCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Play update
   */
  export type PlayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Play
     */
    select?: PlaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayInclude<ExtArgs> | null
    /**
     * The data needed to update a Play.
     */
    data: XOR<PlayUpdateInput, PlayUncheckedUpdateInput>
    /**
     * Choose, which Play to update.
     */
    where: PlayWhereUniqueInput
  }

  /**
   * Play updateMany
   */
  export type PlayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plays.
     */
    data: XOR<PlayUpdateManyMutationInput, PlayUncheckedUpdateManyInput>
    /**
     * Filter which Plays to update
     */
    where?: PlayWhereInput
  }

  /**
   * Play upsert
   */
  export type PlayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Play
     */
    select?: PlaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayInclude<ExtArgs> | null
    /**
     * The filter to search for the Play to update in case it exists.
     */
    where: PlayWhereUniqueInput
    /**
     * In case the Play found by the `where` argument doesn't exist, create a new Play with this data.
     */
    create: XOR<PlayCreateInput, PlayUncheckedCreateInput>
    /**
     * In case the Play was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayUpdateInput, PlayUncheckedUpdateInput>
  }

  /**
   * Play delete
   */
  export type PlayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Play
     */
    select?: PlaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayInclude<ExtArgs> | null
    /**
     * Filter which Play to delete.
     */
    where: PlayWhereUniqueInput
  }

  /**
   * Play deleteMany
   */
  export type PlayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plays to delete
     */
    where?: PlayWhereInput
  }

  /**
   * Play.playPlayers
   */
  export type Play$playPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayPlayer
     */
    select?: PlayPlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayPlayerInclude<ExtArgs> | null
    where?: PlayPlayerWhereInput
    orderBy?: PlayPlayerOrderByWithRelationInput | PlayPlayerOrderByWithRelationInput[]
    cursor?: PlayPlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayPlayerScalarFieldEnum | PlayPlayerScalarFieldEnum[]
  }

  /**
   * Play without action
   */
  export type PlayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Play
     */
    select?: PlaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayInclude<ExtArgs> | null
  }


  /**
   * Model PlayPlayer
   */

  export type AggregatePlayPlayer = {
    _count: PlayPlayerCountAggregateOutputType | null
    _avg: PlayPlayerAvgAggregateOutputType | null
    _sum: PlayPlayerSumAggregateOutputType | null
    _min: PlayPlayerMinAggregateOutputType | null
    _max: PlayPlayerMaxAggregateOutputType | null
  }

  export type PlayPlayerAvgAggregateOutputType = {
    id: number | null
    airYards: number | null
    yardsGained: number | null
    cushion: number | null
  }

  export type PlayPlayerSumAggregateOutputType = {
    id: number | null
    airYards: number | null
    yardsGained: number | null
    cushion: number | null
  }

  export type PlayPlayerMinAggregateOutputType = {
    id: number | null
    playId: string | null
    playerId: string | null
    role: string | null
    airYards: number | null
    yardsGained: number | null
    targeted: boolean | null
    completed: boolean | null
    routeType: string | null
    coverage: string | null
    cushion: number | null
  }

  export type PlayPlayerMaxAggregateOutputType = {
    id: number | null
    playId: string | null
    playerId: string | null
    role: string | null
    airYards: number | null
    yardsGained: number | null
    targeted: boolean | null
    completed: boolean | null
    routeType: string | null
    coverage: string | null
    cushion: number | null
  }

  export type PlayPlayerCountAggregateOutputType = {
    id: number
    playId: number
    playerId: number
    role: number
    airYards: number
    yardsGained: number
    targeted: number
    completed: number
    routeType: number
    coverage: number
    cushion: number
    _all: number
  }


  export type PlayPlayerAvgAggregateInputType = {
    id?: true
    airYards?: true
    yardsGained?: true
    cushion?: true
  }

  export type PlayPlayerSumAggregateInputType = {
    id?: true
    airYards?: true
    yardsGained?: true
    cushion?: true
  }

  export type PlayPlayerMinAggregateInputType = {
    id?: true
    playId?: true
    playerId?: true
    role?: true
    airYards?: true
    yardsGained?: true
    targeted?: true
    completed?: true
    routeType?: true
    coverage?: true
    cushion?: true
  }

  export type PlayPlayerMaxAggregateInputType = {
    id?: true
    playId?: true
    playerId?: true
    role?: true
    airYards?: true
    yardsGained?: true
    targeted?: true
    completed?: true
    routeType?: true
    coverage?: true
    cushion?: true
  }

  export type PlayPlayerCountAggregateInputType = {
    id?: true
    playId?: true
    playerId?: true
    role?: true
    airYards?: true
    yardsGained?: true
    targeted?: true
    completed?: true
    routeType?: true
    coverage?: true
    cushion?: true
    _all?: true
  }

  export type PlayPlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayPlayer to aggregate.
     */
    where?: PlayPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayPlayers to fetch.
     */
    orderBy?: PlayPlayerOrderByWithRelationInput | PlayPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayPlayers
    **/
    _count?: true | PlayPlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayPlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayPlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayPlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayPlayerMaxAggregateInputType
  }

  export type GetPlayPlayerAggregateType<T extends PlayPlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayPlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayPlayer[P]>
      : GetScalarType<T[P], AggregatePlayPlayer[P]>
  }




  export type PlayPlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayPlayerWhereInput
    orderBy?: PlayPlayerOrderByWithAggregationInput | PlayPlayerOrderByWithAggregationInput[]
    by: PlayPlayerScalarFieldEnum[] | PlayPlayerScalarFieldEnum
    having?: PlayPlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayPlayerCountAggregateInputType | true
    _avg?: PlayPlayerAvgAggregateInputType
    _sum?: PlayPlayerSumAggregateInputType
    _min?: PlayPlayerMinAggregateInputType
    _max?: PlayPlayerMaxAggregateInputType
  }

  export type PlayPlayerGroupByOutputType = {
    id: number
    playId: string
    playerId: string
    role: string
    airYards: number | null
    yardsGained: number | null
    targeted: boolean | null
    completed: boolean | null
    routeType: string | null
    coverage: string | null
    cushion: number | null
    _count: PlayPlayerCountAggregateOutputType | null
    _avg: PlayPlayerAvgAggregateOutputType | null
    _sum: PlayPlayerSumAggregateOutputType | null
    _min: PlayPlayerMinAggregateOutputType | null
    _max: PlayPlayerMaxAggregateOutputType | null
  }

  type GetPlayPlayerGroupByPayload<T extends PlayPlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayPlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayPlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayPlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayPlayerGroupByOutputType[P]>
        }
      >
    >


  export type PlayPlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playId?: boolean
    playerId?: boolean
    role?: boolean
    airYards?: boolean
    yardsGained?: boolean
    targeted?: boolean
    completed?: boolean
    routeType?: boolean
    coverage?: boolean
    cushion?: boolean
    play?: boolean | PlayDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playPlayer"]>

  export type PlayPlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playId?: boolean
    playerId?: boolean
    role?: boolean
    airYards?: boolean
    yardsGained?: boolean
    targeted?: boolean
    completed?: boolean
    routeType?: boolean
    coverage?: boolean
    cushion?: boolean
    play?: boolean | PlayDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playPlayer"]>

  export type PlayPlayerSelectScalar = {
    id?: boolean
    playId?: boolean
    playerId?: boolean
    role?: boolean
    airYards?: boolean
    yardsGained?: boolean
    targeted?: boolean
    completed?: boolean
    routeType?: boolean
    coverage?: boolean
    cushion?: boolean
  }

  export type PlayPlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    play?: boolean | PlayDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type PlayPlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    play?: boolean | PlayDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }

  export type $PlayPlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayPlayer"
    objects: {
      play: Prisma.$PlayPayload<ExtArgs>
      player: Prisma.$PlayerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      playId: string
      playerId: string
      role: string
      airYards: number | null
      yardsGained: number | null
      targeted: boolean | null
      completed: boolean | null
      routeType: string | null
      coverage: string | null
      cushion: number | null
    }, ExtArgs["result"]["playPlayer"]>
    composites: {}
  }

  type PlayPlayerGetPayload<S extends boolean | null | undefined | PlayPlayerDefaultArgs> = $Result.GetResult<Prisma.$PlayPlayerPayload, S>

  type PlayPlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlayPlayerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlayPlayerCountAggregateInputType | true
    }

  export interface PlayPlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayPlayer'], meta: { name: 'PlayPlayer' } }
    /**
     * Find zero or one PlayPlayer that matches the filter.
     * @param {PlayPlayerFindUniqueArgs} args - Arguments to find a PlayPlayer
     * @example
     * // Get one PlayPlayer
     * const playPlayer = await prisma.playPlayer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayPlayerFindUniqueArgs>(args: SelectSubset<T, PlayPlayerFindUniqueArgs<ExtArgs>>): Prisma__PlayPlayerClient<$Result.GetResult<Prisma.$PlayPlayerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PlayPlayer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PlayPlayerFindUniqueOrThrowArgs} args - Arguments to find a PlayPlayer
     * @example
     * // Get one PlayPlayer
     * const playPlayer = await prisma.playPlayer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayPlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayPlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayPlayerClient<$Result.GetResult<Prisma.$PlayPlayerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PlayPlayer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayPlayerFindFirstArgs} args - Arguments to find a PlayPlayer
     * @example
     * // Get one PlayPlayer
     * const playPlayer = await prisma.playPlayer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayPlayerFindFirstArgs>(args?: SelectSubset<T, PlayPlayerFindFirstArgs<ExtArgs>>): Prisma__PlayPlayerClient<$Result.GetResult<Prisma.$PlayPlayerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PlayPlayer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayPlayerFindFirstOrThrowArgs} args - Arguments to find a PlayPlayer
     * @example
     * // Get one PlayPlayer
     * const playPlayer = await prisma.playPlayer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayPlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayPlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayPlayerClient<$Result.GetResult<Prisma.$PlayPlayerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PlayPlayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayPlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayPlayers
     * const playPlayers = await prisma.playPlayer.findMany()
     * 
     * // Get first 10 PlayPlayers
     * const playPlayers = await prisma.playPlayer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playPlayerWithIdOnly = await prisma.playPlayer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayPlayerFindManyArgs>(args?: SelectSubset<T, PlayPlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayPlayerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PlayPlayer.
     * @param {PlayPlayerCreateArgs} args - Arguments to create a PlayPlayer.
     * @example
     * // Create one PlayPlayer
     * const PlayPlayer = await prisma.playPlayer.create({
     *   data: {
     *     // ... data to create a PlayPlayer
     *   }
     * })
     * 
     */
    create<T extends PlayPlayerCreateArgs>(args: SelectSubset<T, PlayPlayerCreateArgs<ExtArgs>>): Prisma__PlayPlayerClient<$Result.GetResult<Prisma.$PlayPlayerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PlayPlayers.
     * @param {PlayPlayerCreateManyArgs} args - Arguments to create many PlayPlayers.
     * @example
     * // Create many PlayPlayers
     * const playPlayer = await prisma.playPlayer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayPlayerCreateManyArgs>(args?: SelectSubset<T, PlayPlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayPlayers and returns the data saved in the database.
     * @param {PlayPlayerCreateManyAndReturnArgs} args - Arguments to create many PlayPlayers.
     * @example
     * // Create many PlayPlayers
     * const playPlayer = await prisma.playPlayer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayPlayers and only return the `id`
     * const playPlayerWithIdOnly = await prisma.playPlayer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayPlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayPlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayPlayerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PlayPlayer.
     * @param {PlayPlayerDeleteArgs} args - Arguments to delete one PlayPlayer.
     * @example
     * // Delete one PlayPlayer
     * const PlayPlayer = await prisma.playPlayer.delete({
     *   where: {
     *     // ... filter to delete one PlayPlayer
     *   }
     * })
     * 
     */
    delete<T extends PlayPlayerDeleteArgs>(args: SelectSubset<T, PlayPlayerDeleteArgs<ExtArgs>>): Prisma__PlayPlayerClient<$Result.GetResult<Prisma.$PlayPlayerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PlayPlayer.
     * @param {PlayPlayerUpdateArgs} args - Arguments to update one PlayPlayer.
     * @example
     * // Update one PlayPlayer
     * const playPlayer = await prisma.playPlayer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayPlayerUpdateArgs>(args: SelectSubset<T, PlayPlayerUpdateArgs<ExtArgs>>): Prisma__PlayPlayerClient<$Result.GetResult<Prisma.$PlayPlayerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PlayPlayers.
     * @param {PlayPlayerDeleteManyArgs} args - Arguments to filter PlayPlayers to delete.
     * @example
     * // Delete a few PlayPlayers
     * const { count } = await prisma.playPlayer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayPlayerDeleteManyArgs>(args?: SelectSubset<T, PlayPlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayPlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayPlayers
     * const playPlayer = await prisma.playPlayer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayPlayerUpdateManyArgs>(args: SelectSubset<T, PlayPlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlayPlayer.
     * @param {PlayPlayerUpsertArgs} args - Arguments to update or create a PlayPlayer.
     * @example
     * // Update or create a PlayPlayer
     * const playPlayer = await prisma.playPlayer.upsert({
     *   create: {
     *     // ... data to create a PlayPlayer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayPlayer we want to update
     *   }
     * })
     */
    upsert<T extends PlayPlayerUpsertArgs>(args: SelectSubset<T, PlayPlayerUpsertArgs<ExtArgs>>): Prisma__PlayPlayerClient<$Result.GetResult<Prisma.$PlayPlayerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PlayPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayPlayerCountArgs} args - Arguments to filter PlayPlayers to count.
     * @example
     * // Count the number of PlayPlayers
     * const count = await prisma.playPlayer.count({
     *   where: {
     *     // ... the filter for the PlayPlayers we want to count
     *   }
     * })
    **/
    count<T extends PlayPlayerCountArgs>(
      args?: Subset<T, PlayPlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayPlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayPlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayPlayerAggregateArgs>(args: Subset<T, PlayPlayerAggregateArgs>): Prisma.PrismaPromise<GetPlayPlayerAggregateType<T>>

    /**
     * Group by PlayPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayPlayerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayPlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayPlayerGroupByArgs['orderBy'] }
        : { orderBy?: PlayPlayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayPlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayPlayer model
   */
  readonly fields: PlayPlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayPlayer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayPlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    play<T extends PlayDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayDefaultArgs<ExtArgs>>): Prisma__PlayClient<$Result.GetResult<Prisma.$PlayPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlayPlayer model
   */ 
  interface PlayPlayerFieldRefs {
    readonly id: FieldRef<"PlayPlayer", 'Int'>
    readonly playId: FieldRef<"PlayPlayer", 'String'>
    readonly playerId: FieldRef<"PlayPlayer", 'String'>
    readonly role: FieldRef<"PlayPlayer", 'String'>
    readonly airYards: FieldRef<"PlayPlayer", 'Int'>
    readonly yardsGained: FieldRef<"PlayPlayer", 'Int'>
    readonly targeted: FieldRef<"PlayPlayer", 'Boolean'>
    readonly completed: FieldRef<"PlayPlayer", 'Boolean'>
    readonly routeType: FieldRef<"PlayPlayer", 'String'>
    readonly coverage: FieldRef<"PlayPlayer", 'String'>
    readonly cushion: FieldRef<"PlayPlayer", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * PlayPlayer findUnique
   */
  export type PlayPlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayPlayer
     */
    select?: PlayPlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayPlayerInclude<ExtArgs> | null
    /**
     * Filter, which PlayPlayer to fetch.
     */
    where: PlayPlayerWhereUniqueInput
  }

  /**
   * PlayPlayer findUniqueOrThrow
   */
  export type PlayPlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayPlayer
     */
    select?: PlayPlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayPlayerInclude<ExtArgs> | null
    /**
     * Filter, which PlayPlayer to fetch.
     */
    where: PlayPlayerWhereUniqueInput
  }

  /**
   * PlayPlayer findFirst
   */
  export type PlayPlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayPlayer
     */
    select?: PlayPlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayPlayerInclude<ExtArgs> | null
    /**
     * Filter, which PlayPlayer to fetch.
     */
    where?: PlayPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayPlayers to fetch.
     */
    orderBy?: PlayPlayerOrderByWithRelationInput | PlayPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayPlayers.
     */
    cursor?: PlayPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayPlayers.
     */
    distinct?: PlayPlayerScalarFieldEnum | PlayPlayerScalarFieldEnum[]
  }

  /**
   * PlayPlayer findFirstOrThrow
   */
  export type PlayPlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayPlayer
     */
    select?: PlayPlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayPlayerInclude<ExtArgs> | null
    /**
     * Filter, which PlayPlayer to fetch.
     */
    where?: PlayPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayPlayers to fetch.
     */
    orderBy?: PlayPlayerOrderByWithRelationInput | PlayPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayPlayers.
     */
    cursor?: PlayPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayPlayers.
     */
    distinct?: PlayPlayerScalarFieldEnum | PlayPlayerScalarFieldEnum[]
  }

  /**
   * PlayPlayer findMany
   */
  export type PlayPlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayPlayer
     */
    select?: PlayPlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayPlayerInclude<ExtArgs> | null
    /**
     * Filter, which PlayPlayers to fetch.
     */
    where?: PlayPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayPlayers to fetch.
     */
    orderBy?: PlayPlayerOrderByWithRelationInput | PlayPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayPlayers.
     */
    cursor?: PlayPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayPlayers.
     */
    skip?: number
    distinct?: PlayPlayerScalarFieldEnum | PlayPlayerScalarFieldEnum[]
  }

  /**
   * PlayPlayer create
   */
  export type PlayPlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayPlayer
     */
    select?: PlayPlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayPlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayPlayer.
     */
    data: XOR<PlayPlayerCreateInput, PlayPlayerUncheckedCreateInput>
  }

  /**
   * PlayPlayer createMany
   */
  export type PlayPlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayPlayers.
     */
    data: PlayPlayerCreateManyInput | PlayPlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayPlayer createManyAndReturn
   */
  export type PlayPlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayPlayer
     */
    select?: PlayPlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PlayPlayers.
     */
    data: PlayPlayerCreateManyInput | PlayPlayerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayPlayerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayPlayer update
   */
  export type PlayPlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayPlayer
     */
    select?: PlayPlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayPlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayPlayer.
     */
    data: XOR<PlayPlayerUpdateInput, PlayPlayerUncheckedUpdateInput>
    /**
     * Choose, which PlayPlayer to update.
     */
    where: PlayPlayerWhereUniqueInput
  }

  /**
   * PlayPlayer updateMany
   */
  export type PlayPlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayPlayers.
     */
    data: XOR<PlayPlayerUpdateManyMutationInput, PlayPlayerUncheckedUpdateManyInput>
    /**
     * Filter which PlayPlayers to update
     */
    where?: PlayPlayerWhereInput
  }

  /**
   * PlayPlayer upsert
   */
  export type PlayPlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayPlayer
     */
    select?: PlayPlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayPlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayPlayer to update in case it exists.
     */
    where: PlayPlayerWhereUniqueInput
    /**
     * In case the PlayPlayer found by the `where` argument doesn't exist, create a new PlayPlayer with this data.
     */
    create: XOR<PlayPlayerCreateInput, PlayPlayerUncheckedCreateInput>
    /**
     * In case the PlayPlayer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayPlayerUpdateInput, PlayPlayerUncheckedUpdateInput>
  }

  /**
   * PlayPlayer delete
   */
  export type PlayPlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayPlayer
     */
    select?: PlayPlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayPlayerInclude<ExtArgs> | null
    /**
     * Filter which PlayPlayer to delete.
     */
    where: PlayPlayerWhereUniqueInput
  }

  /**
   * PlayPlayer deleteMany
   */
  export type PlayPlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayPlayers to delete
     */
    where?: PlayPlayerWhereInput
  }

  /**
   * PlayPlayer without action
   */
  export type PlayPlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayPlayer
     */
    select?: PlayPlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayPlayerInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PlayerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    position: 'position',
    dob: 'dob'
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    code: 'code',
    name: 'name',
    conference: 'conference',
    division: 'division'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const GameScalarFieldEnum: {
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

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const WeeklyRosterScalarFieldEnum: {
    id: 'id',
    playerId: 'playerId',
    week: 'week',
    season: 'season',
    team: 'team',
    jerseyNumber: 'jerseyNumber',
    position: 'position'
  };

  export type WeeklyRosterScalarFieldEnum = (typeof WeeklyRosterScalarFieldEnum)[keyof typeof WeeklyRosterScalarFieldEnum]


  export const PlayerGameStatScalarFieldEnum: {
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

  export type PlayerGameStatScalarFieldEnum = (typeof PlayerGameStatScalarFieldEnum)[keyof typeof PlayerGameStatScalarFieldEnum]


  export const PlayScalarFieldEnum: {
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

  export type PlayScalarFieldEnum = (typeof PlayScalarFieldEnum)[keyof typeof PlayScalarFieldEnum]


  export const PlayPlayerScalarFieldEnum: {
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

  export type PlayPlayerScalarFieldEnum = (typeof PlayPlayerScalarFieldEnum)[keyof typeof PlayPlayerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type PlayerWhereInput = {
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    id?: StringFilter<"Player"> | string
    name?: StringFilter<"Player"> | string
    position?: StringNullableFilter<"Player"> | string | null
    dob?: DateTimeNullableFilter<"Player"> | Date | string | null
    weeklyRosters?: WeeklyRosterListRelationFilter
    playerGameStats?: PlayerGameStatListRelationFilter
    playPlayers?: PlayPlayerListRelationFilter
  }

  export type PlayerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    weeklyRosters?: WeeklyRosterOrderByRelationAggregateInput
    playerGameStats?: PlayerGameStatOrderByRelationAggregateInput
    playPlayers?: PlayPlayerOrderByRelationAggregateInput
  }

  export type PlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    name?: StringFilter<"Player"> | string
    position?: StringNullableFilter<"Player"> | string | null
    dob?: DateTimeNullableFilter<"Player"> | Date | string | null
    weeklyRosters?: WeeklyRosterListRelationFilter
    playerGameStats?: PlayerGameStatListRelationFilter
    playPlayers?: PlayPlayerListRelationFilter
  }, "id">

  export type PlayerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    _count?: PlayerCountOrderByAggregateInput
    _max?: PlayerMaxOrderByAggregateInput
    _min?: PlayerMinOrderByAggregateInput
  }

  export type PlayerScalarWhereWithAggregatesInput = {
    AND?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    OR?: PlayerScalarWhereWithAggregatesInput[]
    NOT?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Player"> | string
    name?: StringWithAggregatesFilter<"Player"> | string
    position?: StringNullableWithAggregatesFilter<"Player"> | string | null
    dob?: DateTimeNullableWithAggregatesFilter<"Player"> | Date | string | null
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    code?: StringFilter<"Team"> | string
    name?: StringNullableFilter<"Team"> | string | null
    conference?: StringNullableFilter<"Team"> | string | null
    division?: StringNullableFilter<"Team"> | string | null
    homeGames?: GameListRelationFilter
    awayGames?: GameListRelationFilter
    weeklyRosters?: WeeklyRosterListRelationFilter
    playerGameStats?: PlayerGameStatListRelationFilter
    offensivePlays?: PlayListRelationFilter
    defensivePlays?: PlayListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    code?: SortOrder
    name?: SortOrderInput | SortOrder
    conference?: SortOrderInput | SortOrder
    division?: SortOrderInput | SortOrder
    homeGames?: GameOrderByRelationAggregateInput
    awayGames?: GameOrderByRelationAggregateInput
    weeklyRosters?: WeeklyRosterOrderByRelationAggregateInput
    playerGameStats?: PlayerGameStatOrderByRelationAggregateInput
    offensivePlays?: PlayOrderByRelationAggregateInput
    defensivePlays?: PlayOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    code?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringNullableFilter<"Team"> | string | null
    conference?: StringNullableFilter<"Team"> | string | null
    division?: StringNullableFilter<"Team"> | string | null
    homeGames?: GameListRelationFilter
    awayGames?: GameListRelationFilter
    weeklyRosters?: WeeklyRosterListRelationFilter
    playerGameStats?: PlayerGameStatListRelationFilter
    offensivePlays?: PlayListRelationFilter
    defensivePlays?: PlayListRelationFilter
  }, "code">

  export type TeamOrderByWithAggregationInput = {
    code?: SortOrder
    name?: SortOrderInput | SortOrder
    conference?: SortOrderInput | SortOrder
    division?: SortOrderInput | SortOrder
    _count?: TeamCountOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    code?: StringWithAggregatesFilter<"Team"> | string
    name?: StringNullableWithAggregatesFilter<"Team"> | string | null
    conference?: StringNullableWithAggregatesFilter<"Team"> | string | null
    division?: StringNullableWithAggregatesFilter<"Team"> | string | null
  }

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    key?: StringFilter<"Game"> | string
    week?: IntFilter<"Game"> | number
    season?: IntFilter<"Game"> | number
    gameDate?: DateTimeFilter<"Game"> | Date | string
    homeTeam?: StringFilter<"Game"> | string
    awayTeam?: StringFilter<"Game"> | string
    homeScore?: IntNullableFilter<"Game"> | number | null
    awayScore?: IntNullableFilter<"Game"> | number | null
    stadium?: StringNullableFilter<"Game"> | string | null
    surface?: StringNullableFilter<"Game"> | string | null
    weather?: StringNullableFilter<"Game"> | string | null
    homeTeamRel?: XOR<TeamRelationFilter, TeamWhereInput>
    awayTeamRel?: XOR<TeamRelationFilter, TeamWhereInput>
    plays?: PlayListRelationFilter
    playerGameStats?: PlayerGameStatListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    key?: SortOrder
    week?: SortOrder
    season?: SortOrder
    gameDate?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    homeScore?: SortOrderInput | SortOrder
    awayScore?: SortOrderInput | SortOrder
    stadium?: SortOrderInput | SortOrder
    surface?: SortOrderInput | SortOrder
    weather?: SortOrderInput | SortOrder
    homeTeamRel?: TeamOrderByWithRelationInput
    awayTeamRel?: TeamOrderByWithRelationInput
    plays?: PlayOrderByRelationAggregateInput
    playerGameStats?: PlayerGameStatOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    week?: IntFilter<"Game"> | number
    season?: IntFilter<"Game"> | number
    gameDate?: DateTimeFilter<"Game"> | Date | string
    homeTeam?: StringFilter<"Game"> | string
    awayTeam?: StringFilter<"Game"> | string
    homeScore?: IntNullableFilter<"Game"> | number | null
    awayScore?: IntNullableFilter<"Game"> | number | null
    stadium?: StringNullableFilter<"Game"> | string | null
    surface?: StringNullableFilter<"Game"> | string | null
    weather?: StringNullableFilter<"Game"> | string | null
    homeTeamRel?: XOR<TeamRelationFilter, TeamWhereInput>
    awayTeamRel?: XOR<TeamRelationFilter, TeamWhereInput>
    plays?: PlayListRelationFilter
    playerGameStats?: PlayerGameStatListRelationFilter
  }, "key">

  export type GameOrderByWithAggregationInput = {
    key?: SortOrder
    week?: SortOrder
    season?: SortOrder
    gameDate?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    homeScore?: SortOrderInput | SortOrder
    awayScore?: SortOrderInput | SortOrder
    stadium?: SortOrderInput | SortOrder
    surface?: SortOrderInput | SortOrder
    weather?: SortOrderInput | SortOrder
    _count?: GameCountOrderByAggregateInput
    _avg?: GameAvgOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
    _sum?: GameSumOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"Game"> | string
    week?: IntWithAggregatesFilter<"Game"> | number
    season?: IntWithAggregatesFilter<"Game"> | number
    gameDate?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    homeTeam?: StringWithAggregatesFilter<"Game"> | string
    awayTeam?: StringWithAggregatesFilter<"Game"> | string
    homeScore?: IntNullableWithAggregatesFilter<"Game"> | number | null
    awayScore?: IntNullableWithAggregatesFilter<"Game"> | number | null
    stadium?: StringNullableWithAggregatesFilter<"Game"> | string | null
    surface?: StringNullableWithAggregatesFilter<"Game"> | string | null
    weather?: StringNullableWithAggregatesFilter<"Game"> | string | null
  }

  export type WeeklyRosterWhereInput = {
    AND?: WeeklyRosterWhereInput | WeeklyRosterWhereInput[]
    OR?: WeeklyRosterWhereInput[]
    NOT?: WeeklyRosterWhereInput | WeeklyRosterWhereInput[]
    id?: IntFilter<"WeeklyRoster"> | number
    playerId?: StringFilter<"WeeklyRoster"> | string
    week?: IntFilter<"WeeklyRoster"> | number
    season?: IntFilter<"WeeklyRoster"> | number
    team?: StringFilter<"WeeklyRoster"> | string
    jerseyNumber?: IntNullableFilter<"WeeklyRoster"> | number | null
    position?: StringNullableFilter<"WeeklyRoster"> | string | null
    player?: XOR<PlayerRelationFilter, PlayerWhereInput>
    teamRel?: XOR<TeamRelationFilter, TeamWhereInput>
  }

  export type WeeklyRosterOrderByWithRelationInput = {
    id?: SortOrder
    playerId?: SortOrder
    week?: SortOrder
    season?: SortOrder
    team?: SortOrder
    jerseyNumber?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    player?: PlayerOrderByWithRelationInput
    teamRel?: TeamOrderByWithRelationInput
  }

  export type WeeklyRosterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    playerId_week_season_team?: WeeklyRosterPlayerIdWeekSeasonTeamCompoundUniqueInput
    AND?: WeeklyRosterWhereInput | WeeklyRosterWhereInput[]
    OR?: WeeklyRosterWhereInput[]
    NOT?: WeeklyRosterWhereInput | WeeklyRosterWhereInput[]
    playerId?: StringFilter<"WeeklyRoster"> | string
    week?: IntFilter<"WeeklyRoster"> | number
    season?: IntFilter<"WeeklyRoster"> | number
    team?: StringFilter<"WeeklyRoster"> | string
    jerseyNumber?: IntNullableFilter<"WeeklyRoster"> | number | null
    position?: StringNullableFilter<"WeeklyRoster"> | string | null
    player?: XOR<PlayerRelationFilter, PlayerWhereInput>
    teamRel?: XOR<TeamRelationFilter, TeamWhereInput>
  }, "id" | "playerId_week_season_team">

  export type WeeklyRosterOrderByWithAggregationInput = {
    id?: SortOrder
    playerId?: SortOrder
    week?: SortOrder
    season?: SortOrder
    team?: SortOrder
    jerseyNumber?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    _count?: WeeklyRosterCountOrderByAggregateInput
    _avg?: WeeklyRosterAvgOrderByAggregateInput
    _max?: WeeklyRosterMaxOrderByAggregateInput
    _min?: WeeklyRosterMinOrderByAggregateInput
    _sum?: WeeklyRosterSumOrderByAggregateInput
  }

  export type WeeklyRosterScalarWhereWithAggregatesInput = {
    AND?: WeeklyRosterScalarWhereWithAggregatesInput | WeeklyRosterScalarWhereWithAggregatesInput[]
    OR?: WeeklyRosterScalarWhereWithAggregatesInput[]
    NOT?: WeeklyRosterScalarWhereWithAggregatesInput | WeeklyRosterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WeeklyRoster"> | number
    playerId?: StringWithAggregatesFilter<"WeeklyRoster"> | string
    week?: IntWithAggregatesFilter<"WeeklyRoster"> | number
    season?: IntWithAggregatesFilter<"WeeklyRoster"> | number
    team?: StringWithAggregatesFilter<"WeeklyRoster"> | string
    jerseyNumber?: IntNullableWithAggregatesFilter<"WeeklyRoster"> | number | null
    position?: StringNullableWithAggregatesFilter<"WeeklyRoster"> | string | null
  }

  export type PlayerGameStatWhereInput = {
    AND?: PlayerGameStatWhereInput | PlayerGameStatWhereInput[]
    OR?: PlayerGameStatWhereInput[]
    NOT?: PlayerGameStatWhereInput | PlayerGameStatWhereInput[]
    id?: IntFilter<"PlayerGameStat"> | number
    playerId?: StringFilter<"PlayerGameStat"> | string
    gameKey?: StringFilter<"PlayerGameStat"> | string
    team?: StringFilter<"PlayerGameStat"> | string
    position?: StringNullableFilter<"PlayerGameStat"> | string | null
    snaps?: IntNullableFilter<"PlayerGameStat"> | number | null
    snapShare?: FloatNullableFilter<"PlayerGameStat"> | number | null
    fantasyPoints?: FloatNullableFilter<"PlayerGameStat"> | number | null
    passAttempts?: IntNullableFilter<"PlayerGameStat"> | number | null
    completions?: IntNullableFilter<"PlayerGameStat"> | number | null
    passYards?: IntNullableFilter<"PlayerGameStat"> | number | null
    passTDs?: IntNullableFilter<"PlayerGameStat"> | number | null
    interceptions?: IntNullableFilter<"PlayerGameStat"> | number | null
    carries?: IntNullableFilter<"PlayerGameStat"> | number | null
    rushYards?: IntNullableFilter<"PlayerGameStat"> | number | null
    rushTDs?: IntNullableFilter<"PlayerGameStat"> | number | null
    targets?: IntNullableFilter<"PlayerGameStat"> | number | null
    receptions?: IntNullableFilter<"PlayerGameStat"> | number | null
    receivingYards?: IntNullableFilter<"PlayerGameStat"> | number | null
    receivingTDs?: IntNullableFilter<"PlayerGameStat"> | number | null
    airYards?: IntNullableFilter<"PlayerGameStat"> | number | null
    scrimmageYards?: IntNullableFilter<"PlayerGameStat"> | number | null
    totalTDs?: IntNullableFilter<"PlayerGameStat"> | number | null
    totalTouches?: IntNullableFilter<"PlayerGameStat"> | number | null
    opportunities?: IntNullableFilter<"PlayerGameStat"> | number | null
    evadedTackles?: IntNullableFilter<"PlayerGameStat"> | number | null
    yardsCreated?: IntNullableFilter<"PlayerGameStat"> | number | null
    yardsPerCarry?: FloatNullableFilter<"PlayerGameStat"> | number | null
    yardsPerTarget?: FloatNullableFilter<"PlayerGameStat"> | number | null
    yardsPerReception?: FloatNullableFilter<"PlayerGameStat"> | number | null
    player?: XOR<PlayerRelationFilter, PlayerWhereInput>
    game?: XOR<GameRelationFilter, GameWhereInput>
    teamRel?: XOR<TeamRelationFilter, TeamWhereInput>
  }

  export type PlayerGameStatOrderByWithRelationInput = {
    id?: SortOrder
    playerId?: SortOrder
    gameKey?: SortOrder
    team?: SortOrder
    position?: SortOrderInput | SortOrder
    snaps?: SortOrderInput | SortOrder
    snapShare?: SortOrderInput | SortOrder
    fantasyPoints?: SortOrderInput | SortOrder
    passAttempts?: SortOrderInput | SortOrder
    completions?: SortOrderInput | SortOrder
    passYards?: SortOrderInput | SortOrder
    passTDs?: SortOrderInput | SortOrder
    interceptions?: SortOrderInput | SortOrder
    carries?: SortOrderInput | SortOrder
    rushYards?: SortOrderInput | SortOrder
    rushTDs?: SortOrderInput | SortOrder
    targets?: SortOrderInput | SortOrder
    receptions?: SortOrderInput | SortOrder
    receivingYards?: SortOrderInput | SortOrder
    receivingTDs?: SortOrderInput | SortOrder
    airYards?: SortOrderInput | SortOrder
    scrimmageYards?: SortOrderInput | SortOrder
    totalTDs?: SortOrderInput | SortOrder
    totalTouches?: SortOrderInput | SortOrder
    opportunities?: SortOrderInput | SortOrder
    evadedTackles?: SortOrderInput | SortOrder
    yardsCreated?: SortOrderInput | SortOrder
    yardsPerCarry?: SortOrderInput | SortOrder
    yardsPerTarget?: SortOrderInput | SortOrder
    yardsPerReception?: SortOrderInput | SortOrder
    player?: PlayerOrderByWithRelationInput
    game?: GameOrderByWithRelationInput
    teamRel?: TeamOrderByWithRelationInput
  }

  export type PlayerGameStatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    playerId_gameKey?: PlayerGameStatPlayerIdGameKeyCompoundUniqueInput
    AND?: PlayerGameStatWhereInput | PlayerGameStatWhereInput[]
    OR?: PlayerGameStatWhereInput[]
    NOT?: PlayerGameStatWhereInput | PlayerGameStatWhereInput[]
    playerId?: StringFilter<"PlayerGameStat"> | string
    gameKey?: StringFilter<"PlayerGameStat"> | string
    team?: StringFilter<"PlayerGameStat"> | string
    position?: StringNullableFilter<"PlayerGameStat"> | string | null
    snaps?: IntNullableFilter<"PlayerGameStat"> | number | null
    snapShare?: FloatNullableFilter<"PlayerGameStat"> | number | null
    fantasyPoints?: FloatNullableFilter<"PlayerGameStat"> | number | null
    passAttempts?: IntNullableFilter<"PlayerGameStat"> | number | null
    completions?: IntNullableFilter<"PlayerGameStat"> | number | null
    passYards?: IntNullableFilter<"PlayerGameStat"> | number | null
    passTDs?: IntNullableFilter<"PlayerGameStat"> | number | null
    interceptions?: IntNullableFilter<"PlayerGameStat"> | number | null
    carries?: IntNullableFilter<"PlayerGameStat"> | number | null
    rushYards?: IntNullableFilter<"PlayerGameStat"> | number | null
    rushTDs?: IntNullableFilter<"PlayerGameStat"> | number | null
    targets?: IntNullableFilter<"PlayerGameStat"> | number | null
    receptions?: IntNullableFilter<"PlayerGameStat"> | number | null
    receivingYards?: IntNullableFilter<"PlayerGameStat"> | number | null
    receivingTDs?: IntNullableFilter<"PlayerGameStat"> | number | null
    airYards?: IntNullableFilter<"PlayerGameStat"> | number | null
    scrimmageYards?: IntNullableFilter<"PlayerGameStat"> | number | null
    totalTDs?: IntNullableFilter<"PlayerGameStat"> | number | null
    totalTouches?: IntNullableFilter<"PlayerGameStat"> | number | null
    opportunities?: IntNullableFilter<"PlayerGameStat"> | number | null
    evadedTackles?: IntNullableFilter<"PlayerGameStat"> | number | null
    yardsCreated?: IntNullableFilter<"PlayerGameStat"> | number | null
    yardsPerCarry?: FloatNullableFilter<"PlayerGameStat"> | number | null
    yardsPerTarget?: FloatNullableFilter<"PlayerGameStat"> | number | null
    yardsPerReception?: FloatNullableFilter<"PlayerGameStat"> | number | null
    player?: XOR<PlayerRelationFilter, PlayerWhereInput>
    game?: XOR<GameRelationFilter, GameWhereInput>
    teamRel?: XOR<TeamRelationFilter, TeamWhereInput>
  }, "id" | "playerId_gameKey">

  export type PlayerGameStatOrderByWithAggregationInput = {
    id?: SortOrder
    playerId?: SortOrder
    gameKey?: SortOrder
    team?: SortOrder
    position?: SortOrderInput | SortOrder
    snaps?: SortOrderInput | SortOrder
    snapShare?: SortOrderInput | SortOrder
    fantasyPoints?: SortOrderInput | SortOrder
    passAttempts?: SortOrderInput | SortOrder
    completions?: SortOrderInput | SortOrder
    passYards?: SortOrderInput | SortOrder
    passTDs?: SortOrderInput | SortOrder
    interceptions?: SortOrderInput | SortOrder
    carries?: SortOrderInput | SortOrder
    rushYards?: SortOrderInput | SortOrder
    rushTDs?: SortOrderInput | SortOrder
    targets?: SortOrderInput | SortOrder
    receptions?: SortOrderInput | SortOrder
    receivingYards?: SortOrderInput | SortOrder
    receivingTDs?: SortOrderInput | SortOrder
    airYards?: SortOrderInput | SortOrder
    scrimmageYards?: SortOrderInput | SortOrder
    totalTDs?: SortOrderInput | SortOrder
    totalTouches?: SortOrderInput | SortOrder
    opportunities?: SortOrderInput | SortOrder
    evadedTackles?: SortOrderInput | SortOrder
    yardsCreated?: SortOrderInput | SortOrder
    yardsPerCarry?: SortOrderInput | SortOrder
    yardsPerTarget?: SortOrderInput | SortOrder
    yardsPerReception?: SortOrderInput | SortOrder
    _count?: PlayerGameStatCountOrderByAggregateInput
    _avg?: PlayerGameStatAvgOrderByAggregateInput
    _max?: PlayerGameStatMaxOrderByAggregateInput
    _min?: PlayerGameStatMinOrderByAggregateInput
    _sum?: PlayerGameStatSumOrderByAggregateInput
  }

  export type PlayerGameStatScalarWhereWithAggregatesInput = {
    AND?: PlayerGameStatScalarWhereWithAggregatesInput | PlayerGameStatScalarWhereWithAggregatesInput[]
    OR?: PlayerGameStatScalarWhereWithAggregatesInput[]
    NOT?: PlayerGameStatScalarWhereWithAggregatesInput | PlayerGameStatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PlayerGameStat"> | number
    playerId?: StringWithAggregatesFilter<"PlayerGameStat"> | string
    gameKey?: StringWithAggregatesFilter<"PlayerGameStat"> | string
    team?: StringWithAggregatesFilter<"PlayerGameStat"> | string
    position?: StringNullableWithAggregatesFilter<"PlayerGameStat"> | string | null
    snaps?: IntNullableWithAggregatesFilter<"PlayerGameStat"> | number | null
    snapShare?: FloatNullableWithAggregatesFilter<"PlayerGameStat"> | number | null
    fantasyPoints?: FloatNullableWithAggregatesFilter<"PlayerGameStat"> | number | null
    passAttempts?: IntNullableWithAggregatesFilter<"PlayerGameStat"> | number | null
    completions?: IntNullableWithAggregatesFilter<"PlayerGameStat"> | number | null
    passYards?: IntNullableWithAggregatesFilter<"PlayerGameStat"> | number | null
    passTDs?: IntNullableWithAggregatesFilter<"PlayerGameStat"> | number | null
    interceptions?: IntNullableWithAggregatesFilter<"PlayerGameStat"> | number | null
    carries?: IntNullableWithAggregatesFilter<"PlayerGameStat"> | number | null
    rushYards?: IntNullableWithAggregatesFilter<"PlayerGameStat"> | number | null
    rushTDs?: IntNullableWithAggregatesFilter<"PlayerGameStat"> | number | null
    targets?: IntNullableWithAggregatesFilter<"PlayerGameStat"> | number | null
    receptions?: IntNullableWithAggregatesFilter<"PlayerGameStat"> | number | null
    receivingYards?: IntNullableWithAggregatesFilter<"PlayerGameStat"> | number | null
    receivingTDs?: IntNullableWithAggregatesFilter<"PlayerGameStat"> | number | null
    airYards?: IntNullableWithAggregatesFilter<"PlayerGameStat"> | number | null
    scrimmageYards?: IntNullableWithAggregatesFilter<"PlayerGameStat"> | number | null
    totalTDs?: IntNullableWithAggregatesFilter<"PlayerGameStat"> | number | null
    totalTouches?: IntNullableWithAggregatesFilter<"PlayerGameStat"> | number | null
    opportunities?: IntNullableWithAggregatesFilter<"PlayerGameStat"> | number | null
    evadedTackles?: IntNullableWithAggregatesFilter<"PlayerGameStat"> | number | null
    yardsCreated?: IntNullableWithAggregatesFilter<"PlayerGameStat"> | number | null
    yardsPerCarry?: FloatNullableWithAggregatesFilter<"PlayerGameStat"> | number | null
    yardsPerTarget?: FloatNullableWithAggregatesFilter<"PlayerGameStat"> | number | null
    yardsPerReception?: FloatNullableWithAggregatesFilter<"PlayerGameStat"> | number | null
  }

  export type PlayWhereInput = {
    AND?: PlayWhereInput | PlayWhereInput[]
    OR?: PlayWhereInput[]
    NOT?: PlayWhereInput | PlayWhereInput[]
    id?: StringFilter<"Play"> | string
    gameKey?: StringFilter<"Play"> | string
    week?: IntFilter<"Play"> | number
    quarter?: IntNullableFilter<"Play"> | number | null
    minutes?: IntNullableFilter<"Play"> | number | null
    seconds?: IntNullableFilter<"Play"> | number | null
    down?: IntNullableFilter<"Play"> | number | null
    yardsToGo?: IntNullableFilter<"Play"> | number | null
    offTeam?: StringFilter<"Play"> | string
    defTeam?: StringFilter<"Play"> | string
    playType?: StringNullableFilter<"Play"> | string | null
    yardsGained?: IntNullableFilter<"Play"> | number | null
    isFirstDown?: BoolNullableFilter<"Play"> | boolean | null
    redZone?: BoolNullableFilter<"Play"> | boolean | null
    passPlay?: BoolNullableFilter<"Play"> | boolean | null
    runPlay?: BoolNullableFilter<"Play"> | boolean | null
    touchdown?: BoolNullableFilter<"Play"> | boolean | null
    turnover?: BoolNullableFilter<"Play"> | boolean | null
    game?: XOR<GameRelationFilter, GameWhereInput>
    offTeamRel?: XOR<TeamRelationFilter, TeamWhereInput>
    defTeamRel?: XOR<TeamRelationFilter, TeamWhereInput>
    playPlayers?: PlayPlayerListRelationFilter
  }

  export type PlayOrderByWithRelationInput = {
    id?: SortOrder
    gameKey?: SortOrder
    week?: SortOrder
    quarter?: SortOrderInput | SortOrder
    minutes?: SortOrderInput | SortOrder
    seconds?: SortOrderInput | SortOrder
    down?: SortOrderInput | SortOrder
    yardsToGo?: SortOrderInput | SortOrder
    offTeam?: SortOrder
    defTeam?: SortOrder
    playType?: SortOrderInput | SortOrder
    yardsGained?: SortOrderInput | SortOrder
    isFirstDown?: SortOrderInput | SortOrder
    redZone?: SortOrderInput | SortOrder
    passPlay?: SortOrderInput | SortOrder
    runPlay?: SortOrderInput | SortOrder
    touchdown?: SortOrderInput | SortOrder
    turnover?: SortOrderInput | SortOrder
    game?: GameOrderByWithRelationInput
    offTeamRel?: TeamOrderByWithRelationInput
    defTeamRel?: TeamOrderByWithRelationInput
    playPlayers?: PlayPlayerOrderByRelationAggregateInput
  }

  export type PlayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlayWhereInput | PlayWhereInput[]
    OR?: PlayWhereInput[]
    NOT?: PlayWhereInput | PlayWhereInput[]
    gameKey?: StringFilter<"Play"> | string
    week?: IntFilter<"Play"> | number
    quarter?: IntNullableFilter<"Play"> | number | null
    minutes?: IntNullableFilter<"Play"> | number | null
    seconds?: IntNullableFilter<"Play"> | number | null
    down?: IntNullableFilter<"Play"> | number | null
    yardsToGo?: IntNullableFilter<"Play"> | number | null
    offTeam?: StringFilter<"Play"> | string
    defTeam?: StringFilter<"Play"> | string
    playType?: StringNullableFilter<"Play"> | string | null
    yardsGained?: IntNullableFilter<"Play"> | number | null
    isFirstDown?: BoolNullableFilter<"Play"> | boolean | null
    redZone?: BoolNullableFilter<"Play"> | boolean | null
    passPlay?: BoolNullableFilter<"Play"> | boolean | null
    runPlay?: BoolNullableFilter<"Play"> | boolean | null
    touchdown?: BoolNullableFilter<"Play"> | boolean | null
    turnover?: BoolNullableFilter<"Play"> | boolean | null
    game?: XOR<GameRelationFilter, GameWhereInput>
    offTeamRel?: XOR<TeamRelationFilter, TeamWhereInput>
    defTeamRel?: XOR<TeamRelationFilter, TeamWhereInput>
    playPlayers?: PlayPlayerListRelationFilter
  }, "id">

  export type PlayOrderByWithAggregationInput = {
    id?: SortOrder
    gameKey?: SortOrder
    week?: SortOrder
    quarter?: SortOrderInput | SortOrder
    minutes?: SortOrderInput | SortOrder
    seconds?: SortOrderInput | SortOrder
    down?: SortOrderInput | SortOrder
    yardsToGo?: SortOrderInput | SortOrder
    offTeam?: SortOrder
    defTeam?: SortOrder
    playType?: SortOrderInput | SortOrder
    yardsGained?: SortOrderInput | SortOrder
    isFirstDown?: SortOrderInput | SortOrder
    redZone?: SortOrderInput | SortOrder
    passPlay?: SortOrderInput | SortOrder
    runPlay?: SortOrderInput | SortOrder
    touchdown?: SortOrderInput | SortOrder
    turnover?: SortOrderInput | SortOrder
    _count?: PlayCountOrderByAggregateInput
    _avg?: PlayAvgOrderByAggregateInput
    _max?: PlayMaxOrderByAggregateInput
    _min?: PlayMinOrderByAggregateInput
    _sum?: PlaySumOrderByAggregateInput
  }

  export type PlayScalarWhereWithAggregatesInput = {
    AND?: PlayScalarWhereWithAggregatesInput | PlayScalarWhereWithAggregatesInput[]
    OR?: PlayScalarWhereWithAggregatesInput[]
    NOT?: PlayScalarWhereWithAggregatesInput | PlayScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Play"> | string
    gameKey?: StringWithAggregatesFilter<"Play"> | string
    week?: IntWithAggregatesFilter<"Play"> | number
    quarter?: IntNullableWithAggregatesFilter<"Play"> | number | null
    minutes?: IntNullableWithAggregatesFilter<"Play"> | number | null
    seconds?: IntNullableWithAggregatesFilter<"Play"> | number | null
    down?: IntNullableWithAggregatesFilter<"Play"> | number | null
    yardsToGo?: IntNullableWithAggregatesFilter<"Play"> | number | null
    offTeam?: StringWithAggregatesFilter<"Play"> | string
    defTeam?: StringWithAggregatesFilter<"Play"> | string
    playType?: StringNullableWithAggregatesFilter<"Play"> | string | null
    yardsGained?: IntNullableWithAggregatesFilter<"Play"> | number | null
    isFirstDown?: BoolNullableWithAggregatesFilter<"Play"> | boolean | null
    redZone?: BoolNullableWithAggregatesFilter<"Play"> | boolean | null
    passPlay?: BoolNullableWithAggregatesFilter<"Play"> | boolean | null
    runPlay?: BoolNullableWithAggregatesFilter<"Play"> | boolean | null
    touchdown?: BoolNullableWithAggregatesFilter<"Play"> | boolean | null
    turnover?: BoolNullableWithAggregatesFilter<"Play"> | boolean | null
  }

  export type PlayPlayerWhereInput = {
    AND?: PlayPlayerWhereInput | PlayPlayerWhereInput[]
    OR?: PlayPlayerWhereInput[]
    NOT?: PlayPlayerWhereInput | PlayPlayerWhereInput[]
    id?: IntFilter<"PlayPlayer"> | number
    playId?: StringFilter<"PlayPlayer"> | string
    playerId?: StringFilter<"PlayPlayer"> | string
    role?: StringFilter<"PlayPlayer"> | string
    airYards?: IntNullableFilter<"PlayPlayer"> | number | null
    yardsGained?: IntNullableFilter<"PlayPlayer"> | number | null
    targeted?: BoolNullableFilter<"PlayPlayer"> | boolean | null
    completed?: BoolNullableFilter<"PlayPlayer"> | boolean | null
    routeType?: StringNullableFilter<"PlayPlayer"> | string | null
    coverage?: StringNullableFilter<"PlayPlayer"> | string | null
    cushion?: FloatNullableFilter<"PlayPlayer"> | number | null
    play?: XOR<PlayRelationFilter, PlayWhereInput>
    player?: XOR<PlayerRelationFilter, PlayerWhereInput>
  }

  export type PlayPlayerOrderByWithRelationInput = {
    id?: SortOrder
    playId?: SortOrder
    playerId?: SortOrder
    role?: SortOrder
    airYards?: SortOrderInput | SortOrder
    yardsGained?: SortOrderInput | SortOrder
    targeted?: SortOrderInput | SortOrder
    completed?: SortOrderInput | SortOrder
    routeType?: SortOrderInput | SortOrder
    coverage?: SortOrderInput | SortOrder
    cushion?: SortOrderInput | SortOrder
    play?: PlayOrderByWithRelationInput
    player?: PlayerOrderByWithRelationInput
  }

  export type PlayPlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    playId_playerId_role?: PlayPlayerPlayIdPlayerIdRoleCompoundUniqueInput
    AND?: PlayPlayerWhereInput | PlayPlayerWhereInput[]
    OR?: PlayPlayerWhereInput[]
    NOT?: PlayPlayerWhereInput | PlayPlayerWhereInput[]
    playId?: StringFilter<"PlayPlayer"> | string
    playerId?: StringFilter<"PlayPlayer"> | string
    role?: StringFilter<"PlayPlayer"> | string
    airYards?: IntNullableFilter<"PlayPlayer"> | number | null
    yardsGained?: IntNullableFilter<"PlayPlayer"> | number | null
    targeted?: BoolNullableFilter<"PlayPlayer"> | boolean | null
    completed?: BoolNullableFilter<"PlayPlayer"> | boolean | null
    routeType?: StringNullableFilter<"PlayPlayer"> | string | null
    coverage?: StringNullableFilter<"PlayPlayer"> | string | null
    cushion?: FloatNullableFilter<"PlayPlayer"> | number | null
    play?: XOR<PlayRelationFilter, PlayWhereInput>
    player?: XOR<PlayerRelationFilter, PlayerWhereInput>
  }, "id" | "playId_playerId_role">

  export type PlayPlayerOrderByWithAggregationInput = {
    id?: SortOrder
    playId?: SortOrder
    playerId?: SortOrder
    role?: SortOrder
    airYards?: SortOrderInput | SortOrder
    yardsGained?: SortOrderInput | SortOrder
    targeted?: SortOrderInput | SortOrder
    completed?: SortOrderInput | SortOrder
    routeType?: SortOrderInput | SortOrder
    coverage?: SortOrderInput | SortOrder
    cushion?: SortOrderInput | SortOrder
    _count?: PlayPlayerCountOrderByAggregateInput
    _avg?: PlayPlayerAvgOrderByAggregateInput
    _max?: PlayPlayerMaxOrderByAggregateInput
    _min?: PlayPlayerMinOrderByAggregateInput
    _sum?: PlayPlayerSumOrderByAggregateInput
  }

  export type PlayPlayerScalarWhereWithAggregatesInput = {
    AND?: PlayPlayerScalarWhereWithAggregatesInput | PlayPlayerScalarWhereWithAggregatesInput[]
    OR?: PlayPlayerScalarWhereWithAggregatesInput[]
    NOT?: PlayPlayerScalarWhereWithAggregatesInput | PlayPlayerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PlayPlayer"> | number
    playId?: StringWithAggregatesFilter<"PlayPlayer"> | string
    playerId?: StringWithAggregatesFilter<"PlayPlayer"> | string
    role?: StringWithAggregatesFilter<"PlayPlayer"> | string
    airYards?: IntNullableWithAggregatesFilter<"PlayPlayer"> | number | null
    yardsGained?: IntNullableWithAggregatesFilter<"PlayPlayer"> | number | null
    targeted?: BoolNullableWithAggregatesFilter<"PlayPlayer"> | boolean | null
    completed?: BoolNullableWithAggregatesFilter<"PlayPlayer"> | boolean | null
    routeType?: StringNullableWithAggregatesFilter<"PlayPlayer"> | string | null
    coverage?: StringNullableWithAggregatesFilter<"PlayPlayer"> | string | null
    cushion?: FloatNullableWithAggregatesFilter<"PlayPlayer"> | number | null
  }

  export type PlayerCreateInput = {
    id: string
    name: string
    position?: string | null
    dob?: Date | string | null
    weeklyRosters?: WeeklyRosterCreateNestedManyWithoutPlayerInput
    playerGameStats?: PlayerGameStatCreateNestedManyWithoutPlayerInput
    playPlayers?: PlayPlayerCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateInput = {
    id: string
    name: string
    position?: string | null
    dob?: Date | string | null
    weeklyRosters?: WeeklyRosterUncheckedCreateNestedManyWithoutPlayerInput
    playerGameStats?: PlayerGameStatUncheckedCreateNestedManyWithoutPlayerInput
    playPlayers?: PlayPlayerUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    weeklyRosters?: WeeklyRosterUpdateManyWithoutPlayerNestedInput
    playerGameStats?: PlayerGameStatUpdateManyWithoutPlayerNestedInput
    playPlayers?: PlayPlayerUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    weeklyRosters?: WeeklyRosterUncheckedUpdateManyWithoutPlayerNestedInput
    playerGameStats?: PlayerGameStatUncheckedUpdateManyWithoutPlayerNestedInput
    playPlayers?: PlayPlayerUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerCreateManyInput = {
    id: string
    name: string
    position?: string | null
    dob?: Date | string | null
  }

  export type PlayerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlayerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TeamCreateInput = {
    code: string
    name?: string | null
    conference?: string | null
    division?: string | null
    homeGames?: GameCreateNestedManyWithoutHomeTeamRelInput
    awayGames?: GameCreateNestedManyWithoutAwayTeamRelInput
    weeklyRosters?: WeeklyRosterCreateNestedManyWithoutTeamRelInput
    playerGameStats?: PlayerGameStatCreateNestedManyWithoutTeamRelInput
    offensivePlays?: PlayCreateNestedManyWithoutOffTeamRelInput
    defensivePlays?: PlayCreateNestedManyWithoutDefTeamRelInput
  }

  export type TeamUncheckedCreateInput = {
    code: string
    name?: string | null
    conference?: string | null
    division?: string | null
    homeGames?: GameUncheckedCreateNestedManyWithoutHomeTeamRelInput
    awayGames?: GameUncheckedCreateNestedManyWithoutAwayTeamRelInput
    weeklyRosters?: WeeklyRosterUncheckedCreateNestedManyWithoutTeamRelInput
    playerGameStats?: PlayerGameStatUncheckedCreateNestedManyWithoutTeamRelInput
    offensivePlays?: PlayUncheckedCreateNestedManyWithoutOffTeamRelInput
    defensivePlays?: PlayUncheckedCreateNestedManyWithoutDefTeamRelInput
  }

  export type TeamUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    conference?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    homeGames?: GameUpdateManyWithoutHomeTeamRelNestedInput
    awayGames?: GameUpdateManyWithoutAwayTeamRelNestedInput
    weeklyRosters?: WeeklyRosterUpdateManyWithoutTeamRelNestedInput
    playerGameStats?: PlayerGameStatUpdateManyWithoutTeamRelNestedInput
    offensivePlays?: PlayUpdateManyWithoutOffTeamRelNestedInput
    defensivePlays?: PlayUpdateManyWithoutDefTeamRelNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    conference?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    homeGames?: GameUncheckedUpdateManyWithoutHomeTeamRelNestedInput
    awayGames?: GameUncheckedUpdateManyWithoutAwayTeamRelNestedInput
    weeklyRosters?: WeeklyRosterUncheckedUpdateManyWithoutTeamRelNestedInput
    playerGameStats?: PlayerGameStatUncheckedUpdateManyWithoutTeamRelNestedInput
    offensivePlays?: PlayUncheckedUpdateManyWithoutOffTeamRelNestedInput
    defensivePlays?: PlayUncheckedUpdateManyWithoutDefTeamRelNestedInput
  }

  export type TeamCreateManyInput = {
    code: string
    name?: string | null
    conference?: string | null
    division?: string | null
  }

  export type TeamUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    conference?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    conference?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameCreateInput = {
    key: string
    week: number
    season: number
    gameDate: Date | string
    homeScore?: number | null
    awayScore?: number | null
    stadium?: string | null
    surface?: string | null
    weather?: string | null
    homeTeamRel: TeamCreateNestedOneWithoutHomeGamesInput
    awayTeamRel: TeamCreateNestedOneWithoutAwayGamesInput
    plays?: PlayCreateNestedManyWithoutGameInput
    playerGameStats?: PlayerGameStatCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateInput = {
    key: string
    week: number
    season: number
    gameDate: Date | string
    homeTeam: string
    awayTeam: string
    homeScore?: number | null
    awayScore?: number | null
    stadium?: string | null
    surface?: string | null
    weather?: string | null
    plays?: PlayUncheckedCreateNestedManyWithoutGameInput
    playerGameStats?: PlayerGameStatUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    stadium?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableStringFieldUpdateOperationsInput | string | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
    homeTeamRel?: TeamUpdateOneRequiredWithoutHomeGamesNestedInput
    awayTeamRel?: TeamUpdateOneRequiredWithoutAwayGamesNestedInput
    plays?: PlayUpdateManyWithoutGameNestedInput
    playerGameStats?: PlayerGameStatUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    stadium?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableStringFieldUpdateOperationsInput | string | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
    plays?: PlayUncheckedUpdateManyWithoutGameNestedInput
    playerGameStats?: PlayerGameStatUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateManyInput = {
    key: string
    week: number
    season: number
    gameDate: Date | string
    homeTeam: string
    awayTeam: string
    homeScore?: number | null
    awayScore?: number | null
    stadium?: string | null
    surface?: string | null
    weather?: string | null
  }

  export type GameUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    stadium?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableStringFieldUpdateOperationsInput | string | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    stadium?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableStringFieldUpdateOperationsInput | string | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WeeklyRosterCreateInput = {
    week: number
    season: number
    jerseyNumber?: number | null
    position?: string | null
    player: PlayerCreateNestedOneWithoutWeeklyRostersInput
    teamRel: TeamCreateNestedOneWithoutWeeklyRostersInput
  }

  export type WeeklyRosterUncheckedCreateInput = {
    id?: number
    playerId: string
    week: number
    season: number
    team: string
    jerseyNumber?: number | null
    position?: string | null
  }

  export type WeeklyRosterUpdateInput = {
    week?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    jerseyNumber?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    player?: PlayerUpdateOneRequiredWithoutWeeklyRostersNestedInput
    teamRel?: TeamUpdateOneRequiredWithoutWeeklyRostersNestedInput
  }

  export type WeeklyRosterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    team?: StringFieldUpdateOperationsInput | string
    jerseyNumber?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WeeklyRosterCreateManyInput = {
    id?: number
    playerId: string
    week: number
    season: number
    team: string
    jerseyNumber?: number | null
    position?: string | null
  }

  export type WeeklyRosterUpdateManyMutationInput = {
    week?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    jerseyNumber?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WeeklyRosterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    team?: StringFieldUpdateOperationsInput | string
    jerseyNumber?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayerGameStatCreateInput = {
    position?: string | null
    snaps?: number | null
    snapShare?: number | null
    fantasyPoints?: number | null
    passAttempts?: number | null
    completions?: number | null
    passYards?: number | null
    passTDs?: number | null
    interceptions?: number | null
    carries?: number | null
    rushYards?: number | null
    rushTDs?: number | null
    targets?: number | null
    receptions?: number | null
    receivingYards?: number | null
    receivingTDs?: number | null
    airYards?: number | null
    scrimmageYards?: number | null
    totalTDs?: number | null
    totalTouches?: number | null
    opportunities?: number | null
    evadedTackles?: number | null
    yardsCreated?: number | null
    yardsPerCarry?: number | null
    yardsPerTarget?: number | null
    yardsPerReception?: number | null
    player: PlayerCreateNestedOneWithoutPlayerGameStatsInput
    game: GameCreateNestedOneWithoutPlayerGameStatsInput
    teamRel: TeamCreateNestedOneWithoutPlayerGameStatsInput
  }

  export type PlayerGameStatUncheckedCreateInput = {
    id?: number
    playerId: string
    gameKey: string
    team: string
    position?: string | null
    snaps?: number | null
    snapShare?: number | null
    fantasyPoints?: number | null
    passAttempts?: number | null
    completions?: number | null
    passYards?: number | null
    passTDs?: number | null
    interceptions?: number | null
    carries?: number | null
    rushYards?: number | null
    rushTDs?: number | null
    targets?: number | null
    receptions?: number | null
    receivingYards?: number | null
    receivingTDs?: number | null
    airYards?: number | null
    scrimmageYards?: number | null
    totalTDs?: number | null
    totalTouches?: number | null
    opportunities?: number | null
    evadedTackles?: number | null
    yardsCreated?: number | null
    yardsPerCarry?: number | null
    yardsPerTarget?: number | null
    yardsPerReception?: number | null
  }

  export type PlayerGameStatUpdateInput = {
    position?: NullableStringFieldUpdateOperationsInput | string | null
    snaps?: NullableIntFieldUpdateOperationsInput | number | null
    snapShare?: NullableFloatFieldUpdateOperationsInput | number | null
    fantasyPoints?: NullableFloatFieldUpdateOperationsInput | number | null
    passAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    completions?: NullableIntFieldUpdateOperationsInput | number | null
    passYards?: NullableIntFieldUpdateOperationsInput | number | null
    passTDs?: NullableIntFieldUpdateOperationsInput | number | null
    interceptions?: NullableIntFieldUpdateOperationsInput | number | null
    carries?: NullableIntFieldUpdateOperationsInput | number | null
    rushYards?: NullableIntFieldUpdateOperationsInput | number | null
    rushTDs?: NullableIntFieldUpdateOperationsInput | number | null
    targets?: NullableIntFieldUpdateOperationsInput | number | null
    receptions?: NullableIntFieldUpdateOperationsInput | number | null
    receivingYards?: NullableIntFieldUpdateOperationsInput | number | null
    receivingTDs?: NullableIntFieldUpdateOperationsInput | number | null
    airYards?: NullableIntFieldUpdateOperationsInput | number | null
    scrimmageYards?: NullableIntFieldUpdateOperationsInput | number | null
    totalTDs?: NullableIntFieldUpdateOperationsInput | number | null
    totalTouches?: NullableIntFieldUpdateOperationsInput | number | null
    opportunities?: NullableIntFieldUpdateOperationsInput | number | null
    evadedTackles?: NullableIntFieldUpdateOperationsInput | number | null
    yardsCreated?: NullableIntFieldUpdateOperationsInput | number | null
    yardsPerCarry?: NullableFloatFieldUpdateOperationsInput | number | null
    yardsPerTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    yardsPerReception?: NullableFloatFieldUpdateOperationsInput | number | null
    player?: PlayerUpdateOneRequiredWithoutPlayerGameStatsNestedInput
    game?: GameUpdateOneRequiredWithoutPlayerGameStatsNestedInput
    teamRel?: TeamUpdateOneRequiredWithoutPlayerGameStatsNestedInput
  }

  export type PlayerGameStatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: StringFieldUpdateOperationsInput | string
    gameKey?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    snaps?: NullableIntFieldUpdateOperationsInput | number | null
    snapShare?: NullableFloatFieldUpdateOperationsInput | number | null
    fantasyPoints?: NullableFloatFieldUpdateOperationsInput | number | null
    passAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    completions?: NullableIntFieldUpdateOperationsInput | number | null
    passYards?: NullableIntFieldUpdateOperationsInput | number | null
    passTDs?: NullableIntFieldUpdateOperationsInput | number | null
    interceptions?: NullableIntFieldUpdateOperationsInput | number | null
    carries?: NullableIntFieldUpdateOperationsInput | number | null
    rushYards?: NullableIntFieldUpdateOperationsInput | number | null
    rushTDs?: NullableIntFieldUpdateOperationsInput | number | null
    targets?: NullableIntFieldUpdateOperationsInput | number | null
    receptions?: NullableIntFieldUpdateOperationsInput | number | null
    receivingYards?: NullableIntFieldUpdateOperationsInput | number | null
    receivingTDs?: NullableIntFieldUpdateOperationsInput | number | null
    airYards?: NullableIntFieldUpdateOperationsInput | number | null
    scrimmageYards?: NullableIntFieldUpdateOperationsInput | number | null
    totalTDs?: NullableIntFieldUpdateOperationsInput | number | null
    totalTouches?: NullableIntFieldUpdateOperationsInput | number | null
    opportunities?: NullableIntFieldUpdateOperationsInput | number | null
    evadedTackles?: NullableIntFieldUpdateOperationsInput | number | null
    yardsCreated?: NullableIntFieldUpdateOperationsInput | number | null
    yardsPerCarry?: NullableFloatFieldUpdateOperationsInput | number | null
    yardsPerTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    yardsPerReception?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PlayerGameStatCreateManyInput = {
    id?: number
    playerId: string
    gameKey: string
    team: string
    position?: string | null
    snaps?: number | null
    snapShare?: number | null
    fantasyPoints?: number | null
    passAttempts?: number | null
    completions?: number | null
    passYards?: number | null
    passTDs?: number | null
    interceptions?: number | null
    carries?: number | null
    rushYards?: number | null
    rushTDs?: number | null
    targets?: number | null
    receptions?: number | null
    receivingYards?: number | null
    receivingTDs?: number | null
    airYards?: number | null
    scrimmageYards?: number | null
    totalTDs?: number | null
    totalTouches?: number | null
    opportunities?: number | null
    evadedTackles?: number | null
    yardsCreated?: number | null
    yardsPerCarry?: number | null
    yardsPerTarget?: number | null
    yardsPerReception?: number | null
  }

  export type PlayerGameStatUpdateManyMutationInput = {
    position?: NullableStringFieldUpdateOperationsInput | string | null
    snaps?: NullableIntFieldUpdateOperationsInput | number | null
    snapShare?: NullableFloatFieldUpdateOperationsInput | number | null
    fantasyPoints?: NullableFloatFieldUpdateOperationsInput | number | null
    passAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    completions?: NullableIntFieldUpdateOperationsInput | number | null
    passYards?: NullableIntFieldUpdateOperationsInput | number | null
    passTDs?: NullableIntFieldUpdateOperationsInput | number | null
    interceptions?: NullableIntFieldUpdateOperationsInput | number | null
    carries?: NullableIntFieldUpdateOperationsInput | number | null
    rushYards?: NullableIntFieldUpdateOperationsInput | number | null
    rushTDs?: NullableIntFieldUpdateOperationsInput | number | null
    targets?: NullableIntFieldUpdateOperationsInput | number | null
    receptions?: NullableIntFieldUpdateOperationsInput | number | null
    receivingYards?: NullableIntFieldUpdateOperationsInput | number | null
    receivingTDs?: NullableIntFieldUpdateOperationsInput | number | null
    airYards?: NullableIntFieldUpdateOperationsInput | number | null
    scrimmageYards?: NullableIntFieldUpdateOperationsInput | number | null
    totalTDs?: NullableIntFieldUpdateOperationsInput | number | null
    totalTouches?: NullableIntFieldUpdateOperationsInput | number | null
    opportunities?: NullableIntFieldUpdateOperationsInput | number | null
    evadedTackles?: NullableIntFieldUpdateOperationsInput | number | null
    yardsCreated?: NullableIntFieldUpdateOperationsInput | number | null
    yardsPerCarry?: NullableFloatFieldUpdateOperationsInput | number | null
    yardsPerTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    yardsPerReception?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PlayerGameStatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: StringFieldUpdateOperationsInput | string
    gameKey?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    snaps?: NullableIntFieldUpdateOperationsInput | number | null
    snapShare?: NullableFloatFieldUpdateOperationsInput | number | null
    fantasyPoints?: NullableFloatFieldUpdateOperationsInput | number | null
    passAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    completions?: NullableIntFieldUpdateOperationsInput | number | null
    passYards?: NullableIntFieldUpdateOperationsInput | number | null
    passTDs?: NullableIntFieldUpdateOperationsInput | number | null
    interceptions?: NullableIntFieldUpdateOperationsInput | number | null
    carries?: NullableIntFieldUpdateOperationsInput | number | null
    rushYards?: NullableIntFieldUpdateOperationsInput | number | null
    rushTDs?: NullableIntFieldUpdateOperationsInput | number | null
    targets?: NullableIntFieldUpdateOperationsInput | number | null
    receptions?: NullableIntFieldUpdateOperationsInput | number | null
    receivingYards?: NullableIntFieldUpdateOperationsInput | number | null
    receivingTDs?: NullableIntFieldUpdateOperationsInput | number | null
    airYards?: NullableIntFieldUpdateOperationsInput | number | null
    scrimmageYards?: NullableIntFieldUpdateOperationsInput | number | null
    totalTDs?: NullableIntFieldUpdateOperationsInput | number | null
    totalTouches?: NullableIntFieldUpdateOperationsInput | number | null
    opportunities?: NullableIntFieldUpdateOperationsInput | number | null
    evadedTackles?: NullableIntFieldUpdateOperationsInput | number | null
    yardsCreated?: NullableIntFieldUpdateOperationsInput | number | null
    yardsPerCarry?: NullableFloatFieldUpdateOperationsInput | number | null
    yardsPerTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    yardsPerReception?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PlayCreateInput = {
    id: string
    week: number
    quarter?: number | null
    minutes?: number | null
    seconds?: number | null
    down?: number | null
    yardsToGo?: number | null
    playType?: string | null
    yardsGained?: number | null
    isFirstDown?: boolean | null
    redZone?: boolean | null
    passPlay?: boolean | null
    runPlay?: boolean | null
    touchdown?: boolean | null
    turnover?: boolean | null
    game: GameCreateNestedOneWithoutPlaysInput
    offTeamRel: TeamCreateNestedOneWithoutOffensivePlaysInput
    defTeamRel: TeamCreateNestedOneWithoutDefensivePlaysInput
    playPlayers?: PlayPlayerCreateNestedManyWithoutPlayInput
  }

  export type PlayUncheckedCreateInput = {
    id: string
    gameKey: string
    week: number
    quarter?: number | null
    minutes?: number | null
    seconds?: number | null
    down?: number | null
    yardsToGo?: number | null
    offTeam: string
    defTeam: string
    playType?: string | null
    yardsGained?: number | null
    isFirstDown?: boolean | null
    redZone?: boolean | null
    passPlay?: boolean | null
    runPlay?: boolean | null
    touchdown?: boolean | null
    turnover?: boolean | null
    playPlayers?: PlayPlayerUncheckedCreateNestedManyWithoutPlayInput
  }

  export type PlayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    quarter?: NullableIntFieldUpdateOperationsInput | number | null
    minutes?: NullableIntFieldUpdateOperationsInput | number | null
    seconds?: NullableIntFieldUpdateOperationsInput | number | null
    down?: NullableIntFieldUpdateOperationsInput | number | null
    yardsToGo?: NullableIntFieldUpdateOperationsInput | number | null
    playType?: NullableStringFieldUpdateOperationsInput | string | null
    yardsGained?: NullableIntFieldUpdateOperationsInput | number | null
    isFirstDown?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redZone?: NullableBoolFieldUpdateOperationsInput | boolean | null
    passPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    runPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    touchdown?: NullableBoolFieldUpdateOperationsInput | boolean | null
    turnover?: NullableBoolFieldUpdateOperationsInput | boolean | null
    game?: GameUpdateOneRequiredWithoutPlaysNestedInput
    offTeamRel?: TeamUpdateOneRequiredWithoutOffensivePlaysNestedInput
    defTeamRel?: TeamUpdateOneRequiredWithoutDefensivePlaysNestedInput
    playPlayers?: PlayPlayerUpdateManyWithoutPlayNestedInput
  }

  export type PlayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameKey?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    quarter?: NullableIntFieldUpdateOperationsInput | number | null
    minutes?: NullableIntFieldUpdateOperationsInput | number | null
    seconds?: NullableIntFieldUpdateOperationsInput | number | null
    down?: NullableIntFieldUpdateOperationsInput | number | null
    yardsToGo?: NullableIntFieldUpdateOperationsInput | number | null
    offTeam?: StringFieldUpdateOperationsInput | string
    defTeam?: StringFieldUpdateOperationsInput | string
    playType?: NullableStringFieldUpdateOperationsInput | string | null
    yardsGained?: NullableIntFieldUpdateOperationsInput | number | null
    isFirstDown?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redZone?: NullableBoolFieldUpdateOperationsInput | boolean | null
    passPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    runPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    touchdown?: NullableBoolFieldUpdateOperationsInput | boolean | null
    turnover?: NullableBoolFieldUpdateOperationsInput | boolean | null
    playPlayers?: PlayPlayerUncheckedUpdateManyWithoutPlayNestedInput
  }

  export type PlayCreateManyInput = {
    id: string
    gameKey: string
    week: number
    quarter?: number | null
    minutes?: number | null
    seconds?: number | null
    down?: number | null
    yardsToGo?: number | null
    offTeam: string
    defTeam: string
    playType?: string | null
    yardsGained?: number | null
    isFirstDown?: boolean | null
    redZone?: boolean | null
    passPlay?: boolean | null
    runPlay?: boolean | null
    touchdown?: boolean | null
    turnover?: boolean | null
  }

  export type PlayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    quarter?: NullableIntFieldUpdateOperationsInput | number | null
    minutes?: NullableIntFieldUpdateOperationsInput | number | null
    seconds?: NullableIntFieldUpdateOperationsInput | number | null
    down?: NullableIntFieldUpdateOperationsInput | number | null
    yardsToGo?: NullableIntFieldUpdateOperationsInput | number | null
    playType?: NullableStringFieldUpdateOperationsInput | string | null
    yardsGained?: NullableIntFieldUpdateOperationsInput | number | null
    isFirstDown?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redZone?: NullableBoolFieldUpdateOperationsInput | boolean | null
    passPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    runPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    touchdown?: NullableBoolFieldUpdateOperationsInput | boolean | null
    turnover?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PlayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameKey?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    quarter?: NullableIntFieldUpdateOperationsInput | number | null
    minutes?: NullableIntFieldUpdateOperationsInput | number | null
    seconds?: NullableIntFieldUpdateOperationsInput | number | null
    down?: NullableIntFieldUpdateOperationsInput | number | null
    yardsToGo?: NullableIntFieldUpdateOperationsInput | number | null
    offTeam?: StringFieldUpdateOperationsInput | string
    defTeam?: StringFieldUpdateOperationsInput | string
    playType?: NullableStringFieldUpdateOperationsInput | string | null
    yardsGained?: NullableIntFieldUpdateOperationsInput | number | null
    isFirstDown?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redZone?: NullableBoolFieldUpdateOperationsInput | boolean | null
    passPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    runPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    touchdown?: NullableBoolFieldUpdateOperationsInput | boolean | null
    turnover?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PlayPlayerCreateInput = {
    role: string
    airYards?: number | null
    yardsGained?: number | null
    targeted?: boolean | null
    completed?: boolean | null
    routeType?: string | null
    coverage?: string | null
    cushion?: number | null
    play: PlayCreateNestedOneWithoutPlayPlayersInput
    player: PlayerCreateNestedOneWithoutPlayPlayersInput
  }

  export type PlayPlayerUncheckedCreateInput = {
    id?: number
    playId: string
    playerId: string
    role: string
    airYards?: number | null
    yardsGained?: number | null
    targeted?: boolean | null
    completed?: boolean | null
    routeType?: string | null
    coverage?: string | null
    cushion?: number | null
  }

  export type PlayPlayerUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    airYards?: NullableIntFieldUpdateOperationsInput | number | null
    yardsGained?: NullableIntFieldUpdateOperationsInput | number | null
    targeted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    routeType?: NullableStringFieldUpdateOperationsInput | string | null
    coverage?: NullableStringFieldUpdateOperationsInput | string | null
    cushion?: NullableFloatFieldUpdateOperationsInput | number | null
    play?: PlayUpdateOneRequiredWithoutPlayPlayersNestedInput
    player?: PlayerUpdateOneRequiredWithoutPlayPlayersNestedInput
  }

  export type PlayPlayerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    playId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    airYards?: NullableIntFieldUpdateOperationsInput | number | null
    yardsGained?: NullableIntFieldUpdateOperationsInput | number | null
    targeted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    routeType?: NullableStringFieldUpdateOperationsInput | string | null
    coverage?: NullableStringFieldUpdateOperationsInput | string | null
    cushion?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PlayPlayerCreateManyInput = {
    id?: number
    playId: string
    playerId: string
    role: string
    airYards?: number | null
    yardsGained?: number | null
    targeted?: boolean | null
    completed?: boolean | null
    routeType?: string | null
    coverage?: string | null
    cushion?: number | null
  }

  export type PlayPlayerUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
    airYards?: NullableIntFieldUpdateOperationsInput | number | null
    yardsGained?: NullableIntFieldUpdateOperationsInput | number | null
    targeted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    routeType?: NullableStringFieldUpdateOperationsInput | string | null
    coverage?: NullableStringFieldUpdateOperationsInput | string | null
    cushion?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PlayPlayerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    playId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    airYards?: NullableIntFieldUpdateOperationsInput | number | null
    yardsGained?: NullableIntFieldUpdateOperationsInput | number | null
    targeted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    routeType?: NullableStringFieldUpdateOperationsInput | string | null
    coverage?: NullableStringFieldUpdateOperationsInput | string | null
    cushion?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type WeeklyRosterListRelationFilter = {
    every?: WeeklyRosterWhereInput
    some?: WeeklyRosterWhereInput
    none?: WeeklyRosterWhereInput
  }

  export type PlayerGameStatListRelationFilter = {
    every?: PlayerGameStatWhereInput
    some?: PlayerGameStatWhereInput
    none?: PlayerGameStatWhereInput
  }

  export type PlayPlayerListRelationFilter = {
    every?: PlayPlayerWhereInput
    some?: PlayPlayerWhereInput
    none?: PlayPlayerWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WeeklyRosterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerGameStatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayPlayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    dob?: SortOrder
  }

  export type PlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    dob?: SortOrder
  }

  export type PlayerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    dob?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type GameListRelationFilter = {
    every?: GameWhereInput
    some?: GameWhereInput
    none?: GameWhereInput
  }

  export type PlayListRelationFilter = {
    every?: PlayWhereInput
    some?: PlayWhereInput
    none?: PlayWhereInput
  }

  export type GameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    conference?: SortOrder
    division?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    conference?: SortOrder
    division?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    conference?: SortOrder
    division?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TeamRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type GameCountOrderByAggregateInput = {
    key?: SortOrder
    week?: SortOrder
    season?: SortOrder
    gameDate?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    stadium?: SortOrder
    surface?: SortOrder
    weather?: SortOrder
  }

  export type GameAvgOrderByAggregateInput = {
    week?: SortOrder
    season?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    key?: SortOrder
    week?: SortOrder
    season?: SortOrder
    gameDate?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    stadium?: SortOrder
    surface?: SortOrder
    weather?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    key?: SortOrder
    week?: SortOrder
    season?: SortOrder
    gameDate?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    stadium?: SortOrder
    surface?: SortOrder
    weather?: SortOrder
  }

  export type GameSumOrderByAggregateInput = {
    week?: SortOrder
    season?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PlayerRelationFilter = {
    is?: PlayerWhereInput
    isNot?: PlayerWhereInput
  }

  export type WeeklyRosterPlayerIdWeekSeasonTeamCompoundUniqueInput = {
    playerId: string
    week: number
    season: number
    team: string
  }

  export type WeeklyRosterCountOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    week?: SortOrder
    season?: SortOrder
    team?: SortOrder
    jerseyNumber?: SortOrder
    position?: SortOrder
  }

  export type WeeklyRosterAvgOrderByAggregateInput = {
    id?: SortOrder
    week?: SortOrder
    season?: SortOrder
    jerseyNumber?: SortOrder
  }

  export type WeeklyRosterMaxOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    week?: SortOrder
    season?: SortOrder
    team?: SortOrder
    jerseyNumber?: SortOrder
    position?: SortOrder
  }

  export type WeeklyRosterMinOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    week?: SortOrder
    season?: SortOrder
    team?: SortOrder
    jerseyNumber?: SortOrder
    position?: SortOrder
  }

  export type WeeklyRosterSumOrderByAggregateInput = {
    id?: SortOrder
    week?: SortOrder
    season?: SortOrder
    jerseyNumber?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type GameRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type PlayerGameStatPlayerIdGameKeyCompoundUniqueInput = {
    playerId: string
    gameKey: string
  }

  export type PlayerGameStatCountOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    gameKey?: SortOrder
    team?: SortOrder
    position?: SortOrder
    snaps?: SortOrder
    snapShare?: SortOrder
    fantasyPoints?: SortOrder
    passAttempts?: SortOrder
    completions?: SortOrder
    passYards?: SortOrder
    passTDs?: SortOrder
    interceptions?: SortOrder
    carries?: SortOrder
    rushYards?: SortOrder
    rushTDs?: SortOrder
    targets?: SortOrder
    receptions?: SortOrder
    receivingYards?: SortOrder
    receivingTDs?: SortOrder
    airYards?: SortOrder
    scrimmageYards?: SortOrder
    totalTDs?: SortOrder
    totalTouches?: SortOrder
    opportunities?: SortOrder
    evadedTackles?: SortOrder
    yardsCreated?: SortOrder
    yardsPerCarry?: SortOrder
    yardsPerTarget?: SortOrder
    yardsPerReception?: SortOrder
  }

  export type PlayerGameStatAvgOrderByAggregateInput = {
    id?: SortOrder
    snaps?: SortOrder
    snapShare?: SortOrder
    fantasyPoints?: SortOrder
    passAttempts?: SortOrder
    completions?: SortOrder
    passYards?: SortOrder
    passTDs?: SortOrder
    interceptions?: SortOrder
    carries?: SortOrder
    rushYards?: SortOrder
    rushTDs?: SortOrder
    targets?: SortOrder
    receptions?: SortOrder
    receivingYards?: SortOrder
    receivingTDs?: SortOrder
    airYards?: SortOrder
    scrimmageYards?: SortOrder
    totalTDs?: SortOrder
    totalTouches?: SortOrder
    opportunities?: SortOrder
    evadedTackles?: SortOrder
    yardsCreated?: SortOrder
    yardsPerCarry?: SortOrder
    yardsPerTarget?: SortOrder
    yardsPerReception?: SortOrder
  }

  export type PlayerGameStatMaxOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    gameKey?: SortOrder
    team?: SortOrder
    position?: SortOrder
    snaps?: SortOrder
    snapShare?: SortOrder
    fantasyPoints?: SortOrder
    passAttempts?: SortOrder
    completions?: SortOrder
    passYards?: SortOrder
    passTDs?: SortOrder
    interceptions?: SortOrder
    carries?: SortOrder
    rushYards?: SortOrder
    rushTDs?: SortOrder
    targets?: SortOrder
    receptions?: SortOrder
    receivingYards?: SortOrder
    receivingTDs?: SortOrder
    airYards?: SortOrder
    scrimmageYards?: SortOrder
    totalTDs?: SortOrder
    totalTouches?: SortOrder
    opportunities?: SortOrder
    evadedTackles?: SortOrder
    yardsCreated?: SortOrder
    yardsPerCarry?: SortOrder
    yardsPerTarget?: SortOrder
    yardsPerReception?: SortOrder
  }

  export type PlayerGameStatMinOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    gameKey?: SortOrder
    team?: SortOrder
    position?: SortOrder
    snaps?: SortOrder
    snapShare?: SortOrder
    fantasyPoints?: SortOrder
    passAttempts?: SortOrder
    completions?: SortOrder
    passYards?: SortOrder
    passTDs?: SortOrder
    interceptions?: SortOrder
    carries?: SortOrder
    rushYards?: SortOrder
    rushTDs?: SortOrder
    targets?: SortOrder
    receptions?: SortOrder
    receivingYards?: SortOrder
    receivingTDs?: SortOrder
    airYards?: SortOrder
    scrimmageYards?: SortOrder
    totalTDs?: SortOrder
    totalTouches?: SortOrder
    opportunities?: SortOrder
    evadedTackles?: SortOrder
    yardsCreated?: SortOrder
    yardsPerCarry?: SortOrder
    yardsPerTarget?: SortOrder
    yardsPerReception?: SortOrder
  }

  export type PlayerGameStatSumOrderByAggregateInput = {
    id?: SortOrder
    snaps?: SortOrder
    snapShare?: SortOrder
    fantasyPoints?: SortOrder
    passAttempts?: SortOrder
    completions?: SortOrder
    passYards?: SortOrder
    passTDs?: SortOrder
    interceptions?: SortOrder
    carries?: SortOrder
    rushYards?: SortOrder
    rushTDs?: SortOrder
    targets?: SortOrder
    receptions?: SortOrder
    receivingYards?: SortOrder
    receivingTDs?: SortOrder
    airYards?: SortOrder
    scrimmageYards?: SortOrder
    totalTDs?: SortOrder
    totalTouches?: SortOrder
    opportunities?: SortOrder
    evadedTackles?: SortOrder
    yardsCreated?: SortOrder
    yardsPerCarry?: SortOrder
    yardsPerTarget?: SortOrder
    yardsPerReception?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type PlayCountOrderByAggregateInput = {
    id?: SortOrder
    gameKey?: SortOrder
    week?: SortOrder
    quarter?: SortOrder
    minutes?: SortOrder
    seconds?: SortOrder
    down?: SortOrder
    yardsToGo?: SortOrder
    offTeam?: SortOrder
    defTeam?: SortOrder
    playType?: SortOrder
    yardsGained?: SortOrder
    isFirstDown?: SortOrder
    redZone?: SortOrder
    passPlay?: SortOrder
    runPlay?: SortOrder
    touchdown?: SortOrder
    turnover?: SortOrder
  }

  export type PlayAvgOrderByAggregateInput = {
    week?: SortOrder
    quarter?: SortOrder
    minutes?: SortOrder
    seconds?: SortOrder
    down?: SortOrder
    yardsToGo?: SortOrder
    yardsGained?: SortOrder
  }

  export type PlayMaxOrderByAggregateInput = {
    id?: SortOrder
    gameKey?: SortOrder
    week?: SortOrder
    quarter?: SortOrder
    minutes?: SortOrder
    seconds?: SortOrder
    down?: SortOrder
    yardsToGo?: SortOrder
    offTeam?: SortOrder
    defTeam?: SortOrder
    playType?: SortOrder
    yardsGained?: SortOrder
    isFirstDown?: SortOrder
    redZone?: SortOrder
    passPlay?: SortOrder
    runPlay?: SortOrder
    touchdown?: SortOrder
    turnover?: SortOrder
  }

  export type PlayMinOrderByAggregateInput = {
    id?: SortOrder
    gameKey?: SortOrder
    week?: SortOrder
    quarter?: SortOrder
    minutes?: SortOrder
    seconds?: SortOrder
    down?: SortOrder
    yardsToGo?: SortOrder
    offTeam?: SortOrder
    defTeam?: SortOrder
    playType?: SortOrder
    yardsGained?: SortOrder
    isFirstDown?: SortOrder
    redZone?: SortOrder
    passPlay?: SortOrder
    runPlay?: SortOrder
    touchdown?: SortOrder
    turnover?: SortOrder
  }

  export type PlaySumOrderByAggregateInput = {
    week?: SortOrder
    quarter?: SortOrder
    minutes?: SortOrder
    seconds?: SortOrder
    down?: SortOrder
    yardsToGo?: SortOrder
    yardsGained?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type PlayRelationFilter = {
    is?: PlayWhereInput
    isNot?: PlayWhereInput
  }

  export type PlayPlayerPlayIdPlayerIdRoleCompoundUniqueInput = {
    playId: string
    playerId: string
    role: string
  }

  export type PlayPlayerCountOrderByAggregateInput = {
    id?: SortOrder
    playId?: SortOrder
    playerId?: SortOrder
    role?: SortOrder
    airYards?: SortOrder
    yardsGained?: SortOrder
    targeted?: SortOrder
    completed?: SortOrder
    routeType?: SortOrder
    coverage?: SortOrder
    cushion?: SortOrder
  }

  export type PlayPlayerAvgOrderByAggregateInput = {
    id?: SortOrder
    airYards?: SortOrder
    yardsGained?: SortOrder
    cushion?: SortOrder
  }

  export type PlayPlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    playId?: SortOrder
    playerId?: SortOrder
    role?: SortOrder
    airYards?: SortOrder
    yardsGained?: SortOrder
    targeted?: SortOrder
    completed?: SortOrder
    routeType?: SortOrder
    coverage?: SortOrder
    cushion?: SortOrder
  }

  export type PlayPlayerMinOrderByAggregateInput = {
    id?: SortOrder
    playId?: SortOrder
    playerId?: SortOrder
    role?: SortOrder
    airYards?: SortOrder
    yardsGained?: SortOrder
    targeted?: SortOrder
    completed?: SortOrder
    routeType?: SortOrder
    coverage?: SortOrder
    cushion?: SortOrder
  }

  export type PlayPlayerSumOrderByAggregateInput = {
    id?: SortOrder
    airYards?: SortOrder
    yardsGained?: SortOrder
    cushion?: SortOrder
  }

  export type WeeklyRosterCreateNestedManyWithoutPlayerInput = {
    create?: XOR<WeeklyRosterCreateWithoutPlayerInput, WeeklyRosterUncheckedCreateWithoutPlayerInput> | WeeklyRosterCreateWithoutPlayerInput[] | WeeklyRosterUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: WeeklyRosterCreateOrConnectWithoutPlayerInput | WeeklyRosterCreateOrConnectWithoutPlayerInput[]
    createMany?: WeeklyRosterCreateManyPlayerInputEnvelope
    connect?: WeeklyRosterWhereUniqueInput | WeeklyRosterWhereUniqueInput[]
  }

  export type PlayerGameStatCreateNestedManyWithoutPlayerInput = {
    create?: XOR<PlayerGameStatCreateWithoutPlayerInput, PlayerGameStatUncheckedCreateWithoutPlayerInput> | PlayerGameStatCreateWithoutPlayerInput[] | PlayerGameStatUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerGameStatCreateOrConnectWithoutPlayerInput | PlayerGameStatCreateOrConnectWithoutPlayerInput[]
    createMany?: PlayerGameStatCreateManyPlayerInputEnvelope
    connect?: PlayerGameStatWhereUniqueInput | PlayerGameStatWhereUniqueInput[]
  }

  export type PlayPlayerCreateNestedManyWithoutPlayerInput = {
    create?: XOR<PlayPlayerCreateWithoutPlayerInput, PlayPlayerUncheckedCreateWithoutPlayerInput> | PlayPlayerCreateWithoutPlayerInput[] | PlayPlayerUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayPlayerCreateOrConnectWithoutPlayerInput | PlayPlayerCreateOrConnectWithoutPlayerInput[]
    createMany?: PlayPlayerCreateManyPlayerInputEnvelope
    connect?: PlayPlayerWhereUniqueInput | PlayPlayerWhereUniqueInput[]
  }

  export type WeeklyRosterUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<WeeklyRosterCreateWithoutPlayerInput, WeeklyRosterUncheckedCreateWithoutPlayerInput> | WeeklyRosterCreateWithoutPlayerInput[] | WeeklyRosterUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: WeeklyRosterCreateOrConnectWithoutPlayerInput | WeeklyRosterCreateOrConnectWithoutPlayerInput[]
    createMany?: WeeklyRosterCreateManyPlayerInputEnvelope
    connect?: WeeklyRosterWhereUniqueInput | WeeklyRosterWhereUniqueInput[]
  }

  export type PlayerGameStatUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<PlayerGameStatCreateWithoutPlayerInput, PlayerGameStatUncheckedCreateWithoutPlayerInput> | PlayerGameStatCreateWithoutPlayerInput[] | PlayerGameStatUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerGameStatCreateOrConnectWithoutPlayerInput | PlayerGameStatCreateOrConnectWithoutPlayerInput[]
    createMany?: PlayerGameStatCreateManyPlayerInputEnvelope
    connect?: PlayerGameStatWhereUniqueInput | PlayerGameStatWhereUniqueInput[]
  }

  export type PlayPlayerUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<PlayPlayerCreateWithoutPlayerInput, PlayPlayerUncheckedCreateWithoutPlayerInput> | PlayPlayerCreateWithoutPlayerInput[] | PlayPlayerUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayPlayerCreateOrConnectWithoutPlayerInput | PlayPlayerCreateOrConnectWithoutPlayerInput[]
    createMany?: PlayPlayerCreateManyPlayerInputEnvelope
    connect?: PlayPlayerWhereUniqueInput | PlayPlayerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type WeeklyRosterUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<WeeklyRosterCreateWithoutPlayerInput, WeeklyRosterUncheckedCreateWithoutPlayerInput> | WeeklyRosterCreateWithoutPlayerInput[] | WeeklyRosterUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: WeeklyRosterCreateOrConnectWithoutPlayerInput | WeeklyRosterCreateOrConnectWithoutPlayerInput[]
    upsert?: WeeklyRosterUpsertWithWhereUniqueWithoutPlayerInput | WeeklyRosterUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: WeeklyRosterCreateManyPlayerInputEnvelope
    set?: WeeklyRosterWhereUniqueInput | WeeklyRosterWhereUniqueInput[]
    disconnect?: WeeklyRosterWhereUniqueInput | WeeklyRosterWhereUniqueInput[]
    delete?: WeeklyRosterWhereUniqueInput | WeeklyRosterWhereUniqueInput[]
    connect?: WeeklyRosterWhereUniqueInput | WeeklyRosterWhereUniqueInput[]
    update?: WeeklyRosterUpdateWithWhereUniqueWithoutPlayerInput | WeeklyRosterUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: WeeklyRosterUpdateManyWithWhereWithoutPlayerInput | WeeklyRosterUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: WeeklyRosterScalarWhereInput | WeeklyRosterScalarWhereInput[]
  }

  export type PlayerGameStatUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<PlayerGameStatCreateWithoutPlayerInput, PlayerGameStatUncheckedCreateWithoutPlayerInput> | PlayerGameStatCreateWithoutPlayerInput[] | PlayerGameStatUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerGameStatCreateOrConnectWithoutPlayerInput | PlayerGameStatCreateOrConnectWithoutPlayerInput[]
    upsert?: PlayerGameStatUpsertWithWhereUniqueWithoutPlayerInput | PlayerGameStatUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: PlayerGameStatCreateManyPlayerInputEnvelope
    set?: PlayerGameStatWhereUniqueInput | PlayerGameStatWhereUniqueInput[]
    disconnect?: PlayerGameStatWhereUniqueInput | PlayerGameStatWhereUniqueInput[]
    delete?: PlayerGameStatWhereUniqueInput | PlayerGameStatWhereUniqueInput[]
    connect?: PlayerGameStatWhereUniqueInput | PlayerGameStatWhereUniqueInput[]
    update?: PlayerGameStatUpdateWithWhereUniqueWithoutPlayerInput | PlayerGameStatUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: PlayerGameStatUpdateManyWithWhereWithoutPlayerInput | PlayerGameStatUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: PlayerGameStatScalarWhereInput | PlayerGameStatScalarWhereInput[]
  }

  export type PlayPlayerUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<PlayPlayerCreateWithoutPlayerInput, PlayPlayerUncheckedCreateWithoutPlayerInput> | PlayPlayerCreateWithoutPlayerInput[] | PlayPlayerUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayPlayerCreateOrConnectWithoutPlayerInput | PlayPlayerCreateOrConnectWithoutPlayerInput[]
    upsert?: PlayPlayerUpsertWithWhereUniqueWithoutPlayerInput | PlayPlayerUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: PlayPlayerCreateManyPlayerInputEnvelope
    set?: PlayPlayerWhereUniqueInput | PlayPlayerWhereUniqueInput[]
    disconnect?: PlayPlayerWhereUniqueInput | PlayPlayerWhereUniqueInput[]
    delete?: PlayPlayerWhereUniqueInput | PlayPlayerWhereUniqueInput[]
    connect?: PlayPlayerWhereUniqueInput | PlayPlayerWhereUniqueInput[]
    update?: PlayPlayerUpdateWithWhereUniqueWithoutPlayerInput | PlayPlayerUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: PlayPlayerUpdateManyWithWhereWithoutPlayerInput | PlayPlayerUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: PlayPlayerScalarWhereInput | PlayPlayerScalarWhereInput[]
  }

  export type WeeklyRosterUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<WeeklyRosterCreateWithoutPlayerInput, WeeklyRosterUncheckedCreateWithoutPlayerInput> | WeeklyRosterCreateWithoutPlayerInput[] | WeeklyRosterUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: WeeklyRosterCreateOrConnectWithoutPlayerInput | WeeklyRosterCreateOrConnectWithoutPlayerInput[]
    upsert?: WeeklyRosterUpsertWithWhereUniqueWithoutPlayerInput | WeeklyRosterUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: WeeklyRosterCreateManyPlayerInputEnvelope
    set?: WeeklyRosterWhereUniqueInput | WeeklyRosterWhereUniqueInput[]
    disconnect?: WeeklyRosterWhereUniqueInput | WeeklyRosterWhereUniqueInput[]
    delete?: WeeklyRosterWhereUniqueInput | WeeklyRosterWhereUniqueInput[]
    connect?: WeeklyRosterWhereUniqueInput | WeeklyRosterWhereUniqueInput[]
    update?: WeeklyRosterUpdateWithWhereUniqueWithoutPlayerInput | WeeklyRosterUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: WeeklyRosterUpdateManyWithWhereWithoutPlayerInput | WeeklyRosterUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: WeeklyRosterScalarWhereInput | WeeklyRosterScalarWhereInput[]
  }

  export type PlayerGameStatUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<PlayerGameStatCreateWithoutPlayerInput, PlayerGameStatUncheckedCreateWithoutPlayerInput> | PlayerGameStatCreateWithoutPlayerInput[] | PlayerGameStatUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerGameStatCreateOrConnectWithoutPlayerInput | PlayerGameStatCreateOrConnectWithoutPlayerInput[]
    upsert?: PlayerGameStatUpsertWithWhereUniqueWithoutPlayerInput | PlayerGameStatUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: PlayerGameStatCreateManyPlayerInputEnvelope
    set?: PlayerGameStatWhereUniqueInput | PlayerGameStatWhereUniqueInput[]
    disconnect?: PlayerGameStatWhereUniqueInput | PlayerGameStatWhereUniqueInput[]
    delete?: PlayerGameStatWhereUniqueInput | PlayerGameStatWhereUniqueInput[]
    connect?: PlayerGameStatWhereUniqueInput | PlayerGameStatWhereUniqueInput[]
    update?: PlayerGameStatUpdateWithWhereUniqueWithoutPlayerInput | PlayerGameStatUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: PlayerGameStatUpdateManyWithWhereWithoutPlayerInput | PlayerGameStatUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: PlayerGameStatScalarWhereInput | PlayerGameStatScalarWhereInput[]
  }

  export type PlayPlayerUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<PlayPlayerCreateWithoutPlayerInput, PlayPlayerUncheckedCreateWithoutPlayerInput> | PlayPlayerCreateWithoutPlayerInput[] | PlayPlayerUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayPlayerCreateOrConnectWithoutPlayerInput | PlayPlayerCreateOrConnectWithoutPlayerInput[]
    upsert?: PlayPlayerUpsertWithWhereUniqueWithoutPlayerInput | PlayPlayerUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: PlayPlayerCreateManyPlayerInputEnvelope
    set?: PlayPlayerWhereUniqueInput | PlayPlayerWhereUniqueInput[]
    disconnect?: PlayPlayerWhereUniqueInput | PlayPlayerWhereUniqueInput[]
    delete?: PlayPlayerWhereUniqueInput | PlayPlayerWhereUniqueInput[]
    connect?: PlayPlayerWhereUniqueInput | PlayPlayerWhereUniqueInput[]
    update?: PlayPlayerUpdateWithWhereUniqueWithoutPlayerInput | PlayPlayerUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: PlayPlayerUpdateManyWithWhereWithoutPlayerInput | PlayPlayerUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: PlayPlayerScalarWhereInput | PlayPlayerScalarWhereInput[]
  }

  export type GameCreateNestedManyWithoutHomeTeamRelInput = {
    create?: XOR<GameCreateWithoutHomeTeamRelInput, GameUncheckedCreateWithoutHomeTeamRelInput> | GameCreateWithoutHomeTeamRelInput[] | GameUncheckedCreateWithoutHomeTeamRelInput[]
    connectOrCreate?: GameCreateOrConnectWithoutHomeTeamRelInput | GameCreateOrConnectWithoutHomeTeamRelInput[]
    createMany?: GameCreateManyHomeTeamRelInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameCreateNestedManyWithoutAwayTeamRelInput = {
    create?: XOR<GameCreateWithoutAwayTeamRelInput, GameUncheckedCreateWithoutAwayTeamRelInput> | GameCreateWithoutAwayTeamRelInput[] | GameUncheckedCreateWithoutAwayTeamRelInput[]
    connectOrCreate?: GameCreateOrConnectWithoutAwayTeamRelInput | GameCreateOrConnectWithoutAwayTeamRelInput[]
    createMany?: GameCreateManyAwayTeamRelInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type WeeklyRosterCreateNestedManyWithoutTeamRelInput = {
    create?: XOR<WeeklyRosterCreateWithoutTeamRelInput, WeeklyRosterUncheckedCreateWithoutTeamRelInput> | WeeklyRosterCreateWithoutTeamRelInput[] | WeeklyRosterUncheckedCreateWithoutTeamRelInput[]
    connectOrCreate?: WeeklyRosterCreateOrConnectWithoutTeamRelInput | WeeklyRosterCreateOrConnectWithoutTeamRelInput[]
    createMany?: WeeklyRosterCreateManyTeamRelInputEnvelope
    connect?: WeeklyRosterWhereUniqueInput | WeeklyRosterWhereUniqueInput[]
  }

  export type PlayerGameStatCreateNestedManyWithoutTeamRelInput = {
    create?: XOR<PlayerGameStatCreateWithoutTeamRelInput, PlayerGameStatUncheckedCreateWithoutTeamRelInput> | PlayerGameStatCreateWithoutTeamRelInput[] | PlayerGameStatUncheckedCreateWithoutTeamRelInput[]
    connectOrCreate?: PlayerGameStatCreateOrConnectWithoutTeamRelInput | PlayerGameStatCreateOrConnectWithoutTeamRelInput[]
    createMany?: PlayerGameStatCreateManyTeamRelInputEnvelope
    connect?: PlayerGameStatWhereUniqueInput | PlayerGameStatWhereUniqueInput[]
  }

  export type PlayCreateNestedManyWithoutOffTeamRelInput = {
    create?: XOR<PlayCreateWithoutOffTeamRelInput, PlayUncheckedCreateWithoutOffTeamRelInput> | PlayCreateWithoutOffTeamRelInput[] | PlayUncheckedCreateWithoutOffTeamRelInput[]
    connectOrCreate?: PlayCreateOrConnectWithoutOffTeamRelInput | PlayCreateOrConnectWithoutOffTeamRelInput[]
    createMany?: PlayCreateManyOffTeamRelInputEnvelope
    connect?: PlayWhereUniqueInput | PlayWhereUniqueInput[]
  }

  export type PlayCreateNestedManyWithoutDefTeamRelInput = {
    create?: XOR<PlayCreateWithoutDefTeamRelInput, PlayUncheckedCreateWithoutDefTeamRelInput> | PlayCreateWithoutDefTeamRelInput[] | PlayUncheckedCreateWithoutDefTeamRelInput[]
    connectOrCreate?: PlayCreateOrConnectWithoutDefTeamRelInput | PlayCreateOrConnectWithoutDefTeamRelInput[]
    createMany?: PlayCreateManyDefTeamRelInputEnvelope
    connect?: PlayWhereUniqueInput | PlayWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutHomeTeamRelInput = {
    create?: XOR<GameCreateWithoutHomeTeamRelInput, GameUncheckedCreateWithoutHomeTeamRelInput> | GameCreateWithoutHomeTeamRelInput[] | GameUncheckedCreateWithoutHomeTeamRelInput[]
    connectOrCreate?: GameCreateOrConnectWithoutHomeTeamRelInput | GameCreateOrConnectWithoutHomeTeamRelInput[]
    createMany?: GameCreateManyHomeTeamRelInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutAwayTeamRelInput = {
    create?: XOR<GameCreateWithoutAwayTeamRelInput, GameUncheckedCreateWithoutAwayTeamRelInput> | GameCreateWithoutAwayTeamRelInput[] | GameUncheckedCreateWithoutAwayTeamRelInput[]
    connectOrCreate?: GameCreateOrConnectWithoutAwayTeamRelInput | GameCreateOrConnectWithoutAwayTeamRelInput[]
    createMany?: GameCreateManyAwayTeamRelInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type WeeklyRosterUncheckedCreateNestedManyWithoutTeamRelInput = {
    create?: XOR<WeeklyRosterCreateWithoutTeamRelInput, WeeklyRosterUncheckedCreateWithoutTeamRelInput> | WeeklyRosterCreateWithoutTeamRelInput[] | WeeklyRosterUncheckedCreateWithoutTeamRelInput[]
    connectOrCreate?: WeeklyRosterCreateOrConnectWithoutTeamRelInput | WeeklyRosterCreateOrConnectWithoutTeamRelInput[]
    createMany?: WeeklyRosterCreateManyTeamRelInputEnvelope
    connect?: WeeklyRosterWhereUniqueInput | WeeklyRosterWhereUniqueInput[]
  }

  export type PlayerGameStatUncheckedCreateNestedManyWithoutTeamRelInput = {
    create?: XOR<PlayerGameStatCreateWithoutTeamRelInput, PlayerGameStatUncheckedCreateWithoutTeamRelInput> | PlayerGameStatCreateWithoutTeamRelInput[] | PlayerGameStatUncheckedCreateWithoutTeamRelInput[]
    connectOrCreate?: PlayerGameStatCreateOrConnectWithoutTeamRelInput | PlayerGameStatCreateOrConnectWithoutTeamRelInput[]
    createMany?: PlayerGameStatCreateManyTeamRelInputEnvelope
    connect?: PlayerGameStatWhereUniqueInput | PlayerGameStatWhereUniqueInput[]
  }

  export type PlayUncheckedCreateNestedManyWithoutOffTeamRelInput = {
    create?: XOR<PlayCreateWithoutOffTeamRelInput, PlayUncheckedCreateWithoutOffTeamRelInput> | PlayCreateWithoutOffTeamRelInput[] | PlayUncheckedCreateWithoutOffTeamRelInput[]
    connectOrCreate?: PlayCreateOrConnectWithoutOffTeamRelInput | PlayCreateOrConnectWithoutOffTeamRelInput[]
    createMany?: PlayCreateManyOffTeamRelInputEnvelope
    connect?: PlayWhereUniqueInput | PlayWhereUniqueInput[]
  }

  export type PlayUncheckedCreateNestedManyWithoutDefTeamRelInput = {
    create?: XOR<PlayCreateWithoutDefTeamRelInput, PlayUncheckedCreateWithoutDefTeamRelInput> | PlayCreateWithoutDefTeamRelInput[] | PlayUncheckedCreateWithoutDefTeamRelInput[]
    connectOrCreate?: PlayCreateOrConnectWithoutDefTeamRelInput | PlayCreateOrConnectWithoutDefTeamRelInput[]
    createMany?: PlayCreateManyDefTeamRelInputEnvelope
    connect?: PlayWhereUniqueInput | PlayWhereUniqueInput[]
  }

  export type GameUpdateManyWithoutHomeTeamRelNestedInput = {
    create?: XOR<GameCreateWithoutHomeTeamRelInput, GameUncheckedCreateWithoutHomeTeamRelInput> | GameCreateWithoutHomeTeamRelInput[] | GameUncheckedCreateWithoutHomeTeamRelInput[]
    connectOrCreate?: GameCreateOrConnectWithoutHomeTeamRelInput | GameCreateOrConnectWithoutHomeTeamRelInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutHomeTeamRelInput | GameUpsertWithWhereUniqueWithoutHomeTeamRelInput[]
    createMany?: GameCreateManyHomeTeamRelInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutHomeTeamRelInput | GameUpdateWithWhereUniqueWithoutHomeTeamRelInput[]
    updateMany?: GameUpdateManyWithWhereWithoutHomeTeamRelInput | GameUpdateManyWithWhereWithoutHomeTeamRelInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUpdateManyWithoutAwayTeamRelNestedInput = {
    create?: XOR<GameCreateWithoutAwayTeamRelInput, GameUncheckedCreateWithoutAwayTeamRelInput> | GameCreateWithoutAwayTeamRelInput[] | GameUncheckedCreateWithoutAwayTeamRelInput[]
    connectOrCreate?: GameCreateOrConnectWithoutAwayTeamRelInput | GameCreateOrConnectWithoutAwayTeamRelInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutAwayTeamRelInput | GameUpsertWithWhereUniqueWithoutAwayTeamRelInput[]
    createMany?: GameCreateManyAwayTeamRelInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutAwayTeamRelInput | GameUpdateWithWhereUniqueWithoutAwayTeamRelInput[]
    updateMany?: GameUpdateManyWithWhereWithoutAwayTeamRelInput | GameUpdateManyWithWhereWithoutAwayTeamRelInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type WeeklyRosterUpdateManyWithoutTeamRelNestedInput = {
    create?: XOR<WeeklyRosterCreateWithoutTeamRelInput, WeeklyRosterUncheckedCreateWithoutTeamRelInput> | WeeklyRosterCreateWithoutTeamRelInput[] | WeeklyRosterUncheckedCreateWithoutTeamRelInput[]
    connectOrCreate?: WeeklyRosterCreateOrConnectWithoutTeamRelInput | WeeklyRosterCreateOrConnectWithoutTeamRelInput[]
    upsert?: WeeklyRosterUpsertWithWhereUniqueWithoutTeamRelInput | WeeklyRosterUpsertWithWhereUniqueWithoutTeamRelInput[]
    createMany?: WeeklyRosterCreateManyTeamRelInputEnvelope
    set?: WeeklyRosterWhereUniqueInput | WeeklyRosterWhereUniqueInput[]
    disconnect?: WeeklyRosterWhereUniqueInput | WeeklyRosterWhereUniqueInput[]
    delete?: WeeklyRosterWhereUniqueInput | WeeklyRosterWhereUniqueInput[]
    connect?: WeeklyRosterWhereUniqueInput | WeeklyRosterWhereUniqueInput[]
    update?: WeeklyRosterUpdateWithWhereUniqueWithoutTeamRelInput | WeeklyRosterUpdateWithWhereUniqueWithoutTeamRelInput[]
    updateMany?: WeeklyRosterUpdateManyWithWhereWithoutTeamRelInput | WeeklyRosterUpdateManyWithWhereWithoutTeamRelInput[]
    deleteMany?: WeeklyRosterScalarWhereInput | WeeklyRosterScalarWhereInput[]
  }

  export type PlayerGameStatUpdateManyWithoutTeamRelNestedInput = {
    create?: XOR<PlayerGameStatCreateWithoutTeamRelInput, PlayerGameStatUncheckedCreateWithoutTeamRelInput> | PlayerGameStatCreateWithoutTeamRelInput[] | PlayerGameStatUncheckedCreateWithoutTeamRelInput[]
    connectOrCreate?: PlayerGameStatCreateOrConnectWithoutTeamRelInput | PlayerGameStatCreateOrConnectWithoutTeamRelInput[]
    upsert?: PlayerGameStatUpsertWithWhereUniqueWithoutTeamRelInput | PlayerGameStatUpsertWithWhereUniqueWithoutTeamRelInput[]
    createMany?: PlayerGameStatCreateManyTeamRelInputEnvelope
    set?: PlayerGameStatWhereUniqueInput | PlayerGameStatWhereUniqueInput[]
    disconnect?: PlayerGameStatWhereUniqueInput | PlayerGameStatWhereUniqueInput[]
    delete?: PlayerGameStatWhereUniqueInput | PlayerGameStatWhereUniqueInput[]
    connect?: PlayerGameStatWhereUniqueInput | PlayerGameStatWhereUniqueInput[]
    update?: PlayerGameStatUpdateWithWhereUniqueWithoutTeamRelInput | PlayerGameStatUpdateWithWhereUniqueWithoutTeamRelInput[]
    updateMany?: PlayerGameStatUpdateManyWithWhereWithoutTeamRelInput | PlayerGameStatUpdateManyWithWhereWithoutTeamRelInput[]
    deleteMany?: PlayerGameStatScalarWhereInput | PlayerGameStatScalarWhereInput[]
  }

  export type PlayUpdateManyWithoutOffTeamRelNestedInput = {
    create?: XOR<PlayCreateWithoutOffTeamRelInput, PlayUncheckedCreateWithoutOffTeamRelInput> | PlayCreateWithoutOffTeamRelInput[] | PlayUncheckedCreateWithoutOffTeamRelInput[]
    connectOrCreate?: PlayCreateOrConnectWithoutOffTeamRelInput | PlayCreateOrConnectWithoutOffTeamRelInput[]
    upsert?: PlayUpsertWithWhereUniqueWithoutOffTeamRelInput | PlayUpsertWithWhereUniqueWithoutOffTeamRelInput[]
    createMany?: PlayCreateManyOffTeamRelInputEnvelope
    set?: PlayWhereUniqueInput | PlayWhereUniqueInput[]
    disconnect?: PlayWhereUniqueInput | PlayWhereUniqueInput[]
    delete?: PlayWhereUniqueInput | PlayWhereUniqueInput[]
    connect?: PlayWhereUniqueInput | PlayWhereUniqueInput[]
    update?: PlayUpdateWithWhereUniqueWithoutOffTeamRelInput | PlayUpdateWithWhereUniqueWithoutOffTeamRelInput[]
    updateMany?: PlayUpdateManyWithWhereWithoutOffTeamRelInput | PlayUpdateManyWithWhereWithoutOffTeamRelInput[]
    deleteMany?: PlayScalarWhereInput | PlayScalarWhereInput[]
  }

  export type PlayUpdateManyWithoutDefTeamRelNestedInput = {
    create?: XOR<PlayCreateWithoutDefTeamRelInput, PlayUncheckedCreateWithoutDefTeamRelInput> | PlayCreateWithoutDefTeamRelInput[] | PlayUncheckedCreateWithoutDefTeamRelInput[]
    connectOrCreate?: PlayCreateOrConnectWithoutDefTeamRelInput | PlayCreateOrConnectWithoutDefTeamRelInput[]
    upsert?: PlayUpsertWithWhereUniqueWithoutDefTeamRelInput | PlayUpsertWithWhereUniqueWithoutDefTeamRelInput[]
    createMany?: PlayCreateManyDefTeamRelInputEnvelope
    set?: PlayWhereUniqueInput | PlayWhereUniqueInput[]
    disconnect?: PlayWhereUniqueInput | PlayWhereUniqueInput[]
    delete?: PlayWhereUniqueInput | PlayWhereUniqueInput[]
    connect?: PlayWhereUniqueInput | PlayWhereUniqueInput[]
    update?: PlayUpdateWithWhereUniqueWithoutDefTeamRelInput | PlayUpdateWithWhereUniqueWithoutDefTeamRelInput[]
    updateMany?: PlayUpdateManyWithWhereWithoutDefTeamRelInput | PlayUpdateManyWithWhereWithoutDefTeamRelInput[]
    deleteMany?: PlayScalarWhereInput | PlayScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutHomeTeamRelNestedInput = {
    create?: XOR<GameCreateWithoutHomeTeamRelInput, GameUncheckedCreateWithoutHomeTeamRelInput> | GameCreateWithoutHomeTeamRelInput[] | GameUncheckedCreateWithoutHomeTeamRelInput[]
    connectOrCreate?: GameCreateOrConnectWithoutHomeTeamRelInput | GameCreateOrConnectWithoutHomeTeamRelInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutHomeTeamRelInput | GameUpsertWithWhereUniqueWithoutHomeTeamRelInput[]
    createMany?: GameCreateManyHomeTeamRelInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutHomeTeamRelInput | GameUpdateWithWhereUniqueWithoutHomeTeamRelInput[]
    updateMany?: GameUpdateManyWithWhereWithoutHomeTeamRelInput | GameUpdateManyWithWhereWithoutHomeTeamRelInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutAwayTeamRelNestedInput = {
    create?: XOR<GameCreateWithoutAwayTeamRelInput, GameUncheckedCreateWithoutAwayTeamRelInput> | GameCreateWithoutAwayTeamRelInput[] | GameUncheckedCreateWithoutAwayTeamRelInput[]
    connectOrCreate?: GameCreateOrConnectWithoutAwayTeamRelInput | GameCreateOrConnectWithoutAwayTeamRelInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutAwayTeamRelInput | GameUpsertWithWhereUniqueWithoutAwayTeamRelInput[]
    createMany?: GameCreateManyAwayTeamRelInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutAwayTeamRelInput | GameUpdateWithWhereUniqueWithoutAwayTeamRelInput[]
    updateMany?: GameUpdateManyWithWhereWithoutAwayTeamRelInput | GameUpdateManyWithWhereWithoutAwayTeamRelInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type WeeklyRosterUncheckedUpdateManyWithoutTeamRelNestedInput = {
    create?: XOR<WeeklyRosterCreateWithoutTeamRelInput, WeeklyRosterUncheckedCreateWithoutTeamRelInput> | WeeklyRosterCreateWithoutTeamRelInput[] | WeeklyRosterUncheckedCreateWithoutTeamRelInput[]
    connectOrCreate?: WeeklyRosterCreateOrConnectWithoutTeamRelInput | WeeklyRosterCreateOrConnectWithoutTeamRelInput[]
    upsert?: WeeklyRosterUpsertWithWhereUniqueWithoutTeamRelInput | WeeklyRosterUpsertWithWhereUniqueWithoutTeamRelInput[]
    createMany?: WeeklyRosterCreateManyTeamRelInputEnvelope
    set?: WeeklyRosterWhereUniqueInput | WeeklyRosterWhereUniqueInput[]
    disconnect?: WeeklyRosterWhereUniqueInput | WeeklyRosterWhereUniqueInput[]
    delete?: WeeklyRosterWhereUniqueInput | WeeklyRosterWhereUniqueInput[]
    connect?: WeeklyRosterWhereUniqueInput | WeeklyRosterWhereUniqueInput[]
    update?: WeeklyRosterUpdateWithWhereUniqueWithoutTeamRelInput | WeeklyRosterUpdateWithWhereUniqueWithoutTeamRelInput[]
    updateMany?: WeeklyRosterUpdateManyWithWhereWithoutTeamRelInput | WeeklyRosterUpdateManyWithWhereWithoutTeamRelInput[]
    deleteMany?: WeeklyRosterScalarWhereInput | WeeklyRosterScalarWhereInput[]
  }

  export type PlayerGameStatUncheckedUpdateManyWithoutTeamRelNestedInput = {
    create?: XOR<PlayerGameStatCreateWithoutTeamRelInput, PlayerGameStatUncheckedCreateWithoutTeamRelInput> | PlayerGameStatCreateWithoutTeamRelInput[] | PlayerGameStatUncheckedCreateWithoutTeamRelInput[]
    connectOrCreate?: PlayerGameStatCreateOrConnectWithoutTeamRelInput | PlayerGameStatCreateOrConnectWithoutTeamRelInput[]
    upsert?: PlayerGameStatUpsertWithWhereUniqueWithoutTeamRelInput | PlayerGameStatUpsertWithWhereUniqueWithoutTeamRelInput[]
    createMany?: PlayerGameStatCreateManyTeamRelInputEnvelope
    set?: PlayerGameStatWhereUniqueInput | PlayerGameStatWhereUniqueInput[]
    disconnect?: PlayerGameStatWhereUniqueInput | PlayerGameStatWhereUniqueInput[]
    delete?: PlayerGameStatWhereUniqueInput | PlayerGameStatWhereUniqueInput[]
    connect?: PlayerGameStatWhereUniqueInput | PlayerGameStatWhereUniqueInput[]
    update?: PlayerGameStatUpdateWithWhereUniqueWithoutTeamRelInput | PlayerGameStatUpdateWithWhereUniqueWithoutTeamRelInput[]
    updateMany?: PlayerGameStatUpdateManyWithWhereWithoutTeamRelInput | PlayerGameStatUpdateManyWithWhereWithoutTeamRelInput[]
    deleteMany?: PlayerGameStatScalarWhereInput | PlayerGameStatScalarWhereInput[]
  }

  export type PlayUncheckedUpdateManyWithoutOffTeamRelNestedInput = {
    create?: XOR<PlayCreateWithoutOffTeamRelInput, PlayUncheckedCreateWithoutOffTeamRelInput> | PlayCreateWithoutOffTeamRelInput[] | PlayUncheckedCreateWithoutOffTeamRelInput[]
    connectOrCreate?: PlayCreateOrConnectWithoutOffTeamRelInput | PlayCreateOrConnectWithoutOffTeamRelInput[]
    upsert?: PlayUpsertWithWhereUniqueWithoutOffTeamRelInput | PlayUpsertWithWhereUniqueWithoutOffTeamRelInput[]
    createMany?: PlayCreateManyOffTeamRelInputEnvelope
    set?: PlayWhereUniqueInput | PlayWhereUniqueInput[]
    disconnect?: PlayWhereUniqueInput | PlayWhereUniqueInput[]
    delete?: PlayWhereUniqueInput | PlayWhereUniqueInput[]
    connect?: PlayWhereUniqueInput | PlayWhereUniqueInput[]
    update?: PlayUpdateWithWhereUniqueWithoutOffTeamRelInput | PlayUpdateWithWhereUniqueWithoutOffTeamRelInput[]
    updateMany?: PlayUpdateManyWithWhereWithoutOffTeamRelInput | PlayUpdateManyWithWhereWithoutOffTeamRelInput[]
    deleteMany?: PlayScalarWhereInput | PlayScalarWhereInput[]
  }

  export type PlayUncheckedUpdateManyWithoutDefTeamRelNestedInput = {
    create?: XOR<PlayCreateWithoutDefTeamRelInput, PlayUncheckedCreateWithoutDefTeamRelInput> | PlayCreateWithoutDefTeamRelInput[] | PlayUncheckedCreateWithoutDefTeamRelInput[]
    connectOrCreate?: PlayCreateOrConnectWithoutDefTeamRelInput | PlayCreateOrConnectWithoutDefTeamRelInput[]
    upsert?: PlayUpsertWithWhereUniqueWithoutDefTeamRelInput | PlayUpsertWithWhereUniqueWithoutDefTeamRelInput[]
    createMany?: PlayCreateManyDefTeamRelInputEnvelope
    set?: PlayWhereUniqueInput | PlayWhereUniqueInput[]
    disconnect?: PlayWhereUniqueInput | PlayWhereUniqueInput[]
    delete?: PlayWhereUniqueInput | PlayWhereUniqueInput[]
    connect?: PlayWhereUniqueInput | PlayWhereUniqueInput[]
    update?: PlayUpdateWithWhereUniqueWithoutDefTeamRelInput | PlayUpdateWithWhereUniqueWithoutDefTeamRelInput[]
    updateMany?: PlayUpdateManyWithWhereWithoutDefTeamRelInput | PlayUpdateManyWithWhereWithoutDefTeamRelInput[]
    deleteMany?: PlayScalarWhereInput | PlayScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutHomeGamesInput = {
    create?: XOR<TeamCreateWithoutHomeGamesInput, TeamUncheckedCreateWithoutHomeGamesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutHomeGamesInput
    connect?: TeamWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutAwayGamesInput = {
    create?: XOR<TeamCreateWithoutAwayGamesInput, TeamUncheckedCreateWithoutAwayGamesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutAwayGamesInput
    connect?: TeamWhereUniqueInput
  }

  export type PlayCreateNestedManyWithoutGameInput = {
    create?: XOR<PlayCreateWithoutGameInput, PlayUncheckedCreateWithoutGameInput> | PlayCreateWithoutGameInput[] | PlayUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PlayCreateOrConnectWithoutGameInput | PlayCreateOrConnectWithoutGameInput[]
    createMany?: PlayCreateManyGameInputEnvelope
    connect?: PlayWhereUniqueInput | PlayWhereUniqueInput[]
  }

  export type PlayerGameStatCreateNestedManyWithoutGameInput = {
    create?: XOR<PlayerGameStatCreateWithoutGameInput, PlayerGameStatUncheckedCreateWithoutGameInput> | PlayerGameStatCreateWithoutGameInput[] | PlayerGameStatUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PlayerGameStatCreateOrConnectWithoutGameInput | PlayerGameStatCreateOrConnectWithoutGameInput[]
    createMany?: PlayerGameStatCreateManyGameInputEnvelope
    connect?: PlayerGameStatWhereUniqueInput | PlayerGameStatWhereUniqueInput[]
  }

  export type PlayUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<PlayCreateWithoutGameInput, PlayUncheckedCreateWithoutGameInput> | PlayCreateWithoutGameInput[] | PlayUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PlayCreateOrConnectWithoutGameInput | PlayCreateOrConnectWithoutGameInput[]
    createMany?: PlayCreateManyGameInputEnvelope
    connect?: PlayWhereUniqueInput | PlayWhereUniqueInput[]
  }

  export type PlayerGameStatUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<PlayerGameStatCreateWithoutGameInput, PlayerGameStatUncheckedCreateWithoutGameInput> | PlayerGameStatCreateWithoutGameInput[] | PlayerGameStatUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PlayerGameStatCreateOrConnectWithoutGameInput | PlayerGameStatCreateOrConnectWithoutGameInput[]
    createMany?: PlayerGameStatCreateManyGameInputEnvelope
    connect?: PlayerGameStatWhereUniqueInput | PlayerGameStatWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TeamUpdateOneRequiredWithoutHomeGamesNestedInput = {
    create?: XOR<TeamCreateWithoutHomeGamesInput, TeamUncheckedCreateWithoutHomeGamesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutHomeGamesInput
    upsert?: TeamUpsertWithoutHomeGamesInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutHomeGamesInput, TeamUpdateWithoutHomeGamesInput>, TeamUncheckedUpdateWithoutHomeGamesInput>
  }

  export type TeamUpdateOneRequiredWithoutAwayGamesNestedInput = {
    create?: XOR<TeamCreateWithoutAwayGamesInput, TeamUncheckedCreateWithoutAwayGamesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutAwayGamesInput
    upsert?: TeamUpsertWithoutAwayGamesInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutAwayGamesInput, TeamUpdateWithoutAwayGamesInput>, TeamUncheckedUpdateWithoutAwayGamesInput>
  }

  export type PlayUpdateManyWithoutGameNestedInput = {
    create?: XOR<PlayCreateWithoutGameInput, PlayUncheckedCreateWithoutGameInput> | PlayCreateWithoutGameInput[] | PlayUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PlayCreateOrConnectWithoutGameInput | PlayCreateOrConnectWithoutGameInput[]
    upsert?: PlayUpsertWithWhereUniqueWithoutGameInput | PlayUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: PlayCreateManyGameInputEnvelope
    set?: PlayWhereUniqueInput | PlayWhereUniqueInput[]
    disconnect?: PlayWhereUniqueInput | PlayWhereUniqueInput[]
    delete?: PlayWhereUniqueInput | PlayWhereUniqueInput[]
    connect?: PlayWhereUniqueInput | PlayWhereUniqueInput[]
    update?: PlayUpdateWithWhereUniqueWithoutGameInput | PlayUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: PlayUpdateManyWithWhereWithoutGameInput | PlayUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: PlayScalarWhereInput | PlayScalarWhereInput[]
  }

  export type PlayerGameStatUpdateManyWithoutGameNestedInput = {
    create?: XOR<PlayerGameStatCreateWithoutGameInput, PlayerGameStatUncheckedCreateWithoutGameInput> | PlayerGameStatCreateWithoutGameInput[] | PlayerGameStatUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PlayerGameStatCreateOrConnectWithoutGameInput | PlayerGameStatCreateOrConnectWithoutGameInput[]
    upsert?: PlayerGameStatUpsertWithWhereUniqueWithoutGameInput | PlayerGameStatUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: PlayerGameStatCreateManyGameInputEnvelope
    set?: PlayerGameStatWhereUniqueInput | PlayerGameStatWhereUniqueInput[]
    disconnect?: PlayerGameStatWhereUniqueInput | PlayerGameStatWhereUniqueInput[]
    delete?: PlayerGameStatWhereUniqueInput | PlayerGameStatWhereUniqueInput[]
    connect?: PlayerGameStatWhereUniqueInput | PlayerGameStatWhereUniqueInput[]
    update?: PlayerGameStatUpdateWithWhereUniqueWithoutGameInput | PlayerGameStatUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: PlayerGameStatUpdateManyWithWhereWithoutGameInput | PlayerGameStatUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: PlayerGameStatScalarWhereInput | PlayerGameStatScalarWhereInput[]
  }

  export type PlayUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<PlayCreateWithoutGameInput, PlayUncheckedCreateWithoutGameInput> | PlayCreateWithoutGameInput[] | PlayUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PlayCreateOrConnectWithoutGameInput | PlayCreateOrConnectWithoutGameInput[]
    upsert?: PlayUpsertWithWhereUniqueWithoutGameInput | PlayUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: PlayCreateManyGameInputEnvelope
    set?: PlayWhereUniqueInput | PlayWhereUniqueInput[]
    disconnect?: PlayWhereUniqueInput | PlayWhereUniqueInput[]
    delete?: PlayWhereUniqueInput | PlayWhereUniqueInput[]
    connect?: PlayWhereUniqueInput | PlayWhereUniqueInput[]
    update?: PlayUpdateWithWhereUniqueWithoutGameInput | PlayUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: PlayUpdateManyWithWhereWithoutGameInput | PlayUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: PlayScalarWhereInput | PlayScalarWhereInput[]
  }

  export type PlayerGameStatUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<PlayerGameStatCreateWithoutGameInput, PlayerGameStatUncheckedCreateWithoutGameInput> | PlayerGameStatCreateWithoutGameInput[] | PlayerGameStatUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PlayerGameStatCreateOrConnectWithoutGameInput | PlayerGameStatCreateOrConnectWithoutGameInput[]
    upsert?: PlayerGameStatUpsertWithWhereUniqueWithoutGameInput | PlayerGameStatUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: PlayerGameStatCreateManyGameInputEnvelope
    set?: PlayerGameStatWhereUniqueInput | PlayerGameStatWhereUniqueInput[]
    disconnect?: PlayerGameStatWhereUniqueInput | PlayerGameStatWhereUniqueInput[]
    delete?: PlayerGameStatWhereUniqueInput | PlayerGameStatWhereUniqueInput[]
    connect?: PlayerGameStatWhereUniqueInput | PlayerGameStatWhereUniqueInput[]
    update?: PlayerGameStatUpdateWithWhereUniqueWithoutGameInput | PlayerGameStatUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: PlayerGameStatUpdateManyWithWhereWithoutGameInput | PlayerGameStatUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: PlayerGameStatScalarWhereInput | PlayerGameStatScalarWhereInput[]
  }

  export type PlayerCreateNestedOneWithoutWeeklyRostersInput = {
    create?: XOR<PlayerCreateWithoutWeeklyRostersInput, PlayerUncheckedCreateWithoutWeeklyRostersInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutWeeklyRostersInput
    connect?: PlayerWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutWeeklyRostersInput = {
    create?: XOR<TeamCreateWithoutWeeklyRostersInput, TeamUncheckedCreateWithoutWeeklyRostersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutWeeklyRostersInput
    connect?: TeamWhereUniqueInput
  }

  export type PlayerUpdateOneRequiredWithoutWeeklyRostersNestedInput = {
    create?: XOR<PlayerCreateWithoutWeeklyRostersInput, PlayerUncheckedCreateWithoutWeeklyRostersInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutWeeklyRostersInput
    upsert?: PlayerUpsertWithoutWeeklyRostersInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutWeeklyRostersInput, PlayerUpdateWithoutWeeklyRostersInput>, PlayerUncheckedUpdateWithoutWeeklyRostersInput>
  }

  export type TeamUpdateOneRequiredWithoutWeeklyRostersNestedInput = {
    create?: XOR<TeamCreateWithoutWeeklyRostersInput, TeamUncheckedCreateWithoutWeeklyRostersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutWeeklyRostersInput
    upsert?: TeamUpsertWithoutWeeklyRostersInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutWeeklyRostersInput, TeamUpdateWithoutWeeklyRostersInput>, TeamUncheckedUpdateWithoutWeeklyRostersInput>
  }

  export type PlayerCreateNestedOneWithoutPlayerGameStatsInput = {
    create?: XOR<PlayerCreateWithoutPlayerGameStatsInput, PlayerUncheckedCreateWithoutPlayerGameStatsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutPlayerGameStatsInput
    connect?: PlayerWhereUniqueInput
  }

  export type GameCreateNestedOneWithoutPlayerGameStatsInput = {
    create?: XOR<GameCreateWithoutPlayerGameStatsInput, GameUncheckedCreateWithoutPlayerGameStatsInput>
    connectOrCreate?: GameCreateOrConnectWithoutPlayerGameStatsInput
    connect?: GameWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutPlayerGameStatsInput = {
    create?: XOR<TeamCreateWithoutPlayerGameStatsInput, TeamUncheckedCreateWithoutPlayerGameStatsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPlayerGameStatsInput
    connect?: TeamWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PlayerUpdateOneRequiredWithoutPlayerGameStatsNestedInput = {
    create?: XOR<PlayerCreateWithoutPlayerGameStatsInput, PlayerUncheckedCreateWithoutPlayerGameStatsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutPlayerGameStatsInput
    upsert?: PlayerUpsertWithoutPlayerGameStatsInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutPlayerGameStatsInput, PlayerUpdateWithoutPlayerGameStatsInput>, PlayerUncheckedUpdateWithoutPlayerGameStatsInput>
  }

  export type GameUpdateOneRequiredWithoutPlayerGameStatsNestedInput = {
    create?: XOR<GameCreateWithoutPlayerGameStatsInput, GameUncheckedCreateWithoutPlayerGameStatsInput>
    connectOrCreate?: GameCreateOrConnectWithoutPlayerGameStatsInput
    upsert?: GameUpsertWithoutPlayerGameStatsInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutPlayerGameStatsInput, GameUpdateWithoutPlayerGameStatsInput>, GameUncheckedUpdateWithoutPlayerGameStatsInput>
  }

  export type TeamUpdateOneRequiredWithoutPlayerGameStatsNestedInput = {
    create?: XOR<TeamCreateWithoutPlayerGameStatsInput, TeamUncheckedCreateWithoutPlayerGameStatsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPlayerGameStatsInput
    upsert?: TeamUpsertWithoutPlayerGameStatsInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutPlayerGameStatsInput, TeamUpdateWithoutPlayerGameStatsInput>, TeamUncheckedUpdateWithoutPlayerGameStatsInput>
  }

  export type GameCreateNestedOneWithoutPlaysInput = {
    create?: XOR<GameCreateWithoutPlaysInput, GameUncheckedCreateWithoutPlaysInput>
    connectOrCreate?: GameCreateOrConnectWithoutPlaysInput
    connect?: GameWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutOffensivePlaysInput = {
    create?: XOR<TeamCreateWithoutOffensivePlaysInput, TeamUncheckedCreateWithoutOffensivePlaysInput>
    connectOrCreate?: TeamCreateOrConnectWithoutOffensivePlaysInput
    connect?: TeamWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutDefensivePlaysInput = {
    create?: XOR<TeamCreateWithoutDefensivePlaysInput, TeamUncheckedCreateWithoutDefensivePlaysInput>
    connectOrCreate?: TeamCreateOrConnectWithoutDefensivePlaysInput
    connect?: TeamWhereUniqueInput
  }

  export type PlayPlayerCreateNestedManyWithoutPlayInput = {
    create?: XOR<PlayPlayerCreateWithoutPlayInput, PlayPlayerUncheckedCreateWithoutPlayInput> | PlayPlayerCreateWithoutPlayInput[] | PlayPlayerUncheckedCreateWithoutPlayInput[]
    connectOrCreate?: PlayPlayerCreateOrConnectWithoutPlayInput | PlayPlayerCreateOrConnectWithoutPlayInput[]
    createMany?: PlayPlayerCreateManyPlayInputEnvelope
    connect?: PlayPlayerWhereUniqueInput | PlayPlayerWhereUniqueInput[]
  }

  export type PlayPlayerUncheckedCreateNestedManyWithoutPlayInput = {
    create?: XOR<PlayPlayerCreateWithoutPlayInput, PlayPlayerUncheckedCreateWithoutPlayInput> | PlayPlayerCreateWithoutPlayInput[] | PlayPlayerUncheckedCreateWithoutPlayInput[]
    connectOrCreate?: PlayPlayerCreateOrConnectWithoutPlayInput | PlayPlayerCreateOrConnectWithoutPlayInput[]
    createMany?: PlayPlayerCreateManyPlayInputEnvelope
    connect?: PlayPlayerWhereUniqueInput | PlayPlayerWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type GameUpdateOneRequiredWithoutPlaysNestedInput = {
    create?: XOR<GameCreateWithoutPlaysInput, GameUncheckedCreateWithoutPlaysInput>
    connectOrCreate?: GameCreateOrConnectWithoutPlaysInput
    upsert?: GameUpsertWithoutPlaysInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutPlaysInput, GameUpdateWithoutPlaysInput>, GameUncheckedUpdateWithoutPlaysInput>
  }

  export type TeamUpdateOneRequiredWithoutOffensivePlaysNestedInput = {
    create?: XOR<TeamCreateWithoutOffensivePlaysInput, TeamUncheckedCreateWithoutOffensivePlaysInput>
    connectOrCreate?: TeamCreateOrConnectWithoutOffensivePlaysInput
    upsert?: TeamUpsertWithoutOffensivePlaysInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutOffensivePlaysInput, TeamUpdateWithoutOffensivePlaysInput>, TeamUncheckedUpdateWithoutOffensivePlaysInput>
  }

  export type TeamUpdateOneRequiredWithoutDefensivePlaysNestedInput = {
    create?: XOR<TeamCreateWithoutDefensivePlaysInput, TeamUncheckedCreateWithoutDefensivePlaysInput>
    connectOrCreate?: TeamCreateOrConnectWithoutDefensivePlaysInput
    upsert?: TeamUpsertWithoutDefensivePlaysInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutDefensivePlaysInput, TeamUpdateWithoutDefensivePlaysInput>, TeamUncheckedUpdateWithoutDefensivePlaysInput>
  }

  export type PlayPlayerUpdateManyWithoutPlayNestedInput = {
    create?: XOR<PlayPlayerCreateWithoutPlayInput, PlayPlayerUncheckedCreateWithoutPlayInput> | PlayPlayerCreateWithoutPlayInput[] | PlayPlayerUncheckedCreateWithoutPlayInput[]
    connectOrCreate?: PlayPlayerCreateOrConnectWithoutPlayInput | PlayPlayerCreateOrConnectWithoutPlayInput[]
    upsert?: PlayPlayerUpsertWithWhereUniqueWithoutPlayInput | PlayPlayerUpsertWithWhereUniqueWithoutPlayInput[]
    createMany?: PlayPlayerCreateManyPlayInputEnvelope
    set?: PlayPlayerWhereUniqueInput | PlayPlayerWhereUniqueInput[]
    disconnect?: PlayPlayerWhereUniqueInput | PlayPlayerWhereUniqueInput[]
    delete?: PlayPlayerWhereUniqueInput | PlayPlayerWhereUniqueInput[]
    connect?: PlayPlayerWhereUniqueInput | PlayPlayerWhereUniqueInput[]
    update?: PlayPlayerUpdateWithWhereUniqueWithoutPlayInput | PlayPlayerUpdateWithWhereUniqueWithoutPlayInput[]
    updateMany?: PlayPlayerUpdateManyWithWhereWithoutPlayInput | PlayPlayerUpdateManyWithWhereWithoutPlayInput[]
    deleteMany?: PlayPlayerScalarWhereInput | PlayPlayerScalarWhereInput[]
  }

  export type PlayPlayerUncheckedUpdateManyWithoutPlayNestedInput = {
    create?: XOR<PlayPlayerCreateWithoutPlayInput, PlayPlayerUncheckedCreateWithoutPlayInput> | PlayPlayerCreateWithoutPlayInput[] | PlayPlayerUncheckedCreateWithoutPlayInput[]
    connectOrCreate?: PlayPlayerCreateOrConnectWithoutPlayInput | PlayPlayerCreateOrConnectWithoutPlayInput[]
    upsert?: PlayPlayerUpsertWithWhereUniqueWithoutPlayInput | PlayPlayerUpsertWithWhereUniqueWithoutPlayInput[]
    createMany?: PlayPlayerCreateManyPlayInputEnvelope
    set?: PlayPlayerWhereUniqueInput | PlayPlayerWhereUniqueInput[]
    disconnect?: PlayPlayerWhereUniqueInput | PlayPlayerWhereUniqueInput[]
    delete?: PlayPlayerWhereUniqueInput | PlayPlayerWhereUniqueInput[]
    connect?: PlayPlayerWhereUniqueInput | PlayPlayerWhereUniqueInput[]
    update?: PlayPlayerUpdateWithWhereUniqueWithoutPlayInput | PlayPlayerUpdateWithWhereUniqueWithoutPlayInput[]
    updateMany?: PlayPlayerUpdateManyWithWhereWithoutPlayInput | PlayPlayerUpdateManyWithWhereWithoutPlayInput[]
    deleteMany?: PlayPlayerScalarWhereInput | PlayPlayerScalarWhereInput[]
  }

  export type PlayCreateNestedOneWithoutPlayPlayersInput = {
    create?: XOR<PlayCreateWithoutPlayPlayersInput, PlayUncheckedCreateWithoutPlayPlayersInput>
    connectOrCreate?: PlayCreateOrConnectWithoutPlayPlayersInput
    connect?: PlayWhereUniqueInput
  }

  export type PlayerCreateNestedOneWithoutPlayPlayersInput = {
    create?: XOR<PlayerCreateWithoutPlayPlayersInput, PlayerUncheckedCreateWithoutPlayPlayersInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutPlayPlayersInput
    connect?: PlayerWhereUniqueInput
  }

  export type PlayUpdateOneRequiredWithoutPlayPlayersNestedInput = {
    create?: XOR<PlayCreateWithoutPlayPlayersInput, PlayUncheckedCreateWithoutPlayPlayersInput>
    connectOrCreate?: PlayCreateOrConnectWithoutPlayPlayersInput
    upsert?: PlayUpsertWithoutPlayPlayersInput
    connect?: PlayWhereUniqueInput
    update?: XOR<XOR<PlayUpdateToOneWithWhereWithoutPlayPlayersInput, PlayUpdateWithoutPlayPlayersInput>, PlayUncheckedUpdateWithoutPlayPlayersInput>
  }

  export type PlayerUpdateOneRequiredWithoutPlayPlayersNestedInput = {
    create?: XOR<PlayerCreateWithoutPlayPlayersInput, PlayerUncheckedCreateWithoutPlayPlayersInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutPlayPlayersInput
    upsert?: PlayerUpsertWithoutPlayPlayersInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutPlayPlayersInput, PlayerUpdateWithoutPlayPlayersInput>, PlayerUncheckedUpdateWithoutPlayPlayersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type WeeklyRosterCreateWithoutPlayerInput = {
    week: number
    season: number
    jerseyNumber?: number | null
    position?: string | null
    teamRel: TeamCreateNestedOneWithoutWeeklyRostersInput
  }

  export type WeeklyRosterUncheckedCreateWithoutPlayerInput = {
    id?: number
    week: number
    season: number
    team: string
    jerseyNumber?: number | null
    position?: string | null
  }

  export type WeeklyRosterCreateOrConnectWithoutPlayerInput = {
    where: WeeklyRosterWhereUniqueInput
    create: XOR<WeeklyRosterCreateWithoutPlayerInput, WeeklyRosterUncheckedCreateWithoutPlayerInput>
  }

  export type WeeklyRosterCreateManyPlayerInputEnvelope = {
    data: WeeklyRosterCreateManyPlayerInput | WeeklyRosterCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type PlayerGameStatCreateWithoutPlayerInput = {
    position?: string | null
    snaps?: number | null
    snapShare?: number | null
    fantasyPoints?: number | null
    passAttempts?: number | null
    completions?: number | null
    passYards?: number | null
    passTDs?: number | null
    interceptions?: number | null
    carries?: number | null
    rushYards?: number | null
    rushTDs?: number | null
    targets?: number | null
    receptions?: number | null
    receivingYards?: number | null
    receivingTDs?: number | null
    airYards?: number | null
    scrimmageYards?: number | null
    totalTDs?: number | null
    totalTouches?: number | null
    opportunities?: number | null
    evadedTackles?: number | null
    yardsCreated?: number | null
    yardsPerCarry?: number | null
    yardsPerTarget?: number | null
    yardsPerReception?: number | null
    game: GameCreateNestedOneWithoutPlayerGameStatsInput
    teamRel: TeamCreateNestedOneWithoutPlayerGameStatsInput
  }

  export type PlayerGameStatUncheckedCreateWithoutPlayerInput = {
    id?: number
    gameKey: string
    team: string
    position?: string | null
    snaps?: number | null
    snapShare?: number | null
    fantasyPoints?: number | null
    passAttempts?: number | null
    completions?: number | null
    passYards?: number | null
    passTDs?: number | null
    interceptions?: number | null
    carries?: number | null
    rushYards?: number | null
    rushTDs?: number | null
    targets?: number | null
    receptions?: number | null
    receivingYards?: number | null
    receivingTDs?: number | null
    airYards?: number | null
    scrimmageYards?: number | null
    totalTDs?: number | null
    totalTouches?: number | null
    opportunities?: number | null
    evadedTackles?: number | null
    yardsCreated?: number | null
    yardsPerCarry?: number | null
    yardsPerTarget?: number | null
    yardsPerReception?: number | null
  }

  export type PlayerGameStatCreateOrConnectWithoutPlayerInput = {
    where: PlayerGameStatWhereUniqueInput
    create: XOR<PlayerGameStatCreateWithoutPlayerInput, PlayerGameStatUncheckedCreateWithoutPlayerInput>
  }

  export type PlayerGameStatCreateManyPlayerInputEnvelope = {
    data: PlayerGameStatCreateManyPlayerInput | PlayerGameStatCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type PlayPlayerCreateWithoutPlayerInput = {
    role: string
    airYards?: number | null
    yardsGained?: number | null
    targeted?: boolean | null
    completed?: boolean | null
    routeType?: string | null
    coverage?: string | null
    cushion?: number | null
    play: PlayCreateNestedOneWithoutPlayPlayersInput
  }

  export type PlayPlayerUncheckedCreateWithoutPlayerInput = {
    id?: number
    playId: string
    role: string
    airYards?: number | null
    yardsGained?: number | null
    targeted?: boolean | null
    completed?: boolean | null
    routeType?: string | null
    coverage?: string | null
    cushion?: number | null
  }

  export type PlayPlayerCreateOrConnectWithoutPlayerInput = {
    where: PlayPlayerWhereUniqueInput
    create: XOR<PlayPlayerCreateWithoutPlayerInput, PlayPlayerUncheckedCreateWithoutPlayerInput>
  }

  export type PlayPlayerCreateManyPlayerInputEnvelope = {
    data: PlayPlayerCreateManyPlayerInput | PlayPlayerCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type WeeklyRosterUpsertWithWhereUniqueWithoutPlayerInput = {
    where: WeeklyRosterWhereUniqueInput
    update: XOR<WeeklyRosterUpdateWithoutPlayerInput, WeeklyRosterUncheckedUpdateWithoutPlayerInput>
    create: XOR<WeeklyRosterCreateWithoutPlayerInput, WeeklyRosterUncheckedCreateWithoutPlayerInput>
  }

  export type WeeklyRosterUpdateWithWhereUniqueWithoutPlayerInput = {
    where: WeeklyRosterWhereUniqueInput
    data: XOR<WeeklyRosterUpdateWithoutPlayerInput, WeeklyRosterUncheckedUpdateWithoutPlayerInput>
  }

  export type WeeklyRosterUpdateManyWithWhereWithoutPlayerInput = {
    where: WeeklyRosterScalarWhereInput
    data: XOR<WeeklyRosterUpdateManyMutationInput, WeeklyRosterUncheckedUpdateManyWithoutPlayerInput>
  }

  export type WeeklyRosterScalarWhereInput = {
    AND?: WeeklyRosterScalarWhereInput | WeeklyRosterScalarWhereInput[]
    OR?: WeeklyRosterScalarWhereInput[]
    NOT?: WeeklyRosterScalarWhereInput | WeeklyRosterScalarWhereInput[]
    id?: IntFilter<"WeeklyRoster"> | number
    playerId?: StringFilter<"WeeklyRoster"> | string
    week?: IntFilter<"WeeklyRoster"> | number
    season?: IntFilter<"WeeklyRoster"> | number
    team?: StringFilter<"WeeklyRoster"> | string
    jerseyNumber?: IntNullableFilter<"WeeklyRoster"> | number | null
    position?: StringNullableFilter<"WeeklyRoster"> | string | null
  }

  export type PlayerGameStatUpsertWithWhereUniqueWithoutPlayerInput = {
    where: PlayerGameStatWhereUniqueInput
    update: XOR<PlayerGameStatUpdateWithoutPlayerInput, PlayerGameStatUncheckedUpdateWithoutPlayerInput>
    create: XOR<PlayerGameStatCreateWithoutPlayerInput, PlayerGameStatUncheckedCreateWithoutPlayerInput>
  }

  export type PlayerGameStatUpdateWithWhereUniqueWithoutPlayerInput = {
    where: PlayerGameStatWhereUniqueInput
    data: XOR<PlayerGameStatUpdateWithoutPlayerInput, PlayerGameStatUncheckedUpdateWithoutPlayerInput>
  }

  export type PlayerGameStatUpdateManyWithWhereWithoutPlayerInput = {
    where: PlayerGameStatScalarWhereInput
    data: XOR<PlayerGameStatUpdateManyMutationInput, PlayerGameStatUncheckedUpdateManyWithoutPlayerInput>
  }

  export type PlayerGameStatScalarWhereInput = {
    AND?: PlayerGameStatScalarWhereInput | PlayerGameStatScalarWhereInput[]
    OR?: PlayerGameStatScalarWhereInput[]
    NOT?: PlayerGameStatScalarWhereInput | PlayerGameStatScalarWhereInput[]
    id?: IntFilter<"PlayerGameStat"> | number
    playerId?: StringFilter<"PlayerGameStat"> | string
    gameKey?: StringFilter<"PlayerGameStat"> | string
    team?: StringFilter<"PlayerGameStat"> | string
    position?: StringNullableFilter<"PlayerGameStat"> | string | null
    snaps?: IntNullableFilter<"PlayerGameStat"> | number | null
    snapShare?: FloatNullableFilter<"PlayerGameStat"> | number | null
    fantasyPoints?: FloatNullableFilter<"PlayerGameStat"> | number | null
    passAttempts?: IntNullableFilter<"PlayerGameStat"> | number | null
    completions?: IntNullableFilter<"PlayerGameStat"> | number | null
    passYards?: IntNullableFilter<"PlayerGameStat"> | number | null
    passTDs?: IntNullableFilter<"PlayerGameStat"> | number | null
    interceptions?: IntNullableFilter<"PlayerGameStat"> | number | null
    carries?: IntNullableFilter<"PlayerGameStat"> | number | null
    rushYards?: IntNullableFilter<"PlayerGameStat"> | number | null
    rushTDs?: IntNullableFilter<"PlayerGameStat"> | number | null
    targets?: IntNullableFilter<"PlayerGameStat"> | number | null
    receptions?: IntNullableFilter<"PlayerGameStat"> | number | null
    receivingYards?: IntNullableFilter<"PlayerGameStat"> | number | null
    receivingTDs?: IntNullableFilter<"PlayerGameStat"> | number | null
    airYards?: IntNullableFilter<"PlayerGameStat"> | number | null
    scrimmageYards?: IntNullableFilter<"PlayerGameStat"> | number | null
    totalTDs?: IntNullableFilter<"PlayerGameStat"> | number | null
    totalTouches?: IntNullableFilter<"PlayerGameStat"> | number | null
    opportunities?: IntNullableFilter<"PlayerGameStat"> | number | null
    evadedTackles?: IntNullableFilter<"PlayerGameStat"> | number | null
    yardsCreated?: IntNullableFilter<"PlayerGameStat"> | number | null
    yardsPerCarry?: FloatNullableFilter<"PlayerGameStat"> | number | null
    yardsPerTarget?: FloatNullableFilter<"PlayerGameStat"> | number | null
    yardsPerReception?: FloatNullableFilter<"PlayerGameStat"> | number | null
  }

  export type PlayPlayerUpsertWithWhereUniqueWithoutPlayerInput = {
    where: PlayPlayerWhereUniqueInput
    update: XOR<PlayPlayerUpdateWithoutPlayerInput, PlayPlayerUncheckedUpdateWithoutPlayerInput>
    create: XOR<PlayPlayerCreateWithoutPlayerInput, PlayPlayerUncheckedCreateWithoutPlayerInput>
  }

  export type PlayPlayerUpdateWithWhereUniqueWithoutPlayerInput = {
    where: PlayPlayerWhereUniqueInput
    data: XOR<PlayPlayerUpdateWithoutPlayerInput, PlayPlayerUncheckedUpdateWithoutPlayerInput>
  }

  export type PlayPlayerUpdateManyWithWhereWithoutPlayerInput = {
    where: PlayPlayerScalarWhereInput
    data: XOR<PlayPlayerUpdateManyMutationInput, PlayPlayerUncheckedUpdateManyWithoutPlayerInput>
  }

  export type PlayPlayerScalarWhereInput = {
    AND?: PlayPlayerScalarWhereInput | PlayPlayerScalarWhereInput[]
    OR?: PlayPlayerScalarWhereInput[]
    NOT?: PlayPlayerScalarWhereInput | PlayPlayerScalarWhereInput[]
    id?: IntFilter<"PlayPlayer"> | number
    playId?: StringFilter<"PlayPlayer"> | string
    playerId?: StringFilter<"PlayPlayer"> | string
    role?: StringFilter<"PlayPlayer"> | string
    airYards?: IntNullableFilter<"PlayPlayer"> | number | null
    yardsGained?: IntNullableFilter<"PlayPlayer"> | number | null
    targeted?: BoolNullableFilter<"PlayPlayer"> | boolean | null
    completed?: BoolNullableFilter<"PlayPlayer"> | boolean | null
    routeType?: StringNullableFilter<"PlayPlayer"> | string | null
    coverage?: StringNullableFilter<"PlayPlayer"> | string | null
    cushion?: FloatNullableFilter<"PlayPlayer"> | number | null
  }

  export type GameCreateWithoutHomeTeamRelInput = {
    key: string
    week: number
    season: number
    gameDate: Date | string
    homeScore?: number | null
    awayScore?: number | null
    stadium?: string | null
    surface?: string | null
    weather?: string | null
    awayTeamRel: TeamCreateNestedOneWithoutAwayGamesInput
    plays?: PlayCreateNestedManyWithoutGameInput
    playerGameStats?: PlayerGameStatCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutHomeTeamRelInput = {
    key: string
    week: number
    season: number
    gameDate: Date | string
    awayTeam: string
    homeScore?: number | null
    awayScore?: number | null
    stadium?: string | null
    surface?: string | null
    weather?: string | null
    plays?: PlayUncheckedCreateNestedManyWithoutGameInput
    playerGameStats?: PlayerGameStatUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutHomeTeamRelInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutHomeTeamRelInput, GameUncheckedCreateWithoutHomeTeamRelInput>
  }

  export type GameCreateManyHomeTeamRelInputEnvelope = {
    data: GameCreateManyHomeTeamRelInput | GameCreateManyHomeTeamRelInput[]
    skipDuplicates?: boolean
  }

  export type GameCreateWithoutAwayTeamRelInput = {
    key: string
    week: number
    season: number
    gameDate: Date | string
    homeScore?: number | null
    awayScore?: number | null
    stadium?: string | null
    surface?: string | null
    weather?: string | null
    homeTeamRel: TeamCreateNestedOneWithoutHomeGamesInput
    plays?: PlayCreateNestedManyWithoutGameInput
    playerGameStats?: PlayerGameStatCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutAwayTeamRelInput = {
    key: string
    week: number
    season: number
    gameDate: Date | string
    homeTeam: string
    homeScore?: number | null
    awayScore?: number | null
    stadium?: string | null
    surface?: string | null
    weather?: string | null
    plays?: PlayUncheckedCreateNestedManyWithoutGameInput
    playerGameStats?: PlayerGameStatUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutAwayTeamRelInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutAwayTeamRelInput, GameUncheckedCreateWithoutAwayTeamRelInput>
  }

  export type GameCreateManyAwayTeamRelInputEnvelope = {
    data: GameCreateManyAwayTeamRelInput | GameCreateManyAwayTeamRelInput[]
    skipDuplicates?: boolean
  }

  export type WeeklyRosterCreateWithoutTeamRelInput = {
    week: number
    season: number
    jerseyNumber?: number | null
    position?: string | null
    player: PlayerCreateNestedOneWithoutWeeklyRostersInput
  }

  export type WeeklyRosterUncheckedCreateWithoutTeamRelInput = {
    id?: number
    playerId: string
    week: number
    season: number
    jerseyNumber?: number | null
    position?: string | null
  }

  export type WeeklyRosterCreateOrConnectWithoutTeamRelInput = {
    where: WeeklyRosterWhereUniqueInput
    create: XOR<WeeklyRosterCreateWithoutTeamRelInput, WeeklyRosterUncheckedCreateWithoutTeamRelInput>
  }

  export type WeeklyRosterCreateManyTeamRelInputEnvelope = {
    data: WeeklyRosterCreateManyTeamRelInput | WeeklyRosterCreateManyTeamRelInput[]
    skipDuplicates?: boolean
  }

  export type PlayerGameStatCreateWithoutTeamRelInput = {
    position?: string | null
    snaps?: number | null
    snapShare?: number | null
    fantasyPoints?: number | null
    passAttempts?: number | null
    completions?: number | null
    passYards?: number | null
    passTDs?: number | null
    interceptions?: number | null
    carries?: number | null
    rushYards?: number | null
    rushTDs?: number | null
    targets?: number | null
    receptions?: number | null
    receivingYards?: number | null
    receivingTDs?: number | null
    airYards?: number | null
    scrimmageYards?: number | null
    totalTDs?: number | null
    totalTouches?: number | null
    opportunities?: number | null
    evadedTackles?: number | null
    yardsCreated?: number | null
    yardsPerCarry?: number | null
    yardsPerTarget?: number | null
    yardsPerReception?: number | null
    player: PlayerCreateNestedOneWithoutPlayerGameStatsInput
    game: GameCreateNestedOneWithoutPlayerGameStatsInput
  }

  export type PlayerGameStatUncheckedCreateWithoutTeamRelInput = {
    id?: number
    playerId: string
    gameKey: string
    position?: string | null
    snaps?: number | null
    snapShare?: number | null
    fantasyPoints?: number | null
    passAttempts?: number | null
    completions?: number | null
    passYards?: number | null
    passTDs?: number | null
    interceptions?: number | null
    carries?: number | null
    rushYards?: number | null
    rushTDs?: number | null
    targets?: number | null
    receptions?: number | null
    receivingYards?: number | null
    receivingTDs?: number | null
    airYards?: number | null
    scrimmageYards?: number | null
    totalTDs?: number | null
    totalTouches?: number | null
    opportunities?: number | null
    evadedTackles?: number | null
    yardsCreated?: number | null
    yardsPerCarry?: number | null
    yardsPerTarget?: number | null
    yardsPerReception?: number | null
  }

  export type PlayerGameStatCreateOrConnectWithoutTeamRelInput = {
    where: PlayerGameStatWhereUniqueInput
    create: XOR<PlayerGameStatCreateWithoutTeamRelInput, PlayerGameStatUncheckedCreateWithoutTeamRelInput>
  }

  export type PlayerGameStatCreateManyTeamRelInputEnvelope = {
    data: PlayerGameStatCreateManyTeamRelInput | PlayerGameStatCreateManyTeamRelInput[]
    skipDuplicates?: boolean
  }

  export type PlayCreateWithoutOffTeamRelInput = {
    id: string
    week: number
    quarter?: number | null
    minutes?: number | null
    seconds?: number | null
    down?: number | null
    yardsToGo?: number | null
    playType?: string | null
    yardsGained?: number | null
    isFirstDown?: boolean | null
    redZone?: boolean | null
    passPlay?: boolean | null
    runPlay?: boolean | null
    touchdown?: boolean | null
    turnover?: boolean | null
    game: GameCreateNestedOneWithoutPlaysInput
    defTeamRel: TeamCreateNestedOneWithoutDefensivePlaysInput
    playPlayers?: PlayPlayerCreateNestedManyWithoutPlayInput
  }

  export type PlayUncheckedCreateWithoutOffTeamRelInput = {
    id: string
    gameKey: string
    week: number
    quarter?: number | null
    minutes?: number | null
    seconds?: number | null
    down?: number | null
    yardsToGo?: number | null
    defTeam: string
    playType?: string | null
    yardsGained?: number | null
    isFirstDown?: boolean | null
    redZone?: boolean | null
    passPlay?: boolean | null
    runPlay?: boolean | null
    touchdown?: boolean | null
    turnover?: boolean | null
    playPlayers?: PlayPlayerUncheckedCreateNestedManyWithoutPlayInput
  }

  export type PlayCreateOrConnectWithoutOffTeamRelInput = {
    where: PlayWhereUniqueInput
    create: XOR<PlayCreateWithoutOffTeamRelInput, PlayUncheckedCreateWithoutOffTeamRelInput>
  }

  export type PlayCreateManyOffTeamRelInputEnvelope = {
    data: PlayCreateManyOffTeamRelInput | PlayCreateManyOffTeamRelInput[]
    skipDuplicates?: boolean
  }

  export type PlayCreateWithoutDefTeamRelInput = {
    id: string
    week: number
    quarter?: number | null
    minutes?: number | null
    seconds?: number | null
    down?: number | null
    yardsToGo?: number | null
    playType?: string | null
    yardsGained?: number | null
    isFirstDown?: boolean | null
    redZone?: boolean | null
    passPlay?: boolean | null
    runPlay?: boolean | null
    touchdown?: boolean | null
    turnover?: boolean | null
    game: GameCreateNestedOneWithoutPlaysInput
    offTeamRel: TeamCreateNestedOneWithoutOffensivePlaysInput
    playPlayers?: PlayPlayerCreateNestedManyWithoutPlayInput
  }

  export type PlayUncheckedCreateWithoutDefTeamRelInput = {
    id: string
    gameKey: string
    week: number
    quarter?: number | null
    minutes?: number | null
    seconds?: number | null
    down?: number | null
    yardsToGo?: number | null
    offTeam: string
    playType?: string | null
    yardsGained?: number | null
    isFirstDown?: boolean | null
    redZone?: boolean | null
    passPlay?: boolean | null
    runPlay?: boolean | null
    touchdown?: boolean | null
    turnover?: boolean | null
    playPlayers?: PlayPlayerUncheckedCreateNestedManyWithoutPlayInput
  }

  export type PlayCreateOrConnectWithoutDefTeamRelInput = {
    where: PlayWhereUniqueInput
    create: XOR<PlayCreateWithoutDefTeamRelInput, PlayUncheckedCreateWithoutDefTeamRelInput>
  }

  export type PlayCreateManyDefTeamRelInputEnvelope = {
    data: PlayCreateManyDefTeamRelInput | PlayCreateManyDefTeamRelInput[]
    skipDuplicates?: boolean
  }

  export type GameUpsertWithWhereUniqueWithoutHomeTeamRelInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutHomeTeamRelInput, GameUncheckedUpdateWithoutHomeTeamRelInput>
    create: XOR<GameCreateWithoutHomeTeamRelInput, GameUncheckedCreateWithoutHomeTeamRelInput>
  }

  export type GameUpdateWithWhereUniqueWithoutHomeTeamRelInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutHomeTeamRelInput, GameUncheckedUpdateWithoutHomeTeamRelInput>
  }

  export type GameUpdateManyWithWhereWithoutHomeTeamRelInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutHomeTeamRelInput>
  }

  export type GameScalarWhereInput = {
    AND?: GameScalarWhereInput | GameScalarWhereInput[]
    OR?: GameScalarWhereInput[]
    NOT?: GameScalarWhereInput | GameScalarWhereInput[]
    key?: StringFilter<"Game"> | string
    week?: IntFilter<"Game"> | number
    season?: IntFilter<"Game"> | number
    gameDate?: DateTimeFilter<"Game"> | Date | string
    homeTeam?: StringFilter<"Game"> | string
    awayTeam?: StringFilter<"Game"> | string
    homeScore?: IntNullableFilter<"Game"> | number | null
    awayScore?: IntNullableFilter<"Game"> | number | null
    stadium?: StringNullableFilter<"Game"> | string | null
    surface?: StringNullableFilter<"Game"> | string | null
    weather?: StringNullableFilter<"Game"> | string | null
  }

  export type GameUpsertWithWhereUniqueWithoutAwayTeamRelInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutAwayTeamRelInput, GameUncheckedUpdateWithoutAwayTeamRelInput>
    create: XOR<GameCreateWithoutAwayTeamRelInput, GameUncheckedCreateWithoutAwayTeamRelInput>
  }

  export type GameUpdateWithWhereUniqueWithoutAwayTeamRelInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutAwayTeamRelInput, GameUncheckedUpdateWithoutAwayTeamRelInput>
  }

  export type GameUpdateManyWithWhereWithoutAwayTeamRelInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutAwayTeamRelInput>
  }

  export type WeeklyRosterUpsertWithWhereUniqueWithoutTeamRelInput = {
    where: WeeklyRosterWhereUniqueInput
    update: XOR<WeeklyRosterUpdateWithoutTeamRelInput, WeeklyRosterUncheckedUpdateWithoutTeamRelInput>
    create: XOR<WeeklyRosterCreateWithoutTeamRelInput, WeeklyRosterUncheckedCreateWithoutTeamRelInput>
  }

  export type WeeklyRosterUpdateWithWhereUniqueWithoutTeamRelInput = {
    where: WeeklyRosterWhereUniqueInput
    data: XOR<WeeklyRosterUpdateWithoutTeamRelInput, WeeklyRosterUncheckedUpdateWithoutTeamRelInput>
  }

  export type WeeklyRosterUpdateManyWithWhereWithoutTeamRelInput = {
    where: WeeklyRosterScalarWhereInput
    data: XOR<WeeklyRosterUpdateManyMutationInput, WeeklyRosterUncheckedUpdateManyWithoutTeamRelInput>
  }

  export type PlayerGameStatUpsertWithWhereUniqueWithoutTeamRelInput = {
    where: PlayerGameStatWhereUniqueInput
    update: XOR<PlayerGameStatUpdateWithoutTeamRelInput, PlayerGameStatUncheckedUpdateWithoutTeamRelInput>
    create: XOR<PlayerGameStatCreateWithoutTeamRelInput, PlayerGameStatUncheckedCreateWithoutTeamRelInput>
  }

  export type PlayerGameStatUpdateWithWhereUniqueWithoutTeamRelInput = {
    where: PlayerGameStatWhereUniqueInput
    data: XOR<PlayerGameStatUpdateWithoutTeamRelInput, PlayerGameStatUncheckedUpdateWithoutTeamRelInput>
  }

  export type PlayerGameStatUpdateManyWithWhereWithoutTeamRelInput = {
    where: PlayerGameStatScalarWhereInput
    data: XOR<PlayerGameStatUpdateManyMutationInput, PlayerGameStatUncheckedUpdateManyWithoutTeamRelInput>
  }

  export type PlayUpsertWithWhereUniqueWithoutOffTeamRelInput = {
    where: PlayWhereUniqueInput
    update: XOR<PlayUpdateWithoutOffTeamRelInput, PlayUncheckedUpdateWithoutOffTeamRelInput>
    create: XOR<PlayCreateWithoutOffTeamRelInput, PlayUncheckedCreateWithoutOffTeamRelInput>
  }

  export type PlayUpdateWithWhereUniqueWithoutOffTeamRelInput = {
    where: PlayWhereUniqueInput
    data: XOR<PlayUpdateWithoutOffTeamRelInput, PlayUncheckedUpdateWithoutOffTeamRelInput>
  }

  export type PlayUpdateManyWithWhereWithoutOffTeamRelInput = {
    where: PlayScalarWhereInput
    data: XOR<PlayUpdateManyMutationInput, PlayUncheckedUpdateManyWithoutOffTeamRelInput>
  }

  export type PlayScalarWhereInput = {
    AND?: PlayScalarWhereInput | PlayScalarWhereInput[]
    OR?: PlayScalarWhereInput[]
    NOT?: PlayScalarWhereInput | PlayScalarWhereInput[]
    id?: StringFilter<"Play"> | string
    gameKey?: StringFilter<"Play"> | string
    week?: IntFilter<"Play"> | number
    quarter?: IntNullableFilter<"Play"> | number | null
    minutes?: IntNullableFilter<"Play"> | number | null
    seconds?: IntNullableFilter<"Play"> | number | null
    down?: IntNullableFilter<"Play"> | number | null
    yardsToGo?: IntNullableFilter<"Play"> | number | null
    offTeam?: StringFilter<"Play"> | string
    defTeam?: StringFilter<"Play"> | string
    playType?: StringNullableFilter<"Play"> | string | null
    yardsGained?: IntNullableFilter<"Play"> | number | null
    isFirstDown?: BoolNullableFilter<"Play"> | boolean | null
    redZone?: BoolNullableFilter<"Play"> | boolean | null
    passPlay?: BoolNullableFilter<"Play"> | boolean | null
    runPlay?: BoolNullableFilter<"Play"> | boolean | null
    touchdown?: BoolNullableFilter<"Play"> | boolean | null
    turnover?: BoolNullableFilter<"Play"> | boolean | null
  }

  export type PlayUpsertWithWhereUniqueWithoutDefTeamRelInput = {
    where: PlayWhereUniqueInput
    update: XOR<PlayUpdateWithoutDefTeamRelInput, PlayUncheckedUpdateWithoutDefTeamRelInput>
    create: XOR<PlayCreateWithoutDefTeamRelInput, PlayUncheckedCreateWithoutDefTeamRelInput>
  }

  export type PlayUpdateWithWhereUniqueWithoutDefTeamRelInput = {
    where: PlayWhereUniqueInput
    data: XOR<PlayUpdateWithoutDefTeamRelInput, PlayUncheckedUpdateWithoutDefTeamRelInput>
  }

  export type PlayUpdateManyWithWhereWithoutDefTeamRelInput = {
    where: PlayScalarWhereInput
    data: XOR<PlayUpdateManyMutationInput, PlayUncheckedUpdateManyWithoutDefTeamRelInput>
  }

  export type TeamCreateWithoutHomeGamesInput = {
    code: string
    name?: string | null
    conference?: string | null
    division?: string | null
    awayGames?: GameCreateNestedManyWithoutAwayTeamRelInput
    weeklyRosters?: WeeklyRosterCreateNestedManyWithoutTeamRelInput
    playerGameStats?: PlayerGameStatCreateNestedManyWithoutTeamRelInput
    offensivePlays?: PlayCreateNestedManyWithoutOffTeamRelInput
    defensivePlays?: PlayCreateNestedManyWithoutDefTeamRelInput
  }

  export type TeamUncheckedCreateWithoutHomeGamesInput = {
    code: string
    name?: string | null
    conference?: string | null
    division?: string | null
    awayGames?: GameUncheckedCreateNestedManyWithoutAwayTeamRelInput
    weeklyRosters?: WeeklyRosterUncheckedCreateNestedManyWithoutTeamRelInput
    playerGameStats?: PlayerGameStatUncheckedCreateNestedManyWithoutTeamRelInput
    offensivePlays?: PlayUncheckedCreateNestedManyWithoutOffTeamRelInput
    defensivePlays?: PlayUncheckedCreateNestedManyWithoutDefTeamRelInput
  }

  export type TeamCreateOrConnectWithoutHomeGamesInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutHomeGamesInput, TeamUncheckedCreateWithoutHomeGamesInput>
  }

  export type TeamCreateWithoutAwayGamesInput = {
    code: string
    name?: string | null
    conference?: string | null
    division?: string | null
    homeGames?: GameCreateNestedManyWithoutHomeTeamRelInput
    weeklyRosters?: WeeklyRosterCreateNestedManyWithoutTeamRelInput
    playerGameStats?: PlayerGameStatCreateNestedManyWithoutTeamRelInput
    offensivePlays?: PlayCreateNestedManyWithoutOffTeamRelInput
    defensivePlays?: PlayCreateNestedManyWithoutDefTeamRelInput
  }

  export type TeamUncheckedCreateWithoutAwayGamesInput = {
    code: string
    name?: string | null
    conference?: string | null
    division?: string | null
    homeGames?: GameUncheckedCreateNestedManyWithoutHomeTeamRelInput
    weeklyRosters?: WeeklyRosterUncheckedCreateNestedManyWithoutTeamRelInput
    playerGameStats?: PlayerGameStatUncheckedCreateNestedManyWithoutTeamRelInput
    offensivePlays?: PlayUncheckedCreateNestedManyWithoutOffTeamRelInput
    defensivePlays?: PlayUncheckedCreateNestedManyWithoutDefTeamRelInput
  }

  export type TeamCreateOrConnectWithoutAwayGamesInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutAwayGamesInput, TeamUncheckedCreateWithoutAwayGamesInput>
  }

  export type PlayCreateWithoutGameInput = {
    id: string
    week: number
    quarter?: number | null
    minutes?: number | null
    seconds?: number | null
    down?: number | null
    yardsToGo?: number | null
    playType?: string | null
    yardsGained?: number | null
    isFirstDown?: boolean | null
    redZone?: boolean | null
    passPlay?: boolean | null
    runPlay?: boolean | null
    touchdown?: boolean | null
    turnover?: boolean | null
    offTeamRel: TeamCreateNestedOneWithoutOffensivePlaysInput
    defTeamRel: TeamCreateNestedOneWithoutDefensivePlaysInput
    playPlayers?: PlayPlayerCreateNestedManyWithoutPlayInput
  }

  export type PlayUncheckedCreateWithoutGameInput = {
    id: string
    week: number
    quarter?: number | null
    minutes?: number | null
    seconds?: number | null
    down?: number | null
    yardsToGo?: number | null
    offTeam: string
    defTeam: string
    playType?: string | null
    yardsGained?: number | null
    isFirstDown?: boolean | null
    redZone?: boolean | null
    passPlay?: boolean | null
    runPlay?: boolean | null
    touchdown?: boolean | null
    turnover?: boolean | null
    playPlayers?: PlayPlayerUncheckedCreateNestedManyWithoutPlayInput
  }

  export type PlayCreateOrConnectWithoutGameInput = {
    where: PlayWhereUniqueInput
    create: XOR<PlayCreateWithoutGameInput, PlayUncheckedCreateWithoutGameInput>
  }

  export type PlayCreateManyGameInputEnvelope = {
    data: PlayCreateManyGameInput | PlayCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type PlayerGameStatCreateWithoutGameInput = {
    position?: string | null
    snaps?: number | null
    snapShare?: number | null
    fantasyPoints?: number | null
    passAttempts?: number | null
    completions?: number | null
    passYards?: number | null
    passTDs?: number | null
    interceptions?: number | null
    carries?: number | null
    rushYards?: number | null
    rushTDs?: number | null
    targets?: number | null
    receptions?: number | null
    receivingYards?: number | null
    receivingTDs?: number | null
    airYards?: number | null
    scrimmageYards?: number | null
    totalTDs?: number | null
    totalTouches?: number | null
    opportunities?: number | null
    evadedTackles?: number | null
    yardsCreated?: number | null
    yardsPerCarry?: number | null
    yardsPerTarget?: number | null
    yardsPerReception?: number | null
    player: PlayerCreateNestedOneWithoutPlayerGameStatsInput
    teamRel: TeamCreateNestedOneWithoutPlayerGameStatsInput
  }

  export type PlayerGameStatUncheckedCreateWithoutGameInput = {
    id?: number
    playerId: string
    team: string
    position?: string | null
    snaps?: number | null
    snapShare?: number | null
    fantasyPoints?: number | null
    passAttempts?: number | null
    completions?: number | null
    passYards?: number | null
    passTDs?: number | null
    interceptions?: number | null
    carries?: number | null
    rushYards?: number | null
    rushTDs?: number | null
    targets?: number | null
    receptions?: number | null
    receivingYards?: number | null
    receivingTDs?: number | null
    airYards?: number | null
    scrimmageYards?: number | null
    totalTDs?: number | null
    totalTouches?: number | null
    opportunities?: number | null
    evadedTackles?: number | null
    yardsCreated?: number | null
    yardsPerCarry?: number | null
    yardsPerTarget?: number | null
    yardsPerReception?: number | null
  }

  export type PlayerGameStatCreateOrConnectWithoutGameInput = {
    where: PlayerGameStatWhereUniqueInput
    create: XOR<PlayerGameStatCreateWithoutGameInput, PlayerGameStatUncheckedCreateWithoutGameInput>
  }

  export type PlayerGameStatCreateManyGameInputEnvelope = {
    data: PlayerGameStatCreateManyGameInput | PlayerGameStatCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type TeamUpsertWithoutHomeGamesInput = {
    update: XOR<TeamUpdateWithoutHomeGamesInput, TeamUncheckedUpdateWithoutHomeGamesInput>
    create: XOR<TeamCreateWithoutHomeGamesInput, TeamUncheckedCreateWithoutHomeGamesInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutHomeGamesInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutHomeGamesInput, TeamUncheckedUpdateWithoutHomeGamesInput>
  }

  export type TeamUpdateWithoutHomeGamesInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    conference?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    awayGames?: GameUpdateManyWithoutAwayTeamRelNestedInput
    weeklyRosters?: WeeklyRosterUpdateManyWithoutTeamRelNestedInput
    playerGameStats?: PlayerGameStatUpdateManyWithoutTeamRelNestedInput
    offensivePlays?: PlayUpdateManyWithoutOffTeamRelNestedInput
    defensivePlays?: PlayUpdateManyWithoutDefTeamRelNestedInput
  }

  export type TeamUncheckedUpdateWithoutHomeGamesInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    conference?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    awayGames?: GameUncheckedUpdateManyWithoutAwayTeamRelNestedInput
    weeklyRosters?: WeeklyRosterUncheckedUpdateManyWithoutTeamRelNestedInput
    playerGameStats?: PlayerGameStatUncheckedUpdateManyWithoutTeamRelNestedInput
    offensivePlays?: PlayUncheckedUpdateManyWithoutOffTeamRelNestedInput
    defensivePlays?: PlayUncheckedUpdateManyWithoutDefTeamRelNestedInput
  }

  export type TeamUpsertWithoutAwayGamesInput = {
    update: XOR<TeamUpdateWithoutAwayGamesInput, TeamUncheckedUpdateWithoutAwayGamesInput>
    create: XOR<TeamCreateWithoutAwayGamesInput, TeamUncheckedCreateWithoutAwayGamesInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutAwayGamesInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutAwayGamesInput, TeamUncheckedUpdateWithoutAwayGamesInput>
  }

  export type TeamUpdateWithoutAwayGamesInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    conference?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    homeGames?: GameUpdateManyWithoutHomeTeamRelNestedInput
    weeklyRosters?: WeeklyRosterUpdateManyWithoutTeamRelNestedInput
    playerGameStats?: PlayerGameStatUpdateManyWithoutTeamRelNestedInput
    offensivePlays?: PlayUpdateManyWithoutOffTeamRelNestedInput
    defensivePlays?: PlayUpdateManyWithoutDefTeamRelNestedInput
  }

  export type TeamUncheckedUpdateWithoutAwayGamesInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    conference?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    homeGames?: GameUncheckedUpdateManyWithoutHomeTeamRelNestedInput
    weeklyRosters?: WeeklyRosterUncheckedUpdateManyWithoutTeamRelNestedInput
    playerGameStats?: PlayerGameStatUncheckedUpdateManyWithoutTeamRelNestedInput
    offensivePlays?: PlayUncheckedUpdateManyWithoutOffTeamRelNestedInput
    defensivePlays?: PlayUncheckedUpdateManyWithoutDefTeamRelNestedInput
  }

  export type PlayUpsertWithWhereUniqueWithoutGameInput = {
    where: PlayWhereUniqueInput
    update: XOR<PlayUpdateWithoutGameInput, PlayUncheckedUpdateWithoutGameInput>
    create: XOR<PlayCreateWithoutGameInput, PlayUncheckedCreateWithoutGameInput>
  }

  export type PlayUpdateWithWhereUniqueWithoutGameInput = {
    where: PlayWhereUniqueInput
    data: XOR<PlayUpdateWithoutGameInput, PlayUncheckedUpdateWithoutGameInput>
  }

  export type PlayUpdateManyWithWhereWithoutGameInput = {
    where: PlayScalarWhereInput
    data: XOR<PlayUpdateManyMutationInput, PlayUncheckedUpdateManyWithoutGameInput>
  }

  export type PlayerGameStatUpsertWithWhereUniqueWithoutGameInput = {
    where: PlayerGameStatWhereUniqueInput
    update: XOR<PlayerGameStatUpdateWithoutGameInput, PlayerGameStatUncheckedUpdateWithoutGameInput>
    create: XOR<PlayerGameStatCreateWithoutGameInput, PlayerGameStatUncheckedCreateWithoutGameInput>
  }

  export type PlayerGameStatUpdateWithWhereUniqueWithoutGameInput = {
    where: PlayerGameStatWhereUniqueInput
    data: XOR<PlayerGameStatUpdateWithoutGameInput, PlayerGameStatUncheckedUpdateWithoutGameInput>
  }

  export type PlayerGameStatUpdateManyWithWhereWithoutGameInput = {
    where: PlayerGameStatScalarWhereInput
    data: XOR<PlayerGameStatUpdateManyMutationInput, PlayerGameStatUncheckedUpdateManyWithoutGameInput>
  }

  export type PlayerCreateWithoutWeeklyRostersInput = {
    id: string
    name: string
    position?: string | null
    dob?: Date | string | null
    playerGameStats?: PlayerGameStatCreateNestedManyWithoutPlayerInput
    playPlayers?: PlayPlayerCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutWeeklyRostersInput = {
    id: string
    name: string
    position?: string | null
    dob?: Date | string | null
    playerGameStats?: PlayerGameStatUncheckedCreateNestedManyWithoutPlayerInput
    playPlayers?: PlayPlayerUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutWeeklyRostersInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutWeeklyRostersInput, PlayerUncheckedCreateWithoutWeeklyRostersInput>
  }

  export type TeamCreateWithoutWeeklyRostersInput = {
    code: string
    name?: string | null
    conference?: string | null
    division?: string | null
    homeGames?: GameCreateNestedManyWithoutHomeTeamRelInput
    awayGames?: GameCreateNestedManyWithoutAwayTeamRelInput
    playerGameStats?: PlayerGameStatCreateNestedManyWithoutTeamRelInput
    offensivePlays?: PlayCreateNestedManyWithoutOffTeamRelInput
    defensivePlays?: PlayCreateNestedManyWithoutDefTeamRelInput
  }

  export type TeamUncheckedCreateWithoutWeeklyRostersInput = {
    code: string
    name?: string | null
    conference?: string | null
    division?: string | null
    homeGames?: GameUncheckedCreateNestedManyWithoutHomeTeamRelInput
    awayGames?: GameUncheckedCreateNestedManyWithoutAwayTeamRelInput
    playerGameStats?: PlayerGameStatUncheckedCreateNestedManyWithoutTeamRelInput
    offensivePlays?: PlayUncheckedCreateNestedManyWithoutOffTeamRelInput
    defensivePlays?: PlayUncheckedCreateNestedManyWithoutDefTeamRelInput
  }

  export type TeamCreateOrConnectWithoutWeeklyRostersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutWeeklyRostersInput, TeamUncheckedCreateWithoutWeeklyRostersInput>
  }

  export type PlayerUpsertWithoutWeeklyRostersInput = {
    update: XOR<PlayerUpdateWithoutWeeklyRostersInput, PlayerUncheckedUpdateWithoutWeeklyRostersInput>
    create: XOR<PlayerCreateWithoutWeeklyRostersInput, PlayerUncheckedCreateWithoutWeeklyRostersInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutWeeklyRostersInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutWeeklyRostersInput, PlayerUncheckedUpdateWithoutWeeklyRostersInput>
  }

  export type PlayerUpdateWithoutWeeklyRostersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playerGameStats?: PlayerGameStatUpdateManyWithoutPlayerNestedInput
    playPlayers?: PlayPlayerUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutWeeklyRostersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playerGameStats?: PlayerGameStatUncheckedUpdateManyWithoutPlayerNestedInput
    playPlayers?: PlayPlayerUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type TeamUpsertWithoutWeeklyRostersInput = {
    update: XOR<TeamUpdateWithoutWeeklyRostersInput, TeamUncheckedUpdateWithoutWeeklyRostersInput>
    create: XOR<TeamCreateWithoutWeeklyRostersInput, TeamUncheckedCreateWithoutWeeklyRostersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutWeeklyRostersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutWeeklyRostersInput, TeamUncheckedUpdateWithoutWeeklyRostersInput>
  }

  export type TeamUpdateWithoutWeeklyRostersInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    conference?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    homeGames?: GameUpdateManyWithoutHomeTeamRelNestedInput
    awayGames?: GameUpdateManyWithoutAwayTeamRelNestedInput
    playerGameStats?: PlayerGameStatUpdateManyWithoutTeamRelNestedInput
    offensivePlays?: PlayUpdateManyWithoutOffTeamRelNestedInput
    defensivePlays?: PlayUpdateManyWithoutDefTeamRelNestedInput
  }

  export type TeamUncheckedUpdateWithoutWeeklyRostersInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    conference?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    homeGames?: GameUncheckedUpdateManyWithoutHomeTeamRelNestedInput
    awayGames?: GameUncheckedUpdateManyWithoutAwayTeamRelNestedInput
    playerGameStats?: PlayerGameStatUncheckedUpdateManyWithoutTeamRelNestedInput
    offensivePlays?: PlayUncheckedUpdateManyWithoutOffTeamRelNestedInput
    defensivePlays?: PlayUncheckedUpdateManyWithoutDefTeamRelNestedInput
  }

  export type PlayerCreateWithoutPlayerGameStatsInput = {
    id: string
    name: string
    position?: string | null
    dob?: Date | string | null
    weeklyRosters?: WeeklyRosterCreateNestedManyWithoutPlayerInput
    playPlayers?: PlayPlayerCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutPlayerGameStatsInput = {
    id: string
    name: string
    position?: string | null
    dob?: Date | string | null
    weeklyRosters?: WeeklyRosterUncheckedCreateNestedManyWithoutPlayerInput
    playPlayers?: PlayPlayerUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutPlayerGameStatsInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutPlayerGameStatsInput, PlayerUncheckedCreateWithoutPlayerGameStatsInput>
  }

  export type GameCreateWithoutPlayerGameStatsInput = {
    key: string
    week: number
    season: number
    gameDate: Date | string
    homeScore?: number | null
    awayScore?: number | null
    stadium?: string | null
    surface?: string | null
    weather?: string | null
    homeTeamRel: TeamCreateNestedOneWithoutHomeGamesInput
    awayTeamRel: TeamCreateNestedOneWithoutAwayGamesInput
    plays?: PlayCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutPlayerGameStatsInput = {
    key: string
    week: number
    season: number
    gameDate: Date | string
    homeTeam: string
    awayTeam: string
    homeScore?: number | null
    awayScore?: number | null
    stadium?: string | null
    surface?: string | null
    weather?: string | null
    plays?: PlayUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutPlayerGameStatsInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutPlayerGameStatsInput, GameUncheckedCreateWithoutPlayerGameStatsInput>
  }

  export type TeamCreateWithoutPlayerGameStatsInput = {
    code: string
    name?: string | null
    conference?: string | null
    division?: string | null
    homeGames?: GameCreateNestedManyWithoutHomeTeamRelInput
    awayGames?: GameCreateNestedManyWithoutAwayTeamRelInput
    weeklyRosters?: WeeklyRosterCreateNestedManyWithoutTeamRelInput
    offensivePlays?: PlayCreateNestedManyWithoutOffTeamRelInput
    defensivePlays?: PlayCreateNestedManyWithoutDefTeamRelInput
  }

  export type TeamUncheckedCreateWithoutPlayerGameStatsInput = {
    code: string
    name?: string | null
    conference?: string | null
    division?: string | null
    homeGames?: GameUncheckedCreateNestedManyWithoutHomeTeamRelInput
    awayGames?: GameUncheckedCreateNestedManyWithoutAwayTeamRelInput
    weeklyRosters?: WeeklyRosterUncheckedCreateNestedManyWithoutTeamRelInput
    offensivePlays?: PlayUncheckedCreateNestedManyWithoutOffTeamRelInput
    defensivePlays?: PlayUncheckedCreateNestedManyWithoutDefTeamRelInput
  }

  export type TeamCreateOrConnectWithoutPlayerGameStatsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutPlayerGameStatsInput, TeamUncheckedCreateWithoutPlayerGameStatsInput>
  }

  export type PlayerUpsertWithoutPlayerGameStatsInput = {
    update: XOR<PlayerUpdateWithoutPlayerGameStatsInput, PlayerUncheckedUpdateWithoutPlayerGameStatsInput>
    create: XOR<PlayerCreateWithoutPlayerGameStatsInput, PlayerUncheckedCreateWithoutPlayerGameStatsInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutPlayerGameStatsInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutPlayerGameStatsInput, PlayerUncheckedUpdateWithoutPlayerGameStatsInput>
  }

  export type PlayerUpdateWithoutPlayerGameStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    weeklyRosters?: WeeklyRosterUpdateManyWithoutPlayerNestedInput
    playPlayers?: PlayPlayerUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutPlayerGameStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    weeklyRosters?: WeeklyRosterUncheckedUpdateManyWithoutPlayerNestedInput
    playPlayers?: PlayPlayerUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type GameUpsertWithoutPlayerGameStatsInput = {
    update: XOR<GameUpdateWithoutPlayerGameStatsInput, GameUncheckedUpdateWithoutPlayerGameStatsInput>
    create: XOR<GameCreateWithoutPlayerGameStatsInput, GameUncheckedCreateWithoutPlayerGameStatsInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutPlayerGameStatsInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutPlayerGameStatsInput, GameUncheckedUpdateWithoutPlayerGameStatsInput>
  }

  export type GameUpdateWithoutPlayerGameStatsInput = {
    key?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    stadium?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableStringFieldUpdateOperationsInput | string | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
    homeTeamRel?: TeamUpdateOneRequiredWithoutHomeGamesNestedInput
    awayTeamRel?: TeamUpdateOneRequiredWithoutAwayGamesNestedInput
    plays?: PlayUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutPlayerGameStatsInput = {
    key?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    stadium?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableStringFieldUpdateOperationsInput | string | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
    plays?: PlayUncheckedUpdateManyWithoutGameNestedInput
  }

  export type TeamUpsertWithoutPlayerGameStatsInput = {
    update: XOR<TeamUpdateWithoutPlayerGameStatsInput, TeamUncheckedUpdateWithoutPlayerGameStatsInput>
    create: XOR<TeamCreateWithoutPlayerGameStatsInput, TeamUncheckedCreateWithoutPlayerGameStatsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutPlayerGameStatsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutPlayerGameStatsInput, TeamUncheckedUpdateWithoutPlayerGameStatsInput>
  }

  export type TeamUpdateWithoutPlayerGameStatsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    conference?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    homeGames?: GameUpdateManyWithoutHomeTeamRelNestedInput
    awayGames?: GameUpdateManyWithoutAwayTeamRelNestedInput
    weeklyRosters?: WeeklyRosterUpdateManyWithoutTeamRelNestedInput
    offensivePlays?: PlayUpdateManyWithoutOffTeamRelNestedInput
    defensivePlays?: PlayUpdateManyWithoutDefTeamRelNestedInput
  }

  export type TeamUncheckedUpdateWithoutPlayerGameStatsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    conference?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    homeGames?: GameUncheckedUpdateManyWithoutHomeTeamRelNestedInput
    awayGames?: GameUncheckedUpdateManyWithoutAwayTeamRelNestedInput
    weeklyRosters?: WeeklyRosterUncheckedUpdateManyWithoutTeamRelNestedInput
    offensivePlays?: PlayUncheckedUpdateManyWithoutOffTeamRelNestedInput
    defensivePlays?: PlayUncheckedUpdateManyWithoutDefTeamRelNestedInput
  }

  export type GameCreateWithoutPlaysInput = {
    key: string
    week: number
    season: number
    gameDate: Date | string
    homeScore?: number | null
    awayScore?: number | null
    stadium?: string | null
    surface?: string | null
    weather?: string | null
    homeTeamRel: TeamCreateNestedOneWithoutHomeGamesInput
    awayTeamRel: TeamCreateNestedOneWithoutAwayGamesInput
    playerGameStats?: PlayerGameStatCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutPlaysInput = {
    key: string
    week: number
    season: number
    gameDate: Date | string
    homeTeam: string
    awayTeam: string
    homeScore?: number | null
    awayScore?: number | null
    stadium?: string | null
    surface?: string | null
    weather?: string | null
    playerGameStats?: PlayerGameStatUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutPlaysInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutPlaysInput, GameUncheckedCreateWithoutPlaysInput>
  }

  export type TeamCreateWithoutOffensivePlaysInput = {
    code: string
    name?: string | null
    conference?: string | null
    division?: string | null
    homeGames?: GameCreateNestedManyWithoutHomeTeamRelInput
    awayGames?: GameCreateNestedManyWithoutAwayTeamRelInput
    weeklyRosters?: WeeklyRosterCreateNestedManyWithoutTeamRelInput
    playerGameStats?: PlayerGameStatCreateNestedManyWithoutTeamRelInput
    defensivePlays?: PlayCreateNestedManyWithoutDefTeamRelInput
  }

  export type TeamUncheckedCreateWithoutOffensivePlaysInput = {
    code: string
    name?: string | null
    conference?: string | null
    division?: string | null
    homeGames?: GameUncheckedCreateNestedManyWithoutHomeTeamRelInput
    awayGames?: GameUncheckedCreateNestedManyWithoutAwayTeamRelInput
    weeklyRosters?: WeeklyRosterUncheckedCreateNestedManyWithoutTeamRelInput
    playerGameStats?: PlayerGameStatUncheckedCreateNestedManyWithoutTeamRelInput
    defensivePlays?: PlayUncheckedCreateNestedManyWithoutDefTeamRelInput
  }

  export type TeamCreateOrConnectWithoutOffensivePlaysInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutOffensivePlaysInput, TeamUncheckedCreateWithoutOffensivePlaysInput>
  }

  export type TeamCreateWithoutDefensivePlaysInput = {
    code: string
    name?: string | null
    conference?: string | null
    division?: string | null
    homeGames?: GameCreateNestedManyWithoutHomeTeamRelInput
    awayGames?: GameCreateNestedManyWithoutAwayTeamRelInput
    weeklyRosters?: WeeklyRosterCreateNestedManyWithoutTeamRelInput
    playerGameStats?: PlayerGameStatCreateNestedManyWithoutTeamRelInput
    offensivePlays?: PlayCreateNestedManyWithoutOffTeamRelInput
  }

  export type TeamUncheckedCreateWithoutDefensivePlaysInput = {
    code: string
    name?: string | null
    conference?: string | null
    division?: string | null
    homeGames?: GameUncheckedCreateNestedManyWithoutHomeTeamRelInput
    awayGames?: GameUncheckedCreateNestedManyWithoutAwayTeamRelInput
    weeklyRosters?: WeeklyRosterUncheckedCreateNestedManyWithoutTeamRelInput
    playerGameStats?: PlayerGameStatUncheckedCreateNestedManyWithoutTeamRelInput
    offensivePlays?: PlayUncheckedCreateNestedManyWithoutOffTeamRelInput
  }

  export type TeamCreateOrConnectWithoutDefensivePlaysInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutDefensivePlaysInput, TeamUncheckedCreateWithoutDefensivePlaysInput>
  }

  export type PlayPlayerCreateWithoutPlayInput = {
    role: string
    airYards?: number | null
    yardsGained?: number | null
    targeted?: boolean | null
    completed?: boolean | null
    routeType?: string | null
    coverage?: string | null
    cushion?: number | null
    player: PlayerCreateNestedOneWithoutPlayPlayersInput
  }

  export type PlayPlayerUncheckedCreateWithoutPlayInput = {
    id?: number
    playerId: string
    role: string
    airYards?: number | null
    yardsGained?: number | null
    targeted?: boolean | null
    completed?: boolean | null
    routeType?: string | null
    coverage?: string | null
    cushion?: number | null
  }

  export type PlayPlayerCreateOrConnectWithoutPlayInput = {
    where: PlayPlayerWhereUniqueInput
    create: XOR<PlayPlayerCreateWithoutPlayInput, PlayPlayerUncheckedCreateWithoutPlayInput>
  }

  export type PlayPlayerCreateManyPlayInputEnvelope = {
    data: PlayPlayerCreateManyPlayInput | PlayPlayerCreateManyPlayInput[]
    skipDuplicates?: boolean
  }

  export type GameUpsertWithoutPlaysInput = {
    update: XOR<GameUpdateWithoutPlaysInput, GameUncheckedUpdateWithoutPlaysInput>
    create: XOR<GameCreateWithoutPlaysInput, GameUncheckedCreateWithoutPlaysInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutPlaysInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutPlaysInput, GameUncheckedUpdateWithoutPlaysInput>
  }

  export type GameUpdateWithoutPlaysInput = {
    key?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    stadium?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableStringFieldUpdateOperationsInput | string | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
    homeTeamRel?: TeamUpdateOneRequiredWithoutHomeGamesNestedInput
    awayTeamRel?: TeamUpdateOneRequiredWithoutAwayGamesNestedInput
    playerGameStats?: PlayerGameStatUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutPlaysInput = {
    key?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    stadium?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableStringFieldUpdateOperationsInput | string | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
    playerGameStats?: PlayerGameStatUncheckedUpdateManyWithoutGameNestedInput
  }

  export type TeamUpsertWithoutOffensivePlaysInput = {
    update: XOR<TeamUpdateWithoutOffensivePlaysInput, TeamUncheckedUpdateWithoutOffensivePlaysInput>
    create: XOR<TeamCreateWithoutOffensivePlaysInput, TeamUncheckedCreateWithoutOffensivePlaysInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutOffensivePlaysInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutOffensivePlaysInput, TeamUncheckedUpdateWithoutOffensivePlaysInput>
  }

  export type TeamUpdateWithoutOffensivePlaysInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    conference?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    homeGames?: GameUpdateManyWithoutHomeTeamRelNestedInput
    awayGames?: GameUpdateManyWithoutAwayTeamRelNestedInput
    weeklyRosters?: WeeklyRosterUpdateManyWithoutTeamRelNestedInput
    playerGameStats?: PlayerGameStatUpdateManyWithoutTeamRelNestedInput
    defensivePlays?: PlayUpdateManyWithoutDefTeamRelNestedInput
  }

  export type TeamUncheckedUpdateWithoutOffensivePlaysInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    conference?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    homeGames?: GameUncheckedUpdateManyWithoutHomeTeamRelNestedInput
    awayGames?: GameUncheckedUpdateManyWithoutAwayTeamRelNestedInput
    weeklyRosters?: WeeklyRosterUncheckedUpdateManyWithoutTeamRelNestedInput
    playerGameStats?: PlayerGameStatUncheckedUpdateManyWithoutTeamRelNestedInput
    defensivePlays?: PlayUncheckedUpdateManyWithoutDefTeamRelNestedInput
  }

  export type TeamUpsertWithoutDefensivePlaysInput = {
    update: XOR<TeamUpdateWithoutDefensivePlaysInput, TeamUncheckedUpdateWithoutDefensivePlaysInput>
    create: XOR<TeamCreateWithoutDefensivePlaysInput, TeamUncheckedCreateWithoutDefensivePlaysInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutDefensivePlaysInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutDefensivePlaysInput, TeamUncheckedUpdateWithoutDefensivePlaysInput>
  }

  export type TeamUpdateWithoutDefensivePlaysInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    conference?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    homeGames?: GameUpdateManyWithoutHomeTeamRelNestedInput
    awayGames?: GameUpdateManyWithoutAwayTeamRelNestedInput
    weeklyRosters?: WeeklyRosterUpdateManyWithoutTeamRelNestedInput
    playerGameStats?: PlayerGameStatUpdateManyWithoutTeamRelNestedInput
    offensivePlays?: PlayUpdateManyWithoutOffTeamRelNestedInput
  }

  export type TeamUncheckedUpdateWithoutDefensivePlaysInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    conference?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    homeGames?: GameUncheckedUpdateManyWithoutHomeTeamRelNestedInput
    awayGames?: GameUncheckedUpdateManyWithoutAwayTeamRelNestedInput
    weeklyRosters?: WeeklyRosterUncheckedUpdateManyWithoutTeamRelNestedInput
    playerGameStats?: PlayerGameStatUncheckedUpdateManyWithoutTeamRelNestedInput
    offensivePlays?: PlayUncheckedUpdateManyWithoutOffTeamRelNestedInput
  }

  export type PlayPlayerUpsertWithWhereUniqueWithoutPlayInput = {
    where: PlayPlayerWhereUniqueInput
    update: XOR<PlayPlayerUpdateWithoutPlayInput, PlayPlayerUncheckedUpdateWithoutPlayInput>
    create: XOR<PlayPlayerCreateWithoutPlayInput, PlayPlayerUncheckedCreateWithoutPlayInput>
  }

  export type PlayPlayerUpdateWithWhereUniqueWithoutPlayInput = {
    where: PlayPlayerWhereUniqueInput
    data: XOR<PlayPlayerUpdateWithoutPlayInput, PlayPlayerUncheckedUpdateWithoutPlayInput>
  }

  export type PlayPlayerUpdateManyWithWhereWithoutPlayInput = {
    where: PlayPlayerScalarWhereInput
    data: XOR<PlayPlayerUpdateManyMutationInput, PlayPlayerUncheckedUpdateManyWithoutPlayInput>
  }

  export type PlayCreateWithoutPlayPlayersInput = {
    id: string
    week: number
    quarter?: number | null
    minutes?: number | null
    seconds?: number | null
    down?: number | null
    yardsToGo?: number | null
    playType?: string | null
    yardsGained?: number | null
    isFirstDown?: boolean | null
    redZone?: boolean | null
    passPlay?: boolean | null
    runPlay?: boolean | null
    touchdown?: boolean | null
    turnover?: boolean | null
    game: GameCreateNestedOneWithoutPlaysInput
    offTeamRel: TeamCreateNestedOneWithoutOffensivePlaysInput
    defTeamRel: TeamCreateNestedOneWithoutDefensivePlaysInput
  }

  export type PlayUncheckedCreateWithoutPlayPlayersInput = {
    id: string
    gameKey: string
    week: number
    quarter?: number | null
    minutes?: number | null
    seconds?: number | null
    down?: number | null
    yardsToGo?: number | null
    offTeam: string
    defTeam: string
    playType?: string | null
    yardsGained?: number | null
    isFirstDown?: boolean | null
    redZone?: boolean | null
    passPlay?: boolean | null
    runPlay?: boolean | null
    touchdown?: boolean | null
    turnover?: boolean | null
  }

  export type PlayCreateOrConnectWithoutPlayPlayersInput = {
    where: PlayWhereUniqueInput
    create: XOR<PlayCreateWithoutPlayPlayersInput, PlayUncheckedCreateWithoutPlayPlayersInput>
  }

  export type PlayerCreateWithoutPlayPlayersInput = {
    id: string
    name: string
    position?: string | null
    dob?: Date | string | null
    weeklyRosters?: WeeklyRosterCreateNestedManyWithoutPlayerInput
    playerGameStats?: PlayerGameStatCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutPlayPlayersInput = {
    id: string
    name: string
    position?: string | null
    dob?: Date | string | null
    weeklyRosters?: WeeklyRosterUncheckedCreateNestedManyWithoutPlayerInput
    playerGameStats?: PlayerGameStatUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutPlayPlayersInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutPlayPlayersInput, PlayerUncheckedCreateWithoutPlayPlayersInput>
  }

  export type PlayUpsertWithoutPlayPlayersInput = {
    update: XOR<PlayUpdateWithoutPlayPlayersInput, PlayUncheckedUpdateWithoutPlayPlayersInput>
    create: XOR<PlayCreateWithoutPlayPlayersInput, PlayUncheckedCreateWithoutPlayPlayersInput>
    where?: PlayWhereInput
  }

  export type PlayUpdateToOneWithWhereWithoutPlayPlayersInput = {
    where?: PlayWhereInput
    data: XOR<PlayUpdateWithoutPlayPlayersInput, PlayUncheckedUpdateWithoutPlayPlayersInput>
  }

  export type PlayUpdateWithoutPlayPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    quarter?: NullableIntFieldUpdateOperationsInput | number | null
    minutes?: NullableIntFieldUpdateOperationsInput | number | null
    seconds?: NullableIntFieldUpdateOperationsInput | number | null
    down?: NullableIntFieldUpdateOperationsInput | number | null
    yardsToGo?: NullableIntFieldUpdateOperationsInput | number | null
    playType?: NullableStringFieldUpdateOperationsInput | string | null
    yardsGained?: NullableIntFieldUpdateOperationsInput | number | null
    isFirstDown?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redZone?: NullableBoolFieldUpdateOperationsInput | boolean | null
    passPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    runPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    touchdown?: NullableBoolFieldUpdateOperationsInput | boolean | null
    turnover?: NullableBoolFieldUpdateOperationsInput | boolean | null
    game?: GameUpdateOneRequiredWithoutPlaysNestedInput
    offTeamRel?: TeamUpdateOneRequiredWithoutOffensivePlaysNestedInput
    defTeamRel?: TeamUpdateOneRequiredWithoutDefensivePlaysNestedInput
  }

  export type PlayUncheckedUpdateWithoutPlayPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameKey?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    quarter?: NullableIntFieldUpdateOperationsInput | number | null
    minutes?: NullableIntFieldUpdateOperationsInput | number | null
    seconds?: NullableIntFieldUpdateOperationsInput | number | null
    down?: NullableIntFieldUpdateOperationsInput | number | null
    yardsToGo?: NullableIntFieldUpdateOperationsInput | number | null
    offTeam?: StringFieldUpdateOperationsInput | string
    defTeam?: StringFieldUpdateOperationsInput | string
    playType?: NullableStringFieldUpdateOperationsInput | string | null
    yardsGained?: NullableIntFieldUpdateOperationsInput | number | null
    isFirstDown?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redZone?: NullableBoolFieldUpdateOperationsInput | boolean | null
    passPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    runPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    touchdown?: NullableBoolFieldUpdateOperationsInput | boolean | null
    turnover?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PlayerUpsertWithoutPlayPlayersInput = {
    update: XOR<PlayerUpdateWithoutPlayPlayersInput, PlayerUncheckedUpdateWithoutPlayPlayersInput>
    create: XOR<PlayerCreateWithoutPlayPlayersInput, PlayerUncheckedCreateWithoutPlayPlayersInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutPlayPlayersInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutPlayPlayersInput, PlayerUncheckedUpdateWithoutPlayPlayersInput>
  }

  export type PlayerUpdateWithoutPlayPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    weeklyRosters?: WeeklyRosterUpdateManyWithoutPlayerNestedInput
    playerGameStats?: PlayerGameStatUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutPlayPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    weeklyRosters?: WeeklyRosterUncheckedUpdateManyWithoutPlayerNestedInput
    playerGameStats?: PlayerGameStatUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type WeeklyRosterCreateManyPlayerInput = {
    id?: number
    week: number
    season: number
    team: string
    jerseyNumber?: number | null
    position?: string | null
  }

  export type PlayerGameStatCreateManyPlayerInput = {
    id?: number
    gameKey: string
    team: string
    position?: string | null
    snaps?: number | null
    snapShare?: number | null
    fantasyPoints?: number | null
    passAttempts?: number | null
    completions?: number | null
    passYards?: number | null
    passTDs?: number | null
    interceptions?: number | null
    carries?: number | null
    rushYards?: number | null
    rushTDs?: number | null
    targets?: number | null
    receptions?: number | null
    receivingYards?: number | null
    receivingTDs?: number | null
    airYards?: number | null
    scrimmageYards?: number | null
    totalTDs?: number | null
    totalTouches?: number | null
    opportunities?: number | null
    evadedTackles?: number | null
    yardsCreated?: number | null
    yardsPerCarry?: number | null
    yardsPerTarget?: number | null
    yardsPerReception?: number | null
  }

  export type PlayPlayerCreateManyPlayerInput = {
    id?: number
    playId: string
    role: string
    airYards?: number | null
    yardsGained?: number | null
    targeted?: boolean | null
    completed?: boolean | null
    routeType?: string | null
    coverage?: string | null
    cushion?: number | null
  }

  export type WeeklyRosterUpdateWithoutPlayerInput = {
    week?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    jerseyNumber?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    teamRel?: TeamUpdateOneRequiredWithoutWeeklyRostersNestedInput
  }

  export type WeeklyRosterUncheckedUpdateWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    team?: StringFieldUpdateOperationsInput | string
    jerseyNumber?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WeeklyRosterUncheckedUpdateManyWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    team?: StringFieldUpdateOperationsInput | string
    jerseyNumber?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayerGameStatUpdateWithoutPlayerInput = {
    position?: NullableStringFieldUpdateOperationsInput | string | null
    snaps?: NullableIntFieldUpdateOperationsInput | number | null
    snapShare?: NullableFloatFieldUpdateOperationsInput | number | null
    fantasyPoints?: NullableFloatFieldUpdateOperationsInput | number | null
    passAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    completions?: NullableIntFieldUpdateOperationsInput | number | null
    passYards?: NullableIntFieldUpdateOperationsInput | number | null
    passTDs?: NullableIntFieldUpdateOperationsInput | number | null
    interceptions?: NullableIntFieldUpdateOperationsInput | number | null
    carries?: NullableIntFieldUpdateOperationsInput | number | null
    rushYards?: NullableIntFieldUpdateOperationsInput | number | null
    rushTDs?: NullableIntFieldUpdateOperationsInput | number | null
    targets?: NullableIntFieldUpdateOperationsInput | number | null
    receptions?: NullableIntFieldUpdateOperationsInput | number | null
    receivingYards?: NullableIntFieldUpdateOperationsInput | number | null
    receivingTDs?: NullableIntFieldUpdateOperationsInput | number | null
    airYards?: NullableIntFieldUpdateOperationsInput | number | null
    scrimmageYards?: NullableIntFieldUpdateOperationsInput | number | null
    totalTDs?: NullableIntFieldUpdateOperationsInput | number | null
    totalTouches?: NullableIntFieldUpdateOperationsInput | number | null
    opportunities?: NullableIntFieldUpdateOperationsInput | number | null
    evadedTackles?: NullableIntFieldUpdateOperationsInput | number | null
    yardsCreated?: NullableIntFieldUpdateOperationsInput | number | null
    yardsPerCarry?: NullableFloatFieldUpdateOperationsInput | number | null
    yardsPerTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    yardsPerReception?: NullableFloatFieldUpdateOperationsInput | number | null
    game?: GameUpdateOneRequiredWithoutPlayerGameStatsNestedInput
    teamRel?: TeamUpdateOneRequiredWithoutPlayerGameStatsNestedInput
  }

  export type PlayerGameStatUncheckedUpdateWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameKey?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    snaps?: NullableIntFieldUpdateOperationsInput | number | null
    snapShare?: NullableFloatFieldUpdateOperationsInput | number | null
    fantasyPoints?: NullableFloatFieldUpdateOperationsInput | number | null
    passAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    completions?: NullableIntFieldUpdateOperationsInput | number | null
    passYards?: NullableIntFieldUpdateOperationsInput | number | null
    passTDs?: NullableIntFieldUpdateOperationsInput | number | null
    interceptions?: NullableIntFieldUpdateOperationsInput | number | null
    carries?: NullableIntFieldUpdateOperationsInput | number | null
    rushYards?: NullableIntFieldUpdateOperationsInput | number | null
    rushTDs?: NullableIntFieldUpdateOperationsInput | number | null
    targets?: NullableIntFieldUpdateOperationsInput | number | null
    receptions?: NullableIntFieldUpdateOperationsInput | number | null
    receivingYards?: NullableIntFieldUpdateOperationsInput | number | null
    receivingTDs?: NullableIntFieldUpdateOperationsInput | number | null
    airYards?: NullableIntFieldUpdateOperationsInput | number | null
    scrimmageYards?: NullableIntFieldUpdateOperationsInput | number | null
    totalTDs?: NullableIntFieldUpdateOperationsInput | number | null
    totalTouches?: NullableIntFieldUpdateOperationsInput | number | null
    opportunities?: NullableIntFieldUpdateOperationsInput | number | null
    evadedTackles?: NullableIntFieldUpdateOperationsInput | number | null
    yardsCreated?: NullableIntFieldUpdateOperationsInput | number | null
    yardsPerCarry?: NullableFloatFieldUpdateOperationsInput | number | null
    yardsPerTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    yardsPerReception?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PlayerGameStatUncheckedUpdateManyWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameKey?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    snaps?: NullableIntFieldUpdateOperationsInput | number | null
    snapShare?: NullableFloatFieldUpdateOperationsInput | number | null
    fantasyPoints?: NullableFloatFieldUpdateOperationsInput | number | null
    passAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    completions?: NullableIntFieldUpdateOperationsInput | number | null
    passYards?: NullableIntFieldUpdateOperationsInput | number | null
    passTDs?: NullableIntFieldUpdateOperationsInput | number | null
    interceptions?: NullableIntFieldUpdateOperationsInput | number | null
    carries?: NullableIntFieldUpdateOperationsInput | number | null
    rushYards?: NullableIntFieldUpdateOperationsInput | number | null
    rushTDs?: NullableIntFieldUpdateOperationsInput | number | null
    targets?: NullableIntFieldUpdateOperationsInput | number | null
    receptions?: NullableIntFieldUpdateOperationsInput | number | null
    receivingYards?: NullableIntFieldUpdateOperationsInput | number | null
    receivingTDs?: NullableIntFieldUpdateOperationsInput | number | null
    airYards?: NullableIntFieldUpdateOperationsInput | number | null
    scrimmageYards?: NullableIntFieldUpdateOperationsInput | number | null
    totalTDs?: NullableIntFieldUpdateOperationsInput | number | null
    totalTouches?: NullableIntFieldUpdateOperationsInput | number | null
    opportunities?: NullableIntFieldUpdateOperationsInput | number | null
    evadedTackles?: NullableIntFieldUpdateOperationsInput | number | null
    yardsCreated?: NullableIntFieldUpdateOperationsInput | number | null
    yardsPerCarry?: NullableFloatFieldUpdateOperationsInput | number | null
    yardsPerTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    yardsPerReception?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PlayPlayerUpdateWithoutPlayerInput = {
    role?: StringFieldUpdateOperationsInput | string
    airYards?: NullableIntFieldUpdateOperationsInput | number | null
    yardsGained?: NullableIntFieldUpdateOperationsInput | number | null
    targeted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    routeType?: NullableStringFieldUpdateOperationsInput | string | null
    coverage?: NullableStringFieldUpdateOperationsInput | string | null
    cushion?: NullableFloatFieldUpdateOperationsInput | number | null
    play?: PlayUpdateOneRequiredWithoutPlayPlayersNestedInput
  }

  export type PlayPlayerUncheckedUpdateWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    playId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    airYards?: NullableIntFieldUpdateOperationsInput | number | null
    yardsGained?: NullableIntFieldUpdateOperationsInput | number | null
    targeted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    routeType?: NullableStringFieldUpdateOperationsInput | string | null
    coverage?: NullableStringFieldUpdateOperationsInput | string | null
    cushion?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PlayPlayerUncheckedUpdateManyWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    playId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    airYards?: NullableIntFieldUpdateOperationsInput | number | null
    yardsGained?: NullableIntFieldUpdateOperationsInput | number | null
    targeted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    routeType?: NullableStringFieldUpdateOperationsInput | string | null
    coverage?: NullableStringFieldUpdateOperationsInput | string | null
    cushion?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type GameCreateManyHomeTeamRelInput = {
    key: string
    week: number
    season: number
    gameDate: Date | string
    awayTeam: string
    homeScore?: number | null
    awayScore?: number | null
    stadium?: string | null
    surface?: string | null
    weather?: string | null
  }

  export type GameCreateManyAwayTeamRelInput = {
    key: string
    week: number
    season: number
    gameDate: Date | string
    homeTeam: string
    homeScore?: number | null
    awayScore?: number | null
    stadium?: string | null
    surface?: string | null
    weather?: string | null
  }

  export type WeeklyRosterCreateManyTeamRelInput = {
    id?: number
    playerId: string
    week: number
    season: number
    jerseyNumber?: number | null
    position?: string | null
  }

  export type PlayerGameStatCreateManyTeamRelInput = {
    id?: number
    playerId: string
    gameKey: string
    position?: string | null
    snaps?: number | null
    snapShare?: number | null
    fantasyPoints?: number | null
    passAttempts?: number | null
    completions?: number | null
    passYards?: number | null
    passTDs?: number | null
    interceptions?: number | null
    carries?: number | null
    rushYards?: number | null
    rushTDs?: number | null
    targets?: number | null
    receptions?: number | null
    receivingYards?: number | null
    receivingTDs?: number | null
    airYards?: number | null
    scrimmageYards?: number | null
    totalTDs?: number | null
    totalTouches?: number | null
    opportunities?: number | null
    evadedTackles?: number | null
    yardsCreated?: number | null
    yardsPerCarry?: number | null
    yardsPerTarget?: number | null
    yardsPerReception?: number | null
  }

  export type PlayCreateManyOffTeamRelInput = {
    id: string
    gameKey: string
    week: number
    quarter?: number | null
    minutes?: number | null
    seconds?: number | null
    down?: number | null
    yardsToGo?: number | null
    defTeam: string
    playType?: string | null
    yardsGained?: number | null
    isFirstDown?: boolean | null
    redZone?: boolean | null
    passPlay?: boolean | null
    runPlay?: boolean | null
    touchdown?: boolean | null
    turnover?: boolean | null
  }

  export type PlayCreateManyDefTeamRelInput = {
    id: string
    gameKey: string
    week: number
    quarter?: number | null
    minutes?: number | null
    seconds?: number | null
    down?: number | null
    yardsToGo?: number | null
    offTeam: string
    playType?: string | null
    yardsGained?: number | null
    isFirstDown?: boolean | null
    redZone?: boolean | null
    passPlay?: boolean | null
    runPlay?: boolean | null
    touchdown?: boolean | null
    turnover?: boolean | null
  }

  export type GameUpdateWithoutHomeTeamRelInput = {
    key?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    stadium?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableStringFieldUpdateOperationsInput | string | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamRel?: TeamUpdateOneRequiredWithoutAwayGamesNestedInput
    plays?: PlayUpdateManyWithoutGameNestedInput
    playerGameStats?: PlayerGameStatUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutHomeTeamRelInput = {
    key?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    stadium?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableStringFieldUpdateOperationsInput | string | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
    plays?: PlayUncheckedUpdateManyWithoutGameNestedInput
    playerGameStats?: PlayerGameStatUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutHomeTeamRelInput = {
    key?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    stadium?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableStringFieldUpdateOperationsInput | string | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameUpdateWithoutAwayTeamRelInput = {
    key?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    stadium?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableStringFieldUpdateOperationsInput | string | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
    homeTeamRel?: TeamUpdateOneRequiredWithoutHomeGamesNestedInput
    plays?: PlayUpdateManyWithoutGameNestedInput
    playerGameStats?: PlayerGameStatUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutAwayTeamRelInput = {
    key?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    stadium?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableStringFieldUpdateOperationsInput | string | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
    plays?: PlayUncheckedUpdateManyWithoutGameNestedInput
    playerGameStats?: PlayerGameStatUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutAwayTeamRelInput = {
    key?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    stadium?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableStringFieldUpdateOperationsInput | string | null
    weather?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WeeklyRosterUpdateWithoutTeamRelInput = {
    week?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    jerseyNumber?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    player?: PlayerUpdateOneRequiredWithoutWeeklyRostersNestedInput
  }

  export type WeeklyRosterUncheckedUpdateWithoutTeamRelInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    jerseyNumber?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WeeklyRosterUncheckedUpdateManyWithoutTeamRelInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    jerseyNumber?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayerGameStatUpdateWithoutTeamRelInput = {
    position?: NullableStringFieldUpdateOperationsInput | string | null
    snaps?: NullableIntFieldUpdateOperationsInput | number | null
    snapShare?: NullableFloatFieldUpdateOperationsInput | number | null
    fantasyPoints?: NullableFloatFieldUpdateOperationsInput | number | null
    passAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    completions?: NullableIntFieldUpdateOperationsInput | number | null
    passYards?: NullableIntFieldUpdateOperationsInput | number | null
    passTDs?: NullableIntFieldUpdateOperationsInput | number | null
    interceptions?: NullableIntFieldUpdateOperationsInput | number | null
    carries?: NullableIntFieldUpdateOperationsInput | number | null
    rushYards?: NullableIntFieldUpdateOperationsInput | number | null
    rushTDs?: NullableIntFieldUpdateOperationsInput | number | null
    targets?: NullableIntFieldUpdateOperationsInput | number | null
    receptions?: NullableIntFieldUpdateOperationsInput | number | null
    receivingYards?: NullableIntFieldUpdateOperationsInput | number | null
    receivingTDs?: NullableIntFieldUpdateOperationsInput | number | null
    airYards?: NullableIntFieldUpdateOperationsInput | number | null
    scrimmageYards?: NullableIntFieldUpdateOperationsInput | number | null
    totalTDs?: NullableIntFieldUpdateOperationsInput | number | null
    totalTouches?: NullableIntFieldUpdateOperationsInput | number | null
    opportunities?: NullableIntFieldUpdateOperationsInput | number | null
    evadedTackles?: NullableIntFieldUpdateOperationsInput | number | null
    yardsCreated?: NullableIntFieldUpdateOperationsInput | number | null
    yardsPerCarry?: NullableFloatFieldUpdateOperationsInput | number | null
    yardsPerTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    yardsPerReception?: NullableFloatFieldUpdateOperationsInput | number | null
    player?: PlayerUpdateOneRequiredWithoutPlayerGameStatsNestedInput
    game?: GameUpdateOneRequiredWithoutPlayerGameStatsNestedInput
  }

  export type PlayerGameStatUncheckedUpdateWithoutTeamRelInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: StringFieldUpdateOperationsInput | string
    gameKey?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    snaps?: NullableIntFieldUpdateOperationsInput | number | null
    snapShare?: NullableFloatFieldUpdateOperationsInput | number | null
    fantasyPoints?: NullableFloatFieldUpdateOperationsInput | number | null
    passAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    completions?: NullableIntFieldUpdateOperationsInput | number | null
    passYards?: NullableIntFieldUpdateOperationsInput | number | null
    passTDs?: NullableIntFieldUpdateOperationsInput | number | null
    interceptions?: NullableIntFieldUpdateOperationsInput | number | null
    carries?: NullableIntFieldUpdateOperationsInput | number | null
    rushYards?: NullableIntFieldUpdateOperationsInput | number | null
    rushTDs?: NullableIntFieldUpdateOperationsInput | number | null
    targets?: NullableIntFieldUpdateOperationsInput | number | null
    receptions?: NullableIntFieldUpdateOperationsInput | number | null
    receivingYards?: NullableIntFieldUpdateOperationsInput | number | null
    receivingTDs?: NullableIntFieldUpdateOperationsInput | number | null
    airYards?: NullableIntFieldUpdateOperationsInput | number | null
    scrimmageYards?: NullableIntFieldUpdateOperationsInput | number | null
    totalTDs?: NullableIntFieldUpdateOperationsInput | number | null
    totalTouches?: NullableIntFieldUpdateOperationsInput | number | null
    opportunities?: NullableIntFieldUpdateOperationsInput | number | null
    evadedTackles?: NullableIntFieldUpdateOperationsInput | number | null
    yardsCreated?: NullableIntFieldUpdateOperationsInput | number | null
    yardsPerCarry?: NullableFloatFieldUpdateOperationsInput | number | null
    yardsPerTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    yardsPerReception?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PlayerGameStatUncheckedUpdateManyWithoutTeamRelInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: StringFieldUpdateOperationsInput | string
    gameKey?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    snaps?: NullableIntFieldUpdateOperationsInput | number | null
    snapShare?: NullableFloatFieldUpdateOperationsInput | number | null
    fantasyPoints?: NullableFloatFieldUpdateOperationsInput | number | null
    passAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    completions?: NullableIntFieldUpdateOperationsInput | number | null
    passYards?: NullableIntFieldUpdateOperationsInput | number | null
    passTDs?: NullableIntFieldUpdateOperationsInput | number | null
    interceptions?: NullableIntFieldUpdateOperationsInput | number | null
    carries?: NullableIntFieldUpdateOperationsInput | number | null
    rushYards?: NullableIntFieldUpdateOperationsInput | number | null
    rushTDs?: NullableIntFieldUpdateOperationsInput | number | null
    targets?: NullableIntFieldUpdateOperationsInput | number | null
    receptions?: NullableIntFieldUpdateOperationsInput | number | null
    receivingYards?: NullableIntFieldUpdateOperationsInput | number | null
    receivingTDs?: NullableIntFieldUpdateOperationsInput | number | null
    airYards?: NullableIntFieldUpdateOperationsInput | number | null
    scrimmageYards?: NullableIntFieldUpdateOperationsInput | number | null
    totalTDs?: NullableIntFieldUpdateOperationsInput | number | null
    totalTouches?: NullableIntFieldUpdateOperationsInput | number | null
    opportunities?: NullableIntFieldUpdateOperationsInput | number | null
    evadedTackles?: NullableIntFieldUpdateOperationsInput | number | null
    yardsCreated?: NullableIntFieldUpdateOperationsInput | number | null
    yardsPerCarry?: NullableFloatFieldUpdateOperationsInput | number | null
    yardsPerTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    yardsPerReception?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PlayUpdateWithoutOffTeamRelInput = {
    id?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    quarter?: NullableIntFieldUpdateOperationsInput | number | null
    minutes?: NullableIntFieldUpdateOperationsInput | number | null
    seconds?: NullableIntFieldUpdateOperationsInput | number | null
    down?: NullableIntFieldUpdateOperationsInput | number | null
    yardsToGo?: NullableIntFieldUpdateOperationsInput | number | null
    playType?: NullableStringFieldUpdateOperationsInput | string | null
    yardsGained?: NullableIntFieldUpdateOperationsInput | number | null
    isFirstDown?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redZone?: NullableBoolFieldUpdateOperationsInput | boolean | null
    passPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    runPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    touchdown?: NullableBoolFieldUpdateOperationsInput | boolean | null
    turnover?: NullableBoolFieldUpdateOperationsInput | boolean | null
    game?: GameUpdateOneRequiredWithoutPlaysNestedInput
    defTeamRel?: TeamUpdateOneRequiredWithoutDefensivePlaysNestedInput
    playPlayers?: PlayPlayerUpdateManyWithoutPlayNestedInput
  }

  export type PlayUncheckedUpdateWithoutOffTeamRelInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameKey?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    quarter?: NullableIntFieldUpdateOperationsInput | number | null
    minutes?: NullableIntFieldUpdateOperationsInput | number | null
    seconds?: NullableIntFieldUpdateOperationsInput | number | null
    down?: NullableIntFieldUpdateOperationsInput | number | null
    yardsToGo?: NullableIntFieldUpdateOperationsInput | number | null
    defTeam?: StringFieldUpdateOperationsInput | string
    playType?: NullableStringFieldUpdateOperationsInput | string | null
    yardsGained?: NullableIntFieldUpdateOperationsInput | number | null
    isFirstDown?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redZone?: NullableBoolFieldUpdateOperationsInput | boolean | null
    passPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    runPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    touchdown?: NullableBoolFieldUpdateOperationsInput | boolean | null
    turnover?: NullableBoolFieldUpdateOperationsInput | boolean | null
    playPlayers?: PlayPlayerUncheckedUpdateManyWithoutPlayNestedInput
  }

  export type PlayUncheckedUpdateManyWithoutOffTeamRelInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameKey?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    quarter?: NullableIntFieldUpdateOperationsInput | number | null
    minutes?: NullableIntFieldUpdateOperationsInput | number | null
    seconds?: NullableIntFieldUpdateOperationsInput | number | null
    down?: NullableIntFieldUpdateOperationsInput | number | null
    yardsToGo?: NullableIntFieldUpdateOperationsInput | number | null
    defTeam?: StringFieldUpdateOperationsInput | string
    playType?: NullableStringFieldUpdateOperationsInput | string | null
    yardsGained?: NullableIntFieldUpdateOperationsInput | number | null
    isFirstDown?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redZone?: NullableBoolFieldUpdateOperationsInput | boolean | null
    passPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    runPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    touchdown?: NullableBoolFieldUpdateOperationsInput | boolean | null
    turnover?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PlayUpdateWithoutDefTeamRelInput = {
    id?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    quarter?: NullableIntFieldUpdateOperationsInput | number | null
    minutes?: NullableIntFieldUpdateOperationsInput | number | null
    seconds?: NullableIntFieldUpdateOperationsInput | number | null
    down?: NullableIntFieldUpdateOperationsInput | number | null
    yardsToGo?: NullableIntFieldUpdateOperationsInput | number | null
    playType?: NullableStringFieldUpdateOperationsInput | string | null
    yardsGained?: NullableIntFieldUpdateOperationsInput | number | null
    isFirstDown?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redZone?: NullableBoolFieldUpdateOperationsInput | boolean | null
    passPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    runPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    touchdown?: NullableBoolFieldUpdateOperationsInput | boolean | null
    turnover?: NullableBoolFieldUpdateOperationsInput | boolean | null
    game?: GameUpdateOneRequiredWithoutPlaysNestedInput
    offTeamRel?: TeamUpdateOneRequiredWithoutOffensivePlaysNestedInput
    playPlayers?: PlayPlayerUpdateManyWithoutPlayNestedInput
  }

  export type PlayUncheckedUpdateWithoutDefTeamRelInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameKey?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    quarter?: NullableIntFieldUpdateOperationsInput | number | null
    minutes?: NullableIntFieldUpdateOperationsInput | number | null
    seconds?: NullableIntFieldUpdateOperationsInput | number | null
    down?: NullableIntFieldUpdateOperationsInput | number | null
    yardsToGo?: NullableIntFieldUpdateOperationsInput | number | null
    offTeam?: StringFieldUpdateOperationsInput | string
    playType?: NullableStringFieldUpdateOperationsInput | string | null
    yardsGained?: NullableIntFieldUpdateOperationsInput | number | null
    isFirstDown?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redZone?: NullableBoolFieldUpdateOperationsInput | boolean | null
    passPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    runPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    touchdown?: NullableBoolFieldUpdateOperationsInput | boolean | null
    turnover?: NullableBoolFieldUpdateOperationsInput | boolean | null
    playPlayers?: PlayPlayerUncheckedUpdateManyWithoutPlayNestedInput
  }

  export type PlayUncheckedUpdateManyWithoutDefTeamRelInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameKey?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    quarter?: NullableIntFieldUpdateOperationsInput | number | null
    minutes?: NullableIntFieldUpdateOperationsInput | number | null
    seconds?: NullableIntFieldUpdateOperationsInput | number | null
    down?: NullableIntFieldUpdateOperationsInput | number | null
    yardsToGo?: NullableIntFieldUpdateOperationsInput | number | null
    offTeam?: StringFieldUpdateOperationsInput | string
    playType?: NullableStringFieldUpdateOperationsInput | string | null
    yardsGained?: NullableIntFieldUpdateOperationsInput | number | null
    isFirstDown?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redZone?: NullableBoolFieldUpdateOperationsInput | boolean | null
    passPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    runPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    touchdown?: NullableBoolFieldUpdateOperationsInput | boolean | null
    turnover?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PlayCreateManyGameInput = {
    id: string
    week: number
    quarter?: number | null
    minutes?: number | null
    seconds?: number | null
    down?: number | null
    yardsToGo?: number | null
    offTeam: string
    defTeam: string
    playType?: string | null
    yardsGained?: number | null
    isFirstDown?: boolean | null
    redZone?: boolean | null
    passPlay?: boolean | null
    runPlay?: boolean | null
    touchdown?: boolean | null
    turnover?: boolean | null
  }

  export type PlayerGameStatCreateManyGameInput = {
    id?: number
    playerId: string
    team: string
    position?: string | null
    snaps?: number | null
    snapShare?: number | null
    fantasyPoints?: number | null
    passAttempts?: number | null
    completions?: number | null
    passYards?: number | null
    passTDs?: number | null
    interceptions?: number | null
    carries?: number | null
    rushYards?: number | null
    rushTDs?: number | null
    targets?: number | null
    receptions?: number | null
    receivingYards?: number | null
    receivingTDs?: number | null
    airYards?: number | null
    scrimmageYards?: number | null
    totalTDs?: number | null
    totalTouches?: number | null
    opportunities?: number | null
    evadedTackles?: number | null
    yardsCreated?: number | null
    yardsPerCarry?: number | null
    yardsPerTarget?: number | null
    yardsPerReception?: number | null
  }

  export type PlayUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    quarter?: NullableIntFieldUpdateOperationsInput | number | null
    minutes?: NullableIntFieldUpdateOperationsInput | number | null
    seconds?: NullableIntFieldUpdateOperationsInput | number | null
    down?: NullableIntFieldUpdateOperationsInput | number | null
    yardsToGo?: NullableIntFieldUpdateOperationsInput | number | null
    playType?: NullableStringFieldUpdateOperationsInput | string | null
    yardsGained?: NullableIntFieldUpdateOperationsInput | number | null
    isFirstDown?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redZone?: NullableBoolFieldUpdateOperationsInput | boolean | null
    passPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    runPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    touchdown?: NullableBoolFieldUpdateOperationsInput | boolean | null
    turnover?: NullableBoolFieldUpdateOperationsInput | boolean | null
    offTeamRel?: TeamUpdateOneRequiredWithoutOffensivePlaysNestedInput
    defTeamRel?: TeamUpdateOneRequiredWithoutDefensivePlaysNestedInput
    playPlayers?: PlayPlayerUpdateManyWithoutPlayNestedInput
  }

  export type PlayUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    quarter?: NullableIntFieldUpdateOperationsInput | number | null
    minutes?: NullableIntFieldUpdateOperationsInput | number | null
    seconds?: NullableIntFieldUpdateOperationsInput | number | null
    down?: NullableIntFieldUpdateOperationsInput | number | null
    yardsToGo?: NullableIntFieldUpdateOperationsInput | number | null
    offTeam?: StringFieldUpdateOperationsInput | string
    defTeam?: StringFieldUpdateOperationsInput | string
    playType?: NullableStringFieldUpdateOperationsInput | string | null
    yardsGained?: NullableIntFieldUpdateOperationsInput | number | null
    isFirstDown?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redZone?: NullableBoolFieldUpdateOperationsInput | boolean | null
    passPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    runPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    touchdown?: NullableBoolFieldUpdateOperationsInput | boolean | null
    turnover?: NullableBoolFieldUpdateOperationsInput | boolean | null
    playPlayers?: PlayPlayerUncheckedUpdateManyWithoutPlayNestedInput
  }

  export type PlayUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    quarter?: NullableIntFieldUpdateOperationsInput | number | null
    minutes?: NullableIntFieldUpdateOperationsInput | number | null
    seconds?: NullableIntFieldUpdateOperationsInput | number | null
    down?: NullableIntFieldUpdateOperationsInput | number | null
    yardsToGo?: NullableIntFieldUpdateOperationsInput | number | null
    offTeam?: StringFieldUpdateOperationsInput | string
    defTeam?: StringFieldUpdateOperationsInput | string
    playType?: NullableStringFieldUpdateOperationsInput | string | null
    yardsGained?: NullableIntFieldUpdateOperationsInput | number | null
    isFirstDown?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redZone?: NullableBoolFieldUpdateOperationsInput | boolean | null
    passPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    runPlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    touchdown?: NullableBoolFieldUpdateOperationsInput | boolean | null
    turnover?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PlayerGameStatUpdateWithoutGameInput = {
    position?: NullableStringFieldUpdateOperationsInput | string | null
    snaps?: NullableIntFieldUpdateOperationsInput | number | null
    snapShare?: NullableFloatFieldUpdateOperationsInput | number | null
    fantasyPoints?: NullableFloatFieldUpdateOperationsInput | number | null
    passAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    completions?: NullableIntFieldUpdateOperationsInput | number | null
    passYards?: NullableIntFieldUpdateOperationsInput | number | null
    passTDs?: NullableIntFieldUpdateOperationsInput | number | null
    interceptions?: NullableIntFieldUpdateOperationsInput | number | null
    carries?: NullableIntFieldUpdateOperationsInput | number | null
    rushYards?: NullableIntFieldUpdateOperationsInput | number | null
    rushTDs?: NullableIntFieldUpdateOperationsInput | number | null
    targets?: NullableIntFieldUpdateOperationsInput | number | null
    receptions?: NullableIntFieldUpdateOperationsInput | number | null
    receivingYards?: NullableIntFieldUpdateOperationsInput | number | null
    receivingTDs?: NullableIntFieldUpdateOperationsInput | number | null
    airYards?: NullableIntFieldUpdateOperationsInput | number | null
    scrimmageYards?: NullableIntFieldUpdateOperationsInput | number | null
    totalTDs?: NullableIntFieldUpdateOperationsInput | number | null
    totalTouches?: NullableIntFieldUpdateOperationsInput | number | null
    opportunities?: NullableIntFieldUpdateOperationsInput | number | null
    evadedTackles?: NullableIntFieldUpdateOperationsInput | number | null
    yardsCreated?: NullableIntFieldUpdateOperationsInput | number | null
    yardsPerCarry?: NullableFloatFieldUpdateOperationsInput | number | null
    yardsPerTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    yardsPerReception?: NullableFloatFieldUpdateOperationsInput | number | null
    player?: PlayerUpdateOneRequiredWithoutPlayerGameStatsNestedInput
    teamRel?: TeamUpdateOneRequiredWithoutPlayerGameStatsNestedInput
  }

  export type PlayerGameStatUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    snaps?: NullableIntFieldUpdateOperationsInput | number | null
    snapShare?: NullableFloatFieldUpdateOperationsInput | number | null
    fantasyPoints?: NullableFloatFieldUpdateOperationsInput | number | null
    passAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    completions?: NullableIntFieldUpdateOperationsInput | number | null
    passYards?: NullableIntFieldUpdateOperationsInput | number | null
    passTDs?: NullableIntFieldUpdateOperationsInput | number | null
    interceptions?: NullableIntFieldUpdateOperationsInput | number | null
    carries?: NullableIntFieldUpdateOperationsInput | number | null
    rushYards?: NullableIntFieldUpdateOperationsInput | number | null
    rushTDs?: NullableIntFieldUpdateOperationsInput | number | null
    targets?: NullableIntFieldUpdateOperationsInput | number | null
    receptions?: NullableIntFieldUpdateOperationsInput | number | null
    receivingYards?: NullableIntFieldUpdateOperationsInput | number | null
    receivingTDs?: NullableIntFieldUpdateOperationsInput | number | null
    airYards?: NullableIntFieldUpdateOperationsInput | number | null
    scrimmageYards?: NullableIntFieldUpdateOperationsInput | number | null
    totalTDs?: NullableIntFieldUpdateOperationsInput | number | null
    totalTouches?: NullableIntFieldUpdateOperationsInput | number | null
    opportunities?: NullableIntFieldUpdateOperationsInput | number | null
    evadedTackles?: NullableIntFieldUpdateOperationsInput | number | null
    yardsCreated?: NullableIntFieldUpdateOperationsInput | number | null
    yardsPerCarry?: NullableFloatFieldUpdateOperationsInput | number | null
    yardsPerTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    yardsPerReception?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PlayerGameStatUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    snaps?: NullableIntFieldUpdateOperationsInput | number | null
    snapShare?: NullableFloatFieldUpdateOperationsInput | number | null
    fantasyPoints?: NullableFloatFieldUpdateOperationsInput | number | null
    passAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    completions?: NullableIntFieldUpdateOperationsInput | number | null
    passYards?: NullableIntFieldUpdateOperationsInput | number | null
    passTDs?: NullableIntFieldUpdateOperationsInput | number | null
    interceptions?: NullableIntFieldUpdateOperationsInput | number | null
    carries?: NullableIntFieldUpdateOperationsInput | number | null
    rushYards?: NullableIntFieldUpdateOperationsInput | number | null
    rushTDs?: NullableIntFieldUpdateOperationsInput | number | null
    targets?: NullableIntFieldUpdateOperationsInput | number | null
    receptions?: NullableIntFieldUpdateOperationsInput | number | null
    receivingYards?: NullableIntFieldUpdateOperationsInput | number | null
    receivingTDs?: NullableIntFieldUpdateOperationsInput | number | null
    airYards?: NullableIntFieldUpdateOperationsInput | number | null
    scrimmageYards?: NullableIntFieldUpdateOperationsInput | number | null
    totalTDs?: NullableIntFieldUpdateOperationsInput | number | null
    totalTouches?: NullableIntFieldUpdateOperationsInput | number | null
    opportunities?: NullableIntFieldUpdateOperationsInput | number | null
    evadedTackles?: NullableIntFieldUpdateOperationsInput | number | null
    yardsCreated?: NullableIntFieldUpdateOperationsInput | number | null
    yardsPerCarry?: NullableFloatFieldUpdateOperationsInput | number | null
    yardsPerTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    yardsPerReception?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PlayPlayerCreateManyPlayInput = {
    id?: number
    playerId: string
    role: string
    airYards?: number | null
    yardsGained?: number | null
    targeted?: boolean | null
    completed?: boolean | null
    routeType?: string | null
    coverage?: string | null
    cushion?: number | null
  }

  export type PlayPlayerUpdateWithoutPlayInput = {
    role?: StringFieldUpdateOperationsInput | string
    airYards?: NullableIntFieldUpdateOperationsInput | number | null
    yardsGained?: NullableIntFieldUpdateOperationsInput | number | null
    targeted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    routeType?: NullableStringFieldUpdateOperationsInput | string | null
    coverage?: NullableStringFieldUpdateOperationsInput | string | null
    cushion?: NullableFloatFieldUpdateOperationsInput | number | null
    player?: PlayerUpdateOneRequiredWithoutPlayPlayersNestedInput
  }

  export type PlayPlayerUncheckedUpdateWithoutPlayInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    airYards?: NullableIntFieldUpdateOperationsInput | number | null
    yardsGained?: NullableIntFieldUpdateOperationsInput | number | null
    targeted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    routeType?: NullableStringFieldUpdateOperationsInput | string | null
    coverage?: NullableStringFieldUpdateOperationsInput | string | null
    cushion?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PlayPlayerUncheckedUpdateManyWithoutPlayInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    airYards?: NullableIntFieldUpdateOperationsInput | number | null
    yardsGained?: NullableIntFieldUpdateOperationsInput | number | null
    targeted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    routeType?: NullableStringFieldUpdateOperationsInput | string | null
    coverage?: NullableStringFieldUpdateOperationsInput | string | null
    cushion?: NullableFloatFieldUpdateOperationsInput | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PlayerCountOutputTypeDefaultArgs instead
     */
    export type PlayerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlayerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamCountOutputTypeDefaultArgs instead
     */
    export type TeamCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameCountOutputTypeDefaultArgs instead
     */
    export type GameCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GameCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlayCountOutputTypeDefaultArgs instead
     */
    export type PlayCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlayCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlayerDefaultArgs instead
     */
    export type PlayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlayerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamDefaultArgs instead
     */
    export type TeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameDefaultArgs instead
     */
    export type GameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GameDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WeeklyRosterDefaultArgs instead
     */
    export type WeeklyRosterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WeeklyRosterDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlayerGameStatDefaultArgs instead
     */
    export type PlayerGameStatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlayerGameStatDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlayDefaultArgs instead
     */
    export type PlayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlayDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlayPlayerDefaultArgs instead
     */
    export type PlayPlayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlayPlayerDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}