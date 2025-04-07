import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const RAPID_API_KEY = 'b0bce92f19msh23117b48e9a6ae3p1b9e87jsn4276307b050e'
const RAPID_API_HOST ='crickbuzz-official-apis.p.rapidapi.com'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const upcomingDocRef = doc(collection(db, 'cricket'), 'upcomingMatches');
    const upcomingDocSnap = await getDoc(upcomingDocRef);

    if (!upcomingDocSnap.exists()) {
      return res.status(404).json({ message: 'No upcoming matches found' });
    }

    const matchData = upcomingDocSnap.data();
    const matchIds = Object.keys(matchData);

    for (const matchId of matchIds) {
      const url = `https://${RAPID_API_HOST}/match/${matchId}/squads`;

      try {
        const response = await axios.get(url, {
          headers: {
            'x-rapidapi-key': 'b0bce92f19msh23117b48e9a6ae3p1b9e87jsn4276307b050e',
            'x-rapidapi-host': 'crickbuzz-official-apis.p.rapidapi.com'
          },
        });

        const squadData = response.data;

        const playerDocRef = doc(collection(db, 'players'), matchId);
        await setDoc(playerDocRef, squadData);

        console.log(`Saved players for match ID: ${matchId}`);
      } catch (apiError) {
        console.error(`Error fetching match ${matchId}:`, apiError);
      }

      // Wait 1 second before next request (max 5 per second)
      await delay(1000);
    }

    res.status(200).json({ message: 'Players fetched and saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err });
  }
}