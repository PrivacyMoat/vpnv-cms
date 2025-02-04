# see versions at https://hub.docker.com/_/ghost
FROM ghost:5.75.2-alpine

WORKDIR $GHOST_INSTALL
COPY . .

ENTRYPOINT []
CMD ["./start.sh"]
