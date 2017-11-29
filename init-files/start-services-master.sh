#!/usr/bin/env bash
docker login -u ironsrcci -p 6f3TqGoqmj
docker rm -f web-server
docker rm -f web-hint
docker pull ironsource/hint-web-server:master
docker pull ironsource/hint-web:master
docker run -d --network hintnet -p 8000:8000 -e NODE_ENV=master --name web-server ironsource/hint-web-server:master
docker run -d --network hintnet -p 3000:3000 -e NODE_ENV=master --name web-hint ironsource/hint-web:master