FROM    nginxinc/nginx-unprivileged:1.20
COPY    ./public/ui /usr/share/nginx/html
