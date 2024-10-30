# thez0ne

A personal portfolio website made using NextJS, along with nginx and docker for easier deployment

## Subprojects

- client: the main portfolio web page
- db: container with env and custom scripts for the main Postgresql database
- nginx: container with the nginx configurations for deployment
- carbon: git submodule of a real time chat application

## Getting Started

To clone with the submodules run `git clone --recursive`

Then run `docker compose up` to spin up all the docker containers
WARNING: the nginx container will crash because it will not find the ssl certification files in a dev environment, but this is not needed while developping locally
