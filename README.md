# Beyond Boring Proxy Server

A Node.js proxy server built to support the Beyond Boring browser extension by handling API requests for various widgets.

## Features

- Weather data fetching using OpenWeather API
- News headlines fetching using NewsAPI
- Philosophical quotes fetching from Philosophy API
- CORS enabled for cross-origin requests

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your API keys:
```
WEATHER_API_KEY=your_openweather_api_key
NEWS_API_KEY=your_newsapi_key
PORT=3000 # Optional, defaults to 3000
```

4. Start the server:
- Development mode (with hot reload):
```bash
npm run dev
```
- Production mode:
```bash
npm start
```

## API Endpoints

### Weather
```
GET /api/weather?lat={latitude}&lon={longitude}
```
Returns current weather data for the specified coordinates.

### News
```
GET /api/news?category={category}
```
Returns top headlines for the specified news category.

### Quotes
```
GET /api/quote
```
Returns a random philosophical quote.

## Tech Stack

- Node.js
- Express.js
- Axios for HTTP requests
- CORS for cross-origin resource sharing
- dotenv for environment variable management
- nodemon for development

## Project Structure

```
├── src/
│   ├── controllers/    # Request handlers
│   ├── routes/        # API routes
│   ├── utils/         # Utility functions
│   └── app.js         # Express app configuration
├── server.js          # Server entry point
├── package.json
└── .env              # Environment variables (not in repo)
```
