import { firestore } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function fetchMatchesFromFirestore() {
  try {
    const matchesCollection = collection(firestore, "matches");
    const snapshot = await getDocs(matchesCollection);

    const matches = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return matches;
  } catch (error) {
    console.error("Error fetching matches from Firestore:", error);
    return [];
  }
}
