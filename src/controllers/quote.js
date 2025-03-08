const axios = require("axios");

const getquote = async (req, res) => {
    try {
        const response = await axios.get(
            "https://philosophyapi.pythonanywhere.com/api/ideas/1"
        );
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching quote data:", error);
        res.status(500).json({ error: "Failed to fetch quote data" });
    }
};

module.exports = { getquote };