#!/usr/bin/env bash
docker login -u ironsrcci -p 6f3TqGoqmj
docker rm -f hint-web-server
docker rm -f hint-web
docker pull ironsource/hint-web-server:master
docker pull ironsource/hint-web:master
docker run -d --network hintnet -p 8000:8000 --name web-server ironsource/hint-web-server:master
docker run -d --network hintnet -p 3000:3000 --name web-hint ironsource/web-hint:master