const axios = require("axios");
const getWord = async (req, res) => {
    const { word } = req.query;
    console.log(word);
   

    try {
        const response = await axios.get(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching word data:", error);
        res.status(500).json({ error: "Failed to fetch word data" });
    }
};

module.exports = { getWord };
