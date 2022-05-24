import React, {useState} from "react";
import axios from "axios";

function App() {

  // Init of the data with an empty object.
  const [data, setData] = useState({});
  // Init of the city name with an empty string.
  const [location, setLocation] = useState("");
  // Init of the url that will be used to handle the api calls.
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=d59f83d191e3f6782019b76dbccc34ad&lang=de`;

  // Will handle the api call with help of axios.
  const searchLocation = (event) => {
    if(event.key === "Enter") {
      axios.get(apiUrl).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input 
          type="text"
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Stadt eingeben..."
        ></input>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>
        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Gefühlt</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Feuchtigkeit</p>
            </div>
            <div className="wind">
              {data.wind ? <p className="bold">{data.wind.speed.toFixed()} km/h</p> : null}
              <p>Windstärke</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
