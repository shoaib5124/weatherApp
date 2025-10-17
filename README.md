⚙️ Features

✅ Search weather by city name
✅ Shows temperature, humidity, and wind speed
✅ Displays weather icons (sunny, rainy, cloudy, etc.) dynamically
✅ Error handling for invalid or empty city names
✅ Detects network issues (shows warning if no internet)
✅ Secure API key handling using .env file
✅ Full-stack architecture (React + Node.js + API)

🧩 Tech Stack

Frontend: React.js, CSS, Tailwind (optional)
Backend: Node.js, Express.js
API: OpenWeatherMap API
Tools: Axios, dotenv, CORS, fetch

🏗️ Project Structure
weather-project/
│
├── weather_backend/
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── weather_frontend/
    ├── src/
    │   ├── App.js
    │   ├── App.css
    │   ├── images/
    │   │   ├── clear.png
    │   │   ├── clouds.png
    │   │   ├── drizzle.png
    │   │   ├── rain.png
    │   │   ├── snow.png
    │   │   ├── mist.png
    │   │   ├── humidity.png
    │   │   └── wind.png
    │   └── ...
    ├── package.json

🔑 Environment Variables

Create a .env file inside your backend folder (weather_backend) and add:

OPENWEATHER_KEY=your_api_key_here
PORT=5000


You can get your free API key from OpenWeatherMap
.

🚀 How to Run
1️⃣ Start Backend:
cd weather_backend
npm install
node server.js


✅ Server will run on http://localhost:5000

2️⃣ Start Frontend:
cd ../weather_frontend
npm install
npm start


✅ React app will run on http://localhost:3000

🌍 How It Works

User enters a city name in the React UI.

React sends a request → GET http://localhost:5000/weather?city={city}

Node backend receives it and calls OpenWeather API.

Backend sends weather data (temperature, humidity, wind, condition) to frontend.

React displays it beautifully with relevant icons.


💡 Future Enhancements

Add 5-day weather forecast

Show sunrise/sunset times

Add location-based auto-detection

Use dynamic background colors for different weather types

🧑‍💻 Author

Shoaib Ul Hassan
React + Node Developer
📫 [LinkedIn:https://www.linkedin.com/in/tarun-kaushik-553b441a4]
