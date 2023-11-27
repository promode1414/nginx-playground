#!/bin/bash

# Go to the 'node_app' directory

cd node_app

# Build the Docker image for the Node.js app
docker build -t nodeapp .

# Return to the root directory
cd ..

# Start the Docker Compose setup
docker-compose up -d

