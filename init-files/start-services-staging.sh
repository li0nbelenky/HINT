#!/usr/bin/env bash
docker login -u ironsrcci -p 6f3TqGoqmj
docker rm -f web-server
docker rm -f web-hint
docker pull ironsource/hint-web-server:staging
docker pull ironsource/hint-web:staging
docker run -d --network hintnet -p 8000:8000 --name web-server ironsource/hint-web-server:staging
docker run -d --network hintnet -p 3000:3000 --name web-hint ironsource/web-hint:staging