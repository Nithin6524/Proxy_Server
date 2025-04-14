const axios = require("axios");
const {WORD_API_KEY}=require("../utils/apiKeys");
const getWord = async (req, res) => {

    const { word } = req.query;
   const options = {
       method: "GET",
       url: "https://mashape-community-urban-dictionary.p.rapidapi.com/define",
       params: { term: word },
       headers: {
           "x-rapidapi-key":
               WORD_API_KEY,
           "x-rapidapi-host":
               "mashape-community-urban-dictionary.p.rapidapi.com",
       },
   };

    try {
        const response = await axios.request(options);
        res.json(response.data);
        
    } catch (error) {
        console.error("Error fetching word data:", error);
        res.status(500).json({ error: "Failed to fetch word data" });
    }
};

module.exports = { getWord };
