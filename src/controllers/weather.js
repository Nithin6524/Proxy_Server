const axios = require("axios");
const { WEATHER_API_KEY } = require("../utils/apiKeys");

const getWeather = async (req, res) => {
    const { lat, lon } = req.query;
   try {
      const response = await axios.get(
         `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
      );
      res.json(response.data);
   } catch (error) {
      console.error("Error fetching weather data:", error);
      res.status(500).json({ error: "Failed to fetch weather data" });
   }
};

module.exports = { getWeather };
