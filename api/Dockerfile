FROM node:14

# install dependencies
WORKDIR /app
COPY /api/package.json ./

RUN npm cache clean --force && npm install && \
	npm install -g npm-check-updates

COPY /api/. /app

RUN set -x \
	&& chmod -R 777 /app \
	&& chown -R 1001:0 /app 

ENV PORT 5000
EXPOSE 5000

# CMD [ "npm", "run", "build" ]
CMD [ "npm", "run", "dev" ]