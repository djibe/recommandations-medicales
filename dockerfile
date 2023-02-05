FROM nginx:alpine

LABEL version="0.1" maintainer="JB Fron" description="recomedicales self-hosting"

COPY /public /usr/share/nginx/html

WORKDIR /usr/share/nginx/html

EXPOSE 80