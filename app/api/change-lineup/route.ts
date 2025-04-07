import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

export async function GET(req: NextRequest) {
  try {
    const matchId = "12345"; // Change dynamically
    const playersRef = collection(db, `matchinfo/${matchId}/players`);
    const snapshot = await getDocs(playersRef);

    let players = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    for (let player of players) {
      if (player.substitute === false) {
        // Find a replacement with the same role
        let replacement = players.find(
          (p) => p.role === player.role && p.substitute === true
        );

        if (replacement) {
          // Swap players
          await updateDoc(doc(db, `matchinfo/${matchId}/players`, player.id), {
            substitute: true, // Move player out of playing 11
          });

          await updateDoc(doc(db, `matchinfo/${matchId}/players`, replacement.id), {
            substitute: false, // Move new player into playing 11
          });
        }
      }
    }

    return NextResponse.json({ message: "Lineup updated successfully!" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
