// // import { NextRequest, NextResponse } from "next/server";
// // import axios from "axios";
// // import { doc, getDoc, updateDoc } from "firebase/firestore";
// // import { db } from "@/lib/firebase";

// // export async function GET(request: NextRequest, { params }: { params: { matchId: string } }) {
// //   const matchId = params.matchId;

// //   const options = {
// //     method: "GET",
// //     url: `https://crickbuzz-official-apis.p.rapidapi.com/match/${matchId}`,
// //     headers: {
// //       "x-rapidapi-key": "d57866ff776f17a427c55fp1c95b5jsnafaf7a959f0b",
// //       "x-rapidapi-host": "crickbuzz-official-apis.p.rapidapi.com",
// //     },
// //   };

// //   try {
// //     const response = await axios.request(options);
// //     const data = response.data;

// //     // Reference Firestore document
// //     const matchRef = doc(db, "matchinfo", matchId);
// //     const matchSnap = await getDoc(matchRef);

// //     if (!matchSnap.exists()) {
// //       return NextResponse.json({ success: false, error: "Match not found in Firestore" }, { status: 404 });
// //     }

// //     const existingMatchData = matchSnap.data();

// //     // ✅ Check if matchInfo exists inside Firestore
// //     const matchInfo = existingMatchData?.matchInfo || {};
// //     const team1 = matchInfo?.team1 || {};
// //     const team2 = matchInfo?.team2 || {};

// //     if (!team1.playerDetails || !team2.playerDetails) {
// //       return NextResponse.json({ success: false, error: "playerDetails not found in team1 or team2" }, { status: 400 });
// //     }

// //     // Function to update substitute status
// //     const updatePlayerSubstitute = (team: any) => ({
// //       ...team,
// //       playerDetails: team.playerDetails.map((player: any) => ({
// //         ...player,
// //         substitute: !player.substitute, // Toggle substitute status
// //       })),
// //     });

// //     // Update teams
// //     const updatedTeam1 = updatePlayerSubstitute(team1);
// //     const updatedTeam2 = updatePlayerSubstitute(team2);

// //     // Update Firestore (keep matchInfo structure)
// //     await updateDoc(matchRef, {
// //         matchInfo: {
// //           ...matchInfo,
// //           team1: updatedTeam1,
// //           team2: updatedTeam2,
// //           tossResults: data.tossResults || matchInfo.tossResults || {}, // Ensure toss results get updated
// //         },
// //       });

// //     return NextResponse.json({ success: true, updatedTeam1, updatedTeam2, tossResults: data.tossResults });
// //   } catch (error: any) {
// //     console.error("Error updating substitute field:", error);
// //     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
// //   }
// // }






// import { NextRequest, NextResponse } from "next/server";
// import axios from "axios";
// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import { db } from "@/lib/firebase";

// export async function GET(request: NextRequest, { params }: { params: { matchId: string } }) {
//   const matchId = params.matchId;

//   const options = {
//     method: "GET",
//     url: `https://crickbuzz-official-apis.p.rapidapi.com/match/${matchId}`,
//     headers: {
//       "x-rapidapi-key": "",
//       "x-rapidapi-host": "crickbuzz-official-apis.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     const data = response.data;

//     // Reference Firestore document
//     const matchRef = doc(db, "matchinfo", matchId);
//     const matchSnap = await getDoc(matchRef);

//     if (!matchSnap.exists()) {
//       return NextResponse.json({ success: false, error: "Match not found in Firestore" }, { status: 404 });
//     }

//     const existingMatchData = matchSnap.data();

//     // ✅ Check if matchInfo exists inside Firestore
//     const matchInfo = existingMatchData?.matchInfo || {};
//     const team1 = matchInfo?.team1 || {};
//     const team2 = matchInfo?.team2 || {};

//     if (!team1.playerDetails || !team2.playerDetails) {
//       return NextResponse.json({ success: false, error: "playerDetails not found in team1 or team2" }, { status: 400 });
//     }

//     // Function to update substitute status
//     const updatePlayerSubstitute = (team: any) => ({
//       ...team,
//       playerDetails: team.playerDetails.map((player: any) => ({
//         ...player,
//         substitute: !player.substitute, // Toggle substitute status
//       })),
//     });

//     // Update teams
//     const updatedTeam1 = updatePlayerSubstitute(team1);
//     const updatedTeam2 = updatePlayerSubstitute(team2);

//     // ✅ Ensure tossResults exists in API response
//     const updatedTossResults = data?.matchInfo?.tossResults || matchInfo?.tossResults || {};

//     // ✅ Update Firestore fields separately to prevent overwriting
//     await updateDoc(matchRef, {
//       "matchInfo.team1": updatedTeam1,
//       "matchInfo.team2": updatedTeam2,
//       "matchInfo.tossResults": updatedTossResults, // ✅ Update tossResults separately
//     });

//     return NextResponse.json({ success: true, updatedTeam1, updatedTeam2, tossResults: updatedTossResults });
//   } catch (error: any) {
//     console.error("Error updating Firestore:", error);
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }







import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

const apiKeys = [
  process.env.NEXT_RAPID_API_KEY1!,
  process.env.NEXT_RAPID_API_KEY2!,
  process.env.NEXT_RAPID_API_KEY3!,
  process.env.NEXT_RAPID_API_KEY4!,
];

async function fetchWithKeyRotation(matchId: string, keyIndex = 0): Promise<any> {
  if (keyIndex >= apiKeys.length) {
    throw new Error("All RapidAPI keys failed or quota exceeded");
  }

  try {
    const response = await axios.get(`https://crickbuzz-official-apis.p.rapidapi.com/match/${matchId}`, {
      headers: {
        "x-rapidapi-key": apiKeys[keyIndex],
        "x-rapidapi-host": "crickbuzz-official-apis.p.rapidapi.com",
      },
    });
    return response.data;
  } catch (err: any) {
    if (err.response?.status === 429) {
      console.warn(`Key ${keyIndex + 1} quota exceeded. Trying next key...`);
      return fetchWithKeyRotation(matchId, keyIndex + 1);
    }
    console.error(`Key ${keyIndex + 1} failed:`, err.message);
    return fetchWithKeyRotation(matchId, keyIndex + 1);
  }
}

export async function GET(request: NextRequest, { params }: { params: { matchId: string } }) {
  const matchId = params.matchId;

  try {
    const data = await fetchWithKeyRotation(matchId);

    const matchRef = doc(db, "matchinfo", matchId);
    const matchSnap = await getDoc(matchRef);

    if (!matchSnap.exists()) {
      return NextResponse.json({ success: false, error: "Match not found in Firestore" }, { status: 404 });
    }

    const existingMatchData = matchSnap.data();
    const matchInfo = existingMatchData?.matchInfo || {};
    const team1 = matchInfo?.team1 || {};
    const team2 = matchInfo?.team2 || {};

    if (!team1.playerDetails || !team2.playerDetails) {
      return NextResponse.json({ success: false, error: "playerDetails not found in team1 or team2" }, { status: 400 });
    }

    const updatePlayerSubstitute = (team: any) => ({
      ...team,
      playerDetails: team.playerDetails.map((player: any) => ({
        ...player,
        substitute: !player.substitute,
      })),
    });

    const updatedTeam1 = updatePlayerSubstitute(team1);
    const updatedTeam2 = updatePlayerSubstitute(team2);
    const updatedTossResults = data?.matchInfo?.tossResults || matchInfo?.tossResults || {};

    await updateDoc(matchRef, {
      "matchInfo.team1": updatedTeam1,
      "matchInfo.team2": updatedTeam2,
      "matchInfo.tossResults": updatedTossResults,
    });

    return NextResponse.json({ success: true, updatedTeam1, updatedTeam2, tossResults: updatedTossResults });
  } catch (error: any) {
    console.error("🔥 Error updating Firestore:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
