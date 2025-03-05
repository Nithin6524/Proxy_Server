const axios = require("axios");
const { NEWS_API_KEY } = require("../utils/apiKeys");
const getNews = async (req, res) => {
    try {
        const {country, category}=req.query;
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources?country=${country}&category=${category}&apiKey=${NEWS_API_KEY}`);
        res.json(response.data);
    } catch (error) {    
        console.error("Error fetching news data:", error);
        res.status(500).json({ error: "Failed to fetch news data" });
    }
};


module.exports = { getNews };