# build stage
FROM node:14.17.6 as build-stage

WORKDIR /src
COPY /web/package*.json ./
COPY /web/yarn.lock ./
RUN yarn
COPY /web/. .

RUN yarn build

# production stage
FROM nginx:stable-alpine as production-stage

## Remove default nginx website, make default.conf writable by OpenShift's user
RUN set -x \
	&& rm -rf /usr/share/nginx/html/* \
	&& chmod go+w /etc/nginx/conf.d/default.conf \
	&& chmod -R 777 /var/log/nginx /var/cache/nginx/ /etc/nginx/nginx.conf /var/run \
	&& chown -R 1001:0 /var/cache/nginx /var/log/nginx /etc/nginx/nginx.conf /var/run


COPY --from=build-stage /src/dist /usr/share/nginx/html
COPY --from=build-stage /src/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]