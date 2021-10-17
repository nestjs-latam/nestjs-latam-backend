# Stage build
FROM node:14-alpine AS build

WORKDIR /src

COPY package.json .

COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build accounts

RUN yarn install --production=true

# Stage deploy

FROM node:14-alpine as deploy

WORKDIR /app

RUN ls

COPY --from=build /src/dist/apps/accounts/main.js main.js
COPY --from=build /src/node_modules node_modules

ENTRYPOINT ["node", "main.js"]