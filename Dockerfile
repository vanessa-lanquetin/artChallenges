FROM alpine:3.12 as builder
RUN apk --no-cache add gcc g++ make python3 nodejs npm
WORKDIR /artchallenges
COPY . .
RUN npm i
RUN npm run build
RUN cd server && npm i 

FROM alpine:3.12
RUN apk --no-cache add nodejs
WORKDIR /artchallenges
COPY --from=builder /artchallenges/server .
CMD ["node", "server.js"]
