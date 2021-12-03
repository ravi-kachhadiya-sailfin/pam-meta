FROM nginx:1.19.6-alpine@sha256:01747306a7247dbe928db991eab42e4002118bf636dd85b4ffea05dd907e5b66
COPY ./build /usr/share/nginx/html