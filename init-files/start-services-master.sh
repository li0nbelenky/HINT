#!/usr/bin/env bash
docker rm -f hint-web-server
docker rm -f hint-web
docker pull ironsource/hint-web-server:master
docker pull ironsource/hint-web:master
docker run -d -p 8000:8000 --name web-server ironsource/hint-web-server:master
docker run -d -p 3000:3000 --name hint-web ironsource/hint-web:master