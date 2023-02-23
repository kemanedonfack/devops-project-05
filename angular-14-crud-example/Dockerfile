# Étape 1 : Construction de l'application Angular
FROM node:14.18.1-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Étape 2 : Exécution de l'application
FROM nginx:1.21.3-alpine
COPY --from=build /app/dist/my-app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
