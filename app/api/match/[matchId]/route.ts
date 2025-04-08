// // app/api/match/[matchId]/route.ts
// import { NextRequest, NextResponse } from 'next/server';
// import axios from 'axios';
// import { doc, setDoc } from 'firebase/firestore';
// import { db } from '@/lib/firebase';

// export async function GET(request: NextRequest, { params }: { params: { matchId: string } }) {
//   const matchId = params.matchId;

//   const options = {
//     method: 'GET',
//     url: `https://crickbuzz-official-apis.p.rapidapi.com/match/${matchId}`,
//     headers: {
//       'x-rapidapi-key': '',
//       'x-rapidapi-host': 'crickbuzz-official-apis.p.rapidapi.com',
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     const data = response.data;

//     // Save to Firestore
//     await setDoc(doc(db, 'matchinfo', matchId), data);

//     return NextResponse.json({ success: true, data });
//   } catch (error: any) {
//     console.error("Error fetching/saving data:", error);
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }


// app/api/match/[matchId]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const apiKeys = [
  process.env.NEXT_RAPID_API_KEY1,
  process.env.NEXT_RAPID_API_KEY2,
  process.env.NEXT_RAPID_API_KEY3,
  process.env.NEXT_RAPID_API_KEY4,
].filter(Boolean);

async function fetchWithKeyRotation(matchId: string, keyIndex = 0): Promise<any> {
  if (keyIndex >= apiKeys.length) {
    throw new Error("All RapidAPI keys have been exhausted due to quota limits.");
  }

  const options = {
    method: 'GET',
    url: `https://crickbuzz-official-apis.p.rapidapi.com/match/${matchId}`,
    headers: {
      'x-rapidapi-key': apiKeys[keyIndex],
      'x-rapidapi-host': 'crickbuzz-official-apis.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error: any) {
    const isQuotaError = error?.response?.status === 429;
    if (isQuotaError) {
      console.warn(`Quota exceeded for API key ${keyIndex + 1}. Trying next key...`);
      return fetchWithKeyRotation(matchId, keyIndex + 1);
    }
    throw error;
  }
}

export async function GET(
  req: NextRequest,
  context: { params: { matchId: string } }
) {
  const { matchId } = context.params;

  try {
    const data = await fetchWithKeyRotation(matchId);
    await setDoc(doc(db, 'matchinfo', matchId), data);

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Error fetching/saving data:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
// app/api/match/[matchId]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const apiKeys = [
  process.env.NEXT_RAPID_API_KEY1,
  process.env.NEXT_RAPID_API_KEY2,
  process.env.NEXT_RAPID_API_KEY3,
  process.env.NEXT_RAPID_API_KEY4,
].filter(Boolean);

async function fetchWithKeyRotation(matchId: string, keyIndex = 0): Promise<any> {
  if (keyIndex >= apiKeys.length) {
    throw new Error("All RapidAPI keys have been exhausted due to quota limits.");
  }

  const options = {
    method: 'GET',
    url: `https://crickbuzz-official-apis.p.rapidapi.com/match/${matchId}`,
    headers: {
      'x-rapidapi-key': apiKeys[keyIndex],
      'x-rapidapi-host': 'crickbuzz-official-apis.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error: any) {
    const isQuotaError = error?.response?.status === 429;
    if (isQuotaError) {
      console.warn(`Quota exceeded for API key ${keyIndex + 1}. Trying next key...`);
      return fetchWithKeyRotation(matchId, keyIndex + 1);
    }
    throw error;
  }
}

export async function GET(
  req: NextRequest,
  context: { params: { matchId: string } }
) {
  const { matchId } = context.params;

  try {
    const data = await fetchWithKeyRotation(matchId);
    await setDoc(doc(db, 'matchinfo', matchId), data);

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Error fetching/saving data:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
