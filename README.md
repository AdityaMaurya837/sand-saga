# sand-saga
Sand Saga - powered by Sandcup is a creative platform that brings stories to life. We host inspiring design sessions, share innovative ideas, and collaborate to build engaging experiences. Our mission is to spotlight creativity, empower designers, and transform concepts into impactful realities, one session at a time.

## Deployment

### Using Docker

1. **Build the Docker image:**
   ```bash
   docker build -t sand-saga:latest .
   ```

2. **Run the container:**
   ```bash
   docker run -d -p 3000:80 --name sand-saga-app sand-saga:latest
   ```

3. **Access the app:**
   Open http://localhost:3000 in your browser

4. **Stop the container:**
   ```bash
   docker stop sand-saga-app
   docker rm sand-saga-app
   ```

### Using npm

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm start
   ```

3. **Access the app:**
   Open http://localhost:3000 in your browser
