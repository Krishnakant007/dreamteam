// // app/api/transfer-player/[playerDocId]/[matchInfoDocId]/route.ts


// // import { transferPlayerData } from "@/lib/transferPlayerData";
// import { transferPlayerData } from "@/lib/transfePlayerData";
// import { NextResponse } from "next/server";

// export async function GET(
//   _req: Request,
//   { params }: { params: { playerDocId: string; matchInfoDocId: string } }
// ) {
//   const { playerDocId, matchInfoDocId } = params;

//   if (!playerDocId || !matchInfoDocId) {
//     return NextResponse.json({ error: "Missing document IDs" }, { status: 400 });
//   }

//   try {
//     const result = await transferPlayerData(playerDocId, matchInfoDocId);
//     return NextResponse.json(result, { status: 200 });
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
