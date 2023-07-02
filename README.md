# Boom Blitz
Projeto da disciplina de Projeto Integrado da UFES

-----------Normal

npx create-next-app --example api-routes api-routes-app

npm run dev

-----------DOCKER
start daemon:
$sudo service docker start



To run the Next.js project with docker-compose you will build the docker image and then run the container. To do this you will run:


$ COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build


You are instructing docker to use Buildkit which will speed up the docker build process. The command if ran successfully will finish up as follows:

Next.js Docker build with Docker compose and build kit
To run Next.js with Docker and docker-compose you can then run:


$ docker-compose up
It will show the same output as running the app without docker when you hit http://localhost:3000 on your favorite browser after docker-compose up runs without any error:
