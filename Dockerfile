FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the working directory
COPY package.json yarn.lock ./

# Install dependencies using yarn
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose the port that the Next.js application runs on
EXPOSE 3000

# Build and start the Next.js application
CMD yarn build && yarn start
