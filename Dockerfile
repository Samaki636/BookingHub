# syntax=docker/dockerfile:1
ARG NODE_VERSION=22.13.1

# --- Build Stage ---
FROM node:${NODE_VERSION}-slim AS builder
WORKDIR /usr/src/app

# Install dependencies (with cache and bind mounts for speed)
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci

# Copy the rest of the application source code
COPY . .

CMD ["sh", "-c", "npm run dev"]