import React from "react";
import Day from "../src/Day";

class Weather extends React.Component {
  render() {
    console.log(this.props.weather);
    const {
      temperature_2m_max: max,
      temperature_2m_min: min,
      time: dates,
      weathercode: codes,
    } = this.props.weather;

    return (
      <div>
        <h2>Weather {this.props.displayLocation}</h2>
        <ul className="weather">
          {dates.map((date, i) => (
            <Day
              max={max.at(i)}
              min={min.at(i)}
              date={date}
              code={codes.at(i)}
              key={date}
              isToday={i === 0}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Weather;
