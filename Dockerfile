FROM node:latest AS build

COPY . /yara-backend
WORKDIR /yara-backend

RUN npm i
RUN npm run build

FROM node:latest AS production

COPY --from=build /yara-backend/dist /opt/yara-backend
WORKDIR /opt/yara-backend

EXPOSE 8080
RUN npm i --omit=dev
CMD ["node", "main.js"]