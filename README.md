<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Description

**jsm-nestjs** is a REST API built with [NestJS](https://github.com/nestjs/nest). It provides CRUD operations for users with input validation, API key authentication, role-based authorization, and a global response transformation layer.

## Features

- **User CRUD** – Create, read, update, and delete users (in-memory)
- **Input Validation** – `class-validator` + `ValidationPipe` on DTOs
- **API Key Authentication** – `ApiKeyMiddleware` checks `x-api-key` header
- **Role-based Guard** – `RoleGuard` restricts `DELETE /user` to `role: admin` header
- **Response Transformation** – `TransformInterceptor` wraps all responses in `{ statusCode, message, data }`
- **Logging** – Custom `LoggerService` for user service operations
- **Environment Config** – `@nestjs/config` with `.env` support

## Project setup

```bash
$ npm install
```

## Environment variables

Create a `.env` file in the project root:

```env
PORT=3000
API_KEY=your-secret-api-key
```

## Compile and run

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## API Endpoints

| Method   | Endpoint      | Auth               | Description        |
| -------- | ------------- | ------------------ | ------------------ |
| `GET`    | `/`           | —                  | Hello World        |
| `GET`    | `/user`       | API key            | List users         |
| `GET`    | `/user/:id`   | API key            | Get user by ID     |
| `POST`   | `/user`       | API key            | Create user        |
| `PUT`    | `/user/:id`   | API key            | Update user        |
| `DELETE` | `/user/:id`   | API key + `admin` role | Delete user    |

All `/user/*` routes require the `x-api-key` header. `DELETE /user/:id` additionally requires the `role: admin` header.

## License

UNLICENSED
