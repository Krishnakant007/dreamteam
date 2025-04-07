// "use client"

// import { useEffect, useState } from "react";

// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../lib/firebase";

// type Match = {
//   id: string;
//   team1: string;
//   team2: string;
//   date: string;
// };

// export default function MatchList() {
//   const [matches, setMatches] = useState<Match[]>([]);

//   useEffect(() => {
//     const fetchMatches = async () => {
//       const querySnapshot = await getDocs(collection(db, "matches"));
//       const matchData = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       })) as Match[];
//       setMatches(matchData);
//     };

//     fetchMatches();
//   }, []);

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold text-white">Upcoming Matches</h2>
//       <div className="mt-4 grid gap-4">
//         {matches.length > 0 ? (
//           matches.map((match) => (
//             <div
//               key={match.id}
//               className="p-4 bg-gray-800 text-white rounded-lg shadow"
//             >
//               <p className="text-lg"> {match.matchTitle} </p>
//               <p className="text-sm text-gray-400">Date: {match.date}</p>
//               <p>Time: {match.time} </p>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-400">No matches found.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// "use client"

// import { fetchUpcomingMatches } from "@/app/api/fetchUpcomingMatches";
// import { useEffect, useState } from "react";

// export default function MatchList() {
//   const [matches, setMatches] = useState([]);

//   useEffect(() => {
//     async function loadMatches() {
//       const data = await fetchUpcomingMatches();
//       setMatches(data);
//     }
//     loadMatches();
//   }, []);

//   return (
//     <div>
//       <h1>Upcoming Matches</h1>
//       {matches.map((match) => (
//         <div key={match.id}>
//           <p>{match.team1} vs {match.team2}</p>
//           <p>{new Date(match.date).toLocaleString()}</p>
//         </div>
//       ))}
//     </div>
//   );
// }


// // googd
// "use client";

// import { fetchUpcomingMatches } from "@/app/api/fetchUpcomingMatches";
// import { useEffect, useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import Image from "next/image";

// export default function MatchList() {
//   const [matches, setMatches] = useState([]);

//   useEffect(() => {
//     async function loadMatches() {
//       const data = await fetchUpcomingMatches();
//       setMatches(data);
//     }
//     loadMatches();
//   }, []);

//   return (
//     <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//       {matches.length > 0 ? (
//         matches.map((match: any) => (
//           <Card key={match.id} className="rounded-xl shadow-lg border">
//             <CardHeader className="flex flex-col items-center">
//               <CardTitle className="text-lg font-bold text-center">
//                 {match.team1} <span className="text-gray-500">vs</span> {match.team2}
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="flex flex-col items-center gap-3">
//               {/* Team Images */}
//               <div className="flex items-center justify-center gap-4">
//                 <Image
//                   src={match.team1Image}
//                   alt={match.team1}
//                   width={50}
//                   height={50}
//                   className="rounded-full shadow-md"
//                 />
//                 <span className="text-lg font-semibold text-gray-600">VS</span>
//                 <Image
//                   src={match.team2Image}
//                   alt={match.team2}
//                   width={50}
//                   height={50}
//                   className="rounded-full shadow-md"
//                 />
//               </div>

//               {/* Match Date & Time */}
//               <div className="text-sm text-gray-700 text-center">
//                 <p className="font-semibold">📅 {new Date(match.date).toLocaleDateString()}</p>
//                 <p className="font-semibold">⏰ {new Date(match.date).toLocaleTimeString()}</p>
//               </div>
//             </CardContent>
//           </Card>
//         ))
//       ) : (
//         <p className="text-center text-gray-500">Loading matches...</p>
//       )}
//     </div>
//   );
// }




// "use client";

// import { fetchUpcomingMatches } from "@/app/api/fetchUpcomingMatches";
// import { useEffect, useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import Image from "next/image";

// const categories = [
//   { name: "League", key: "League", image: "/ipl.webp" },
//   { name: "International", key: "International", image: "/international.png" },
//   { name: "Domestic", key: "Domestic", image: "/Domestic.webp" },
//   { name: "Women", key: "Women", image: "/Woman.webp" },
// ];

// // Updated to handle numeric image IDs from Firebase
// const TEAM_IMAGE_BASE_URL = "https://firebasestorage.googleapis.com/v0/b/your-app-name.appspot.com/o/team-images%2F";

// const getTeamImageUrl = (imageId: number) => {
//   return `${TEAM_IMAGE_BASE_URL}${imageId}?alt=media`;
// };

// export default function MatchList() {
//   const [matches, setMatches] = useState<any[]>([]);
//   const [activeCategory, setActiveCategory] = useState("League");
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     async function loadMatches() {
//       setIsLoading(true);
//       try {
//         const data = await fetchUpcomingMatches();
//         setMatches(data);
//       } catch (error) {
//         console.error("Failed to fetch matches:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     loadMatches();
//   }, []);

//   const filteredMatches = matches.filter((match: any) =>
//     match.matchType === activeCategory
//   );

//   // Function to format date from Firebase timestamp
//   const formatFirebaseDate = (timestamp: string) => {
//     const date = new Date(parseInt(timestamp));
//     return date.toLocaleDateString("en-US", {
//       weekday: 'short',
//       month: 'short',
//       day: 'numeric'
//     });
//   };

//   const formatFirebaseTime = (timestamp: string) => {
//     const date = new Date(parseInt(timestamp));
//     return date.toLocaleTimeString("en-US", {
//       hour: '2-digit',
//       minute: '2-digit',
//       hour12: true
//     });
//   };

//   return (
//     <div className="p-4">
//       {/* Category Selector */}
//       <div className="flex flex-wrap gap-4 mb-6 justify-center">
//         {categories.map((category) => (
//           <button
//             key={category.key}
//             onClick={() => setActiveCategory(category.key)}
//             className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
//               activeCategory === category.key
//                 ? "bg-gray-800 text-white"
//                 : "bg-gray-200 hover:bg-gray-300 text-gray-800"
//             }`}
//           >
//             <Image
//               src={category.image}
//               alt={category.name}
//               width={24}
//               height={24}
//               className="object-contain"
//             />
//             {category.name}
//           </button>
//         ))}
//       </div>

//       {/* Matches Grid */}
//       {isLoading ? (
//         <p className="text-center text-gray-500">Loading matches...</p>
//       ) : filteredMatches.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {filteredMatches.map((match: any) => (
//             <Card
//               key={match.id}
//               className="rounded-xl border-gray-700 bg-gray-800 text-white shadow-lg hover:shadow-xl transition-shadow"
//             >
//               <CardHeader className="flex flex-col items-center pb-2">
//                 <CardTitle className="text-lg font-bold text-center">
//                   <span className="text-gray-100">{match.team1}</span>{" "}
//                   <span className="text-gray-400 mx-1">vs</span>{" "}
//                   <span className="text-gray-100">{match.team2}</span>
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="flex flex-col items-center gap-3">
//                 {/* Team Images */}
//                 <div className="flex items-center justify-center gap-4">
//                   <div className="flex flex-col items-center">
//                     <Image
//                       src={getTeamImageUrl(match.team1Image)}
//                       alt={match.team1}
//                       width={50}
//                       height={50}
//                       className="rounded-full shadow-md border-2 border-gray-600"
//                     />
//                     <span className="text-xs mt-1 text-gray-300">
//                       {match.team1.split(' ').map(word => word[0]).join('').toUpperCase()}
//                     </span>
//                   </div>
//                   <span className="text-lg font-semibold text-gray-400">VS</span>
//                   <div className="flex flex-col items-center">
//                     <Image
//                       src={getTeamImageUrl(match.team2Image)}
//                       alt={match.team2}
//                       width={50}
//                       height={50}
//                       className="rounded-full shadow-md border-2 border-gray-600"
//                     />
//                     <span className="text-xs mt-1 text-gray-300">
//                       {match.team2.split(' ').map(word => word[0]).join('').toUpperCase()}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Match Date & Time */}
//                 <div className="text-sm text-center bg-gray-700 rounded-lg p-2 w-full">
//                   <p className="font-semibold text-gray-200">
//                     📅 {formatFirebaseDate(match.date)}
//                   </p>
//                   <p className="font-semibold text-gray-200">
//                     ⏰ {formatFirebaseTime(match.date)}
//                   </p>
//                 </div>

//                 {/* Match Type */}
//                 <p className="text-xs text-gray-400 text-center">
//                   🏆 {match.matchType}
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       ) : (
//         <p className="text-center text-gray-400">No matches found for this category</p>
//       )}
//     </div>
//   );
// }






// "use client";

// import { fetchUpcomingMatches } from "@/app/api/fetchUpcomingMatches";
// import { useEffect, useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import Image from "next/image";

// const categories = [
//   { name: "League", key: "League", image: "/ipl.webp" },
//   { name: "International", key: "International", image: "/international.png" },
//   { name: "Domestic", key: "Domestic", image: "/Domestic.webp" },
//   { name: "Women", key: "Women", image: "/Woman.webp" },
// ];

// const IPL_TEAM_IMAGES: { [key: string]: string } = {
//   "Chennai Super Kings": "/images/CSK.png",
//   "Mumbai Indians": "/images/MI.webp",
//   "Kolkata Knight Riders": "/images/kkr.png",
//   "Sunrisers Hyderabad": "/images/SRH.png",
//   "Delhi Capitals": "/images/DC.webp",
//   "Lucknow Super Giants": "/images/LSG.png",
//   "Rajasthan Royals": "/images/RR.png",
//   "Punjab Kings": "/images/PBKS.webp",
//   "Gujarat Titans": "/images/GT.webp",
//   "Royal Challengers Bengaluru": "/images/rcb.png",
//   "New Zealand": "/images/nz.png", // Add international teams if needed
//   "Pakistan": "/images/pak.png",   // Add international teams if needed
// };

// const getTeamImage = (teamName: string) => IPL_TEAM_IMAGES[teamName] || "/fallback.jpg";

// export default function MatchList() {
//   const [matches, setMatches] = useState<any[]>([]);
//   const [activeCategory, setActiveCategory] = useState("League");
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     async function loadMatches() {
//       setIsLoading(true);
//       try {
//         const data = await fetchUpcomingMatches();
//         setMatches(data);
//       } catch (error) {
//         console.error("Failed to fetch matches:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     loadMatches();
//   }, []);

//   const filteredMatches = matches.filter((match: any) =>
//     match.matchType === activeCategory
//   );

//   const formatFirebaseDate = (timestamp: string) => {
//     const date = new Date(parseInt(timestamp));
//     return date.toLocaleDateString("en-US", {
//       weekday: 'short',
//       month: 'short',
//       day: 'numeric'
//     });
//   };

//   const formatFirebaseTime = (timestamp: string) => {
//     const date = new Date(parseInt(timestamp));
//     return date.toLocaleTimeString("en-US", {
//       hour: '2-digit',
//       minute: '2-digit',
//       hour12: true
//     });
//   };

//   return (
//     <div className="p-4">
//       {/* Category Selector */}
//       <div className="flex flex-wrap gap-4 mb-6 justify-center">
//         {categories.map((category) => (
//           <button
//             key={category.key}
//             onClick={() => setActiveCategory(category.key)}
//             className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
//               activeCategory === category.key
//                 ? "bg-green-600 text-white shadow-md"
//                 : "bg-gray-200 hover:bg-gray-300 text-gray-800"
//             }`}
//           >
//             <Image
//               src={category.image}
//               alt={category.name}
//               width={24}
//               height={24}
//               className="object-contain"
//             />
//             {category.name}
//           </button>
//         ))}
//       </div>

//       {/* Matches Grid */}
//       {isLoading ? (
//         <p className="text-center text-gray-500">Loading matches...</p>
//       ) : filteredMatches.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {filteredMatches.map((match: any) => (
//             <Card
//               key={match.id}
//               className="rounded-xl border-gray-700 bg-gray-800 text-white shadow-lg hover:shadow-xl transition-shadow"
//             >
//               <CardHeader className="flex flex-col items-center pb-2">
//                 <CardTitle className="text-lg font-bold text-center">
//                   <span className="text-gray-100">{match.team1}</span>{" "}
//                   <span className="text-gray-400 mx-1">vs</span>{" "}
//                   <span className="text-gray-100">{match.team2}</span>
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="flex flex-col items-center gap-3">
//                 {/* Team Images */}
//                 <div className="flex items-center justify-center gap-4">
//                   <div className="flex flex-col items-center">
//                     <div className="relative w-12 h-12">
//                       <Image
//                         src={getTeamImage(match.team1)}
//                         alt={match.team1}
//                         fill
//                         className="rounded-full object-contain shadow-md border-2 border-gray-600"
//                         onError={(e) => {
//                           (e.target as HTMLImageElement).src = '/fallback.jpg';
//                         }}
//                       />
//                     </div>
//                     <span className="text-xs mt-1 text-gray-300">
//                       {match.team1.split(' ').map(word => word[0]).join('').toUpperCase()}
//                     </span>
//                   </div>
//                   <span className="text-lg font-semibold text-gray-400">VS</span>
//                   <div className="flex flex-col items-center">
//                     <div className="relative w-12 h-12">
//                       <Image
//                         src={getTeamImage(match.team2)}
//                         alt={match.team2}
//                         fill
//                         className="rounded-full object-contain shadow-md border-2 border-gray-600"
//                         onError={(e) => {
//                           (e.target as HTMLImageElement).src = '/fallback.jpg';
//                         }}
//                       />
//                     </div>
//                     <span className="text-xs mt-1 text-gray-300">
//                       {match.team2.split(' ').map(word => word[0]).join('').toUpperCase()}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Match Date & Time */}
//                 <div className="text-sm text-center bg-gray-700 rounded-lg p-2 w-full">
//                   <p className="font-semibold text-gray-200">
//                      {formatFirebaseDate(match.date)}
//                   </p>
//                   <p className="font-semibold text-gray-200">
//                      {formatFirebaseTime(match.date)}
//                   </p>
//                 </div>

//                 {/* Match Type */}
//                 <p className="text-xs text-gray-400 text-center">
//                   🏆 {match.matchType}
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       ) : (
//         <p className="text-center text-gray-400">No matches found for this category</p>
//       )}
//     </div>
//   );
// }




// "use client";

// import { fetchUpcomingMatches } from "@/app/api/fetchUpcomingMatches";
// import { useEffect, useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "../../components/ui/button";


// const categories = [
//   { name: "League", key: "League", image: "/ipl.webp" },
//   { name: "International", key: "International", image: "/international.png" },
//   { name: "Domestic", key: "Domestic", image: "/Domestic.webp" },
//   { name: "Women", key: "Women", image: "/Woman.webp" },
// ];

// const IPL_TEAM_IMAGES: { [key: string]: string } = {
// "Chennai Super Kings": "/images/CSK.png",
//    "Mumbai Indians": "/images/MI.webp",
//    "Kolkata Knight Riders": "/images/kkr.png",
//    "Sunrisers Hyderabad": "/images/SRH.png",
//    "Delhi Capitals": "/images/DC.webp",
//    "Lucknow Super Giants": "/images/LSG.png",
//    "Rajasthan Royals": "/images/RR.png",
//    "Punjab Kings": "/images/PBKS.webp",
//    "Gujarat Titans": "/images/GT.webp",
//    "Royal Challengers Bengaluru": "/images/rcb.png",
//    "New Zealand": "/images/nz.png", // Add international teams if needed
//    "Pakistan": "/images/pak.png",   // Add international teams if needed
// };

// const getTeamImage = (teamName: string) => IPL_TEAM_IMAGES[teamName] || "/fallback.jpg";

// export default function MatchList() {
//   const [matches, setMatches] = useState<any[]>([]);
//   const [activeCategory, setActiveCategory] = useState("League");
//   const [isLoading, setIsLoading] = useState(true);
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     async function loadMatches() {
//       setIsLoading(true);
//       try {
//         const data = await fetchUpcomingMatches();
//         setMatches(data);
//       } catch (error) {
//         console.error("Failed to fetch matches:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     loadMatches();
//   }, []);

//   const filteredMatches = matches.filter((match: any) =>
//     match.matchType === activeCategory
//   );

//   const isToday = (timestamp: string) => {
//     const matchDate = new Date(parseInt(timestamp));
//     const today = new Date();
//     return (
//       matchDate.getDate() === today.getDate() &&
//       matchDate.getMonth() === today.getMonth() &&
//       matchDate.getFullYear() === today.getFullYear()
//     );
//   };

//   const getCountdown = (timestamp: string) => {
//     const matchTime = new Date(parseInt(timestamp)).getTime();
//     const now = currentTime.getTime();
//     const diff = matchTime - now;

//     if (diff <= 0) return "LIVE";

//     const hours = Math.floor(diff / (1000 * 60 * 60));
//     const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((diff % (1000 * 60)) / 1000);

//     return `${hours}h ${minutes}m ${seconds}s`;
//   };

//   const formatFirebaseDate = (timestamp: string) => {
//     const date = new Date(parseInt(timestamp));
//     return date.toLocaleDateString("en-US", {
//       weekday: 'short',
//       month: 'short',
//       day: 'numeric'
//     });
//   };

//   const formatFirebaseTime = (timestamp: string) => {
//     const date = new Date(parseInt(timestamp));
//     return date.toLocaleTimeString("en-US", {
//       hour: '2-digit',
//       minute: '2-digit',
//       hour12: true
//     });
//   };

//   return (
//     <div className="p-4">
//       {/* Category Selector */}
//       <div className="flex flex-wrap gap-4 mb-6 justify-center">
//         {categories.map((category) => (
//           <button
//             key={category.key}
//             onClick={() => setActiveCategory(category.key)}
//             className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
//               activeCategory === category.key
//                 ? "bg-green-600 text-white shadow-md"
//                 : "bg-gray-200 hover:bg-gray-300 text-gray-800"
//             }`}
//           >
//             <Image
//               src={category.image}
//               alt={category.name}
//               width={24}
//               height={24}
//               className="object-contain"
//             />
//             {category.name}
//           </button>
//         ))}
//       </div>

//       {/* Matches Grid */}
//       {isLoading ? (
//         <p className="text-center text-gray-500">Loading matches...</p>
//       ) : filteredMatches.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {filteredMatches.map((match: any) => {
//             const todayMatch = isToday(match.date);
//             const countdown = getCountdown(match.date);
            
//             return (
//               <Card
//                 key={match.id}
//                 className={`rounded-xl border-gray-700 bg-gray-800 text-white shadow-lg hover:shadow-xl transition-shadow ${
//                   todayMatch ? "border-green-500 border-2" : "border-gray-700"
//                 }`}
//               >
//                 <CardHeader className="flex flex-col items-center pb-2">
//                   <CardTitle className="text-lg font-bold text-center">
//                     <span className="text-gray-100">{match.team1}</span>{" "}
//                     <span className="text-gray-400 mx-1">vs</span>{" "}
//                     <span className="text-gray-100">{match.team2}</span>
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="flex flex-col items-center gap-3">
//                   {/* Team Images */}
//                   <div className="flex items-center justify-center gap-4">
//                     <div className="flex flex-col items-center">
//                       <div className="relative w-12 h-12">
//                         <Image
//                           src={getTeamImage(match.team1)}
//                           alt={match.team1}
//                           fill
//                           className="rounded-full object-contain shadow-md border-2 border-gray-600"
//                           onError={(e) => {
//                             (e.target as HTMLImageElement).src = '/fallback.jpg';
//                           }}
//                         />
//                       </div>
//                       <span className="text-xs mt-1 text-gray-300">
//                         {match.team1.split(' ').map(word => word[0]).join('').toUpperCase()}
//                       </span>
//                     </div>
//                     <span className="text-lg font-semibold text-gray-400">VS</span>
//                     <div className="flex flex-col items-center">
//                       <div className="relative w-12 h-12">
//                         <Image
//                           src={getTeamImage(match.team2)}
//                           alt={match.team2}
//                           fill
//                           className="rounded-full object-contain shadow-md border-2 border-gray-600"
//                           onError={(e) => {
//                             (e.target as HTMLImageElement).src = '/fallback.jpg';
//                           }}
//                         />
//                       </div>
//                       <span className="text-xs mt-1 text-gray-300">
//                         {match.team2.split(' ').map(word => word[0]).join('').toUpperCase()}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Match Date & Time with Countdown */}
//                   <div className="text-sm text-center bg-gray-700 rounded-lg p-2 w-full">
//                     <p className="font-semibold text-gray-200">
//                       {formatFirebaseDate(match.date)}
//                     </p>
//                     <p className={`font-semibold ${
//                       countdown === "LIVE" ? "text-green-400 animate-pulse" : "text-gray-200"
//                     }`}>
//                       {formatFirebaseTime(match.date)} {todayMatch && `(${countdown})`}
//                     </p>
//                   </div>

//                   {/* Build Team Button */}
//                   <Link href={`/build-team/${match.id}`} passHref>
//                     <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
//                       Build Team
//                     </Button>
//                   </Link>
//                 </CardContent>
//               </Card>
//             );
//           })}
//         </div>
//       ) : (
//         <p className="text-center text-gray-400">No matches found for this category</p>
//       )}
//     </div>
//   );
// } // GREAT


// "use client";

// import { useEffect, useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import Image from "next/image";
// import Link from "next/link";
// // import { Button } from "@/components/ui/button";
// // import { db } from "@/firebase";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import { Button } from "../../components/ui/button";

// const categories = [
//   { name: "League", key: "League", image: "/ipl.webp" },
//   { name: "International", key: "International", image: "/international.png" },
//   { name: "Domestic", key: "Domestic", image: "/Domestic.webp" },
//   { name: "Women", key: "Women", image: "/Woman.webp" },
// ];

// const IPL_TEAM_IMAGES: { [key: string]: string } = {
//   "Chennai Super Kings": "/images/CSK.png",
//   "Mumbai Indians": "/images/MI.webp",
//   "Kolkata Knight Riders": "/images/kkr.png",
//   "Sunrisers Hyderabad": "/images/SRH.png",
//   "Delhi Capitals": "/images/DC.webp",
//   "Lucknow Super Giants": "/images/LSG.png",
//   "Rajasthan Royals": "/images/RR.png",
//   "Punjab Kings": "/images/PBKS.webp",
//   "Gujarat Titans": "/images/GT.webp",
//   "Royal Challengers Bengaluru": "/images/rcb.png",
//   "New Zealand": "/images/nz.png",
//   "Pakistan": "/images/pak.png",
// };

// const getTeamImage = (teamName: string) => IPL_TEAM_IMAGES[teamName] || "/fallback.jpg";

// export default function MatchList() {
//   const [matches, setMatches] = useState<any[]>([]);
//   const [activeCategory, setActiveCategory] = useState("League");
//   const [isLoading, setIsLoading] = useState(true);
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [selectedMatch, setSelectedMatch] = useState<string | null>(null);
//   const [players, setPlayers] = useState<{team1: any[], team2: any[]} | null>(null);

//   const fetchMatches = async () => {
//     setIsLoading(true);
//     try {
//       const docRef = doc(db, "cricket", "upcomingMatches");
//       const docSnap = await getDoc(docRef);
      
//       if (docSnap.exists()) {
//         const data = docSnap.data();
//         const matchesArray = Object.keys(data)
//           .filter(key => key !== "lastUpdated")
//           .map(key => data[key]);
//         setMatches(matchesArray);
//       }
//     } catch (error) {
//       console.error("Failed to fetch matches:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMatches();
//     const timer = setInterval(() => setCurrentTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const isToday = (timestamp: string) => {
//     const matchDate = new Date(parseInt(timestamp));
//     const today = new Date();
//     return (
//       matchDate.getDate() === today.getDate() &&
//       matchDate.getMonth() === today.getMonth() &&
//       matchDate.getFullYear() === today.getFullYear()
//     );
//   };

//   const getCountdown = (timestamp: string) => {
//     const matchTime = new Date(parseInt(timestamp)).getTime();
//     const now = currentTime.getTime();
//     const diff = matchTime - now;

//     if (diff <= 0) return "LIVE";

//     const hours = Math.floor(diff / (1000 * 60 * 60));
//     const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((diff % (1000 * 60)) / 1000);

//     return `${hours}h ${minutes}m ${seconds}s`;
//   };

//   const formatFirebaseDate = (timestamp: string) => {
//     const date = new Date(parseInt(timestamp));
//     return date.toLocaleDateString("en-US", {
//       weekday: 'short',
//       month: 'short',
//       day: 'numeric'
//     });
//   };

//   const formatFirebaseTime = (timestamp: string) => {
//     const date = new Date(parseInt(timestamp));
//     return date.toLocaleTimeString("en-US", {
//       hour: '2-digit',
//       minute: '2-digit',
//       hour12: true
//     });
//   };

//   const handleShowPlayers = async (matchId: string) => {
//     const match = matches.find(m => m.id === matchId);
//     if (match?.players) {
//       setPlayers(match.players);
//       setSelectedMatch(matchId);
//     }
//   };

//   return (
//     <div className="p-4">
//       {/* Category Selector */}
//       <div className="flex flex-wrap gap-4 mb-6 justify-center">
//         {categories.map((category) => (
//           <Button
//             key={category.key}
//             onClick={() => setActiveCategory(category.key)}
//             className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
//               activeCategory === category.key
//                 ? "bg-green-600 text-white shadow-md"
//                 : "bg-gray-200 hover:bg-gray-300 text-gray-800"
//             }`}
//           >
//             <Image
//               src={category.image}
//               alt={category.name}
//               width={24}
//               height={24}
//               className="object-contain"
//             />
//             {category.name}
//           </Button>
//         ))}
//       </div>

//       {/* Matches Grid */}
//       {isLoading ? (
//         <p className="text-center text-gray-500">Loading matches...</p>
//       ) : (
//         <div className="space-y-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {matches
//               .filter((match: any) => match.matchType === activeCategory)
//               .map((match: any) => {
//                 const todayMatch = isToday(match.date);
//                 const countdown = todayMatch ? getCountdown(match.date) : null;

//                 return (
//                   <Card
//                     key={match.id}
//                     className={`rounded-xl border-gray-700 bg-gray-800 text-white shadow-lg hover:shadow-xl transition-shadow ${
//                       todayMatch ? "border-green-500 border-2" : ""
//                     }`}
//                   >
//                     <CardHeader className="flex flex-col items-center pb-2">
//                       <CardTitle className="text-lg font-bold text-center">
//                         <span className="text-gray-100">{match.team1}</span>{" "}
//                         <span className="text-gray-400 mx-1">vs</span>{" "}
//                         <span className="text-gray-100">{match.team2}</span>
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent className="flex flex-col items-center gap-3">
//                       {/* Team Images */}
//                       <div className="flex items-center justify-center gap-4">
//                         <div className="flex flex-col items-center">
//                           <div className="relative w-12 h-12">
//                             <Image
//                               src={getTeamImage(match.team1)}
//                               alt={match.team1}
//                               fill
//                               className="rounded-full object-contain shadow-md border-2 border-gray-600"
//                               onError={(e) => {
//                                 (e.target as HTMLImageElement).src = '/fallback.jpg';
//                               }}
//                             />
//                           </div>
//                           <span className="text-xs mt-1 text-gray-300">
//                             {match.team1.split(' ').map(word => word[0]).join('').toUpperCase()}
//                           </span>
//                         </div>
//                         <span className="text-lg font-semibold text-gray-400">VS</span>
//                         <div className="flex flex-col items-center">
//                           <div className="relative w-12 h-12">
//                             <Image
//                               src={getTeamImage(match.team2)}
//                               alt={match.team2}
//                               fill
//                               className="rounded-full object-contain shadow-md border-2 border-gray-600"
//                               onError={(e) => {
//                                 (e.target as HTMLImageElement).src = '/fallback.jpg';
//                               }}
//                             />
//                           </div>
//                           <span className="text-xs mt-1 text-gray-300">
//                             {match.team2.split(' ').map(word => word[0]).join('').toUpperCase()}
//                           </span>
//                         </div>
//                       </div>

//                       {/* Match Date & Time */}
//                       <div className="text-sm text-center bg-gray-700 rounded-lg p-2 w-full">
//                         <p className="font-semibold text-gray-200">
//                           {formatFirebaseDate(match.date)}
//                         </p>
//                         <p className={`font-semibold ${
//                           countdown === "LIVE" ? "text-green-400 animate-pulse" : "text-gray-200"
//                         }`}>
//                           {formatFirebaseTime(match.date)} {todayMatch && `(${countdown})`}
//                         </p>
//                       </div>

//                       {/* Action Buttons */}
//                       <div className="flex gap-2 w-full">
//                         <Button
//                           variant="outline"
//                           className="w-full bg-gray-700 hover:bg-gray-600 text-white"
//                           onClick={() => handleShowPlayers(match.id)}
//                         >
//                           Show Players
//                         </Button>
//                         <Link href={`/build-team/${match.id}`} passHref className="w-full">
//                           <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
//                             Build Team
//                           </Button>
//                         </Link>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 );
//               })}
//           </div>

//           {/* Players Panel */}
//           {selectedMatch && players && (
//             <div className="mt-8 p-4 bg-gray-800 rounded-lg">
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-xl font-bold">Players</h3>
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   onClick={() => setSelectedMatch(null)}
//                   className="text-gray-400 hover:text-white"
//                 >
//                   Close
//                 </Button>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {[players.team1, players.team2].map((team, index) => (
//                   <div key={index}>
//                     <h4 className="font-semibold mb-2 text-lg">
//                       {index === 0
//                         ? matches.find(m => m.id === selectedMatch)?.team1
//                         : matches.find(m => m.id === selectedMatch)?.team2}
//                     </h4>
//                     <ul className="space-y-2">
//                       {team.map((player) => (
//                         <li key={player.id} className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded">
//                           <span className="font-medium">{player.name}</span>
//                           <span className="text-xs text-gray-400 bg-gray-600 px-2 py-1 rounded">
//                             {player.role}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }






// "use client";

// import { useEffect, useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import Image from "next/image";
// import Link from "next/link";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import { Button } from "../../components/ui/button";

// const categories = [
//   { name: "League", key: "League", image: "/ipl.webp" },
//   { name: "International", key: "International", image: "/international.png" },
//   { name: "Domestic", key: "Domestic", image: "/Domestic.webp" },
//   { name: "Women", key: "Women", image: "/Woman.webp" },
// ];

// const IPL_TEAM_IMAGES: { [key: string]: string } = {
//   "Chennai Super Kings": "/images/CSK.png",
//   "Mumbai Indians": "/images/MI.webp",
//   "Kolkata Knight Riders": "/images/kkr.png",
//   "Sunrisers Hyderabad": "/images/SRH (2).png",
//   "Delhi Capitals": "/images/DC.webp",
//   "Lucknow Super Giants": "/images/LSG (2).png",
//   "Rajasthan Royals": "/images/RR (2).png",
//   "Punjab Kings": "/images/PBKS.webp",
//   "Gujarat Titans": "/images/GT.webp",
//   "Royal Challengers Bengaluru": "/images/rcb.png",
//   "New Zealand": "/images/nz.png",
//   "Pakistan": "/images/pak.png",
//   // Add other teams as needed
// };

// const getTeamImage = (teamName: string) => IPL_TEAM_IMAGES[teamName] || "/fallback.jpg";

// export default function MatchList() {
//   const [matches, setMatches] = useState<any[]>([]);
//   const [activeCategory, setActiveCategory] = useState("League");
//   const [isLoading, setIsLoading] = useState(true);
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [selectedMatch, setSelectedMatch] = useState<string | null>(null);
//   const [players, setPlayers] = useState<{team1: any[], team2: any[]} | null>(null);

//   const fetchMatches = async () => {
//     setIsLoading(true);
//     try {
//       const docRef = doc(db, "cricket", "upcomingMatches");
//       const docSnap = await getDoc(docRef);
      
//       if (docSnap.exists()) {
//         const data = docSnap.data();
//         // Access the matches array from the document
//         const matchesArray = data.matches || [];
//         setMatches(matchesArray);
//       }
//     } catch (error) {
//       console.error("Failed to fetch matches:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMatches();
//     const timer = setInterval(() => setCurrentTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const isToday = (timestamp: string) => {
//     const matchDate = new Date(parseInt(timestamp));
//     const today = new Date();
//     return (
//       matchDate.getDate() === today.getDate() &&
//       matchDate.getMonth() === today.getMonth() &&
//       matchDate.getFullYear() === today.getFullYear()
//     );
//   };

//   const getCountdown = (timestamp: string) => {
//     const matchTime = new Date(parseInt(timestamp)).getTime();
//     const now = currentTime.getTime();
//     const diff = matchTime - now;

//     if (diff <= 0) return "LIVE";

//     const hours = Math.floor(diff / (1000 * 60 * 60));
//     const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((diff % (1000 * 60)) / 1000);

//     return `${hours}h ${minutes}m ${seconds}s`;
//   };

//   const formatFirebaseDate = (timestamp: string) => {
//     const date = new Date(parseInt(timestamp));
//     return date.toLocaleDateString("en-US", {
//       weekday: 'short',
//       month: 'short',
//       day: 'numeric'
//     });
//   };

//   const formatFirebaseTime = (timestamp: string) => {
//     const date = new Date(parseInt(timestamp));
//     return date.toLocaleTimeString("en-US", {
//       hour: '2-digit',
//       minute: '2-digit',
//       hour12: true
//     });
//   };

//   const handleShowPlayers = async (matchId: string) => {
//     try {
//       // Fetch player data from Firestore
//       const docRef = doc(db, "cricket", "matchPlayers");
//       const docSnap = await getDoc(docRef);
      
//       if (docSnap.exists()) {
//         const data = docSnap.data();
//         const matchData = data[matchId];
        
//         if (matchData?.players) {
//           setPlayers(matchData.players);
//           setSelectedMatch(matchId);
//         } else {
//           // If player data doesn't exist, fetch from API
//           const response = await fetch(`/api/saveMatchPlayers`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ matchId })
//           });
//           const result = await response.json();
          
//           if (result.success) {
//             setPlayers(result.data.players);
//             setSelectedMatch(matchId);
//           }
//         }
//       }
//     } catch (error) {
//       console.error("Failed to fetch players:", error);
//     }
//   };

//   return (
//     <div className="p-4">
//       {/* Category Selector */}
//       <div className="flex flex-wrap gap-4 mb-6 justify-center">
//         {categories.map((category) => (
//           <Button
//             key={category.key}
//             onClick={() => setActiveCategory(category.key)}
//             className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
//               activeCategory === category.key
//                 ? "bg-green-600 text-white shadow-md"
//                 : "bg-gray-200 hover:bg-gray-300 text-gray-800"
//             }`}
//           >
//             <Image
//               src={category.image}
//               alt={category.name}
//               width={24}
//               height={24}
//               className="object-contain"
//             />
//             {category.name}
//           </Button>
//         ))}
//       </div>

//       {/* Matches Grid */}
//       {isLoading ? (
//         <p className="text-center text-gray-500">Loading matches...</p>
//       ) : matches.length > 0 ? (
//         <div className="space-y-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {matches
//               .filter((match: any) => match.matchType === activeCategory)
//               .map((match: any) => {
//                 const todayMatch = isToday(match.date);
//                 const countdown = todayMatch ? getCountdown(match.date) : null;

//                 return (
//                   <Card
//                     key={match.id}
//                     className={`rounded-xl border-gray-700 bg-gray-800 text-white shadow-lg hover:shadow-xl transition-shadow ${
//                       todayMatch ? "border-green-500 border-2" : ""
//                     }`}
//                   >
//                     <CardHeader className="flex flex-col items-center pb-2">
//                       <CardTitle className="text-lg font-bold text-center">
//                         <span className="text-gray-100">{match.team1}</span>{" "}
//                         <span className="text-gray-400 mx-1">vs</span>{" "}
//                         <span className="text-gray-100">{match.team2}</span>
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent className="flex flex-col items-center gap-3">
//                       {/* Team Images */}
//                       <div className="flex items-center justify-center gap-4">
//                         <div className="flex flex-col items-center">
//                           <div className="relative w-12 h-12">
//                             <Image
//                               src={getTeamImage(match.team1)}
//                               alt={match.team1}
//                               fill
//                               className="rounded-full object-contain shadow-md border-2 border-gray-600"
//                               onError={(e) => {
//                                 (e.target as HTMLImageElement).src = '/fallback.jpg';
//                               }}
//                             />
//                           </div>
//                           <span className="text-xs mt-1 text-gray-300">
//                             {match.team1.split(' ').map(word => word[0]).join('').toUpperCase()}
//                           </span>
//                         </div>
//                         <span className="text-lg font-semibold text-gray-400">VS</span>
//                         <div className="flex flex-col items-center">
//                           <div className="relative w-12 h-12">
//                             <Image
//                               src={getTeamImage(match.team2)}
//                               alt={match.team2}
//                               fill
//                               className="rounded-full object-contain shadow-md border-2 border-gray-600"
//                               onError={(e) => {
//                                 (e.target as HTMLImageElement).src = '/fallback.jpg';
//                               }}
//                             />
//                           </div>
//                           <span className="text-xs mt-1 text-gray-300">
//                             {match.team2.split(' ').map(word => word[0]).join('').toUpperCase()}
//                           </span>
//                         </div>
//                       </div>

//                       {/* Match Date & Time */}
//                       <div className="text-sm text-center bg-gray-700 rounded-lg p-2 w-full">
//                         <p className="font-semibold text-gray-200">
//                           {formatFirebaseDate(match.date)}
//                         </p>
//                         <p className={`font-semibold ${
//                           countdown === "LIVE" ? "text-green-400 animate-pulse" : "text-gray-200"
//                         }`}>
//                           {formatFirebaseTime(match.date)} {todayMatch && `(${countdown})`}
//                         </p>
//                       </div>

//                       {/* Action Buttons */}
//                       <div className="flex gap-2 w-full">
//                         <Button
//                           variant="outline"
//                           className="w-full bg-gray-700 hover:bg-gray-600 text-white"
//                           onClick={() => handleShowPlayers(match.id)}
//                         >
//                           Show Players
//                         </Button>
//                         <Link href={`/build-team/${match.id}`} passHref className="w-full">
//                           <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
//                             Build Team
//                           </Button>
//                         </Link>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 );
//               })}
//           </div>

//           {/* Players Panel */}
//           {selectedMatch && players && (
//             <div className="mt-8 p-4 bg-gray-800 rounded-lg">
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-xl font-bold">Players</h3>
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   onClick={() => setSelectedMatch(null)}
//                   className="text-gray-400 hover:text-white"
//                 >
//                   Close
//                 </Button>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {[players.team1, players.team2].map((team, index) => (
//                   <div key={index}>
//                     <h4 className="font-semibold mb-2 text-lg">
//                       {index === 0
//                         ? matches.find(m => m.id === selectedMatch)?.team1
//                         : matches.find(m => m.id === selectedMatch)?.team2}
//                     </h4>
//                     <ul className="space-y-2">
//                       {team.map((player) => (
//                         <li key={player.id} className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded">
//                           <span className="font-medium">{player.name}</span>
//                           <span className="text-xs text-gray-400 bg-gray-600 px-2 py-1 rounded">
//                             {player.role}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       ) : (
//         <p className="text-center text-gray-400">No matches found</p>
//       )}
//     </div>
//   );
// } = FINAL



// "use client";

// import { useEffect, useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import Image from "next/image";
// import Link from "next/link";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import { Button } from "../../components/ui/button";

// const categories = [
//   { name: "League", key: "League", image: "/ipl.webp" },
//   { name: "International", key: "International", image: "/international.png" },
//   { name: "Domestic", key: "Domestic", image: "/Domestic.webp" },
//   { name: "Women", key: "Women", image: "/Woman.webp" },
// ];

// const IPL_TEAM_IMAGES: { [key: string]: string } = {
//   "Chennai Super Kings": "/images/CSK.png",
//   "Mumbai Indians": "/images/MI.webp",
//   "Kolkata Knight Riders": "/images/kkr.png",
//   "Sunrisers Hyderabad": "/images/SRH (2).png",
//   "Delhi Capitals": "/images/DC.webp",
//   "Lucknow Super Giants": "/images/LSG (2).png",
//   "Rajasthan Royals": "/images/RR (2).png",
//   "Punjab Kings": "/images/PBKS.webp",
//   "Gujarat Titans": "/images/GT.webp",
//   "Royal Challengers Bengaluru": "/images/rcb.png",
//   "New Zealand": "/images/nz.png",
//   "Pakistan": "/images/pak.png",
//   // Add other teams as needed
// }

// const getTeamImage = (teamName: string) => IPL_TEAM_IMAGES[teamName] || "/fallback.jpg";

// export default function MatchList() {
//   const [matches, setMatches] = useState<any[]>([]);
//   const [activeCategory, setActiveCategory] = useState("League");
//   const [isLoading, setIsLoading] = useState(true);
//   const [currentTime, setCurrentTime] = useState(new Date());

//   const fetchMatches = async () => {
//     setIsLoading(true);
//     try {
//       const docRef = doc(db, "cricket", "upcomingMatches");
//       const docSnap = await getDoc(docRef);
      
//       if (docSnap.exists()) {
//         const data = docSnap.data();
//         const matchesArray = data.matches || [];
//         setMatches(matchesArray);
//       } else {
//         console.log("No matches found in Firestore");
//       }
//     } catch (error) {
//       console.error("Failed to fetch matches:", error);
//       // Check if it's a permissions error
//       if (error.code === 'permission-denied') {
//         console.error("Firestore permission denied. Check your Firestore rules.");
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMatches();
//     const timer = setInterval(() => setCurrentTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const isToday = (timestamp: string) => {
//     const matchDate = new Date(parseInt(timestamp));
//     const today = new Date();
//     return (
//       matchDate.getDate() === today.getDate() &&
//       matchDate.getMonth() === today.getMonth() &&
//       matchDate.getFullYear() === today.getFullYear()
//     );
//   };

//   const getCountdown = (timestamp: string) => {
//     const matchTime = new Date(parseInt(timestamp)).getTime();
//     const now = currentTime.getTime();
//     const diff = matchTime - now;

//     if (diff <= 0) return "LIVE";

//     const hours = Math.floor(diff / (1000 * 60 * 60));
//     const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((diff % (1000 * 60)) / 1000);

//     return `${hours}h ${minutes}m ${seconds}s`;
//   };

//   const formatFirebaseDate = (timestamp: string) => {
//     const date = new Date(parseInt(timestamp));
//     return date.toLocaleDateString("en-US", {
//       weekday: 'short',
//       month: 'short',
//       day: 'numeric'
//     });
//   };

//   const formatFirebaseTime = (timestamp: string) => {
//     const date = new Date(parseInt(timestamp));
//     return date.toLocaleTimeString("en-US", {
//       hour: '2-digit',
//       minute: '2-digit',
//       hour12: true
//     });
//   };

//   return (
//     <div className="p-4">
//       {/* Category Selector */}
//       <div className="flex flex-wrap gap-4 mb-6 justify-center">
//         {categories.map((category) => (
//           <Button
//             key={category.key}
//             onClick={() => setActiveCategory(category.key)}
//             className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
//               activeCategory === category.key
//                 ? "bg-green-600 text-white shadow-md"
//                 : "bg-gray-200 hover:bg-gray-300 text-gray-800"
//             }`}
//           >
//             <Image
//               src={category.image}
//               alt={category.name}
//               width={24}
//               height={24}
//               className="object-contain"
//             />
//             {category.name}
//           </Button>
//         ))}
//       </div>

//       {/* Matches Grid */}
//       {isLoading ? (
//         <p className="text-center text-gray-500">Loading matches...</p>
//       ) : matches.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {matches
//             .filter((match: any) => match.matchType === activeCategory)
//             .map((match: any) => {
//               const todayMatch = isToday(match.date);
//               const countdown = todayMatch ? getCountdown(match.date) : null;

//               return (
//                 <Card
//                   key={match.id}
//                   className={`rounded-xl border-gray-700 bg-gray-800 text-white shadow-lg hover:shadow-xl transition-shadow ${
//                     todayMatch ? "border-green-500 border-2" : ""
//                   }`}
//                 >
//                   <CardHeader className="flex flex-col items-center pb-2">
//                     <CardTitle className="text-lg font-bold text-center">
//                       <span className="text-gray-100">{match.team1}</span>{" "}
//                       <span className="text-gray-400 mx-1">vs</span>{" "}
//                       <span className="text-gray-100">{match.team2}</span>
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent className="flex flex-col items-center gap-3">
//                     {/* Team Images */}
//                     <div className="flex items-center justify-center gap-4">
//                       <div className="flex flex-col items-center">
//                         <div className="relative w-12 h-12">
//                           <Image
//                             src={getTeamImage(match.team1)}
//                             alt={match.team1}
//                             fill
//                             className="rounded-full object-contain shadow-md border-2 border-gray-600"
//                             onError={(e) => {
//                               (e.target as HTMLImageElement).src = '/fallback.jpg';
//                             }}
//                           />
//                         </div>
//                         <span className="text-xs mt-1 text-gray-300">
//                           {match.team1.split(' ').map(word => word[0]).join('').toUpperCase()}
//                         </span>
//                       </div>
//                       <span className="text-lg font-semibold text-gray-400">VS</span>
//                       <div className="flex flex-col items-center">
//                         <div className="relative w-12 h-12">
//                           <Image
//                             src={getTeamImage(match.team2)}
//                             alt={match.team2}
//                             fill
//                             className="rounded-full object-contain shadow-md border-2 border-gray-600"
//                             onError={(e) => {
//                               (e.target as HTMLImageElement).src = '/fallback.jpg';
//                             }}
//                           />
//                         </div>
//                         <span className="text-xs mt-1 text-gray-300">
//                           {match.team2.split(' ').map(word => word[0]).join('').toUpperCase()}
//                         </span>
//                       </div>
//                     </div>

//                     {/* Match Date & Time */}
//                     <div className="text-sm text-center bg-gray-700 rounded-lg p-2 w-full">
//                       <p className="font-semibold text-gray-200">
//                         {formatFirebaseDate(match.date)}
//                       </p>
//                       <p className={`font-semibold ${
//                         countdown === "LIVE" ? "text-green-400 animate-pulse" : "text-gray-200"
//                       }`}>
//                         {formatFirebaseTime(match.date)} {todayMatch && `(${countdown})`}
//                       </p>
//                     </div>

//                     {/* Build Team Button */}
//                     <Link href={`/build-team/${match.id}`} passHref className="w-full">
//                       <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
//                         Build Team
//                       </Button>
//                     </Link>
//                   </CardContent>
//                 </Card>
//               );
//             })}
//         </div>
//       ) : (
//         <p className="text-center text-gray-400">No matches found</p>
//       )}
//       <h2 className="font-bold items-center text-center mt-5 text-emerald-500">Coming Soon</h2>
//     </div>
//   );
// }  = perfect






















// "use client";

// import { useEffect, useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import Image from "next/image";
// import Link from "next/link";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import { Button } from "../../components/ui/button";

// const categories = [
//   { name: "League", key: "League", image: "/ipl.webp" },
//   { name: "International", key: "International", image: "/international.png" },
//   { name: "Domestic", key: "Domestic", image: "/Domestic.webp" },
//   { name: "Women", key: "Women", image: "/Woman.webp" },
// ];

// const IPL_TEAM_IMAGES: { [key: string]: string } = {
//   "Chennai Super Kings": "/images/CSK.png",
//   "Mumbai Indians": "/images/MI.webp",
//   "Kolkata Knight Riders": "/images/kkr.png",
//   "Sunrisers Hyderabad": "/images/SRH (2).png",
//   "Delhi Capitals": "/images/DC.webp",
//   "Lucknow Super Giants": "/images/LSG (2).png",
//   "Rajasthan Royals": "/images/RR (2).png",
//   "Punjab Kings": "/images/PBKS.webp",
//   "Gujarat Titans": "/images/GT.webp",
//   "Royal Challengers Bengaluru": "/images/rcb.png",
//   "New Zealand": "/images/nz.png",
//   "Pakistan": "/images/pak.png",
//   // Add other teams as needed
// }

// const getTeamImage = (teamName: string) => IPL_TEAM_IMAGES[teamName] || "/fallback.jpg";

// export default function MatchList() {
//   const [matches, setMatches] = useState<any[]>([]);
//   const [activeCategory, setActiveCategory] = useState("League");
//   const [isLoading, setIsLoading] = useState(true);
//   const [currentTime, setCurrentTime] = useState(new Date());

//   const fetchMatches = async () => {
//     setIsLoading(true);
//     try {
//       const docRef = doc(db, "cricket", "upcomingMatches");
//       const docSnap = await getDoc(docRef);
      
//       if (docSnap.exists()) {
//         const data = docSnap.data();
//         const matchesArray = data.matches || [];
//         setMatches(matchesArray);
//       } else {
//         console.log("No matches found in Firestore");
//       }
//     } catch (error) {
//       console.error("Failed to fetch matches:", error);
//       if (error.code === 'permission-denied') {
//         console.error("Firestore permission denied. Check your Firestore rules.");
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMatches();
//     const timer = setInterval(() => setCurrentTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const isToday = (timestamp: string) => {
//     const matchDate = new Date(parseInt(timestamp));
//     const today = new Date();
//     return (
//       matchDate.getDate() === today.getDate() &&
//       matchDate.getMonth() === today.getMonth() &&
//       matchDate.getFullYear() === today.getFullYear()
//     );
//   };

//   const getCountdown = (timestamp: string) => {
//     const matchTime = new Date(parseInt(timestamp)).getTime();
//     const now = currentTime.getTime();
//     const diff = matchTime - now;

//     if (diff <= 0) return "LIVE";

//     const hours = Math.floor(diff / (1000 * 60 * 60));
//     const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((diff % (1000 * 60)) / 1000);

//     return `${hours}h ${minutes}m ${seconds}s`;
//   };

//   const hasMatchStarted = (timestamp: string) => {
//     const matchTime = new Date(parseInt(timestamp)).getTime();
//     const now = currentTime.getTime();
//     return matchTime - now <= 0;
//   };

//   const formatFirebaseDate = (timestamp: string) => {
//     const date = new Date(parseInt(timestamp));
//     return date.toLocaleDateString("en-US", {
//       weekday: 'short',
//       month: 'short',
//       day: 'numeric'
//     });
//   };

//   const formatFirebaseTime = (timestamp: string) => {
//     const date = new Date(parseInt(timestamp));
//     return date.toLocaleTimeString("en-US", {
//       hour: '2-digit',
//       minute: '2-digit',
//       hour12: true
//     });
//   };

//   return (
//     <div className="p-4">
//       {/* Category Selector */}
//       <div className="flex flex-wrap gap-4 mb-6 justify-center">
//         {categories.map((category) => (
//           <Button
//             key={category.key}
//             onClick={() => setActiveCategory(category.key)}
//             className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
//               activeCategory === category.key
//                 ? "bg-green-600 text-white shadow-md"
//                 : "bg-gray-200 hover:bg-gray-300 text-gray-800"
//             }`}
//           >
//             <Image
//               src={category.image}
//               alt={category.name}
//               width={24}
//               height={24}
//               className="object-contain"
//             />
//             {category.name}
//           </Button>
//         ))}
//       </div>

//       {/* Loading Spinner */}
//       {isLoading && (
//         <div className="flex justify-center items-center h-64">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
//         </div>
//       )}

//       {/* Matches Grid */}
//       {!isLoading && matches.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {matches
//             .filter((match: any) => match.matchType === activeCategory)
//             .map((match: any) => {
//               const todayMatch = isToday(match.date);
//               const countdown = todayMatch ? getCountdown(match.date) : null;
//               const matchStarted = hasMatchStarted(match.date);

//               return (
//                 <Card
//                   key={match.id}
//                   className={`rounded-xl border-gray-700 bg-gray-800 text-white shadow-lg hover:shadow-xl transition-shadow ${
//                     todayMatch ? "border-green-500 border-2" : ""
//                   }`}
//                 >
//                   <CardHeader className="flex flex-col items-center pb-2">
//                     <CardTitle className="text-lg font-bold text-center">
//                       <span className="text-gray-100">{match.team1}</span>{" "}
//                       <span className="text-gray-400 mx-1">vs</span>{" "}
//                       <span className="text-gray-100">{match.team2}</span>
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent className="flex flex-col items-center gap-3">
//                     {/* Team Images */}
//                     <div className="flex items-center justify-center gap-4">
//                       <div className="flex flex-col items-center">
//                         <div className="relative w-12 h-12">
//                           <Image
//                             src={getTeamImage(match.team1)}
//                             alt={match.team1}
//                             fill
//                             className="rounded-full object-contain shadow-md border-2 border-gray-600"
//                             onError={(e) => {
//                               (e.target as HTMLImageElement).src = '/fallback.jpg';
//                             }}
//                           />
//                         </div>
//                         <span className="text-xs mt-1 text-gray-300">
//                           {match.team1.split(' ').map(word => word[0]).join('').toUpperCase()}
//                         </span>
//                       </div>
//                       <span className="text-lg font-semibold text-gray-400">VS</span>
//                       <div className="flex flex-col items-center">
//                         <div className="relative w-12 h-12">
//                           <Image
//                             src={getTeamImage(match.team2)}
//                             alt={match.team2}
//                             fill
//                             className="rounded-full object-contain shadow-md border-2 border-gray-600"
//                             onError={(e) => {
//                               (e.target as HTMLImageElement).src = '/fallback.jpg';
//                             }}
//                           />
//                         </div>
//                         <span className="text-xs mt-1 text-gray-300">
//                           {match.team2.split(' ').map(word => word[0]).join('').toUpperCase()}
//                         </span>
//                       </div>
//                     </div>

//                     {/* Match Date & Time */}
//                     <div className="text-sm text-center bg-gray-700 rounded-lg p-2 w-full">
//                       <p className="font-semibold text-gray-200">
//                         {formatFirebaseDate(match.date)}
//                       </p>
//                       <p className={`font-semibold ${
//                         countdown === "LIVE" ? "text-green-400 animate-pulse" : "text-gray-200"
//                       }`}>
//                         {formatFirebaseTime(match.date)} {todayMatch && `(${countdown})`}
//                       </p>
//                     </div>

//                     {/* Build Team Button - Only show if match has started */}
//                     {matchStarted && (
//                       <Link href={`/build-team/${match.id}`} passHref className="w-full">
//                         <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
//                           Build Team
//                         </Button>
//                       </Link>
//                     )}
//                   </CardContent>
//                 </Card>
//               );
//             })}
//         </div>
//       ) : !isLoading && (
//         <p className="text-center text-gray-00">No matches found</p>
//       )}
//     </div>
//   );
// }











// // import { fetchMatchesFromFirestore } from "@/app/api/user/fetchMatchesFromFirestore";
// // import { useEffect, useState } from "react";

// // export default function MatchList() {
// //   const [matches, setMatches] = useState([]);

// //   useEffect(() => {
// //     async function loadMatches() {
// //       const data = await fetchMatchesFromFirestore(); // Fetch from Firestore
// //       setMatches(data);
// //     }
// //     loadMatches();
// //   }, []);

// //   return (
// //     <div>
// //       <h1>Upcoming Matches</h1>
// //       {matches.length > 0 ? (
// //         matches.map((match) => (
// //           <div key={match.id}>
// //             <p>{match.team1} vs {match.team2}</p>
// //             <p>{new Date(match.date).toLocaleString()}</p>
// //           </div>
// //         ))
// //       ) : (
// //         <p>Loading matches...</p>
// //       )}
// //     </div>
// //   );
// // }


// // import { fetchMatchesFromFirestore } from "@/app/api/fetchMatchesFromFirestore";
// // import { useEffect, useState } from "react";

// // export default function MatchList() {
// //   const [matches, setMatches] = useState([]);

// //   useEffect(() => {
// //     async function loadMatches() {
// //       const data = await fetchMatchesFromFirestore();
// //       setMatches(data);
// //     }
// //     loadMatches();
// //   }, []);

// //   return (
// //     <div>
// //       <h1>Upcoming Matches</h1>
// //       {matches.map(match => (
// //         <div key={match.id}>
// //           <p>{match.team1} vs {match.team2}</p>
// //           <p>{new Date(match.date).toLocaleString()}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }













// "use client";

// import { useEffect, useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import Image from "next/image";
// import Link from "next/link";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import { Button } from "../../components/ui/button";

// const categories = [
//   { name: "League", key: "League", image: "/ipl.webp" },
//   { name: "International", key: "International", image: "/international.png" },
//   { name: "Domestic", key: "Domestic", image: "/Domestic.webp" },
//   { name: "Women", key: "Women", image: "/Woman.webp" },
// ];

// const IPL_TEAM_IMAGES: { [key: string]: string } = {
//   "Chennai Super Kings": "/images/CSK.png",
//   "Mumbai Indians": "/images/MI.webp",
//   "Kolkata Knight Riders": "/images/kkr.png",
//   "Sunrisers Hyderabad": "/images/SRH (2).png",
//   "Delhi Capitals": "/images/DC.webp",
//   "Lucknow Super Giants": "/images/LSG (2).png",
//   "Rajasthan Royals": "/images/RR (2).png",
//   "Punjab Kings": "/images/PBKS.webp",
//   "Gujarat Titans": "/images/GT.webp",
//   "Royal Challengers Bengaluru": "/images/rcb.png",
//   "New Zealand": "/images/nz.png",
//   "Pakistan": "/images/pak.png",
//   // Add other teams as needed
// }

// const getTeamImage = (teamName: string) => IPL_TEAM_IMAGES[teamName] || "/fallback.png";

// export default function MatchList() {
//   const [matches, setMatches] = useState<any[]>([]);
//   const [activeCategory, setActiveCategory] = useState("League");
//   const [isLoading, setIsLoading] = useState(true);
//   const [currentTime, setCurrentTime] = useState(new Date());

//   const fetchMatches = async () => {
//     setIsLoading(true);
//     try {
//       const docRef = doc(db, "cricket", "upcomingMatches");
//       const docSnap = await getDoc(docRef);
      
//       if (docSnap.exists()) {
//         const data = docSnap.data();
//         const matchesArray = data.matches || [];
//         setMatches(matchesArray);
//       } else {
//         console.log("No matches found in Firestore");
//       }
//     } catch (error) {
//       console.error("Failed to fetch matches:", error);
//       if (error.code === 'permission-denied') {
//         console.error("Firestore permission denied. Check your Firestore rules.");
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMatches();
//     const timer = setInterval(() => setCurrentTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const isToday = (timestamp: string) => {
//     const matchDate = new Date(parseInt(timestamp));
//     const today = new Date();
//     return (
//       matchDate.getDate() === today.getDate() &&
//       matchDate.getMonth() === today.getMonth() &&
//       matchDate.getFullYear() === today.getFullYear()
//     );
//   };

//   const getCountdown = (timestamp: string) => {
//     const matchTime = new Date(parseInt(timestamp)).getTime();
//     const now = currentTime.getTime();
//     const diff = matchTime - now;

//     if (diff <= 0) return "LIVE";

//     const hours = Math.floor(diff / (1000 * 60 * 60));
//     const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((diff % (1000 * 60)) / 1000);

//     return `${hours}h ${minutes}m ${seconds}s`;
//   };

//   const formatFirebaseDate = (timestamp: string) => {
//     const date = new Date(parseInt(timestamp));
//     return date.toLocaleDateString("en-US", {
//       weekday: 'short',
//       month: 'short',
//       day: 'numeric'
//     });
//   };

//   const formatFirebaseTime = (timestamp: string) => {
//     const date = new Date(parseInt(timestamp));
//     return date.toLocaleTimeString("en-US", {
//       hour: '2-digit',
//       minute: '2-digit',
//       hour12: true
//     });
//   };

//   return (
//     <div className="p-4">
//       {/* Category Selector */}
//       <div className="flex flex-wrap gap-4 mb-6 justify-center">
//         {categories.map((category) => (
//           <Button
//             key={category.key}
//             onClick={() => setActiveCategory(category.key)}
//             className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
//               activeCategory === category.key
//                 ? "bg-green-600 text-white shadow-md"
//                 : "bg-gray-200 hover:bg-gray-300 text-gray-800"
//             }`}
//           >
//             <Image
//               src={category.image}
//               alt={category.name}
//               width={24}
//               height={24}
//               className="object-contain"
//             />
//             {category.name}
//           </Button>
//         ))}
//       </div>

//       {/* Loading Spinner */}
//       {isLoading && (
//         <div className="flex justify-center items-center h-64">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
//         </div>
//       )}

//       {/* Matches Grid */}
//       {!isLoading && matches.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {matches
//             .filter((match: any) => match.matchType === activeCategory)
//             .map((match: any) => {
//               const todayMatch = isToday(match.date);
//               const countdown = todayMatch ? getCountdown(match.date) : null;

//               return (
//                 <Card
//                   key={match.id}
//                   className={`rounded-xl border-gray-700 bg-gray-800 text-white shadow-lg hover:shadow-xl transition-shadow ${
//                     todayMatch ? "border-green-500 border-2" : ""
//                   }`}
//                 >
//                   <CardHeader className="flex flex-col items-center pb-2">
//                     <CardTitle className="text-lg font-bold text-center">
//                       <span className="text-gray-100">{match.team1}</span>{" "}
//                       <span className="text-gray-400 mx-1">vs</span>{" "}
//                       <span className="text-gray-100">{match.team2}</span>
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent className="flex flex-col items-center gap-3">
//                     {/* Team Images */}
//                     <div className="flex items-center justify-center gap-4">
//                       <div className="flex flex-col items-center">
//                         <div className="relative w-12 h-12">
//                           <Image
//                             src={getTeamImage(match.team1)}
//                             alt={match.team1}
//                             fill
//                             className="rounded-full object-contain shadow-md border-2 border-gray-600"
//                             onError={(e) => {
//                               (e.target as HTMLImageElement).src = '/fallback.jpg';
//                             }}
//                           />
//                         </div>
//                         <span className="text-xs mt-1 text-gray-300">
//                           {match.team1.split(' ').map(word => word[0]).join('').toUpperCase()}
//                         </span>
//                       </div>
//                       <span className="text-lg font-semibold text-gray-400">VS</span>
//                       <div className="flex flex-col items-center">
//                         <div className="relative w-12 h-12">
//                           <Image
//                             src={getTeamImage(match.team2)}
//                             alt={match.team2}
//                             fill
//                             className="rounded-full object-contain shadow-md border-2 border-gray-600"
//                             onError={(e) => {
//                               (e.target as HTMLImageElement).src = '/fallback.jpg';
//                             }}
//                           />
//                         </div>
//                         <span className="text-xs mt-1 text-gray-300">
//                           {match.team2.split(' ').map(word => word[0]).join('').toUpperCase()}
//                         </span>
//                       </div>
//                     </div>

//                     {/* Match Date & Time */}
//                     <div className="text-sm text-center bg-gray-700 rounded-lg p-2 w-full">
//                       <p className="font-semibold text-gray-200">
//                         {formatFirebaseDate(match.date)}
//                       </p>
//                       <p className={`font-semibold ${
//                         countdown === "LIVE" ? "text-green-400 animate-pulse" : "text-gray-200"
//                       }`}>
//                         {formatFirebaseTime(match.date)} {todayMatch && `(${countdown})`}
//                       </p>
//                     </div>

//                     {/* Build Team Button */}
//                     <Link href={`/build-team/${match.id}`} passHref className="w-full">
//                       <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
//                         Build Team
//                       </Button>
//                     </Link>
//                   </CardContent>
//                 </Card>
//               );
//             })}
//         </div>
//       ) : !isLoading && (
//         <p className="text-center text-gray-00">No matches found</p>
//       )}
//     </div>
//   );
// }










// "use client";

// import { useEffect, useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import Image from "next/image";
// import Link from "next/link";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import { Button } from "../../components/ui/button";

// const categories = [
//   { name: "League", key: "League", image: "/ipl.webp" },
//   { name: "International", key: "International", image: "/international.png" },
//   { name: "Domestic", key: "Domestic", image: "/Domestic.webp" },
//   { name: "Women", key: "Women", image: "/Woman.webp" },
// ];

// const IPL_TEAM_IMAGES: { [key: string]: string } = {
//   "Chennai Super Kings": "/images/CSK.png",
//   "Mumbai Indians": "/images/MI.webp",
//   "Kolkata Knight Riders": "/images/kkr.png",
//   "Sunrisers Hyderabad": "/images/SRH (2).png",
//   "Delhi Capitals": "/images/DC.webp",
//   "Lucknow Super Giants": "/images/LSG (2).png",
//   "Rajasthan Royals": "/images/RR (2).png",
//   "Punjab Kings": "/images/PBKS.webp",
//   "Gujarat Titans": "/images/GT.webp",
//   "Royal Challengers Bengaluru": "/images/rcb.png",
//   "New Zealand": "/images/nz.png",
//   "Pakistan": "/images/pak.png",
//   // Add other teams as needed
// }

// const getTeamImage = (teamName: string) => IPL_TEAM_IMAGES[teamName] || "/fallback.png";

// export default function MatchList() {
//   const [matches, setMatches] = useState<any[]>([]);
//   const [activeCategory, setActiveCategory] = useState("League");
//   const [isLoading, setIsLoading] = useState(true);
//   const [currentTime, setCurrentTime] = useState(new Date());

//   const fetchMatches = async () => {
//     setIsLoading(true);
//     try {
//       const docRef = doc(db, "cricket", "upcomingMatches");
//       const docSnap = await getDoc(docRef);
      
//       if (docSnap.exists()) {
//         const data = docSnap.data();
//         const matchesArray = data.matches || [];
//         setMatches(matchesArray);
//       } else {
//         console.log("No matches found in Firestore");
//       }
//     } catch (error) {
//       console.error("Failed to fetch matches:", error);
//       if (error.code === 'permission-denied') {
//         console.error("Firestore permission denied. Check your Firestore rules.");
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMatches();
//     const timer = setInterval(() => setCurrentTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const isToday = (timestamp: string) => {
//     const matchDate = new Date(parseInt(timestamp));
//     const today = new Date();
//     return (
//       matchDate.getDate() === today.getDate() &&
//       matchDate.getMonth() === today.getMonth() &&
//       matchDate.getFullYear() === today.getFullYear()
//     );
//   };

//   const hasMatchStarted = (timestamp: string) => {
//     const matchTime = new Date(parseInt(timestamp)).getTime();
//     return currentTime.getTime() >= matchTime;
//   };

//   const getCountdown = (timestamp: string) => {
//     const matchTime = new Date(parseInt(timestamp)).getTime();
//     const now = currentTime.getTime();
//     const diff = matchTime - now;

//     if (diff <= 0) return "LIVE";

//     const hours = Math.floor(diff / (1000 * 60 * 60));
//     const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((diff % (1000 * 60)) / 1000);

//     return `${hours}h ${minutes}m ${seconds}s`;
//   };

//   const formatFirebaseDate = (timestamp: string) => {
//     const date = new Date(parseInt(timestamp));
//     return date.toLocaleDateString("en-US", {
//       weekday: 'short',
//       month: 'short',
//       day: 'numeric'
//     });
//   };

//   const formatFirebaseTime = (timestamp: string) => {
//     const date = new Date(parseInt(timestamp));
//     return date.toLocaleTimeString("en-US", {
//       hour: '2-digit',
//       minute: '2-digit',
//       hour12: true
//     });
//   };

//   return (
//     <div className="p-4">
//       {/* Category Selector */}
//       <div className="flex flex-wrap gap-4 mb-6 justify-center">
//         {categories.map((category) => (
//           <Button
//             key={category.key}
//             onClick={() => setActiveCategory(category.key)}
//             className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
//               activeCategory === category.key
//                 ? "bg-green-600 text-white shadow-md"
//                 : "bg-gray-200 hover:bg-gray-300 text-gray-800"
//             }`}
//           >
//             <Image
//               src={category.image}
//               alt={category.name}
//               width={24}
//               height={24}
//               className="object-contain"
//             />
//             {category.name}
//           </Button>
//         ))}
//       </div>

//       {/* Loading Spinner */}
//       {isLoading && (
//         <div className="flex justify-center items-center h-64">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
//         </div>
//       )}

//       {/* Matches Grid */}
//       {!isLoading && matches.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {matches
//             .filter((match: any) => match.matchType === activeCategory)
//             .map((match: any) => {
//               const todayMatch = isToday(match.date);
//               const matchStarted = hasMatchStarted(match.date);
//               const countdown = todayMatch ? getCountdown(match.date) : null;

//               return (
//                 <Card
//                   key={match.id}
//                   className={`rounded-xl border-gray-700 bg-gray-800 text-white shadow-lg hover:shadow-xl transition-shadow ${
//                     todayMatch ? "border-green-500 border-2" : ""
//                   }`}
//                 >
//                   <CardHeader className="flex flex-col items-center pb-2">
//                     <CardTitle className="text-lg font-bold text-center">
//                       <span className="text-gray-100">{match.team1}</span>{" "}
//                       <span className="text-gray-400 mx-1">vs</span>{" "}
//                       <span className="text-gray-100">{match.team2}</span>
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent className="flex flex-col items-center gap-3">
//                     {/* Team Images */}
//                     <div className="flex items-center justify-center gap-4">
//                       <div className="flex flex-col items-center">
//                         <div className="relative w-12 h-12">
//                           <Image
//                             src={getTeamImage(match.team1)}
//                             alt={match.team1}
//                             fill
//                             className="rounded-full object-contain shadow-md border-2 border-gray-600"
//                             onError={(e) => {
//                               (e.target as HTMLImageElement).src = '/fallback.jpg';
//                             }}
//                           />
//                         </div>
//                         <span className="text-xs mt-1 text-gray-300">
//                           {match.team1.split(' ').map(word => word[0]).join('').toUpperCase()}
//                         </span>
//                       </div>
//                       <span className="text-lg font-semibold text-gray-400">VS</span>
//                       <div className="flex flex-col items-center">
//                         <div className="relative w-12 h-12">
//                           <Image
//                             src={getTeamImage(match.team2)}
//                             alt={match.team2}
//                             fill
//                             className="rounded-full object-contain shadow-md border-2 border-gray-600"
//                             onError={(e) => {
//                               (e.target as HTMLImageElement).src = '/fallback.jpg';
//                             }}
//                           />
//                         </div>
//                         <span className="text-xs mt-1 text-gray-300">
//                           {match.team2.split(' ').map(word => word[0]).join('').toUpperCase()}
//                         </span>
//                       </div>
//                     </div>

//                     {/* Match Date & Time */}
//                     <div className="text-sm text-center bg-gray-700 rounded-lg p-2 w-full">
//                       <p className="font-semibold text-gray-200">
//                         {formatFirebaseDate(match.date)}
//                       </p>
//                       <p className={`font-semibold ${
//                         countdown === "LIVE" ? "text-green-400 animate-pulse" : "text-gray-200"
//                       }`}>
//                         {formatFirebaseTime(match.date)} {todayMatch && `(${countdown})`}
//                       </p>
//                     </div>

//                     {/* Button - Show "Build Team" only for today's matches, otherwise "Update Soon" */}
//                     {todayMatch ? (
//                       <Link href={`/build-team/${match.id}`} passHref className="w-full">
//                         <Button
//                           className={`w-full ${
//                             matchStarted || countdown === "LIVE"
//                               ? "bg-blue-600 hover:bg-blue-700"
//                               : "bg-green-600 hover:bg-green-700"
//                           } text-white`}
//                         >
//                           {matchStarted || countdown === "LIVE" ? "View Team" : "Build Team"}
//                         </Button>
//                       </Link>
//                     ) : (
//                       <Button
//                         disabled
//                         className="w-full bg-gray-600 text-gray-300 cursor-not-allowed"
//                       >
//                         Update Soon
//                       </Button>
//                     )}
//                   </CardContent>
//                 </Card>
//               );
//             })}
//         </div>
//       ) : !isLoading && (
//         <p className="text-center text-gray-00">No matches found</p>
//       )}
//     </div>
//   );
// }








// "use client";

// import { useEffect, useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import Image from "next/image";
// import Link from "next/link";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import { Button } from "../../components/ui/button";

// const categories = [
//   { name: "League", key: "League", image: "/ipl.webp" },
//   { name: "International", key: "International", image: "/international.png" },
//   { name: "Domestic", key: "Domestic", image: "/Domestic.webp" },
//   { name: "Women", key: "Women", image: "/Woman.webp" },
// ];

// const IPL_TEAM_IMAGES: { [key: string]: string } = {
//   "Chennai Super Kings": "/images/CSK.png",
//   "Mumbai Indians": "/images/MI.webp",
//   "Kolkata Knight Riders": "/images/kkr.png",
//   "Sunrisers Hyderabad": "/images/SRH (2).png",
//   "Delhi Capitals": "/images/DC.webp",
//   "Lucknow Super Giants": "/images/LSG (2).png",
//   "Rajasthan Royals": "/images/RR (2).png",
//   "Punjab Kings": "/images/PBKS.webp",
//   "Gujarat Titans": "/images/GT.webp",
//   "Royal Challengers Bengaluru": "/images/rcb.png",
//   "New Zealand": "/images/nz.png",
//   "Pakistan": "/images/pak.png",
//   // Add other teams as needed
// }

// const getTeamImage = (teamName: string) => IPL_TEAM_IMAGES[teamName] || "/fallback.png";

// export default function MatchList() {
//   const [matches, setMatches] = useState<any[]>([]);
//   const [activeCategory, setActiveCategory] = useState("League");
//   const [isLoading, setIsLoading] = useState(true);
//   const [currentTime, setCurrentTime] = useState(new Date());

//   const fetchMatches = async () => {
//     setIsLoading(true);
//     try {
//       const docRef = doc(db, "cricket", "upcomingMatches");
//       const docSnap = await getDoc(docRef);
      
//       if (docSnap.exists()) {
//         const data = docSnap.data();
//         const matchesArray = data.matches || [];
//         setMatches(matchesArray);
//       } else {
//         console.log("No matches found in Firestore");
//       }
//     } catch (error) {
//       console.error("Failed to fetch matches:", error);
//       if (error.code === 'permission-denied') {
//         console.error("Firestore permission denied. Check your Firestore rules.");
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMatches();
//     const timer = setInterval(() => setCurrentTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const isToday = (timestamp: string) => {
//     const matchDate = new Date(parseInt(timestamp));
//     const today = new Date();
//     return (
//       matchDate.getDate() === today.getDate() &&
//       matchDate.getMonth() === today.getMonth() &&
//       matchDate.getFullYear() === today.getFullYear()
//     );
//   };

//   const hasMatchStarted = (timestamp: string) => {
//     const matchTime = new Date(parseInt(timestamp)).getTime();
//     return currentTime.getTime() >= matchTime;
//   };

//   const getCountdown = (timestamp: string) => {
//     const matchTime = new Date(parseInt(timestamp)).getTime();
//     const now = currentTime.getTime();
//     const diff = matchTime - now;

//     if (diff <= 0) return "LIVE";

//     const hours = Math.floor(diff / (1000 * 60 * 60));
//     const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((diff % (1000 * 60)) / 1000);

//     return `${hours}h ${minutes}m ${seconds}s`;
//   };

//   const formatFirebaseDate = (timestamp: string) => {
//     const date = new Date(parseInt(timestamp));
//     return date.toLocaleDateString("en-US", {
//       weekday: 'short',
//       month: 'short',
//       day: 'numeric'
//     });
//   };

//   const formatFirebaseTime = (timestamp: string) => {
//     const date = new Date(parseInt(timestamp));
//     return date.toLocaleTimeString("en-US", {
//       hour: '2-digit',
//       minute: '2-digit',
//       hour12: true
//     });
//   };

//   return (
//     <div className="p-4">
//       {/* Category Selector */}
//       <div className="flex flex-wrap gap-4 mb-6 justify-center">
//         {categories.map((category) => (
//           <Button
//             key={category.key}
//             onClick={() => setActiveCategory(category.key)}
//             className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
//               activeCategory === category.key
//                 ? "bg-green-600 text-white shadow-md"
//                 : "bg-gray-200 hover:bg-gray-300 text-gray-800"
//             }`}
//           >
//             <Image
//               src={category.image}
//               alt={category.name}
//               width={24}
//               height={24}
//               className="object-contain"
//             />
//             {category.name}
//           </Button>
//         ))}
//       </div>

//       {/* Loading Spinner */}
//       {isLoading && (
//         <div className="flex justify-center items-center h-64">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
//         </div>
//       )}

//       {/* Matches Grid */}
//       {!isLoading && matches.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {matches
//             .filter((match: any) => match.matchType === activeCategory)
//             .map((match: any) => {
//               const todayMatch = isToday(match.date);
//               const matchStarted = hasMatchStarted(match.date);
//               const countdown = todayMatch ? getCountdown(match.date) : null;

//               return (
//                 <Card
//                   key={match.id}
//                   className={`rounded-xl border-gray-700 bg-gray-800 text-white shadow-lg hover:shadow-xl transition-shadow ${
//                     todayMatch ? "border-green-500 border-2" : ""
//                   }`}
//                 >
//                   <CardHeader className="flex flex-col items-center pb-2">
//                     <CardTitle className="text-lg font-bold text-center">
//                       <span className="text-gray-100">{match.team1}</span>{" "}
//                       <span className="text-gray-400 mx-1">vs</span>{" "}
//                       <span className="text-gray-100">{match.team2}</span>
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent className="flex flex-col items-center gap-3">
//                     {/* Team Images */}
//                     <div className="flex items-center justify-center gap-4">
//                       <div className="flex flex-col items-center">
//                         <div className="relative w-12 h-12">
//                           <Image
//                             src={getTeamImage(match.team1)}
//                             alt={match.team1}
//                             fill
//                             className="rounded-full object-contain shadow-md border-2 border-gray-600"
//                             onError={(e) => {
//                               (e.target as HTMLImageElement).src = '/fallback.jpg';
//                             }}
//                           />
//                         </div>
//                         <span className="text-xs mt-1 text-gray-300">
//                           {match.team1.split(' ').map(word => word[0]).join('').toUpperCase()}
//                         </span>
//                       </div>
//                       <span className="text-lg font-semibold text-gray-400">VS</span>
//                       <div className="flex flex-col items-center">
//                         <div className="relative w-12 h-12">
//                           <Image
//                             src={getTeamImage(match.team2)}
//                             alt={match.team2}
//                             fill
//                             className="rounded-full object-contain shadow-md border-2 border-gray-600"
//                             onError={(e) => {
//                               (e.target as HTMLImageElement).src = '/fallback.jpg';
//                             }}
//                           />
//                         </div>
//                         <span className="text-xs mt-1 text-gray-300">
//                           {match.team2.split(' ').map(word => word[0]).join('').toUpperCase()}
//                         </span>
//                       </div>
//                     </div>

//                     {/* Match Date & Time */}
//                     <div className="text-sm text-center bg-gray-700 rounded-lg p-2 w-full">
//                       <p className="font-semibold text-gray-200">
//                         {formatFirebaseDate(match.date)}
//                       </p>
//                       <p className={`font-semibold ${
//                         countdown === "LIVE" ? "text-green-400 animate-pulse" : "text-gray-200"
//                       }`}>
//                         {formatFirebaseTime(match.date)} {todayMatch && `(${countdown})`}
//                       </p>
//                     </div>

//                     {/* Button - Show "Build Team" only for today's matches, otherwise show "12:00 AM" */}
//                     {todayMatch ? (
//                       <Link href={`/build-team/${match.id}`} passHref className="w-full">
//                         <Button
//                           className={`w-full ${
//                             matchStarted || countdown === "LIVE"
//                               ? "bg-blue-600 hover:bg-blue-700"
//                               : "bg-green-600 hover:bg-green-700"
//                           } text-white`}
//                         >
//                           {matchStarted || countdown === "LIVE" ? "View Team" : "Build Team"}
//                         </Button>
//                       </Link>
//                     ) : (
//                       <Button
//                         disabled
//                         className="w-full bg-gray-600 text-gray-300 cursor-not-allowed"
//                       >
//                         update soon : 12am
//                       </Button>
//                     )}
//                   </CardContent>
//                 </Card>
//               );
//             })}
//         </div>
//       ) : !isLoading && (
//         <p className="text-center text-gray-00">No matches found</p>
//       )}
//     </div>
//   );
// }



















"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Button } from "../../components/ui/button";

const categories = [
  { name: "League", key: "League", image: "/ipl.webp" },
  { name: "International", key: "International", image: "/international.png" },
  { name: "Domestic", key: "Domestic", image: "/Domestic.webp" },
  { name: "Women", key: "Women", image: "/Woman.webp" },
];

const IPL_TEAM_IMAGES: { [key: string]: string } = {
  "Chennai Super Kings": "/images/CSK.png",
  "Mumbai Indians": "/images/MI.webp",
  "Kolkata Knight Riders": "/images/kkr.png",
  "Sunrisers Hyderabad": "/images/SRH (2).png",
  "Delhi Capitals": "/images/DC.webp",
  "Lucknow Super Giants": "/images/LSG (2).png",
  "Rajasthan Royals": "/images/RR (2).png",
  "Punjab Kings": "/images/PBKS.webp",
  "Gujarat Titans": "/images/GT.webp",
  "Royal Challengers Bengaluru": "/images/rcb.png",
  "New Zealand": "/images/nz.png",
  "Pakistan": "/images/pak.png",
  // Add other teams as needed
}

const getTeamImage = (teamName: string) => IPL_TEAM_IMAGES[teamName] || "/fallback.png";

export default function MatchList() {
  const [matches, setMatches] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState("League");
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  const fetchMatches = async () => {
    setIsLoading(true);
    try {
      const docRef = doc(db, "cricket", "upcomingMatches");
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        const matchesArray = data.matches || [];
        setMatches(matchesArray);
      } else {
        console.log("No matches found in Firestore");
      }
    } catch (error) {
      console.error("Failed to fetch matches:", error);
      if (error.code === 'permission-denied') {
        console.error("Firestore permission denied. Check your Firestore rules.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMatches();
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const isToday = (timestamp: string) => {
    const matchDate = new Date(parseInt(timestamp));
    const today = new Date();
    return (
      matchDate.getDate() === today.getDate() &&
      matchDate.getMonth() === today.getMonth() &&
      matchDate.getFullYear() === today.getFullYear()
    );
  };

  const getCountdown = (timestamp: string) => {
    const matchTime = new Date(parseInt(timestamp)).getTime();
    const now = currentTime.getTime();
    const diff = matchTime - now;

    if (diff <= 0) return "LIVE";

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  const formatFirebaseDate = (timestamp: string) => {
    const date = new Date(parseInt(timestamp));
    return date.toLocaleDateString("en-US", {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatFirebaseTime = (timestamp: string) => {
    const date = new Date(parseInt(timestamp));
    return date.toLocaleTimeString("en-US", {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="p-4">
      {/* Category Selector */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        {categories.map((category) => (
          <Button
            key={category.key}
            onClick={() => setActiveCategory(category.key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              activeCategory === category.key
                ? "bg-green-600 text-white shadow-md"
                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
            }`}
          >
            <Image
              src={category.image}
              alt={category.name}
              width={24}
              height={24}
              className="object-contain"
            />
            {category.name}
          </Button>
        ))}
      </div>

      {/* Loading Spinner */}
      {isLoading && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
        </div>
      )}

      {/* Matches Grid */}
      {!isLoading && matches.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {matches
            .filter((match: any) => match.matchType === activeCategory)
            .map((match: any) => {
              const todayMatch = isToday(match.date);
              const countdown = todayMatch ? getCountdown(match.date) : null;

              return (
                <Card
                  key={match.id}
                  className={`rounded-xl border-gray-700 bg-gray-800 text-white shadow-lg hover:shadow-xl transition-shadow ${
                    todayMatch ? "border-green-500 border-2" : ""
                  }`}
                >
                  <CardHeader className="flex flex-col items-center pb-2">   
                    <CardTitle className="text-lg font-bold text-center">
                      <span className="text-gray-100">{match.team1}</span>{" "}
                      <span className="text-gray-400 mx-1">vs</span>{" "}
                      <span className="text-gray-100">{match.team2}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center gap-3">
                    {/* Team Images */}
                    <div className="flex items-center justify-center gap-4">
                      <div className="flex flex-col items-center">
                        <div className="relative w-12 h-12">
                          <Image
                            src={getTeamImage(match.team1)}
                            alt={match.team1}
                            fill
                            className="rounded-full object-contain shadow-md border-2 border-gray-600"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '/fallback.jpg';
                            }}
                          />
                        </div>
                        <span className="text-xs mt-1 text-gray-300">
                          {match.team1.split(' ').map(word => word[0]).join('').toUpperCase()}
                        </span>
                      </div>
                      <span className="text-lg font-semibold text-gray-400">VS</span>
                      <div className="flex flex-col items-center">
                        <div className="relative w-12 h-12">
                          <Image
                            src={getTeamImage(match.team2)}
                            alt={match.team2}
                            fill
                            className="rounded-full object-contain shadow-md border-2 border-gray-600"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '/fallback.jpg';
                            }}
                          />
                        </div>
                        <span className="text-xs mt-1 text-gray-300">
                          {match.team2.split(' ').map(word => word[0]).join('').toUpperCase()}
                        </span>
                      </div>
                    </div>

                    {/* Match Date & Time */}
                    <div className="text-sm text-center bg-gray-700 rounded-lg p-2 w-full">
                      <p className="font-semibold text-gray-200">
                        {formatFirebaseDate(match.date)}
                      </p>
                      <p className={`font-semibold ${
                        countdown === "LIVE" ? "text-green-400 animate-pulse" : "text-gray-200"
                      }`}>
                        {formatFirebaseTime(match.date)} {todayMatch && `(${countdown})`}
                      </p>
                    </div>

                    {/* Button - Show "Build Team" if show is true, otherwise "Update Soon" */}
                    {match.show ? (
                      // <Link href={`/build-team/${match.id}`} passHref className="w-full">
                      //   <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      //     Build Team
                      //   </Button>
                      // </Link>

                    // In MatchList component
               // This is the correct way to link to your build-team page
<Link href={`/build-team/${match.id}`} passHref className="w-full">
  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
    Build Team
  </Button>
</Link>
                    ) : (
                      <Button 
                        disabled 
                        className="w-full bg-gray-600 text-gray-300 cursor-not-allowed"
                      >
                        Update Soon
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
        </div>
      ) : !isLoading && (
        <p className="text-center text-gray-00">No matches found</p>
      )}
    </div>
  );
}