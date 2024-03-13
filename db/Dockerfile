FROM alpine:latest
 
RUN apk update && apk add postgresql

COPY crontab /etc/crontabs/root

COPY script.sh /script.sh
RUN chmod +x /script.sh

# start crond with log level 8 in foreground, output to stderr
CMD ["crond", "-f", "-d", "8"]
