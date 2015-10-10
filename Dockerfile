FROM hypriot/rpi-node:0.12.0

RUN apt-get update && \
apt-get install -y git-core zip && \
apt-get clean

WORKDIR /opt/coder/
RUN git clone https://github.com/googlecreativelab/coder.git .
RUN ls -la && pwd

WORKDIR /opt/coder/coder-apps
RUN ./install_common.sh ../coder-base

WORKDIR /opt/coder/coder-base
RUN npm install

COPY config.js /opt/coder/coder-base/config.js
#EXPOSE 80 443
EXPOSE 8080 8081
CMD ["node","server.js"]
