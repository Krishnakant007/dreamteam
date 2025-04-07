import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, doc, setDoc, getDocs } from "firebase/firestore";

export async function GET() {
  try {
    const url = "YOUR_RAPID_API_ENDPOINT";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
        "X-RapidAPI-Host": "YOUR_RAPIDAPI_HOST",
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();

    // Save to Firestore
    const collectionRef = collection(db, "rapidapi_data");
    await setDoc(doc(collectionRef, "latest"), { data, timestamp: Date.now() });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
