FROM node:latest
COPY . /app/
WORKDIR /app
RUN npm install
# Expose the port that your Node.js application listens on
EXPOSE 8080
CMD ["node", "server.js"]