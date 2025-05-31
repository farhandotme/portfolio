FROM node:20

WORKDIR /app

# Install dependencies first (leveraging Docker cache)
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the default Vite dev server port
EXPOSE 5173

# Set environment variable to accept connections from all interfaces
ENV HOST=0.0.0.0

# Start Vite dev server
CMD ["npm", "run", "dev", "--", "--host"]