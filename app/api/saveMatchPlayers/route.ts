import { db } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  const { matchId } = await request.json();

  try {
    // 1. Fetch from RapidAPI
    const options = {
      method: 'GET',
      url: `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${matchId}`,
      headers: {
        'x-rapidapi-key': 'd57866ff7dmshb876f17a427c55fp1c95b5jsnafaf7a959f0b',
        'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
    const apiData = response.data;

    // 2. Prepare data for Firestore
    const matchData = {
      id: matchId,
      date: apiData.matchInfo.startDate,
      team1: apiData.matchInfo.team1.teamName,
      team2: apiData.matchInfo.team2.teamName,
      matchType: apiData.matchInfo.series.category,
      players: {
        team1: apiData.matchInfo.team1.players,
        team2: apiData.matchInfo.team2.players
      },
      lastUpdated: new Date().toISOString()
    };

    // 3. Save to Firestore
    await setDoc(doc(db, "cricket", "matchPlayers"), {
      [matchId]: matchData
    }, { merge: true });

    return NextResponse.json({ success: true, data: matchData });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch and store match data" },
      { status: 500 }
    );
  }
}