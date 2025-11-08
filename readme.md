# Better

Some useful tool in progress

## Development

Step guide how to start development

### Install dependencies

You can install dependencies by executing `npm i`

### Setup database file

By now you don't have database file (SQLite database used). So you need to create one

1. Run `npm run scripts:dev:dbInit`
2. Choose by keyboard arrows `Yes, I want to execute all statements`. By doing this SQLite init database

### Start development

Start development by executing `npm run dev`. Now you can access project on `http://localhost:3000/`

### Run tests

To run tests - make sure you have running dev server via `npm run dev` with initialized database. After confirming it - run in second terminal `npm run test`. Edit/create/delete your tests!

## FAQ

### Why so complex development process?

Because Nitro doesn't have proper way to test their api's. By doing this complex manipulations - we run our server to create possibility for testing api's

Also i want to mention, that i only started to writing tests and test process can be reworked and optimized in future. This is my first time for creating production-like project with Nuxt with different tools by myself without examples of how to do it properly

### Can it be achieved by simply running docker container?

Yes, i plan to add docker for development and production shipping
