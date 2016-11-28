FROM nginx:alpine

RUN apk update \
    apk upgrade

ENV ma_app /var/www/fancybite_fe
RUN mkdir -p $ma_app
WORKDIR $ma_app

COPY ./nginx/nginx.prod.conf /etc/nginx/nginx.conf
COPY ./build/ .

CMD nginx
EXPOSE 80