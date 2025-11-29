# User

This article relates to user in project as entity with types, schemas and etc.

## Type definition

<<< ../../shared/types/user/index.ts

## Zod schema

Zod validation schema for request bodies

<<< ../../server/shared/zod/user.ts

## Database schema

Database schema for SQLite database

<<< ../../server/db/schema/users.ts

## Type for returning values from database

Used for typing value, that returns from querying from users table

<<< ../../server/db/types/users.ts
