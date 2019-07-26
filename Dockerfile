FROM ubuntu:16.04

# Update the repository
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update

# Install necessary tools
RUN apt-get install -y vim curl sudo
RUN apt-get install -y apt-utils
RUN apt-get install -y apt-transport-https

# Download and Install Nginx
RUN apt-get install -y nginx=1.10.*

# Replace shell with bash so we can source files
RUN sudo rm /bin/sh && sudo ln -s /bin/bash /bin/sh

# Backup Default nginx site
RUN sudo mv /etc/nginx/sites-available/default /etc/nginx/sites-available/default-backup

# Copy nginx config
COPY resources/nginx/default /etc/nginx/sites-available/

# Copy Docker start.sh 
COPY resources/docker/start.sh /root/start.sh

ENV NODE_VERSION 8.9.4

# Download and Install Node.js / npm
RUN curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash \
    && export NVM_DIR="$HOME/.nvm" \
    && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" \
    && nvm install  $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# ENV NVM_DIR /usr/local/nvm # or ~/.nvm , depending
ENV NVM_DIR   /root/.nvm
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV NODE_BIN  $NVM_DIR/versions/node/v$NODE_VERSION/bin
ENV PATH      $NODE_BIN:$PATH

# Download and Install Yarn.js
RUN npm i -g yarn@1.6.0

EXPOSE 80

# Append "daemon off;" to the configuration file
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

ENTRYPOINT /bin/bash /root/start.sh;
