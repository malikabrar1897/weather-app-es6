const apiKey = "YOUR_API_KEY";

const getWeather = async () => {

    const city = document.getElementById("city").value;

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);

        const data = await response.json();

        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const pressure = data.main.pressure;

        displayGraph(temperature, humidity, pressure);

    }

    catch(error) {
        alert("Error fetching weather data");
    }
};

const displayGraph = (temp, humidity, pressure) => {

    const ctx = document.getElementById("weatherChart");

    new Chart(ctx, {
        type: 'bar',

        data: {
            labels: ['Temperature', 'Humidity', 'Pressure'],

            datasets: [{
                label: 'Weather Data',
                data: [temp, humidity, pressure]
            }]
        }
    });
};