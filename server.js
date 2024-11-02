const axios = require('axios');

// Add this route below existing routes in server.js
app.get('/weather', async (req, res) => {
    const { city, lat, lon } = req.query;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?${city ? `q=${city}` : `lat=${lat}&lon=${lon}`}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data from OpenWeatherMap API.');
    }
});
