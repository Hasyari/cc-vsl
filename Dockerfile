# Use the official Node.js image with version 18
FROM node:18.16.0

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the specified port
EXPOSE 8000

# Copy the environment file to the working directory
COPY .env .env

# Set environment variables from the environment file
ENV NODE_ENV=production

# Start the application
CMD ["npm", "start"]
