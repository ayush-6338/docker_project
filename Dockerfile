# Step 1: Use Node image to build the app
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Use Nginx to serve the static files (better for production)
FROM nginx:stable-alpine
# Copy the 'dist' folder from the build step to Nginx's public folder
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]