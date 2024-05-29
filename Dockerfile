# For local builds, use 'docker.arvancloud.ir' or 'registry.docker.ir' instead of 'repo.domain.ir'
FROM repo.domain.ir/node:20.10.0-alpine3.19

ARG NEXT_PUBLIC_API_URL=https://app.domain.com/api
ARG NEXT_PUBLIC_CLIENT_SECRET=OcitgYMMyLLvLpWcUNYC7sSvx0MDod6nYoDQb8cs
ARG NEXT_PUBLIC_CLIENT_ID=3

ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL \
    NEXT_PUBLIC_CLIENT_SECRET=$NEXT_PUBLIC_CLIENT_SECRET \
    NEXT_PUBLIC_CLIENT_ID=$NEXT_PUBLIC_CLIENT_ID \
    NEXT_PUBLIC_MAIN_URL="https://domain.com" \
    NEXT_PUBLIC_STORAGE_URL="https://storage.domain.com" \
    NEXT_PUBLIC_NESHAN_API_KEY="web.111111"

# Fix this in later releases
#ENV NODE_ENV=production

WORKDIR /opt/domain-ui

RUN chown node:node /opt/domain-ui

USER node

COPY --chown=node:node . .

RUN yarn install

RUN yarn run build

EXPOSE 3000

CMD ["yarn" , "start"]
