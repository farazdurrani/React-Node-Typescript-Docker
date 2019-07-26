# Localized Development

Use Docker to standup a localized development environment

## Build, Run, Mount

### Easiest Way 

Use Docker Compose to build, run, and mount the image. Docker compose will read DockerFile for build instructions and docker-compose.yml to run and mount the image.

```
$ docker-compose up
```

## SSH Login

Identify your docker container ID

```
$ docker ps
CONTAINER ID        IMAGE                           COMMAND                  CREATED             STATUS              PORTS                  NAMES
9a975fdc99ae        aim-web-sandbox_web   "/bin/sh -c '/bin/ba…" aim-web-sandbox_web_1
```

Docker exec can attach you to an existing container by ID

```
$ docker exec -ti 9a975fdc99ae /bin/bash
root@9a975fdc99ae:/#
```

## Browser

```
$ open http://localhost:9001/
```

## IDE Support

Use whatever IDE you prefer, the application code is mounted into the docker container. 

## AWS Support

We also mount your ~/.aws directory into the docker container.
The application should expect to use credentials in your AWS home directory.
