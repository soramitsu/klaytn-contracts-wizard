FROM node:16 as build

WORKDIR /app

COPY . .

RUN yarn install
RUN cd packages/ui; yarn build

FROM nginxinc/nginx-unprivileged:1.23-alpine
COPY --from=build /app/packages/ui/public /usr/share/nginx/html
