# Project structure

This page contains info about project structure in general, some file-place rules, architecture and so on. Please see [`Nuxt directory structure docs`](https://nuxt.com/docs/4.x/directory-structure) for more details

[[toc]]

## .vscode/

Contains project settings for VScode extensions, snippets and .etc

[Source link](https://github.com/hahavenn/better/tree/main/.vscode)

## app/

Main directory of frontend application

[Source link](https://github.com/hahavenn/better/tree/main/app)

### assets/

Project's assets. Please see [`Nuxt's assets/ docs`](https://nuxt.com/docs/4.x/directory-structure/app/assets) for more details

[Source link](https://github.com/hahavenn/better/tree/main/app/assets)

#### css/

CSS assets (classes, variables, tailwind configuration). Please see [`Tailwind docs`](https://tailwindcss.com/docs/installation/using-vite) for more details. [Source link](https://github.com/hahavenn/better/tree/main/app/assets/css)

### components/

Vue components. Please see [`Nuxt's components/ docs`](https://nuxt.com/docs/4.x/directory-structure/app/components) for more details

[Source link](https://github.com/hahavenn/better/tree/main/app/components)

### composables/

Vue composables. Please see [`Nuxt's composables/ docs`](https://nuxt.com/docs/4.x/directory-structure/app/composables) for more details

[Source link](https://github.com/hahavenn/better/tree/main/app/composables)

### constants/

Frontend constants

[Source link](https://github.com/hahavenn/better/tree/main/app/constants)

### hooks/

Frontend hooks

[Source link](https://github.com/hahavenn/better/tree/main/app/hooks)

### pages/

Project route pages. Please see [`Nuxt's pages/ docs`](https://nuxt.com/docs/4.x/directory-structure/app/pages) for more details

[Source link](https://github.com/hahavenn/better/tree/main/app/pages)

### plugins/

Nuxt plugins. Please see [`Nuxt's plugins/ docs`](https://nuxt.com/docs/4.x/directory-structure/app/plugins) for more details

[Source link](https://github.com/hahavenn/better/tree/main/app/plugins)

### stores/

Pinia stores. Please see [`Pinia docs`](https://pinia.vuejs.org/core-concepts/) for more details

[Source link](https://github.com/hahavenn/better/tree/main/app/stores)

### types/

Frontend types

[Source link](https://github.com/hahavenn/better/tree/main/app/types)

### utils/

Frontend utils. Please see [`Nuxt's utils/ docs`](https://nuxt.com/docs/4.x/directory-structure/app/utils) for more details

[Source link](https://github.com/hahavenn/better/tree/main/app/utils)

### app.vue

Entrance file to project. Please see [`Nuxt's app.vue docs`](https://nuxt.com/docs/4.x/directory-structure/app/app) for more details

[Source link](https://github.com/hahavenn/better/tree/main/app/app.vue)

## docs/

Project docs files. Please see [`Vitepress docs`](https://vitepress.dev/guide/what-is-vitepress) for more details

[Source link](https://github.com/hahavenn/better/tree/main/docs)

### .vitepress/

Vitepress project-core directory with configuration

[Source link](https://github.com/hahavenn/better/tree/main/docs/.vitepress)

#### theme/

Vitepress theme configuration. Please see [`Vitepress custom theme docs`](https://vitepress.dev/guide/custom-theme) for more details

[Source link](https://github.com/hahavenn/better/tree/main/docs/.vitepress/theme)

#### config.ts

Vitepress main configuration file. Please see [`Vitepress configuration file docs`](https://vitepress.dev/guide/getting-started#the-config-file) for more details

[Source link](https://github.com/hahavenn/better/tree/main/docs/.vitepress/config.ts)

### public/

Vitepress public files

[Source link](https://github.com/hahavenn/better/tree/main/docs/public)

### tsconfig.json

Tsconfig for `docs/` ts-files

[Source link](https://github.com/hahavenn/better/tree/main/docs/tsconfig.json)

## logs/

Directory, that contains all logs, that writes by server (available in sidebar). Doesn't tracked by git. For logs types please see -> [`server/utils/logger.ts`](https://github.com/hahavenn/better/tree/main/server/utils/logger.ts), [`server/constants/logs.ts`](https://github.com/hahavenn/better/tree/main/server/constants/logs.ts), [`Pino docs`](https://getpino.io/#/) for more info

## public/

Project public files. Please see [`Nuxt's public/ docs`](https://nuxt.com/docs/4.x/directory-structure/public) for more details

[Source link](https://github.com/hahavenn/better/tree/main/public)

## scripts/

Project NodeJS scripts (available in sidebar)

[Source link](https://github.com/hahavenn/better/tree/main/scripts)

### tsconfig.json

Tsconfig for `scripts/` ts-files

[Source link](https://github.com/hahavenn/better/tree/main/scripts/tsconfig.json)

## server/

Nitro's backend server. Please see [`Nitro's docs`](https://nitro.build/guide) for more details

[Source link](https://github.com/hahavenn/better/tree/main/server)

### api/

Project API-endpoint. Please see [`Project's Endpoints OpenAPI`](http://localhost:3000/swagger) for more info

[Source link](https://github.com/hahavenn/better/tree/main/server/api)

### constants/

Backend constants

[Source link](https://github.com/hahavenn/better/tree/main/server/constants)

### db/

Drizzle ORM and database's files. Please see [`Drizzle ORM docs`](https://orm.drizzle.team/docs/get-started) for more details

[Source link](https://github.com/hahavenn/better/tree/main/server/db)

#### schema/

Drizzle ORM schema files, that describe database tables. Please see [`Drizzle ORM schema docs`](https://orm.drizzle.team/docs/sql-schema-declaration) for more details

[Source link](https://github.com/hahavenn/better/tree/main/server/db/schema)

#### types/

Types of schema instances for better ts experience. Please see [`Drizzle ORM release notes`](https://orm.drizzle.team/docs/latest-releases/drizzle-orm-v0283#-added-tableinferselect--table_inferselect-and-tableinferinsert--table_inferinsert-for-more-convenient-table-model-type-inference) for more details

[Source link](https://github.com/hahavenn/better/tree/main/server/db/types)

#### index.ts

Connection file between Drizzle ORM and database. Please see [`SQLite + Drizzle`](https://orm.drizzle.team/docs/get-started/sqlite-new) for more details

[Source link](https://github.com/hahavenn/better/tree/main/server/db/index.ts)

### utils/

Backend server utils

[Source link](https://github.com/hahavenn/better/tree/main/server/utils)

### zod/

Zod schema files for validating incoming data to backend server. Please see [`Zod docs`](https://zod.dev/) for more details

[Source link](https://github.com/hahavenn/better/tree/main/server/zod)

## shared/

Shared functionality between frontend and backend. Please see [`Nuxt's shared/ docs`](https://nuxt.com/docs/4.x/directory-structure/shared) for more details

[Source link](https://github.com/hahavenn/better/tree/main/shared)

## tests/

Vitest tests for project. Please see [`Vitest docs`](https://vitest.dev/guide/) for more details

[Source link](https://github.com/hahavenn/better/tree/main/tests)

### api/

Tests for backend API endpoints

[Source link](https://github.com/hahavenn/better/tree/main/tests/api)

### helpers/

Helpers for writing tests (db reset, user sign and etc.)

[Source link](https://github.com/hahavenn/better/tree/main/tests/helpers)

### globalSetup.ts

Global setup and teardown functions for better test performance. Please see [`Vitest globalSetup docs`](https://vitest.dev/config/globalsetup.html) for more details

[Source link](https://github.com/hahavenn/better/tree/main/tests/globalSetup.ts)

### tsconfig.json

Tsconfig for `tests/` ts-files

[Source link](https://github.com/hahavenn/better/tree/main/tests/tsconfig.json)

## .env.example

`.env` file for development purposes and for list of env variables to define

[Source link](https://github.com/hahavenn/better/tree/main/.env.example)

## .gitignore

Git-ignore file for whole project. Please see [`Git docs about .gitignore`](https://git-scm.com/docs/gitignore) for more details

[Source link](https://github.com/hahavenn/better/tree/main/.gitignore)

## .prettierrc.json

Configuration for Prettier formatter. Please see [`Prettier docs`](https://prettier.io/docs/) for more details

[Source link](https://github.com/hahavenn/better/tree/main/.prettierrc.json)

## .dev.db

Dev database file. Used only for development due continuous changes and resets. Doesn't tracked by git

## drizzle-dev.config.ts

Drizzle ORM config file. Please see [`Drizzle ORM config docs`](https://orm.drizzle.team/docs/drizzle-config-file) for more details

[Source link](https://github.com/hahavenn/better/tree/main/drizzle-dev.config.ts)

## LICENSE

Project's license file

[Source link](https://github.com/hahavenn/better/tree/main/LICENSE)

## nuxt.config.ts

Nuxt's config file. Please see [`Nuxt's config file docs`](https://nuxt.com/docs/4.x/directory-structure/nuxt-config) for more details

[Source link](https://github.com/hahavenn/better/tree/main/nuxt.config.ts)

## package-lock.json

Package-lock JSON file. Please see [`NPM docs`](https://docs.npmjs.com/cli/v8/configuring-npm/package-lock-json) for more details

[Source link](https://github.com/hahavenn/better/tree/main/package-lock.json)

## package.json

Package JSON file. Please see [`NPM docs`](https://docs.npmjs.com/cli/v8/configuring-npm/package-json) for more details

[Source link](https://github.com/hahavenn/better/tree/main/package.json)

## readme.md

Readme file for project. Contains information about running, project and etc

[Source link](https://github.com/hahavenn/better/tree/main/readme.md)

## tsconfig.base.json

Base tsconfig file with configured preferred options for typescript

[Source link](https://github.com/hahavenn/better/tree/main/tsconfig.base.json)

## vitest.config.ts

Vitest configuration file. Please see [`Vitest config docs`](https://vitest.dev/config/), [`Nuxt testing docs`](https://nuxt.com/docs/4.x/getting-started/testing) for more details

[Source link](https://github.com/hahavenn/better/tree/main/vitest.config.ts)
