import { NextResponse } from "next/server";
import axios from "axios";
import { db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";

export async function GET(
  req: Request,
  { params }: { params: { matchId: string } }
) {
  try {
    const matchId = params.matchId;

    if (!matchId) {
      return NextResponse.json({ error: "matchId is required" }, { status: 400 });
    }

    // Fetch data from API
    const response = await axios.get("https://fantasy-cricket-api.p.rapidapi.com/players", {
      params: { matchId },
      headers: {
        "x-rapidapi-key": '0ae1e9e0e5msh3acee78dcd8fc20p1dc8b0jsnc8af096c6668', // Store in .env.local
        "x-rapidapi-host": "fantasy-cricket-api.p.rapidapi.com",
      },
    });

    const playersData = response.data;

    // Store/update data in Firestore (Collection: 'players', Document ID: matchId)
    await setDoc(doc(db, "players", matchId), { players: playersData }, { merge: true });

    return NextResponse.json({ message: "Data updated successfully!", playersData });
  } catch (error) {
    console.error("Error fetching or storing data:", error);
    return NextResponse.json({ error: "Failed to fetch/store data" }, { status: 500 });
  }
}
