FROM    nginxinc/nginx-unprivileged:1.20
COPY    ./packages/ui/public /usr/share/nginx/html
