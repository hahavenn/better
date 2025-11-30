# package.json scripts

These scripts can be run by this command:

```
npm run <script_name>
```

where `<script_name>` is name of script, listed below

List of written `package.json` scripts:

- `build` -> Please see [`Nuxt docs`](https://nuxt.com/docs/4.x/api/commands/build) about ``build` script
- `dev` -> Start development process with running project and Vitepress docs
- `generate` -> Please see [`Nuxt docs`](https://nuxt.com/docs/4.x/api/commands/generate) about `generate` script
- `preview` -> Please see [`Nuxt docs`](https://nuxt.com/docs/4.x/api/commands/preview) about `preview` script
- `postinstall` -> Please see [`Nuxt docs`](https://nuxt.com/docs/4.x/api/commands/prepare) about `postinstall` script
- `docs:dev` -> Runs Vitepress instance on [`http://localhost:3001/docs/`](http://localhost:3001/docs/)
- `docs:build` -> Please see [`Vitepress docs`](https://vitepress.dev/reference/cli#vitepress-build) about `build` script
- `docs:preview` -> Please see [`Vitepress docs`](https://vitepress.dev/reference/cli#vitepress-preview) about `preview` script
- `scripts:dev:db:init` -> Re-int SQLite dev database
- `scripts:dev:db:rm"` -> Remove dev database
- `scripts:env:jwtSecret` -> Generates random JWT secret key for signing and verifying tokens
- `test` -> Run test process with Vitest
