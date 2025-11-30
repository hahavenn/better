# Testing API

Testing API means, that test are sending requests to [`Nitro`](https://nitro.build/guide) server instance

Because nitro (on moment of writing this article and development API) doesn't have proper way to test API - some interesting details exists in testing API

## How to test endpoints

For proper testing endpoint you need to have running project instance. It can be easily achieved by running in terminal of project's root directory command:

```
npm run dev
```

After starting project instance you can perform testing and writing new tests. For it - run Vitest command in terminal of project's root directory:

```
npm run test
```

Now do regular testing routine by running and writing tests

## Helpers

Because we testing API functionality - out tests has constant data for operating with server. Here comes some issues. For example, when perform testing for sign up endpoint - we create user with defined credentials. But we can't create more than one user with defined login by restrictions of security. So we need to reset our database for testing API to be able to use same data

Here comes helpers, to work with API tests:

- [`tests/helpers/db/reset.ts`](https://github.com/hahavenn/better/tree/main/tests/helpers/db/reset.ts) -> Send request to reset all databases for correct testing process
- [`tests/helpers/user/signIn.ts`](https://github.com/hahavenn/better/tree/main/tests/helpers/user/signIn.ts) -> Sign in by provided user credentials
- [`tests/helpers/user/signUp.ts`](https://github.com/hahavenn/better/tree/main/tests/helpers/user/signUp.ts) -> Sign up by provided user credentials

For example, to reset database after testing - [`tests/helpers/db/reset.ts`](https://github.com/hahavenn/better/tree/main/tests/helpers/db/reset.ts) runs on `setup` and `teardown` stages of testing. Please see [`Vitest globalSetup docs`](https://vitest.dev/config/globalsetup.html) for more details

## For future

In future i want to create `docker-image` for make this process for one step without current overhead. Or if Nitro teams presents testing guide for endpoint - refactor to it, if it will be worth
