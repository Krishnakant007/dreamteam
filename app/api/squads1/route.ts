// // player squad update 

// import { NextResponse } from "next/server";
// import { db } from "@/lib/firebase";
// import { doc, setDoc } from "firebase/firestore";
// import axios from "axios";

// export async function GET() {
//   try {
//     // Manually set squad ID (you can change this)
//       // const squadId = "56925";
//       //  56917 RR , 56921 KKR , 56925 SRH , 56929 RCB ,56933 DC ,56941 PBKS , 56949 MI, 56957 GT , 56965 LSG
//     const seriesId = "9237"; // Change if needed

//     // Fetch squad data from API
//     const response = await axios.get(
//       `https://crickbuzz-official-apis.p.rapidapi.com/series/9237/squads/${squadId}`,
//       {
//         headers: {
//           "x-rapidapi-key": 'f9c535f364msh414263ea65fd263p118929jsnb82ba1475d3a',
//           "x-rapidapi-host": "crickbuzz-official-apis.p.rapidapi.com",
//         },
//       }
//     );

//     const squadData = response.data;

//     // Firestore: Save squad data inside "cricket" collection, creating "squads" subcollection
//     const squadDocRef = doc(db, "teams", "SRH");

//     await setDoc(squadDocRef, {
//       squadId,
//       squadData,
//       createdAt: new Date(),
//     });

//     return NextResponse.json({ message: "Squad saved successfully!" }, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching/saving squad:", error);
//     return NextResponse.json({ error: "Failed to save squad" }, { status: 500 });
//   }
// }
