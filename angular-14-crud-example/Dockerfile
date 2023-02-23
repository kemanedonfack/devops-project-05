FROM node:14.9.0
WORKDIR /app
COPY . .
RUN npm install -g @angular/cli
RUN ng build --prod
FROM nginx:stable-alpine
COPY --from=0 /app/dist/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
