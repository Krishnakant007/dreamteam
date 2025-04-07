import { firestore } from "@/lib/firebase"; // Import Firestore instance
import { collection, setDoc, doc } from "firebase/firestore";

export async function fetchAndStoreUpcomingMatches() {
  try {
    const response = await fetch('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/upcoming', {
      headers: {
        'x-rapidapi-key': 'd57866ff7dmshb876f17a427c55fp1c95b5jsnafaf7a959f0b', // Replace with your API key
        'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
      }
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    const matches = data?.typeMatches?.flatMap((type: any) =>
      type.seriesMatches.flatMap((series: any) =>
        series.seriesAdWrapper?.matches?.map((match: any) => {
          if (!match?.matchInfo) return null;

          return {
            id: match.matchInfo.matchId,
            team1: match.matchInfo.team1.teamName,
            team2: match.matchInfo.team2.teamName,
            team1Image: match.matchInfo.team1.imageId || null,
            team2Image: match.matchInfo.team2.imageId || null,
            date: match.matchInfo.startDate,
            matchType: type.matchType,
          };
        })
      )
    ) ?? [];

    // Store data in Firestore
    const matchesCollection = collection(firestore, "matches");
    for (const match of matches.filter(Boolean)) {
      await setDoc(doc(matchesCollection, match.id.toString()), match);
    }

    console.log("Matches stored in Firestore successfully!");
  } catch (error) {
    console.error("Error fetching/storing matches:", error);
  }
}




// import { firestore } from "@/lib/firebase";
// import { collection, setDoc, doc, getDoc } from "firebase/firestore";

// export async function fetchAndStoreUpcomingMatches() {
//   try {
//     const response = await fetch('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/upcoming', {
//       headers: {
//         'x-rapidapi-key': 'd57866ff7dmshb876f17a427c55fp1c95b5jsnafaf7a959f0b',
//         'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
//       }
//     });

//     if (!response.ok) {
//       throw new Error(`API request failed with status ${response.status}`);
//     }

//     const data = await response.json();
//     const matches = data?.typeMatches?.flatMap((type: any) =>
//       type.seriesMatches.flatMap((series: any) =>
//         series.seriesAdWrapper?.matches?.map((match: any) => {
//           if (!match?.matchInfo) return null;

//           return {
//             id: match.matchInfo.matchId.toString(), // Ensure ID is a string
//             team1: match.matchInfo.team1.teamName,
//             team2: match.matchInfo.team2.teamName,
//             team1Image: match.matchInfo.team1.imageId || null,
//             team2Image: match.matchInfo.team2.imageId || null,
//             date: match.matchInfo.startDate,
//             matchType: type.matchType,
//           };
//         })
//       )
//     ) ?? [];

//     const matchesCollection = collection(firestore, "matches");

//     for (const match of matches.filter(Boolean)) {
//       const matchRef = doc(matchesCollection, match.id);
//       const matchSnap = await getDoc(matchRef);

//       if (!matchSnap.exists()) {
//         // Store only if the match does not already exist
//         await setDoc(matchRef, match);
//         console.log(`Match ${match.id} stored in Firestore`);
//       } else {
//         console.log(`Match ${match.id} already exists in Firestore, skipping.`);
//       }
//     }

//   } catch (error) {
//     console.error("Error fetching/storing matches:", error);
//   }
// }
