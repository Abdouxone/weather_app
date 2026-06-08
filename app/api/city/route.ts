import { error } from "console";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const API_URL = process.env.BASE_URL;
    const API_KEY = process.env.API_KEY;
    const { searchParams } = new URL(request.url);
    const city = searchParams.get("city");

    if (!city) {
      return NextResponse.json({ error: "City is required" }, { status: 400 });
    }

    if (!API_KEY || !API_URL)
      return NextResponse.json(
        { error: "Missing API Credentials" },
        { status: 404 },
      );

    const response = await fetch(
      `${API_URL}/weather?q=${city}&appid=${API_KEY}`,
    );
    if (!response.ok) {
      return NextResponse.json({
        error: "Error while fetching weather for the city",
      });
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Something went wrong" });
  }
}
