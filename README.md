## Running the Project with Docker

This project is containerized using Docker and Docker Compose for streamlined development and deployment. Below are the project-specific instructions and requirements for running the application in a Dockerized environment.

### Requirements
- **Node.js Version:** 22.13.1 (as specified in the Dockerfile)
- **Docker** and **Docker Compose** installed on your system

### Environment Variables
- The application supports environment variables via a `.env` file. If you have environment-specific settings, create a `.env` file in the project root. Uncomment the `env_file` line in `docker-compose.yml` if you wish to use it.

### Build and Run Instructions
1. **Build and start the application:**
   ```sh
   docker-compose up --build
   ```
   This will build the Docker image and start the `typescript-app` service.

2. **Access the application:**
   - The app will be available at [http://localhost:3000](http://localhost:3000)

### Ports
- **3000:** Exposed by the `typescript-app` service for the Next.js application

### Special Configuration
- The Dockerfile uses a multi-stage build for optimized production images and creates a non-root user for security.
- Prisma client is generated during the build process (`npx prisma generate`).
- No external services (databases, caches) are configured by default. If you add such services, update `docker-compose.yml` accordingly.

---

*For more details on Docker usage, see `README.Docker.md`.*
