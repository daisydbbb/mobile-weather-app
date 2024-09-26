import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Keyboard,
  ImageBackground,
} from "react-native";

import axios from "axios";
import styles from "./styles";

export default function App() {
  const [data, setData] = useState<any>({});
  const [location, setLocation] = useState("");
  const [forecast, setForecast] = useState<any>({});
  const [errorMessage, setErrorMessage] = useState("");

  const API_key = "c6b32155da8f723b0a6fc3eb7cadb775";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_key}`;
  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_key}`;

  const searchLocation = () => {
    setErrorMessage("");
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        Keyboard.dismiss(); // Close keyboard after search
      })
      .catch(() => {
        setData({});
        setErrorMessage("Invalid city name. Please try again.");
      });

    axios
      .get(forecastURL)
      .then((response) => {
        setForecast(response.data);
      })
      .catch(() => {
        setForecast({});
        setErrorMessage("Invalid city name. Please try again.");
      });

    setLocation("");
  };

  return (
    <ImageBackground
      source={require("./assets/background.png")}
      style={styles.backgroundImage}
    >
      <ScrollView style={styles.container}>
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            value={location}
            onChangeText={setLocation}
            onSubmitEditing={searchLocation}
            placeholder="Enter Location"
            placeholderTextColor="#fff"
          />
        </View>

        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}

        <View style={styles.top}>
          {data.name && (
            <>
              <Text style={styles.location}>{data.name}</Text>
              <Text style={styles.temp}>
                {data.main
                  ? `${(((data.main.temp - 273.15) * 9) / 5 + 32).toFixed()}°F`
                  : null}
              </Text>
              <Text style={styles.description}>
                {data.weather ? data.weather[0].main : null}
              </Text>
            </>
          )}
        </View>

        {forecast.city && (
          <View style={styles.middle}>
            <Text style={styles.forecastTitle}>Forecast</Text>
            {forecast.list.slice(0, 7).map((item: any) => (
              <View key={item.dt_txt} style={styles.forecastItem}>
                <Text style={styles.time}>{item.dt_txt.slice(5, 16)}</Text>
                <Text style={styles.forecastTemp}>
                  {(((item.main.temp - 273.15) * 9) / 5 + 32).toFixed()}°F
                </Text>
                <Text style={styles.forecastWeather}>
                  {item.weather[0].main}
                </Text>
              </View>
            ))}
          </View>
        )}

        {data.main && (
          <View style={styles.bottom}>
            <View style={styles.detailBox}>
              <Text style={styles.bold}>
                {(((data.main.feels_like - 273.15) * 9) / 5 + 32).toFixed()}°F
              </Text>
              <Text>Feels Like</Text>
            </View>
            <View style={styles.detailBox}>
              <Text style={styles.bold}>{data.main.humidity}%</Text>
              <Text>Humidity</Text>
            </View>
            <View style={styles.detailBox}>
              <Text style={styles.bold}>{data.wind.speed.toFixed()} MPH</Text>
              <Text>Wind Speed</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </ImageBackground>
  );
}
