import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "b9b70abe7ae958f0c414aa0f75d59edc";

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error:undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;


      if(city){
        const api_url = await
         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
           const data = await api_url.json();

          var sunset = data.sys.sunset;
          var date = new Date();
          date.setTime(sunset);
          var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

       this.setState({
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          pressure: data.main.pressure,
          sunset: sunset_date,
          error:undefined

       });
     } else{
       this.setState({
         temp: undefined,
         city: undefined,
         country: undefined,
         pressure: undefined,
         sunset: undefined,
         error:"Enter city name"
     });
   }

  }
  render() {
    return(
      <div className="wrapper">
      <div className = "main">
       <div className = "container">
       <div className = "row">
        <div className = "col-sm-5 info">
            <Info />
        </div>
          <div className = "col-sm-7 form">
        <Form weatherMethod={this.gettingWeather} />
        <Weather
          temp = {this.state.temp}
          city = {this.state.city}
          country = {this.state.country}
          pressure = {this.state.pressure}
          sunset = {this.state.sunset}
          error = {this.state.error}
         />
        </div>
       </div>
      </div>
    </div>
    </div>
    );
  }
}

export default App;
