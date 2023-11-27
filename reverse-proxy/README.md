# Node.js Application with Docker and Nginx

This repository contains a simple Node.js application Dockerized with Nginx as a reverse proxy. 
The setup includes a Dockerfile for the Node.js app, an Nginx configuration file, and a Docker Compose file for easy orchestration.

# Start setup:
chmod +x start_setup.sh
./start_setup.sh

# Access the application:

Open your browser and visit http://localhost:8080.

# Test Nginx Round-Robin Load Balancing:

Reload http://localhost:8080 multiple times. 
Observe that Nginx is hitting the Node.js server in a round-robin manner, distributing requests among the available Node.js containers.
