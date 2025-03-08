const axios = require("axios");

const getBook = async (req, res) => {
    try {
        const bookId = req.params.id;
        const url = `https://www.gutenberg.org/cache/epub/${bookId}/pg${bookId}-images.html`;

        console.log(`Fetching book with ID: ${bookId}`);
        console.log(`Fetching URL: ${url}`);

        const response = await axios.get(url, {
            responseType: "text",
        });

        console.log(`Response Status: ${response.status}`);
        console.log(`Response Length: ${response.data.length}`);

        res.send(response.data);
    } catch (error) {
        console.error("Error fetching book data:", error.message);
        res.status(500).json({ error: "Failed to fetch book data" });
    }
};

module.exports = { getBook };
