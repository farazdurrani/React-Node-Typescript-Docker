#!/bin/bash

cd /app/client;

nohup yarn run start &

cd /app/server;

nohup yarn run start &

service nginx start
