import { NextResponse } from "next/server";

const API_URL = process.env.BASE_URL;
const GEO_URL = process.env.GEO_URL;
const API_KEY = process.env.API_KEY;

export const getCurrentWeatherByCity = async (city: string) => {
  try {
    if (!API_KEY || !API_URL) throw new Error("Missing API Credentials");
    if (!city) throw new Error("City is required");

    const response = await fetch(
      `${API_URL}/weather?q=${city}&appid=${API_KEY}`,
    );
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const getCurrentWeatherByCoords = async (lat: number, lon: number) => {
  try {
    if (!API_KEY || !API_URL) throw new Error("Missing API Credentials");
    if (!lat || !lon) throw new Error("City is required");

    const response = await fetch(
      `${API_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
    );
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const getWeatherForecast = async (city: string) => {
  try {
    if (!API_KEY || !API_URL) throw new Error("Missing API Credentials");
    if (!city) throw new Error("City is required");

    const response = await fetch(
      `${API_URL}/forecast?q=${city}&appid=${API_KEY}`,
    );
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const searchCities = async (query: string) => {
  try {
    if (!API_KEY || !API_URL)
      return NextResponse.json({ error: "missing api credentials" });

    const response = await fetch(
      `${GEO_URL}/direct?q=${query}$limit=5&appid=${API_KEY}`,
    );

    if (!response.ok) {
      NextResponse.json({ error: "Search query is invalid" });
    }

    const data = await response.json();

    return data.map((city: any) => {
      name: city.name;
      lat: city.lat;
      lon: city.lon;
      country: city.country;
      state: city.state || "";
    });
  } catch (error) {}
};
