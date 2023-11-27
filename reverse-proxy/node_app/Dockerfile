# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the current directory contents to the container at /usr/src/app
COPY . .

# Define the command to run the app, allowing specifying the PORT as an environment variable
CMD ["sh", "-c", "node app.js $PORT"]

# Expose the port the app runs on
EXPOSE 9999

