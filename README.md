# DMD Web - Full Stack Engineer Hiring Test

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

## Expectations

On bitbucket.org, create a private fork of this repository to preserve your confidentiality. Create a feature branch. Implement the frontend and backend requirements below. Out-of-box this project will have some defects in it, please fix them if they block you. All files can be modified in this project. When ready, please submit a PR for us to review. Please provide mfitzgerald_dmd read access to your private forked repository so we can review your pr.

### Frontend 

* Implement this [Product Mock](./docs/03_product_mock.pdf)
* Use Semantic UI for React https://react.semantic-ui.com/
* Demonstrate expert level knowledge of React.js with TypeScript
* Demonstrate expert level knowledge of Redux.js
* Implement Jest based unit test coverage of React components

### Backend

* Backend routes will be matched when the URL path starts with "/api"
* Use TypeORM and save the data to a SQLite database. http://typeorm.io/#/
* Demonstrate expert level knowledge of Express.js with TypeScript
* Implement Jest based unit test coverage 
* Implement Supertest based functional test coverage https://www.npmjs.com/package/supertest

## Docs

* [Localized Development](./docs/00_localized_development.md)
* [Dependencies](./docs/01_dependencies.md)
* [Usage](./docs/02_usage.md)
