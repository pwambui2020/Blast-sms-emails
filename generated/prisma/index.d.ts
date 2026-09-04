
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model UserRole
 * 
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model Credit
 * 
 */
export type Credit = $Result.DefaultSelection<Prisma.$CreditPayload>
/**
 * Model CreditTransaction
 * 
 */
export type CreditTransaction = $Result.DefaultSelection<Prisma.$CreditTransactionPayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model ContactList
 * 
 */
export type ContactList = $Result.DefaultSelection<Prisma.$ContactListPayload>
/**
 * Model ContactListMember
 * 
 */
export type ContactListMember = $Result.DefaultSelection<Prisma.$ContactListMemberPayload>
/**
 * Model Template
 * 
 */
export type Template = $Result.DefaultSelection<Prisma.$TemplatePayload>
/**
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>
/**
 * Model CampaignRecipient
 * 
 */
export type CampaignRecipient = $Result.DefaultSelection<Prisma.$CampaignRecipientPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model Setting
 * 
 */
export type Setting = $Result.DefaultSelection<Prisma.$SettingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RoleName: {
  ADMIN: 'ADMIN',
  CUSTOMER: 'CUSTOMER'
};

export type RoleName = (typeof RoleName)[keyof typeof RoleName]


export const CampaignType: {
  SMS: 'SMS',
  EMAIL: 'EMAIL'
};

export type CampaignType = (typeof CampaignType)[keyof typeof CampaignType]


export const CampaignStatus: {
  DRAFT: 'DRAFT',
  QUEUED: 'QUEUED',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED'
};

export type CampaignStatus = (typeof CampaignStatus)[keyof typeof CampaignStatus]


export const RecipientStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  SENT: 'SENT',
  DELIVERED: 'DELIVERED',
  FAILED: 'FAILED'
};

export type RecipientStatus = (typeof RecipientStatus)[keyof typeof RecipientStatus]


export const CreditType: {
  SMS: 'SMS',
  EMAIL: 'EMAIL'
};

export type CreditType = (typeof CreditType)[keyof typeof CreditType]


export const TransactionType: {
  BONUS: 'BONUS',
  PURCHASE: 'PURCHASE',
  CAMPAIGN: 'CAMPAIGN',
  REFUND: 'REFUND'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]

}

export type RoleName = $Enums.RoleName

export const RoleName: typeof $Enums.RoleName

export type CampaignType = $Enums.CampaignType

export const CampaignType: typeof $Enums.CampaignType

export type CampaignStatus = $Enums.CampaignStatus

export const CampaignStatus: typeof $Enums.CampaignStatus

export type RecipientStatus = $Enums.RecipientStatus

export const RecipientStatus: typeof $Enums.RecipientStatus

export type CreditType = $Enums.CreditType

export const CreditType: typeof $Enums.CreditType

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.UserRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.credit`: Exposes CRUD operations for the **Credit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Credits
    * const credits = await prisma.credit.findMany()
    * ```
    */
  get credit(): Prisma.CreditDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.creditTransaction`: Exposes CRUD operations for the **CreditTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditTransactions
    * const creditTransactions = await prisma.creditTransaction.findMany()
    * ```
    */
  get creditTransaction(): Prisma.CreditTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactList`: Exposes CRUD operations for the **ContactList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactLists
    * const contactLists = await prisma.contactList.findMany()
    * ```
    */
  get contactList(): Prisma.ContactListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactListMember`: Exposes CRUD operations for the **ContactListMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactListMembers
    * const contactListMembers = await prisma.contactListMember.findMany()
    * ```
    */
  get contactListMember(): Prisma.ContactListMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.template`: Exposes CRUD operations for the **Template** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Templates
    * const templates = await prisma.template.findMany()
    * ```
    */
  get template(): Prisma.TemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaignRecipient`: Exposes CRUD operations for the **CampaignRecipient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CampaignRecipients
    * const campaignRecipients = await prisma.campaignRecipient.findMany()
    * ```
    */
  get campaignRecipient(): Prisma.CampaignRecipientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setting`: Exposes CRUD operations for the **Setting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.setting.findMany()
    * ```
    */
  get setting(): Prisma.SettingDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Role: 'Role',
    UserRole: 'UserRole',
    RefreshToken: 'RefreshToken',
    Credit: 'Credit',
    CreditTransaction: 'CreditTransaction',
    Contact: 'Contact',
    ContactList: 'ContactList',
    ContactListMember: 'ContactListMember',
    Template: 'Template',
    Campaign: 'Campaign',
    CampaignRecipient: 'CampaignRecipient',
    AuditLog: 'AuditLog',
    Setting: 'Setting'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "role" | "userRole" | "refreshToken" | "credit" | "creditTransaction" | "contact" | "contactList" | "contactListMember" | "template" | "campaign" | "campaignRecipient" | "auditLog" | "setting"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>
        fields: Prisma.UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      Credit: {
        payload: Prisma.$CreditPayload<ExtArgs>
        fields: Prisma.CreditFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>
          }
          findFirst: {
            args: Prisma.CreditFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>
          }
          findMany: {
            args: Prisma.CreditFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>[]
          }
          create: {
            args: Prisma.CreditCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>
          }
          createMany: {
            args: Prisma.CreditCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreditCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>[]
          }
          delete: {
            args: Prisma.CreditDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>
          }
          update: {
            args: Prisma.CreditUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>
          }
          deleteMany: {
            args: Prisma.CreditDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CreditUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>[]
          }
          upsert: {
            args: Prisma.CreditUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>
          }
          aggregate: {
            args: Prisma.CreditAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCredit>
          }
          groupBy: {
            args: Prisma.CreditGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditCountArgs<ExtArgs>
            result: $Utils.Optional<CreditCountAggregateOutputType> | number
          }
        }
      }
      CreditTransaction: {
        payload: Prisma.$CreditTransactionPayload<ExtArgs>
        fields: Prisma.CreditTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          findFirst: {
            args: Prisma.CreditTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          findMany: {
            args: Prisma.CreditTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>[]
          }
          create: {
            args: Prisma.CreditTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          createMany: {
            args: Prisma.CreditTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreditTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>[]
          }
          delete: {
            args: Prisma.CreditTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          update: {
            args: Prisma.CreditTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          deleteMany: {
            args: Prisma.CreditTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CreditTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>[]
          }
          upsert: {
            args: Prisma.CreditTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          aggregate: {
            args: Prisma.CreditTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreditTransaction>
          }
          groupBy: {
            args: Prisma.CreditTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<CreditTransactionCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      ContactList: {
        payload: Prisma.$ContactListPayload<ExtArgs>
        fields: Prisma.ContactListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactListPayload>
          }
          findFirst: {
            args: Prisma.ContactListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactListPayload>
          }
          findMany: {
            args: Prisma.ContactListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactListPayload>[]
          }
          create: {
            args: Prisma.ContactListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactListPayload>
          }
          createMany: {
            args: Prisma.ContactListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactListPayload>[]
          }
          delete: {
            args: Prisma.ContactListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactListPayload>
          }
          update: {
            args: Prisma.ContactListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactListPayload>
          }
          deleteMany: {
            args: Prisma.ContactListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactListPayload>[]
          }
          upsert: {
            args: Prisma.ContactListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactListPayload>
          }
          aggregate: {
            args: Prisma.ContactListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactList>
          }
          groupBy: {
            args: Prisma.ContactListGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactListGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactListCountArgs<ExtArgs>
            result: $Utils.Optional<ContactListCountAggregateOutputType> | number
          }
        }
      }
      ContactListMember: {
        payload: Prisma.$ContactListMemberPayload<ExtArgs>
        fields: Prisma.ContactListMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactListMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactListMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactListMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactListMemberPayload>
          }
          findFirst: {
            args: Prisma.ContactListMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactListMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactListMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactListMemberPayload>
          }
          findMany: {
            args: Prisma.ContactListMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactListMemberPayload>[]
          }
          create: {
            args: Prisma.ContactListMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactListMemberPayload>
          }
          createMany: {
            args: Prisma.ContactListMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactListMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactListMemberPayload>[]
          }
          delete: {
            args: Prisma.ContactListMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactListMemberPayload>
          }
          update: {
            args: Prisma.ContactListMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactListMemberPayload>
          }
          deleteMany: {
            args: Prisma.ContactListMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactListMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactListMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactListMemberPayload>[]
          }
          upsert: {
            args: Prisma.ContactListMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactListMemberPayload>
          }
          aggregate: {
            args: Prisma.ContactListMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactListMember>
          }
          groupBy: {
            args: Prisma.ContactListMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactListMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactListMemberCountArgs<ExtArgs>
            result: $Utils.Optional<ContactListMemberCountAggregateOutputType> | number
          }
        }
      }
      Template: {
        payload: Prisma.$TemplatePayload<ExtArgs>
        fields: Prisma.TemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findFirst: {
            args: Prisma.TemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findMany: {
            args: Prisma.TemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          create: {
            args: Prisma.TemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          createMany: {
            args: Prisma.TemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          delete: {
            args: Prisma.TemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          update: {
            args: Prisma.TemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          deleteMany: {
            args: Prisma.TemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          upsert: {
            args: Prisma.TemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          aggregate: {
            args: Prisma.TemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplate>
          }
          groupBy: {
            args: Prisma.TemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateCountAggregateOutputType> | number
          }
        }
      }
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
          }
        }
      }
      CampaignRecipient: {
        payload: Prisma.$CampaignRecipientPayload<ExtArgs>
        fields: Prisma.CampaignRecipientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignRecipientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignRecipientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignRecipientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignRecipientPayload>
          }
          findFirst: {
            args: Prisma.CampaignRecipientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignRecipientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignRecipientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignRecipientPayload>
          }
          findMany: {
            args: Prisma.CampaignRecipientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignRecipientPayload>[]
          }
          create: {
            args: Prisma.CampaignRecipientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignRecipientPayload>
          }
          createMany: {
            args: Prisma.CampaignRecipientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignRecipientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignRecipientPayload>[]
          }
          delete: {
            args: Prisma.CampaignRecipientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignRecipientPayload>
          }
          update: {
            args: Prisma.CampaignRecipientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignRecipientPayload>
          }
          deleteMany: {
            args: Prisma.CampaignRecipientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignRecipientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignRecipientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignRecipientPayload>[]
          }
          upsert: {
            args: Prisma.CampaignRecipientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignRecipientPayload>
          }
          aggregate: {
            args: Prisma.CampaignRecipientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaignRecipient>
          }
          groupBy: {
            args: Prisma.CampaignRecipientGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignRecipientGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignRecipientCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignRecipientCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      Setting: {
        payload: Prisma.$SettingPayload<ExtArgs>
        fields: Prisma.SettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findFirst: {
            args: Prisma.SettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findMany: {
            args: Prisma.SettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          create: {
            args: Prisma.SettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          createMany: {
            args: Prisma.SettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          delete: {
            args: Prisma.SettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          update: {
            args: Prisma.SettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          deleteMany: {
            args: Prisma.SettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          upsert: {
            args: Prisma.SettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          aggregate: {
            args: Prisma.SettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetting>
          }
          groupBy: {
            args: Prisma.SettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingCountArgs<ExtArgs>
            result: $Utils.Optional<SettingCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    role?: RoleOmit
    userRole?: UserRoleOmit
    refreshToken?: RefreshTokenOmit
    credit?: CreditOmit
    creditTransaction?: CreditTransactionOmit
    contact?: ContactOmit
    contactList?: ContactListOmit
    contactListMember?: ContactListMemberOmit
    template?: TemplateOmit
    campaign?: CampaignOmit
    campaignRecipient?: CampaignRecipientOmit
    auditLog?: AuditLogOmit
    setting?: SettingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    roles: number
    refreshTokens: number
    contacts: number
    contactLists: number
    campaigns: number
    creditTransactions: number
    auditLogs: number
    templates: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | UserCountOutputTypeCountRolesArgs
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
    contacts?: boolean | UserCountOutputTypeCountContactsArgs
    contactLists?: boolean | UserCountOutputTypeCountContactListsArgs
    campaigns?: boolean | UserCountOutputTypeCountCampaignsArgs
    creditTransactions?: boolean | UserCountOutputTypeCountCreditTransactionsArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
    templates?: boolean | UserCountOutputTypeCountTemplatesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContactListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactListWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreditTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditTransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }


  /**
   * Count Type ContactCountOutputType
   */

  export type ContactCountOutputType = {
    contactLists: number
    recipients: number
  }

  export type ContactCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactLists?: boolean | ContactCountOutputTypeCountContactListsArgs
    recipients?: boolean | ContactCountOutputTypeCountRecipientsArgs
  }

  // Custom InputTypes
  /**
   * ContactCountOutputType without action
   */
  export type ContactCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactCountOutputType
     */
    select?: ContactCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContactCountOutputType without action
   */
  export type ContactCountOutputTypeCountContactListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactListMemberWhereInput
  }

  /**
   * ContactCountOutputType without action
   */
  export type ContactCountOutputTypeCountRecipientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignRecipientWhereInput
  }


  /**
   * Count Type ContactListCountOutputType
   */

  export type ContactListCountOutputType = {
    contacts: number
  }

  export type ContactListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contacts?: boolean | ContactListCountOutputTypeCountContactsArgs
  }

  // Custom InputTypes
  /**
   * ContactListCountOutputType without action
   */
  export type ContactListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactListCountOutputType
     */
    select?: ContactListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContactListCountOutputType without action
   */
  export type ContactListCountOutputTypeCountContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactListMemberWhereInput
  }


  /**
   * Count Type TemplateCountOutputType
   */

  export type TemplateCountOutputType = {
    campaigns: number
  }

  export type TemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | TemplateCountOutputTypeCountCampaignsArgs
  }

  // Custom InputTypes
  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateCountOutputType
     */
    select?: TemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }


  /**
   * Count Type CampaignCountOutputType
   */

  export type CampaignCountOutputType = {
    recipients: number
  }

  export type CampaignCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipients?: boolean | CampaignCountOutputTypeCountRecipientsArgs
  }

  // Custom InputTypes
  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCountOutputType
     */
    select?: CampaignCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountRecipientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignRecipientWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    emailVerified: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    emailVerified: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    emailVerified: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    emailVerified?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    emailVerified?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    emailVerified?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    password: string
    emailVerified: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    emailVerified?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roles?: boolean | User$rolesArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    credits?: boolean | User$creditsArgs<ExtArgs>
    contacts?: boolean | User$contactsArgs<ExtArgs>
    contactLists?: boolean | User$contactListsArgs<ExtArgs>
    campaigns?: boolean | User$campaignsArgs<ExtArgs>
    creditTransactions?: boolean | User$creditTransactionsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    setting?: boolean | User$settingArgs<ExtArgs>
    templates?: boolean | User$templatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    emailVerified?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    emailVerified?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    emailVerified?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "emailVerified" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | User$rolesArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    credits?: boolean | User$creditsArgs<ExtArgs>
    contacts?: boolean | User$contactsArgs<ExtArgs>
    contactLists?: boolean | User$contactListsArgs<ExtArgs>
    campaigns?: boolean | User$campaignsArgs<ExtArgs>
    creditTransactions?: boolean | User$creditTransactionsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    setting?: boolean | User$settingArgs<ExtArgs>
    templates?: boolean | User$templatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      roles: Prisma.$UserRolePayload<ExtArgs>[]
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
      credits: Prisma.$CreditPayload<ExtArgs> | null
      contacts: Prisma.$ContactPayload<ExtArgs>[]
      contactLists: Prisma.$ContactListPayload<ExtArgs>[]
      campaigns: Prisma.$CampaignPayload<ExtArgs>[]
      creditTransactions: Prisma.$CreditTransactionPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
      setting: Prisma.$SettingPayload<ExtArgs> | null
      templates: Prisma.$TemplatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      password: string
      emailVerified: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends User$rolesArgs<ExtArgs> = {}>(args?: Subset<T, User$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    credits<T extends User$creditsArgs<ExtArgs> = {}>(args?: Subset<T, User$creditsArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    contacts<T extends User$contactsArgs<ExtArgs> = {}>(args?: Subset<T, User$contactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contactLists<T extends User$contactListsArgs<ExtArgs> = {}>(args?: Subset<T, User$contactListsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    campaigns<T extends User$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, User$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    creditTransactions<T extends User$creditTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$creditTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    setting<T extends User$settingArgs<ExtArgs> = {}>(args?: Subset<T, User$settingArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    templates<T extends User$templatesArgs<ExtArgs> = {}>(args?: Subset<T, User$templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.roles
   */
  export type User$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User.credits
   */
  export type User$creditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    where?: CreditWhereInput
  }

  /**
   * User.contacts
   */
  export type User$contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    cursor?: ContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * User.contactLists
   */
  export type User$contactListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactList
     */
    select?: ContactListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactList
     */
    omit?: ContactListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactListInclude<ExtArgs> | null
    where?: ContactListWhereInput
    orderBy?: ContactListOrderByWithRelationInput | ContactListOrderByWithRelationInput[]
    cursor?: ContactListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactListScalarFieldEnum | ContactListScalarFieldEnum[]
  }

  /**
   * User.campaigns
   */
  export type User$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * User.creditTransactions
   */
  export type User$creditTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    where?: CreditTransactionWhereInput
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    cursor?: CreditTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User.setting
   */
  export type User$settingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    where?: SettingWhereInput
  }

  /**
   * User.templates
   */
  export type User$templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    cursor?: TemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: $Enums.RoleName | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: $Enums.RoleName | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: $Enums.RoleName
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: $Enums.RoleName
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'RoleName'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model UserRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleMinAggregateOutputType = {
    userId: string | null
    roleId: string | null
  }

  export type UserRoleMaxAggregateOutputType = {
    userId: string | null
    roleId: string | null
  }

  export type UserRoleCountAggregateOutputType = {
    userId: number
    roleId: number
    _all: number
  }


  export type UserRoleMinAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type UserRoleMaxAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type UserRoleCountAggregateInputType = {
    userId?: true
    roleId?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRole to aggregate.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoles
    **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }




  export type UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithAggregationInput | UserRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    userId: string
    roleId: string
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectScalar = {
    userId?: boolean
    roleId?: boolean
  }

  export type UserRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "roleId", ExtArgs["result"]["userRole"]>
  export type UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRole"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      roleId: string
    }, ExtArgs["result"]["userRole"]>
    composites: {}
  }

  type UserRoleGetPayload<S extends boolean | null | undefined | UserRoleDefaultArgs> = $Result.GetResult<Prisma.$UserRolePayload, S>

  type UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRoleCountAggregateInputType | true
    }

  export interface UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRole'], meta: { name: 'UserRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {UserRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleFindUniqueArgs>(args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleFindFirstArgs>(args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userRoleWithUserIdOnly = await prisma.userRole.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserRoleFindManyArgs>(args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRole.
     * @param {UserRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     * 
     */
    create<T extends UserRoleCreateArgs>(args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRoles.
     * @param {UserRoleCreateManyArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRoleCreateManyArgs>(args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRoles and returns the data saved in the database.
     * @param {UserRoleCreateManyAndReturnArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRoles and only return the `userId`
     * const userRoleWithUserIdOnly = await prisma.userRole.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserRole.
     * @param {UserRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     * 
     */
    delete<T extends UserRoleDeleteArgs>(args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRole.
     * @param {UserRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRoleUpdateArgs>(args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRoles.
     * @param {UserRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRoleDeleteManyArgs>(args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRoleUpdateManyArgs>(args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles and returns the data updated in the database.
     * @param {UserRoleUpdateManyAndReturnArgs} args - Arguments to update many UserRoles.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRoles and only return the `userId`
     * const userRoleWithUserIdOnly = await prisma.userRole.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, UserRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserRole.
     * @param {UserRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleUpsertArgs>(args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends UserRoleCountArgs>(
      args?: Subset<T, UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleGroupByArgs} args - Group by arguments.
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
      T extends UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRole model
   */
  readonly fields: UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserRole model
   */
  interface UserRoleFieldRefs {
    readonly userId: FieldRef<"UserRole", 'String'>
    readonly roleId: FieldRef<"UserRole", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findUniqueOrThrow
   */
  export type UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findFirstOrThrow
   */
  export type UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole create
   */
  export type UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRole.
     */
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
  }

  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole createManyAndReturn
   */
  export type UserRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRole.
     */
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
    /**
     * Choose, which UserRole to update.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
  }

  /**
   * UserRole updateManyAndReturn
   */
  export type UserRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRole to update in case it exists.
     */
    where: UserRoleWhereUniqueInput
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     */
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
  }

  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter which UserRole to delete.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to delete.
     */
    limit?: number
  }

  /**
   * UserRole without action
   */
  export type UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    expiresAt: Date | null
    revoked: boolean | null
    createdAt: Date | null
    userId: string | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    expiresAt: Date | null
    revoked: boolean | null
    createdAt: Date | null
    userId: string | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    token: number
    expiresAt: number
    revoked: number
    createdAt: number
    userId: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    revoked?: true
    createdAt?: true
    userId?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    revoked?: true
    createdAt?: true
    userId?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    revoked?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    token: string
    expiresAt: Date
    revoked: boolean
    createdAt: Date
    userId: string
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    revoked?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    revoked?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    revoked?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    revoked?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "expiresAt" | "revoked" | "createdAt" | "userId", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      expiresAt: Date
      revoked: boolean
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
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
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly revoked: FieldRef<"RefreshToken", 'Boolean'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model Credit
   */

  export type AggregateCredit = {
    _count: CreditCountAggregateOutputType | null
    _avg: CreditAvgAggregateOutputType | null
    _sum: CreditSumAggregateOutputType | null
    _min: CreditMinAggregateOutputType | null
    _max: CreditMaxAggregateOutputType | null
  }

  export type CreditAvgAggregateOutputType = {
    smsCredits: number | null
    emailCredits: number | null
  }

  export type CreditSumAggregateOutputType = {
    smsCredits: number | null
    emailCredits: number | null
  }

  export type CreditMinAggregateOutputType = {
    id: string | null
    smsCredits: number | null
    emailCredits: number | null
    userId: string | null
  }

  export type CreditMaxAggregateOutputType = {
    id: string | null
    smsCredits: number | null
    emailCredits: number | null
    userId: string | null
  }

  export type CreditCountAggregateOutputType = {
    id: number
    smsCredits: number
    emailCredits: number
    userId: number
    _all: number
  }


  export type CreditAvgAggregateInputType = {
    smsCredits?: true
    emailCredits?: true
  }

  export type CreditSumAggregateInputType = {
    smsCredits?: true
    emailCredits?: true
  }

  export type CreditMinAggregateInputType = {
    id?: true
    smsCredits?: true
    emailCredits?: true
    userId?: true
  }

  export type CreditMaxAggregateInputType = {
    id?: true
    smsCredits?: true
    emailCredits?: true
    userId?: true
  }

  export type CreditCountAggregateInputType = {
    id?: true
    smsCredits?: true
    emailCredits?: true
    userId?: true
    _all?: true
  }

  export type CreditAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Credit to aggregate.
     */
    where?: CreditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credits to fetch.
     */
    orderBy?: CreditOrderByWithRelationInput | CreditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Credits
    **/
    _count?: true | CreditCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditMaxAggregateInputType
  }

  export type GetCreditAggregateType<T extends CreditAggregateArgs> = {
        [P in keyof T & keyof AggregateCredit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCredit[P]>
      : GetScalarType<T[P], AggregateCredit[P]>
  }




  export type CreditGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditWhereInput
    orderBy?: CreditOrderByWithAggregationInput | CreditOrderByWithAggregationInput[]
    by: CreditScalarFieldEnum[] | CreditScalarFieldEnum
    having?: CreditScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditCountAggregateInputType | true
    _avg?: CreditAvgAggregateInputType
    _sum?: CreditSumAggregateInputType
    _min?: CreditMinAggregateInputType
    _max?: CreditMaxAggregateInputType
  }

  export type CreditGroupByOutputType = {
    id: string
    smsCredits: number
    emailCredits: number
    userId: string
    _count: CreditCountAggregateOutputType | null
    _avg: CreditAvgAggregateOutputType | null
    _sum: CreditSumAggregateOutputType | null
    _min: CreditMinAggregateOutputType | null
    _max: CreditMaxAggregateOutputType | null
  }

  type GetCreditGroupByPayload<T extends CreditGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditGroupByOutputType[P]>
            : GetScalarType<T[P], CreditGroupByOutputType[P]>
        }
      >
    >


  export type CreditSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    smsCredits?: boolean
    emailCredits?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["credit"]>

  export type CreditSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    smsCredits?: boolean
    emailCredits?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["credit"]>

  export type CreditSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    smsCredits?: boolean
    emailCredits?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["credit"]>

  export type CreditSelectScalar = {
    id?: boolean
    smsCredits?: boolean
    emailCredits?: boolean
    userId?: boolean
  }

  export type CreditOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "smsCredits" | "emailCredits" | "userId", ExtArgs["result"]["credit"]>
  export type CreditInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CreditIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CreditIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CreditPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Credit"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      smsCredits: number
      emailCredits: number
      userId: string
    }, ExtArgs["result"]["credit"]>
    composites: {}
  }

  type CreditGetPayload<S extends boolean | null | undefined | CreditDefaultArgs> = $Result.GetResult<Prisma.$CreditPayload, S>

  type CreditCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreditCountAggregateInputType | true
    }

  export interface CreditDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Credit'], meta: { name: 'Credit' } }
    /**
     * Find zero or one Credit that matches the filter.
     * @param {CreditFindUniqueArgs} args - Arguments to find a Credit
     * @example
     * // Get one Credit
     * const credit = await prisma.credit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditFindUniqueArgs>(args: SelectSubset<T, CreditFindUniqueArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Credit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreditFindUniqueOrThrowArgs} args - Arguments to find a Credit
     * @example
     * // Get one Credit
     * const credit = await prisma.credit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Credit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditFindFirstArgs} args - Arguments to find a Credit
     * @example
     * // Get one Credit
     * const credit = await prisma.credit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditFindFirstArgs>(args?: SelectSubset<T, CreditFindFirstArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Credit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditFindFirstOrThrowArgs} args - Arguments to find a Credit
     * @example
     * // Get one Credit
     * const credit = await prisma.credit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Credits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Credits
     * const credits = await prisma.credit.findMany()
     * 
     * // Get first 10 Credits
     * const credits = await prisma.credit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditWithIdOnly = await prisma.credit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditFindManyArgs>(args?: SelectSubset<T, CreditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Credit.
     * @param {CreditCreateArgs} args - Arguments to create a Credit.
     * @example
     * // Create one Credit
     * const Credit = await prisma.credit.create({
     *   data: {
     *     // ... data to create a Credit
     *   }
     * })
     * 
     */
    create<T extends CreditCreateArgs>(args: SelectSubset<T, CreditCreateArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Credits.
     * @param {CreditCreateManyArgs} args - Arguments to create many Credits.
     * @example
     * // Create many Credits
     * const credit = await prisma.credit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditCreateManyArgs>(args?: SelectSubset<T, CreditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Credits and returns the data saved in the database.
     * @param {CreditCreateManyAndReturnArgs} args - Arguments to create many Credits.
     * @example
     * // Create many Credits
     * const credit = await prisma.credit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Credits and only return the `id`
     * const creditWithIdOnly = await prisma.credit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreditCreateManyAndReturnArgs>(args?: SelectSubset<T, CreditCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Credit.
     * @param {CreditDeleteArgs} args - Arguments to delete one Credit.
     * @example
     * // Delete one Credit
     * const Credit = await prisma.credit.delete({
     *   where: {
     *     // ... filter to delete one Credit
     *   }
     * })
     * 
     */
    delete<T extends CreditDeleteArgs>(args: SelectSubset<T, CreditDeleteArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Credit.
     * @param {CreditUpdateArgs} args - Arguments to update one Credit.
     * @example
     * // Update one Credit
     * const credit = await prisma.credit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditUpdateArgs>(args: SelectSubset<T, CreditUpdateArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Credits.
     * @param {CreditDeleteManyArgs} args - Arguments to filter Credits to delete.
     * @example
     * // Delete a few Credits
     * const { count } = await prisma.credit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditDeleteManyArgs>(args?: SelectSubset<T, CreditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Credits
     * const credit = await prisma.credit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditUpdateManyArgs>(args: SelectSubset<T, CreditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credits and returns the data updated in the database.
     * @param {CreditUpdateManyAndReturnArgs} args - Arguments to update many Credits.
     * @example
     * // Update many Credits
     * const credit = await prisma.credit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Credits and only return the `id`
     * const creditWithIdOnly = await prisma.credit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CreditUpdateManyAndReturnArgs>(args: SelectSubset<T, CreditUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Credit.
     * @param {CreditUpsertArgs} args - Arguments to update or create a Credit.
     * @example
     * // Update or create a Credit
     * const credit = await prisma.credit.upsert({
     *   create: {
     *     // ... data to create a Credit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Credit we want to update
     *   }
     * })
     */
    upsert<T extends CreditUpsertArgs>(args: SelectSubset<T, CreditUpsertArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Credits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCountArgs} args - Arguments to filter Credits to count.
     * @example
     * // Count the number of Credits
     * const count = await prisma.credit.count({
     *   where: {
     *     // ... the filter for the Credits we want to count
     *   }
     * })
    **/
    count<T extends CreditCountArgs>(
      args?: Subset<T, CreditCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Credit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CreditAggregateArgs>(args: Subset<T, CreditAggregateArgs>): Prisma.PrismaPromise<GetCreditAggregateType<T>>

    /**
     * Group by Credit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditGroupByArgs} args - Group by arguments.
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
      T extends CreditGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditGroupByArgs['orderBy'] }
        : { orderBy?: CreditGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CreditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Credit model
   */
  readonly fields: CreditFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Credit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Credit model
   */
  interface CreditFieldRefs {
    readonly id: FieldRef<"Credit", 'String'>
    readonly smsCredits: FieldRef<"Credit", 'Int'>
    readonly emailCredits: FieldRef<"Credit", 'Int'>
    readonly userId: FieldRef<"Credit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Credit findUnique
   */
  export type CreditFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * Filter, which Credit to fetch.
     */
    where: CreditWhereUniqueInput
  }

  /**
   * Credit findUniqueOrThrow
   */
  export type CreditFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * Filter, which Credit to fetch.
     */
    where: CreditWhereUniqueInput
  }

  /**
   * Credit findFirst
   */
  export type CreditFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * Filter, which Credit to fetch.
     */
    where?: CreditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credits to fetch.
     */
    orderBy?: CreditOrderByWithRelationInput | CreditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Credits.
     */
    cursor?: CreditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Credits.
     */
    distinct?: CreditScalarFieldEnum | CreditScalarFieldEnum[]
  }

  /**
   * Credit findFirstOrThrow
   */
  export type CreditFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * Filter, which Credit to fetch.
     */
    where?: CreditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credits to fetch.
     */
    orderBy?: CreditOrderByWithRelationInput | CreditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Credits.
     */
    cursor?: CreditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Credits.
     */
    distinct?: CreditScalarFieldEnum | CreditScalarFieldEnum[]
  }

  /**
   * Credit findMany
   */
  export type CreditFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * Filter, which Credits to fetch.
     */
    where?: CreditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credits to fetch.
     */
    orderBy?: CreditOrderByWithRelationInput | CreditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Credits.
     */
    cursor?: CreditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Credits.
     */
    distinct?: CreditScalarFieldEnum | CreditScalarFieldEnum[]
  }

  /**
   * Credit create
   */
  export type CreditCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * The data needed to create a Credit.
     */
    data: XOR<CreditCreateInput, CreditUncheckedCreateInput>
  }

  /**
   * Credit createMany
   */
  export type CreditCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Credits.
     */
    data: CreditCreateManyInput | CreditCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Credit createManyAndReturn
   */
  export type CreditCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * The data used to create many Credits.
     */
    data: CreditCreateManyInput | CreditCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Credit update
   */
  export type CreditUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * The data needed to update a Credit.
     */
    data: XOR<CreditUpdateInput, CreditUncheckedUpdateInput>
    /**
     * Choose, which Credit to update.
     */
    where: CreditWhereUniqueInput
  }

  /**
   * Credit updateMany
   */
  export type CreditUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Credits.
     */
    data: XOR<CreditUpdateManyMutationInput, CreditUncheckedUpdateManyInput>
    /**
     * Filter which Credits to update
     */
    where?: CreditWhereInput
    /**
     * Limit how many Credits to update.
     */
    limit?: number
  }

  /**
   * Credit updateManyAndReturn
   */
  export type CreditUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * The data used to update Credits.
     */
    data: XOR<CreditUpdateManyMutationInput, CreditUncheckedUpdateManyInput>
    /**
     * Filter which Credits to update
     */
    where?: CreditWhereInput
    /**
     * Limit how many Credits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Credit upsert
   */
  export type CreditUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * The filter to search for the Credit to update in case it exists.
     */
    where: CreditWhereUniqueInput
    /**
     * In case the Credit found by the `where` argument doesn't exist, create a new Credit with this data.
     */
    create: XOR<CreditCreateInput, CreditUncheckedCreateInput>
    /**
     * In case the Credit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditUpdateInput, CreditUncheckedUpdateInput>
  }

  /**
   * Credit delete
   */
  export type CreditDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * Filter which Credit to delete.
     */
    where: CreditWhereUniqueInput
  }

  /**
   * Credit deleteMany
   */
  export type CreditDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Credits to delete
     */
    where?: CreditWhereInput
    /**
     * Limit how many Credits to delete.
     */
    limit?: number
  }

  /**
   * Credit without action
   */
  export type CreditDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
  }


  /**
   * Model CreditTransaction
   */

  export type AggregateCreditTransaction = {
    _count: CreditTransactionCountAggregateOutputType | null
    _avg: CreditTransactionAvgAggregateOutputType | null
    _sum: CreditTransactionSumAggregateOutputType | null
    _min: CreditTransactionMinAggregateOutputType | null
    _max: CreditTransactionMaxAggregateOutputType | null
  }

  export type CreditTransactionAvgAggregateOutputType = {
    amount: number | null
    balanceAfter: number | null
  }

  export type CreditTransactionSumAggregateOutputType = {
    amount: number | null
    balanceAfter: number | null
  }

  export type CreditTransactionMinAggregateOutputType = {
    id: string | null
    type: $Enums.TransactionType | null
    creditType: $Enums.CreditType | null
    amount: number | null
    balanceAfter: number | null
    reason: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type CreditTransactionMaxAggregateOutputType = {
    id: string | null
    type: $Enums.TransactionType | null
    creditType: $Enums.CreditType | null
    amount: number | null
    balanceAfter: number | null
    reason: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type CreditTransactionCountAggregateOutputType = {
    id: number
    type: number
    creditType: number
    amount: number
    balanceAfter: number
    reason: number
    createdAt: number
    userId: number
    _all: number
  }


  export type CreditTransactionAvgAggregateInputType = {
    amount?: true
    balanceAfter?: true
  }

  export type CreditTransactionSumAggregateInputType = {
    amount?: true
    balanceAfter?: true
  }

  export type CreditTransactionMinAggregateInputType = {
    id?: true
    type?: true
    creditType?: true
    amount?: true
    balanceAfter?: true
    reason?: true
    createdAt?: true
    userId?: true
  }

  export type CreditTransactionMaxAggregateInputType = {
    id?: true
    type?: true
    creditType?: true
    amount?: true
    balanceAfter?: true
    reason?: true
    createdAt?: true
    userId?: true
  }

  export type CreditTransactionCountAggregateInputType = {
    id?: true
    type?: true
    creditType?: true
    amount?: true
    balanceAfter?: true
    reason?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type CreditTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditTransaction to aggregate.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditTransactions
    **/
    _count?: true | CreditTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditTransactionMaxAggregateInputType
  }

  export type GetCreditTransactionAggregateType<T extends CreditTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditTransaction[P]>
      : GetScalarType<T[P], AggregateCreditTransaction[P]>
  }




  export type CreditTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditTransactionWhereInput
    orderBy?: CreditTransactionOrderByWithAggregationInput | CreditTransactionOrderByWithAggregationInput[]
    by: CreditTransactionScalarFieldEnum[] | CreditTransactionScalarFieldEnum
    having?: CreditTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditTransactionCountAggregateInputType | true
    _avg?: CreditTransactionAvgAggregateInputType
    _sum?: CreditTransactionSumAggregateInputType
    _min?: CreditTransactionMinAggregateInputType
    _max?: CreditTransactionMaxAggregateInputType
  }

  export type CreditTransactionGroupByOutputType = {
    id: string
    type: $Enums.TransactionType
    creditType: $Enums.CreditType
    amount: number
    balanceAfter: number
    reason: string
    createdAt: Date
    userId: string
    _count: CreditTransactionCountAggregateOutputType | null
    _avg: CreditTransactionAvgAggregateOutputType | null
    _sum: CreditTransactionSumAggregateOutputType | null
    _min: CreditTransactionMinAggregateOutputType | null
    _max: CreditTransactionMaxAggregateOutputType | null
  }

  type GetCreditTransactionGroupByPayload<T extends CreditTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], CreditTransactionGroupByOutputType[P]>
        }
      >
    >


  export type CreditTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    creditType?: boolean
    amount?: boolean
    balanceAfter?: boolean
    reason?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditTransaction"]>

  export type CreditTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    creditType?: boolean
    amount?: boolean
    balanceAfter?: boolean
    reason?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditTransaction"]>

  export type CreditTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    creditType?: boolean
    amount?: boolean
    balanceAfter?: boolean
    reason?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditTransaction"]>

  export type CreditTransactionSelectScalar = {
    id?: boolean
    type?: boolean
    creditType?: boolean
    amount?: boolean
    balanceAfter?: boolean
    reason?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type CreditTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "creditType" | "amount" | "balanceAfter" | "reason" | "createdAt" | "userId", ExtArgs["result"]["creditTransaction"]>
  export type CreditTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CreditTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CreditTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CreditTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditTransaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.TransactionType
      creditType: $Enums.CreditType
      amount: number
      balanceAfter: number
      reason: string
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["creditTransaction"]>
    composites: {}
  }

  type CreditTransactionGetPayload<S extends boolean | null | undefined | CreditTransactionDefaultArgs> = $Result.GetResult<Prisma.$CreditTransactionPayload, S>

  type CreditTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreditTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreditTransactionCountAggregateInputType | true
    }

  export interface CreditTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditTransaction'], meta: { name: 'CreditTransaction' } }
    /**
     * Find zero or one CreditTransaction that matches the filter.
     * @param {CreditTransactionFindUniqueArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditTransactionFindUniqueArgs>(args: SelectSubset<T, CreditTransactionFindUniqueArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CreditTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreditTransactionFindUniqueOrThrowArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionFindFirstArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditTransactionFindFirstArgs>(args?: SelectSubset<T, CreditTransactionFindFirstArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionFindFirstOrThrowArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CreditTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditTransactions
     * const creditTransactions = await prisma.creditTransaction.findMany()
     * 
     * // Get first 10 CreditTransactions
     * const creditTransactions = await prisma.creditTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditTransactionWithIdOnly = await prisma.creditTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditTransactionFindManyArgs>(args?: SelectSubset<T, CreditTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CreditTransaction.
     * @param {CreditTransactionCreateArgs} args - Arguments to create a CreditTransaction.
     * @example
     * // Create one CreditTransaction
     * const CreditTransaction = await prisma.creditTransaction.create({
     *   data: {
     *     // ... data to create a CreditTransaction
     *   }
     * })
     * 
     */
    create<T extends CreditTransactionCreateArgs>(args: SelectSubset<T, CreditTransactionCreateArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CreditTransactions.
     * @param {CreditTransactionCreateManyArgs} args - Arguments to create many CreditTransactions.
     * @example
     * // Create many CreditTransactions
     * const creditTransaction = await prisma.creditTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditTransactionCreateManyArgs>(args?: SelectSubset<T, CreditTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CreditTransactions and returns the data saved in the database.
     * @param {CreditTransactionCreateManyAndReturnArgs} args - Arguments to create many CreditTransactions.
     * @example
     * // Create many CreditTransactions
     * const creditTransaction = await prisma.creditTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CreditTransactions and only return the `id`
     * const creditTransactionWithIdOnly = await prisma.creditTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreditTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, CreditTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CreditTransaction.
     * @param {CreditTransactionDeleteArgs} args - Arguments to delete one CreditTransaction.
     * @example
     * // Delete one CreditTransaction
     * const CreditTransaction = await prisma.creditTransaction.delete({
     *   where: {
     *     // ... filter to delete one CreditTransaction
     *   }
     * })
     * 
     */
    delete<T extends CreditTransactionDeleteArgs>(args: SelectSubset<T, CreditTransactionDeleteArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CreditTransaction.
     * @param {CreditTransactionUpdateArgs} args - Arguments to update one CreditTransaction.
     * @example
     * // Update one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditTransactionUpdateArgs>(args: SelectSubset<T, CreditTransactionUpdateArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CreditTransactions.
     * @param {CreditTransactionDeleteManyArgs} args - Arguments to filter CreditTransactions to delete.
     * @example
     * // Delete a few CreditTransactions
     * const { count } = await prisma.creditTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditTransactionDeleteManyArgs>(args?: SelectSubset<T, CreditTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditTransactions
     * const creditTransaction = await prisma.creditTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditTransactionUpdateManyArgs>(args: SelectSubset<T, CreditTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditTransactions and returns the data updated in the database.
     * @param {CreditTransactionUpdateManyAndReturnArgs} args - Arguments to update many CreditTransactions.
     * @example
     * // Update many CreditTransactions
     * const creditTransaction = await prisma.creditTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CreditTransactions and only return the `id`
     * const creditTransactionWithIdOnly = await prisma.creditTransaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CreditTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, CreditTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CreditTransaction.
     * @param {CreditTransactionUpsertArgs} args - Arguments to update or create a CreditTransaction.
     * @example
     * // Update or create a CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.upsert({
     *   create: {
     *     // ... data to create a CreditTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditTransaction we want to update
     *   }
     * })
     */
    upsert<T extends CreditTransactionUpsertArgs>(args: SelectSubset<T, CreditTransactionUpsertArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CreditTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionCountArgs} args - Arguments to filter CreditTransactions to count.
     * @example
     * // Count the number of CreditTransactions
     * const count = await prisma.creditTransaction.count({
     *   where: {
     *     // ... the filter for the CreditTransactions we want to count
     *   }
     * })
    **/
    count<T extends CreditTransactionCountArgs>(
      args?: Subset<T, CreditTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CreditTransactionAggregateArgs>(args: Subset<T, CreditTransactionAggregateArgs>): Prisma.PrismaPromise<GetCreditTransactionAggregateType<T>>

    /**
     * Group by CreditTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionGroupByArgs} args - Group by arguments.
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
      T extends CreditTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditTransactionGroupByArgs['orderBy'] }
        : { orderBy?: CreditTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CreditTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditTransaction model
   */
  readonly fields: CreditTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CreditTransaction model
   */
  interface CreditTransactionFieldRefs {
    readonly id: FieldRef<"CreditTransaction", 'String'>
    readonly type: FieldRef<"CreditTransaction", 'TransactionType'>
    readonly creditType: FieldRef<"CreditTransaction", 'CreditType'>
    readonly amount: FieldRef<"CreditTransaction", 'Int'>
    readonly balanceAfter: FieldRef<"CreditTransaction", 'Int'>
    readonly reason: FieldRef<"CreditTransaction", 'String'>
    readonly createdAt: FieldRef<"CreditTransaction", 'DateTime'>
    readonly userId: FieldRef<"CreditTransaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CreditTransaction findUnique
   */
  export type CreditTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where: CreditTransactionWhereUniqueInput
  }

  /**
   * CreditTransaction findUniqueOrThrow
   */
  export type CreditTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where: CreditTransactionWhereUniqueInput
  }

  /**
   * CreditTransaction findFirst
   */
  export type CreditTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditTransactions.
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditTransactions.
     */
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * CreditTransaction findFirstOrThrow
   */
  export type CreditTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditTransactions.
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditTransactions.
     */
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * CreditTransaction findMany
   */
  export type CreditTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransactions to fetch.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditTransactions.
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditTransactions.
     */
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * CreditTransaction create
   */
  export type CreditTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a CreditTransaction.
     */
    data: XOR<CreditTransactionCreateInput, CreditTransactionUncheckedCreateInput>
  }

  /**
   * CreditTransaction createMany
   */
  export type CreditTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditTransactions.
     */
    data: CreditTransactionCreateManyInput | CreditTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreditTransaction createManyAndReturn
   */
  export type CreditTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many CreditTransactions.
     */
    data: CreditTransactionCreateManyInput | CreditTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreditTransaction update
   */
  export type CreditTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a CreditTransaction.
     */
    data: XOR<CreditTransactionUpdateInput, CreditTransactionUncheckedUpdateInput>
    /**
     * Choose, which CreditTransaction to update.
     */
    where: CreditTransactionWhereUniqueInput
  }

  /**
   * CreditTransaction updateMany
   */
  export type CreditTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditTransactions.
     */
    data: XOR<CreditTransactionUpdateManyMutationInput, CreditTransactionUncheckedUpdateManyInput>
    /**
     * Filter which CreditTransactions to update
     */
    where?: CreditTransactionWhereInput
    /**
     * Limit how many CreditTransactions to update.
     */
    limit?: number
  }

  /**
   * CreditTransaction updateManyAndReturn
   */
  export type CreditTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * The data used to update CreditTransactions.
     */
    data: XOR<CreditTransactionUpdateManyMutationInput, CreditTransactionUncheckedUpdateManyInput>
    /**
     * Filter which CreditTransactions to update
     */
    where?: CreditTransactionWhereInput
    /**
     * Limit how many CreditTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreditTransaction upsert
   */
  export type CreditTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the CreditTransaction to update in case it exists.
     */
    where: CreditTransactionWhereUniqueInput
    /**
     * In case the CreditTransaction found by the `where` argument doesn't exist, create a new CreditTransaction with this data.
     */
    create: XOR<CreditTransactionCreateInput, CreditTransactionUncheckedCreateInput>
    /**
     * In case the CreditTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditTransactionUpdateInput, CreditTransactionUncheckedUpdateInput>
  }

  /**
   * CreditTransaction delete
   */
  export type CreditTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter which CreditTransaction to delete.
     */
    where: CreditTransactionWhereUniqueInput
  }

  /**
   * CreditTransaction deleteMany
   */
  export type CreditTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditTransactions to delete
     */
    where?: CreditTransactionWhereInput
    /**
     * Limit how many CreditTransactions to delete.
     */
    limit?: number
  }

  /**
   * CreditTransaction without action
   */
  export type CreditTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactMinAggregateOutputType = {
    id: string | null
    phone: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    company: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ContactMaxAggregateOutputType = {
    id: string | null
    phone: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    company: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    phone: number
    email: number
    firstName: number
    lastName: number
    company: number
    metadata: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type ContactMinAggregateInputType = {
    id?: true
    phone?: true
    email?: true
    firstName?: true
    lastName?: true
    company?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    phone?: true
    email?: true
    firstName?: true
    lastName?: true
    company?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    phone?: true
    email?: true
    firstName?: true
    lastName?: true
    company?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: string
    phone: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    company: string | null
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    company?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    contactLists?: boolean | Contact$contactListsArgs<ExtArgs>
    recipients?: boolean | Contact$recipientsArgs<ExtArgs>
    _count?: boolean | ContactCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    company?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    company?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    phone?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    company?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone" | "email" | "firstName" | "lastName" | "company" | "metadata" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["contact"]>
  export type ContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    contactLists?: boolean | Contact$contactListsArgs<ExtArgs>
    recipients?: boolean | Contact$recipientsArgs<ExtArgs>
    _count?: boolean | ContactCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      contactLists: Prisma.$ContactListMemberPayload<ExtArgs>[]
      recipients: Prisma.$CampaignRecipientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phone: string | null
      email: string | null
      firstName: string | null
      lastName: string | null
      company: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
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
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contactLists<T extends Contact$contactListsArgs<ExtArgs> = {}>(args?: Subset<T, Contact$contactListsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactListMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recipients<T extends Contact$recipientsArgs<ExtArgs> = {}>(args?: Subset<T, Contact$recipientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignRecipientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Contact model
   */
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'String'>
    readonly phone: FieldRef<"Contact", 'String'>
    readonly email: FieldRef<"Contact", 'String'>
    readonly firstName: FieldRef<"Contact", 'String'>
    readonly lastName: FieldRef<"Contact", 'String'>
    readonly company: FieldRef<"Contact", 'String'>
    readonly metadata: FieldRef<"Contact", 'Json'>
    readonly createdAt: FieldRef<"Contact", 'DateTime'>
    readonly updatedAt: FieldRef<"Contact", 'DateTime'>
    readonly userId: FieldRef<"Contact", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact updateManyAndReturn
   */
  export type ContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contact.contactLists
   */
  export type Contact$contactListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactListMember
     */
    select?: ContactListMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactListMember
     */
    omit?: ContactListMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactListMemberInclude<ExtArgs> | null
    where?: ContactListMemberWhereInput
    orderBy?: ContactListMemberOrderByWithRelationInput | ContactListMemberOrderByWithRelationInput[]
    cursor?: ContactListMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactListMemberScalarFieldEnum | ContactListMemberScalarFieldEnum[]
  }

  /**
   * Contact.recipients
   */
  export type Contact$recipientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignRecipient
     */
    select?: CampaignRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignRecipient
     */
    omit?: CampaignRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignRecipientInclude<ExtArgs> | null
    where?: CampaignRecipientWhereInput
    orderBy?: CampaignRecipientOrderByWithRelationInput | CampaignRecipientOrderByWithRelationInput[]
    cursor?: CampaignRecipientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignRecipientScalarFieldEnum | CampaignRecipientScalarFieldEnum[]
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
  }


  /**
   * Model ContactList
   */

  export type AggregateContactList = {
    _count: ContactListCountAggregateOutputType | null
    _min: ContactListMinAggregateOutputType | null
    _max: ContactListMaxAggregateOutputType | null
  }

  export type ContactListMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ContactListMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ContactListCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type ContactListMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ContactListMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ContactListCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type ContactListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactList to aggregate.
     */
    where?: ContactListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactLists to fetch.
     */
    orderBy?: ContactListOrderByWithRelationInput | ContactListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactLists
    **/
    _count?: true | ContactListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactListMaxAggregateInputType
  }

  export type GetContactListAggregateType<T extends ContactListAggregateArgs> = {
        [P in keyof T & keyof AggregateContactList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactList[P]>
      : GetScalarType<T[P], AggregateContactList[P]>
  }




  export type ContactListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactListWhereInput
    orderBy?: ContactListOrderByWithAggregationInput | ContactListOrderByWithAggregationInput[]
    by: ContactListScalarFieldEnum[] | ContactListScalarFieldEnum
    having?: ContactListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactListCountAggregateInputType | true
    _min?: ContactListMinAggregateInputType
    _max?: ContactListMaxAggregateInputType
  }

  export type ContactListGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: ContactListCountAggregateOutputType | null
    _min: ContactListMinAggregateOutputType | null
    _max: ContactListMaxAggregateOutputType | null
  }

  type GetContactListGroupByPayload<T extends ContactListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactListGroupByOutputType[P]>
            : GetScalarType<T[P], ContactListGroupByOutputType[P]>
        }
      >
    >


  export type ContactListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    contacts?: boolean | ContactList$contactsArgs<ExtArgs>
    _count?: boolean | ContactListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactList"]>

  export type ContactListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactList"]>

  export type ContactListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactList"]>

  export type ContactListSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type ContactListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["contactList"]>
  export type ContactListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    contacts?: boolean | ContactList$contactsArgs<ExtArgs>
    _count?: boolean | ContactListCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContactListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContactListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ContactListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactList"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      contacts: Prisma.$ContactListMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["contactList"]>
    composites: {}
  }

  type ContactListGetPayload<S extends boolean | null | undefined | ContactListDefaultArgs> = $Result.GetResult<Prisma.$ContactListPayload, S>

  type ContactListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactListCountAggregateInputType | true
    }

  export interface ContactListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactList'], meta: { name: 'ContactList' } }
    /**
     * Find zero or one ContactList that matches the filter.
     * @param {ContactListFindUniqueArgs} args - Arguments to find a ContactList
     * @example
     * // Get one ContactList
     * const contactList = await prisma.contactList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactListFindUniqueArgs>(args: SelectSubset<T, ContactListFindUniqueArgs<ExtArgs>>): Prisma__ContactListClient<$Result.GetResult<Prisma.$ContactListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactListFindUniqueOrThrowArgs} args - Arguments to find a ContactList
     * @example
     * // Get one ContactList
     * const contactList = await prisma.contactList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactListFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactListClient<$Result.GetResult<Prisma.$ContactListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactListFindFirstArgs} args - Arguments to find a ContactList
     * @example
     * // Get one ContactList
     * const contactList = await prisma.contactList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactListFindFirstArgs>(args?: SelectSubset<T, ContactListFindFirstArgs<ExtArgs>>): Prisma__ContactListClient<$Result.GetResult<Prisma.$ContactListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactListFindFirstOrThrowArgs} args - Arguments to find a ContactList
     * @example
     * // Get one ContactList
     * const contactList = await prisma.contactList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactListFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactListFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactListClient<$Result.GetResult<Prisma.$ContactListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactLists
     * const contactLists = await prisma.contactList.findMany()
     * 
     * // Get first 10 ContactLists
     * const contactLists = await prisma.contactList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactListWithIdOnly = await prisma.contactList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactListFindManyArgs>(args?: SelectSubset<T, ContactListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactList.
     * @param {ContactListCreateArgs} args - Arguments to create a ContactList.
     * @example
     * // Create one ContactList
     * const ContactList = await prisma.contactList.create({
     *   data: {
     *     // ... data to create a ContactList
     *   }
     * })
     * 
     */
    create<T extends ContactListCreateArgs>(args: SelectSubset<T, ContactListCreateArgs<ExtArgs>>): Prisma__ContactListClient<$Result.GetResult<Prisma.$ContactListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactLists.
     * @param {ContactListCreateManyArgs} args - Arguments to create many ContactLists.
     * @example
     * // Create many ContactLists
     * const contactList = await prisma.contactList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactListCreateManyArgs>(args?: SelectSubset<T, ContactListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactLists and returns the data saved in the database.
     * @param {ContactListCreateManyAndReturnArgs} args - Arguments to create many ContactLists.
     * @example
     * // Create many ContactLists
     * const contactList = await prisma.contactList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactLists and only return the `id`
     * const contactListWithIdOnly = await prisma.contactList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactListCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactList.
     * @param {ContactListDeleteArgs} args - Arguments to delete one ContactList.
     * @example
     * // Delete one ContactList
     * const ContactList = await prisma.contactList.delete({
     *   where: {
     *     // ... filter to delete one ContactList
     *   }
     * })
     * 
     */
    delete<T extends ContactListDeleteArgs>(args: SelectSubset<T, ContactListDeleteArgs<ExtArgs>>): Prisma__ContactListClient<$Result.GetResult<Prisma.$ContactListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactList.
     * @param {ContactListUpdateArgs} args - Arguments to update one ContactList.
     * @example
     * // Update one ContactList
     * const contactList = await prisma.contactList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactListUpdateArgs>(args: SelectSubset<T, ContactListUpdateArgs<ExtArgs>>): Prisma__ContactListClient<$Result.GetResult<Prisma.$ContactListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactLists.
     * @param {ContactListDeleteManyArgs} args - Arguments to filter ContactLists to delete.
     * @example
     * // Delete a few ContactLists
     * const { count } = await prisma.contactList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactListDeleteManyArgs>(args?: SelectSubset<T, ContactListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactLists
     * const contactList = await prisma.contactList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactListUpdateManyArgs>(args: SelectSubset<T, ContactListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactLists and returns the data updated in the database.
     * @param {ContactListUpdateManyAndReturnArgs} args - Arguments to update many ContactLists.
     * @example
     * // Update many ContactLists
     * const contactList = await prisma.contactList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactLists and only return the `id`
     * const contactListWithIdOnly = await prisma.contactList.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactListUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactList.
     * @param {ContactListUpsertArgs} args - Arguments to update or create a ContactList.
     * @example
     * // Update or create a ContactList
     * const contactList = await prisma.contactList.upsert({
     *   create: {
     *     // ... data to create a ContactList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactList we want to update
     *   }
     * })
     */
    upsert<T extends ContactListUpsertArgs>(args: SelectSubset<T, ContactListUpsertArgs<ExtArgs>>): Prisma__ContactListClient<$Result.GetResult<Prisma.$ContactListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactListCountArgs} args - Arguments to filter ContactLists to count.
     * @example
     * // Count the number of ContactLists
     * const count = await prisma.contactList.count({
     *   where: {
     *     // ... the filter for the ContactLists we want to count
     *   }
     * })
    **/
    count<T extends ContactListCountArgs>(
      args?: Subset<T, ContactListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactListAggregateArgs>(args: Subset<T, ContactListAggregateArgs>): Prisma.PrismaPromise<GetContactListAggregateType<T>>

    /**
     * Group by ContactList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactListGroupByArgs} args - Group by arguments.
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
      T extends ContactListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactListGroupByArgs['orderBy'] }
        : { orderBy?: ContactListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactList model
   */
  readonly fields: ContactListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contacts<T extends ContactList$contactsArgs<ExtArgs> = {}>(args?: Subset<T, ContactList$contactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactListMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ContactList model
   */
  interface ContactListFieldRefs {
    readonly id: FieldRef<"ContactList", 'String'>
    readonly name: FieldRef<"ContactList", 'String'>
    readonly description: FieldRef<"ContactList", 'String'>
    readonly createdAt: FieldRef<"ContactList", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactList", 'DateTime'>
    readonly userId: FieldRef<"ContactList", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ContactList findUnique
   */
  export type ContactListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactList
     */
    select?: ContactListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactList
     */
    omit?: ContactListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactListInclude<ExtArgs> | null
    /**
     * Filter, which ContactList to fetch.
     */
    where: ContactListWhereUniqueInput
  }

  /**
   * ContactList findUniqueOrThrow
   */
  export type ContactListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactList
     */
    select?: ContactListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactList
     */
    omit?: ContactListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactListInclude<ExtArgs> | null
    /**
     * Filter, which ContactList to fetch.
     */
    where: ContactListWhereUniqueInput
  }

  /**
   * ContactList findFirst
   */
  export type ContactListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactList
     */
    select?: ContactListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactList
     */
    omit?: ContactListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactListInclude<ExtArgs> | null
    /**
     * Filter, which ContactList to fetch.
     */
    where?: ContactListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactLists to fetch.
     */
    orderBy?: ContactListOrderByWithRelationInput | ContactListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactLists.
     */
    cursor?: ContactListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactLists.
     */
    distinct?: ContactListScalarFieldEnum | ContactListScalarFieldEnum[]
  }

  /**
   * ContactList findFirstOrThrow
   */
  export type ContactListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactList
     */
    select?: ContactListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactList
     */
    omit?: ContactListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactListInclude<ExtArgs> | null
    /**
     * Filter, which ContactList to fetch.
     */
    where?: ContactListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactLists to fetch.
     */
    orderBy?: ContactListOrderByWithRelationInput | ContactListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactLists.
     */
    cursor?: ContactListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactLists.
     */
    distinct?: ContactListScalarFieldEnum | ContactListScalarFieldEnum[]
  }

  /**
   * ContactList findMany
   */
  export type ContactListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactList
     */
    select?: ContactListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactList
     */
    omit?: ContactListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactListInclude<ExtArgs> | null
    /**
     * Filter, which ContactLists to fetch.
     */
    where?: ContactListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactLists to fetch.
     */
    orderBy?: ContactListOrderByWithRelationInput | ContactListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactLists.
     */
    cursor?: ContactListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactLists.
     */
    distinct?: ContactListScalarFieldEnum | ContactListScalarFieldEnum[]
  }

  /**
   * ContactList create
   */
  export type ContactListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactList
     */
    select?: ContactListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactList
     */
    omit?: ContactListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactListInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactList.
     */
    data: XOR<ContactListCreateInput, ContactListUncheckedCreateInput>
  }

  /**
   * ContactList createMany
   */
  export type ContactListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactLists.
     */
    data: ContactListCreateManyInput | ContactListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactList createManyAndReturn
   */
  export type ContactListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactList
     */
    select?: ContactListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactList
     */
    omit?: ContactListOmit<ExtArgs> | null
    /**
     * The data used to create many ContactLists.
     */
    data: ContactListCreateManyInput | ContactListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactList update
   */
  export type ContactListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactList
     */
    select?: ContactListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactList
     */
    omit?: ContactListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactListInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactList.
     */
    data: XOR<ContactListUpdateInput, ContactListUncheckedUpdateInput>
    /**
     * Choose, which ContactList to update.
     */
    where: ContactListWhereUniqueInput
  }

  /**
   * ContactList updateMany
   */
  export type ContactListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactLists.
     */
    data: XOR<ContactListUpdateManyMutationInput, ContactListUncheckedUpdateManyInput>
    /**
     * Filter which ContactLists to update
     */
    where?: ContactListWhereInput
    /**
     * Limit how many ContactLists to update.
     */
    limit?: number
  }

  /**
   * ContactList updateManyAndReturn
   */
  export type ContactListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactList
     */
    select?: ContactListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactList
     */
    omit?: ContactListOmit<ExtArgs> | null
    /**
     * The data used to update ContactLists.
     */
    data: XOR<ContactListUpdateManyMutationInput, ContactListUncheckedUpdateManyInput>
    /**
     * Filter which ContactLists to update
     */
    where?: ContactListWhereInput
    /**
     * Limit how many ContactLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactList upsert
   */
  export type ContactListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactList
     */
    select?: ContactListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactList
     */
    omit?: ContactListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactListInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactList to update in case it exists.
     */
    where: ContactListWhereUniqueInput
    /**
     * In case the ContactList found by the `where` argument doesn't exist, create a new ContactList with this data.
     */
    create: XOR<ContactListCreateInput, ContactListUncheckedCreateInput>
    /**
     * In case the ContactList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactListUpdateInput, ContactListUncheckedUpdateInput>
  }

  /**
   * ContactList delete
   */
  export type ContactListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactList
     */
    select?: ContactListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactList
     */
    omit?: ContactListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactListInclude<ExtArgs> | null
    /**
     * Filter which ContactList to delete.
     */
    where: ContactListWhereUniqueInput
  }

  /**
   * ContactList deleteMany
   */
  export type ContactListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactLists to delete
     */
    where?: ContactListWhereInput
    /**
     * Limit how many ContactLists to delete.
     */
    limit?: number
  }

  /**
   * ContactList.contacts
   */
  export type ContactList$contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactListMember
     */
    select?: ContactListMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactListMember
     */
    omit?: ContactListMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactListMemberInclude<ExtArgs> | null
    where?: ContactListMemberWhereInput
    orderBy?: ContactListMemberOrderByWithRelationInput | ContactListMemberOrderByWithRelationInput[]
    cursor?: ContactListMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactListMemberScalarFieldEnum | ContactListMemberScalarFieldEnum[]
  }

  /**
   * ContactList without action
   */
  export type ContactListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactList
     */
    select?: ContactListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactList
     */
    omit?: ContactListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactListInclude<ExtArgs> | null
  }


  /**
   * Model ContactListMember
   */

  export type AggregateContactListMember = {
    _count: ContactListMemberCountAggregateOutputType | null
    _min: ContactListMemberMinAggregateOutputType | null
    _max: ContactListMemberMaxAggregateOutputType | null
  }

  export type ContactListMemberMinAggregateOutputType = {
    contactId: string | null
    listId: string | null
  }

  export type ContactListMemberMaxAggregateOutputType = {
    contactId: string | null
    listId: string | null
  }

  export type ContactListMemberCountAggregateOutputType = {
    contactId: number
    listId: number
    _all: number
  }


  export type ContactListMemberMinAggregateInputType = {
    contactId?: true
    listId?: true
  }

  export type ContactListMemberMaxAggregateInputType = {
    contactId?: true
    listId?: true
  }

  export type ContactListMemberCountAggregateInputType = {
    contactId?: true
    listId?: true
    _all?: true
  }

  export type ContactListMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactListMember to aggregate.
     */
    where?: ContactListMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactListMembers to fetch.
     */
    orderBy?: ContactListMemberOrderByWithRelationInput | ContactListMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactListMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactListMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactListMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactListMembers
    **/
    _count?: true | ContactListMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactListMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactListMemberMaxAggregateInputType
  }

  export type GetContactListMemberAggregateType<T extends ContactListMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateContactListMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactListMember[P]>
      : GetScalarType<T[P], AggregateContactListMember[P]>
  }




  export type ContactListMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactListMemberWhereInput
    orderBy?: ContactListMemberOrderByWithAggregationInput | ContactListMemberOrderByWithAggregationInput[]
    by: ContactListMemberScalarFieldEnum[] | ContactListMemberScalarFieldEnum
    having?: ContactListMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactListMemberCountAggregateInputType | true
    _min?: ContactListMemberMinAggregateInputType
    _max?: ContactListMemberMaxAggregateInputType
  }

  export type ContactListMemberGroupByOutputType = {
    contactId: string
    listId: string
    _count: ContactListMemberCountAggregateOutputType | null
    _min: ContactListMemberMinAggregateOutputType | null
    _max: ContactListMemberMaxAggregateOutputType | null
  }

  type GetContactListMemberGroupByPayload<T extends ContactListMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactListMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactListMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactListMemberGroupByOutputType[P]>
            : GetScalarType<T[P], ContactListMemberGroupByOutputType[P]>
        }
      >
    >


  export type ContactListMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    contactId?: boolean
    listId?: boolean
    contact?: boolean | ContactDefaultArgs<ExtArgs>
    list?: boolean | ContactListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactListMember"]>

  export type ContactListMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    contactId?: boolean
    listId?: boolean
    contact?: boolean | ContactDefaultArgs<ExtArgs>
    list?: boolean | ContactListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactListMember"]>

  export type ContactListMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    contactId?: boolean
    listId?: boolean
    contact?: boolean | ContactDefaultArgs<ExtArgs>
    list?: boolean | ContactListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactListMember"]>

  export type ContactListMemberSelectScalar = {
    contactId?: boolean
    listId?: boolean
  }

  export type ContactListMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"contactId" | "listId", ExtArgs["result"]["contactListMember"]>
  export type ContactListMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contact?: boolean | ContactDefaultArgs<ExtArgs>
    list?: boolean | ContactListDefaultArgs<ExtArgs>
  }
  export type ContactListMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contact?: boolean | ContactDefaultArgs<ExtArgs>
    list?: boolean | ContactListDefaultArgs<ExtArgs>
  }
  export type ContactListMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contact?: boolean | ContactDefaultArgs<ExtArgs>
    list?: boolean | ContactListDefaultArgs<ExtArgs>
  }

  export type $ContactListMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactListMember"
    objects: {
      contact: Prisma.$ContactPayload<ExtArgs>
      list: Prisma.$ContactListPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      contactId: string
      listId: string
    }, ExtArgs["result"]["contactListMember"]>
    composites: {}
  }

  type ContactListMemberGetPayload<S extends boolean | null | undefined | ContactListMemberDefaultArgs> = $Result.GetResult<Prisma.$ContactListMemberPayload, S>

  type ContactListMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactListMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactListMemberCountAggregateInputType | true
    }

  export interface ContactListMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactListMember'], meta: { name: 'ContactListMember' } }
    /**
     * Find zero or one ContactListMember that matches the filter.
     * @param {ContactListMemberFindUniqueArgs} args - Arguments to find a ContactListMember
     * @example
     * // Get one ContactListMember
     * const contactListMember = await prisma.contactListMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactListMemberFindUniqueArgs>(args: SelectSubset<T, ContactListMemberFindUniqueArgs<ExtArgs>>): Prisma__ContactListMemberClient<$Result.GetResult<Prisma.$ContactListMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactListMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactListMemberFindUniqueOrThrowArgs} args - Arguments to find a ContactListMember
     * @example
     * // Get one ContactListMember
     * const contactListMember = await prisma.contactListMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactListMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactListMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactListMemberClient<$Result.GetResult<Prisma.$ContactListMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactListMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactListMemberFindFirstArgs} args - Arguments to find a ContactListMember
     * @example
     * // Get one ContactListMember
     * const contactListMember = await prisma.contactListMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactListMemberFindFirstArgs>(args?: SelectSubset<T, ContactListMemberFindFirstArgs<ExtArgs>>): Prisma__ContactListMemberClient<$Result.GetResult<Prisma.$ContactListMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactListMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactListMemberFindFirstOrThrowArgs} args - Arguments to find a ContactListMember
     * @example
     * // Get one ContactListMember
     * const contactListMember = await prisma.contactListMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactListMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactListMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactListMemberClient<$Result.GetResult<Prisma.$ContactListMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactListMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactListMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactListMembers
     * const contactListMembers = await prisma.contactListMember.findMany()
     * 
     * // Get first 10 ContactListMembers
     * const contactListMembers = await prisma.contactListMember.findMany({ take: 10 })
     * 
     * // Only select the `contactId`
     * const contactListMemberWithContactIdOnly = await prisma.contactListMember.findMany({ select: { contactId: true } })
     * 
     */
    findMany<T extends ContactListMemberFindManyArgs>(args?: SelectSubset<T, ContactListMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactListMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactListMember.
     * @param {ContactListMemberCreateArgs} args - Arguments to create a ContactListMember.
     * @example
     * // Create one ContactListMember
     * const ContactListMember = await prisma.contactListMember.create({
     *   data: {
     *     // ... data to create a ContactListMember
     *   }
     * })
     * 
     */
    create<T extends ContactListMemberCreateArgs>(args: SelectSubset<T, ContactListMemberCreateArgs<ExtArgs>>): Prisma__ContactListMemberClient<$Result.GetResult<Prisma.$ContactListMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactListMembers.
     * @param {ContactListMemberCreateManyArgs} args - Arguments to create many ContactListMembers.
     * @example
     * // Create many ContactListMembers
     * const contactListMember = await prisma.contactListMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactListMemberCreateManyArgs>(args?: SelectSubset<T, ContactListMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactListMembers and returns the data saved in the database.
     * @param {ContactListMemberCreateManyAndReturnArgs} args - Arguments to create many ContactListMembers.
     * @example
     * // Create many ContactListMembers
     * const contactListMember = await prisma.contactListMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactListMembers and only return the `contactId`
     * const contactListMemberWithContactIdOnly = await prisma.contactListMember.createManyAndReturn({
     *   select: { contactId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactListMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactListMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactListMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactListMember.
     * @param {ContactListMemberDeleteArgs} args - Arguments to delete one ContactListMember.
     * @example
     * // Delete one ContactListMember
     * const ContactListMember = await prisma.contactListMember.delete({
     *   where: {
     *     // ... filter to delete one ContactListMember
     *   }
     * })
     * 
     */
    delete<T extends ContactListMemberDeleteArgs>(args: SelectSubset<T, ContactListMemberDeleteArgs<ExtArgs>>): Prisma__ContactListMemberClient<$Result.GetResult<Prisma.$ContactListMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactListMember.
     * @param {ContactListMemberUpdateArgs} args - Arguments to update one ContactListMember.
     * @example
     * // Update one ContactListMember
     * const contactListMember = await prisma.contactListMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactListMemberUpdateArgs>(args: SelectSubset<T, ContactListMemberUpdateArgs<ExtArgs>>): Prisma__ContactListMemberClient<$Result.GetResult<Prisma.$ContactListMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactListMembers.
     * @param {ContactListMemberDeleteManyArgs} args - Arguments to filter ContactListMembers to delete.
     * @example
     * // Delete a few ContactListMembers
     * const { count } = await prisma.contactListMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactListMemberDeleteManyArgs>(args?: SelectSubset<T, ContactListMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactListMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactListMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactListMembers
     * const contactListMember = await prisma.contactListMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactListMemberUpdateManyArgs>(args: SelectSubset<T, ContactListMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactListMembers and returns the data updated in the database.
     * @param {ContactListMemberUpdateManyAndReturnArgs} args - Arguments to update many ContactListMembers.
     * @example
     * // Update many ContactListMembers
     * const contactListMember = await prisma.contactListMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactListMembers and only return the `contactId`
     * const contactListMemberWithContactIdOnly = await prisma.contactListMember.updateManyAndReturn({
     *   select: { contactId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactListMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactListMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactListMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactListMember.
     * @param {ContactListMemberUpsertArgs} args - Arguments to update or create a ContactListMember.
     * @example
     * // Update or create a ContactListMember
     * const contactListMember = await prisma.contactListMember.upsert({
     *   create: {
     *     // ... data to create a ContactListMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactListMember we want to update
     *   }
     * })
     */
    upsert<T extends ContactListMemberUpsertArgs>(args: SelectSubset<T, ContactListMemberUpsertArgs<ExtArgs>>): Prisma__ContactListMemberClient<$Result.GetResult<Prisma.$ContactListMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactListMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactListMemberCountArgs} args - Arguments to filter ContactListMembers to count.
     * @example
     * // Count the number of ContactListMembers
     * const count = await prisma.contactListMember.count({
     *   where: {
     *     // ... the filter for the ContactListMembers we want to count
     *   }
     * })
    **/
    count<T extends ContactListMemberCountArgs>(
      args?: Subset<T, ContactListMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactListMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactListMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactListMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactListMemberAggregateArgs>(args: Subset<T, ContactListMemberAggregateArgs>): Prisma.PrismaPromise<GetContactListMemberAggregateType<T>>

    /**
     * Group by ContactListMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactListMemberGroupByArgs} args - Group by arguments.
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
      T extends ContactListMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactListMemberGroupByArgs['orderBy'] }
        : { orderBy?: ContactListMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactListMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactListMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactListMember model
   */
  readonly fields: ContactListMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactListMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactListMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contact<T extends ContactDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContactDefaultArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    list<T extends ContactListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContactListDefaultArgs<ExtArgs>>): Prisma__ContactListClient<$Result.GetResult<Prisma.$ContactListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ContactListMember model
   */
  interface ContactListMemberFieldRefs {
    readonly contactId: FieldRef<"ContactListMember", 'String'>
    readonly listId: FieldRef<"ContactListMember", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ContactListMember findUnique
   */
  export type ContactListMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactListMember
     */
    select?: ContactListMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactListMember
     */
    omit?: ContactListMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactListMemberInclude<ExtArgs> | null
    /**
     * Filter, which ContactListMember to fetch.
     */
    where: ContactListMemberWhereUniqueInput
  }

  /**
   * ContactListMember findUniqueOrThrow
   */
  export type ContactListMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactListMember
     */
    select?: ContactListMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactListMember
     */
    omit?: ContactListMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactListMemberInclude<ExtArgs> | null
    /**
     * Filter, which ContactListMember to fetch.
     */
    where: ContactListMemberWhereUniqueInput
  }

  /**
   * ContactListMember findFirst
   */
  export type ContactListMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactListMember
     */
    select?: ContactListMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactListMember
     */
    omit?: ContactListMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactListMemberInclude<ExtArgs> | null
    /**
     * Filter, which ContactListMember to fetch.
     */
    where?: ContactListMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactListMembers to fetch.
     */
    orderBy?: ContactListMemberOrderByWithRelationInput | ContactListMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactListMembers.
     */
    cursor?: ContactListMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactListMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactListMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactListMembers.
     */
    distinct?: ContactListMemberScalarFieldEnum | ContactListMemberScalarFieldEnum[]
  }

  /**
   * ContactListMember findFirstOrThrow
   */
  export type ContactListMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactListMember
     */
    select?: ContactListMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactListMember
     */
    omit?: ContactListMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactListMemberInclude<ExtArgs> | null
    /**
     * Filter, which ContactListMember to fetch.
     */
    where?: ContactListMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactListMembers to fetch.
     */
    orderBy?: ContactListMemberOrderByWithRelationInput | ContactListMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactListMembers.
     */
    cursor?: ContactListMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactListMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactListMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactListMembers.
     */
    distinct?: ContactListMemberScalarFieldEnum | ContactListMemberScalarFieldEnum[]
  }

  /**
   * ContactListMember findMany
   */
  export type ContactListMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactListMember
     */
    select?: ContactListMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactListMember
     */
    omit?: ContactListMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactListMemberInclude<ExtArgs> | null
    /**
     * Filter, which ContactListMembers to fetch.
     */
    where?: ContactListMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactListMembers to fetch.
     */
    orderBy?: ContactListMemberOrderByWithRelationInput | ContactListMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactListMembers.
     */
    cursor?: ContactListMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactListMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactListMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactListMembers.
     */
    distinct?: ContactListMemberScalarFieldEnum | ContactListMemberScalarFieldEnum[]
  }

  /**
   * ContactListMember create
   */
  export type ContactListMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactListMember
     */
    select?: ContactListMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactListMember
     */
    omit?: ContactListMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactListMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactListMember.
     */
    data: XOR<ContactListMemberCreateInput, ContactListMemberUncheckedCreateInput>
  }

  /**
   * ContactListMember createMany
   */
  export type ContactListMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactListMembers.
     */
    data: ContactListMemberCreateManyInput | ContactListMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactListMember createManyAndReturn
   */
  export type ContactListMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactListMember
     */
    select?: ContactListMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactListMember
     */
    omit?: ContactListMemberOmit<ExtArgs> | null
    /**
     * The data used to create many ContactListMembers.
     */
    data: ContactListMemberCreateManyInput | ContactListMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactListMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactListMember update
   */
  export type ContactListMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactListMember
     */
    select?: ContactListMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactListMember
     */
    omit?: ContactListMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactListMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactListMember.
     */
    data: XOR<ContactListMemberUpdateInput, ContactListMemberUncheckedUpdateInput>
    /**
     * Choose, which ContactListMember to update.
     */
    where: ContactListMemberWhereUniqueInput
  }

  /**
   * ContactListMember updateMany
   */
  export type ContactListMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactListMembers.
     */
    data: XOR<ContactListMemberUpdateManyMutationInput, ContactListMemberUncheckedUpdateManyInput>
    /**
     * Filter which ContactListMembers to update
     */
    where?: ContactListMemberWhereInput
    /**
     * Limit how many ContactListMembers to update.
     */
    limit?: number
  }

  /**
   * ContactListMember updateManyAndReturn
   */
  export type ContactListMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactListMember
     */
    select?: ContactListMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactListMember
     */
    omit?: ContactListMemberOmit<ExtArgs> | null
    /**
     * The data used to update ContactListMembers.
     */
    data: XOR<ContactListMemberUpdateManyMutationInput, ContactListMemberUncheckedUpdateManyInput>
    /**
     * Filter which ContactListMembers to update
     */
    where?: ContactListMemberWhereInput
    /**
     * Limit how many ContactListMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactListMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactListMember upsert
   */
  export type ContactListMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactListMember
     */
    select?: ContactListMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactListMember
     */
    omit?: ContactListMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactListMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactListMember to update in case it exists.
     */
    where: ContactListMemberWhereUniqueInput
    /**
     * In case the ContactListMember found by the `where` argument doesn't exist, create a new ContactListMember with this data.
     */
    create: XOR<ContactListMemberCreateInput, ContactListMemberUncheckedCreateInput>
    /**
     * In case the ContactListMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactListMemberUpdateInput, ContactListMemberUncheckedUpdateInput>
  }

  /**
   * ContactListMember delete
   */
  export type ContactListMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactListMember
     */
    select?: ContactListMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactListMember
     */
    omit?: ContactListMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactListMemberInclude<ExtArgs> | null
    /**
     * Filter which ContactListMember to delete.
     */
    where: ContactListMemberWhereUniqueInput
  }

  /**
   * ContactListMember deleteMany
   */
  export type ContactListMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactListMembers to delete
     */
    where?: ContactListMemberWhereInput
    /**
     * Limit how many ContactListMembers to delete.
     */
    limit?: number
  }

  /**
   * ContactListMember without action
   */
  export type ContactListMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactListMember
     */
    select?: ContactListMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactListMember
     */
    omit?: ContactListMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactListMemberInclude<ExtArgs> | null
  }


  /**
   * Model Template
   */

  export type AggregateTemplate = {
    _count: TemplateCountAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  export type TemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.CampaignType | null
    subject: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type TemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.CampaignType | null
    subject: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type TemplateCountAggregateOutputType = {
    id: number
    name: number
    type: number
    subject: number
    message: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type TemplateMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    subject?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type TemplateMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    subject?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type TemplateCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    subject?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type TemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Template to aggregate.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Templates
    **/
    _count?: true | TemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateMaxAggregateInputType
  }

  export type GetTemplateAggregateType<T extends TemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplate[P]>
      : GetScalarType<T[P], AggregateTemplate[P]>
  }




  export type TemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithAggregationInput | TemplateOrderByWithAggregationInput[]
    by: TemplateScalarFieldEnum[] | TemplateScalarFieldEnum
    having?: TemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateCountAggregateInputType | true
    _min?: TemplateMinAggregateInputType
    _max?: TemplateMaxAggregateInputType
  }

  export type TemplateGroupByOutputType = {
    id: string
    name: string
    type: $Enums.CampaignType
    subject: string | null
    message: string
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: TemplateCountAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  type GetTemplateGroupByPayload<T extends TemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateGroupByOutputType[P]>
        }
      >
    >


  export type TemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    subject?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    campaigns?: boolean | Template$campaignsArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    subject?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    subject?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    subject?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type TemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "subject" | "message" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["template"]>
  export type TemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    campaigns?: boolean | Template$campaignsArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Template"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      campaigns: Prisma.$CampaignPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.CampaignType
      subject: string | null
      message: string
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["template"]>
    composites: {}
  }

  type TemplateGetPayload<S extends boolean | null | undefined | TemplateDefaultArgs> = $Result.GetResult<Prisma.$TemplatePayload, S>

  type TemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateCountAggregateInputType | true
    }

  export interface TemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Template'], meta: { name: 'Template' } }
    /**
     * Find zero or one Template that matches the filter.
     * @param {TemplateFindUniqueArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateFindUniqueArgs>(args: SelectSubset<T, TemplateFindUniqueArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Template that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateFindUniqueOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateFindFirstArgs>(args?: SelectSubset<T, TemplateFindFirstArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Templates
     * const templates = await prisma.template.findMany()
     * 
     * // Get first 10 Templates
     * const templates = await prisma.template.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateWithIdOnly = await prisma.template.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateFindManyArgs>(args?: SelectSubset<T, TemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Template.
     * @param {TemplateCreateArgs} args - Arguments to create a Template.
     * @example
     * // Create one Template
     * const Template = await prisma.template.create({
     *   data: {
     *     // ... data to create a Template
     *   }
     * })
     * 
     */
    create<T extends TemplateCreateArgs>(args: SelectSubset<T, TemplateCreateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Templates.
     * @param {TemplateCreateManyArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateCreateManyArgs>(args?: SelectSubset<T, TemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Templates and returns the data saved in the database.
     * @param {TemplateCreateManyAndReturnArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Template.
     * @param {TemplateDeleteArgs} args - Arguments to delete one Template.
     * @example
     * // Delete one Template
     * const Template = await prisma.template.delete({
     *   where: {
     *     // ... filter to delete one Template
     *   }
     * })
     * 
     */
    delete<T extends TemplateDeleteArgs>(args: SelectSubset<T, TemplateDeleteArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Template.
     * @param {TemplateUpdateArgs} args - Arguments to update one Template.
     * @example
     * // Update one Template
     * const template = await prisma.template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateUpdateArgs>(args: SelectSubset<T, TemplateUpdateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Templates.
     * @param {TemplateDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateDeleteManyArgs>(args?: SelectSubset<T, TemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateUpdateManyArgs>(args: SelectSubset<T, TemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates and returns the data updated in the database.
     * @param {TemplateUpdateManyAndReturnArgs} args - Arguments to update many Templates.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, TemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Template.
     * @param {TemplateUpsertArgs} args - Arguments to update or create a Template.
     * @example
     * // Update or create a Template
     * const template = await prisma.template.upsert({
     *   create: {
     *     // ... data to create a Template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Template we want to update
     *   }
     * })
     */
    upsert<T extends TemplateUpsertArgs>(args: SelectSubset<T, TemplateUpsertArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.template.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
    **/
    count<T extends TemplateCountArgs>(
      args?: Subset<T, TemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TemplateAggregateArgs>(args: Subset<T, TemplateAggregateArgs>): Prisma.PrismaPromise<GetTemplateAggregateType<T>>

    /**
     * Group by Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateGroupByArgs} args - Group by arguments.
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
      T extends TemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateGroupByArgs['orderBy'] }
        : { orderBy?: TemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Template model
   */
  readonly fields: TemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    campaigns<T extends Template$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, Template$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Template model
   */
  interface TemplateFieldRefs {
    readonly id: FieldRef<"Template", 'String'>
    readonly name: FieldRef<"Template", 'String'>
    readonly type: FieldRef<"Template", 'CampaignType'>
    readonly subject: FieldRef<"Template", 'String'>
    readonly message: FieldRef<"Template", 'String'>
    readonly createdAt: FieldRef<"Template", 'DateTime'>
    readonly updatedAt: FieldRef<"Template", 'DateTime'>
    readonly userId: FieldRef<"Template", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Template findUnique
   */
  export type TemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findUniqueOrThrow
   */
  export type TemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findFirst
   */
  export type TemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findFirstOrThrow
   */
  export type TemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findMany
   */
  export type TemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Templates to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template create
   */
  export type TemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a Template.
     */
    data: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
  }

  /**
   * Template createMany
   */
  export type TemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Template createManyAndReturn
   */
  export type TemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Template update
   */
  export type TemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a Template.
     */
    data: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
    /**
     * Choose, which Template to update.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template updateMany
   */
  export type TemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
  }

  /**
   * Template updateManyAndReturn
   */
  export type TemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Template upsert
   */
  export type TemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the Template to update in case it exists.
     */
    where: TemplateWhereUniqueInput
    /**
     * In case the Template found by the `where` argument doesn't exist, create a new Template with this data.
     */
    create: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
    /**
     * In case the Template was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
  }

  /**
   * Template delete
   */
  export type TemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter which Template to delete.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template deleteMany
   */
  export type TemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Templates to delete
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to delete.
     */
    limit?: number
  }

  /**
   * Template.campaigns
   */
  export type Template$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Template without action
   */
  export type TemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
  }


  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.CampaignType | null
    status: $Enums.CampaignStatus | null
    subject: string | null
    message: string | null
    scheduledAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    templateId: string | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.CampaignType | null
    status: $Enums.CampaignStatus | null
    subject: string | null
    message: string | null
    scheduledAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    templateId: string | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    name: number
    type: number
    status: number
    subject: number
    message: number
    scheduledAt: number
    startedAt: number
    completedAt: number
    createdAt: number
    updatedAt: number
    userId: number
    templateId: number
    _all: number
  }


  export type CampaignMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    status?: true
    subject?: true
    message?: true
    scheduledAt?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    templateId?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    status?: true
    subject?: true
    message?: true
    scheduledAt?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    templateId?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    status?: true
    subject?: true
    message?: true
    scheduledAt?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    templateId?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    id: string
    name: string
    type: $Enums.CampaignType
    status: $Enums.CampaignStatus
    subject: string | null
    message: string
    scheduledAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    userId: string
    templateId: string | null
    _count: CampaignCountAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    subject?: boolean
    message?: boolean
    scheduledAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    templateId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | Campaign$templateArgs<ExtArgs>
    recipients?: boolean | Campaign$recipientsArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    subject?: boolean
    message?: boolean
    scheduledAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    templateId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | Campaign$templateArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    subject?: boolean
    message?: boolean
    scheduledAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    templateId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | Campaign$templateArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    subject?: boolean
    message?: boolean
    scheduledAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    templateId?: boolean
  }

  export type CampaignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "status" | "subject" | "message" | "scheduledAt" | "startedAt" | "completedAt" | "createdAt" | "updatedAt" | "userId" | "templateId", ExtArgs["result"]["campaign"]>
  export type CampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | Campaign$templateArgs<ExtArgs>
    recipients?: boolean | Campaign$recipientsArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | Campaign$templateArgs<ExtArgs>
  }
  export type CampaignIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | Campaign$templateArgs<ExtArgs>
  }

  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      template: Prisma.$TemplatePayload<ExtArgs> | null
      recipients: Prisma.$CampaignRecipientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.CampaignType
      status: $Enums.CampaignStatus
      subject: string | null
      message: string
      scheduledAt: Date | null
      startedAt: Date | null
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
      userId: string
      templateId: string | null
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }

  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignFindManyArgs>(args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
     */
    create<T extends CampaignCreateArgs>(args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreateManyArgs>(args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
     */
    delete<T extends CampaignDeleteArgs>(args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateArgs>(args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns and returns the data updated in the database.
     * @param {CampaignUpdateManyAndReturnArgs} args - Arguments to update many Campaigns.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampaignUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
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
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    template<T extends Campaign$templateArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$templateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    recipients<T extends Campaign$recipientsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$recipientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignRecipientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Campaign model
   */
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'String'>
    readonly name: FieldRef<"Campaign", 'String'>
    readonly type: FieldRef<"Campaign", 'CampaignType'>
    readonly status: FieldRef<"Campaign", 'CampaignStatus'>
    readonly subject: FieldRef<"Campaign", 'String'>
    readonly message: FieldRef<"Campaign", 'String'>
    readonly scheduledAt: FieldRef<"Campaign", 'DateTime'>
    readonly startedAt: FieldRef<"Campaign", 'DateTime'>
    readonly completedAt: FieldRef<"Campaign", 'DateTime'>
    readonly createdAt: FieldRef<"Campaign", 'DateTime'>
    readonly updatedAt: FieldRef<"Campaign", 'DateTime'>
    readonly userId: FieldRef<"Campaign", 'String'>
    readonly templateId: FieldRef<"Campaign", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign createManyAndReturn
   */
  export type CampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign updateManyAndReturn
   */
  export type CampaignUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to delete.
     */
    limit?: number
  }

  /**
   * Campaign.template
   */
  export type Campaign$templateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    where?: TemplateWhereInput
  }

  /**
   * Campaign.recipients
   */
  export type Campaign$recipientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignRecipient
     */
    select?: CampaignRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignRecipient
     */
    omit?: CampaignRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignRecipientInclude<ExtArgs> | null
    where?: CampaignRecipientWhereInput
    orderBy?: CampaignRecipientOrderByWithRelationInput | CampaignRecipientOrderByWithRelationInput[]
    cursor?: CampaignRecipientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignRecipientScalarFieldEnum | CampaignRecipientScalarFieldEnum[]
  }

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
  }


  /**
   * Model CampaignRecipient
   */

  export type AggregateCampaignRecipient = {
    _count: CampaignRecipientCountAggregateOutputType | null
    _min: CampaignRecipientMinAggregateOutputType | null
    _max: CampaignRecipientMaxAggregateOutputType | null
  }

  export type CampaignRecipientMinAggregateOutputType = {
    id: string | null
    status: $Enums.RecipientStatus | null
    providerMessageId: string | null
    errorMessage: string | null
    sentAt: Date | null
    deliveredAt: Date | null
    createdAt: Date | null
    campaignId: string | null
    contactId: string | null
  }

  export type CampaignRecipientMaxAggregateOutputType = {
    id: string | null
    status: $Enums.RecipientStatus | null
    providerMessageId: string | null
    errorMessage: string | null
    sentAt: Date | null
    deliveredAt: Date | null
    createdAt: Date | null
    campaignId: string | null
    contactId: string | null
  }

  export type CampaignRecipientCountAggregateOutputType = {
    id: number
    status: number
    providerMessageId: number
    errorMessage: number
    sentAt: number
    deliveredAt: number
    createdAt: number
    campaignId: number
    contactId: number
    _all: number
  }


  export type CampaignRecipientMinAggregateInputType = {
    id?: true
    status?: true
    providerMessageId?: true
    errorMessage?: true
    sentAt?: true
    deliveredAt?: true
    createdAt?: true
    campaignId?: true
    contactId?: true
  }

  export type CampaignRecipientMaxAggregateInputType = {
    id?: true
    status?: true
    providerMessageId?: true
    errorMessage?: true
    sentAt?: true
    deliveredAt?: true
    createdAt?: true
    campaignId?: true
    contactId?: true
  }

  export type CampaignRecipientCountAggregateInputType = {
    id?: true
    status?: true
    providerMessageId?: true
    errorMessage?: true
    sentAt?: true
    deliveredAt?: true
    createdAt?: true
    campaignId?: true
    contactId?: true
    _all?: true
  }

  export type CampaignRecipientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaignRecipient to aggregate.
     */
    where?: CampaignRecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignRecipients to fetch.
     */
    orderBy?: CampaignRecipientOrderByWithRelationInput | CampaignRecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignRecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignRecipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignRecipients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CampaignRecipients
    **/
    _count?: true | CampaignRecipientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignRecipientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignRecipientMaxAggregateInputType
  }

  export type GetCampaignRecipientAggregateType<T extends CampaignRecipientAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaignRecipient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaignRecipient[P]>
      : GetScalarType<T[P], AggregateCampaignRecipient[P]>
  }




  export type CampaignRecipientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignRecipientWhereInput
    orderBy?: CampaignRecipientOrderByWithAggregationInput | CampaignRecipientOrderByWithAggregationInput[]
    by: CampaignRecipientScalarFieldEnum[] | CampaignRecipientScalarFieldEnum
    having?: CampaignRecipientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignRecipientCountAggregateInputType | true
    _min?: CampaignRecipientMinAggregateInputType
    _max?: CampaignRecipientMaxAggregateInputType
  }

  export type CampaignRecipientGroupByOutputType = {
    id: string
    status: $Enums.RecipientStatus
    providerMessageId: string | null
    errorMessage: string | null
    sentAt: Date | null
    deliveredAt: Date | null
    createdAt: Date
    campaignId: string
    contactId: string
    _count: CampaignRecipientCountAggregateOutputType | null
    _min: CampaignRecipientMinAggregateOutputType | null
    _max: CampaignRecipientMaxAggregateOutputType | null
  }

  type GetCampaignRecipientGroupByPayload<T extends CampaignRecipientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignRecipientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignRecipientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignRecipientGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignRecipientGroupByOutputType[P]>
        }
      >
    >


  export type CampaignRecipientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    providerMessageId?: boolean
    errorMessage?: boolean
    sentAt?: boolean
    deliveredAt?: boolean
    createdAt?: boolean
    campaignId?: boolean
    contactId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignRecipient"]>

  export type CampaignRecipientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    providerMessageId?: boolean
    errorMessage?: boolean
    sentAt?: boolean
    deliveredAt?: boolean
    createdAt?: boolean
    campaignId?: boolean
    contactId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignRecipient"]>

  export type CampaignRecipientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    providerMessageId?: boolean
    errorMessage?: boolean
    sentAt?: boolean
    deliveredAt?: boolean
    createdAt?: boolean
    campaignId?: boolean
    contactId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignRecipient"]>

  export type CampaignRecipientSelectScalar = {
    id?: boolean
    status?: boolean
    providerMessageId?: boolean
    errorMessage?: boolean
    sentAt?: boolean
    deliveredAt?: boolean
    createdAt?: boolean
    campaignId?: boolean
    contactId?: boolean
  }

  export type CampaignRecipientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "providerMessageId" | "errorMessage" | "sentAt" | "deliveredAt" | "createdAt" | "campaignId" | "contactId", ExtArgs["result"]["campaignRecipient"]>
  export type CampaignRecipientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }
  export type CampaignRecipientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }
  export type CampaignRecipientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }

  export type $CampaignRecipientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CampaignRecipient"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
      contact: Prisma.$ContactPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: $Enums.RecipientStatus
      providerMessageId: string | null
      errorMessage: string | null
      sentAt: Date | null
      deliveredAt: Date | null
      createdAt: Date
      campaignId: string
      contactId: string
    }, ExtArgs["result"]["campaignRecipient"]>
    composites: {}
  }

  type CampaignRecipientGetPayload<S extends boolean | null | undefined | CampaignRecipientDefaultArgs> = $Result.GetResult<Prisma.$CampaignRecipientPayload, S>

  type CampaignRecipientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignRecipientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignRecipientCountAggregateInputType | true
    }

  export interface CampaignRecipientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CampaignRecipient'], meta: { name: 'CampaignRecipient' } }
    /**
     * Find zero or one CampaignRecipient that matches the filter.
     * @param {CampaignRecipientFindUniqueArgs} args - Arguments to find a CampaignRecipient
     * @example
     * // Get one CampaignRecipient
     * const campaignRecipient = await prisma.campaignRecipient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignRecipientFindUniqueArgs>(args: SelectSubset<T, CampaignRecipientFindUniqueArgs<ExtArgs>>): Prisma__CampaignRecipientClient<$Result.GetResult<Prisma.$CampaignRecipientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CampaignRecipient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignRecipientFindUniqueOrThrowArgs} args - Arguments to find a CampaignRecipient
     * @example
     * // Get one CampaignRecipient
     * const campaignRecipient = await prisma.campaignRecipient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignRecipientFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignRecipientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignRecipientClient<$Result.GetResult<Prisma.$CampaignRecipientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampaignRecipient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignRecipientFindFirstArgs} args - Arguments to find a CampaignRecipient
     * @example
     * // Get one CampaignRecipient
     * const campaignRecipient = await prisma.campaignRecipient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignRecipientFindFirstArgs>(args?: SelectSubset<T, CampaignRecipientFindFirstArgs<ExtArgs>>): Prisma__CampaignRecipientClient<$Result.GetResult<Prisma.$CampaignRecipientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampaignRecipient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignRecipientFindFirstOrThrowArgs} args - Arguments to find a CampaignRecipient
     * @example
     * // Get one CampaignRecipient
     * const campaignRecipient = await prisma.campaignRecipient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignRecipientFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignRecipientFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignRecipientClient<$Result.GetResult<Prisma.$CampaignRecipientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CampaignRecipients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignRecipientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CampaignRecipients
     * const campaignRecipients = await prisma.campaignRecipient.findMany()
     * 
     * // Get first 10 CampaignRecipients
     * const campaignRecipients = await prisma.campaignRecipient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignRecipientWithIdOnly = await prisma.campaignRecipient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignRecipientFindManyArgs>(args?: SelectSubset<T, CampaignRecipientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignRecipientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CampaignRecipient.
     * @param {CampaignRecipientCreateArgs} args - Arguments to create a CampaignRecipient.
     * @example
     * // Create one CampaignRecipient
     * const CampaignRecipient = await prisma.campaignRecipient.create({
     *   data: {
     *     // ... data to create a CampaignRecipient
     *   }
     * })
     * 
     */
    create<T extends CampaignRecipientCreateArgs>(args: SelectSubset<T, CampaignRecipientCreateArgs<ExtArgs>>): Prisma__CampaignRecipientClient<$Result.GetResult<Prisma.$CampaignRecipientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CampaignRecipients.
     * @param {CampaignRecipientCreateManyArgs} args - Arguments to create many CampaignRecipients.
     * @example
     * // Create many CampaignRecipients
     * const campaignRecipient = await prisma.campaignRecipient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignRecipientCreateManyArgs>(args?: SelectSubset<T, CampaignRecipientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CampaignRecipients and returns the data saved in the database.
     * @param {CampaignRecipientCreateManyAndReturnArgs} args - Arguments to create many CampaignRecipients.
     * @example
     * // Create many CampaignRecipients
     * const campaignRecipient = await prisma.campaignRecipient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CampaignRecipients and only return the `id`
     * const campaignRecipientWithIdOnly = await prisma.campaignRecipient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignRecipientCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignRecipientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignRecipientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CampaignRecipient.
     * @param {CampaignRecipientDeleteArgs} args - Arguments to delete one CampaignRecipient.
     * @example
     * // Delete one CampaignRecipient
     * const CampaignRecipient = await prisma.campaignRecipient.delete({
     *   where: {
     *     // ... filter to delete one CampaignRecipient
     *   }
     * })
     * 
     */
    delete<T extends CampaignRecipientDeleteArgs>(args: SelectSubset<T, CampaignRecipientDeleteArgs<ExtArgs>>): Prisma__CampaignRecipientClient<$Result.GetResult<Prisma.$CampaignRecipientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CampaignRecipient.
     * @param {CampaignRecipientUpdateArgs} args - Arguments to update one CampaignRecipient.
     * @example
     * // Update one CampaignRecipient
     * const campaignRecipient = await prisma.campaignRecipient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignRecipientUpdateArgs>(args: SelectSubset<T, CampaignRecipientUpdateArgs<ExtArgs>>): Prisma__CampaignRecipientClient<$Result.GetResult<Prisma.$CampaignRecipientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CampaignRecipients.
     * @param {CampaignRecipientDeleteManyArgs} args - Arguments to filter CampaignRecipients to delete.
     * @example
     * // Delete a few CampaignRecipients
     * const { count } = await prisma.campaignRecipient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignRecipientDeleteManyArgs>(args?: SelectSubset<T, CampaignRecipientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaignRecipients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignRecipientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CampaignRecipients
     * const campaignRecipient = await prisma.campaignRecipient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignRecipientUpdateManyArgs>(args: SelectSubset<T, CampaignRecipientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaignRecipients and returns the data updated in the database.
     * @param {CampaignRecipientUpdateManyAndReturnArgs} args - Arguments to update many CampaignRecipients.
     * @example
     * // Update many CampaignRecipients
     * const campaignRecipient = await prisma.campaignRecipient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CampaignRecipients and only return the `id`
     * const campaignRecipientWithIdOnly = await prisma.campaignRecipient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampaignRecipientUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignRecipientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignRecipientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CampaignRecipient.
     * @param {CampaignRecipientUpsertArgs} args - Arguments to update or create a CampaignRecipient.
     * @example
     * // Update or create a CampaignRecipient
     * const campaignRecipient = await prisma.campaignRecipient.upsert({
     *   create: {
     *     // ... data to create a CampaignRecipient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CampaignRecipient we want to update
     *   }
     * })
     */
    upsert<T extends CampaignRecipientUpsertArgs>(args: SelectSubset<T, CampaignRecipientUpsertArgs<ExtArgs>>): Prisma__CampaignRecipientClient<$Result.GetResult<Prisma.$CampaignRecipientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CampaignRecipients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignRecipientCountArgs} args - Arguments to filter CampaignRecipients to count.
     * @example
     * // Count the number of CampaignRecipients
     * const count = await prisma.campaignRecipient.count({
     *   where: {
     *     // ... the filter for the CampaignRecipients we want to count
     *   }
     * })
    **/
    count<T extends CampaignRecipientCountArgs>(
      args?: Subset<T, CampaignRecipientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignRecipientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CampaignRecipient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignRecipientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampaignRecipientAggregateArgs>(args: Subset<T, CampaignRecipientAggregateArgs>): Prisma.PrismaPromise<GetCampaignRecipientAggregateType<T>>

    /**
     * Group by CampaignRecipient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignRecipientGroupByArgs} args - Group by arguments.
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
      T extends CampaignRecipientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignRecipientGroupByArgs['orderBy'] }
        : { orderBy?: CampaignRecipientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CampaignRecipientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignRecipientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CampaignRecipient model
   */
  readonly fields: CampaignRecipientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CampaignRecipient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignRecipientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contact<T extends ContactDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContactDefaultArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CampaignRecipient model
   */
  interface CampaignRecipientFieldRefs {
    readonly id: FieldRef<"CampaignRecipient", 'String'>
    readonly status: FieldRef<"CampaignRecipient", 'RecipientStatus'>
    readonly providerMessageId: FieldRef<"CampaignRecipient", 'String'>
    readonly errorMessage: FieldRef<"CampaignRecipient", 'String'>
    readonly sentAt: FieldRef<"CampaignRecipient", 'DateTime'>
    readonly deliveredAt: FieldRef<"CampaignRecipient", 'DateTime'>
    readonly createdAt: FieldRef<"CampaignRecipient", 'DateTime'>
    readonly campaignId: FieldRef<"CampaignRecipient", 'String'>
    readonly contactId: FieldRef<"CampaignRecipient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CampaignRecipient findUnique
   */
  export type CampaignRecipientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignRecipient
     */
    select?: CampaignRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignRecipient
     */
    omit?: CampaignRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignRecipientInclude<ExtArgs> | null
    /**
     * Filter, which CampaignRecipient to fetch.
     */
    where: CampaignRecipientWhereUniqueInput
  }

  /**
   * CampaignRecipient findUniqueOrThrow
   */
  export type CampaignRecipientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignRecipient
     */
    select?: CampaignRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignRecipient
     */
    omit?: CampaignRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignRecipientInclude<ExtArgs> | null
    /**
     * Filter, which CampaignRecipient to fetch.
     */
    where: CampaignRecipientWhereUniqueInput
  }

  /**
   * CampaignRecipient findFirst
   */
  export type CampaignRecipientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignRecipient
     */
    select?: CampaignRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignRecipient
     */
    omit?: CampaignRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignRecipientInclude<ExtArgs> | null
    /**
     * Filter, which CampaignRecipient to fetch.
     */
    where?: CampaignRecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignRecipients to fetch.
     */
    orderBy?: CampaignRecipientOrderByWithRelationInput | CampaignRecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaignRecipients.
     */
    cursor?: CampaignRecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignRecipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignRecipients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaignRecipients.
     */
    distinct?: CampaignRecipientScalarFieldEnum | CampaignRecipientScalarFieldEnum[]
  }

  /**
   * CampaignRecipient findFirstOrThrow
   */
  export type CampaignRecipientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignRecipient
     */
    select?: CampaignRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignRecipient
     */
    omit?: CampaignRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignRecipientInclude<ExtArgs> | null
    /**
     * Filter, which CampaignRecipient to fetch.
     */
    where?: CampaignRecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignRecipients to fetch.
     */
    orderBy?: CampaignRecipientOrderByWithRelationInput | CampaignRecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaignRecipients.
     */
    cursor?: CampaignRecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignRecipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignRecipients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaignRecipients.
     */
    distinct?: CampaignRecipientScalarFieldEnum | CampaignRecipientScalarFieldEnum[]
  }

  /**
   * CampaignRecipient findMany
   */
  export type CampaignRecipientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignRecipient
     */
    select?: CampaignRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignRecipient
     */
    omit?: CampaignRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignRecipientInclude<ExtArgs> | null
    /**
     * Filter, which CampaignRecipients to fetch.
     */
    where?: CampaignRecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignRecipients to fetch.
     */
    orderBy?: CampaignRecipientOrderByWithRelationInput | CampaignRecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CampaignRecipients.
     */
    cursor?: CampaignRecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignRecipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignRecipients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaignRecipients.
     */
    distinct?: CampaignRecipientScalarFieldEnum | CampaignRecipientScalarFieldEnum[]
  }

  /**
   * CampaignRecipient create
   */
  export type CampaignRecipientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignRecipient
     */
    select?: CampaignRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignRecipient
     */
    omit?: CampaignRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignRecipientInclude<ExtArgs> | null
    /**
     * The data needed to create a CampaignRecipient.
     */
    data: XOR<CampaignRecipientCreateInput, CampaignRecipientUncheckedCreateInput>
  }

  /**
   * CampaignRecipient createMany
   */
  export type CampaignRecipientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CampaignRecipients.
     */
    data: CampaignRecipientCreateManyInput | CampaignRecipientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CampaignRecipient createManyAndReturn
   */
  export type CampaignRecipientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignRecipient
     */
    select?: CampaignRecipientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignRecipient
     */
    omit?: CampaignRecipientOmit<ExtArgs> | null
    /**
     * The data used to create many CampaignRecipients.
     */
    data: CampaignRecipientCreateManyInput | CampaignRecipientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignRecipientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CampaignRecipient update
   */
  export type CampaignRecipientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignRecipient
     */
    select?: CampaignRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignRecipient
     */
    omit?: CampaignRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignRecipientInclude<ExtArgs> | null
    /**
     * The data needed to update a CampaignRecipient.
     */
    data: XOR<CampaignRecipientUpdateInput, CampaignRecipientUncheckedUpdateInput>
    /**
     * Choose, which CampaignRecipient to update.
     */
    where: CampaignRecipientWhereUniqueInput
  }

  /**
   * CampaignRecipient updateMany
   */
  export type CampaignRecipientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CampaignRecipients.
     */
    data: XOR<CampaignRecipientUpdateManyMutationInput, CampaignRecipientUncheckedUpdateManyInput>
    /**
     * Filter which CampaignRecipients to update
     */
    where?: CampaignRecipientWhereInput
    /**
     * Limit how many CampaignRecipients to update.
     */
    limit?: number
  }

  /**
   * CampaignRecipient updateManyAndReturn
   */
  export type CampaignRecipientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignRecipient
     */
    select?: CampaignRecipientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignRecipient
     */
    omit?: CampaignRecipientOmit<ExtArgs> | null
    /**
     * The data used to update CampaignRecipients.
     */
    data: XOR<CampaignRecipientUpdateManyMutationInput, CampaignRecipientUncheckedUpdateManyInput>
    /**
     * Filter which CampaignRecipients to update
     */
    where?: CampaignRecipientWhereInput
    /**
     * Limit how many CampaignRecipients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignRecipientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CampaignRecipient upsert
   */
  export type CampaignRecipientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignRecipient
     */
    select?: CampaignRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignRecipient
     */
    omit?: CampaignRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignRecipientInclude<ExtArgs> | null
    /**
     * The filter to search for the CampaignRecipient to update in case it exists.
     */
    where: CampaignRecipientWhereUniqueInput
    /**
     * In case the CampaignRecipient found by the `where` argument doesn't exist, create a new CampaignRecipient with this data.
     */
    create: XOR<CampaignRecipientCreateInput, CampaignRecipientUncheckedCreateInput>
    /**
     * In case the CampaignRecipient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignRecipientUpdateInput, CampaignRecipientUncheckedUpdateInput>
  }

  /**
   * CampaignRecipient delete
   */
  export type CampaignRecipientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignRecipient
     */
    select?: CampaignRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignRecipient
     */
    omit?: CampaignRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignRecipientInclude<ExtArgs> | null
    /**
     * Filter which CampaignRecipient to delete.
     */
    where: CampaignRecipientWhereUniqueInput
  }

  /**
   * CampaignRecipient deleteMany
   */
  export type CampaignRecipientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaignRecipients to delete
     */
    where?: CampaignRecipientWhereInput
    /**
     * Limit how many CampaignRecipients to delete.
     */
    limit?: number
  }

  /**
   * CampaignRecipient without action
   */
  export type CampaignRecipientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignRecipient
     */
    select?: CampaignRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignRecipient
     */
    omit?: CampaignRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignRecipientInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    action: number
    entity: number
    entityId: number
    ipAddress: number
    userAgent: number
    metadata: number
    createdAt: number
    userId: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    action?: true
    entity?: true
    entityId?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    userId?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    action?: true
    entity?: true
    entityId?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    userId?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    action?: true
    entity?: true
    entityId?: true
    ipAddress?: true
    userAgent?: true
    metadata?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    action: string
    entity: string | null
    entityId: string | null
    ipAddress: string | null
    userAgent: string | null
    metadata: JsonValue | null
    createdAt: Date
    userId: string | null
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    metadata?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    metadata?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    metadata?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    metadata?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "entity" | "entityId" | "ipAddress" | "userAgent" | "metadata" | "createdAt" | "userId", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      action: string
      entity: string | null
      entityId: string | null
      ipAddress: string | null
      userAgent: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
      userId: string | null
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AuditLog$userArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entity: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly ipAddress: FieldRef<"AuditLog", 'String'>
    readonly userAgent: FieldRef<"AuditLog", 'String'>
    readonly metadata: FieldRef<"AuditLog", 'Json'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
    readonly userId: FieldRef<"AuditLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog.user
   */
  export type AuditLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model Setting
   */

  export type AggregateSetting = {
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  export type SettingMinAggregateOutputType = {
    id: string | null
    theme: string | null
    timezone: string | null
    language: string | null
    emailNotifications: boolean | null
    smsNotifications: boolean | null
    userId: string | null
  }

  export type SettingMaxAggregateOutputType = {
    id: string | null
    theme: string | null
    timezone: string | null
    language: string | null
    emailNotifications: boolean | null
    smsNotifications: boolean | null
    userId: string | null
  }

  export type SettingCountAggregateOutputType = {
    id: number
    theme: number
    timezone: number
    language: number
    emailNotifications: number
    smsNotifications: number
    userId: number
    _all: number
  }


  export type SettingMinAggregateInputType = {
    id?: true
    theme?: true
    timezone?: true
    language?: true
    emailNotifications?: true
    smsNotifications?: true
    userId?: true
  }

  export type SettingMaxAggregateInputType = {
    id?: true
    theme?: true
    timezone?: true
    language?: true
    emailNotifications?: true
    smsNotifications?: true
    userId?: true
  }

  export type SettingCountAggregateInputType = {
    id?: true
    theme?: true
    timezone?: true
    language?: true
    emailNotifications?: true
    smsNotifications?: true
    userId?: true
    _all?: true
  }

  export type SettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setting to aggregate.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingMaxAggregateInputType
  }

  export type GetSettingAggregateType<T extends SettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetting[P]>
      : GetScalarType<T[P], AggregateSetting[P]>
  }




  export type SettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingWhereInput
    orderBy?: SettingOrderByWithAggregationInput | SettingOrderByWithAggregationInput[]
    by: SettingScalarFieldEnum[] | SettingScalarFieldEnum
    having?: SettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingCountAggregateInputType | true
    _min?: SettingMinAggregateInputType
    _max?: SettingMaxAggregateInputType
  }

  export type SettingGroupByOutputType = {
    id: string
    theme: string
    timezone: string
    language: string
    emailNotifications: boolean
    smsNotifications: boolean
    userId: string
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  type GetSettingGroupByPayload<T extends SettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingGroupByOutputType[P]>
            : GetScalarType<T[P], SettingGroupByOutputType[P]>
        }
      >
    >


  export type SettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    theme?: boolean
    timezone?: boolean
    language?: boolean
    emailNotifications?: boolean
    smsNotifications?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    theme?: boolean
    timezone?: boolean
    language?: boolean
    emailNotifications?: boolean
    smsNotifications?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    theme?: boolean
    timezone?: boolean
    language?: boolean
    emailNotifications?: boolean
    smsNotifications?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectScalar = {
    id?: boolean
    theme?: boolean
    timezone?: boolean
    language?: boolean
    emailNotifications?: boolean
    smsNotifications?: boolean
    userId?: boolean
  }

  export type SettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "theme" | "timezone" | "language" | "emailNotifications" | "smsNotifications" | "userId", ExtArgs["result"]["setting"]>
  export type SettingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SettingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SettingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Setting"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      theme: string
      timezone: string
      language: string
      emailNotifications: boolean
      smsNotifications: boolean
      userId: string
    }, ExtArgs["result"]["setting"]>
    composites: {}
  }

  type SettingGetPayload<S extends boolean | null | undefined | SettingDefaultArgs> = $Result.GetResult<Prisma.$SettingPayload, S>

  type SettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingCountAggregateInputType | true
    }

  export interface SettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Setting'], meta: { name: 'Setting' } }
    /**
     * Find zero or one Setting that matches the filter.
     * @param {SettingFindUniqueArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingFindUniqueArgs>(args: SelectSubset<T, SettingFindUniqueArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Setting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingFindUniqueOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingFindFirstArgs>(args?: SelectSubset<T, SettingFindFirstArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.setting.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.setting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingWithIdOnly = await prisma.setting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingFindManyArgs>(args?: SelectSubset<T, SettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Setting.
     * @param {SettingCreateArgs} args - Arguments to create a Setting.
     * @example
     * // Create one Setting
     * const Setting = await prisma.setting.create({
     *   data: {
     *     // ... data to create a Setting
     *   }
     * })
     * 
     */
    create<T extends SettingCreateArgs>(args: SelectSubset<T, SettingCreateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingCreateManyArgs>(args?: SelectSubset<T, SettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `id`
     * const settingWithIdOnly = await prisma.setting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Setting.
     * @param {SettingDeleteArgs} args - Arguments to delete one Setting.
     * @example
     * // Delete one Setting
     * const Setting = await prisma.setting.delete({
     *   where: {
     *     // ... filter to delete one Setting
     *   }
     * })
     * 
     */
    delete<T extends SettingDeleteArgs>(args: SelectSubset<T, SettingDeleteArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Setting.
     * @param {SettingUpdateArgs} args - Arguments to update one Setting.
     * @example
     * // Update one Setting
     * const setting = await prisma.setting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingUpdateArgs>(args: SelectSubset<T, SettingUpdateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.setting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingDeleteManyArgs>(args?: SelectSubset<T, SettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingUpdateManyArgs>(args: SelectSubset<T, SettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {SettingUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `id`
     * const settingWithIdOnly = await prisma.setting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SettingUpdateManyAndReturnArgs>(args: SelectSubset<T, SettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Setting.
     * @param {SettingUpsertArgs} args - Arguments to update or create a Setting.
     * @example
     * // Update or create a Setting
     * const setting = await prisma.setting.upsert({
     *   create: {
     *     // ... data to create a Setting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setting we want to update
     *   }
     * })
     */
    upsert<T extends SettingUpsertArgs>(args: SelectSubset<T, SettingUpsertArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.setting.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingCountArgs>(
      args?: Subset<T, SettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingAggregateArgs>(args: Subset<T, SettingAggregateArgs>): Prisma.PrismaPromise<GetSettingAggregateType<T>>

    /**
     * Group by Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingGroupByArgs} args - Group by arguments.
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
      T extends SettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingGroupByArgs['orderBy'] }
        : { orderBy?: SettingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Setting model
   */
  readonly fields: SettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Setting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Setting model
   */
  interface SettingFieldRefs {
    readonly id: FieldRef<"Setting", 'String'>
    readonly theme: FieldRef<"Setting", 'String'>
    readonly timezone: FieldRef<"Setting", 'String'>
    readonly language: FieldRef<"Setting", 'String'>
    readonly emailNotifications: FieldRef<"Setting", 'Boolean'>
    readonly smsNotifications: FieldRef<"Setting", 'Boolean'>
    readonly userId: FieldRef<"Setting", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Setting findUnique
   */
  export type SettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findUniqueOrThrow
   */
  export type SettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findFirst
   */
  export type SettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findFirstOrThrow
   */
  export type SettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findMany
   */
  export type SettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting create
   */
  export type SettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * The data needed to create a Setting.
     */
    data: XOR<SettingCreateInput, SettingUncheckedCreateInput>
  }

  /**
   * Setting createMany
   */
  export type SettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Setting createManyAndReturn
   */
  export type SettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Setting update
   */
  export type SettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * The data needed to update a Setting.
     */
    data: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
    /**
     * Choose, which Setting to update.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting updateMany
   */
  export type SettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Setting updateManyAndReturn
   */
  export type SettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Setting upsert
   */
  export type SettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * The filter to search for the Setting to update in case it exists.
     */
    where: SettingWhereUniqueInput
    /**
     * In case the Setting found by the `where` argument doesn't exist, create a new Setting with this data.
     */
    create: XOR<SettingCreateInput, SettingUncheckedCreateInput>
    /**
     * In case the Setting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
  }

  /**
   * Setting delete
   */
  export type SettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter which Setting to delete.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting deleteMany
   */
  export type SettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Setting without action
   */
  export type SettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    emailVerified: 'emailVerified',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserRoleScalarFieldEnum: {
    userId: 'userId',
    roleId: 'roleId'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    expiresAt: 'expiresAt',
    revoked: 'revoked',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const CreditScalarFieldEnum: {
    id: 'id',
    smsCredits: 'smsCredits',
    emailCredits: 'emailCredits',
    userId: 'userId'
  };

  export type CreditScalarFieldEnum = (typeof CreditScalarFieldEnum)[keyof typeof CreditScalarFieldEnum]


  export const CreditTransactionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    creditType: 'creditType',
    amount: 'amount',
    balanceAfter: 'balanceAfter',
    reason: 'reason',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type CreditTransactionScalarFieldEnum = (typeof CreditTransactionScalarFieldEnum)[keyof typeof CreditTransactionScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    company: 'company',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const ContactListScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type ContactListScalarFieldEnum = (typeof ContactListScalarFieldEnum)[keyof typeof ContactListScalarFieldEnum]


  export const ContactListMemberScalarFieldEnum: {
    contactId: 'contactId',
    listId: 'listId'
  };

  export type ContactListMemberScalarFieldEnum = (typeof ContactListMemberScalarFieldEnum)[keyof typeof ContactListMemberScalarFieldEnum]


  export const TemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    subject: 'subject',
    message: 'message',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type TemplateScalarFieldEnum = (typeof TemplateScalarFieldEnum)[keyof typeof TemplateScalarFieldEnum]


  export const CampaignScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    status: 'status',
    subject: 'subject',
    message: 'message',
    scheduledAt: 'scheduledAt',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    templateId: 'templateId'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const CampaignRecipientScalarFieldEnum: {
    id: 'id',
    status: 'status',
    providerMessageId: 'providerMessageId',
    errorMessage: 'errorMessage',
    sentAt: 'sentAt',
    deliveredAt: 'deliveredAt',
    createdAt: 'createdAt',
    campaignId: 'campaignId',
    contactId: 'contactId'
  };

  export type CampaignRecipientScalarFieldEnum = (typeof CampaignRecipientScalarFieldEnum)[keyof typeof CampaignRecipientScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    metadata: 'metadata',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SettingScalarFieldEnum: {
    id: 'id',
    theme: 'theme',
    timezone: 'timezone',
    language: 'language',
    emailNotifications: 'emailNotifications',
    smsNotifications: 'smsNotifications',
    userId: 'userId'
  };

  export type SettingScalarFieldEnum = (typeof SettingScalarFieldEnum)[keyof typeof SettingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'RoleName'
   */
  export type EnumRoleNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleName'>
    


  /**
   * Reference to a field of type 'RoleName[]'
   */
  export type ListEnumRoleNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleName[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'CreditType'
   */
  export type EnumCreditTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CreditType'>
    


  /**
   * Reference to a field of type 'CreditType[]'
   */
  export type ListEnumCreditTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CreditType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'CampaignType'
   */
  export type EnumCampaignTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignType'>
    


  /**
   * Reference to a field of type 'CampaignType[]'
   */
  export type ListEnumCampaignTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignType[]'>
    


  /**
   * Reference to a field of type 'CampaignStatus'
   */
  export type EnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus'>
    


  /**
   * Reference to a field of type 'CampaignStatus[]'
   */
  export type ListEnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus[]'>
    


  /**
   * Reference to a field of type 'RecipientStatus'
   */
  export type EnumRecipientStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecipientStatus'>
    


  /**
   * Reference to a field of type 'RecipientStatus[]'
   */
  export type ListEnumRecipientStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecipientStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    roles?: UserRoleListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    credits?: XOR<CreditNullableScalarRelationFilter, CreditWhereInput> | null
    contacts?: ContactListRelationFilter
    contactLists?: ContactListListRelationFilter
    campaigns?: CampaignListRelationFilter
    creditTransactions?: CreditTransactionListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    setting?: XOR<SettingNullableScalarRelationFilter, SettingWhereInput> | null
    templates?: TemplateListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roles?: UserRoleOrderByRelationAggregateInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
    credits?: CreditOrderByWithRelationInput
    contacts?: ContactOrderByRelationAggregateInput
    contactLists?: ContactListOrderByRelationAggregateInput
    campaigns?: CampaignOrderByRelationAggregateInput
    creditTransactions?: CreditTransactionOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
    setting?: SettingOrderByWithRelationInput
    templates?: TemplateOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    roles?: UserRoleListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    credits?: XOR<CreditNullableScalarRelationFilter, CreditWhereInput> | null
    contacts?: ContactListRelationFilter
    contactLists?: ContactListListRelationFilter
    campaigns?: CampaignListRelationFilter
    creditTransactions?: CreditTransactionListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    setting?: XOR<SettingNullableScalarRelationFilter, SettingWhereInput> | null
    templates?: TemplateListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: EnumRoleNameFilter<"Role"> | $Enums.RoleName
    users?: UserRoleListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserRoleOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: $Enums.RoleName
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    users?: UserRoleListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    name?: EnumRoleNameWithAggregatesFilter<"Role"> | $Enums.RoleName
  }

  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    userId?: StringFilter<"UserRole"> | string
    roleId?: StringFilter<"UserRole"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type UserRoleOrderByWithRelationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    user?: UserOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<{
    userId_roleId?: UserRoleUserIdRoleIdCompoundUniqueInput
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    userId?: StringFilter<"UserRole"> | string
    roleId?: StringFilter<"UserRole"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "userId_roleId">

  export type UserRoleOrderByWithAggregationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    _count?: UserRoleCountOrderByAggregateInput
    _max?: UserRoleMaxOrderByAggregateInput
    _min?: UserRoleMinOrderByAggregateInput
  }

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    OR?: UserRoleScalarWhereWithAggregatesInput[]
    NOT?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserRole"> | string
    roleId?: StringWithAggregatesFilter<"UserRole"> | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revoked?: BoolFilter<"RefreshToken"> | boolean
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    userId?: StringFilter<"RefreshToken"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revoked?: BoolFilter<"RefreshToken"> | boolean
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    userId?: StringFilter<"RefreshToken"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    revoked?: BoolWithAggregatesFilter<"RefreshToken"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    userId?: StringWithAggregatesFilter<"RefreshToken"> | string
  }

  export type CreditWhereInput = {
    AND?: CreditWhereInput | CreditWhereInput[]
    OR?: CreditWhereInput[]
    NOT?: CreditWhereInput | CreditWhereInput[]
    id?: StringFilter<"Credit"> | string
    smsCredits?: IntFilter<"Credit"> | number
    emailCredits?: IntFilter<"Credit"> | number
    userId?: StringFilter<"Credit"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CreditOrderByWithRelationInput = {
    id?: SortOrder
    smsCredits?: SortOrder
    emailCredits?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CreditWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: CreditWhereInput | CreditWhereInput[]
    OR?: CreditWhereInput[]
    NOT?: CreditWhereInput | CreditWhereInput[]
    smsCredits?: IntFilter<"Credit"> | number
    emailCredits?: IntFilter<"Credit"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type CreditOrderByWithAggregationInput = {
    id?: SortOrder
    smsCredits?: SortOrder
    emailCredits?: SortOrder
    userId?: SortOrder
    _count?: CreditCountOrderByAggregateInput
    _avg?: CreditAvgOrderByAggregateInput
    _max?: CreditMaxOrderByAggregateInput
    _min?: CreditMinOrderByAggregateInput
    _sum?: CreditSumOrderByAggregateInput
  }

  export type CreditScalarWhereWithAggregatesInput = {
    AND?: CreditScalarWhereWithAggregatesInput | CreditScalarWhereWithAggregatesInput[]
    OR?: CreditScalarWhereWithAggregatesInput[]
    NOT?: CreditScalarWhereWithAggregatesInput | CreditScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Credit"> | string
    smsCredits?: IntWithAggregatesFilter<"Credit"> | number
    emailCredits?: IntWithAggregatesFilter<"Credit"> | number
    userId?: StringWithAggregatesFilter<"Credit"> | string
  }

  export type CreditTransactionWhereInput = {
    AND?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    OR?: CreditTransactionWhereInput[]
    NOT?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    id?: StringFilter<"CreditTransaction"> | string
    type?: EnumTransactionTypeFilter<"CreditTransaction"> | $Enums.TransactionType
    creditType?: EnumCreditTypeFilter<"CreditTransaction"> | $Enums.CreditType
    amount?: IntFilter<"CreditTransaction"> | number
    balanceAfter?: IntFilter<"CreditTransaction"> | number
    reason?: StringFilter<"CreditTransaction"> | string
    createdAt?: DateTimeFilter<"CreditTransaction"> | Date | string
    userId?: StringFilter<"CreditTransaction"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CreditTransactionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    creditType?: SortOrder
    amount?: SortOrder
    balanceAfter?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CreditTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    OR?: CreditTransactionWhereInput[]
    NOT?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    type?: EnumTransactionTypeFilter<"CreditTransaction"> | $Enums.TransactionType
    creditType?: EnumCreditTypeFilter<"CreditTransaction"> | $Enums.CreditType
    amount?: IntFilter<"CreditTransaction"> | number
    balanceAfter?: IntFilter<"CreditTransaction"> | number
    reason?: StringFilter<"CreditTransaction"> | string
    createdAt?: DateTimeFilter<"CreditTransaction"> | Date | string
    userId?: StringFilter<"CreditTransaction"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CreditTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    creditType?: SortOrder
    amount?: SortOrder
    balanceAfter?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: CreditTransactionCountOrderByAggregateInput
    _avg?: CreditTransactionAvgOrderByAggregateInput
    _max?: CreditTransactionMaxOrderByAggregateInput
    _min?: CreditTransactionMinOrderByAggregateInput
    _sum?: CreditTransactionSumOrderByAggregateInput
  }

  export type CreditTransactionScalarWhereWithAggregatesInput = {
    AND?: CreditTransactionScalarWhereWithAggregatesInput | CreditTransactionScalarWhereWithAggregatesInput[]
    OR?: CreditTransactionScalarWhereWithAggregatesInput[]
    NOT?: CreditTransactionScalarWhereWithAggregatesInput | CreditTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CreditTransaction"> | string
    type?: EnumTransactionTypeWithAggregatesFilter<"CreditTransaction"> | $Enums.TransactionType
    creditType?: EnumCreditTypeWithAggregatesFilter<"CreditTransaction"> | $Enums.CreditType
    amount?: IntWithAggregatesFilter<"CreditTransaction"> | number
    balanceAfter?: IntWithAggregatesFilter<"CreditTransaction"> | number
    reason?: StringWithAggregatesFilter<"CreditTransaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CreditTransaction"> | Date | string
    userId?: StringWithAggregatesFilter<"CreditTransaction"> | string
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: StringFilter<"Contact"> | string
    phone?: StringNullableFilter<"Contact"> | string | null
    email?: StringNullableFilter<"Contact"> | string | null
    firstName?: StringNullableFilter<"Contact"> | string | null
    lastName?: StringNullableFilter<"Contact"> | string | null
    company?: StringNullableFilter<"Contact"> | string | null
    metadata?: JsonNullableFilter<"Contact">
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
    userId?: StringFilter<"Contact"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    contactLists?: ContactListMemberListRelationFilter
    recipients?: CampaignRecipientListRelationFilter
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    contactLists?: ContactListMemberOrderByRelationAggregateInput
    recipients?: CampaignRecipientOrderByRelationAggregateInput
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_phone?: ContactUserIdPhoneCompoundUniqueInput
    userId_email?: ContactUserIdEmailCompoundUniqueInput
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    phone?: StringNullableFilter<"Contact"> | string | null
    email?: StringNullableFilter<"Contact"> | string | null
    firstName?: StringNullableFilter<"Contact"> | string | null
    lastName?: StringNullableFilter<"Contact"> | string | null
    company?: StringNullableFilter<"Contact"> | string | null
    metadata?: JsonNullableFilter<"Contact">
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
    userId?: StringFilter<"Contact"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    contactLists?: ContactListMemberListRelationFilter
    recipients?: CampaignRecipientListRelationFilter
  }, "id" | "userId_phone" | "userId_email">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contact"> | string
    phone?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    email?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    firstName?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    company?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Contact">
    createdAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
    userId?: StringWithAggregatesFilter<"Contact"> | string
  }

  export type ContactListWhereInput = {
    AND?: ContactListWhereInput | ContactListWhereInput[]
    OR?: ContactListWhereInput[]
    NOT?: ContactListWhereInput | ContactListWhereInput[]
    id?: StringFilter<"ContactList"> | string
    name?: StringFilter<"ContactList"> | string
    description?: StringNullableFilter<"ContactList"> | string | null
    createdAt?: DateTimeFilter<"ContactList"> | Date | string
    updatedAt?: DateTimeFilter<"ContactList"> | Date | string
    userId?: StringFilter<"ContactList"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    contacts?: ContactListMemberListRelationFilter
  }

  export type ContactListOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    contacts?: ContactListMemberOrderByRelationAggregateInput
  }

  export type ContactListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_name?: ContactListUserIdNameCompoundUniqueInput
    AND?: ContactListWhereInput | ContactListWhereInput[]
    OR?: ContactListWhereInput[]
    NOT?: ContactListWhereInput | ContactListWhereInput[]
    name?: StringFilter<"ContactList"> | string
    description?: StringNullableFilter<"ContactList"> | string | null
    createdAt?: DateTimeFilter<"ContactList"> | Date | string
    updatedAt?: DateTimeFilter<"ContactList"> | Date | string
    userId?: StringFilter<"ContactList"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    contacts?: ContactListMemberListRelationFilter
  }, "id" | "userId_name">

  export type ContactListOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: ContactListCountOrderByAggregateInput
    _max?: ContactListMaxOrderByAggregateInput
    _min?: ContactListMinOrderByAggregateInput
  }

  export type ContactListScalarWhereWithAggregatesInput = {
    AND?: ContactListScalarWhereWithAggregatesInput | ContactListScalarWhereWithAggregatesInput[]
    OR?: ContactListScalarWhereWithAggregatesInput[]
    NOT?: ContactListScalarWhereWithAggregatesInput | ContactListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactList"> | string
    name?: StringWithAggregatesFilter<"ContactList"> | string
    description?: StringNullableWithAggregatesFilter<"ContactList"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ContactList"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContactList"> | Date | string
    userId?: StringWithAggregatesFilter<"ContactList"> | string
  }

  export type ContactListMemberWhereInput = {
    AND?: ContactListMemberWhereInput | ContactListMemberWhereInput[]
    OR?: ContactListMemberWhereInput[]
    NOT?: ContactListMemberWhereInput | ContactListMemberWhereInput[]
    contactId?: StringFilter<"ContactListMember"> | string
    listId?: StringFilter<"ContactListMember"> | string
    contact?: XOR<ContactScalarRelationFilter, ContactWhereInput>
    list?: XOR<ContactListScalarRelationFilter, ContactListWhereInput>
  }

  export type ContactListMemberOrderByWithRelationInput = {
    contactId?: SortOrder
    listId?: SortOrder
    contact?: ContactOrderByWithRelationInput
    list?: ContactListOrderByWithRelationInput
  }

  export type ContactListMemberWhereUniqueInput = Prisma.AtLeast<{
    contactId_listId?: ContactListMemberContactIdListIdCompoundUniqueInput
    AND?: ContactListMemberWhereInput | ContactListMemberWhereInput[]
    OR?: ContactListMemberWhereInput[]
    NOT?: ContactListMemberWhereInput | ContactListMemberWhereInput[]
    contactId?: StringFilter<"ContactListMember"> | string
    listId?: StringFilter<"ContactListMember"> | string
    contact?: XOR<ContactScalarRelationFilter, ContactWhereInput>
    list?: XOR<ContactListScalarRelationFilter, ContactListWhereInput>
  }, "contactId_listId">

  export type ContactListMemberOrderByWithAggregationInput = {
    contactId?: SortOrder
    listId?: SortOrder
    _count?: ContactListMemberCountOrderByAggregateInput
    _max?: ContactListMemberMaxOrderByAggregateInput
    _min?: ContactListMemberMinOrderByAggregateInput
  }

  export type ContactListMemberScalarWhereWithAggregatesInput = {
    AND?: ContactListMemberScalarWhereWithAggregatesInput | ContactListMemberScalarWhereWithAggregatesInput[]
    OR?: ContactListMemberScalarWhereWithAggregatesInput[]
    NOT?: ContactListMemberScalarWhereWithAggregatesInput | ContactListMemberScalarWhereWithAggregatesInput[]
    contactId?: StringWithAggregatesFilter<"ContactListMember"> | string
    listId?: StringWithAggregatesFilter<"ContactListMember"> | string
  }

  export type TemplateWhereInput = {
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    id?: StringFilter<"Template"> | string
    name?: StringFilter<"Template"> | string
    type?: EnumCampaignTypeFilter<"Template"> | $Enums.CampaignType
    subject?: StringNullableFilter<"Template"> | string | null
    message?: StringFilter<"Template"> | string
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
    userId?: StringFilter<"Template"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    campaigns?: CampaignListRelationFilter
  }

  export type TemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    subject?: SortOrderInput | SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    campaigns?: CampaignOrderByRelationAggregateInput
  }

  export type TemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_name?: TemplateUserIdNameCompoundUniqueInput
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    name?: StringFilter<"Template"> | string
    type?: EnumCampaignTypeFilter<"Template"> | $Enums.CampaignType
    subject?: StringNullableFilter<"Template"> | string | null
    message?: StringFilter<"Template"> | string
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
    userId?: StringFilter<"Template"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    campaigns?: CampaignListRelationFilter
  }, "id" | "userId_name">

  export type TemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    subject?: SortOrderInput | SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: TemplateCountOrderByAggregateInput
    _max?: TemplateMaxOrderByAggregateInput
    _min?: TemplateMinOrderByAggregateInput
  }

  export type TemplateScalarWhereWithAggregatesInput = {
    AND?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    OR?: TemplateScalarWhereWithAggregatesInput[]
    NOT?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Template"> | string
    name?: StringWithAggregatesFilter<"Template"> | string
    type?: EnumCampaignTypeWithAggregatesFilter<"Template"> | $Enums.CampaignType
    subject?: StringNullableWithAggregatesFilter<"Template"> | string | null
    message?: StringWithAggregatesFilter<"Template"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Template"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Template"> | Date | string
    userId?: StringWithAggregatesFilter<"Template"> | string
  }

  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    id?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    type?: EnumCampaignTypeFilter<"Campaign"> | $Enums.CampaignType
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    subject?: StringNullableFilter<"Campaign"> | string | null
    message?: StringFilter<"Campaign"> | string
    scheduledAt?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    startedAt?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    userId?: StringFilter<"Campaign"> | string
    templateId?: StringNullableFilter<"Campaign"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    template?: XOR<TemplateNullableScalarRelationFilter, TemplateWhereInput> | null
    recipients?: CampaignRecipientListRelationFilter
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    subject?: SortOrderInput | SortOrder
    message?: SortOrder
    scheduledAt?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    templateId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    template?: TemplateOrderByWithRelationInput
    recipients?: CampaignRecipientOrderByRelationAggregateInput
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    name?: StringFilter<"Campaign"> | string
    type?: EnumCampaignTypeFilter<"Campaign"> | $Enums.CampaignType
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    subject?: StringNullableFilter<"Campaign"> | string | null
    message?: StringFilter<"Campaign"> | string
    scheduledAt?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    startedAt?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    userId?: StringFilter<"Campaign"> | string
    templateId?: StringNullableFilter<"Campaign"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    template?: XOR<TemplateNullableScalarRelationFilter, TemplateWhereInput> | null
    recipients?: CampaignRecipientListRelationFilter
  }, "id">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    subject?: SortOrderInput | SortOrder
    message?: SortOrder
    scheduledAt?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    templateId?: SortOrderInput | SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Campaign"> | string
    name?: StringWithAggregatesFilter<"Campaign"> | string
    type?: EnumCampaignTypeWithAggregatesFilter<"Campaign"> | $Enums.CampaignType
    status?: EnumCampaignStatusWithAggregatesFilter<"Campaign"> | $Enums.CampaignStatus
    subject?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    message?: StringWithAggregatesFilter<"Campaign"> | string
    scheduledAt?: DateTimeNullableWithAggregatesFilter<"Campaign"> | Date | string | null
    startedAt?: DateTimeNullableWithAggregatesFilter<"Campaign"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Campaign"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    userId?: StringWithAggregatesFilter<"Campaign"> | string
    templateId?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
  }

  export type CampaignRecipientWhereInput = {
    AND?: CampaignRecipientWhereInput | CampaignRecipientWhereInput[]
    OR?: CampaignRecipientWhereInput[]
    NOT?: CampaignRecipientWhereInput | CampaignRecipientWhereInput[]
    id?: StringFilter<"CampaignRecipient"> | string
    status?: EnumRecipientStatusFilter<"CampaignRecipient"> | $Enums.RecipientStatus
    providerMessageId?: StringNullableFilter<"CampaignRecipient"> | string | null
    errorMessage?: StringNullableFilter<"CampaignRecipient"> | string | null
    sentAt?: DateTimeNullableFilter<"CampaignRecipient"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"CampaignRecipient"> | Date | string | null
    createdAt?: DateTimeFilter<"CampaignRecipient"> | Date | string
    campaignId?: StringFilter<"CampaignRecipient"> | string
    contactId?: StringFilter<"CampaignRecipient"> | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    contact?: XOR<ContactScalarRelationFilter, ContactWhereInput>
  }

  export type CampaignRecipientOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    providerMessageId?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    deliveredAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    campaignId?: SortOrder
    contactId?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
    contact?: ContactOrderByWithRelationInput
  }

  export type CampaignRecipientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    campaignId_contactId?: CampaignRecipientCampaignIdContactIdCompoundUniqueInput
    AND?: CampaignRecipientWhereInput | CampaignRecipientWhereInput[]
    OR?: CampaignRecipientWhereInput[]
    NOT?: CampaignRecipientWhereInput | CampaignRecipientWhereInput[]
    status?: EnumRecipientStatusFilter<"CampaignRecipient"> | $Enums.RecipientStatus
    providerMessageId?: StringNullableFilter<"CampaignRecipient"> | string | null
    errorMessage?: StringNullableFilter<"CampaignRecipient"> | string | null
    sentAt?: DateTimeNullableFilter<"CampaignRecipient"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"CampaignRecipient"> | Date | string | null
    createdAt?: DateTimeFilter<"CampaignRecipient"> | Date | string
    campaignId?: StringFilter<"CampaignRecipient"> | string
    contactId?: StringFilter<"CampaignRecipient"> | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    contact?: XOR<ContactScalarRelationFilter, ContactWhereInput>
  }, "id" | "campaignId_contactId">

  export type CampaignRecipientOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    providerMessageId?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    deliveredAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    campaignId?: SortOrder
    contactId?: SortOrder
    _count?: CampaignRecipientCountOrderByAggregateInput
    _max?: CampaignRecipientMaxOrderByAggregateInput
    _min?: CampaignRecipientMinOrderByAggregateInput
  }

  export type CampaignRecipientScalarWhereWithAggregatesInput = {
    AND?: CampaignRecipientScalarWhereWithAggregatesInput | CampaignRecipientScalarWhereWithAggregatesInput[]
    OR?: CampaignRecipientScalarWhereWithAggregatesInput[]
    NOT?: CampaignRecipientScalarWhereWithAggregatesInput | CampaignRecipientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CampaignRecipient"> | string
    status?: EnumRecipientStatusWithAggregatesFilter<"CampaignRecipient"> | $Enums.RecipientStatus
    providerMessageId?: StringNullableWithAggregatesFilter<"CampaignRecipient"> | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"CampaignRecipient"> | string | null
    sentAt?: DateTimeNullableWithAggregatesFilter<"CampaignRecipient"> | Date | string | null
    deliveredAt?: DateTimeNullableWithAggregatesFilter<"CampaignRecipient"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CampaignRecipient"> | Date | string
    campaignId?: StringWithAggregatesFilter<"CampaignRecipient"> | string
    contactId?: StringWithAggregatesFilter<"CampaignRecipient"> | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    entity?: StringNullableFilter<"AuditLog"> | string | null
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    userId?: StringNullableFilter<"AuditLog"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    entity?: SortOrderInput | SortOrder
    entityId?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    action?: StringFilter<"AuditLog"> | string
    entity?: StringNullableFilter<"AuditLog"> | string | null
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    userId?: StringNullableFilter<"AuditLog"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    entity?: SortOrderInput | SortOrder
    entityId?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entity?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    entityId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"AuditLog">
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
  }

  export type SettingWhereInput = {
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    id?: StringFilter<"Setting"> | string
    theme?: StringFilter<"Setting"> | string
    timezone?: StringFilter<"Setting"> | string
    language?: StringFilter<"Setting"> | string
    emailNotifications?: BoolFilter<"Setting"> | boolean
    smsNotifications?: BoolFilter<"Setting"> | boolean
    userId?: StringFilter<"Setting"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SettingOrderByWithRelationInput = {
    id?: SortOrder
    theme?: SortOrder
    timezone?: SortOrder
    language?: SortOrder
    emailNotifications?: SortOrder
    smsNotifications?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    theme?: StringFilter<"Setting"> | string
    timezone?: StringFilter<"Setting"> | string
    language?: StringFilter<"Setting"> | string
    emailNotifications?: BoolFilter<"Setting"> | boolean
    smsNotifications?: BoolFilter<"Setting"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type SettingOrderByWithAggregationInput = {
    id?: SortOrder
    theme?: SortOrder
    timezone?: SortOrder
    language?: SortOrder
    emailNotifications?: SortOrder
    smsNotifications?: SortOrder
    userId?: SortOrder
    _count?: SettingCountOrderByAggregateInput
    _max?: SettingMaxOrderByAggregateInput
    _min?: SettingMinOrderByAggregateInput
  }

  export type SettingScalarWhereWithAggregatesInput = {
    AND?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    OR?: SettingScalarWhereWithAggregatesInput[]
    NOT?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Setting"> | string
    theme?: StringWithAggregatesFilter<"Setting"> | string
    timezone?: StringWithAggregatesFilter<"Setting"> | string
    language?: StringWithAggregatesFilter<"Setting"> | string
    emailNotifications?: BoolWithAggregatesFilter<"Setting"> | boolean
    smsNotifications?: BoolWithAggregatesFilter<"Setting"> | boolean
    userId?: StringWithAggregatesFilter<"Setting"> | string
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    emailVerified?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    credits?: CreditCreateNestedOneWithoutUserInput
    contacts?: ContactCreateNestedManyWithoutUserInput
    contactLists?: ContactListCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutUserInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    setting?: SettingCreateNestedOneWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    emailVerified?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    credits?: CreditUncheckedCreateNestedOneWithoutUserInput
    contacts?: ContactUncheckedCreateNestedManyWithoutUserInput
    contactLists?: ContactListUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    setting?: SettingUncheckedCreateNestedOneWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    credits?: CreditUpdateOneWithoutUserNestedInput
    contacts?: ContactUpdateManyWithoutUserNestedInput
    contactLists?: ContactListUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    setting?: SettingUpdateOneWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    credits?: CreditUncheckedUpdateOneWithoutUserNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutUserNestedInput
    contactLists?: ContactListUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    setting?: SettingUncheckedUpdateOneWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    emailVerified?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    id?: string
    name: $Enums.RoleName
    users?: UserRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: $Enums.RoleName
    users?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    users?: UserRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    users?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: $Enums.RoleName
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
  }

  export type UserRoleCreateInput = {
    user: UserCreateNestedOneWithoutRolesInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserRoleUncheckedCreateInput = {
    userId: string
    roleId: string
  }

  export type UserRoleUpdateInput = {
    user?: UserUpdateOneRequiredWithoutRolesNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserRoleUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleCreateManyInput = {
    userId: string
    roleId: string
  }

  export type UserRoleUpdateManyMutationInput = {

  }

  export type UserRoleUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type RefreshTokenCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    revoked?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    revoked?: boolean
    createdAt?: Date | string
    userId: string
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    token: string
    expiresAt: Date | string
    revoked?: boolean
    createdAt?: Date | string
    userId: string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CreditCreateInput = {
    id?: string
    smsCredits?: number
    emailCredits?: number
    user: UserCreateNestedOneWithoutCreditsInput
  }

  export type CreditUncheckedCreateInput = {
    id?: string
    smsCredits?: number
    emailCredits?: number
    userId: string
  }

  export type CreditUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    smsCredits?: IntFieldUpdateOperationsInput | number
    emailCredits?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutCreditsNestedInput
  }

  export type CreditUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    smsCredits?: IntFieldUpdateOperationsInput | number
    emailCredits?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CreditCreateManyInput = {
    id?: string
    smsCredits?: number
    emailCredits?: number
    userId: string
  }

  export type CreditUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    smsCredits?: IntFieldUpdateOperationsInput | number
    emailCredits?: IntFieldUpdateOperationsInput | number
  }

  export type CreditUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    smsCredits?: IntFieldUpdateOperationsInput | number
    emailCredits?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CreditTransactionCreateInput = {
    id?: string
    type: $Enums.TransactionType
    creditType: $Enums.CreditType
    amount: number
    balanceAfter: number
    reason: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCreditTransactionsInput
  }

  export type CreditTransactionUncheckedCreateInput = {
    id?: string
    type: $Enums.TransactionType
    creditType: $Enums.CreditType
    amount: number
    balanceAfter: number
    reason: string
    createdAt?: Date | string
    userId: string
  }

  export type CreditTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    creditType?: EnumCreditTypeFieldUpdateOperationsInput | $Enums.CreditType
    amount?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCreditTransactionsNestedInput
  }

  export type CreditTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    creditType?: EnumCreditTypeFieldUpdateOperationsInput | $Enums.CreditType
    amount?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CreditTransactionCreateManyInput = {
    id?: string
    type: $Enums.TransactionType
    creditType: $Enums.CreditType
    amount: number
    balanceAfter: number
    reason: string
    createdAt?: Date | string
    userId: string
  }

  export type CreditTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    creditType?: EnumCreditTypeFieldUpdateOperationsInput | $Enums.CreditType
    amount?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    creditType?: EnumCreditTypeFieldUpdateOperationsInput | $Enums.CreditType
    amount?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ContactCreateInput = {
    id?: string
    phone?: string | null
    email?: string | null
    firstName?: string | null
    lastName?: string | null
    company?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutContactsInput
    contactLists?: ContactListMemberCreateNestedManyWithoutContactInput
    recipients?: CampaignRecipientCreateNestedManyWithoutContactInput
  }

  export type ContactUncheckedCreateInput = {
    id?: string
    phone?: string | null
    email?: string | null
    firstName?: string | null
    lastName?: string | null
    company?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    contactLists?: ContactListMemberUncheckedCreateNestedManyWithoutContactInput
    recipients?: CampaignRecipientUncheckedCreateNestedManyWithoutContactInput
  }

  export type ContactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContactsNestedInput
    contactLists?: ContactListMemberUpdateManyWithoutContactNestedInput
    recipients?: CampaignRecipientUpdateManyWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    contactLists?: ContactListMemberUncheckedUpdateManyWithoutContactNestedInput
    recipients?: CampaignRecipientUncheckedUpdateManyWithoutContactNestedInput
  }

  export type ContactCreateManyInput = {
    id?: string
    phone?: string | null
    email?: string | null
    firstName?: string | null
    lastName?: string | null
    company?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ContactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ContactListCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutContactListsInput
    contacts?: ContactListMemberCreateNestedManyWithoutListInput
  }

  export type ContactListUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    contacts?: ContactListMemberUncheckedCreateNestedManyWithoutListInput
  }

  export type ContactListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContactListsNestedInput
    contacts?: ContactListMemberUpdateManyWithoutListNestedInput
  }

  export type ContactListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    contacts?: ContactListMemberUncheckedUpdateManyWithoutListNestedInput
  }

  export type ContactListCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ContactListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ContactListMemberCreateInput = {
    contact: ContactCreateNestedOneWithoutContactListsInput
    list: ContactListCreateNestedOneWithoutContactsInput
  }

  export type ContactListMemberUncheckedCreateInput = {
    contactId: string
    listId: string
  }

  export type ContactListMemberUpdateInput = {
    contact?: ContactUpdateOneRequiredWithoutContactListsNestedInput
    list?: ContactListUpdateOneRequiredWithoutContactsNestedInput
  }

  export type ContactListMemberUncheckedUpdateInput = {
    contactId?: StringFieldUpdateOperationsInput | string
    listId?: StringFieldUpdateOperationsInput | string
  }

  export type ContactListMemberCreateManyInput = {
    contactId: string
    listId: string
  }

  export type ContactListMemberUpdateManyMutationInput = {

  }

  export type ContactListMemberUncheckedUpdateManyInput = {
    contactId?: StringFieldUpdateOperationsInput | string
    listId?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateCreateInput = {
    id?: string
    name: string
    type: $Enums.CampaignType
    subject?: string | null
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTemplatesInput
    campaigns?: CampaignCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateInput = {
    id?: string
    name: string
    type: $Enums.CampaignType
    subject?: string | null
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTemplatesNestedInput
    campaigns?: CampaignUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    campaigns?: CampaignUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateCreateManyInput = {
    id?: string
    name: string
    type: $Enums.CampaignType
    subject?: string | null
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type TemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CampaignCreateInput = {
    id?: string
    name: string
    type: $Enums.CampaignType
    status?: $Enums.CampaignStatus
    subject?: string | null
    message: string
    scheduledAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCampaignsInput
    template?: TemplateCreateNestedOneWithoutCampaignsInput
    recipients?: CampaignRecipientCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateInput = {
    id?: string
    name: string
    type: $Enums.CampaignType
    status?: $Enums.CampaignStatus
    subject?: string | null
    message: string
    scheduledAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    templateId?: string | null
    recipients?: CampaignRecipientUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCampaignsNestedInput
    template?: TemplateUpdateOneWithoutCampaignsNestedInput
    recipients?: CampaignRecipientUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    recipients?: CampaignRecipientUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateManyInput = {
    id?: string
    name: string
    type: $Enums.CampaignType
    status?: $Enums.CampaignStatus
    subject?: string | null
    message: string
    scheduledAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    templateId?: string | null
  }

  export type CampaignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CampaignRecipientCreateInput = {
    id?: string
    status?: $Enums.RecipientStatus
    providerMessageId?: string | null
    errorMessage?: string | null
    sentAt?: Date | string | null
    deliveredAt?: Date | string | null
    createdAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutRecipientsInput
    contact: ContactCreateNestedOneWithoutRecipientsInput
  }

  export type CampaignRecipientUncheckedCreateInput = {
    id?: string
    status?: $Enums.RecipientStatus
    providerMessageId?: string | null
    errorMessage?: string | null
    sentAt?: Date | string | null
    deliveredAt?: Date | string | null
    createdAt?: Date | string
    campaignId: string
    contactId: string
  }

  export type CampaignRecipientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRecipientStatusFieldUpdateOperationsInput | $Enums.RecipientStatus
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutRecipientsNestedInput
    contact?: ContactUpdateOneRequiredWithoutRecipientsNestedInput
  }

  export type CampaignRecipientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRecipientStatusFieldUpdateOperationsInput | $Enums.RecipientStatus
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
    contactId?: StringFieldUpdateOperationsInput | string
  }

  export type CampaignRecipientCreateManyInput = {
    id?: string
    status?: $Enums.RecipientStatus
    providerMessageId?: string | null
    errorMessage?: string | null
    sentAt?: Date | string | null
    deliveredAt?: Date | string | null
    createdAt?: Date | string
    campaignId: string
    contactId: string
  }

  export type CampaignRecipientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRecipientStatusFieldUpdateOperationsInput | $Enums.RecipientStatus
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignRecipientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRecipientStatusFieldUpdateOperationsInput | $Enums.RecipientStatus
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
    contactId?: StringFieldUpdateOperationsInput | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    entity?: string | null
    entityId?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    action: string
    entity?: string | null
    entityId?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    userId?: string | null
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogCreateManyInput = {
    id?: string
    action: string
    entity?: string | null
    entityId?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    userId?: string | null
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SettingCreateInput = {
    id?: string
    theme?: string
    timezone?: string
    language?: string
    emailNotifications?: boolean
    smsNotifications?: boolean
    user: UserCreateNestedOneWithoutSettingInput
  }

  export type SettingUncheckedCreateInput = {
    id?: string
    theme?: string
    timezone?: string
    language?: string
    emailNotifications?: boolean
    smsNotifications?: boolean
    userId: string
  }

  export type SettingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    smsNotifications?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutSettingNestedInput
  }

  export type SettingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    smsNotifications?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SettingCreateManyInput = {
    id?: string
    theme?: string
    timezone?: string
    language?: string
    emailNotifications?: boolean
    smsNotifications?: boolean
    userId: string
  }

  export type SettingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    smsNotifications?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SettingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    smsNotifications?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UserRoleListRelationFilter = {
    every?: UserRoleWhereInput
    some?: UserRoleWhereInput
    none?: UserRoleWhereInput
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type CreditNullableScalarRelationFilter = {
    is?: CreditWhereInput | null
    isNot?: CreditWhereInput | null
  }

  export type ContactListRelationFilter = {
    every?: ContactWhereInput
    some?: ContactWhereInput
    none?: ContactWhereInput
  }

  export type ContactListListRelationFilter = {
    every?: ContactListWhereInput
    some?: ContactListWhereInput
    none?: ContactListWhereInput
  }

  export type CampaignListRelationFilter = {
    every?: CampaignWhereInput
    some?: CampaignWhereInput
    none?: CampaignWhereInput
  }

  export type CreditTransactionListRelationFilter = {
    every?: CreditTransactionWhereInput
    some?: CreditTransactionWhereInput
    none?: CreditTransactionWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type SettingNullableScalarRelationFilter = {
    is?: SettingWhereInput | null
    isNot?: SettingWhereInput | null
  }

  export type TemplateListRelationFilter = {
    every?: TemplateWhereInput
    some?: TemplateWhereInput
    none?: TemplateWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContactListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CreditTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumRoleNameFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameFilter<$PrismaModel> | $Enums.RoleName
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EnumRoleNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameWithAggregatesFilter<$PrismaModel> | $Enums.RoleName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleNameFilter<$PrismaModel>
    _max?: NestedEnumRoleNameFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type UserRoleUserIdRoleIdCompoundUniqueInput = {
    userId: string
    roleId: string
  }

  export type UserRoleCountOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleMaxOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleMinOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
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

  export type CreditCountOrderByAggregateInput = {
    id?: SortOrder
    smsCredits?: SortOrder
    emailCredits?: SortOrder
    userId?: SortOrder
  }

  export type CreditAvgOrderByAggregateInput = {
    smsCredits?: SortOrder
    emailCredits?: SortOrder
  }

  export type CreditMaxOrderByAggregateInput = {
    id?: SortOrder
    smsCredits?: SortOrder
    emailCredits?: SortOrder
    userId?: SortOrder
  }

  export type CreditMinOrderByAggregateInput = {
    id?: SortOrder
    smsCredits?: SortOrder
    emailCredits?: SortOrder
    userId?: SortOrder
  }

  export type CreditSumOrderByAggregateInput = {
    smsCredits?: SortOrder
    emailCredits?: SortOrder
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

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type EnumCreditTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditType | EnumCreditTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CreditType[] | ListEnumCreditTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CreditType[] | ListEnumCreditTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCreditTypeFilter<$PrismaModel> | $Enums.CreditType
  }

  export type CreditTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    creditType?: SortOrder
    amount?: SortOrder
    balanceAfter?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type CreditTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
    balanceAfter?: SortOrder
  }

  export type CreditTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    creditType?: SortOrder
    amount?: SortOrder
    balanceAfter?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type CreditTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    creditType?: SortOrder
    amount?: SortOrder
    balanceAfter?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type CreditTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
    balanceAfter?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type EnumCreditTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditType | EnumCreditTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CreditType[] | ListEnumCreditTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CreditType[] | ListEnumCreditTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCreditTypeWithAggregatesFilter<$PrismaModel> | $Enums.CreditType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCreditTypeFilter<$PrismaModel>
    _max?: NestedEnumCreditTypeFilter<$PrismaModel>
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ContactListMemberListRelationFilter = {
    every?: ContactListMemberWhereInput
    some?: ContactListMemberWhereInput
    none?: ContactListMemberWhereInput
  }

  export type CampaignRecipientListRelationFilter = {
    every?: CampaignRecipientWhereInput
    some?: CampaignRecipientWhereInput
    none?: CampaignRecipientWhereInput
  }

  export type ContactListMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignRecipientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContactUserIdPhoneCompoundUniqueInput = {
    userId: string
    phone: string
  }

  export type ContactUserIdEmailCompoundUniqueInput = {
    userId: string
    email: string
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    company?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    company?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    company?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ContactListUserIdNameCompoundUniqueInput = {
    userId: string
    name: string
  }

  export type ContactListCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ContactListMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ContactListMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ContactScalarRelationFilter = {
    is?: ContactWhereInput
    isNot?: ContactWhereInput
  }

  export type ContactListScalarRelationFilter = {
    is?: ContactListWhereInput
    isNot?: ContactListWhereInput
  }

  export type ContactListMemberContactIdListIdCompoundUniqueInput = {
    contactId: string
    listId: string
  }

  export type ContactListMemberCountOrderByAggregateInput = {
    contactId?: SortOrder
    listId?: SortOrder
  }

  export type ContactListMemberMaxOrderByAggregateInput = {
    contactId?: SortOrder
    listId?: SortOrder
  }

  export type ContactListMemberMinOrderByAggregateInput = {
    contactId?: SortOrder
    listId?: SortOrder
  }

  export type EnumCampaignTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignType | EnumCampaignTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignType[] | ListEnumCampaignTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignType[] | ListEnumCampaignTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignTypeFilter<$PrismaModel> | $Enums.CampaignType
  }

  export type TemplateUserIdNameCompoundUniqueInput = {
    userId: string
    name: string
  }

  export type TemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type TemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type TemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type EnumCampaignTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignType | EnumCampaignTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignType[] | ListEnumCampaignTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignType[] | ListEnumCampaignTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignTypeWithAggregatesFilter<$PrismaModel> | $Enums.CampaignType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignTypeFilter<$PrismaModel>
    _max?: NestedEnumCampaignTypeFilter<$PrismaModel>
  }

  export type EnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus
  }

  export type TemplateNullableScalarRelationFilter = {
    is?: TemplateWhereInput | null
    isNot?: TemplateWhereInput | null
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    scheduledAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    scheduledAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    scheduledAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
  }

  export type EnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusFilter<$PrismaModel>
  }

  export type EnumRecipientStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RecipientStatus | EnumRecipientStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecipientStatus[] | ListEnumRecipientStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecipientStatus[] | ListEnumRecipientStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecipientStatusFilter<$PrismaModel> | $Enums.RecipientStatus
  }

  export type CampaignScalarRelationFilter = {
    is?: CampaignWhereInput
    isNot?: CampaignWhereInput
  }

  export type CampaignRecipientCampaignIdContactIdCompoundUniqueInput = {
    campaignId: string
    contactId: string
  }

  export type CampaignRecipientCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    providerMessageId?: SortOrder
    errorMessage?: SortOrder
    sentAt?: SortOrder
    deliveredAt?: SortOrder
    createdAt?: SortOrder
    campaignId?: SortOrder
    contactId?: SortOrder
  }

  export type CampaignRecipientMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    providerMessageId?: SortOrder
    errorMessage?: SortOrder
    sentAt?: SortOrder
    deliveredAt?: SortOrder
    createdAt?: SortOrder
    campaignId?: SortOrder
    contactId?: SortOrder
  }

  export type CampaignRecipientMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    providerMessageId?: SortOrder
    errorMessage?: SortOrder
    sentAt?: SortOrder
    deliveredAt?: SortOrder
    createdAt?: SortOrder
    campaignId?: SortOrder
    contactId?: SortOrder
  }

  export type EnumRecipientStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecipientStatus | EnumRecipientStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecipientStatus[] | ListEnumRecipientStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecipientStatus[] | ListEnumRecipientStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecipientStatusWithAggregatesFilter<$PrismaModel> | $Enums.RecipientStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecipientStatusFilter<$PrismaModel>
    _max?: NestedEnumRecipientStatusFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type SettingCountOrderByAggregateInput = {
    id?: SortOrder
    theme?: SortOrder
    timezone?: SortOrder
    language?: SortOrder
    emailNotifications?: SortOrder
    smsNotifications?: SortOrder
    userId?: SortOrder
  }

  export type SettingMaxOrderByAggregateInput = {
    id?: SortOrder
    theme?: SortOrder
    timezone?: SortOrder
    language?: SortOrder
    emailNotifications?: SortOrder
    smsNotifications?: SortOrder
    userId?: SortOrder
  }

  export type SettingMinOrderByAggregateInput = {
    id?: SortOrder
    theme?: SortOrder
    timezone?: SortOrder
    language?: SortOrder
    emailNotifications?: SortOrder
    smsNotifications?: SortOrder
    userId?: SortOrder
  }

  export type UserRoleCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type CreditCreateNestedOneWithoutUserInput = {
    create?: XOR<CreditCreateWithoutUserInput, CreditUncheckedCreateWithoutUserInput>
    connectOrCreate?: CreditCreateOrConnectWithoutUserInput
    connect?: CreditWhereUniqueInput
  }

  export type ContactCreateNestedManyWithoutUserInput = {
    create?: XOR<ContactCreateWithoutUserInput, ContactUncheckedCreateWithoutUserInput> | ContactCreateWithoutUserInput[] | ContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutUserInput | ContactCreateOrConnectWithoutUserInput[]
    createMany?: ContactCreateManyUserInputEnvelope
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type ContactListCreateNestedManyWithoutUserInput = {
    create?: XOR<ContactListCreateWithoutUserInput, ContactListUncheckedCreateWithoutUserInput> | ContactListCreateWithoutUserInput[] | ContactListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactListCreateOrConnectWithoutUserInput | ContactListCreateOrConnectWithoutUserInput[]
    createMany?: ContactListCreateManyUserInputEnvelope
    connect?: ContactListWhereUniqueInput | ContactListWhereUniqueInput[]
  }

  export type CampaignCreateNestedManyWithoutUserInput = {
    create?: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput> | CampaignCreateWithoutUserInput[] | CampaignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutUserInput | CampaignCreateOrConnectWithoutUserInput[]
    createMany?: CampaignCreateManyUserInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type CreditTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<CreditTransactionCreateWithoutUserInput, CreditTransactionUncheckedCreateWithoutUserInput> | CreditTransactionCreateWithoutUserInput[] | CreditTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutUserInput | CreditTransactionCreateOrConnectWithoutUserInput[]
    createMany?: CreditTransactionCreateManyUserInputEnvelope
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type SettingCreateNestedOneWithoutUserInput = {
    create?: XOR<SettingCreateWithoutUserInput, SettingUncheckedCreateWithoutUserInput>
    connectOrCreate?: SettingCreateOrConnectWithoutUserInput
    connect?: SettingWhereUniqueInput
  }

  export type TemplateCreateNestedManyWithoutUserInput = {
    create?: XOR<TemplateCreateWithoutUserInput, TemplateUncheckedCreateWithoutUserInput> | TemplateCreateWithoutUserInput[] | TemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutUserInput | TemplateCreateOrConnectWithoutUserInput[]
    createMany?: TemplateCreateManyUserInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type CreditUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CreditCreateWithoutUserInput, CreditUncheckedCreateWithoutUserInput>
    connectOrCreate?: CreditCreateOrConnectWithoutUserInput
    connect?: CreditWhereUniqueInput
  }

  export type ContactUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ContactCreateWithoutUserInput, ContactUncheckedCreateWithoutUserInput> | ContactCreateWithoutUserInput[] | ContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutUserInput | ContactCreateOrConnectWithoutUserInput[]
    createMany?: ContactCreateManyUserInputEnvelope
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type ContactListUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ContactListCreateWithoutUserInput, ContactListUncheckedCreateWithoutUserInput> | ContactListCreateWithoutUserInput[] | ContactListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactListCreateOrConnectWithoutUserInput | ContactListCreateOrConnectWithoutUserInput[]
    createMany?: ContactListCreateManyUserInputEnvelope
    connect?: ContactListWhereUniqueInput | ContactListWhereUniqueInput[]
  }

  export type CampaignUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput> | CampaignCreateWithoutUserInput[] | CampaignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutUserInput | CampaignCreateOrConnectWithoutUserInput[]
    createMany?: CampaignCreateManyUserInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type CreditTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CreditTransactionCreateWithoutUserInput, CreditTransactionUncheckedCreateWithoutUserInput> | CreditTransactionCreateWithoutUserInput[] | CreditTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutUserInput | CreditTransactionCreateOrConnectWithoutUserInput[]
    createMany?: CreditTransactionCreateManyUserInputEnvelope
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type SettingUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SettingCreateWithoutUserInput, SettingUncheckedCreateWithoutUserInput>
    connectOrCreate?: SettingCreateOrConnectWithoutUserInput
    connect?: SettingWhereUniqueInput
  }

  export type TemplateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TemplateCreateWithoutUserInput, TemplateUncheckedCreateWithoutUserInput> | TemplateCreateWithoutUserInput[] | TemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutUserInput | TemplateCreateOrConnectWithoutUserInput[]
    createMany?: TemplateCreateManyUserInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserRoleUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type CreditUpdateOneWithoutUserNestedInput = {
    create?: XOR<CreditCreateWithoutUserInput, CreditUncheckedCreateWithoutUserInput>
    connectOrCreate?: CreditCreateOrConnectWithoutUserInput
    upsert?: CreditUpsertWithoutUserInput
    disconnect?: CreditWhereInput | boolean
    delete?: CreditWhereInput | boolean
    connect?: CreditWhereUniqueInput
    update?: XOR<XOR<CreditUpdateToOneWithWhereWithoutUserInput, CreditUpdateWithoutUserInput>, CreditUncheckedUpdateWithoutUserInput>
  }

  export type ContactUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContactCreateWithoutUserInput, ContactUncheckedCreateWithoutUserInput> | ContactCreateWithoutUserInput[] | ContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutUserInput | ContactCreateOrConnectWithoutUserInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutUserInput | ContactUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContactCreateManyUserInputEnvelope
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutUserInput | ContactUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutUserInput | ContactUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type ContactListUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContactListCreateWithoutUserInput, ContactListUncheckedCreateWithoutUserInput> | ContactListCreateWithoutUserInput[] | ContactListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactListCreateOrConnectWithoutUserInput | ContactListCreateOrConnectWithoutUserInput[]
    upsert?: ContactListUpsertWithWhereUniqueWithoutUserInput | ContactListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContactListCreateManyUserInputEnvelope
    set?: ContactListWhereUniqueInput | ContactListWhereUniqueInput[]
    disconnect?: ContactListWhereUniqueInput | ContactListWhereUniqueInput[]
    delete?: ContactListWhereUniqueInput | ContactListWhereUniqueInput[]
    connect?: ContactListWhereUniqueInput | ContactListWhereUniqueInput[]
    update?: ContactListUpdateWithWhereUniqueWithoutUserInput | ContactListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContactListUpdateManyWithWhereWithoutUserInput | ContactListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContactListScalarWhereInput | ContactListScalarWhereInput[]
  }

  export type CampaignUpdateManyWithoutUserNestedInput = {
    create?: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput> | CampaignCreateWithoutUserInput[] | CampaignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutUserInput | CampaignCreateOrConnectWithoutUserInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutUserInput | CampaignUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CampaignCreateManyUserInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutUserInput | CampaignUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutUserInput | CampaignUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type CreditTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<CreditTransactionCreateWithoutUserInput, CreditTransactionUncheckedCreateWithoutUserInput> | CreditTransactionCreateWithoutUserInput[] | CreditTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutUserInput | CreditTransactionCreateOrConnectWithoutUserInput[]
    upsert?: CreditTransactionUpsertWithWhereUniqueWithoutUserInput | CreditTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CreditTransactionCreateManyUserInputEnvelope
    set?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    disconnect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    delete?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    update?: CreditTransactionUpdateWithWhereUniqueWithoutUserInput | CreditTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CreditTransactionUpdateManyWithWhereWithoutUserInput | CreditTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type SettingUpdateOneWithoutUserNestedInput = {
    create?: XOR<SettingCreateWithoutUserInput, SettingUncheckedCreateWithoutUserInput>
    connectOrCreate?: SettingCreateOrConnectWithoutUserInput
    upsert?: SettingUpsertWithoutUserInput
    disconnect?: SettingWhereInput | boolean
    delete?: SettingWhereInput | boolean
    connect?: SettingWhereUniqueInput
    update?: XOR<XOR<SettingUpdateToOneWithWhereWithoutUserInput, SettingUpdateWithoutUserInput>, SettingUncheckedUpdateWithoutUserInput>
  }

  export type TemplateUpdateManyWithoutUserNestedInput = {
    create?: XOR<TemplateCreateWithoutUserInput, TemplateUncheckedCreateWithoutUserInput> | TemplateCreateWithoutUserInput[] | TemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutUserInput | TemplateCreateOrConnectWithoutUserInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutUserInput | TemplateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TemplateCreateManyUserInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutUserInput | TemplateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutUserInput | TemplateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type CreditUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CreditCreateWithoutUserInput, CreditUncheckedCreateWithoutUserInput>
    connectOrCreate?: CreditCreateOrConnectWithoutUserInput
    upsert?: CreditUpsertWithoutUserInput
    disconnect?: CreditWhereInput | boolean
    delete?: CreditWhereInput | boolean
    connect?: CreditWhereUniqueInput
    update?: XOR<XOR<CreditUpdateToOneWithWhereWithoutUserInput, CreditUpdateWithoutUserInput>, CreditUncheckedUpdateWithoutUserInput>
  }

  export type ContactUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContactCreateWithoutUserInput, ContactUncheckedCreateWithoutUserInput> | ContactCreateWithoutUserInput[] | ContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutUserInput | ContactCreateOrConnectWithoutUserInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutUserInput | ContactUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContactCreateManyUserInputEnvelope
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutUserInput | ContactUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutUserInput | ContactUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type ContactListUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContactListCreateWithoutUserInput, ContactListUncheckedCreateWithoutUserInput> | ContactListCreateWithoutUserInput[] | ContactListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactListCreateOrConnectWithoutUserInput | ContactListCreateOrConnectWithoutUserInput[]
    upsert?: ContactListUpsertWithWhereUniqueWithoutUserInput | ContactListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContactListCreateManyUserInputEnvelope
    set?: ContactListWhereUniqueInput | ContactListWhereUniqueInput[]
    disconnect?: ContactListWhereUniqueInput | ContactListWhereUniqueInput[]
    delete?: ContactListWhereUniqueInput | ContactListWhereUniqueInput[]
    connect?: ContactListWhereUniqueInput | ContactListWhereUniqueInput[]
    update?: ContactListUpdateWithWhereUniqueWithoutUserInput | ContactListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContactListUpdateManyWithWhereWithoutUserInput | ContactListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContactListScalarWhereInput | ContactListScalarWhereInput[]
  }

  export type CampaignUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput> | CampaignCreateWithoutUserInput[] | CampaignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutUserInput | CampaignCreateOrConnectWithoutUserInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutUserInput | CampaignUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CampaignCreateManyUserInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutUserInput | CampaignUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutUserInput | CampaignUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type CreditTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CreditTransactionCreateWithoutUserInput, CreditTransactionUncheckedCreateWithoutUserInput> | CreditTransactionCreateWithoutUserInput[] | CreditTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutUserInput | CreditTransactionCreateOrConnectWithoutUserInput[]
    upsert?: CreditTransactionUpsertWithWhereUniqueWithoutUserInput | CreditTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CreditTransactionCreateManyUserInputEnvelope
    set?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    disconnect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    delete?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    update?: CreditTransactionUpdateWithWhereUniqueWithoutUserInput | CreditTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CreditTransactionUpdateManyWithWhereWithoutUserInput | CreditTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type SettingUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SettingCreateWithoutUserInput, SettingUncheckedCreateWithoutUserInput>
    connectOrCreate?: SettingCreateOrConnectWithoutUserInput
    upsert?: SettingUpsertWithoutUserInput
    disconnect?: SettingWhereInput | boolean
    delete?: SettingWhereInput | boolean
    connect?: SettingWhereUniqueInput
    update?: XOR<XOR<SettingUpdateToOneWithWhereWithoutUserInput, SettingUpdateWithoutUserInput>, SettingUncheckedUpdateWithoutUserInput>
  }

  export type TemplateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TemplateCreateWithoutUserInput, TemplateUncheckedCreateWithoutUserInput> | TemplateCreateWithoutUserInput[] | TemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutUserInput | TemplateCreateOrConnectWithoutUserInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutUserInput | TemplateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TemplateCreateManyUserInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutUserInput | TemplateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutUserInput | TemplateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type UserRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type EnumRoleNameFieldUpdateOperationsInput = {
    set?: $Enums.RoleName
  }

  export type UserRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput
    connect?: UserWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput
    upsert?: UserUpsertWithoutRolesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRolesInput, UserUpdateWithoutRolesInput>, UserUncheckedUpdateWithoutRolesInput>
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserCreateNestedOneWithoutCreditsInput = {
    create?: XOR<UserCreateWithoutCreditsInput, UserUncheckedCreateWithoutCreditsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreditsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutCreditsNestedInput = {
    create?: XOR<UserCreateWithoutCreditsInput, UserUncheckedCreateWithoutCreditsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreditsInput
    upsert?: UserUpsertWithoutCreditsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreditsInput, UserUpdateWithoutCreditsInput>, UserUncheckedUpdateWithoutCreditsInput>
  }

  export type UserCreateNestedOneWithoutCreditTransactionsInput = {
    create?: XOR<UserCreateWithoutCreditTransactionsInput, UserUncheckedCreateWithoutCreditTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreditTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type EnumCreditTypeFieldUpdateOperationsInput = {
    set?: $Enums.CreditType
  }

  export type UserUpdateOneRequiredWithoutCreditTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutCreditTransactionsInput, UserUncheckedCreateWithoutCreditTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreditTransactionsInput
    upsert?: UserUpsertWithoutCreditTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreditTransactionsInput, UserUpdateWithoutCreditTransactionsInput>, UserUncheckedUpdateWithoutCreditTransactionsInput>
  }

  export type UserCreateNestedOneWithoutContactsInput = {
    create?: XOR<UserCreateWithoutContactsInput, UserUncheckedCreateWithoutContactsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContactsInput
    connect?: UserWhereUniqueInput
  }

  export type ContactListMemberCreateNestedManyWithoutContactInput = {
    create?: XOR<ContactListMemberCreateWithoutContactInput, ContactListMemberUncheckedCreateWithoutContactInput> | ContactListMemberCreateWithoutContactInput[] | ContactListMemberUncheckedCreateWithoutContactInput[]
    connectOrCreate?: ContactListMemberCreateOrConnectWithoutContactInput | ContactListMemberCreateOrConnectWithoutContactInput[]
    createMany?: ContactListMemberCreateManyContactInputEnvelope
    connect?: ContactListMemberWhereUniqueInput | ContactListMemberWhereUniqueInput[]
  }

  export type CampaignRecipientCreateNestedManyWithoutContactInput = {
    create?: XOR<CampaignRecipientCreateWithoutContactInput, CampaignRecipientUncheckedCreateWithoutContactInput> | CampaignRecipientCreateWithoutContactInput[] | CampaignRecipientUncheckedCreateWithoutContactInput[]
    connectOrCreate?: CampaignRecipientCreateOrConnectWithoutContactInput | CampaignRecipientCreateOrConnectWithoutContactInput[]
    createMany?: CampaignRecipientCreateManyContactInputEnvelope
    connect?: CampaignRecipientWhereUniqueInput | CampaignRecipientWhereUniqueInput[]
  }

  export type ContactListMemberUncheckedCreateNestedManyWithoutContactInput = {
    create?: XOR<ContactListMemberCreateWithoutContactInput, ContactListMemberUncheckedCreateWithoutContactInput> | ContactListMemberCreateWithoutContactInput[] | ContactListMemberUncheckedCreateWithoutContactInput[]
    connectOrCreate?: ContactListMemberCreateOrConnectWithoutContactInput | ContactListMemberCreateOrConnectWithoutContactInput[]
    createMany?: ContactListMemberCreateManyContactInputEnvelope
    connect?: ContactListMemberWhereUniqueInput | ContactListMemberWhereUniqueInput[]
  }

  export type CampaignRecipientUncheckedCreateNestedManyWithoutContactInput = {
    create?: XOR<CampaignRecipientCreateWithoutContactInput, CampaignRecipientUncheckedCreateWithoutContactInput> | CampaignRecipientCreateWithoutContactInput[] | CampaignRecipientUncheckedCreateWithoutContactInput[]
    connectOrCreate?: CampaignRecipientCreateOrConnectWithoutContactInput | CampaignRecipientCreateOrConnectWithoutContactInput[]
    createMany?: CampaignRecipientCreateManyContactInputEnvelope
    connect?: CampaignRecipientWhereUniqueInput | CampaignRecipientWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutContactsNestedInput = {
    create?: XOR<UserCreateWithoutContactsInput, UserUncheckedCreateWithoutContactsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContactsInput
    upsert?: UserUpsertWithoutContactsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContactsInput, UserUpdateWithoutContactsInput>, UserUncheckedUpdateWithoutContactsInput>
  }

  export type ContactListMemberUpdateManyWithoutContactNestedInput = {
    create?: XOR<ContactListMemberCreateWithoutContactInput, ContactListMemberUncheckedCreateWithoutContactInput> | ContactListMemberCreateWithoutContactInput[] | ContactListMemberUncheckedCreateWithoutContactInput[]
    connectOrCreate?: ContactListMemberCreateOrConnectWithoutContactInput | ContactListMemberCreateOrConnectWithoutContactInput[]
    upsert?: ContactListMemberUpsertWithWhereUniqueWithoutContactInput | ContactListMemberUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: ContactListMemberCreateManyContactInputEnvelope
    set?: ContactListMemberWhereUniqueInput | ContactListMemberWhereUniqueInput[]
    disconnect?: ContactListMemberWhereUniqueInput | ContactListMemberWhereUniqueInput[]
    delete?: ContactListMemberWhereUniqueInput | ContactListMemberWhereUniqueInput[]
    connect?: ContactListMemberWhereUniqueInput | ContactListMemberWhereUniqueInput[]
    update?: ContactListMemberUpdateWithWhereUniqueWithoutContactInput | ContactListMemberUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: ContactListMemberUpdateManyWithWhereWithoutContactInput | ContactListMemberUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: ContactListMemberScalarWhereInput | ContactListMemberScalarWhereInput[]
  }

  export type CampaignRecipientUpdateManyWithoutContactNestedInput = {
    create?: XOR<CampaignRecipientCreateWithoutContactInput, CampaignRecipientUncheckedCreateWithoutContactInput> | CampaignRecipientCreateWithoutContactInput[] | CampaignRecipientUncheckedCreateWithoutContactInput[]
    connectOrCreate?: CampaignRecipientCreateOrConnectWithoutContactInput | CampaignRecipientCreateOrConnectWithoutContactInput[]
    upsert?: CampaignRecipientUpsertWithWhereUniqueWithoutContactInput | CampaignRecipientUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: CampaignRecipientCreateManyContactInputEnvelope
    set?: CampaignRecipientWhereUniqueInput | CampaignRecipientWhereUniqueInput[]
    disconnect?: CampaignRecipientWhereUniqueInput | CampaignRecipientWhereUniqueInput[]
    delete?: CampaignRecipientWhereUniqueInput | CampaignRecipientWhereUniqueInput[]
    connect?: CampaignRecipientWhereUniqueInput | CampaignRecipientWhereUniqueInput[]
    update?: CampaignRecipientUpdateWithWhereUniqueWithoutContactInput | CampaignRecipientUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: CampaignRecipientUpdateManyWithWhereWithoutContactInput | CampaignRecipientUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: CampaignRecipientScalarWhereInput | CampaignRecipientScalarWhereInput[]
  }

  export type ContactListMemberUncheckedUpdateManyWithoutContactNestedInput = {
    create?: XOR<ContactListMemberCreateWithoutContactInput, ContactListMemberUncheckedCreateWithoutContactInput> | ContactListMemberCreateWithoutContactInput[] | ContactListMemberUncheckedCreateWithoutContactInput[]
    connectOrCreate?: ContactListMemberCreateOrConnectWithoutContactInput | ContactListMemberCreateOrConnectWithoutContactInput[]
    upsert?: ContactListMemberUpsertWithWhereUniqueWithoutContactInput | ContactListMemberUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: ContactListMemberCreateManyContactInputEnvelope
    set?: ContactListMemberWhereUniqueInput | ContactListMemberWhereUniqueInput[]
    disconnect?: ContactListMemberWhereUniqueInput | ContactListMemberWhereUniqueInput[]
    delete?: ContactListMemberWhereUniqueInput | ContactListMemberWhereUniqueInput[]
    connect?: ContactListMemberWhereUniqueInput | ContactListMemberWhereUniqueInput[]
    update?: ContactListMemberUpdateWithWhereUniqueWithoutContactInput | ContactListMemberUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: ContactListMemberUpdateManyWithWhereWithoutContactInput | ContactListMemberUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: ContactListMemberScalarWhereInput | ContactListMemberScalarWhereInput[]
  }

  export type CampaignRecipientUncheckedUpdateManyWithoutContactNestedInput = {
    create?: XOR<CampaignRecipientCreateWithoutContactInput, CampaignRecipientUncheckedCreateWithoutContactInput> | CampaignRecipientCreateWithoutContactInput[] | CampaignRecipientUncheckedCreateWithoutContactInput[]
    connectOrCreate?: CampaignRecipientCreateOrConnectWithoutContactInput | CampaignRecipientCreateOrConnectWithoutContactInput[]
    upsert?: CampaignRecipientUpsertWithWhereUniqueWithoutContactInput | CampaignRecipientUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: CampaignRecipientCreateManyContactInputEnvelope
    set?: CampaignRecipientWhereUniqueInput | CampaignRecipientWhereUniqueInput[]
    disconnect?: CampaignRecipientWhereUniqueInput | CampaignRecipientWhereUniqueInput[]
    delete?: CampaignRecipientWhereUniqueInput | CampaignRecipientWhereUniqueInput[]
    connect?: CampaignRecipientWhereUniqueInput | CampaignRecipientWhereUniqueInput[]
    update?: CampaignRecipientUpdateWithWhereUniqueWithoutContactInput | CampaignRecipientUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: CampaignRecipientUpdateManyWithWhereWithoutContactInput | CampaignRecipientUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: CampaignRecipientScalarWhereInput | CampaignRecipientScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutContactListsInput = {
    create?: XOR<UserCreateWithoutContactListsInput, UserUncheckedCreateWithoutContactListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContactListsInput
    connect?: UserWhereUniqueInput
  }

  export type ContactListMemberCreateNestedManyWithoutListInput = {
    create?: XOR<ContactListMemberCreateWithoutListInput, ContactListMemberUncheckedCreateWithoutListInput> | ContactListMemberCreateWithoutListInput[] | ContactListMemberUncheckedCreateWithoutListInput[]
    connectOrCreate?: ContactListMemberCreateOrConnectWithoutListInput | ContactListMemberCreateOrConnectWithoutListInput[]
    createMany?: ContactListMemberCreateManyListInputEnvelope
    connect?: ContactListMemberWhereUniqueInput | ContactListMemberWhereUniqueInput[]
  }

  export type ContactListMemberUncheckedCreateNestedManyWithoutListInput = {
    create?: XOR<ContactListMemberCreateWithoutListInput, ContactListMemberUncheckedCreateWithoutListInput> | ContactListMemberCreateWithoutListInput[] | ContactListMemberUncheckedCreateWithoutListInput[]
    connectOrCreate?: ContactListMemberCreateOrConnectWithoutListInput | ContactListMemberCreateOrConnectWithoutListInput[]
    createMany?: ContactListMemberCreateManyListInputEnvelope
    connect?: ContactListMemberWhereUniqueInput | ContactListMemberWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutContactListsNestedInput = {
    create?: XOR<UserCreateWithoutContactListsInput, UserUncheckedCreateWithoutContactListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContactListsInput
    upsert?: UserUpsertWithoutContactListsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContactListsInput, UserUpdateWithoutContactListsInput>, UserUncheckedUpdateWithoutContactListsInput>
  }

  export type ContactListMemberUpdateManyWithoutListNestedInput = {
    create?: XOR<ContactListMemberCreateWithoutListInput, ContactListMemberUncheckedCreateWithoutListInput> | ContactListMemberCreateWithoutListInput[] | ContactListMemberUncheckedCreateWithoutListInput[]
    connectOrCreate?: ContactListMemberCreateOrConnectWithoutListInput | ContactListMemberCreateOrConnectWithoutListInput[]
    upsert?: ContactListMemberUpsertWithWhereUniqueWithoutListInput | ContactListMemberUpsertWithWhereUniqueWithoutListInput[]
    createMany?: ContactListMemberCreateManyListInputEnvelope
    set?: ContactListMemberWhereUniqueInput | ContactListMemberWhereUniqueInput[]
    disconnect?: ContactListMemberWhereUniqueInput | ContactListMemberWhereUniqueInput[]
    delete?: ContactListMemberWhereUniqueInput | ContactListMemberWhereUniqueInput[]
    connect?: ContactListMemberWhereUniqueInput | ContactListMemberWhereUniqueInput[]
    update?: ContactListMemberUpdateWithWhereUniqueWithoutListInput | ContactListMemberUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: ContactListMemberUpdateManyWithWhereWithoutListInput | ContactListMemberUpdateManyWithWhereWithoutListInput[]
    deleteMany?: ContactListMemberScalarWhereInput | ContactListMemberScalarWhereInput[]
  }

  export type ContactListMemberUncheckedUpdateManyWithoutListNestedInput = {
    create?: XOR<ContactListMemberCreateWithoutListInput, ContactListMemberUncheckedCreateWithoutListInput> | ContactListMemberCreateWithoutListInput[] | ContactListMemberUncheckedCreateWithoutListInput[]
    connectOrCreate?: ContactListMemberCreateOrConnectWithoutListInput | ContactListMemberCreateOrConnectWithoutListInput[]
    upsert?: ContactListMemberUpsertWithWhereUniqueWithoutListInput | ContactListMemberUpsertWithWhereUniqueWithoutListInput[]
    createMany?: ContactListMemberCreateManyListInputEnvelope
    set?: ContactListMemberWhereUniqueInput | ContactListMemberWhereUniqueInput[]
    disconnect?: ContactListMemberWhereUniqueInput | ContactListMemberWhereUniqueInput[]
    delete?: ContactListMemberWhereUniqueInput | ContactListMemberWhereUniqueInput[]
    connect?: ContactListMemberWhereUniqueInput | ContactListMemberWhereUniqueInput[]
    update?: ContactListMemberUpdateWithWhereUniqueWithoutListInput | ContactListMemberUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: ContactListMemberUpdateManyWithWhereWithoutListInput | ContactListMemberUpdateManyWithWhereWithoutListInput[]
    deleteMany?: ContactListMemberScalarWhereInput | ContactListMemberScalarWhereInput[]
  }

  export type ContactCreateNestedOneWithoutContactListsInput = {
    create?: XOR<ContactCreateWithoutContactListsInput, ContactUncheckedCreateWithoutContactListsInput>
    connectOrCreate?: ContactCreateOrConnectWithoutContactListsInput
    connect?: ContactWhereUniqueInput
  }

  export type ContactListCreateNestedOneWithoutContactsInput = {
    create?: XOR<ContactListCreateWithoutContactsInput, ContactListUncheckedCreateWithoutContactsInput>
    connectOrCreate?: ContactListCreateOrConnectWithoutContactsInput
    connect?: ContactListWhereUniqueInput
  }

  export type ContactUpdateOneRequiredWithoutContactListsNestedInput = {
    create?: XOR<ContactCreateWithoutContactListsInput, ContactUncheckedCreateWithoutContactListsInput>
    connectOrCreate?: ContactCreateOrConnectWithoutContactListsInput
    upsert?: ContactUpsertWithoutContactListsInput
    connect?: ContactWhereUniqueInput
    update?: XOR<XOR<ContactUpdateToOneWithWhereWithoutContactListsInput, ContactUpdateWithoutContactListsInput>, ContactUncheckedUpdateWithoutContactListsInput>
  }

  export type ContactListUpdateOneRequiredWithoutContactsNestedInput = {
    create?: XOR<ContactListCreateWithoutContactsInput, ContactListUncheckedCreateWithoutContactsInput>
    connectOrCreate?: ContactListCreateOrConnectWithoutContactsInput
    upsert?: ContactListUpsertWithoutContactsInput
    connect?: ContactListWhereUniqueInput
    update?: XOR<XOR<ContactListUpdateToOneWithWhereWithoutContactsInput, ContactListUpdateWithoutContactsInput>, ContactListUncheckedUpdateWithoutContactsInput>
  }

  export type UserCreateNestedOneWithoutTemplatesInput = {
    create?: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTemplatesInput
    connect?: UserWhereUniqueInput
  }

  export type CampaignCreateNestedManyWithoutTemplateInput = {
    create?: XOR<CampaignCreateWithoutTemplateInput, CampaignUncheckedCreateWithoutTemplateInput> | CampaignCreateWithoutTemplateInput[] | CampaignUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutTemplateInput | CampaignCreateOrConnectWithoutTemplateInput[]
    createMany?: CampaignCreateManyTemplateInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type CampaignUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<CampaignCreateWithoutTemplateInput, CampaignUncheckedCreateWithoutTemplateInput> | CampaignCreateWithoutTemplateInput[] | CampaignUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutTemplateInput | CampaignCreateOrConnectWithoutTemplateInput[]
    createMany?: CampaignCreateManyTemplateInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type EnumCampaignTypeFieldUpdateOperationsInput = {
    set?: $Enums.CampaignType
  }

  export type UserUpdateOneRequiredWithoutTemplatesNestedInput = {
    create?: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTemplatesInput
    upsert?: UserUpsertWithoutTemplatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTemplatesInput, UserUpdateWithoutTemplatesInput>, UserUncheckedUpdateWithoutTemplatesInput>
  }

  export type CampaignUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<CampaignCreateWithoutTemplateInput, CampaignUncheckedCreateWithoutTemplateInput> | CampaignCreateWithoutTemplateInput[] | CampaignUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutTemplateInput | CampaignCreateOrConnectWithoutTemplateInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutTemplateInput | CampaignUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: CampaignCreateManyTemplateInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutTemplateInput | CampaignUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutTemplateInput | CampaignUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type CampaignUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<CampaignCreateWithoutTemplateInput, CampaignUncheckedCreateWithoutTemplateInput> | CampaignCreateWithoutTemplateInput[] | CampaignUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutTemplateInput | CampaignCreateOrConnectWithoutTemplateInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutTemplateInput | CampaignUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: CampaignCreateManyTemplateInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutTemplateInput | CampaignUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutTemplateInput | CampaignUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampaignsInput
    connect?: UserWhereUniqueInput
  }

  export type TemplateCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<TemplateCreateWithoutCampaignsInput, TemplateUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutCampaignsInput
    connect?: TemplateWhereUniqueInput
  }

  export type CampaignRecipientCreateNestedManyWithoutCampaignInput = {
    create?: XOR<CampaignRecipientCreateWithoutCampaignInput, CampaignRecipientUncheckedCreateWithoutCampaignInput> | CampaignRecipientCreateWithoutCampaignInput[] | CampaignRecipientUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignRecipientCreateOrConnectWithoutCampaignInput | CampaignRecipientCreateOrConnectWithoutCampaignInput[]
    createMany?: CampaignRecipientCreateManyCampaignInputEnvelope
    connect?: CampaignRecipientWhereUniqueInput | CampaignRecipientWhereUniqueInput[]
  }

  export type CampaignRecipientUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<CampaignRecipientCreateWithoutCampaignInput, CampaignRecipientUncheckedCreateWithoutCampaignInput> | CampaignRecipientCreateWithoutCampaignInput[] | CampaignRecipientUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignRecipientCreateOrConnectWithoutCampaignInput | CampaignRecipientCreateOrConnectWithoutCampaignInput[]
    createMany?: CampaignRecipientCreateManyCampaignInputEnvelope
    connect?: CampaignRecipientWhereUniqueInput | CampaignRecipientWhereUniqueInput[]
  }

  export type EnumCampaignStatusFieldUpdateOperationsInput = {
    set?: $Enums.CampaignStatus
  }

  export type UserUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampaignsInput
    upsert?: UserUpsertWithoutCampaignsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCampaignsInput, UserUpdateWithoutCampaignsInput>, UserUncheckedUpdateWithoutCampaignsInput>
  }

  export type TemplateUpdateOneWithoutCampaignsNestedInput = {
    create?: XOR<TemplateCreateWithoutCampaignsInput, TemplateUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutCampaignsInput
    upsert?: TemplateUpsertWithoutCampaignsInput
    disconnect?: TemplateWhereInput | boolean
    delete?: TemplateWhereInput | boolean
    connect?: TemplateWhereUniqueInput
    update?: XOR<XOR<TemplateUpdateToOneWithWhereWithoutCampaignsInput, TemplateUpdateWithoutCampaignsInput>, TemplateUncheckedUpdateWithoutCampaignsInput>
  }

  export type CampaignRecipientUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<CampaignRecipientCreateWithoutCampaignInput, CampaignRecipientUncheckedCreateWithoutCampaignInput> | CampaignRecipientCreateWithoutCampaignInput[] | CampaignRecipientUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignRecipientCreateOrConnectWithoutCampaignInput | CampaignRecipientCreateOrConnectWithoutCampaignInput[]
    upsert?: CampaignRecipientUpsertWithWhereUniqueWithoutCampaignInput | CampaignRecipientUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: CampaignRecipientCreateManyCampaignInputEnvelope
    set?: CampaignRecipientWhereUniqueInput | CampaignRecipientWhereUniqueInput[]
    disconnect?: CampaignRecipientWhereUniqueInput | CampaignRecipientWhereUniqueInput[]
    delete?: CampaignRecipientWhereUniqueInput | CampaignRecipientWhereUniqueInput[]
    connect?: CampaignRecipientWhereUniqueInput | CampaignRecipientWhereUniqueInput[]
    update?: CampaignRecipientUpdateWithWhereUniqueWithoutCampaignInput | CampaignRecipientUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: CampaignRecipientUpdateManyWithWhereWithoutCampaignInput | CampaignRecipientUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: CampaignRecipientScalarWhereInput | CampaignRecipientScalarWhereInput[]
  }

  export type CampaignRecipientUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<CampaignRecipientCreateWithoutCampaignInput, CampaignRecipientUncheckedCreateWithoutCampaignInput> | CampaignRecipientCreateWithoutCampaignInput[] | CampaignRecipientUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignRecipientCreateOrConnectWithoutCampaignInput | CampaignRecipientCreateOrConnectWithoutCampaignInput[]
    upsert?: CampaignRecipientUpsertWithWhereUniqueWithoutCampaignInput | CampaignRecipientUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: CampaignRecipientCreateManyCampaignInputEnvelope
    set?: CampaignRecipientWhereUniqueInput | CampaignRecipientWhereUniqueInput[]
    disconnect?: CampaignRecipientWhereUniqueInput | CampaignRecipientWhereUniqueInput[]
    delete?: CampaignRecipientWhereUniqueInput | CampaignRecipientWhereUniqueInput[]
    connect?: CampaignRecipientWhereUniqueInput | CampaignRecipientWhereUniqueInput[]
    update?: CampaignRecipientUpdateWithWhereUniqueWithoutCampaignInput | CampaignRecipientUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: CampaignRecipientUpdateManyWithWhereWithoutCampaignInput | CampaignRecipientUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: CampaignRecipientScalarWhereInput | CampaignRecipientScalarWhereInput[]
  }

  export type CampaignCreateNestedOneWithoutRecipientsInput = {
    create?: XOR<CampaignCreateWithoutRecipientsInput, CampaignUncheckedCreateWithoutRecipientsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutRecipientsInput
    connect?: CampaignWhereUniqueInput
  }

  export type ContactCreateNestedOneWithoutRecipientsInput = {
    create?: XOR<ContactCreateWithoutRecipientsInput, ContactUncheckedCreateWithoutRecipientsInput>
    connectOrCreate?: ContactCreateOrConnectWithoutRecipientsInput
    connect?: ContactWhereUniqueInput
  }

  export type EnumRecipientStatusFieldUpdateOperationsInput = {
    set?: $Enums.RecipientStatus
  }

  export type CampaignUpdateOneRequiredWithoutRecipientsNestedInput = {
    create?: XOR<CampaignCreateWithoutRecipientsInput, CampaignUncheckedCreateWithoutRecipientsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutRecipientsInput
    upsert?: CampaignUpsertWithoutRecipientsInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutRecipientsInput, CampaignUpdateWithoutRecipientsInput>, CampaignUncheckedUpdateWithoutRecipientsInput>
  }

  export type ContactUpdateOneRequiredWithoutRecipientsNestedInput = {
    create?: XOR<ContactCreateWithoutRecipientsInput, ContactUncheckedCreateWithoutRecipientsInput>
    connectOrCreate?: ContactCreateOrConnectWithoutRecipientsInput
    upsert?: ContactUpsertWithoutRecipientsInput
    connect?: ContactWhereUniqueInput
    update?: XOR<XOR<ContactUpdateToOneWithWhereWithoutRecipientsInput, ContactUpdateWithoutRecipientsInput>, ContactUncheckedUpdateWithoutRecipientsInput>
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserCreateNestedOneWithoutSettingInput = {
    create?: XOR<UserCreateWithoutSettingInput, UserUncheckedCreateWithoutSettingInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSettingNestedInput = {
    create?: XOR<UserCreateWithoutSettingInput, UserUncheckedCreateWithoutSettingInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingInput
    upsert?: UserUpsertWithoutSettingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSettingInput, UserUpdateWithoutSettingInput>, UserUncheckedUpdateWithoutSettingInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumRoleNameFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameFilter<$PrismaModel> | $Enums.RoleName
  }

  export type NestedEnumRoleNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameWithAggregatesFilter<$PrismaModel> | $Enums.RoleName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleNameFilter<$PrismaModel>
    _max?: NestedEnumRoleNameFilter<$PrismaModel>
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

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumCreditTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditType | EnumCreditTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CreditType[] | ListEnumCreditTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CreditType[] | ListEnumCreditTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCreditTypeFilter<$PrismaModel> | $Enums.CreditType
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumCreditTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditType | EnumCreditTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CreditType[] | ListEnumCreditTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CreditType[] | ListEnumCreditTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCreditTypeWithAggregatesFilter<$PrismaModel> | $Enums.CreditType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCreditTypeFilter<$PrismaModel>
    _max?: NestedEnumCreditTypeFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumCampaignTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignType | EnumCampaignTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignType[] | ListEnumCampaignTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignType[] | ListEnumCampaignTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignTypeFilter<$PrismaModel> | $Enums.CampaignType
  }

  export type NestedEnumCampaignTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignType | EnumCampaignTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignType[] | ListEnumCampaignTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignType[] | ListEnumCampaignTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignTypeWithAggregatesFilter<$PrismaModel> | $Enums.CampaignType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignTypeFilter<$PrismaModel>
    _max?: NestedEnumCampaignTypeFilter<$PrismaModel>
  }

  export type NestedEnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus
  }

  export type NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusFilter<$PrismaModel>
  }

  export type NestedEnumRecipientStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RecipientStatus | EnumRecipientStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecipientStatus[] | ListEnumRecipientStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecipientStatus[] | ListEnumRecipientStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecipientStatusFilter<$PrismaModel> | $Enums.RecipientStatus
  }

  export type NestedEnumRecipientStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecipientStatus | EnumRecipientStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecipientStatus[] | ListEnumRecipientStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecipientStatus[] | ListEnumRecipientStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecipientStatusWithAggregatesFilter<$PrismaModel> | $Enums.RecipientStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecipientStatusFilter<$PrismaModel>
    _max?: NestedEnumRecipientStatusFilter<$PrismaModel>
  }

  export type UserRoleCreateWithoutUserInput = {
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserRoleUncheckedCreateWithoutUserInput = {
    roleId: string
  }

  export type UserRoleCreateOrConnectWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleCreateManyUserInputEnvelope = {
    data: UserRoleCreateManyUserInput | UserRoleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    revoked?: boolean
    createdAt?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    revoked?: boolean
    createdAt?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CreditCreateWithoutUserInput = {
    id?: string
    smsCredits?: number
    emailCredits?: number
  }

  export type CreditUncheckedCreateWithoutUserInput = {
    id?: string
    smsCredits?: number
    emailCredits?: number
  }

  export type CreditCreateOrConnectWithoutUserInput = {
    where: CreditWhereUniqueInput
    create: XOR<CreditCreateWithoutUserInput, CreditUncheckedCreateWithoutUserInput>
  }

  export type ContactCreateWithoutUserInput = {
    id?: string
    phone?: string | null
    email?: string | null
    firstName?: string | null
    lastName?: string | null
    company?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    contactLists?: ContactListMemberCreateNestedManyWithoutContactInput
    recipients?: CampaignRecipientCreateNestedManyWithoutContactInput
  }

  export type ContactUncheckedCreateWithoutUserInput = {
    id?: string
    phone?: string | null
    email?: string | null
    firstName?: string | null
    lastName?: string | null
    company?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    contactLists?: ContactListMemberUncheckedCreateNestedManyWithoutContactInput
    recipients?: CampaignRecipientUncheckedCreateNestedManyWithoutContactInput
  }

  export type ContactCreateOrConnectWithoutUserInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutUserInput, ContactUncheckedCreateWithoutUserInput>
  }

  export type ContactCreateManyUserInputEnvelope = {
    data: ContactCreateManyUserInput | ContactCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ContactListCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: ContactListMemberCreateNestedManyWithoutListInput
  }

  export type ContactListUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: ContactListMemberUncheckedCreateNestedManyWithoutListInput
  }

  export type ContactListCreateOrConnectWithoutUserInput = {
    where: ContactListWhereUniqueInput
    create: XOR<ContactListCreateWithoutUserInput, ContactListUncheckedCreateWithoutUserInput>
  }

  export type ContactListCreateManyUserInputEnvelope = {
    data: ContactListCreateManyUserInput | ContactListCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CampaignCreateWithoutUserInput = {
    id?: string
    name: string
    type: $Enums.CampaignType
    status?: $Enums.CampaignStatus
    subject?: string | null
    message: string
    scheduledAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    template?: TemplateCreateNestedOneWithoutCampaignsInput
    recipients?: CampaignRecipientCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    type: $Enums.CampaignType
    status?: $Enums.CampaignStatus
    subject?: string | null
    message: string
    scheduledAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    templateId?: string | null
    recipients?: CampaignRecipientUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutUserInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput>
  }

  export type CampaignCreateManyUserInputEnvelope = {
    data: CampaignCreateManyUserInput | CampaignCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CreditTransactionCreateWithoutUserInput = {
    id?: string
    type: $Enums.TransactionType
    creditType: $Enums.CreditType
    amount: number
    balanceAfter: number
    reason: string
    createdAt?: Date | string
  }

  export type CreditTransactionUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.TransactionType
    creditType: $Enums.CreditType
    amount: number
    balanceAfter: number
    reason: string
    createdAt?: Date | string
  }

  export type CreditTransactionCreateOrConnectWithoutUserInput = {
    where: CreditTransactionWhereUniqueInput
    create: XOR<CreditTransactionCreateWithoutUserInput, CreditTransactionUncheckedCreateWithoutUserInput>
  }

  export type CreditTransactionCreateManyUserInputEnvelope = {
    data: CreditTransactionCreateManyUserInput | CreditTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutUserInput = {
    id?: string
    action: string
    entity?: string | null
    entityId?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    entity?: string | null
    entityId?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SettingCreateWithoutUserInput = {
    id?: string
    theme?: string
    timezone?: string
    language?: string
    emailNotifications?: boolean
    smsNotifications?: boolean
  }

  export type SettingUncheckedCreateWithoutUserInput = {
    id?: string
    theme?: string
    timezone?: string
    language?: string
    emailNotifications?: boolean
    smsNotifications?: boolean
  }

  export type SettingCreateOrConnectWithoutUserInput = {
    where: SettingWhereUniqueInput
    create: XOR<SettingCreateWithoutUserInput, SettingUncheckedCreateWithoutUserInput>
  }

  export type TemplateCreateWithoutUserInput = {
    id?: string
    name: string
    type: $Enums.CampaignType
    subject?: string | null
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    type: $Enums.CampaignType
    subject?: string | null
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateCreateOrConnectWithoutUserInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutUserInput, TemplateUncheckedCreateWithoutUserInput>
  }

  export type TemplateCreateManyUserInputEnvelope = {
    data: TemplateCreateManyUserInput | TemplateCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutUserInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutUserInput>
  }

  export type UserRoleScalarWhereInput = {
    AND?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    OR?: UserRoleScalarWhereInput[]
    NOT?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    userId?: StringFilter<"UserRole"> | string
    roleId?: StringFilter<"UserRole"> | string
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revoked?: BoolFilter<"RefreshToken"> | boolean
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    userId?: StringFilter<"RefreshToken"> | string
  }

  export type CreditUpsertWithoutUserInput = {
    update: XOR<CreditUpdateWithoutUserInput, CreditUncheckedUpdateWithoutUserInput>
    create: XOR<CreditCreateWithoutUserInput, CreditUncheckedCreateWithoutUserInput>
    where?: CreditWhereInput
  }

  export type CreditUpdateToOneWithWhereWithoutUserInput = {
    where?: CreditWhereInput
    data: XOR<CreditUpdateWithoutUserInput, CreditUncheckedUpdateWithoutUserInput>
  }

  export type CreditUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    smsCredits?: IntFieldUpdateOperationsInput | number
    emailCredits?: IntFieldUpdateOperationsInput | number
  }

  export type CreditUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    smsCredits?: IntFieldUpdateOperationsInput | number
    emailCredits?: IntFieldUpdateOperationsInput | number
  }

  export type ContactUpsertWithWhereUniqueWithoutUserInput = {
    where: ContactWhereUniqueInput
    update: XOR<ContactUpdateWithoutUserInput, ContactUncheckedUpdateWithoutUserInput>
    create: XOR<ContactCreateWithoutUserInput, ContactUncheckedCreateWithoutUserInput>
  }

  export type ContactUpdateWithWhereUniqueWithoutUserInput = {
    where: ContactWhereUniqueInput
    data: XOR<ContactUpdateWithoutUserInput, ContactUncheckedUpdateWithoutUserInput>
  }

  export type ContactUpdateManyWithWhereWithoutUserInput = {
    where: ContactScalarWhereInput
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyWithoutUserInput>
  }

  export type ContactScalarWhereInput = {
    AND?: ContactScalarWhereInput | ContactScalarWhereInput[]
    OR?: ContactScalarWhereInput[]
    NOT?: ContactScalarWhereInput | ContactScalarWhereInput[]
    id?: StringFilter<"Contact"> | string
    phone?: StringNullableFilter<"Contact"> | string | null
    email?: StringNullableFilter<"Contact"> | string | null
    firstName?: StringNullableFilter<"Contact"> | string | null
    lastName?: StringNullableFilter<"Contact"> | string | null
    company?: StringNullableFilter<"Contact"> | string | null
    metadata?: JsonNullableFilter<"Contact">
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
    userId?: StringFilter<"Contact"> | string
  }

  export type ContactListUpsertWithWhereUniqueWithoutUserInput = {
    where: ContactListWhereUniqueInput
    update: XOR<ContactListUpdateWithoutUserInput, ContactListUncheckedUpdateWithoutUserInput>
    create: XOR<ContactListCreateWithoutUserInput, ContactListUncheckedCreateWithoutUserInput>
  }

  export type ContactListUpdateWithWhereUniqueWithoutUserInput = {
    where: ContactListWhereUniqueInput
    data: XOR<ContactListUpdateWithoutUserInput, ContactListUncheckedUpdateWithoutUserInput>
  }

  export type ContactListUpdateManyWithWhereWithoutUserInput = {
    where: ContactListScalarWhereInput
    data: XOR<ContactListUpdateManyMutationInput, ContactListUncheckedUpdateManyWithoutUserInput>
  }

  export type ContactListScalarWhereInput = {
    AND?: ContactListScalarWhereInput | ContactListScalarWhereInput[]
    OR?: ContactListScalarWhereInput[]
    NOT?: ContactListScalarWhereInput | ContactListScalarWhereInput[]
    id?: StringFilter<"ContactList"> | string
    name?: StringFilter<"ContactList"> | string
    description?: StringNullableFilter<"ContactList"> | string | null
    createdAt?: DateTimeFilter<"ContactList"> | Date | string
    updatedAt?: DateTimeFilter<"ContactList"> | Date | string
    userId?: StringFilter<"ContactList"> | string
  }

  export type CampaignUpsertWithWhereUniqueWithoutUserInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutUserInput, CampaignUncheckedUpdateWithoutUserInput>
    create: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutUserInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutUserInput, CampaignUncheckedUpdateWithoutUserInput>
  }

  export type CampaignUpdateManyWithWhereWithoutUserInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutUserInput>
  }

  export type CampaignScalarWhereInput = {
    AND?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    OR?: CampaignScalarWhereInput[]
    NOT?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    id?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    type?: EnumCampaignTypeFilter<"Campaign"> | $Enums.CampaignType
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    subject?: StringNullableFilter<"Campaign"> | string | null
    message?: StringFilter<"Campaign"> | string
    scheduledAt?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    startedAt?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    userId?: StringFilter<"Campaign"> | string
    templateId?: StringNullableFilter<"Campaign"> | string | null
  }

  export type CreditTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: CreditTransactionWhereUniqueInput
    update: XOR<CreditTransactionUpdateWithoutUserInput, CreditTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<CreditTransactionCreateWithoutUserInput, CreditTransactionUncheckedCreateWithoutUserInput>
  }

  export type CreditTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: CreditTransactionWhereUniqueInput
    data: XOR<CreditTransactionUpdateWithoutUserInput, CreditTransactionUncheckedUpdateWithoutUserInput>
  }

  export type CreditTransactionUpdateManyWithWhereWithoutUserInput = {
    where: CreditTransactionScalarWhereInput
    data: XOR<CreditTransactionUpdateManyMutationInput, CreditTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type CreditTransactionScalarWhereInput = {
    AND?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
    OR?: CreditTransactionScalarWhereInput[]
    NOT?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
    id?: StringFilter<"CreditTransaction"> | string
    type?: EnumTransactionTypeFilter<"CreditTransaction"> | $Enums.TransactionType
    creditType?: EnumCreditTypeFilter<"CreditTransaction"> | $Enums.CreditType
    amount?: IntFilter<"CreditTransaction"> | number
    balanceAfter?: IntFilter<"CreditTransaction"> | number
    reason?: StringFilter<"CreditTransaction"> | string
    createdAt?: DateTimeFilter<"CreditTransaction"> | Date | string
    userId?: StringFilter<"CreditTransaction"> | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    entity?: StringNullableFilter<"AuditLog"> | string | null
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    userId?: StringNullableFilter<"AuditLog"> | string | null
  }

  export type SettingUpsertWithoutUserInput = {
    update: XOR<SettingUpdateWithoutUserInput, SettingUncheckedUpdateWithoutUserInput>
    create: XOR<SettingCreateWithoutUserInput, SettingUncheckedCreateWithoutUserInput>
    where?: SettingWhereInput
  }

  export type SettingUpdateToOneWithWhereWithoutUserInput = {
    where?: SettingWhereInput
    data: XOR<SettingUpdateWithoutUserInput, SettingUncheckedUpdateWithoutUserInput>
  }

  export type SettingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    smsNotifications?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SettingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    smsNotifications?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TemplateUpsertWithWhereUniqueWithoutUserInput = {
    where: TemplateWhereUniqueInput
    update: XOR<TemplateUpdateWithoutUserInput, TemplateUncheckedUpdateWithoutUserInput>
    create: XOR<TemplateCreateWithoutUserInput, TemplateUncheckedCreateWithoutUserInput>
  }

  export type TemplateUpdateWithWhereUniqueWithoutUserInput = {
    where: TemplateWhereUniqueInput
    data: XOR<TemplateUpdateWithoutUserInput, TemplateUncheckedUpdateWithoutUserInput>
  }

  export type TemplateUpdateManyWithWhereWithoutUserInput = {
    where: TemplateScalarWhereInput
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyWithoutUserInput>
  }

  export type TemplateScalarWhereInput = {
    AND?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
    OR?: TemplateScalarWhereInput[]
    NOT?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
    id?: StringFilter<"Template"> | string
    name?: StringFilter<"Template"> | string
    type?: EnumCampaignTypeFilter<"Template"> | $Enums.CampaignType
    subject?: StringNullableFilter<"Template"> | string | null
    message?: StringFilter<"Template"> | string
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
    userId?: StringFilter<"Template"> | string
  }

  export type UserRoleCreateWithoutRoleInput = {
    user: UserCreateNestedOneWithoutRolesInput
  }

  export type UserRoleUncheckedCreateWithoutRoleInput = {
    userId: string
  }

  export type UserRoleCreateOrConnectWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleCreateManyRoleInputEnvelope = {
    data: UserRoleCreateManyRoleInput | UserRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutRoleInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserCreateWithoutRolesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    emailVerified?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    credits?: CreditCreateNestedOneWithoutUserInput
    contacts?: ContactCreateNestedManyWithoutUserInput
    contactLists?: ContactListCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutUserInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    setting?: SettingCreateNestedOneWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRolesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    emailVerified?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    credits?: CreditUncheckedCreateNestedOneWithoutUserInput
    contacts?: ContactUncheckedCreateNestedManyWithoutUserInput
    contactLists?: ContactListUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    setting?: SettingUncheckedCreateNestedOneWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type RoleCreateWithoutUsersInput = {
    id?: string
    name: $Enums.RoleName
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: string
    name: $Enums.RoleName
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutRolesInput = {
    update: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRolesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
  }

  export type UserUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    credits?: CreditUpdateOneWithoutUserNestedInput
    contacts?: ContactUpdateManyWithoutUserNestedInput
    contactLists?: ContactListUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    setting?: SettingUpdateOneWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    credits?: CreditUncheckedUpdateOneWithoutUserNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutUserNestedInput
    contactLists?: ContactListUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    setting?: SettingUncheckedUpdateOneWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
  }

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    emailVerified?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUserInput
    credits?: CreditCreateNestedOneWithoutUserInput
    contacts?: ContactCreateNestedManyWithoutUserInput
    contactLists?: ContactListCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutUserInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    setting?: SettingCreateNestedOneWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    emailVerified?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    credits?: CreditUncheckedCreateNestedOneWithoutUserInput
    contacts?: ContactUncheckedCreateNestedManyWithoutUserInput
    contactLists?: ContactListUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    setting?: SettingUncheckedCreateNestedOneWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    credits?: CreditUpdateOneWithoutUserNestedInput
    contacts?: ContactUpdateManyWithoutUserNestedInput
    contactLists?: ContactListUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    setting?: SettingUpdateOneWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    credits?: CreditUncheckedUpdateOneWithoutUserNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutUserNestedInput
    contactLists?: ContactListUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    setting?: SettingUncheckedUpdateOneWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCreditsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    emailVerified?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    contacts?: ContactCreateNestedManyWithoutUserInput
    contactLists?: ContactListCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutUserInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    setting?: SettingCreateNestedOneWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreditsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    emailVerified?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    contacts?: ContactUncheckedCreateNestedManyWithoutUserInput
    contactLists?: ContactListUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    setting?: SettingUncheckedCreateNestedOneWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreditsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreditsInput, UserUncheckedCreateWithoutCreditsInput>
  }

  export type UserUpsertWithoutCreditsInput = {
    update: XOR<UserUpdateWithoutCreditsInput, UserUncheckedUpdateWithoutCreditsInput>
    create: XOR<UserCreateWithoutCreditsInput, UserUncheckedCreateWithoutCreditsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreditsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreditsInput, UserUncheckedUpdateWithoutCreditsInput>
  }

  export type UserUpdateWithoutCreditsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    contacts?: ContactUpdateManyWithoutUserNestedInput
    contactLists?: ContactListUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    setting?: SettingUpdateOneWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreditsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutUserNestedInput
    contactLists?: ContactListUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    setting?: SettingUncheckedUpdateOneWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCreditTransactionsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    emailVerified?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    credits?: CreditCreateNestedOneWithoutUserInput
    contacts?: ContactCreateNestedManyWithoutUserInput
    contactLists?: ContactListCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    setting?: SettingCreateNestedOneWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreditTransactionsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    emailVerified?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    credits?: CreditUncheckedCreateNestedOneWithoutUserInput
    contacts?: ContactUncheckedCreateNestedManyWithoutUserInput
    contactLists?: ContactListUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    setting?: SettingUncheckedCreateNestedOneWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreditTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreditTransactionsInput, UserUncheckedCreateWithoutCreditTransactionsInput>
  }

  export type UserUpsertWithoutCreditTransactionsInput = {
    update: XOR<UserUpdateWithoutCreditTransactionsInput, UserUncheckedUpdateWithoutCreditTransactionsInput>
    create: XOR<UserCreateWithoutCreditTransactionsInput, UserUncheckedCreateWithoutCreditTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreditTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreditTransactionsInput, UserUncheckedUpdateWithoutCreditTransactionsInput>
  }

  export type UserUpdateWithoutCreditTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    credits?: CreditUpdateOneWithoutUserNestedInput
    contacts?: ContactUpdateManyWithoutUserNestedInput
    contactLists?: ContactListUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    setting?: SettingUpdateOneWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreditTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    credits?: CreditUncheckedUpdateOneWithoutUserNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutUserNestedInput
    contactLists?: ContactListUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    setting?: SettingUncheckedUpdateOneWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutContactsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    emailVerified?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    credits?: CreditCreateNestedOneWithoutUserInput
    contactLists?: ContactListCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutUserInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    setting?: SettingCreateNestedOneWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContactsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    emailVerified?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    credits?: CreditUncheckedCreateNestedOneWithoutUserInput
    contactLists?: ContactListUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    setting?: SettingUncheckedCreateNestedOneWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContactsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContactsInput, UserUncheckedCreateWithoutContactsInput>
  }

  export type ContactListMemberCreateWithoutContactInput = {
    list: ContactListCreateNestedOneWithoutContactsInput
  }

  export type ContactListMemberUncheckedCreateWithoutContactInput = {
    listId: string
  }

  export type ContactListMemberCreateOrConnectWithoutContactInput = {
    where: ContactListMemberWhereUniqueInput
    create: XOR<ContactListMemberCreateWithoutContactInput, ContactListMemberUncheckedCreateWithoutContactInput>
  }

  export type ContactListMemberCreateManyContactInputEnvelope = {
    data: ContactListMemberCreateManyContactInput | ContactListMemberCreateManyContactInput[]
    skipDuplicates?: boolean
  }

  export type CampaignRecipientCreateWithoutContactInput = {
    id?: string
    status?: $Enums.RecipientStatus
    providerMessageId?: string | null
    errorMessage?: string | null
    sentAt?: Date | string | null
    deliveredAt?: Date | string | null
    createdAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutRecipientsInput
  }

  export type CampaignRecipientUncheckedCreateWithoutContactInput = {
    id?: string
    status?: $Enums.RecipientStatus
    providerMessageId?: string | null
    errorMessage?: string | null
    sentAt?: Date | string | null
    deliveredAt?: Date | string | null
    createdAt?: Date | string
    campaignId: string
  }

  export type CampaignRecipientCreateOrConnectWithoutContactInput = {
    where: CampaignRecipientWhereUniqueInput
    create: XOR<CampaignRecipientCreateWithoutContactInput, CampaignRecipientUncheckedCreateWithoutContactInput>
  }

  export type CampaignRecipientCreateManyContactInputEnvelope = {
    data: CampaignRecipientCreateManyContactInput | CampaignRecipientCreateManyContactInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutContactsInput = {
    update: XOR<UserUpdateWithoutContactsInput, UserUncheckedUpdateWithoutContactsInput>
    create: XOR<UserCreateWithoutContactsInput, UserUncheckedCreateWithoutContactsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContactsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContactsInput, UserUncheckedUpdateWithoutContactsInput>
  }

  export type UserUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    credits?: CreditUpdateOneWithoutUserNestedInput
    contactLists?: ContactListUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    setting?: SettingUpdateOneWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    credits?: CreditUncheckedUpdateOneWithoutUserNestedInput
    contactLists?: ContactListUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    setting?: SettingUncheckedUpdateOneWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ContactListMemberUpsertWithWhereUniqueWithoutContactInput = {
    where: ContactListMemberWhereUniqueInput
    update: XOR<ContactListMemberUpdateWithoutContactInput, ContactListMemberUncheckedUpdateWithoutContactInput>
    create: XOR<ContactListMemberCreateWithoutContactInput, ContactListMemberUncheckedCreateWithoutContactInput>
  }

  export type ContactListMemberUpdateWithWhereUniqueWithoutContactInput = {
    where: ContactListMemberWhereUniqueInput
    data: XOR<ContactListMemberUpdateWithoutContactInput, ContactListMemberUncheckedUpdateWithoutContactInput>
  }

  export type ContactListMemberUpdateManyWithWhereWithoutContactInput = {
    where: ContactListMemberScalarWhereInput
    data: XOR<ContactListMemberUpdateManyMutationInput, ContactListMemberUncheckedUpdateManyWithoutContactInput>
  }

  export type ContactListMemberScalarWhereInput = {
    AND?: ContactListMemberScalarWhereInput | ContactListMemberScalarWhereInput[]
    OR?: ContactListMemberScalarWhereInput[]
    NOT?: ContactListMemberScalarWhereInput | ContactListMemberScalarWhereInput[]
    contactId?: StringFilter<"ContactListMember"> | string
    listId?: StringFilter<"ContactListMember"> | string
  }

  export type CampaignRecipientUpsertWithWhereUniqueWithoutContactInput = {
    where: CampaignRecipientWhereUniqueInput
    update: XOR<CampaignRecipientUpdateWithoutContactInput, CampaignRecipientUncheckedUpdateWithoutContactInput>
    create: XOR<CampaignRecipientCreateWithoutContactInput, CampaignRecipientUncheckedCreateWithoutContactInput>
  }

  export type CampaignRecipientUpdateWithWhereUniqueWithoutContactInput = {
    where: CampaignRecipientWhereUniqueInput
    data: XOR<CampaignRecipientUpdateWithoutContactInput, CampaignRecipientUncheckedUpdateWithoutContactInput>
  }

  export type CampaignRecipientUpdateManyWithWhereWithoutContactInput = {
    where: CampaignRecipientScalarWhereInput
    data: XOR<CampaignRecipientUpdateManyMutationInput, CampaignRecipientUncheckedUpdateManyWithoutContactInput>
  }

  export type CampaignRecipientScalarWhereInput = {
    AND?: CampaignRecipientScalarWhereInput | CampaignRecipientScalarWhereInput[]
    OR?: CampaignRecipientScalarWhereInput[]
    NOT?: CampaignRecipientScalarWhereInput | CampaignRecipientScalarWhereInput[]
    id?: StringFilter<"CampaignRecipient"> | string
    status?: EnumRecipientStatusFilter<"CampaignRecipient"> | $Enums.RecipientStatus
    providerMessageId?: StringNullableFilter<"CampaignRecipient"> | string | null
    errorMessage?: StringNullableFilter<"CampaignRecipient"> | string | null
    sentAt?: DateTimeNullableFilter<"CampaignRecipient"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"CampaignRecipient"> | Date | string | null
    createdAt?: DateTimeFilter<"CampaignRecipient"> | Date | string
    campaignId?: StringFilter<"CampaignRecipient"> | string
    contactId?: StringFilter<"CampaignRecipient"> | string
  }

  export type UserCreateWithoutContactListsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    emailVerified?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    credits?: CreditCreateNestedOneWithoutUserInput
    contacts?: ContactCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutUserInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    setting?: SettingCreateNestedOneWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContactListsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    emailVerified?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    credits?: CreditUncheckedCreateNestedOneWithoutUserInput
    contacts?: ContactUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    setting?: SettingUncheckedCreateNestedOneWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContactListsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContactListsInput, UserUncheckedCreateWithoutContactListsInput>
  }

  export type ContactListMemberCreateWithoutListInput = {
    contact: ContactCreateNestedOneWithoutContactListsInput
  }

  export type ContactListMemberUncheckedCreateWithoutListInput = {
    contactId: string
  }

  export type ContactListMemberCreateOrConnectWithoutListInput = {
    where: ContactListMemberWhereUniqueInput
    create: XOR<ContactListMemberCreateWithoutListInput, ContactListMemberUncheckedCreateWithoutListInput>
  }

  export type ContactListMemberCreateManyListInputEnvelope = {
    data: ContactListMemberCreateManyListInput | ContactListMemberCreateManyListInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutContactListsInput = {
    update: XOR<UserUpdateWithoutContactListsInput, UserUncheckedUpdateWithoutContactListsInput>
    create: XOR<UserCreateWithoutContactListsInput, UserUncheckedCreateWithoutContactListsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContactListsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContactListsInput, UserUncheckedUpdateWithoutContactListsInput>
  }

  export type UserUpdateWithoutContactListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    credits?: CreditUpdateOneWithoutUserNestedInput
    contacts?: ContactUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    setting?: SettingUpdateOneWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContactListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    credits?: CreditUncheckedUpdateOneWithoutUserNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    setting?: SettingUncheckedUpdateOneWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ContactListMemberUpsertWithWhereUniqueWithoutListInput = {
    where: ContactListMemberWhereUniqueInput
    update: XOR<ContactListMemberUpdateWithoutListInput, ContactListMemberUncheckedUpdateWithoutListInput>
    create: XOR<ContactListMemberCreateWithoutListInput, ContactListMemberUncheckedCreateWithoutListInput>
  }

  export type ContactListMemberUpdateWithWhereUniqueWithoutListInput = {
    where: ContactListMemberWhereUniqueInput
    data: XOR<ContactListMemberUpdateWithoutListInput, ContactListMemberUncheckedUpdateWithoutListInput>
  }

  export type ContactListMemberUpdateManyWithWhereWithoutListInput = {
    where: ContactListMemberScalarWhereInput
    data: XOR<ContactListMemberUpdateManyMutationInput, ContactListMemberUncheckedUpdateManyWithoutListInput>
  }

  export type ContactCreateWithoutContactListsInput = {
    id?: string
    phone?: string | null
    email?: string | null
    firstName?: string | null
    lastName?: string | null
    company?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutContactsInput
    recipients?: CampaignRecipientCreateNestedManyWithoutContactInput
  }

  export type ContactUncheckedCreateWithoutContactListsInput = {
    id?: string
    phone?: string | null
    email?: string | null
    firstName?: string | null
    lastName?: string | null
    company?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    recipients?: CampaignRecipientUncheckedCreateNestedManyWithoutContactInput
  }

  export type ContactCreateOrConnectWithoutContactListsInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutContactListsInput, ContactUncheckedCreateWithoutContactListsInput>
  }

  export type ContactListCreateWithoutContactsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutContactListsInput
  }

  export type ContactListUncheckedCreateWithoutContactsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ContactListCreateOrConnectWithoutContactsInput = {
    where: ContactListWhereUniqueInput
    create: XOR<ContactListCreateWithoutContactsInput, ContactListUncheckedCreateWithoutContactsInput>
  }

  export type ContactUpsertWithoutContactListsInput = {
    update: XOR<ContactUpdateWithoutContactListsInput, ContactUncheckedUpdateWithoutContactListsInput>
    create: XOR<ContactCreateWithoutContactListsInput, ContactUncheckedCreateWithoutContactListsInput>
    where?: ContactWhereInput
  }

  export type ContactUpdateToOneWithWhereWithoutContactListsInput = {
    where?: ContactWhereInput
    data: XOR<ContactUpdateWithoutContactListsInput, ContactUncheckedUpdateWithoutContactListsInput>
  }

  export type ContactUpdateWithoutContactListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContactsNestedInput
    recipients?: CampaignRecipientUpdateManyWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateWithoutContactListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    recipients?: CampaignRecipientUncheckedUpdateManyWithoutContactNestedInput
  }

  export type ContactListUpsertWithoutContactsInput = {
    update: XOR<ContactListUpdateWithoutContactsInput, ContactListUncheckedUpdateWithoutContactsInput>
    create: XOR<ContactListCreateWithoutContactsInput, ContactListUncheckedCreateWithoutContactsInput>
    where?: ContactListWhereInput
  }

  export type ContactListUpdateToOneWithWhereWithoutContactsInput = {
    where?: ContactListWhereInput
    data: XOR<ContactListUpdateWithoutContactsInput, ContactListUncheckedUpdateWithoutContactsInput>
  }

  export type ContactListUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContactListsNestedInput
  }

  export type ContactListUncheckedUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutTemplatesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    emailVerified?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    credits?: CreditCreateNestedOneWithoutUserInput
    contacts?: ContactCreateNestedManyWithoutUserInput
    contactLists?: ContactListCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutUserInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    setting?: SettingCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTemplatesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    emailVerified?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    credits?: CreditUncheckedCreateNestedOneWithoutUserInput
    contacts?: ContactUncheckedCreateNestedManyWithoutUserInput
    contactLists?: ContactListUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    setting?: SettingUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTemplatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
  }

  export type CampaignCreateWithoutTemplateInput = {
    id?: string
    name: string
    type: $Enums.CampaignType
    status?: $Enums.CampaignStatus
    subject?: string | null
    message: string
    scheduledAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCampaignsInput
    recipients?: CampaignRecipientCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutTemplateInput = {
    id?: string
    name: string
    type: $Enums.CampaignType
    status?: $Enums.CampaignStatus
    subject?: string | null
    message: string
    scheduledAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    recipients?: CampaignRecipientUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutTemplateInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutTemplateInput, CampaignUncheckedCreateWithoutTemplateInput>
  }

  export type CampaignCreateManyTemplateInputEnvelope = {
    data: CampaignCreateManyTemplateInput | CampaignCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTemplatesInput = {
    update: XOR<UserUpdateWithoutTemplatesInput, UserUncheckedUpdateWithoutTemplatesInput>
    create: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTemplatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTemplatesInput, UserUncheckedUpdateWithoutTemplatesInput>
  }

  export type UserUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    credits?: CreditUpdateOneWithoutUserNestedInput
    contacts?: ContactUpdateManyWithoutUserNestedInput
    contactLists?: ContactListUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    setting?: SettingUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    credits?: CreditUncheckedUpdateOneWithoutUserNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutUserNestedInput
    contactLists?: ContactListUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    setting?: SettingUncheckedUpdateOneWithoutUserNestedInput
  }

  export type CampaignUpsertWithWhereUniqueWithoutTemplateInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutTemplateInput, CampaignUncheckedUpdateWithoutTemplateInput>
    create: XOR<CampaignCreateWithoutTemplateInput, CampaignUncheckedCreateWithoutTemplateInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutTemplateInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutTemplateInput, CampaignUncheckedUpdateWithoutTemplateInput>
  }

  export type CampaignUpdateManyWithWhereWithoutTemplateInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutTemplateInput>
  }

  export type UserCreateWithoutCampaignsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    emailVerified?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    credits?: CreditCreateNestedOneWithoutUserInput
    contacts?: ContactCreateNestedManyWithoutUserInput
    contactLists?: ContactListCreateNestedManyWithoutUserInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    setting?: SettingCreateNestedOneWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCampaignsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    emailVerified?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    credits?: CreditUncheckedCreateNestedOneWithoutUserInput
    contacts?: ContactUncheckedCreateNestedManyWithoutUserInput
    contactLists?: ContactListUncheckedCreateNestedManyWithoutUserInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    setting?: SettingUncheckedCreateNestedOneWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCampaignsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
  }

  export type TemplateCreateWithoutCampaignsInput = {
    id?: string
    name: string
    type: $Enums.CampaignType
    subject?: string | null
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTemplatesInput
  }

  export type TemplateUncheckedCreateWithoutCampaignsInput = {
    id?: string
    name: string
    type: $Enums.CampaignType
    subject?: string | null
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type TemplateCreateOrConnectWithoutCampaignsInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutCampaignsInput, TemplateUncheckedCreateWithoutCampaignsInput>
  }

  export type CampaignRecipientCreateWithoutCampaignInput = {
    id?: string
    status?: $Enums.RecipientStatus
    providerMessageId?: string | null
    errorMessage?: string | null
    sentAt?: Date | string | null
    deliveredAt?: Date | string | null
    createdAt?: Date | string
    contact: ContactCreateNestedOneWithoutRecipientsInput
  }

  export type CampaignRecipientUncheckedCreateWithoutCampaignInput = {
    id?: string
    status?: $Enums.RecipientStatus
    providerMessageId?: string | null
    errorMessage?: string | null
    sentAt?: Date | string | null
    deliveredAt?: Date | string | null
    createdAt?: Date | string
    contactId: string
  }

  export type CampaignRecipientCreateOrConnectWithoutCampaignInput = {
    where: CampaignRecipientWhereUniqueInput
    create: XOR<CampaignRecipientCreateWithoutCampaignInput, CampaignRecipientUncheckedCreateWithoutCampaignInput>
  }

  export type CampaignRecipientCreateManyCampaignInputEnvelope = {
    data: CampaignRecipientCreateManyCampaignInput | CampaignRecipientCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCampaignsInput = {
    update: XOR<UserUpdateWithoutCampaignsInput, UserUncheckedUpdateWithoutCampaignsInput>
    create: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCampaignsInput, UserUncheckedUpdateWithoutCampaignsInput>
  }

  export type UserUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    credits?: CreditUpdateOneWithoutUserNestedInput
    contacts?: ContactUpdateManyWithoutUserNestedInput
    contactLists?: ContactListUpdateManyWithoutUserNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    setting?: SettingUpdateOneWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    credits?: CreditUncheckedUpdateOneWithoutUserNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutUserNestedInput
    contactLists?: ContactListUncheckedUpdateManyWithoutUserNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    setting?: SettingUncheckedUpdateOneWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TemplateUpsertWithoutCampaignsInput = {
    update: XOR<TemplateUpdateWithoutCampaignsInput, TemplateUncheckedUpdateWithoutCampaignsInput>
    create: XOR<TemplateCreateWithoutCampaignsInput, TemplateUncheckedCreateWithoutCampaignsInput>
    where?: TemplateWhereInput
  }

  export type TemplateUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: TemplateWhereInput
    data: XOR<TemplateUpdateWithoutCampaignsInput, TemplateUncheckedUpdateWithoutCampaignsInput>
  }

  export type TemplateUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTemplatesNestedInput
  }

  export type TemplateUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CampaignRecipientUpsertWithWhereUniqueWithoutCampaignInput = {
    where: CampaignRecipientWhereUniqueInput
    update: XOR<CampaignRecipientUpdateWithoutCampaignInput, CampaignRecipientUncheckedUpdateWithoutCampaignInput>
    create: XOR<CampaignRecipientCreateWithoutCampaignInput, CampaignRecipientUncheckedCreateWithoutCampaignInput>
  }

  export type CampaignRecipientUpdateWithWhereUniqueWithoutCampaignInput = {
    where: CampaignRecipientWhereUniqueInput
    data: XOR<CampaignRecipientUpdateWithoutCampaignInput, CampaignRecipientUncheckedUpdateWithoutCampaignInput>
  }

  export type CampaignRecipientUpdateManyWithWhereWithoutCampaignInput = {
    where: CampaignRecipientScalarWhereInput
    data: XOR<CampaignRecipientUpdateManyMutationInput, CampaignRecipientUncheckedUpdateManyWithoutCampaignInput>
  }

  export type CampaignCreateWithoutRecipientsInput = {
    id?: string
    name: string
    type: $Enums.CampaignType
    status?: $Enums.CampaignStatus
    subject?: string | null
    message: string
    scheduledAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCampaignsInput
    template?: TemplateCreateNestedOneWithoutCampaignsInput
  }

  export type CampaignUncheckedCreateWithoutRecipientsInput = {
    id?: string
    name: string
    type: $Enums.CampaignType
    status?: $Enums.CampaignStatus
    subject?: string | null
    message: string
    scheduledAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    templateId?: string | null
  }

  export type CampaignCreateOrConnectWithoutRecipientsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutRecipientsInput, CampaignUncheckedCreateWithoutRecipientsInput>
  }

  export type ContactCreateWithoutRecipientsInput = {
    id?: string
    phone?: string | null
    email?: string | null
    firstName?: string | null
    lastName?: string | null
    company?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutContactsInput
    contactLists?: ContactListMemberCreateNestedManyWithoutContactInput
  }

  export type ContactUncheckedCreateWithoutRecipientsInput = {
    id?: string
    phone?: string | null
    email?: string | null
    firstName?: string | null
    lastName?: string | null
    company?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    contactLists?: ContactListMemberUncheckedCreateNestedManyWithoutContactInput
  }

  export type ContactCreateOrConnectWithoutRecipientsInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutRecipientsInput, ContactUncheckedCreateWithoutRecipientsInput>
  }

  export type CampaignUpsertWithoutRecipientsInput = {
    update: XOR<CampaignUpdateWithoutRecipientsInput, CampaignUncheckedUpdateWithoutRecipientsInput>
    create: XOR<CampaignCreateWithoutRecipientsInput, CampaignUncheckedCreateWithoutRecipientsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutRecipientsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutRecipientsInput, CampaignUncheckedUpdateWithoutRecipientsInput>
  }

  export type CampaignUpdateWithoutRecipientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCampaignsNestedInput
    template?: TemplateUpdateOneWithoutCampaignsNestedInput
  }

  export type CampaignUncheckedUpdateWithoutRecipientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactUpsertWithoutRecipientsInput = {
    update: XOR<ContactUpdateWithoutRecipientsInput, ContactUncheckedUpdateWithoutRecipientsInput>
    create: XOR<ContactCreateWithoutRecipientsInput, ContactUncheckedCreateWithoutRecipientsInput>
    where?: ContactWhereInput
  }

  export type ContactUpdateToOneWithWhereWithoutRecipientsInput = {
    where?: ContactWhereInput
    data: XOR<ContactUpdateWithoutRecipientsInput, ContactUncheckedUpdateWithoutRecipientsInput>
  }

  export type ContactUpdateWithoutRecipientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContactsNestedInput
    contactLists?: ContactListMemberUpdateManyWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateWithoutRecipientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    contactLists?: ContactListMemberUncheckedUpdateManyWithoutContactNestedInput
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    emailVerified?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    credits?: CreditCreateNestedOneWithoutUserInput
    contacts?: ContactCreateNestedManyWithoutUserInput
    contactLists?: ContactListCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutUserInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutUserInput
    setting?: SettingCreateNestedOneWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    emailVerified?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    credits?: CreditUncheckedCreateNestedOneWithoutUserInput
    contacts?: ContactUncheckedCreateNestedManyWithoutUserInput
    contactLists?: ContactListUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutUserInput
    setting?: SettingUncheckedCreateNestedOneWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    credits?: CreditUpdateOneWithoutUserNestedInput
    contacts?: ContactUpdateManyWithoutUserNestedInput
    contactLists?: ContactListUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutUserNestedInput
    setting?: SettingUpdateOneWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    credits?: CreditUncheckedUpdateOneWithoutUserNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutUserNestedInput
    contactLists?: ContactListUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutUserNestedInput
    setting?: SettingUncheckedUpdateOneWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSettingInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    emailVerified?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    credits?: CreditCreateNestedOneWithoutUserInput
    contacts?: ContactCreateNestedManyWithoutUserInput
    contactLists?: ContactListCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutUserInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSettingInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    emailVerified?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    credits?: CreditUncheckedCreateNestedOneWithoutUserInput
    contacts?: ContactUncheckedCreateNestedManyWithoutUserInput
    contactLists?: ContactListUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSettingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSettingInput, UserUncheckedCreateWithoutSettingInput>
  }

  export type UserUpsertWithoutSettingInput = {
    update: XOR<UserUpdateWithoutSettingInput, UserUncheckedUpdateWithoutSettingInput>
    create: XOR<UserCreateWithoutSettingInput, UserUncheckedCreateWithoutSettingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSettingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSettingInput, UserUncheckedUpdateWithoutSettingInput>
  }

  export type UserUpdateWithoutSettingInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    credits?: CreditUpdateOneWithoutUserNestedInput
    contacts?: ContactUpdateManyWithoutUserNestedInput
    contactLists?: ContactListUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSettingInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    credits?: CreditUncheckedUpdateOneWithoutUserNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutUserNestedInput
    contactLists?: ContactListUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserRoleCreateManyUserInput = {
    roleId: string
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    revoked?: boolean
    createdAt?: Date | string
  }

  export type ContactCreateManyUserInput = {
    id?: string
    phone?: string | null
    email?: string | null
    firstName?: string | null
    lastName?: string | null
    company?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactListCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignCreateManyUserInput = {
    id?: string
    name: string
    type: $Enums.CampaignType
    status?: $Enums.CampaignStatus
    subject?: string | null
    message: string
    scheduledAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    templateId?: string | null
  }

  export type CreditTransactionCreateManyUserInput = {
    id?: string
    type: $Enums.TransactionType
    creditType: $Enums.CreditType
    amount: number
    balanceAfter: number
    reason: string
    createdAt?: Date | string
  }

  export type AuditLogCreateManyUserInput = {
    id?: string
    action: string
    entity?: string | null
    entityId?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TemplateCreateManyUserInput = {
    id?: string
    name: string
    type: $Enums.CampaignType
    subject?: string | null
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleUpdateWithoutUserInput = {
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutUserInput = {
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleUncheckedUpdateManyWithoutUserInput = {
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactLists?: ContactListMemberUpdateManyWithoutContactNestedInput
    recipients?: CampaignRecipientUpdateManyWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactLists?: ContactListMemberUncheckedUpdateManyWithoutContactNestedInput
    recipients?: CampaignRecipientUncheckedUpdateManyWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactListUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactListMemberUpdateManyWithoutListNestedInput
  }

  export type ContactListUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactListMemberUncheckedUpdateManyWithoutListNestedInput
  }

  export type ContactListUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: TemplateUpdateOneWithoutCampaignsNestedInput
    recipients?: CampaignRecipientUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    recipients?: CampaignRecipientUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CreditTransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    creditType?: EnumCreditTypeFieldUpdateOperationsInput | $Enums.CreditType
    amount?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    creditType?: EnumCreditTypeFieldUpdateOperationsInput | $Enums.CreditType
    amount?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    creditType?: EnumCreditTypeFieldUpdateOperationsInput | $Enums.CreditType
    amount?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateManyRoleInput = {
    userId: string
  }

  export type UserRoleUpdateWithoutRoleInput = {
    user?: UserUpdateOneRequiredWithoutRolesNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutRoleInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ContactListMemberCreateManyContactInput = {
    listId: string
  }

  export type CampaignRecipientCreateManyContactInput = {
    id?: string
    status?: $Enums.RecipientStatus
    providerMessageId?: string | null
    errorMessage?: string | null
    sentAt?: Date | string | null
    deliveredAt?: Date | string | null
    createdAt?: Date | string
    campaignId: string
  }

  export type ContactListMemberUpdateWithoutContactInput = {
    list?: ContactListUpdateOneRequiredWithoutContactsNestedInput
  }

  export type ContactListMemberUncheckedUpdateWithoutContactInput = {
    listId?: StringFieldUpdateOperationsInput | string
  }

  export type ContactListMemberUncheckedUpdateManyWithoutContactInput = {
    listId?: StringFieldUpdateOperationsInput | string
  }

  export type CampaignRecipientUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRecipientStatusFieldUpdateOperationsInput | $Enums.RecipientStatus
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutRecipientsNestedInput
  }

  export type CampaignRecipientUncheckedUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRecipientStatusFieldUpdateOperationsInput | $Enums.RecipientStatus
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
  }

  export type CampaignRecipientUncheckedUpdateManyWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRecipientStatusFieldUpdateOperationsInput | $Enums.RecipientStatus
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
  }

  export type ContactListMemberCreateManyListInput = {
    contactId: string
  }

  export type ContactListMemberUpdateWithoutListInput = {
    contact?: ContactUpdateOneRequiredWithoutContactListsNestedInput
  }

  export type ContactListMemberUncheckedUpdateWithoutListInput = {
    contactId?: StringFieldUpdateOperationsInput | string
  }

  export type ContactListMemberUncheckedUpdateManyWithoutListInput = {
    contactId?: StringFieldUpdateOperationsInput | string
  }

  export type CampaignCreateManyTemplateInput = {
    id?: string
    name: string
    type: $Enums.CampaignType
    status?: $Enums.CampaignStatus
    subject?: string | null
    message: string
    scheduledAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type CampaignUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCampaignsNestedInput
    recipients?: CampaignRecipientUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    recipients?: CampaignRecipientUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CampaignRecipientCreateManyCampaignInput = {
    id?: string
    status?: $Enums.RecipientStatus
    providerMessageId?: string | null
    errorMessage?: string | null
    sentAt?: Date | string | null
    deliveredAt?: Date | string | null
    createdAt?: Date | string
    contactId: string
  }

  export type CampaignRecipientUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRecipientStatusFieldUpdateOperationsInput | $Enums.RecipientStatus
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: ContactUpdateOneRequiredWithoutRecipientsNestedInput
  }

  export type CampaignRecipientUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRecipientStatusFieldUpdateOperationsInput | $Enums.RecipientStatus
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactId?: StringFieldUpdateOperationsInput | string
  }

  export type CampaignRecipientUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRecipientStatusFieldUpdateOperationsInput | $Enums.RecipientStatus
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactId?: StringFieldUpdateOperationsInput | string
  }



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