// // app/api/admin/update-matches/route.ts
// import { NextResponse } from 'next/server';
// import { db } from "@/lib/firebase";
// import { collection, doc, setDoc } from "firebase/firestore";

// export async function GET() {
//   try {
//     console.log("Fetching from RapidAPI...");
//     const response = await fetch('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/upcoming', {
//       headers: {
//         'x-rapidapi-key': '',
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
//             id: match.matchInfo.matchId,
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

//     const filteredMatches = matches.filter(Boolean);
//     const docRef = doc(collection(db, "cricket"), "upcomingMatches");
    
//     await setDoc(docRef, {
//       matches: filteredMatches,
//       updatedAt: new Date().toISOString()
//     });

//     console.log(`Successfully stored ${filteredMatches.length} matches`);
    
//     return NextResponse.json({
//       success: true,
//       message: `${filteredMatches.length} matches updated`,
//       count: filteredMatches.length,
//       lastUpdated: new Date().toISOString()
//     });

//   } catch (error: any) {
//     console.error("Error in API route:", error);
//     return NextResponse.json(
//       {
//         success: false,
//         message: error.message || "Failed to update matches"
//       },
//       { status: 500 }
//     );
//   }
// }






import { NextResponse } from 'next/server';
import { db } from "@/lib/firebase";
import { collection, doc, setDoc } from "firebase/firestore";

const apiKeys = [
  process.env.NEXT_RAPID_API_KEY1!,
  process.env.NEXT_RAPID_API_KEY2!,
  process.env.NEXT_RAPID_API_KEY3!,
  process.env.NEXT_RAPID_API_KEY4!,
];

async function fetchWithRotation(keyIndex = 0): Promise<any> {
  if (keyIndex >= apiKeys.length) {
    throw new Error("All RapidAPI keys have been exhausted or failed");
  }

  try {
    const response = await fetch('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/upcoming', {
      headers: {
        'x-rapidapi-key': apiKeys[keyIndex],
        'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
      }
    });

    if (!response.ok) {
      if (response.status === 429) {
        console.warn(`Key ${keyIndex + 1} quota exceeded. Trying next key...`);
        return fetchWithRotation(keyIndex + 1);
      }
      throw new Error(`API failed with status ${response.status}`);
    }

    return response.json();
  } catch (err) {
    console.error(`Key ${keyIndex + 1} failed:`, err);
    return fetchWithRotation(keyIndex + 1);
  }
}

export async function GET() {
  try {
    console.log("Fetching from RapidAPI with key rotation...");
    const data = await fetchWithRotation();

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

    const filteredMatches = matches.filter(Boolean);
    const docRef = doc(collection(db, "cricket"), "upcomingMatches");

    await setDoc(docRef, {
      matches: filteredMatches,
      updatedAt: new Date().toISOString()
    });

    console.log(`✅ Stored ${filteredMatches.length} matches`);

    return NextResponse.json({
      success: true,
      message: `${filteredMatches.length} matches updated`,
      count: filteredMatches.length,
      lastUpdated: new Date().toISOString()
    });

  } catch (error: any) {
    console.error("🔥 Error in API route:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to update matches"
      },
      { status: 500 }
    );
  }
}







// import { NextResponse } from 'next/server'
// import { supabase } from '../../../../utils/supabase'


// export async function GET() {
//   try {
//     const response = await fetch('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/upcoming', {
//       headers: {
//         'x-rapidapi-key': 'f9c535f364msh414263ea65fd263p118929jsnb82ba1475d3a',
//         'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
//       }
//     })

//     if (!response.ok) {
//       throw new Error(`API failed with status ${response.status}`)
//     }

//     const data = await response.json()

//     const matches = data?.typeMatches?.flatMap((type: any) =>
//       type.seriesMatches.flatMap((series: any) =>
//         series.seriesAdWrapper?.matches?.map((match: any) => {
//           if (!match?.matchInfo) return null
//           const m = match.matchInfo
//           return {
//             match_id: m.matchId.toString(), // store as string
//             series_id: m.seriesId?.toString() ?? '',
//             series_name: m.seriesName ?? '',
//             match_desc: m.matchDesc ?? '',
//             match_format: m.matchFormat ?? '',
//             match_type: type.matchType ?? '',
//             start_date: new Date(Number(m.startDate)).toISOString(),
//             end_date: m.endDate ? new Date(Number(m.endDate)).toISOString() : null,
//             team1: m.team1?.teamName ?? '',
//             team2: m.team2?.teamName ?? '',
//             team1_image: m.team1?.imageId ?? null,
//             team2_image: m.team2?.imageId ?? null,
//             venue: m.venueInfo?.ground ?? '',
//             city: m.venueInfo?.city ?? '',
//             status: m.status ?? '',
//           }
//         })
//       )
//     ).filter(Boolean)

//     // ✅ Clear existing rows (optional)
//     await supabase.from('matchinfo').delete().neq('match_id', '')

//     // ✅ Bulk insert
//     const { error } = await supabase.from('matchinfo').insert(matches)

//     if (error) throw error

//     return NextResponse.json({
//       success: true,
//       message: `${matches.length} matches inserted to Supabase`,
//     })
//   } catch (error: any) {
//     console.error('Upload error:', error)
//     return NextResponse.json(
//       { success: false, message: error.message || 'Upload failed' },
//       { status: 500 }
//     )
//   }
// }
