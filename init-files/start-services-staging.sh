#!/usr/bin/env bash
docker login -u ironsrcci -p 6f3TqGoqmj
docker rm -f web-server
docker pull ironsource/hint-web-server:staging
docker run -d --network hintnet -p 8000:8000 -e NODE_ENV=staging --name web-server ironsource/hint-web-server:staging