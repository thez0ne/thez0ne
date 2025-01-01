FROM node:alpine

WORKDIR /app

RUN apk add --no-cache openssl

# RUN npm install --global pm2

COPY ./package*.json ./

RUN npm install --omit=dev

COPY ./ ./

# RUN npx prisma migrate deploy
RUN npx prisma generate

# RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start:docker" ]

# USER node

# CMD [ "pm2-runtime", "start", "npm", "--", "start" ]