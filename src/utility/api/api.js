const url = "https://covid-19-data.p.rapidapi.com/";
const key = "47f12bc0fcmsh1e8241ff8e2313ep160292jsn1a2519eae5b2";
const host = "covid-19-data.p.rapidapi.com";

class api {
  static get(endpoint) {
    const headers = new Headers({
      "x-rapidapi-key": key,
      "x-rapidapi-host": host,
    });

    return fetch(`${url}${endpoint}`, {
      method: "GET",
      headers,
    })
      .then((response) => response.json())
      .catch((err) => console.error(err));
  }
  static post(endpoint) {
    const headers = new Headers({
      "x-rapidapi-key": key,
      "x-rapidapi-host": host,
    });
    return fetch(`${url}${endpoint}`, {
      method: "POST",
      headers,
    })
      .then((response) => response.json())
      .catch((err) => console.error(err));
  }
}

export default api;
