import { firestore } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function fetchMatchesFromFirestore() {
  const matchesCollection = collection(firestore, "matches");
  const snapshot = await getDocs(matchesCollection);
  
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
