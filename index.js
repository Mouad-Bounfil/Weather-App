const cities = [
    { name: 'New York', lat: 40.7128, lng: -74.0060 },
    { name: 'London', lat: 51.5074, lng: -0.1278 },
    { name: 'Paris', lat: 48.8566, lng: 2.3522 },
    { name: 'Tokyo', lat: 35.6895, lng: 139.6917 },
    { name: 'Sydney', lat: -33.8651, lng: 151.2099 },
    { name: 'Rome', lat: 41.9028, lng: 12.4964 },
    { name: 'Cairo', lat: 30.0444, lng: 31.2357 },
    { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
    { name: 'Dubai', lat: 25.2048, lng: 55.2708 },
    { name: 'Rabat', lat: 34.0209, lng: -6.8416 }
  ];

function selectRandomCity(cities) {
    const randomIndex = Math.floor(Math.random() * cities.length);
    return cities[randomIndex];
}
const axios = require('axios');


// Function to fetch temperature data for a city
async function fetchTemperature(city) {
  try {
    const apiKey = '8512ace236f2e8b19cf1850020425a66'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lng}&units=metric&appid=${apiKey}`;
    const response = await axios.get(apiUrl);
    
    if (response.status === 200) {
      const temperature =  response.data.main.temp;
      
      return temperature;
    } else {
      throw new Error('Failed to fetch data');
    }
  } catch (error) {
    throw error;
  }
}
// Function to fetch temperature data for a city
async function fetchTemperatureByCity(city) {
    try {
      const apiKey = '8512ace236f2e8b19cf1850020425a66'; // Replace with your OpenWeatherMap API key
      console.log(`https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${apiKey}`)
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${apiKey}`;
      
      const response = await axios.get(apiUrl);
      
      if (response.status === 200) {
        const temperature =  response.data.main.temp;
        
        return temperature;
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      throw error;
    }
  }

// Main function to fetch and display temperature data
async function main() {
  try {
    const selectedCity = selectRandomCity(cities);
    const temperature = await fetchTemperatureByCity(selectedCity);
    
    if (temperature !== undefined) {
      console.log(`Temperature in ${selectedCity.name}: ${temperature}°C`);
    } else {
      console.log('Failed to fetch temperature data.');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Call the main function
main();
