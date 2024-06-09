# build environment
FROM repo.ozonedev.ir/base/node:18-alpine as build
WORKDIR /app

COPY package.json yarn.lock /app/
RUN yarn

COPY src /app/src
COPY public /app/public
COPY . /app/

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

RUN yarn build

# production environment
FROM repo.ozonedev.ir/base/nginx:1.25-alpine
COPY deployment/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
