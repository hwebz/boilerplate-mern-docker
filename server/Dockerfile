FROM node:14-alpine as builder

RUN mkdir -p /app/server
WORKDIR /app/server

COPY package* /app/server/

# Install the build requirements for bcrypt
RUN apk update && apk upgrade \
    && apk --no-cache add --virtual builds-deps build-base python \
    && npm install node-gyp node-pre-gyp

# Install dependencies
RUN npm install --production=true

# Copies the server files over
COPY . /app/server/

FROM node:14-alpine

# Create and set the working directory
RUN mkdir -p /app/server
WORKDIR /app/server

# Copy the server from the build container
COPY --from=builder /app/server /app/server

CMD ["node", "server.js"]