#!/usr/bin/env bash

cd /home/ubuntu/
git clone https://github.com/li0nbelenky/HINT.git
cd HINT/
git checkout staging
cd web-hint
npm i
npm start