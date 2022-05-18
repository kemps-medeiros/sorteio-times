FROM node:16-alpine

COPY docker-entrypoint.sh /

RUN chmod +x docker-entrypoint.sh

WORKDIR /frontend

ENTRYPOINT [ "/docker-entrypoint.sh" ]

CMD ["npm", "start"]

