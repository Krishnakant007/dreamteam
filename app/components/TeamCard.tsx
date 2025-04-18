// // // components/TeamCard.tsx

// // import { GeneratedTeam } from "../../types/match";

// // interface TeamCardProps {
// //   team: GeneratedTeam;
// //   index: number;
// //   isSelected: boolean;
// //   onToggleSelect: () => void;
// // }

// // export default function TeamCard({ team, index, isSelected, onToggleSelect }: TeamCardProps) {
// //   return (
// //     <div className="mb-4 bg-[url('/Grass.jpg')] bg-cover bg-center rounded-lg p-4">
// //       <div className="flex justify-between items-center mb-2">
// //         <h3 className="text-lg font-bold">Team {index + 1}</h3>
// //         <input
// //           type="checkbox"
// //           checked={isSelected}
// //           onChange={onToggleSelect}
// //           className="h-5 w-5"
// //         />
// //       </div>
// //       <div className="mb-2">
// //         <span className="font-bold">Captain: </span>
// //         <span className="text-blue-600">{team.captain.fullName}</span>
// //       </div>
// //       <div className="mb-2">
// //         <span className="font-bold">Vice-Captain: </span>
// //         <span className="text-green-600">{team.viceCaptain.fullName}</span>
// //       </div>
// //       <div className="grid grid-cols-2 gap-2">
// //         {team.players.map((player, i) => (
// //           <div key={i} className="text-sm">
// //             {player.fullName}
// //             {player.keeper && ' (WK)'}
// //             {player.isOverseas && ' (OS)'}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }












// // components/TeamCard.tsx
// import { GeneratedTeam } from "../../types/match";

// interface TeamCardProps {
//   team: GeneratedTeam;
//   index: number;
//   isSelected: boolean;
//   onToggleSelect: () => void;
// }

// export default function TeamCard({ team, index, isSelected, onToggleSelect }: TeamCardProps) {
//   const roleCounts = {
//     openers: team.players.filter(p => p.roleOrder === 1).length,
//     middleOrder: team.players.filter(p => p.roleOrder === 2).length,
//     allRounders: team.players.filter(p => p.roleOrder === 3).length,
//     bowlers: team.players.filter(p => p.roleOrder === 4).length
//   };

//   const overseasCount = team.players.filter(p => p.isOverseas).length;
//   const team1Count = team.players.filter(p => p.teamName === team.captain.teamName).length;
//   const team2Count = 11 - team1Count;

//   return (
//     <div className={`border-2 ${isSelected ? 'border-blue-500' : 'border-gray-700'} rounded-lg overflow-hidden`}>
//       <div className="bg-gray-800 p-3 flex justify-between items-center">
//         <h3 className="font-bold">Team {index + 1}</h3>
//         <input
//           type="checkbox"
//           checked={isSelected}
//           onChange={onToggleSelect}
//           className="h-5 w-5 rounded text-blue-600"
//         />
//       </div>
      
//       <div className="bg-gray-700 p-4">
//         <div className="flex justify-between mb-3">
//           <div className="flex items-center">
//             <img
//               src={team.captain.imgURL || "/fallback.png"}
//               alt={team.captain.name}
//               className="w-10 h-10 rounded-full mr-2"
//             />
//             <div>
//               <p className="text-sm text-gray-400">Captain</p>
//               <p className="font-medium text-blue-400">
//                 {team.captain.name} {team.captain.isOverseas && '(OS)'}
//               </p>
//               <p className="text-xs">Sel: {team.captain.selectPerc}% C: {team.captain.selCapPerc}%</p>
//             </div>
//           </div>
//           <div className="flex items-center">
//             <img
//               src={team.viceCaptain.imgURL || "/fallback.png"}
//               alt={team.viceCaptain.name}
//               className="w-10 h-10 rounded-full mr-2"
//             />
//             <div>
//               <p className="text-sm text-gray-400">Vice Captain</p>
//               <p className="font-medium text-green-400">
//                 {team.viceCaptain.name} {team.viceCaptain.isOverseas && '(OS)'}
//               </p>
//               <p className="text-xs">Sel: {team.viceCaptain.selectPerc}% VC: {team.viceCaptain.selVcPerc}%</p>
//             </div>
//           </div>
//         </div>
        
//         <div className="mb-3 bg-gray-800 p-2 rounded">
//           <div className="flex justify-between text-sm mb-1">
//             <span>Team A: {team1Count}/7</span>
//             <span>Team B: {team2Count}/7</span>
//             <span>Overseas: {overseasCount}/4</span>
//           </div>
//           <div className="flex flex-wrap gap-1 text-xs">
//             <span className="bg-gray-600 px-2 py-1 rounded">Openers: {roleCounts.openers}</span>
//             <span className="bg-gray-600 px-2 py-1 rounded">Middle: {roleCounts.middleOrder}</span>
//             <span className="bg-gray-600 px-2 py-1 rounded">AR: {roleCounts.allRounders}</span>
//             <span className="bg-gray-600 px-2 py-1 rounded">Bowlers: {roleCounts.bowlers}</span>
//           </div>
//         </div>
        
//         <div className="space-y-2 max-h-60 overflow-y-auto">
//           {team.players.map((player, i) => (
//             <div key={i} className="flex items-center justify-between text-sm bg-gray-800 p-2 rounded">
//               <div className="flex items-center">
//                 <img
//                   src={player.imgURL || "/fallback.png"}
//                   alt={player.name}
//                   className="w-8 h-8 rounded-full mr-2"
//                 />
//                 <span>
//                   {player.name}
//                   {player.keeper && ' (WK)'}
//                   {player.isOverseas && ' (OS)'}
//                 </span>
//               </div>
//               <div className="text-right">
//                 <div className="text-xs text-gray-400">{player.teamName}</div>
//                 <div className="text-xs">Sel: {player.selectPerc}%</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }





// // components/TeamCard.tsx
// import { GeneratedTeam } from "../../types/match";

// interface TeamCardProps {
//   team: GeneratedTeam;
//   index: number;
//   isSelected: boolean;
//   onToggleSelect: () => void;
// }

// export default function TeamCard({ team, index, isSelected, onToggleSelect }: TeamCardProps) {
//   // Group players by role for better display
//   const playersByRole = {
//     'WK-Batsman': team.players.filter(p => p.roleOrder === 1),
//     'Batsman': team.players.filter(p => p.roleOrder === 2),
//     'All-Rounder': team.players.filter(p => p.roleOrder === 3),
//     'Bowler': team.players.filter(p => p.roleOrder === 4)
//   };

//   const overseasCount = team.players.filter(p => p.isOverseas).length;
//   const team1Count = team.players.filter(p => p.teamName === team.captain.teamName).length;
//   const team2Count = 11 - team1Count;

//   return (
//     <div className={`border-2 ${isSelected ? 'border-blue-500' : 'border-gray-700'} rounded-lg overflow-hidden`}>
//       <div className="bg-gray-800 p-3 flex justify-between items-center">
//         <h3 className="font-bold">Team {index + 1}</h3>
//         <input
//           type="checkbox"
//           checked={isSelected}
//           onChange={onToggleSelect}
//           className="h-5 w-5 rounded text-blue-600"
//         />
//       </div>
      
//       <div className="bg-gray-700 p-4">
//         <div className="flex justify-between mb-3">
//           <div className="flex items-center">
//             <img
//               src={team.captain.imgURL || "/fallback.png"}
//               alt={team.captain.name}
//               className="w-10 h-10 rounded-full mr-2"
//             />
//             <div>
//               <p className="text-sm text-gray-400">Captain</p>
//               <p className="font-medium text-blue-400">
//                 {team.captain.name} {team.captain.isOverseas && '(OS)'}
//               </p>
//               <p className="text-xs">
//                 Sel: {team.captain.selectedBy?.toFixed(1)}% C: {team.captain.selCapPerc?.toFixed(1)}%
//               </p>
//             </div>
//           </div>
//           <div className="flex items-center">
//             <img
//               src={team.viceCaptain.imgURL || "/fallback.png"}
//               alt={team.viceCaptain.name}
//               className="w-10 h-10 rounded-full mr-2"
//             />
//             <div>
//               <p className="text-sm text-gray-400">Vice Captain</p>
//               <p className="font-medium text-green-400">
//                 {team.viceCaptain.name} {team.viceCaptain.isOverseas && '(OS)'}
//               </p>
//               <p className="text-xs">
//                 Sel: {team.viceCaptain.selectedBy?.toFixed(1)}% VC: {team.viceCaptain.selVcPerc?.toFixed(1)}%
//               </p>
//             </div>
//           </div>
//         </div>
        
//         <div className="mb-3 bg-gray-800 p-2 rounded">
//           <div className="flex justify-between text-sm mb-1">
//             <span>Team A: {team1Count}/8</span>
//             <span>Team B: {team2Count}/8</span>
//             <span>Overseas: {overseasCount}/5</span>
//           </div>
//           <div className="flex flex-wrap gap-1 text-xs">
//             <span className="bg-gray-600 px-2 py-1 rounded">WK: {playersByRole['WK-Batsman'].length}</span>
//             <span className="bg-gray-600 px-2 py-1 rounded">Bats: {playersByRole['Batsman'].length}</span>
//             <span className="bg-gray-600 px-2 py-1 rounded">AR: {playersByRole['All-Rounder'].length}</span>
//             <span className="bg-gray-600 px-2 py-1 rounded">Bowlers: {playersByRole['Bowler'].length}</span>
//           </div>
//         </div>
        
//         <div className="space-y-2 max-h-60 overflow-y-auto">
//           {/* Wicket Keepers */}
//           {playersByRole['WK-Batsman'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">Wicket Keepers</div>
//           )}
//           {playersByRole['WK-Batsman'].map((player, i) => (
//             <PlayerRow key={`wk-${i}`} player={player} />
//           ))}
          
//           {/* Batsmen */}
//           {playersByRole['Batsman'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">Batsmen</div>
//           )}
//           {playersByRole['Batsman'].map((player, i) => (
//             <PlayerRow key={`bat-${i}`} player={player} />
//           ))}
          
//           {/* All Rounders */}
//           {playersByRole['All-Rounder'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">All Rounders</div>
//           )}
//           {playersByRole['All-Rounder'].map((player, i) => (
//             <PlayerRow key={`ar-${i}`} player={player} />
//           ))}
          
//           {/* Bowlers */}
//           {playersByRole['Bowler'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">Bowlers</div>
//           )}
//           {playersByRole['Bowler'].map((player, i) => (
//             <PlayerRow key={`bowl-${i}`} player={player} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// const PlayerRow = ({ player }: { player: any }) => (
//   <div className="flex items-center justify-between text-sm bg-gray-800 p-2 rounded">
//     <div className="flex items-center">
//       <img
//         src={player.imgURL || "/fallback.png"}
//         alt={player.name}
//         className="w-8 h-8 rounded-full mr-2"
//       />
//       <span>
//         {player.name}
//         {player.keeper && ' (WK)'}
//         {player.isOverseas && ' (OS)'}
//       </span>
//     </div>
//     <div className="text-right">
//       <div className="text-xs text-gray-400">{player.teamName}</div>
//       <div className="text-xs">Sel: {player.selectedBy?.toFixed(1)}%</div>
//     </div>
//   </div>
// );








// // TeamCard.tsx

// import { GeneratedTeam } from "../../types/match";

// interface TeamCardProps {
//   team: GeneratedTeam;
//   index: number;
//   isSelected: boolean;
//   onToggleSelect: () => void;
// }

// export default function TeamCard({ team, index, isSelected, onToggleSelect }: TeamCardProps) {
//   // Group players by role for better display
//   const playersByRole = {
//     'WK-Batsman': team.players.filter(p => p.roleOrder === 1),
//     'Batsman': team.players.filter(p => p.roleOrder === 2),
//     'All-Rounder': team.players.filter(p => p.roleOrder === 3),
//     'Bowler': team.players.filter(p => p.roleOrder === 4)
//   };

//   const overseasCount = team.players.filter(p => p.isOverseas).length;
//   const team1Count = team.players.filter(p => p.teamName === team.captain.teamName).length;
//   const team2Count = 11 - team1Count;

//   // Check for non-playing players
//   const nonPlayingPlayers = team.players.filter(p => p.substitute === true);
//   const hasNonPlayingPlayers = nonPlayingPlayers.length > 0;

//   return (
//     <div className={`border-2 ${isSelected ? 'border-blue-500' : 'border-gray-700'} rounded-lg overflow-hidden`}>
//       <div className="bg-gray-800 p-3 flex justify-between items-center">
//         <h3 className="font-bold">Team {index + 1}</h3>
//         <div className="flex items-center gap-2">
//           {hasNonPlayingPlayers && (
//             <span className="bg-red-500 text-xs px-2 py-1 rounded-full">
//               {nonPlayingPlayers.length} non-playing
//             </span>
//           )}
//           <input
//             type="checkbox"
//             checked={isSelected}
//             onChange={onToggleSelect}
//             className="h-5 w-5 rounded text-blue-600"
//           />
//         </div>
//       </div>
      
//       <div className="bg-gray-700 p-4">
//         <div className="flex justify-between mb-3">
//           <div className="flex items-center">
//             <img
//               src={team.captain.imgURL || "/fallback.png"}
//               alt={team.captain.name}
//               className="w-10 h-10 rounded-full mr-2"
//             />
//             <div>
//               <p className="text-sm text-gray-400">Captain</p>
//               <p className={`font-medium ${team.captain.substitute ? 'text-red-400' : 'text-blue-400'}`}>
//                 {team.captain.name} {team.captain.isOverseas && '(OS)'}
//                 {team.captain.substitute && ' (SUB)'}
//               </p>
//               <p className="text-xs">
//                 Sel: {team.captain.selectedBy?.toFixed(1)}% C: {team.captain.selCapPerc?.toFixed(1)}%
//               </p>
//             </div>
//           </div>
//           <div className="flex items-center">
//             <img
//               src={team.viceCaptain.imgURL || "/fallback.png"}
//               alt={team.viceCaptain.name}
//               className="w-10 h-10 rounded-full mr-2"
//             />
//             <div>
//               <p className="text-sm text-gray-400">Vice Captain</p>
//               <p className={`font-medium ${team.viceCaptain.substitute ? 'text-red-400' : 'text-green-400'}`}>
//                 {team.viceCaptain.name} {team.viceCaptain.isOverseas && '(OS)'}
//                 {team.viceCaptain.substitute && ' (SUB)'}
//               </p>
//               <p className="text-xs">
//                 Sel: {team.viceCaptain.selectedBy?.toFixed(1)}% VC: {team.viceCaptain.selVcPerc?.toFixed(1)}%
//               </p>
//             </div>
//           </div>
//         </div>
        
//         <div className="mb-3 bg-gray-800 p-2 rounded">
//           <div className="flex justify-between text-sm mb-1">
//             <span>Team A: {team1Count}/8</span>
//             <span>Team B: {team2Count}/8</span>
//             <span>Overseas: {overseasCount}/5</span>
//           </div>
//           <div className="flex flex-wrap gap-1 text-xs">
//             <span className="bg-gray-600 px-2 py-1 rounded">WK: {playersByRole['WK-Batsman'].length}</span>
//             <span className="bg-gray-600 px-2 py-1 rounded">Bats: {playersByRole['Batsman'].length}</span>
//             <span className="bg-gray-600 px-2 py-1 rounded">AR: {playersByRole['All-Rounder'].length}</span>
//             <span className="bg-gray-600 px-2 py-1 rounded">Bowlers: {playersByRole['Bowler'].length}</span>
//           </div>
//         </div>
        
//         <div className="space-y-2 max-h-60 overflow-y-auto">
//           {/* Wicket Keepers */}
//           {playersByRole['WK-Batsman'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">Wicket Keepers</div>
//           )}
//           {playersByRole['WK-Batsman'].map((player, i) => (
//             <PlayerRow key={`wk-${i}`} player={player} isSubstitute={player.substitute} />
//           ))}
          
//           {/* Batsmen */}
//           {playersByRole['Batsman'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">Batsmen</div>
//           )}
//           {playersByRole['Batsman'].map((player, i) => (
//             <PlayerRow key={`bat-${i}`} player={player} isSubstitute={player.substitute} />
//           ))}
          
//           {/* All Rounders */}
//           {playersByRole['All-Rounder'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">All Rounders</div>
//           )}
//           {playersByRole['All-Rounder'].map((player, i) => (
//             <PlayerRow key={`ar-${i}`} player={player} isSubstitute={player.substitute} />
//           ))}
          
//           {/* Bowlers */}
//           {playersByRole['Bowler'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">Bowlers</div>
//           )}
//           {playersByRole['Bowler'].map((player, i) => (
//             <PlayerRow key={`bowl-${i}`} player={player} isSubstitute={player.substitute} />
//           ))}
          
//           {/* Substitutes section */}
//           {team.substitutes && team.substitutes.length > 0 && (
//             <>
//               <div className="text-xs text-gray-400 mt-4">Substitutes (→)</div>
//               {team.substitutes.map((sub, i) => (
//                 <PlayerRow key={`sub-${i}`} player={sub} isSubstitute={false} isSubstituteList />
//               ))}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// const PlayerRow = ({
//   player,
//   isSubstitute,
//   isSubstituteList = false
// }: {
//   player: any,
//   isSubstitute: boolean,
//   isSubstituteList?: boolean
// }) => (
//   <div className={`flex items-center justify-between text-sm p-2 rounded ${
//     isSubstitute ? 'bg-red-900' :
//     isSubstituteList ? 'bg-gray-600' : 'bg-gray-800'
//   }`}>
//     <div className="flex items-center">
//       {isSubstituteList && (
//         <span className="mr-1 text-yellow-400">→</span>
//       )}
//       <img
//         src={player.imgURL || "/fallback.png"}
//         alt={player.name}
//         className="w-8 h-8 rounded-full mr-2"
//       />
//       <span className={isSubstitute ? 'line-through' : ''}>
//         {player.name}
//         {player.keeper && ' (WK)'}
//         {player.isOverseas && ' (OS)'}
//       </span>
//     </div>
//     <div className="text-right">
//       <div className="text-xs text-gray-400">{player.teamName}</div>
//       <div className="text-xs">Sel: {player.selectedBy?.toFixed(1)}%</div>
//     </div>
//   </div>
// );










// // TeamCard.tsx
// import { GeneratedTeam } from "../../types/match";
// import { useEffect, useState } from "react";

// interface TeamCardProps {
//   team: GeneratedTeam;
//   index: number;
//   isSelected: boolean;
//   onToggleSelect: () => void;
//   onUpdateTeam: (updatedTeam: GeneratedTeam) => void;
// }

// export default function TeamCard({
//   team,
//   index,
//   isSelected,
//   onToggleSelect,
//   onUpdateTeam
// }: TeamCardProps) {
//   const [originalTeam, setOriginalTeam] = useState<GeneratedTeam>({...team});
//   const [changes, setChanges] = useState<number>(team.changes || 0);
//   const [playerChanges, setPlayerChanges] = useState<Array<{
//     out: string;
//     in: string;
//     role: string;
//   }>>([]);

//   // Check for lineup changes when component mounts
//   useEffect(() => {
//     const checkLineupChanges = () => {
//       const newPlayerChanges: Array<{
//         out: string;
//         in: string;
//         role: string;
//       }> = [];
      
//       let changeCount = 0;
      
//       // Check each player in the original team
//       const updatedPlayers = team.players.map(player => {
//         // If player is now a substitute, find replacement
//         if (player.substitute) {
//           changeCount++;
          
//           // Find best replacement from substitutes with similar role
//           const replacement = team.substitutes
//             .filter(sub => normalizeRole(sub.role) === normalizeRole(player.role))
//             .sort((a, b) => (b.selectedBy || 0) - (a.selectedBy || 0))[0];
          
//           if (replacement) {
//             newPlayerChanges.push({
//               out: player.name,
//               in: replacement.name,
//               role: player.role
//             });
            
//             return {
//               ...replacement,
//               wasSubstituted: true,
//               replacedPlayer: player.name
//             };
//           }
//         }
//         return player;
//       });
      
//       // Update changes if needed
//       if (changeCount > 0) {
//         setChanges(changeCount);
//         setPlayerChanges(newPlayerChanges);
        
//         // Update the team with changes
//         const updatedTeam = {
//           ...team,
//           players: updatedPlayers,
//           changes: changeCount
//         };
        
//         onUpdateTeam(updatedTeam);
//       }
//     };
    
//     checkLineupChanges();
//   }, [team, onUpdateTeam]);

//   // Group players by role for better display
//   const playersByRole = {
//     'WK-Batsman': team.players.filter(p => p.roleOrder === 1),
//     'Batsman': team.players.filter(p => p.roleOrder === 2),
//     'Batting Allrounder': team.players.filter(p => p.roleOrder === 3),
//     'Bowling Allrounder': team.players.filter(p => p.roleOrder === 4),
//     'Bowler': team.players.filter(p => p.roleOrder === 5)
//   };

//   const overseasCount = team.players.filter(p => p.isOverseas).length;
//   const team1Count = team.players.filter(p => p.teamName === team.captain.teamName).length;
//   const team2Count = 11 - team1Count;

//   // Check for substituted players
//   const substitutedPlayers = team.players.filter(p => p.wasSubstituted);

//   return (
//     <div className={`border-2 ${isSelected ? 'border-blue-500' : 'border-gray-700'} rounded-lg overflow-hidden relative`}>
//       {/* Change indicator badge */}
//       {changes > 0 && (
//         <div className="absolute -top-2 -right-2 bg-yellow-500 text-black font-bold rounded-full h-6 w-6 flex items-center justify-center">
//           {changes}
//         </div>
//       )}
      
//       <div className="bg-gray-800 p-3 flex justify-between items-center">
//         <h3 className="font-bold">Team {index + 1}</h3>
//         <div className="flex items-center gap-2">
//           {changes > 0 && (
//             <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full">
//               {changes} change{changes > 1 ? 's' : ''}
//             </span>
//           )}
//           <input
//             type="checkbox"
//             checked={isSelected}
//             onChange={onToggleSelect}
//             className="h-5 w-5 rounded text-blue-600"
//           />
//         </div>
//       </div>
      
//       <div className="bg-gray-700 p-4">
//         {/* Changes summary */}
//         {playerChanges.length > 0 && (
//           <div className="mb-3 bg-yellow-900 p-2 rounded text-sm">
//             <div className="font-medium mb-1">Team Changes:</div>
//             {playerChanges.map((change, i) => (
//               <div key={i} className="flex justify-between">
//                 <span className="text-red-300 line-through">{change.out}</span>
//                 <span>→</span>
//                 <span className="text-green-300">{change.in}</span>
//                 <span className="text-gray-400 text-xs">{change.role}</span>
//               </div>
//             ))}
//           </div>
//         )}
        
//         <div className="flex justify-between mb-3">
//           <div className="flex items-center">
//             <img
//               src={team.captain.imgURL || "/fallback.png"}
//               alt={team.captain.name}
//               className="w-10 h-10 rounded-full mr-2"
//             />
//             <div>
//               <p className="text-sm text-gray-400">Captain</p>
//               <p className={`font-medium ${
//                 team.captain.wasSubstituted ? 'text-yellow-400' :
//                 team.captain.substitute ? 'text-red-400' : 'text-blue-400'
//               }`}>
//                 {team.captain.name} {team.captain.isOverseas && '(OS)'}
//                 {team.captain.substitute && ' (OUT)'}
//                 {team.captain.wasSubstituted && ' (IN)'}
//               </p>
//               <p className="text-xs">
//                 Sel: {team.captain.selectedBy?.toFixed(1)}% C: {team.captain.selCapPerc?.toFixed(1)}%
//               </p>
//             </div>
//           </div>
//           <div className="flex items-center">
//             <img
//               src={team.viceCaptain.imgURL || "/fallback.png"}
//               alt={team.viceCaptain.name}
//               className="w-10 h-10 rounded-full mr-2"
//             />
//             <div>
//               <p className="text-sm text-gray-400">Vice Captain</p>
//               <p className={`font-medium ${
//                 team.viceCaptain.wasSubstituted ? 'text-yellow-400' :
//                 team.viceCaptain.substitute ? 'text-red-400' : 'text-green-400'
//               }`}>
//                 {team.viceCaptain.name} {team.viceCaptain.isOverseas && '(OS)'}
//                 {team.viceCaptain.substitute && ' (OUT)'}
//                 {team.viceCaptain.wasSubstituted && ' (IN)'}
//               </p>
//               <p className="text-xs">
//                 Sel: {team.viceCaptain.selectedBy?.toFixed(1)}% VC: {team.viceCaptain.selVcPerc?.toFixed(1)}%
//               </p>
//             </div>
//           </div>
//         </div>
        
//         {/* Team composition summary */}
//         <div className="mb-3 bg-gray-800 p-2 rounded">
//           <div className="flex justify-between text-sm mb-1">
//             <span>{team.team1ShortName}: {team1Count}</span>
//             <span>{team.team2ShortName}: {team2Count}</span>
//             <span>Overseas: {overseasCount}/5</span>
//           </div>
//           <div className="flex flex-wrap gap-1 text-xs">
//             <span className="bg-gray-600 px-2 py-1 rounded">WK: {playersByRole['WK-Batsman'].length}</span>
//             <span className="bg-gray-600 px-2 py-1 rounded">Bats: {playersByRole['Batsman'].length}</span>
//             <span className="bg-gray-600 px-2 py-1 rounded">AR: {
//               playersByRole['Batting Allrounder'].length + playersByRole['Bowling Allrounder'].length
//             }</span>
//             <span className="bg-gray-600 px-2 py-1 rounded">Bowlers: {playersByRole['Bowler'].length}</span>
//           </div>
//         </div>
        
//         {/* Players list */}
//         <div className="space-y-2 max-h-60 overflow-y-auto">
//           {/* Wicket Keepers */}
//           {playersByRole['WK-Batsman'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">Wicket Keepers</div>
//           )}
//           {playersByRole['WK-Batsman'].map((player, i) => (
//             <PlayerRow
//               key={`wk-${i}`}
//               player={player}
//               isSubstitute={player.substitute}
//               wasSubstituted={player.wasSubstituted}
//             />
//           ))}
          
//           {/* Batsmen */}
//           {playersByRole['Batsman'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">Batsmen</div>
//           )}
//           {playersByRole['Batsman'].map((player, i) => (
//             <PlayerRow
//               key={`bat-${i}`}
//               player={player}
//               isSubstitute={player.substitute}
//               wasSubstituted={player.wasSubstituted}
//             />
//           ))}
          
//           {/* All Rounders */}
//           {playersByRole['Batting Allrounder'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">Batting Allrounders</div>
//           )}
//           {playersByRole['Batting Allrounder'].map((player, i) => (
//             <PlayerRow
//               key={`bar-${i}`}
//               player={player}
//               isSubstitute={player.substitute}
//               wasSubstituted={player.wasSubstituted}
//             />
//           ))}
          
//           {playersByRole['Bowling Allrounder'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">Bowling Allrounders</div>
//           )}
//           {playersByRole['Bowling Allrounder'].map((player, i) => (
//             <PlayerRow
//               key={`bowlar-${i}`}
//               player={player}
//               isSubstitute={player.substitute}
//               wasSubstituted={player.wasSubstituted}
//             />
//           ))}
          
//           {/* Bowlers */}
//           {playersByRole['Bowler'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">Bowlers</div>
//           )}
//           {playersByRole['Bowler'].map((player, i) => (
//             <PlayerRow
//               key={`bowl-${i}`}
//               player={player}
//               isSubstitute={player.substitute}
//               wasSubstituted={player.wasSubstituted}
//             />
//           ))}
          
//           {/* Substitutes section */}
//           {team.substitutes && team.substitutes.length > 0 && (
//             <>
//               <div className="text-xs text-gray-400 mt-4">Substitutes (→)</div>
//               {team.substitutes.map((sub, i) => (
//                 <PlayerRow
//                   key={`sub-${i}`}
//                   player={sub}
//                   isSubstitute={false}
//                   isSubstituteList
//                 />
//               ))}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// const PlayerRow = ({
//   player,
//   isSubstitute,
//   wasSubstituted,
//   isSubstituteList = false
// }: {
//   player: any,
//   isSubstitute: boolean,
//   wasSubstituted?: boolean,
//   isSubstituteList?: boolean
// }) => (
//   <div className={`flex items-center justify-between text-sm p-2 rounded ${
//     wasSubstituted ? 'bg-yellow-900' :
//     isSubstitute ? 'bg-red-900' :
//     isSubstituteList ? 'bg-gray-600' : 'bg-gray-800'
//   }`}>
//     <div className="flex items-center">
//       {isSubstituteList && (
//         <span className="mr-1 text-yellow-400">→</span>
//       )}
//       {wasSubstituted && (
//         <span className="mr-1 text-green-400">↑</span>
//       )}
//       <img
//         src={player.imgURL || "/fallback.png"}
//         alt={player.name}
//         className="w-8 h-8 rounded-full mr-2"
//       />
//       <span className={isSubstitute ? 'line-through' : ''}>
//         {player.name}
//         {player.keeper && ' (WK)'}
//         {player.isOverseas && ' (OS)'}
//         {wasSubstituted && ` (replaced ${player.replacedPlayer})`}
//       </span>
//     </div>
//     <div className="text-right">
//       <div className="text-xs text-gray-400">{player.teamName}</div>
//       <div className="text-xs">Sel: {player.selectedBy?.toFixed(1)}%</div>
//     </div>
//   </div>
// );

// // Helper function to normalize roles (same as in your team generator)
// const normalizeRole = (role: string): string => {
//   if (!role) return 'Bowler';
  
//   const lowerRole = role.toLowerCase().trim();
//   if (lowerRole.includes('keep') || lowerRole.includes('wk')) return 'WK-Batsman';
//   if (lowerRole.includes('bat') && lowerRole.includes('all')) return 'Batting Allrounder';
//   if (lowerRole.includes('bowl') && lowerRole.includes('all')) return 'Bowling Allrounder';
//   if (lowerRole.includes('bat')) return 'Batsman';
//   if (lowerRole.includes('bowl')) return 'Bowler';
//   if (lowerRole.includes('all')) return 'Bowling Allrounder';
  
//   return 'Bowler';
// };








// // TeamCard.tsx
// import { GeneratedTeam } from "../../types/match";
// import { useEffect, useState } from "react";

// interface TeamCardProps {
//   team: GeneratedTeam;
//   index: number;
//   isSelected: boolean;
//   onToggleSelect: () => void;
//   onUpdateTeam: (updatedTeam: GeneratedTeam) => void;
// }

// export default function TeamCard({
//   team,
//   index,
//   isSelected,
//   onToggleSelect,
//   onUpdateTeam
// }: TeamCardProps) {
//   const [originalTeam, setOriginalTeam] = useState<GeneratedTeam>({...team});
//   const [changes, setChanges] = useState<number>(team.changes || 0);
//   const [playerChanges, setPlayerChanges] = useState<Array<{
//     out: string;
//     in: string;
//     role: string;
//   }>>([]);

//   // Check for lineup changes when component mounts
//   useEffect(() => {
//     const checkLineupChanges = () => {
//       const newPlayerChanges: Array<{
//         out: string;
//         in: string;
//         role: string;
//       }> = [];
      
//       let changeCount = 0;
      
//       // Check each player in the original team
//       const updatedPlayers = team.players.map(player => {
//         // If player is now a substitute, find replacement
//         if (player.substitute) {
//           changeCount++;
          
//           // Find best replacement from substitutes with similar role
//           const replacement = team.substitutes
//             .filter(sub => normalizeRole(sub.role) === normalizeRole(player.role))
//             .sort((a, b) => (b.selectedBy || 0) - (a.selectedBy || 0))[0];
          
//           if (replacement) {
//             newPlayerChanges.push({
//               out: player.name,
//               in: replacement.name,
//               role: player.role
//             });
            
//             return {
//               ...replacement,
//               wasSubstituted: true,
//               replacedPlayer: player.name
//             };
//           }
//         }
//         return player;
//       });
      
//       // Update changes if needed
//       if (changeCount > 0) {
//         setChanges(changeCount);
//         setPlayerChanges(newPlayerChanges);
        
//         // Update the team with changes
//         const updatedTeam = {
//           ...team,
//           players: updatedPlayers,
//           changes: changeCount
//         };
        
//         onUpdateTeam(updatedTeam);
//       }
//     };
    
//     checkLineupChanges();
//   }, [team, onUpdateTeam]);

//   // Group players by role for better display
//   const playersByRole = {
//     'WK-Batsman': team.players.filter(p => p.roleOrder === 1),
//     'Batsman': team.players.filter(p => p.roleOrder === 2),
//     'Batting Allrounder': team.players.filter(p => p.roleOrder === 3),
//     'Bowling Allrounder': team.players.filter(p => p.roleOrder === 4),
//     'Bowler': team.players.filter(p => p.roleOrder === 5)
//   };

//   const team1Count = team.players.filter(p => p.teamName === team.captain.teamName).length;
//   const team2Count = 11 - team1Count;

//   // Check for substituted players
//   const substitutedPlayers = team.players.filter(p => p.wasSubstituted);

//   return (
//     <div className={`border-2 ${isSelected ? 'border-blue-500' : 'border-gray-700'} rounded-lg overflow-hidden relative`}>
//       {/* Change indicator badge */}
//       {changes > 0 && (
//         <div className="absolute -top-2 -right-2 bg-yellow-500 text-black font-bold rounded-full h-6 w-6 flex items-center justify-center">
//           {changes}
//         </div>
//       )}
      
//       <div className="bg-gray-800 p-3 flex justify-between items-center">
//         <h3 className="font-bold">Team {index + 1}</h3>
//         <div className="flex items-center gap-2">
//           {changes > 0 && (
//             <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full">
//               {changes} change{changes > 1 ? 's' : ''}
//             </span>
//           )}
//           <input
//             type="checkbox"
//             checked={isSelected}
//             onChange={onToggleSelect}
//             className="h-5 w-5 rounded text-blue-600"
//           />
//         </div>
//       </div>
      
//       <div className="bg-gray-700 p-4">
//         {/* Changes summary */}
//         {playerChanges.length > 0 && (
//           <div className="mb-3 bg-yellow-900 p-2 rounded text-sm">
//             <div className="font-medium mb-1">Team Changes:</div>
//             {playerChanges.map((change, i) => (
//               <div key={i} className="flex justify-between">
//                 <span className="text-red-300 line-through">{change.out}</span>
//                 <span>→</span>
//                 <span className="text-green-300">{change.in}</span>
//                 <span className="text-gray-400 text-xs">{change.role}</span>
//               </div>
//             ))}
//           </div>
//         )}
        
//         <div className="flex justify-between mb-3">
//           <div className="flex items-center gap-2 w-full">
//             <img
//               src={team.captain.imgURL || "/fallback.png"}
//               alt={team.captain.name}
//               className="w-10 h-10 rounded-full"
//             />
//             <div className="flex-1">
//               <div className="flex justify-between items-center">
//                 <p className={`font-medium ${
//                   team.captain.wasSubstituted ? 'text-yellow-400' :
//                   team.captain.substitute ? 'text-red-400' : 'text-white'
//                 }`}>
//                   {team.captain.name}
//                 </p>
//                 <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs ml-2">C</span>
//               </div>
//               <p className="text-xs text-gray-400">{team.captain.teamShortName || team.captain.teamName}</p>
//             </div>
//           </div>
//         </div>
        
//         <div className="flex justify-between mb-3">
//           <div className="flex items-center gap-2 w-full">
//             <img
//               src={team.viceCaptain.imgURL || "/fallback.png"}
//               alt={team.viceCaptain.name}
//               className="w-10 h-10 rounded-full"
//             />
//             <div className="flex-1">
//               <div className="flex justify-between items-center">
//                 <p className={`font-medium ${
//                   team.viceCaptain.wasSubstituted ? 'text-yellow-400' :
//                   team.viceCaptain.substitute ? 'text-red-400' : 'text-white'
//                 }`}>
//                   {team.viceCaptain.name}
//                 </p>
//                 <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs ml-2">VC</span>
//               </div>
//               <p className="text-xs text-gray-400">{team.viceCaptain.teamShortName || team.viceCaptain.teamName}</p>
//             </div>
//           </div>
//         </div>
        
//         {/* Team composition summary */}
//         <div className="mb-3 bg-gray-800 p-2 rounded">
//           <div className="flex justify-between text-sm mb-1">
//             <span>{team.team1ShortName}: {team1Count}</span>
//             <span>{team.team2ShortName}: {team2Count}</span>
//           </div>
//           <div className="flex flex-wrap gap-1 text-xs">
//             <span className="bg-gray-600 px-2 py-1 rounded">WK: {playersByRole['WK-Batsman'].length}</span>
//             <span className="bg-gray-600 px-2 py-1 rounded">Bats: {playersByRole['Batsman'].length}</span>
//             <span className="bg-gray-600 px-2 py-1 rounded">AR: {
//               playersByRole['Batting Allrounder'].length + playersByRole['Bowling Allrounder'].length
//             }</span>
//             <span className="bg-gray-600 px-2 py-1 rounded">Bowlers: {playersByRole['Bowler'].length}</span>
//           </div>
//         </div>
        
//         {/* Players list */}
//         <div className="space-y-2 max-h-60 overflow-y-auto">
//           {/* Wicket Keepers */}
//           {playersByRole['WK-Batsman'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">Wicket Keepers</div>
//           )}
//           {playersByRole['WK-Batsman'].map((player, i) => (
//             <PlayerRow
//               key={`wk-${i}`}
//               player={player}
//               isSubstitute={player.substitute}
//               wasSubstituted={player.wasSubstituted}
//             />
//           ))}
          
//           {/* Batsmen */}
//           {playersByRole['Batsman'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">Batsmen</div>
//           )}
//           {playersByRole['Batsman'].map((player, i) => (
//             <PlayerRow
//               key={`bat-${i}`}
//               player={player}
//               isSubstitute={player.substitute}
//               wasSubstituted={player.wasSubstituted}
//             />
//           ))}
          
//           {/* All Rounders */}
//           {playersByRole['Batting Allrounder'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">Batting Allrounders</div>
//           )}
//           {playersByRole['Batting Allrounder'].map((player, i) => (
//             <PlayerRow
//               key={`bar-${i}`}
//               player={player}
//               isSubstitute={player.substitute}
//               wasSubstituted={player.wasSubstituted}
//             />
//           ))}
          
//           {playersByRole['Bowling Allrounder'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">Bowling Allrounders</div>
//           )}
//           {playersByRole['Bowling Allrounder'].map((player, i) => (
//             <PlayerRow
//               key={`bowlar-${i}`}
//               player={player}
//               isSubstitute={player.substitute}
//               wasSubstituted={player.wasSubstituted}
//             />
//           ))}
          
//           {/* Bowlers */}
//           {playersByRole['Bowler'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">Bowlers</div>
//           )}
//           {playersByRole['Bowler'].map((player, i) => (
//             <PlayerRow
//               key={`bowl-${i}`}
//               player={player}
//               isSubstitute={player.substitute}
//               wasSubstituted={player.wasSubstituted}
//             />
//           ))}
          
//           {/* Substitutes section */}
//           {team.substitutes && team.substitutes.length > 0 && (
//             <>
//               <div className="text-xs text-gray-400 mt-4">Substitutes (→)</div>
//               {team.substitutes.map((sub, i) => (
//                 <PlayerRow
//                   key={`sub-${i}`}
//                   player={sub}
//                   isSubstitute={false}
//                   isSubstituteList
//                 />
//               ))}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// const PlayerRow = ({
//   player,
//   isSubstitute,
//   wasSubstituted,
//   isSubstituteList = false
// }: {
//   player: any,
//   isSubstitute: boolean,
//   wasSubstituted?: boolean,
//   isSubstituteList?: boolean
// }) => (
//   <div className={`flex items-center justify-between text-sm p-2 rounded ${
//     wasSubstituted ? 'bg-yellow-900' :
//     isSubstitute ? 'bg-red-900' :
//     isSubstituteList ? 'bg-gray-600' : 'bg-gray-800'
//   }`}>
//     <div className="flex items-center gap-2 w-full">
//       {isSubstituteList && (
//         <span className="text-yellow-400">→</span>
//       )}
//       {wasSubstituted && (
//         <span className="text-green-400">↑</span>
//       )}
//       <img
//         src={player.imgURL || "/fallback.png"}
//         alt={player.name}
//         className="w-8 h-8 rounded-full"
//       />
//       <div className="flex-1">
//         <div className="flex justify-between items-center">
//           <span className={isSubstitute ? 'line-through' : ''}>
//             {player.name}
//             {player.keeper && ' (WK)'}
//             {wasSubstituted && ` (replaced ${player.replacedPlayer})`}
//           </span>
//         </div>
//         <p className="text-xs text-gray-400">{player.teamShortName || player.teamName}</p>
//       </div>
//     </div>
//   </div>
// );

// // Helper function to normalize roles (same as in your team generator)
// const normalizeRole = (role: string): string => {
//   if (!role) return 'Bowler';
  
//   const lowerRole = role.toLowerCase().trim();
//   if (lowerRole.includes('keep') || lowerRole.includes('wk')) return 'WK-Batsman';
//   if (lowerRole.includes('bat') && lowerRole.includes('all')) return 'Batting Allrounder';
//   if (lowerRole.includes('bowl') && lowerRole.includes('all')) return 'Bowling Allrounder';
//   if (lowerRole.includes('bat')) return 'Batsman';
//   if (lowerRole.includes('bowl')) return 'Bowler';
//   if (lowerRole.includes('all')) return 'Bowling Allrounder';
  
//   return 'Bowler';
// };






// import { GeneratedTeam } from "../../types/match";
// import { useEffect, useState } from "react";

// interface TeamCardProps {
//   team: GeneratedTeam;
//   index: number;
//   isSelected: boolean;
//   onToggleSelect: () => void;
//   onUpdateTeam: (updatedTeam: GeneratedTeam) => void;
// }

// export default function TeamCard({
//   team,
//   index,
//   isSelected,
//   onToggleSelect,
//   onUpdateTeam
// }: TeamCardProps) {
//   const [originalTeam, setOriginalTeam] = useState<GeneratedTeam>({...team});
//   const [changes, setChanges] = useState<number>(team.changes || 0);
//   const [playerChanges, setPlayerChanges] = useState<Array<{
//     out: string;
//     in: string;
//     role: string;
//   }>>([]);

//   // Check for lineup changes when component mounts
//   useEffect(() => {
//     const checkLineupChanges = () => {
//       const newPlayerChanges: Array<{
//         out: string;
//         in: string;
//         role: string;
//       }> = [];
      
//       let changeCount = 0;
      
//       // Check each player in the original team
//       const updatedPlayers = team.players.map(player => {
//         // If player is now a substitute, find replacement
//         if (player.substitute) {
//           changeCount++;
          
//           // Find best replacement from substitutes with similar role
//           const replacement = team.substitutes
//             .filter(sub => normalizeRole(sub.role) === normalizeRole(player.role))
//             .sort((a, b) => (b.selectedBy || 0) - (a.selectedBy || 0))[0];
          
//           if (replacement) {
//             newPlayerChanges.push({
//               out: player.name,
//               in: replacement.name,
//               role: player.role
//             });
            
//             return {
//               ...replacement,
//               wasSubstituted: true,
//               replacedPlayer: player.name
//             };
//           }
//         }
//         return player;
//       });
      
//       // Update changes if needed
//       if (changeCount > 0) {
//         setChanges(changeCount);
//         setPlayerChanges(newPlayerChanges);
        
//         // Update the team with changes
//         const updatedTeam = {
//           ...team,
//           players: updatedPlayers,
//           changes: changeCount
//         };
        
//         onUpdateTeam(updatedTeam);
//       }
//     };
    
//     checkLineupChanges();
//   }, [team, onUpdateTeam]);

//   // Group players by role for better display
//   const playersByRole = {
//     'WK-Batsman': team.players.filter(p => p.roleOrder === 1),
//     'Batsman': team.players.filter(p => p.roleOrder === 2),
//     'Batting Allrounder': team.players.filter(p => p.roleOrder === 3),
//     'Bowling Allrounder': team.players.filter(p => p.roleOrder === 4),
//     'Bowler': team.players.filter(p => p.roleOrder === 5)
//   };

//   const team1Count = team.players.filter(p => p.teamName === team.captain.teamName).length;
//   const team2Count = 11 - team1Count;

//   // Check for substituted players
//   const substitutedPlayers = team.players.filter(p => p.wasSubstituted);

//   return (
//     <div className={`border-2 ${isSelected ? 'border-blue-500' : 'border-gray-700'} rounded-lg overflow-hidden relative`}>
//       {/* Change indicator badge */}
//       {changes > 0 && (
//         <div className="absolute -top-2 -right-2 bg-yellow-500 text-black font-bold rounded-full h-6 w-6 flex items-center justify-center">
//           {changes}
//         </div>
//       )}
      
//       <div className="bg-gray-800 p-3 flex justify-between items-center">
//         <h3 className="font-bold">Team {index + 1}</h3>
//         <div className="flex items-center gap-2">
//           {changes > 0 && (
//             <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full">
//               {changes} change{changes > 1 ? 's' : ''}
//             </span>
//           )}
//           <input
//             type="checkbox"
//             checked={isSelected}
//             onChange={onToggleSelect}
//             className="h-5 w-5 rounded text-blue-600"
//           />
//         </div>
//       </div>
      
//       <div className="bg-gray-700 p-4">
//         {/* Changes summary */}
//         {playerChanges.length > 0 && (
//           <div className="mb-3 bg-yellow-900 p-2 rounded text-sm">
//             <div className="font-medium mb-1">Team Changes:</div>
//             {playerChanges.map((change, i) => (
//               <div key={i} className="flex justify-between">
//                 <span className="text-red-300 line-through">{change.out}</span>
//                 <span>→</span>
//                 <span className="text-green-300">{change.in}</span>
//                 <span className="text-gray-400 text-xs">{change.role}</span>
//               </div>
//             ))}
//           </div>
//         )}
        
//         {/* Captain and Vice-Captain side by side */}
//         <div className="flex gap-4 mb-3">
//           {/* Captain */}
//           <div className="flex-1">
//             <div className="flex items-center gap-2 w-full">
//               <img
//                 src={team.captain.imgURL || "/fallback.png"}
//                 alt={team.captain.name}
//                 className="w-10 h-10 rounded-full"
//               />
//               <div className="flex-1">
//                 <div className="flex justify-between items-center">
//                   <p className={`font-medium ${
//                     team.captain.wasSubstituted ? 'text-yellow-400' :
//                     team.captain.substitute ? 'text-red-400' : 'text-white'
//                     }`}>
//                     <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs ml-2">C</span>
//                     {team.captain.name}
//                   </p>
                  
//                 </div>
//                 <p className="text-xs text-gray-400">{team.captain.teamShortName || team.captain.teamName}</p>
//               </div>
//             </div>
//           </div>
          
//           {/* Vice-Captain */}
//           <div className="flex-1">
//             <div className="flex items-center gap-2 w-full">
//               <img
//                 src={team.viceCaptain.imgURL || "/fallback.png"}
//                 alt={team.viceCaptain.name}
//                 className="w-10 h-10 rounded-full"
//               />
//               <div className="flex-1">
//                 <div className="flex justify-between items-center">
//                   <p className={`font-medium ${
//                     team.viceCaptain.wasSubstituted ? 'text-yellow-400' :
//                     team.viceCaptain.substitute ? 'text-red-400' : 'text-white'
//                   }`}>
//                     <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs ml-2">VC</span>
//                     {team.viceCaptain.name}
//                   </p>
                  
//                 </div>
//                 <p className="text-xs text-gray-400">{team.viceCaptain.teamShortName || team.viceCaptain.teamName}</p>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Team composition summary */}
//         <div className="mb-3 bg-gray-800 p-2 rounded">
//           <div className="flex justify-between text-sm mb-1">
//             <span>{team.team1ShortName}: {team1Count}</span>
//             <span>{team.team2ShortName}: {team2Count}</span>
//           </div>
//           <div className="flex flex-wrap gap-1 text-xs">
//             <span className="bg-gray-600 px-2 py-1 rounded">WK: {playersByRole['WK-Batsman'].length}</span>
//             <span className="bg-gray-600 px-2 py-1 rounded">Bats: {playersByRole['Batsman'].length}</span>
//             <span className="bg-gray-600 px-2 py-1 rounded">AR: {
//               playersByRole['Batting Allrounder'].length + playersByRole['Bowling Allrounder'].length
//             }</span>
//             <span className="bg-gray-600 px-2 py-1 rounded">Bowlers: {playersByRole['Bowler'].length}</span>
//           </div>
//         </div>
        
//         {/* Players list */}
//         <div className="space-y-2 max-h-60 overflow-y-auto">
//           {/* Wicket Keepers */}
//           {playersByRole['WK-Batsman'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">Wicket Keepers</div>
//           )}
//           {playersByRole['WK-Batsman'].map((player, i) => (
//             <PlayerRow
//               key={`wk-${i}`}
//               player={player}
//               isSubstitute={player.substitute}
//               wasSubstituted={player.wasSubstituted}
//             />
//           ))}
          
//           {/* Batsmen */}
//           {playersByRole['Batsman'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">Batsmen</div>
//           )}
//           {playersByRole['Batsman'].map((player, i) => (
//             <PlayerRow
//               key={`bat-${i}`}
//               player={player}
//               isSubstitute={player.substitute}
//               wasSubstituted={player.wasSubstituted}
//             />
//           ))}
          
//           {/* All Rounders */}
//           {playersByRole['Batting Allrounder'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">Batting Allrounders</div>
//           )}
//           {playersByRole['Batting Allrounder'].map((player, i) => (
//             <PlayerRow
//               key={`bar-${i}`}
//               player={player}
//               isSubstitute={player.substitute}
//               wasSubstituted={player.wasSubstituted}
//             />
//           ))}
          
//           {playersByRole['Bowling Allrounder'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">Bowling Allrounders</div>
//           )}
//           {playersByRole['Bowling Allrounder'].map((player, i) => (
//             <PlayerRow
//               key={`bowlar-${i}`}
//               player={player}
//               isSubstitute={player.substitute}
//               wasSubstituted={player.wasSubstituted}
//             />
//           ))}
          
//           {/* Bowlers */}
//           {playersByRole['Bowler'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">Bowlers</div>
//           )}
//           {playersByRole['Bowler'].map((player, i) => (
//             <PlayerRow
//               key={`bowl-${i}`}
//               player={player}
//               isSubstitute={player.substitute}
//               wasSubstituted={player.wasSubstituted}
//             />
//           ))}
          
//           {/* Substitutes section */}
//           {team.substitutes && team.substitutes.length > 0 && (
//             <>
//               <div className="text-xs text-gray-400 mt-4">Substitutes (→)</div>
//               {team.substitutes.map((sub, i) => (
//                 <PlayerRow
//                   key={`sub-${i}`}
//                   player={sub}
//                   isSubstitute={false}
//                   isSubstituteList
//                 />
//               ))}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// const PlayerRow = ({
//   player,
//   isSubstitute,
//   wasSubstituted,
//   isSubstituteList = false
// }: {
//   player: any,
//   isSubstitute: boolean,
//   wasSubstituted?: boolean,
//   isSubstituteList?: boolean
// }) => (
//   <div className={`flex items-center justify-between text-sm p-2 rounded ${
//     wasSubstituted ? 'bg-yellow-900' :
//     isSubstitute ? 'bg-red-900' :
//     isSubstituteList ? 'bg-gray-600' : 'bg-gray-800'
//   }`}>
//     <div className="flex items-center gap-2 w-full">
//       {isSubstituteList && (
//         <span className="text-yellow-400">→</span>
//       )}
//       {wasSubstituted && (
//         <span className="text-green-400">↑</span>
//       )}
//       <img
//         src={player.imgURL || "/fallback.png"}
//         alt={player.name}
//         className="w-8 h-8 rounded-full"
//       />
//       <div className="flex-1">
//         <div className="flex justify-between items-center">
//           <span className={isSubstitute ? 'line-through' : ''}>
//             {player.name}
//             {player.keeper && ' (WK)'}
//             {wasSubstituted && ` (replaced ${player.replacedPlayer})`}
//           </span>
//         </div>
//         <p className="text-xs text-gray-400">{player.teamShortName || player.teamName}</p>
//       </div>
//     </div>
//   </div>
// );

// // Helper function to normalize roles (same as in your team generator)
// const normalizeRole = (role: string): string => {
//   if (!role) return 'Bowler';
  
//   const lowerRole = role.toLowerCase().trim();
//   if (lowerRole.includes('keep') || lowerRole.includes('wk')) return 'WK-Batsman';
//   if (lowerRole.includes('bat') && lowerRole.includes('all')) return 'Batting Allrounder';
//   if (lowerRole.includes('bowl') && lowerRole.includes('all')) return 'Bowling Allrounder';
//   if (lowerRole.includes('bat')) return 'Batsman';
//   if (lowerRole.includes('bowl')) return 'Bowler';
//   if (lowerRole.includes('all')) return 'Bowling Allrounder';
  
//   return 'Bowler';
// };







// import { GeneratedTeam } from "../../types/match";
// import { useEffect, useState } from "react";
// import { FiShare2, FiMaximize, FiX, FiTwitter, FiWhatsApp, FiSend } from "react-icons/fi";

// interface TeamCardProps {
//   team: GeneratedTeam;
//   index: number;
//   isSelected: boolean;
//   onToggleSelect: () => void;
//   onUpdateTeam: (updatedTeam: GeneratedTeam) => void;
// }

// export default function TeamCard({
//   team,
//   index,
//   isSelected,
//   onToggleSelect,
//   onUpdateTeam
// }: TeamCardProps) {
//   const [originalTeam, setOriginalTeam] = useState<GeneratedTeam>({...team});
//   const [changes, setChanges] = useState<number>(team.changes || 0);
//   const [playerChanges, setPlayerChanges] = useState<Array<{
//     out: string;
//     in: string;
//     role: string;
//   }>>([]);
//   const [isFullScreen, setIsFullScreen] = useState(false);
//   const [showShareOptions, setShowShareOptions] = useState(false);

//   // Check for lineup changes when component mounts
//   useEffect(() => {
//     const checkLineupChanges = () => {
//       const newPlayerChanges: Array<{
//         out: string;
//         in: string;
//         role: string;
//       }> = [];
      
//       let changeCount = 0;
      
//       // Check each player in the original team
//       const updatedPlayers = team.players.map(player => {
//         // If player is now a substitute, find replacement
//         if (player.substitute) {
//           changeCount++;
          
//           // Find best replacement from substitutes with similar role
//           const replacement = team.substitutes
//             .filter(sub => normalizeRole(sub.role) === normalizeRole(player.role))
//             .sort((a, b) => (b.selectedBy || 0) - (a.selectedBy || 0))[0];
          
//           if (replacement) {
//             newPlayerChanges.push({
//               out: player.name,
//               in: replacement.name,
//               role: player.role
//             });
            
//             return {
//               ...replacement,
//               wasSubstituted: true,
//               replacedPlayer: player.name
//             };
//           }
//         }
//         return player;
//       });
      
//       // Update changes if needed
//       if (changeCount > 0) {
//         setChanges(changeCount);
//         setPlayerChanges(newPlayerChanges);
        
//         // Update the team with changes
//         const updatedTeam = {
//           ...team,
//           players: updatedPlayers,
//           changes: changeCount
//         };
        
//         onUpdateTeam(updatedTeam);
//       }
//     };
    
//     checkLineupChanges();
//   }, [team, onUpdateTeam]);

//   // Group players by role for better display
//   const playersByRole = {
//     'WK-Batsman': team.players.filter(p => p.roleOrder === 1),
//     'Batsman': team.players.filter(p => p.roleOrder === 2),
//     'Batting Allrounder': team.players.filter(p => p.roleOrder === 3),
//     'Bowling Allrounder': team.players.filter(p => p.roleOrder === 4),
//     'Bowler': team.players.filter(p => p.roleOrder === 5)
//   };

//   const team1Count = team.players.filter(p => p.teamName === team.captain.teamName).length;
//   const team2Count = 11 - team1Count;

//   // Check for substituted players
//   const substitutedPlayers = team.players.filter(p => p.wasSubstituted);

//   // Generate shareable text
//   const generateShareText = () => {
//     let text = `🏏 Fantasy Team ${index + 1} - ${team.team1ShortName} vs ${team.team2ShortName}\n\n`;
//     text += `👑 Captain: ${team.captain.name} (${team.captain.teamShortName})\n`;
//     text += `🌟 Vice-Captain: ${team.viceCaptain.name} (${team.viceCaptain.teamShortName})\n\n`;
    
//     text += "Playing XI:\n";
//     Object.entries(playersByRole).forEach(([role, players]) => {
//       if (players.length > 0) {
//         text += `\n${role}:\n`;
//         players.forEach(player => {
//           text += `• ${player.name} (${player.teamShortName}) ${player.wasSubstituted ? '(replaced)' : ''}\n`;
//         });
//       }
//     });
    
//     if (team.substitutes && team.substitutes.length > 0) {
//       text += "\nSubstitutes:\n";
//       team.substitutes.forEach(sub => {
//         text += `• ${sub.name} (${sub.teamShortName})\n`;
//       });
//     }
    
//     text += `\nTeam Balance: ${team1Count} ${team.team1ShortName} | ${team2Count} ${team.team2ShortName}\n`;
//     text += `Risk Level: ${team.riskLevel || 50}/100`;
    
//     return text;
//   };

//   // Share to WhatsApp
//   const shareToWhatsApp = () => {
//     const text = generateShareText();
//     const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
//     window.open(url, '_blank');
//   };

//   // Share to Telegram
//   const shareToTelegram = () => {
//     const text = generateShareText();
//     const url = `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text)}`;
//     window.open(url, '_blank');
//   };

//   // Share to Twitter
//   const shareToTwitter = () => {
//     const text = generateShareText();
//     const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text.substring(0, 250) + (text.length > 250 ? '...' : ''))}`;
//     window.open(url, '_blank');
//   };

//   // Copy to clipboard
//   const copyToClipboard = () => {
//     const text = generateShareText();
//     navigator.clipboard.writeText(text).then(() => {
//       alert('Team copied to clipboard!');
//     });
//   };

//   const TeamContent = () => (
//     <>
//       {/* Change indicator badge */}
//       {changes > 0 && (
//         <div className="absolute -top-2 -right-2 bg-yellow-500 text-black font-bold rounded-full h-6 w-6 flex items-center justify-center">
//           {changes}
//         </div>
//       )}
      
//       <div className="bg-gray-800 p-3 flex justify-between items-center">
//         <h3 className="font-bold">Team {index + 1}</h3>
//         <div className="flex items-center gap-2">
//           {changes > 0 && (
//             <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full">
//               {changes} change{changes > 1 ? 's' : ''}
//             </span>
//           )}
//           <div className="flex gap-2">
//             <button
//               onClick={() => setShowShareOptions(!showShareOptions)}
//               className="text-gray-300 hover:text-white"
//             >
//               <FiShare2 size={18} />
//             </button>
//             <button
//               onClick={() => setIsFullScreen(!isFullScreen)}
//               className="text-gray-300 hover:text-white"
//             >
//               {isFullScreen ? <FiX size={18} /> : <FiMaximize size={18} />}
//             </button>
//             <input
//               type="checkbox"
//               checked={isSelected}
//               onChange={onToggleSelect}
//               className="h-5 w-5 rounded text-blue-600"
//             />
//           </div>
//         </div>
//       </div>
      
//       {/* Share options dropdown */}
//       {showShareOptions && (
//         <div className="absolute right-12 top-12 bg-gray-800 border border-gray-700 rounded-md shadow-lg z-10 p-2">
//           <button
//             onClick={shareToWhatsApp}
//             className="flex items-center gap-2 w-full p-2 hover:bg-gray-700 rounded text-left"
//           >
//             <FiWhatsApp className="text-green-400" /> WhatsApp
//           </button>
//           <button
//             onClick={shareToTelegram}
//             className="flex items-center gap-2 w-full p-2 hover:bg-gray-700 rounded text-left"
//           >
//             <FiSend className="text-blue-400" /> Telegram
//           </button>
//           <button
//             onClick={shareToTwitter}
//             className="flex items-center gap-2 w-full p-2 hover:bg-gray-700 rounded text-left"
//           >
//             <FiTwitter className="text-blue-400" /> Twitter
//           </button>
//           <button
//             onClick={copyToClipboard}
//             className="flex items-center gap-2 w-full p-2 hover:bg-gray-700 rounded text-left"
//           >
//             <FiShare2 /> Copy Text
//           </button>
//         </div>
//       )}
      
//       <div className="bg-gray-700 p-4">
//         {/* Changes summary */}
//         {playerChanges.length > 0 && (
//           <div className="mb-3 bg-yellow-900 p-2 rounded text-sm">
//             <div className="font-medium mb-1">Team Changes:</div>
//             {playerChanges.map((change, i) => (
//               <div key={i} className="flex justify-between">
//                 <span className="text-red-300 line-through">{change.out}</span>
//                 <span>→</span>
//                 <span className="text-green-300">{change.in}</span>
//                 <span className="text-gray-400 text-xs">{change.role}</span>
//               </div>
//             ))}
//           </div>
//         )}
        
//         {/* Captain and Vice-Captain side by side */}
//         <div className="flex gap-4 mb-3">
//           {/* Captain */}
//           <div className="flex-1">
//             <div className="flex items-center gap-2 w-full">
//               <img
//                 src={team.captain.imgURL || "/fallback.png"}
//                 alt={team.captain.name}
//                 className="w-10 h-10 rounded-full"
//               />
//               <div className="flex-1">
//                 <div className="flex justify-between items-center">
//                   <p className={`font-medium ${
//                     team.captain.wasSubstituted ? 'text-yellow-400' :
//                     team.captain.substitute ? 'text-red-400' : 'text-white'
//                     }`}>
//                     <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs ml-2">C</span>
//                     {team.captain.name}
//                   </p>
                  
//                 </div>
//                 <p className="text-xs text-gray-400">{team.captain.teamShortName || team.captain.teamName}</p>
//               </div>
//             </div>
//           </div>
          
//           {/* Vice-Captain */}
//           <div className="flex-1">
//             <div className="flex items-center gap-2 w-full">
//               <img
//                 src={team.viceCaptain.imgURL || "/fallback.png"}
//                 alt={team.viceCaptain.name}
//                 className="w-10 h-10 rounded-full"
//               />
//               <div className="flex-1">
//                 <div className="flex justify-between items-center">
//                   <p className={`font-medium ${
//                     team.viceCaptain.wasSubstituted ? 'text-yellow-400' :
//                     team.viceCaptain.substitute ? 'text-red-400' : 'text-white'
//                   }`}>
//                     <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs ml-2">VC</span>
//                     {team.viceCaptain.name}
//                   </p>
                  
//                 </div>
//                 <p className="text-xs text-gray-400">{team.viceCaptain.teamShortName || team.viceCaptain.teamName}</p>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Team composition summary */}
//         <div className="mb-3 bg-gray-800 p-2 rounded">
//           <div className="flex justify-between text-sm mb-1">
//             <span>{team.team1ShortName}: {team1Count}</span>
//             <span>{team.team2ShortName}: {team2Count}</span>
//           </div>
//           <div className="flex flex-wrap gap-1 text-xs">
//             <span className="bg-gray-600 px-2 py-1 rounded">WK: {playersByRole['WK-Batsman'].length}</span>
//             <span className="bg-gray-600 px-2 py-1 rounded">Bats: {playersByRole['Batsman'].length}</span>
//             <span className="bg-gray-600 px-2 py-1 rounded">AR: {
//               playersByRole['Batting Allrounder'].length + playersByRole['Bowling Allrounder'].length
//             }</span>
//             <span className="bg-gray-600 px-2 py-1 rounded">Bowlers: {playersByRole['Bowler'].length}</span>
//           </div>
//         </div>
        
//         {/* Players list */}
//         <div className={`space-y-2 ${isFullScreen ? '' : 'max-h-60'} overflow-y-auto`}>
//           {/* Wicket Keepers */}
//           {playersByRole['WK-Batsman'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">Wicket Keepers</div>
//           )}
//           {playersByRole['WK-Batsman'].map((player, i) => (
//             <PlayerRow
//               key={`wk-${i}`}
//               player={player}
//               isSubstitute={player.substitute}
//               wasSubstituted={player.wasSubstituted}
//             />
//           ))}
          
//           {/* Batsmen */}
//           {playersByRole['Batsman'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">Batsmen</div>
//           )}
//           {playersByRole['Batsman'].map((player, i) => (
//             <PlayerRow
//               key={`bat-${i}`}
//               player={player}
//               isSubstitute={player.substitute}
//               wasSubstituted={player.wasSubstituted}
//             />
//           ))}
          
//           {/* All Rounders */}
//           {playersByRole['Batting Allrounder'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">Batting Allrounders</div>
//           )}
//           {playersByRole['Batting Allrounder'].map((player, i) => (
//             <PlayerRow
//               key={`bar-${i}`}
//               player={player}
//               isSubstitute={player.substitute}
//               wasSubstituted={player.wasSubstituted}
//             />
//           ))}
          
//           {playersByRole['Bowling Allrounder'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">Bowling Allrounders</div>
//           )}
//           {playersByRole['Bowling Allrounder'].map((player, i) => (
//             <PlayerRow
//               key={`bowlar-${i}`}
//               player={player}
//               isSubstitute={player.substitute}
//               wasSubstituted={player.wasSubstituted}
//             />
//           ))}
          
//           {/* Bowlers */}
//           {playersByRole['Bowler'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">Bowlers</div>
//           )}
//           {playersByRole['Bowler'].map((player, i) => (
//             <PlayerRow
//               key={`bowl-${i}`}
//               player={player}
//               isSubstitute={player.substitute}
//               wasSubstituted={player.wasSubstituted}
//             />
//           ))}
          
//           {/* Substitutes section */}
//           {team.substitutes && team.substitutes.length > 0 && (
//             <>
//               <div className="text-xs text-gray-400 mt-4">Substitutes (→)</div>
//               {team.substitutes.map((sub, i) => (
//                 <PlayerRow
//                   key={`sub-${i}`}
//                   player={sub}
//                   isSubstitute={false}
//                   isSubstituteList
//                 />
//               ))}
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );

//   return (
//     <>
//       {/* Normal view */}
//       {!isFullScreen && (
//         <div className={`border-2 ${isSelected ? 'border-blue-500' : 'border-gray-700'} rounded-lg overflow-hidden relative`}>
//           <TeamContent />
//         </div>
//       )}
      
//       {/* Full screen view */}
//       {isFullScreen && (
//         <div className="fixed inset-0 bg-gray-900 z-50 p-4 overflow-auto">
//           <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg overflow-hidden relative">
//             <TeamContent />
//             <button
//               onClick={() => setIsFullScreen(false)}
//               className="absolute top-4 right-4 bg-gray-700 p-2 rounded-full hover:bg-gray-600"
//             >
//               <FiX size={20} />
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// const PlayerRow = ({
//   player,
//   isSubstitute,
//   wasSubstituted,
//   isSubstituteList = false
// }: {
//   player: any,
//   isSubstitute: boolean,
//   wasSubstituted?: boolean,
//   isSubstituteList?: boolean
// }) => (
//   <div className={`flex items-center justify-between text-sm p-2 rounded ${
//     wasSubstituted ? 'bg-yellow-900' :
//     isSubstitute ? 'bg-red-900' :
//     isSubstituteList ? 'bg-gray-600' : 'bg-gray-800'
//   }`}>
//     <div className="flex items-center gap-2 w-full">
//       {isSubstituteList && (
//         <span className="text-yellow-400">→</span>
//       )}
//       {wasSubstituted && (
//         <span className="text-green-400">↑</span>
//       )}
//       <img
//         src={player.imgURL || "/fallback.png"}
//         alt={player.name}
//         className="w-8 h-8 rounded-full"
//       />
//       <div className="flex-1">
//         <div className="flex justify-between items-center">
//           <span className={isSubstitute ? 'line-through' : ''}>
//             {player.name}
//             {player.keeper && ' (WK)'}
//             {wasSubstituted && ` (replaced ${player.replacedPlayer})`}
//           </span>
//         </div>
//         <p className="text-xs text-gray-400">{player.teamShortName || player.teamName}</p>
//       </div>
//     </div>
//   </div>
// );

// // Helper function to normalize roles (same as in your team generator)
// const normalizeRole = (role: string): string => {
//   if (!role) return 'Bowler';
  
//   const lowerRole = role.toLowerCase().trim();
//   if (lowerRole.includes('keep') || lowerRole.includes('wk')) return 'WK-Batsman';
//   if (lowerRole.includes('bat') && lowerRole.includes('all')) return 'Batting Allrounder';
//   if (lowerRole.includes('bowl') && lowerRole.includes('all')) return 'Bowling Allrounder';
//   if (lowerRole.includes('bat')) return 'Batsman';
//   if (lowerRole.includes('bowl')) return 'Bowler';
//   if (lowerRole.includes('all')) return 'Bowling Allrounder';
  
//   return 'Bowler';
// };








// import { GeneratedTeam } from "../../types/match";
// import { useEffect, useState } from "react";
// import {
//   FiShare2,
//   FiMaximize,
//   FiX,
//   FiTwitter,
//   FiWhatsApp,
//   FiSend
// } from "react-icons/fi";

// interface TeamCardProps {
//   team: GeneratedTeam;
//   index: number;
//   isSelected: boolean;
//   onToggleSelect: () => void;
//   onUpdateTeam: (updatedTeam: GeneratedTeam) => void;
// }

// interface PlayerRowProps {
//   player: any;
//   isSubstitute: boolean;
//   wasSubstituted?: boolean;
//   isSubstituteList?: boolean;
// }

// const PlayerRow = ({
//   player,
//   isSubstitute,
//   wasSubstituted,
//   isSubstituteList = false
// }: PlayerRowProps) => (
//   <div className={`flex items-center justify-between text-sm p-2 rounded ${
//     wasSubstituted ? 'bg-yellow-900' :
//     isSubstitute ? 'bg-red-900' :
//     isSubstituteList ? 'bg-gray-600' : 'bg-gray-800'
//   }`}>
//     <div className="flex items-center gap-2 w-full">
//       {isSubstituteList && (
//         <span className="text-yellow-400">→</span>
//       )}
//       {wasSubstituted && (
//         <span className="text-green-400">↑</span>
//       )}
//       <img
//         src={player.imgURL || "/fallback.png"}
//         alt={player.name}
//         className="w-8 h-8 rounded-full"
//       />
//       <div className="flex-1">
//         <div className="flex justify-between items-center">
//           <span className={isSubstitute ? 'line-through' : ''}>
//             {player.name}
//             {player.keeper && ' (WK)'}
//             {wasSubstituted && ` (replaced ${player.replacedPlayer})`}
//           </span>
//         </div>
//         <p className="text-xs text-gray-400">{player.teamShortName || player.teamName}</p>
//       </div>
//     </div>
//   </div>
// );

// const normalizeRole = (role: string): string => {
//   if (!role) return 'Bowler';
  
//   const lowerRole = role.toLowerCase().trim();
//   if (lowerRole.includes('keep') || lowerRole.includes('wk')) return 'WK-Batsman';
//   if (lowerRole.includes('bat') && lowerRole.includes('all')) return 'Batting Allrounder';
//   if (lowerRole.includes('bowl') && lowerRole.includes('all')) return 'Bowling Allrounder';
//   if (lowerRole.includes('bat')) return 'Batsman';
//   if (lowerRole.includes('bowl')) return 'Bowler';
//   if (lowerRole.includes('all')) return 'Bowling Allrounder';
  
//   return 'Bowler';
// };

// export default function TeamCard({
//   team,
//   index,
//   isSelected,
//   onToggleSelect,
//   onUpdateTeam
// }: TeamCardProps) {
//   const [originalTeam] = useState<GeneratedTeam>({...team});
//   const [changes, setChanges] = useState<number>(team.changes || 0);
//   const [playerChanges, setPlayerChanges] = useState<Array<{
//     out: string;
//     in: string;
//     role: string;
//   }>>([]);
//   const [isFullScreen, setIsFullScreen] = useState(false);
//   const [showShareOptions, setShowShareOptions] = useState(false);

//   useEffect(() => {
//     const checkLineupChanges = () => {
//       const newPlayerChanges: Array<{
//         out: string;
//         in: string;
//         role: string;
//       }> = [];
      
//       let changeCount = 0;
      
//       const updatedPlayers = team.players.map(player => {
//         if (player.substitute) {
//           changeCount++;
          
//           const replacement = team.substitutes
//             .filter(sub => normalizeRole(sub.role) === normalizeRole(player.role))
//             .sort((a, b) => (b.selectedBy || 0) - (a.selectedBy || 0))[0];
          
//           if (replacement) {
//             newPlayerChanges.push({
//               out: player.name,
//               in: replacement.name,
//               role: player.role
//             });
            
//             return {
//               ...replacement,
//               wasSubstituted: true,
//               replacedPlayer: player.name
//             };
//           }
//         }
//         return player;
//       });
      
//       if (changeCount > 0) {
//         setChanges(changeCount);
//         setPlayerChanges(newPlayerChanges);
        
//         const updatedTeam = {
//           ...team,
//           players: updatedPlayers,
//           changes: changeCount
//         };
        
//         onUpdateTeam(updatedTeam);
//       }
//     };
    
//     checkLineupChanges();
//   }, [team, onUpdateTeam]);

//   const playersByRole = {
//     'WK-Batsman': team.players.filter(p => p.roleOrder === 1),
//     'Batsman': team.players.filter(p => p.roleOrder === 2),
//     'Batting Allrounder': team.players.filter(p => p.roleOrder === 3),
//     'Bowling Allrounder': team.players.filter(p => p.roleOrder === 4),
//     'Bowler': team.players.filter(p => p.roleOrder === 5)
//   };

//   const team1Count = team.players.filter(p => p.teamName === team.captain.teamName).length;
//   const team2Count = 11 - team1Count;

//   const generateShareText = () => {
//     let text = `🏏 Fantasy Team ${index + 1} - ${team.team1ShortName} vs ${team.team2ShortName}\n\n`;
//     text += `👑 Captain: ${team.captain.name} (${team.captain.teamShortName})\n`;
//     text += `🌟 Vice-Captain: ${team.viceCaptain.name} (${team.viceCaptain.teamShortName})\n\n`;
    
//     text += "Playing XI:\n";
//     Object.entries(playersByRole).forEach(([role, players]) => {
//       if (players.length > 0) {
//         text += `\n${role}:\n`;
//         players.forEach(player => {
//           text += `• ${player.name} (${player.teamShortName}) ${player.wasSubstituted ? '(replaced)' : ''}\n`;
//         });
//       }
//     });
    
//     if (team.substitutes && team.substitutes.length > 0) {
//       text += "\nSubstitutes:\n";
//       team.substitutes.forEach(sub => {
//         text += `• ${sub.name} (${sub.teamShortName})\n`;
//       });
//     }
    
//     text += `\nTeam Balance: ${team1Count} ${team.team1ShortName} | ${team2Count} ${team.team2ShortName}\n`;
//     text += `Risk Level: ${team.riskLevel || 50}/100`;
    
//     return text;
//   };

//   const shareToWhatsApp = () => {
//     const text = generateShareText();
//     const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
//     window.open(url, '_blank');
//     setShowShareOptions(false);
//   };

//   const shareToTelegram = () => {
//     const text = generateShareText();
//     const url = `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text)}`;
//     window.open(url, '_blank');
//     setShowShareOptions(false);
//   };

//   const shareToTwitter = () => {
//     const text = generateShareText();
//     const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text.substring(0, 250) + (text.length > 250 ? '...' : ''))}`;
//     window.open(url, '_blank');
//     setShowShareOptions(false);
//   };

//   const copyToClipboard = () => {
//     const text = generateShareText();
//     navigator.clipboard.writeText(text).then(() => {
//       alert('Team copied to clipboard!');
//       setShowShareOptions(false);
//     });
//   };

//   const TeamContent = () => (
//     <>
//       {changes > 0 && (
//         <div className="absolute -top-2 -right-2 bg-yellow-500 text-black font-bold rounded-full h-6 w-6 flex items-center justify-center">
//           {changes}
//         </div>
//       )}
      
//       <div className="bg-gray-800 p-3 flex justify-between items-center">
//         <h3 className="font-bold">Team {index + 1}</h3>
//         <div className="flex items-center gap-2">
//           {changes > 0 && (
//             <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full">
//               {changes} change{changes > 1 ? 's' : ''}
//             </span>
//           )}
//           <div className="flex gap-2 items-center">
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setShowShareOptions(!showShareOptions);
//               }}
//               className="text-gray-300 hover:text-white p-1"
//             >
//               <FiShare2 size={18} />
//             </button>
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setIsFullScreen(!isFullScreen);
//               }}
//               className="text-gray-300 hover:text-white p-1"
//             >
//               {isFullScreen ? <FiX size={18} /> : <FiMaximize size={18} />}
//             </button>
//             <input
//               type="checkbox"
//               checked={isSelected}
//               onChange={(e) => {
//                 e.stopPropagation();
//                 onToggleSelect();
//               }}
//               onClick={(e) => e.stopPropagation()}
//               className="h-5 w-5 rounded text-blue-600 cursor-pointer"
//             />
//           </div>
//         </div>
//       </div>
      
//       {showShareOptions && (
//     <div className="absolute right-12 top-12 bg-gray-800 border border-gray-700 rounded-md shadow-lg z-10 p-2">
//       <button
//         onClick={shareToWhatsApp}
//         className="flex items-center gap-2 w-full p-2 hover:bg-gray-700 rounded text-left"
//       >
//         <FaWhatsapp className="text-green-400" /> WhatsApp
//       </button>
//       <button
//         onClick={shareToTelegram}
//         className="flex items-center gap-2 w-full p-2 hover:bg-gray-700 rounded text-left"
//       >
//         <FaTelegram className="text-blue-400" /> Telegram
//       </button>
//       <button
//         onClick={shareToTwitter}
//         className="flex items-center gap-2 w-full p-2 hover:bg-gray-700 rounded text-left"
//       >
//         <FiTwitter className="text-blue-400" /> Twitter
//       </button>
//       <button
//         onClick={copyToClipboard}
//         className="flex items-center gap-2 w-full p-2 hover:bg-gray-700 rounded text-left"
//       >
//         <FiShare2 /> Copy Text
//       </button>
//     </div>
//   )}
      
      
//       <div className="bg-gray-700 p-4">
//         {playerChanges.length > 0 && (
//           <div className="mb-3 bg-yellow-900 p-2 rounded text-sm">
//             <div className="font-medium mb-1">Team Changes:</div>
//             {playerChanges.map((change, i) => (
//               <div key={i} className="flex justify-between">
//                 <span className="text-red-300 line-through">{change.out}</span>
//                 <span>→</span>
//                 <span className="text-green-300">{change.in}</span>
//                 <span className="text-gray-400 text-xs">{change.role}</span>
//               </div>
//             ))}
//           </div>
//         )}
        
//         <div className="flex gap-4 mb-3">
//           <div className="flex-1">
//             <div className="flex items-center gap-2 w-full">
//               <img
//                 src={team.captain.imgURL || "/fallback.png"}
//                 alt={team.captain.name}
//                 className="w-10 h-10 rounded-full"
//               />
//               <div className="flex-1">
//                 <div className="flex justify-between items-center">
//                   <p className={`font-medium ${
//                     team.captain.wasSubstituted ? 'text-yellow-400' :
//                     team.captain.substitute ? 'text-red-400' : 'text-white'
//                     }`}>
//                     <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs ml-2">C</span>
//                     {team.captain.name}
//                   </p>
//                 </div>
//                 <p className="text-xs text-gray-400">{team.captain.teamShortName || team.captain.teamName}</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="flex-1">
//             <div className="flex items-center gap-2 w-full">
//               <img
//                 src={team.viceCaptain.imgURL || "/fallback.png"}
//                 alt={team.viceCaptain.name}
//                 className="w-10 h-10 rounded-full"
//               />
//               <div className="flex-1">
//                 <div className="flex justify-between items-center">
//                   <p className={`font-medium ${
//                     team.viceCaptain.wasSubstituted ? 'text-yellow-400' :
//                     team.viceCaptain.substitute ? 'text-red-400' : 'text-white'
//                   }`}>
//                     <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs ml-2">VC</span>
//                     {team.viceCaptain.name}
//                   </p>
//                 </div>
//                 <p className="text-xs text-gray-400">{team.viceCaptain.teamShortName || team.viceCaptain.teamName}</p>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <div className="mb-3 bg-gray-800 p-2 rounded">
//           <div className="flex justify-between text-sm mb-1">
//             <span>{team.team1ShortName}: {team1Count}</span>
//             <span>{team.team2ShortName}: {team2Count}</span>
//           </div>
//           <div className="flex flex-wrap gap-1 text-xs">
//             <span className="bg-gray-600 px-2 py-1 rounded">WK: {playersByRole['WK-Batsman'].length}</span>
//             <span className="bg-gray-600 px-2 py-1 rounded">Bats: {playersByRole['Batsman'].length}</span>
//             <span className="bg-gray-600 px-2 py-1 rounded">AR: {
//               playersByRole['Batting Allrounder'].length + playersByRole['Bowling Allrounder'].length
//             }</span>
//             <span className="bg-gray-600 px-2 py-1 rounded">Bowlers: {playersByRole['Bowler'].length}</span>
//           </div>
//         </div>
        
//         <div className={`space-y-2 ${isFullScreen ? '' : 'max-h-60'} overflow-y-auto`}>
//           {playersByRole['WK-Batsman'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">Wicket Keepers</div>
//           )}
//           {playersByRole['WK-Batsman'].map((player, i) => (
//             <PlayerRow
//               key={`wk-${i}`}
//               player={player}
//               isSubstitute={player.substitute}
//               wasSubstituted={player.wasSubstituted}
//             />
//           ))}
          
//           {playersByRole['Batsman'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">Batsmen</div>
//           )}
//           {playersByRole['Batsman'].map((player, i) => (
//             <PlayerRow
//               key={`bat-${i}`}
//               player={player}
//               isSubstitute={player.substitute}
//               wasSubstituted={player.wasSubstituted}
//             />
//           ))}
          
//           {playersByRole['Batting Allrounder'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">Batting Allrounders</div>
//           )}
//           {playersByRole['Batting Allrounder'].map((player, i) => (
//             <PlayerRow
//               key={`bar-${i}`}
//               player={player}
//               isSubstitute={player.substitute}
//               wasSubstituted={player.wasSubstituted}
//             />
//           ))}
          
//           {playersByRole['Bowling Allrounder'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">Bowling Allrounders</div>
//           )}
//           {playersByRole['Bowling Allrounder'].map((player, i) => (
//             <PlayerRow
//               key={`bowlar-${i}`}
//               player={player}
//               isSubstitute={player.substitute}
//               wasSubstituted={player.wasSubstituted}
//             />
//           ))}
          
//           {playersByRole['Bowler'].length > 0 && (
//             <div className="text-xs text-gray-400 mt-2">Bowlers</div>
//           )}
//           {playersByRole['Bowler'].map((player, i) => (
//             <PlayerRow
//               key={`bowl-${i}`}
//               player={player}
//               isSubstitute={player.substitute}
//               wasSubstituted={player.wasSubstituted}
//             />
//           ))}
          
//           {team.substitutes && team.substitutes.length > 0 && (
//             <>
//               <div className="text-xs text-gray-400 mt-4">Substitutes (→)</div>
//               {team.substitutes.map((sub, i) => (
//                 <PlayerRow
//                   key={`sub-${i}`}
//                   player={sub}
//                   isSubstitute={false}
//                   isSubstituteList
//                 />
//               ))}
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );

//   return (
//     <>
//       {!isFullScreen && (
//         <div
//           className={`border-2 ${isSelected ? 'border-blue-500' : 'border-gray-700'} rounded-lg overflow-hidden relative cursor-pointer`}
//           onClick={() => onToggleSelect()}
//         >
//           <TeamContent />
//         </div>
//       )}
      
//       {isFullScreen && (
//         <div className="fixed inset-0 bg-gray-900 z-50 p-4 overflow-auto">
//           <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg overflow-hidden relative">
//             <TeamContent />
//             <button
//               onClick={() => setIsFullScreen(false)}
//               className="absolute top-4 right-4 bg-gray-700 p-2 rounded-full hover:bg-gray-600"
//             >
//               <FiX size={20} />
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }




























import { GeneratedTeam } from "../../types/match";
import { useEffect, useState } from "react";
import { 
  FiShare2, 
  FiMaximize, 
  FiX, 
  FiTwitter, 
  FiWhatsApp, 
  FiSend 
} from "react-icons/fi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';

interface TeamCardProps {
  team: GeneratedTeam;
  index: number;
  isSelected: boolean;
  onToggleSelect: () => void;
  onUpdateTeam: (updatedTeam: GeneratedTeam) => void;
}

interface PlayerRowProps {
  player: any;
  isSubstitute: boolean;
  wasSubstituted?: boolean;
  isSubstituteList?: boolean;
}

const PlayerRow = ({ 
  player, 
  isSubstitute,
  wasSubstituted,
  isSubstituteList = false 
}: PlayerRowProps) => (
  <div className={`flex items-center justify-between text-sm p-2 rounded ${
    wasSubstituted ? 'bg-yellow-900' :
    isSubstitute ? 'bg-red-900' : 
    isSubstituteList ? 'bg-gray-600' : 'bg-gray-800'
  }`}>
    <div className="flex items-center gap-2 w-full">
      {isSubstituteList && (
        <span className="text-yellow-400">→</span>
      )}
      {wasSubstituted && (
        <span className="text-green-400">↑</span>
      )}
      <img 
        src={player.imgURL || "/fallback.png"} 
        alt={player.name} 
        className="w-8 h-8 rounded-full"
      />
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <span className={isSubstitute ? 'line-through' : ''}>
            {player.name}
            {player.keeper && ' (WK)'}
            {wasSubstituted && ` (replaced ${player.replacedPlayer})`}
          </span>
        </div>
        <p className="text-xs text-gray-400">{player.teamShortName || player.teamName}</p>
      </div>
    </div>
  </div>
);

const normalizeRole = (role: string): string => {
  if (!role) return 'Bowler'; 
  
  const lowerRole = role.toLowerCase().trim();
  if (lowerRole.includes('keep') || lowerRole.includes('wk')) return 'WK-Batsman';
  if (lowerRole.includes('bat') && lowerRole.includes('all')) return 'Batting Allrounder';
  if (lowerRole.includes('bowl') && lowerRole.includes('all')) return 'Bowling Allrounder';
  if (lowerRole.includes('bat')) return 'Batsman';
  if (lowerRole.includes('bowl')) return 'Bowler';
  if (lowerRole.includes('all')) return 'Bowling Allrounder';
  
  return 'Bowler';
};

export default function TeamCard({ 
  team, 
  index, 
  isSelected, 
  onToggleSelect,
  onUpdateTeam
}: TeamCardProps) {
  const [originalTeam] = useState<GeneratedTeam>({...team});
  const [changes, setChanges] = useState<number>(team.changes || 0);
  const [playerChanges, setPlayerChanges] = useState<Array<{
    out: string;
    in: string;
    role: string;
  }>>([]);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);

  useEffect(() => {
    const checkLineupChanges = () => {
      const newPlayerChanges: Array<{
        out: string;
        in: string;
        role: string;
      }> = [];
      
      let changeCount = 0;
      
      const updatedPlayers = team.players.map(player => {
        if (player.substitute) {
          changeCount++;
          
          const replacement = team.substitutes
            .filter(sub => normalizeRole(sub.role) === normalizeRole(player.role))
            .sort((a, b) => (b.selectedBy || 0) - (a.selectedBy || 0))[0];
          
          if (replacement) {
            newPlayerChanges.push({
              out: player.name,
              in: replacement.name,
              role: player.role
            });
            
            return {
              ...replacement,
              wasSubstituted: true,
              replacedPlayer: player.name
            };
          }
        }
        return player;
      });
      
      if (changeCount > 0) {
        setChanges(changeCount);
        setPlayerChanges(newPlayerChanges);
        
        const updatedTeam = {
          ...team,
          players: updatedPlayers,
          changes: changeCount
        };
        
        onUpdateTeam(updatedTeam);
      }
    };
    
    checkLineupChanges();
  }, [team, onUpdateTeam]);

  const playersByRole = {
    'WK-Batsman': team.players.filter(p => p.roleOrder === 1),
    'Batsman': team.players.filter(p => p.roleOrder === 2),
    'Batting Allrounder': team.players.filter(p => p.roleOrder === 3),
    'Bowling Allrounder': team.players.filter(p => p.roleOrder === 4),
    'Bowler': team.players.filter(p => p.roleOrder === 5)
  };

  const team1Count = team.players.filter(p => p.teamName === team.captain.teamName).length;
  const team2Count = 11 - team1Count;

  const generateShareText = () => {
    let text = `🏏 Fantasy Team ${index + 1} - ${team.team1ShortName} vs ${team.team2ShortName}\n\n`;
    text += `👑 Captain: ${team.captain.name} (${team.captain.teamShortName})\n`;
    text += `🌟 Vice-Captain: ${team.viceCaptain.name} (${team.viceCaptain.teamShortName})\n\n`;
    
    text += "Playing XI:\n";
    Object.entries(playersByRole).forEach(([role, players]) => {
      if (players.length > 0) {
        text += `\n${role}:\n`;
        players.forEach(player => {
          text += `• ${player.name} (${player.teamShortName}) ${player.wasSubstituted ? '(replaced)' : ''}\n`;
        });
      }
    });
    
    if (team.substitutes && team.substitutes.length > 0) {
      text += "\nSubstitutes:\n";
      team.substitutes.forEach(sub => {
        text += `• ${sub.name} (${sub.teamShortName})\n`;
      });
    }
    
    text += `\nTeam Balance: ${team1Count} ${team.team1ShortName} | ${team2Count} ${team.team2ShortName}\n`;
    text += `Risk Level: ${team.riskLevel || 50}/100`;
    
    return text;
  };

  const shareToWhatsApp = () => {
    const text = generateShareText();
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setShowShareOptions(false);
  };

  const shareToTelegram = () => {
    const text = generateShareText();
    const url = `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setShowShareOptions(false);
  };

  const shareToTwitter = () => {
    const text = generateShareText();
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text.substring(0, 250) + (text.length > 250 ? '...' : ''))}`;
    window.open(url, '_blank');
    setShowShareOptions(false);
  };

  const copyToClipboard = () => {
    const text = generateShareText();
    navigator.clipboard.writeText(text).then(() => {
      alert('Team copied to clipboard!');
      setShowShareOptions(false);
    });
  };

  const TeamContent = () => (
    <>
      {changes > 0 && (
        <div className="absolute -top-2 -right-2 bg-yellow-500 text-black font-bold rounded-full h-6 w-6 flex items-center justify-center">
          {changes}
        </div>
      )}
      
      <div className="bg-gray-800 p-3 flex justify-between items-center">
        <h3 className="font-bold">Team {index + 1}</h3>
        <div className="flex items-center gap-2">
          {changes > 0 && (
            <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full">
              {changes} change{changes > 1 ? 's' : ''}
            </span>
          )}
          <div className="flex gap-2 items-center">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowShareOptions(!showShareOptions);
              }}
              className="text-gray-300 hover:text-white p-1"
            >
              <FiShare2 size={18} />
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsFullScreen(!isFullScreen);
              }}
              className="text-gray-300 hover:text-white p-1"
            >
              {isFullScreen ? <FiX size={18} /> : <FiMaximize size={18} />}
            </button>
            <input
              type="checkbox"
              checked={isSelected}
              onChange={(e) => {
                e.stopPropagation();
                onToggleSelect();
              }}
              onClick={(e) => e.stopPropagation()}
              className="h-5 w-5 rounded text-blue-600 cursor-pointer"
            />
          </div>
        </div>
      </div>
      
      {showShareOptions && (
        <div className="absolute right-12 top-12 bg-gray-800 border border-gray-700 rounded-md shadow-lg z-10 p-2">
          <button 
            onClick={shareToWhatsApp}
            className="flex items-center gap-2 w-full p-2 hover:bg-gray-700 rounded text-left"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-green-400" /> WhatsApp
          </button>
          <button 
            onClick={shareToTelegram}
            className="flex items-center gap-2 w-full p-2 hover:bg-gray-700 rounded text-left"
          >
            <FontAwesomeIcon icon={faTelegram} className="text-blue-400" /> Telegram
          </button>
          <button 
            onClick={shareToTwitter}
            className="flex items-center gap-2 w-full p-2 hover:bg-gray-700 rounded text-left"
          >
            <FontAwesomeIcon icon={faTwitter} className="text-blue-400" /> Twitter
          </button>
          <button 
            onClick={copyToClipboard}
            className="flex items-center gap-2 w-full p-2 hover:bg-gray-700 rounded text-left"
          >
            <FiShare2 /> Copy Text
          </button>
        </div>
      )}
      
      <div className="bg-gray-700 p-4">
        {playerChanges.length > 0 && (
          <div className="mb-3 bg-yellow-900 p-2 rounded text-sm">
            <div className="font-medium mb-1">Team Changes:</div>
            {playerChanges.map((change, i) => (
              <div key={i} className="flex justify-between">
                <span className="text-red-300 line-through">{change.out}</span>
                <span>→</span>
                <span className="text-green-300">{change.in}</span>
                <span className="text-gray-400 text-xs">{change.role}</span>
              </div>
            ))}
          </div>
        )}
        
        <div className="flex gap-4 mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 w-full">
              <img 
                src={team.captain.imgURL || "/fallback.png"} 
                alt={team.captain.name} 
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <p className={`font-medium ${
                    team.captain.wasSubstituted ? 'text-yellow-400' : 
                    team.captain.substitute ? 'text-red-400' : 'text-white'
                    }`}>
                    <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs ml-2">C</span>
                    {team.captain.name}
                  </p>
                </div>
                <p className="text-xs text-gray-400">{team.captain.teamShortName || team.captain.teamName}</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 w-full">
              <img 
                src={team.viceCaptain.imgURL || "/fallback.png"} 
                alt={team.viceCaptain.name} 
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <p className={`font-medium ${
                    team.viceCaptain.wasSubstituted ? 'text-yellow-400' : 
                    team.viceCaptain.substitute ? 'text-red-400' : 'text-white'
                  }`}>
                    <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs ml-2">VC</span>
                    {team.viceCaptain.name}
                  </p>
                </div>
                <p className="text-xs text-gray-400">{team.viceCaptain.teamShortName || team.viceCaptain.teamName}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-3 bg-gray-800 p-2 rounded">
          <div className="flex justify-between text-sm mb-1">
            <span>{team.team1ShortName}: {team1Count}</span>
            <span>{team.team2ShortName}: {team2Count}</span>
          </div>
          <div className="flex flex-wrap gap-1 text-xs">
            <span className="bg-gray-600 px-2 py-1 rounded">WK: {playersByRole['WK-Batsman'].length}</span>
            <span className="bg-gray-600 px-2 py-1 rounded">Bats: {playersByRole['Batsman'].length}</span>
            <span className="bg-gray-600 px-2 py-1 rounded">AR: {
              playersByRole['Batting Allrounder'].length + playersByRole['Bowling Allrounder'].length
            }</span>
            <span className="bg-gray-600 px-2 py-1 rounded">Bowlers: {playersByRole['Bowler'].length}</span>
          </div>
        </div>
        
        <div className={`space-y-2 ${isFullScreen ? '' : 'max-h-60'} overflow-y-auto`}>
          {playersByRole['WK-Batsman'].length > 0 && (
            <div className="text-xs text-gray-400 mt-2">Wicket Keepers</div>
          )}
          {playersByRole['WK-Batsman'].map((player, i) => (
            <PlayerRow 
              key={`wk-${i}`} 
              player={player} 
              isSubstitute={player.substitute}
              wasSubstituted={player.wasSubstituted}
            />
          ))}
          
          {playersByRole['Batsman'].length > 0 && (
            <div className="text-xs text-gray-400 mt-2">Batsmen</div>
          )}
          {playersByRole['Batsman'].map((player, i) => (
            <PlayerRow 
              key={`bat-${i}`} 
              player={player} 
              isSubstitute={player.substitute}
              wasSubstituted={player.wasSubstituted}
            />
          ))}
          
          {playersByRole['Batting Allrounder'].length > 0 && (
            <div className="text-xs text-gray-400 mt-2">Batting Allrounders</div>
          )}
          {playersByRole['Batting Allrounder'].map((player, i) => (
            <PlayerRow 
              key={`bar-${i}`} 
              player={player} 
              isSubstitute={player.substitute}
              wasSubstituted={player.wasSubstituted}
            />
          ))}
          
          {playersByRole['Bowling Allrounder'].length > 0 && (
            <div className="text-xs text-gray-400 mt-2">Bowling Allrounders</div>
          )}
          {playersByRole['Bowling Allrounder'].map((player, i) => (
            <PlayerRow 
              key={`bowlar-${i}`} 
              player={player} 
              isSubstitute={player.substitute}
              wasSubstituted={player.wasSubstituted}
            />
          ))}
          
          {playersByRole['Bowler'].length > 0 && (
            <div className="text-xs text-gray-400 mt-2">Bowlers</div>
          )}
          {playersByRole['Bowler'].map((player, i) => (
            <PlayerRow 
              key={`bowl-${i}`} 
              player={player} 
              isSubstitute={player.substitute}
              wasSubstituted={player.wasSubstituted}
            />
          ))}
          
          {team.substitutes && team.substitutes.length > 0 && (
            <>
              <div className="text-xs text-gray-400 mt-4">Substitutes (→)</div>
              {team.substitutes.map((sub, i) => (
                <PlayerRow 
                  key={`sub-${i}`} 
                  player={sub} 
                  isSubstitute={false} 
                  isSubstituteList 
                />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );

  return (
    <>
      {!isFullScreen && (
        <div 
          className={`border-2 ${isSelected ? 'border-blue-500' : 'border-gray-700'} rounded-lg overflow-hidden relative cursor-pointer`}
          onClick={() => onToggleSelect()}
        >
          <TeamContent />
        </div>
      )}
      
      {isFullScreen && (
        <div className="fixed inset-0 bg-gray-900 z-50 p-4 overflow-auto">
          <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg overflow-hidden relative">
            <TeamContent />
            <button 
              onClick={() => setIsFullScreen(false)}
              className="absolute top-4 right-4 bg-gray-700 p-2 rounded-full hover:bg-gray-600"
            >
              <FiX size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}