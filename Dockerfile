FROM mcr.microsoft.com/devcontainers/typescript-node:22 AS development

WORKDIR /code
COPY ./package.json /code/package.json
COPY ./yarn.lock /code/yarn.lock

RUN yarn install --frozen-lockfile
COPY . /code

ENV CI=true
ENV PORT=3000

CMD [ "yarn", "start" ]

FROM development AS dev-envs
RUN <<EOF
apt-get update
apt-get install -y git
EOF

RUN <<EOF
useradd -s /bin/bash -m vscode
groupadd docker
usermod -aG docker vscode
EOF
# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /
CMD [ "yarn", "start" ]