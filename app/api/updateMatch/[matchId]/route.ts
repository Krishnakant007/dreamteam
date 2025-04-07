// import { NextResponse } from "next/server";
// import { db } from "@/lib/firebase";
// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import axios from "axios";

// export async function GET() {
//   try {
//     const matchId = "115021"; // Replace with dynamic match ID if needed
//     const url = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${matchId}`;

//     const options = {
//       method: "GET",
//       url,
//       headers: {
//         "x-rapidapi-key": "d57866ff7dmsh17a427c55fp1c95b5jsnafaf7a959f0b",
//         "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
//       },
//     };

//     // Fetch API data
//     const response = await axios.request(options);
//     const matchData = response.data;

//     if (!matchData) {
//       return NextResponse.json({ error: "No match data found" }, { status: 404 });
//     }

//     // Extract substitute status for players and toss details
//     const team1Players = matchData.team1?.players || [];
//     const team2Players = matchData.team2?.players || [];
    
//     const updatedPlayerDetails = [...team1Players, ...team2Players].map((player: any) => ({
//       name: player.name,
//       substitute: player.substitute || false, // Default to false if missing
//     }));

//     const tossDetails = matchData.toss || null;

//     // Fetch existing Firestore data
//     const matchRef = doc(db, "matchinfo", matchId);
//     const matchSnap = await getDoc(matchRef);

//     if (!matchSnap.exists()) {
//       return NextResponse.json({ error: "Match not found in Firestore" }, { status: 404 });
//     }

//     const existingData = matchSnap.data();
//     const existingPlayers = existingData.playerDetails || [];

//     // Preserve existing player names, update only substitutes
//     const finalUpdatedPlayers = existingPlayers.map((player: any) => {
//       const rapidPlayer = updatedPlayerDetails.find((p) => p.name === player.name);
//       return {
//         ...player,
//         substitute: rapidPlayer ? rapidPlayer.substitute : player.substitute, // Update if found
//       };
//     });

//     // Update Firestore
//     await updateDoc(matchRef, {
//       playerDetails: finalUpdatedPlayers,
//       tossDetails: tossDetails,
//     });

//     return NextResponse.json({ message: "Match updated successfully" });
//   } catch (error) {
//     console.error("Error updating match:", error);
//     return NextResponse.json({ error: "Failed to update match" }, { status: 500 });
//   }
// }







// import { NextResponse } from "next/server";
// import { db } from "@/lib/firebase";
// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import axios from "axios";

// export async function GET(req: Request, { params }: { params: { matchId: string } }) {
//   try {
//     const matchId = params.matchId;
//     const url = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${matchId}`;

//     const options = {
//       method: "GET",
//       url,
//       headers: {
//         "x-rapidapi-key": "d57866ff7dmshb876f17a427c55fp1c95b5jsnafaf7a959f0b",
//         "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
//       },
//     };

//     // Fetch API data
//     const response = await axios.request(options);
//     const matchData = response.data;

//     if (!matchData) {
//       return NextResponse.json({ error: "No match data found" }, { status: 404 });
//     }

//     // Extract player substitute status
//     const team1Players = matchData.team1?.players || [];
//     const team2Players = matchData.team2?.players || [];

//     const updatedPlayerDetails = [...team1Players, ...team2Players].map((player: any) => ({
//       id: player.id, // Ensure IDs are used for matching
//       name: player.name,
//       substitute: player.substitute || false,
//     }));

//     // Extract Toss details
//     const tossDetails = matchData.toss || null;

//     // Fetch existing Firestore data
//     const matchRef = doc(db, "matchinfo", matchId);
//     const matchSnap = await getDoc(matchRef);

//     if (!matchSnap.exists()) {
//       return NextResponse.json({ error: "Match not found in Firestore" }, { status: 404 });
//     }

//     const existingData = matchSnap.data();
//     const existingPlayers = existingData.playerDetails || [];

//     // Preserve existing players' data, update only `substitute` status based on player ID
//     const finalUpdatedPlayers = existingPlayers.map((player: any) => {
//       const rapidPlayer = updatedPlayerDetails.find((p) => p.id === player.id);
//       return {
//         ...player,
//         substitute: rapidPlayer ? rapidPlayer.substitute : player.substitute,
//       };
//     });

//     // Update Firestore
//     await updateDoc(matchRef, {
//       playerDetails: finalUpdatedPlayers, // Only substitute field is updated
//       tossDetails, // Ensure toss details are updated properly
//     });

//     return NextResponse.json({ message: "Match updated successfully" });
//   } catch (error) {
//     console.error("Error updating match:", error);
//     return NextResponse.json({ error: "Failed to update match" }, { status: 500 });
//   }
// }






// import { NextResponse } from "next/server";
// import { db } from "@/lib/firebase";
// import { collection, getDocs, updateDoc, query, where } from "firebase/firestore";
// import axios from "axios";

// export async function GET(req: Request, { params }: { params: { matchId: string } }) {
//   try {
//     const matchId = params.matchId;
//     console.log("Updating match for ID:", matchId);

//     const url = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${matchId}`;
//     const options = {
//       method: "GET",
//       url,
//       headers: {
//         "x-rapidapi-key": "d57866ff7dmshb876f17a427c55fp1c95b5jsnafaf7a959f0b",
//         "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
//       },
//     };

//     const response = await axios.request(options);
//     const matchData = response.data;

//     if (!matchData) {
//       console.error("No match data from API");
//       return NextResponse.json({ error: "No match data found" }, { status: 404 });
//     }

//     const team1Players = matchData.team1?.players || [];
//     const team2Players = matchData.team2?.players || [];
//     const tossDetails = matchData.toss || null;

//     const updatedPlayerDetails = [...team1Players, ...team2Players].map((player: any) => ({
//       id: player.id, // Use ID for matching
//       name: player.name,
//       substitute: player.substitute || false,
//     }));

//     // 🔥 Find Firestore document with matchId inside data
//     const matchQuery = query(collection(db, "matchinfo"), where("matchId", "==", matchId));
//     const matchSnap = await getDocs(matchQuery);

//     if (matchSnap.empty) {
//       console.error("Firestore Error: Match not found");
//       return NextResponse.json({ error: "Match not found in Firestore" }, { status: 404 });
//     }

//     // 🔥 Get the first matching document
//     const matchDoc = matchSnap.docs[0];
//     const matchRef = matchDoc.ref;
//     const existingData = matchDoc.data();

//     // 🔥 Extract existing players from Firestore
//     const existingPlayers = [
//       ...(existingData.team1?.players || []),
//       ...(existingData.team2?.players || []),
//     ];

//     // 🔥 Update only substitute status
//     const finalUpdatedPlayers = existingPlayers.map((player: any) => {
//       const rapidPlayer = updatedPlayerDetails.find((p) => p.id === player.id);
//       return {
//         ...player,
//         substitute: rapidPlayer ? rapidPlayer.substitute : player.substitute,
//       };
//     });

//     // 🔥 Split back into team1 and team2
//     const updatedTeam1Players = finalUpdatedPlayers.slice(0, team1Players.length);
//     const updatedTeam2Players = finalUpdatedPlayers.slice(team1Players.length);

//     // 🔥 Update Firestore
//     await updateDoc(matchRef, {
//       "team1.players": updatedTeam1Players,
//       "team2.players": updatedTeam2Players,
//       tossResults: tossDetails, // Ensure this field is properly stored
//     });

//     console.log("🔥 Match updated successfully:", matchId);
//     return NextResponse.json({ message: "Match updated successfully" });
//   } catch (error) {
//     console.error("🔥 Error updating match:", error);
//     return NextResponse.json({ error: error.message || "Failed to update match" }, { status: 500 });
//   }
// }









// import { NextResponse } from "next/server";
// import { db } from "@/lib/firebase";
// import { doc, getDoc, updateDoc, query, collection, where, getDocs } from "firebase/firestore";
// import axios from "axios";

// export async function GET(req: Request, { params }: { params: { matchId: string } }) {
//   try {
//     const matchId = Number(params.matchId); // Convert matchId to number
//     console.log("📌 Requested matchId:", matchId);

//     const url = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${matchId}`;
//     const options = {
//       method: "GET",
//       url,
//       headers: {
//         "x-rapidapi-key": "d57866ff7dms17a427c55fp1c95b5jsnafaf7a959f0b", // Replace with your API key
//         "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
//       },
//     };

//     // Fetch match data from API
//     const response = await axios.request(options);
//     const matchData = response.data;
//     if (!matchData) {
//       return NextResponse.json({ error: "No match data found" }, { status: 404 });
//     }

//     // Extract players and their substitute status
//     const team1Players = matchData.team1?.players || [];
//     const team2Players = matchData.team2?.players || [];
//     const updatedPlayerDetails = [...team1Players, ...team2Players].map((player: any) => ({
//       id: player.id,
//       name: player.name,
//       substitute: player.substitute || false, // Default to false if missing
//     }));

//     const tossDetails = matchData.toss || null;

//     // Query Firestore to find the match document
//     const matchQuery = query(collection(db, "matchinfo"), where("matchId", "==", matchId));
//     const matchSnap = await getDocs(matchQuery);

//     if (matchSnap.empty) {
//       console.error("❌ Firestore Error: No document found with matchId:", matchId);
//       return NextResponse.json({ error: "Match not found in Firestore" }, { status: 404 });
//     }

//     const matchDoc = matchSnap.docs[0]; // Get the first matching document
//     const matchRef = doc(db, "matchinfo", matchDoc.id);
//     const existingData = matchDoc.data();

//     console.log("✅ Found Firestore Document:", existingData);

//     const existingPlayers = existingData.playerDetails || [];

//     // Preserve existing player names, update only substitutes
//     const finalUpdatedPlayers = existingPlayers.map((player: any) => {
//       const rapidPlayer = updatedPlayerDetails.find((p) => p.name === player.name);
//       return {
//         ...player,
//         substitute: rapidPlayer ? rapidPlayer.substitute : player.substitute, // Update if found
//       };
//     });

//     // Update Firestore
//     await updateDoc(matchRef, {
//       playerDetails: finalUpdatedPlayers,
//       tossDetails: tossDetails,
//     });

//     console.log("✅ Firestore Updated Successfully!");

//     return NextResponse.json({ message: "Match updated successfully" });
//   } catch (error) {
//     console.error("❌ Error updating match:", error);
//     return NextResponse.json({ error: "Failed to update match" }, { status: 500 });
//   }
// }



















// import { NextResponse } from "next/server";
// import { db } from "@/lib/firebase";
// import { doc, getDoc, updateDoc, query, collection, where, getDocs } from "firebase/firestore";
// import axios from "axios";

// export async function GET(req: Request, { params }: { params: { matchId: string } }) {
//   try {
//     const matchId = params.matchId; // Keep as string initially
//     console.log("📌 Requested matchId:", matchId, "(type:", typeof matchId + ")");

//     // First try to fetch from API
//     const url = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${matchId}`;
//     const options = {
//       method: "GET",
//       url,
//       headers: {
//         "x-rapidapi-key": "d57866ff7dmshb876f17a427c55fp1c95b5jsnafaf7a959f0b",    //
//         "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
//       },
//     };

//     const response = await axios.request(options);
//     const matchData = response.data;
    
//     if (!matchData) {
//       return NextResponse.json({ error: "No match data found from API" }, { status: 404 });
//     }

//     // Process player data
//     const team1Players = matchData.team1?.players || [];
//     const team2Players = matchData.team2?.players || [];
//     const updatedPlayerDetails = [...team1Players, ...team2Players].map((player: any) => ({
//       id: player.id,
//       name: player.name,
//       substitute: player.substitute || false,
//     }));

//     const tossDetails = matchData.toss || null;

//     // Try multiple approaches to find the Firestore document
//     let matchRef;
//     let existingData;

//     // APPROACH 1: Try direct document reference
//     matchRef = doc(db, "matchinfo", matchId);
//     let matchSnap = await getDoc(matchRef);

//     if (matchSnap.exists()) {
//       existingData = matchSnap.data();
//       console.log("✅ Found document via direct reference");
//     } 
//     else {
//       // APPROACH 2: Try query with string matchId
//       let matchQuery = query(collection(db, "matchinfo"), where("matchId", "==", matchId));
//       let querySnapshot = await getDocs(matchQuery);

//       if (!querySnapshot.empty) {
//         const doc = querySnapshot.docs[0];
//         existingData = doc.data();
//         matchRef = doc.ref;
//         console.log("✅ Found document via string query");
//       }
//       else {
//         // APPROACH 3: Try query with numeric matchId
//         const numericMatchId = Number(matchId);
//         matchQuery = query(collection(db, "matchinfo"), where("matchId", "==", numericMatchId));
//         querySnapshot = await getDocs(matchQuery);

//         if (!querySnapshot.empty) {
//           const doc = querySnapshot.docs[0];
//           existingData = doc.data();
//           matchRef = doc.ref;
//           console.log("✅ Found document via numeric query");
//         }
//         else {
//           console.error("❌ No matching document found with any approach");
//           return NextResponse.json(
//             { error: "Match not found in Firestore" }, 
//             { status: 404 }
//           );
//         }
//       }
//     }

//     // Merge player data
//     const existingPlayers = existingData.playerDetails || [];
//     const finalUpdatedPlayers = existingPlayers.map((player: any) => {
//       const rapidPlayer = updatedPlayerDetails.find((p) => p.name === player.name);
//       return {
//         ...player,
//         substitute: rapidPlayer ? rapidPlayer.substitute : player.substitute,
//       };
//     });

//     // Update Firestore
//     await updateDoc(matchRef, {
//       playerDetails: finalUpdatedPlayers,
//       tossDetails: tossDetails,
//       lastUpdated: new Date().toISOString(),
//     });

//     console.log("✅ Firestore updated successfully");
//     return NextResponse.json({ 
//       message: "Match updated successfully",
//       updatedPlayers: finalUpdatedPlayers.length,
//       tossDetails: !!tossDetails
//     });

//   } catch (error: any) {
//     console.error("❌ Error updating match:", error);
    
//     return NextResponse.json(
//       { 
//         error: "Failed to update match",
//         details: error.message,
//         ...(error.response?.data && { apiError: error.response.data })
//       }, 
//       { status: 500 }
//     );
//   }
// }




















// import { NextResponse } from "next/server";
// import { db } from "@/lib/firebase";
// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import axios from "axios";

// export async function GET(req: Request, { params }: { params: { matchId: string } }) {
//   try {
//     const matchId = params.matchId; // Firestore document ID is already a string
//     console.log("📌 Requested matchId:", matchId);

//     const url = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${matchId}`;
//     const options = {
//       method: "GET",
//       url,
//       headers: {
//         "x-rapidapi-key": "d57866ff7dmshb876f17a427c55fp1c95b5jsnafaf7a959f0b", // Replace with your actual API key
//         "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
//       },
//     };

//     // Fetch match data from API
//     const response = await axios.request(options);
//     const matchData = response.data;
//     if (!matchData) {
//       return NextResponse.json({ error: "No match data found" }, { status: 404 });
//     }

//     // Extract player substitute status and toss details
//     const team1Players = matchData.team1?.players || [];
//     const team2Players = matchData.team2?.players || [];
//     const updatedPlayerDetails = [...team1Players, ...team2Players].map((player: any) => ({
//       id: player.id,
//       name: player.name,
//       substitute: player.substitute || false, // Default to false if missing
//     }));

//     const tossDetails = matchData.toss || null;

//     // Fetch Firestore match document using `matchId` as document ID
//     const matchRef = doc(db, "matchinfo", matchId);
//     const matchSnap = await getDoc(matchRef);

//     if (!matchSnap.exists()) {
//       console.error("❌ Firestore Error: No document found with matchId:", matchId);
//       return NextResponse.json({ error: "Match not found in Firestore" }, { status: 404 });
//     }

//     const matchDataFromFirestore = matchSnap.data();
//     console.log("✅ Found Firestore Document:", matchDataFromFirestore);

//     // Extract matchInfo object from Firestore
//     const matchInfo = matchDataFromFirestore.matchInfo || {};
//     const existingPlayers = matchDataFromFirestore.playerDetails || [];

//     // Preserve existing player names, update only substitutes
//     const finalUpdatedPlayers = existingPlayers.map((player: any) => {
//       const rapidPlayer = updatedPlayerDetails.find((p) => p.name === player.name);
//       return {
//         ...player,
//         substitute: rapidPlayer ? rapidPlayer.substitute : player.substitute, // Update if found
//       };
//     });

//     // Update Firestore with modified data
//     await updateDoc(matchRef, {
//       matchInfo: {
//         ...matchInfo, // Preserve other matchInfo details
//         matchId: Number(matchId), // Ensure matchId is stored as a number
//       },
//       playerDetails: finalUpdatedPlayers,
//       tossDetails: tossDetails,
//     });

//     console.log("✅ Firestore Updated Successfully!");

//     return NextResponse.json({ message: "Match updated successfully" });
//   } catch (error) {
//     console.error("❌ Error updating match:", error);
//     return NextResponse.json({ error: "Failed to update match" }, { status: 500 });
//   }
// }
