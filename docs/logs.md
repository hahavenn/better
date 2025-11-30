# Logs

As underlying library for logging used [`Pino logger`](https://getpino.io/#/)

## Supported errors to log

Project can have different errors. So by this reason - used multiple instances of pino for logging. Current list of created loggers:

- All errors, eg, 'Fatal errors'
- SQLite

## Logs' location

When server instance is initialized - pino creates folder for logs. Location -> `logs/` at the root of project. Directory with logs is ignored by git

## Log types

All log types are placed in [`server/constants/logs.ts`](https://github.com/hahavenn/better/tree/main/server/constants/logs.ts) file

## Usage

```typescript
logger(error, {
  type: isSQLiteError(error) ? LOG_TYPES.SQLITE : undefined,
});
```

## Logger options

<<< ../server/utils/logger.ts#loggerOptions

## Logger definition

<<< ../server/utils/logger.ts#logger
