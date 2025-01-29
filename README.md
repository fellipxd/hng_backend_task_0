# HNG Stage 0 Backend Task

A REST API that returns basic information including email, current datetime, and GitHub URL. This project is built with TypeScript and Express.js

## Features

- Returns basic information in JSON format
- Handles CORS for cross-origin requests
- Provides accurate UTC timestamps
- Fast response time (< 500ms)
- TypeScript implementation for type safety

## API Specification

### Endpoint

```
GET /userDetails
```

### Response Format

```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/fellipxd/hng_backend_task_0.git"
}
```

### Status Codes

- 200: Successful request
- 500: Server error

## Local Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/fellipxd/hng_backend_task_0.git
   cd your-repo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Deployment

The API is deployed at: [https://hng-backend-task-0.vercel.app/](https://hng-backend-task-0.vercel.app/)

## Technology Stack

- TypeScript
- Express.js
- Node.js
- CORS middleware

If you're interested in working with developers skilled in TypeScript or Node.js, you can visit this [link](https://hng.tech/hire/nodejs-developers) for more information 
