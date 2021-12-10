# License

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)


## Introduction

This repo represents all deliverables from an AOT Technologies Codechallenge participation to the reponse to the BC DevExchange code challenge guidlines.

## Repo Structure

The following files/folders represent the main repository structure.
```
.
├── README.md
├── LICENSE
├── docker-compose.yml
├── api
    ├── Dockerfile
    └── src
└── web
    ├── README.md
    ├── Dockerfile
    ├── src
    └── tests
```
* `api` directory: Api is an Node.js application and runs a backend functionality and will be an dockerized application. Directory consists of Dockerfile, application source code and unit tests.
* `web` directory: Frontend Vue application. Directory consists of Dockerfile, application source code and unit tests.

## Local

#### Prequisites

  * As prerequistes for local deployment, you require docker and docker-compose and git cli. Please follow links to install instructions.
  * Docker Installation: [Docker installation Instructions](https://docs.docker.com/compose/install/)
  * Docker Compose Installation: [Docker Compose Instructions](https://docs.docker.com/compose/install/)
  * Git Installation: [Git Installation Instructions](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/)
    
  For local deployment, clone the github repository and execute the following docker-compose command:

  ```
  docker-compose up -d
  ```

  in your browser open:

  http://localhost:8080/