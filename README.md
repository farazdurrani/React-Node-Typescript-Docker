Single page React.js / Node.js app for proof of concepts

## Installation

Before starting please install node@8.9.4 and yarn@1.6.0

Note: Need help setting up node, yarn: see [Dependencies](./docs/01_dependencies.md)

Clone with `git`, run `yarn`, start docker container

```
$ git clone [repo] 
$ cd client/
$ yarn install
$ cd ../server/
$ yarn install
$ cd ../
$ docker-compose up
```

Note: Need help installing docker: see https://docs.docker.com/v17.12/docker-for-mac/install/

Wait for the container to startup (first time startup is ~3min, subsequent container startups will be faster). After container starts, yarn will start the frontend and backend builds.

Upon completion of the builds, the app will be accessible here [http://localhost:9001/](http://localhost:9001/)

### Frontend 

* Implemented this [Product Mock](./docs/03_product_mock.pdf)
* Used Semantic UI for React https://react.semantic-ui.com/
* Demonstrated expert level knowledge of React.js with TypeScript
* Demonstrated expert level knowledge of Redux.js
* Implemented Jest based unit test coverage of React components

### Backend

* Backend routes will be matched when the URL path starts with "/api"
* Used TypeORM and save the data to a SQLite database. http://typeorm.io/#/
* Demonstrated expert level knowledge of Express.js with TypeScript
* Implemented Jest based unit test coverage 
* Implemented Supertest based functional test coverage https://www.npmjs.com/package/supertest

## Docs

* [Localized Development](./docs/00_localized_development.md)
* [Dependencies](./docs/01_dependencies.md)
* [Usage](./docs/02_usage.md)
