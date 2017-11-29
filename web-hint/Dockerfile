FROM node:onbuild
ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}
#HEALTHCHECK --interval=1m --timeout=12s --retries=3 CMD curl --fail http://localhost:3000/health || exit 1