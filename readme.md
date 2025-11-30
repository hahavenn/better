# Better

Some useful tool in progress

## Development

Step guide how to start development

> You must have installed [`NodeJS`](https://nodejs.org/en/download) and `npm` for running this project (docker images doesn't created yet)

### Install dependencies

You can install dependencies by executing

```
npm i
```

### Setup database file

By now you don't have database file (SQLite database used). So you need to create one

1. Run

```
npm run scripts:dev:dbInit
```

2. Choose by keyboard arrows `Yes, I want to execute all statements`. By doing this SQLite init database

### Start development

Start development by executing

```
npm run dev
```

### Read docs about working in project

When project instance is running by `npm run dev` command, you can visit [`http://localhost:3001/docs/`](http://localhost:3001/docs/) to read docs about project

Now you can access project on [`http://localhost:3000/`](http://localhost:3000/)

## FAQ

### Can it be achieved by simply running docker container?

Yes, i plan to add docker for development and production shipping
