const API_KEY = "MY_API_KEY"

export const getWeather = async (location) => {
  const res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`
  );

  if (!res.ok) throw new Error("Failed to fetch");

  return res.json();
};