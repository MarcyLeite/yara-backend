FROM node:latest

COPY dist /opt/yara-backend
WORKDIR /opt/yara-backend

EXPOSE 8080
RUN npm i --omit=dev
CMD ["node", "main.js"]