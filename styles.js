import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  search: {
    alignItems: "center",
    padding: 20,
    marginTop: 50,
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 20,
    color: "#fff",
    paddingLeft: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  errorMessage: {
    color: "red",
    fontSize: 18,
    textAlign: "center",
  },
  top: {
    alignItems: "center",
    marginVertical: 20,
  },
  location: {
    fontSize: 32,
    color: "#fff",
  },
  temp: {
    fontSize: 72,
    color: "#fff",
  },
  description: {
    fontSize: 24,
    color: "#fff",
  },
  middle: {
    padding: 20,
  },
  forecastTitle: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
  },
  forecastItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  time: {
    fontSize: 16,
    color: "#fff",
  },
  forecastTemp: {
    fontSize: 20,
    color: "#fff",
  },
  forecastWeather: {
    fontSize: 16,
    color: "#fff",
    fontStyle: "italic",
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
  },
  detailBox: {
    alignItems: "center",
  },
  bold: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#fff",
  },
});

export default styles;
