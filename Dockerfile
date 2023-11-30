  # Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Define environment variables (adjust as needed)
ENV MONGO_URI=mongodb://mongo:27017/plandoDatabase
ENV NODE_ENV=production

# Start the Nest.js application
CMD ["npm", "run", "start:prod"]
