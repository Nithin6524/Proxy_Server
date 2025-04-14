const axios = require("axios");
const { WORD_API_KEY } = require("../utils/apiKeys");
const getWord = async (req, res) => {
    const { word } = req.query;
    console.log(word);
    const options = {
        method: "GET",
        url: "https://mashape-community-urban-dictionary.p.rapidapi.com/define",
        params: { term: word },
        headers: {
            "x-rapidapi-key": "2de6bb6c67msh82e11cab38d55d2p1fb399jsn703f43568794",
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
