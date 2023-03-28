FROM node:14-alpine
WORKDIR /the/workdir/path
ADD package.json package.json
RUN npm instal
ADD . .
ENV NODE_ENV production
RUN npm run build
RUN npm prune --production
CMD ["npm", "start"]
EXPOSE 3000