// // // components/TeamGenerator.tsx
// // 'use client';

// // import { useState, useCallback } from "react";
// // import { Team, PlayerDetail, GeneratedTeam } from "@/types/match";
// // import { calculatePlayerRiskScore, isTeamValid } from "@/lib/teamUtils";

// // interface TeamGeneratorProps {
// //   team1: Team;
// //   team2: Team;
// //   teamCount: number;
// //   riskLevel: number;
// // }

// // export default function TeamGenerator({ team1, team2, teamCount, riskLevel }: TeamGeneratorProps) {
// //   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
// //   const [isGenerating, setIsGenerating] = useState(false);

// //   const generateTeams = useCallback(() => {
// //     setIsGenerating(true);
    
// //     setTimeout(() => {
// //       try {
// //         const allPlayers = [
// //           ...team1.playerDetails.map(p => ({ ...p, teamName: team1.name })),
// //           ...team2.playerDetails.map(p => ({ ...p, teamName: team2.name }))
// //         ].filter(player => !player.substitute);

// //         const playersWithRisk = allPlayers.map(player => ({
// //           ...player,
// //           riskScore: calculatePlayerRiskScore(
// //             Math.floor(Math.random() * 100) + 1,
// //             riskLevel
// //           )
// //         }));

// //         const teams: GeneratedTeam[] = [];
// //         const usedCombinations = new Set<string>();
// //         const MAX_ATTEMPTS = 1000;
// //         let attempts = 0;

// //         while (teams.length < teamCount && attempts < MAX_ATTEMPTS) {
// //           attempts++;
          
// //           const sortedPlayers = [...playersWithRisk].sort((a, b) => a.riskScore - b.riskScore);
// //           const captainCandidates = sortedPlayers.slice(0, 5);
// //           const vcCandidates = sortedPlayers.slice(0, 10).filter(p => !captainCandidates.slice(0, 1).includes(p));
          
// //           if (captainCandidates.length === 0 || vcCandidates.length === 0) continue;
          
// //           const captain = captainCandidates[Math.floor(Math.random() * captainCandidates.length)];
// //           const viceCaptain = vcCandidates[Math.floor(Math.random() * vcCandidates.length)];
          
// //           const remainingPlayers = playersWithRisk.filter(p =>
// //             p.id !== captain.id && p.id !== viceCaptain.id
// //           );
          
// //           const selectedPlayers = [captain, viceCaptain];
// //           const teamRoles = {
// //             'WK': (captain.role === 'WK' ? 1 : 0) + (viceCaptain.role === 'WK' ? 1 : 0),
// //             'BAT': (captain.role === 'BAT' ? 1 : 0) + (viceCaptain.role === 'BAT' ? 1 : 0),
// //             'AR': (captain.role === 'AR' ? 1 : 0) + (viceCaptain.role === 'AR' ? 1 : 0),
// //             'BOWL': (captain.role === 'BOWL' ? 1 : 0) + (viceCaptain.role === 'BOWL' ? 1 : 0),
// //           };
// //           let overseasCount = [captain, viceCaptain].filter(p => p.isOverseas).length;
          
// //           const getPlayersByRole = (role: string) =>
// //             remainingPlayers.filter(p =>
// //               p.role === role &&
// //               !selectedPlayers.includes(p) &&
// //               (p.isOverseas ? overseasCount < 4 : true)
// //             );
          
// //           const mandatoryRoles = [
// //             { role: 'WK', min: 1, current: teamRoles['WK'] },
// //             { role: 'BAT', min: 2, current: teamRoles['BAT'] },
// //             { role: 'AR', min: 1, current: teamRoles['AR'] },
// //             { role: 'BOWL', min: 1, current: teamRoles['BOWL'] }
// //           ];
          
// //           for (const { role, min, current } of mandatoryRoles) {
// //             while (current < min && selectedPlayers.length < 11) {
// //               const candidates = getPlayersByRole(role);
// //               if (candidates.length === 0) break;
              
// //               const candidate = candidates.sort((a, b) => a.riskScore - b.riskScore)[0];
// //               selectedPlayers.push(candidate);
// //               teamRoles[role]++;
// //               if (candidate.isOverseas) overseasCount++;
// //             }
// //           }
          
// //           while (selectedPlayers.length < 11) {
// //             const availablePlayers = remainingPlayers.filter(p =>
// //               !selectedPlayers.includes(p) &&
// //               (p.isOverseas ? overseasCount < 4 : true)
// //             );
            
// //             if (availablePlayers.length === 0) break;
            
// //             const sortedAvailable = [...availablePlayers].sort((a, b) => a.riskScore - b.riskScore);
// //             const candidates = sortedAvailable.slice(
// //               0,
// //               Math.ceil(sortedAvailable.length * 0.2)
// //             );
            
// //             const randomPlayer = candidates[Math.floor(Math.random() * candidates.length)];
// //             selectedPlayers.push(randomPlayer);
// //             teamRoles[randomPlayer.role]++;
// //             if (randomPlayer.isOverseas) overseasCount++;
// //           }
          
// //           if (selectedPlayers.length === 11 && isTeamValid(selectedPlayers)) {
// //             const combinationKey = selectedPlayers
// //               .map(p => p.id)
// //               .sort()
// //               .join('-');
            
// //             if (!usedCombinations.has(combinationKey)) {
// //               usedCombinations.add(combinationKey);
// //               teams.push({
// //                 players: selectedPlayers,
// //                 captain,
// //                 viceCaptain,
// //                 teamName: `Team ${teams.length + 1}`
// //               });
// //             }
// //           }
// //         }
        
// //         setGeneratedTeams(teams);
// //       } catch (error) {
// //         console.error("Error generating teams:", error);
// //       } finally {
// //         setIsGenerating(false);
// //       }
// //     }, 100);
// //   }, [team1, team2, teamCount, riskLevel]);

// //   return {
// //     generatedTeams,
// //     isGenerating,
// //     generateTeams
// //   };
// // }
















// // // components/TeamGenerator.tsx
// // 'use client';

// // import { useState, useCallback } from "react";
// // // import { Team } from "../../types/match";
// // import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";
// // import { calculatePlayerRiskScore } from "@/lib/teamUtils";
// // // import { calculatePlayerRiskScore, isTeamValid } from "../../lib/teamUtils";

// // interface TeamGeneratorProps {
// //   team1: Team;
// //   team2: Team;
// //   teamCount: number;
// //   riskLevel: number;
// //   userBalance: number;
// //   onPaymentRequired: () => void;
// // }

// // export default function TeamGenerator({
// //   team1,
// //   team2,
// //   teamCount,
// //   riskLevel,
// //   userBalance,
// //   onPaymentRequired
// // }: TeamGeneratorProps) {
// //   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
// //   const [isGenerating, setIsGenerating] = useState(false);

// //   const generateTeams = useCallback(() => {
// //     const requiredCredits = teamCount * 5;
    
// //     if (userBalance < requiredCredits) {
// //       onPaymentRequired();
// //       return;
// //     }

// //     setIsGenerating(true);
    
// //     setTimeout(() => {
// //       try {
// //         const allPlayers = [
// //           ...team1.playerDetails.map(p => ({ ...p, teamName: team1.name })),
// //           ...team2.playerDetails.map(p => ({ ...p, teamName: team2.name }))
// //         ].filter(player => !player.substitute);

// //         const playersWithRisk = allPlayers.map(player => ({
// //           ...player,
// //           riskScore: calculatePlayerRiskScore(
// //             Math.floor(Math.random() * 100) + 1,
// //             riskLevel
// //           )
// //         }));

// //         const teams: GeneratedTeam[] = [];
// //         const usedCombinations = new Set<string>();
// //         const MAX_ATTEMPTS = 1000;
// //         let attempts = 0;

// //         while (teams.length < teamCount && attempts < MAX_ATTEMPTS) {
// //           attempts++;
          
// //           const sortedPlayers = [...playersWithRisk].sort((a, b) => a.riskScore - b.riskScore);
// //           const captainCandidates = sortedPlayers.slice(0, 5);
// //           const vcCandidates = sortedPlayers.slice(0, 10).filter(p => !captainCandidates.slice(0, 1).includes(p));
          
// //           if (captainCandidates.length === 0 || vcCandidates.length === 0) continue;
          
// //           const captain = captainCandidates[Math.floor(Math.random() * captainCandidates.length)];
// //           const viceCaptain = vcCandidates[Math.floor(Math.random() * vcCandidates.length)];
          
// //           const remainingPlayers = playersWithRisk.filter(p =>
// //             p.id !== captain.id && p.id !== viceCaptain.id
// //           );
          
// //           const selectedPlayers = [captain, viceCaptain];
// //           const teamRoles = {
// //             'WK': (captain.role === 'WK' ? 1 : 0) + (viceCaptain.role === 'WK' ? 1 : 0),
// //             'BAT': (captain.role === 'BAT' ? 1 : 0) + (viceCaptain.role === 'BAT' ? 1 : 0),
// //             'AR': (captain.role === 'AR' ? 1 : 0) + (viceCaptain.role === 'AR' ? 1 : 0),
// //             'BOWL': (captain.role === 'BOWL' ? 1 : 0) + (viceCaptain.role === 'BOWL' ? 1 : 0),
// //           };
// //           let overseasCount = [captain, viceCaptain].filter(p => p.isOverseas).length;
          
// //           const getPlayersByRole = (role: string) =>
// //             remainingPlayers.filter(p =>
// //               p.role === role &&
// //               !selectedPlayers.includes(p) &&
// //               (p.isOverseas ? overseasCount < 4 : true)
// //             );
          
// //           const mandatoryRoles = [
// //             { role: 'WK', min: 1, current: teamRoles['WK'] },
// //             { role: 'BAT', min: 2, current: teamRoles['BAT'] },
// //             { role: 'AR', min: 1, current: teamRoles['AR'] },
// //             { role: 'BOWL', min: 1, current: teamRoles['BOWL'] }
// //           ];
          
// //           for (const { role, min, current } of mandatoryRoles) {
// //             while (current < min && selectedPlayers.length < 11) {
// //               const candidates = getPlayersByRole(role);
// //               if (candidates.length === 0) break;
              
// //               const candidate = candidates.sort((a, b) => a.riskScore - b.riskScore)[0];
// //               selectedPlayers.push(candidate);
// //               teamRoles[role]++;
// //               if (candidate.isOverseas) overseasCount++;
// //             }
// //           }
          
// //           while (selectedPlayers.length < 11) {
// //             const availablePlayers = remainingPlayers.filter(p =>
// //               !selectedPlayers.includes(p) &&
// //               (p.isOverseas ? overseasCount < 4 : true)
// //             );
            
// //             if (availablePlayers.length === 0) break;
            
// //             const sortedAvailable = [...availablePlayers].sort((a, b) => a.riskScore - b.riskScore);
// //             const candidates = sortedAvailable.slice(
// //               0,
// //               Math.ceil(sortedAvailable.length * 0.2)
// //             );
            
// //             const randomPlayer = candidates[Math.floor(Math.random() * candidates.length)];
// //             selectedPlayers.push(randomPlayer);
// //             teamRoles[randomPlayer.role]++;
// //             if (randomPlayer.isOverseas) overseasCount++;
// //           }
          
// //           if (selectedPlayers.length === 11 && isTeamValid(selectedPlayers)) {
// //             const combinationKey = selectedPlayers
// //               .map(p => p.id)
// //               .sort()
// //               .join('-');
            
// //             if (!usedCombinations.has(combinationKey)) {
// //               usedCombinations.add(combinationKey);
// //               teams.push({
// //                 players: selectedPlayers,
// //                 captain,
// //                 viceCaptain,
// //                 teamName: `Team ${teams.length + 1}`
// //               });
// //             }
// //           }
// //         }
        
// //         setGeneratedTeams(teams);
// //       } catch (error) {
// //         console.error("Error generating teams:", error);
// //       } finally {
// //         setIsGenerating(false);
// //       }
// //     }, 100);
// //   }, [team1, team2, teamCount, riskLevel, userBalance, onPaymentRequired]);

// //   return {
// //     generatedTeams,
// //     isGenerating,
// //     generateTeams
// //   };
// // }



















// // "use client";

// // import { useState, useCallback } from "react";
// // import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";
// // import { calculatePlayerRiskScore, isTeamValid } from "@/lib/teamUtils";
// // import { PaymentDialog } from "./PaymentDialog";
// // // import { GeneratedTeam } from "../../types/match";

// // interface TeamGeneratorProps {
// //   team1: Team;
// //   team2: Team;
// //   teamCount: number;
// //   riskLevel: number;
// //   userBalance: number;
// //   onBalanceUpdate: (newBalance: number) => void;
// // }

// // export default function TeamGenerator({
// //   team1,
// //   team2,
// //   teamCount,
// //   riskLevel,
// //   userBalance,
// //   onBalanceUpdate
// // }: TeamGeneratorProps) {
// //   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
// //   const [isGenerating, setIsGenerating] = useState(false);
// //   const [showPaymentDialog, setShowPaymentDialog] = useState(false);

// //   const generateTeams = useCallback(() => {
// //     const requiredCredits = teamCount * 5;
    
// //     if (userBalance < requiredCredits) {
// //       setShowPaymentDialog(true);
// //       return;
// //     }

// //     setIsGenerating(true);
    
// //     setTimeout(() => {
// //       try {
// //         const allPlayers = [
// //           ...team1.playerDetails.map(p => ({ ...p, teamName: team1.name })),
// //           ...team2.playerDetails.map(p => ({ ...p, teamName: team2.name }))
// //         ].filter(player => !player.substitute);

// //         const playersWithRisk = allPlayers.map(player => ({
// //           ...player,
// //           riskScore: calculatePlayerRiskScore(
// //             Math.floor(Math.random() * 100) + 1,
// //             riskLevel
// //           )
// //         }));

// //         const teams: GeneratedTeam[] = [];
// //         const usedCombinations = new Set<string>();
// //         const MAX_ATTEMPTS = 1000;
// //         let attempts = 0;

// //         while (teams.length < teamCount && attempts < MAX_ATTEMPTS) {
// //           attempts++;
          
// //           const sortedPlayers = [...playersWithRisk].sort((a, b) => a.riskScore - b.riskScore);
// //           const captainCandidates = sortedPlayers.slice(0, 5);
// //           const vcCandidates = sortedPlayers.slice(0, 10).filter(p => !captainCandidates.slice(0, 1).includes(p));
          
// //           if (captainCandidates.length === 0 || vcCandidates.length === 0) continue;
          
// //           const captain = captainCandidates[Math.floor(Math.random() * captainCandidates.length)];
// //           const viceCaptain = vcCandidates[Math.floor(Math.random() * vcCandidates.length)];
          
// //           const remainingPlayers = playersWithRisk.filter(p =>
// //             p.id !== captain.id && p.id !== viceCaptain.id
// //           );
          
// //           const selectedPlayers = [captain, viceCaptain];
// //           const teamRoles = {
// //             'WK': (captain.role === 'WK' ? 1 : 0) + (viceCaptain.role === 'WK' ? 1 : 0),
// //             'BAT': (captain.role === 'BAT' ? 1 : 0) + (viceCaptain.role === 'BAT' ? 1 : 0),
// //             'AR': (captain.role === 'AR' ? 1 : 0) + (viceCaptain.role === 'AR' ? 1 : 0),
// //             'BOWL': (captain.role === 'BOWL' ? 1 : 0) + (viceCaptain.role === 'BOWL' ? 1 : 0),
// //           };
// //           let overseasCount = [captain, viceCaptain].filter(p => p.isOverseas).length;
          
// //           const getPlayersByRole = (role: string) =>
// //             remainingPlayers.filter(p =>
// //               p.role === role &&
// //               !selectedPlayers.includes(p) &&
// //               (p.isOverseas ? overseasCount < 4 : true)
// //             );
          
// //           const mandatoryRoles = [
// //             { role: 'WK', min: 1, current: teamRoles['WK'] },
// //             { role: 'BAT', min: 2, current: teamRoles['BAT'] },
// //             { role: 'AR', min: 1, current: teamRoles['AR'] },
// //             { role: 'BOWL', min: 1, current: teamRoles['BOWL'] }
// //           ];
          
// //           for (const { role, min, current } of mandatoryRoles) {
// //             while (current < min && selectedPlayers.length < 11) {
// //               const candidates = getPlayersByRole(role);
// //               if (candidates.length === 0) break;
              
// //               const candidate = candidates.sort((a, b) => a.riskScore - b.riskScore)[0];
// //               selectedPlayers.push(candidate);
// //               teamRoles[role]++;
// //               if (candidate.isOverseas) overseasCount++;
// //             }
// //           }
          
// //           while (selectedPlayers.length < 11) {
// //             const availablePlayers = remainingPlayers.filter(p =>
// //               !selectedPlayers.includes(p) &&
// //               (p.isOverseas ? overseasCount < 4 : true)
// //             );
            
// //             if (availablePlayers.length === 0) break;
            
// //             const sortedAvailable = [...availablePlayers].sort((a, b) => a.riskScore - b.riskScore);
// //             const candidates = sortedAvailable.slice(
// //               0,
// //               Math.ceil(sortedAvailable.length * 0.2)
// //             );
            
// //             const randomPlayer = candidates[Math.floor(Math.random() * candidates.length)];
// //             selectedPlayers.push(randomPlayer);
// //             teamRoles[randomPlayer.role]++;
// //             if (randomPlayer.isOverseas) overseasCount++;
// //           }
          
// //           if (selectedPlayers.length === 11 && isTeamValid(selectedPlayers)) {
// //             const combinationKey = selectedPlayers
// //               .map(p => p.id)
// //               .sort()
// //               .join('-');
            
// //             if (!usedCombinations.has(combinationKey)) {
// //               usedCombinations.add(combinationKey);
// //               teams.push({
// //                 players: selectedPlayers,
// //                 captain,
// //                 viceCaptain,
// //                 teamName: `Team ${teams.length + 1}`
// //               });
// //             }
// //           }
// //         }
        
// //         setGeneratedTeams(teams);
// //         onBalanceUpdate(userBalance - (teamCount * 5));
// //       } catch (error) {
// //         console.error("Error generating teams:", error);
// //       } finally {
// //         setIsGenerating(false);
// //       }
// //     }, 100);
// //   }, [team1, team2, teamCount, riskLevel, userBalance, onBalanceUpdate]);

// //   return {
// //     generatedTeams,
// //     isGenerating,
// //     generateTeams,
// //     paymentDialog: showPaymentDialog && (
// //       <PaymentDialog
// //         currentBalance={userBalance}
// //         onPaymentSuccess={(amount) => {
// //           onBalanceUpdate(userBalance + amount);
// //           setShowPaymentDialog(false);
// //           generateTeams();
// //         }}
// //         onClose={() => setShowPaymentDialog(false)}
// //       />
// //     )
// //   };
// // }












// // components/TeamGenerator.tsx
// // "use client";

// // import { useState, useCallback } from "react";
// // import { Team, PlayerDetail, GeneratedTeam } from "@/types/match";
// // import { calculatePlayerRiskScore, isTeamValid } from "@/lib/teamUtils";
// // import { PaymentDialog } from "./PaymentDialog";

// // interface TeamGeneratorProps {
// //   team1: Team;
// //   team2: Team;
// //   teamCount: number;
// //   riskLevel: number;
// //   userBalance: number;
// //   onBalanceUpdate: (newBalance: number) => void;
// // }

// // export default function TeamGenerator({
// //   team1,
// //   team2,
// //   teamCount,
// //   riskLevel,
// //   userBalance,
// //   onBalanceUpdate
// // }: TeamGeneratorProps) {
// //   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
// //   const [isGenerating, setIsGenerating] = useState(false);
// //   const [showPaymentDialog, setShowPaymentDialog] = useState(false);

// //   const generateTeams = useCallback(() => {
// //     const requiredCredits = teamCount * 5;
    
// //     if (userBalance < requiredCredits) {
// //       setShowPaymentDialog(true);
// //       return;
// //     }

// //     setIsGenerating(true);
    
// //     setTimeout(() => {
// //       try {
// //         const allPlayers = [
// //           ...team1.playerDetails.map(p => ({ ...p, teamName: team1.name })),
// //           ...team2.playerDetails.map(p => ({ ...p, teamName: team2.name }))
// //         ].filter(player => !player.substitute);

// //         const playersWithRisk = allPlayers.map(player => ({
// //           ...player,
// //           riskScore: calculatePlayerRiskScore(
// //             Math.floor(Math.random() * 100) + 1,
// //             riskLevel
// //           )
// //         }));

// //         const teams: GeneratedTeam[] = [];
// //         const usedCombinations = new Set<string>();
// //         const MAX_ATTEMPTS = 1000;
// //         let attempts = 0;

// //         while (teams.length < teamCount && attempts < MAX_ATTEMPTS) {
// //           attempts++;
          
// //           const sortedPlayers = [...playersWithRisk].sort((a, b) => a.riskScore - b.riskScore);
// //           const captainCandidates = sortedPlayers.slice(0, 5);
// //           const vcCandidates = sortedPlayers.slice(0, 10).filter(p => !captainCandidates.slice(0, 1).includes(p));
          
// //           if (captainCandidates.length === 0 || vcCandidates.length === 0) continue;
          
// //           const captain = captainCandidates[Math.floor(Math.random() * captainCandidates.length)];
// //           const viceCaptain = vcCandidates[Math.floor(Math.random() * vcCandidates.length)];
          
// //           const remainingPlayers = playersWithRisk.filter(p =>
// //             p.id !== captain.id && p.id !== viceCaptain.id
// //           );
          
// //           const selectedPlayers = [captain, viceCaptain];
// //           const teamRoles = {
// //             'WK': (captain.role === 'WK' ? 1 : 0) + (viceCaptain.role === 'WK' ? 1 : 0),
// //             'BAT': (captain.role === 'BAT' ? 1 : 0) + (viceCaptain.role === 'BAT' ? 1 : 0),
// //             'AR': (captain.role === 'AR' ? 1 : 0) + (viceCaptain.role === 'AR' ? 1 : 0),
// //             'BOWL': (captain.role === 'BOWL' ? 1 : 0) + (viceCaptain.role === 'BOWL' ? 1 : 0),
// //           };
// //           let overseasCount = [captain, viceCaptain].filter(p => p.isOverseas).length;
          
// //           const getPlayersByRole = (role: string) =>
// //             remainingPlayers.filter(p =>
// //               p.role === role &&
// //               !selectedPlayers.includes(p) &&
// //               (p.isOverseas ? overseasCount < 4 : true)
// //             );
          
// //           const mandatoryRoles = [
// //             { role: 'WK', min: 1, current: teamRoles['WK'] },
// //             { role: 'BAT', min: 2, current: teamRoles['BAT'] },
// //             { role: 'AR', min: 1, current: teamRoles['AR'] },
// //             { role: 'BOWL', min: 1, current: teamRoles['BOWL'] }
// //           ];
          
// //           for (const { role, min, current } of mandatoryRoles) {
// //             while (current < min && selectedPlayers.length < 11) {
// //               const candidates = getPlayersByRole(role);
// //               if (candidates.length === 0) break;
              
// //               const candidate = candidates.sort((a, b) => a.riskScore - b.riskScore)[0];
// //               selectedPlayers.push(candidate);
// //               teamRoles[role]++;
// //               if (candidate.isOverseas) overseasCount++;
// //             }
// //           }
          
// //           while (selectedPlayers.length < 11) {
// //             const availablePlayers = remainingPlayers.filter(p =>
// //               !selectedPlayers.includes(p) &&
// //               (p.isOverseas ? overseasCount < 4 : true)
// //             );
            
// //             if (availablePlayers.length === 0) break;
            
// //             const sortedAvailable = [...availablePlayers].sort((a, b) => a.riskScore - b.riskScore);
// //             const candidates = sortedAvailable.slice(
// //               0,
// //               Math.ceil(sortedAvailable.length * 0.2)
// //             );
            
// //             const randomPlayer = candidates[Math.floor(Math.random() * candidates.length)];
// //             selectedPlayers.push(randomPlayer);
// //             teamRoles[randomPlayer.role]++;
// //             if (randomPlayer.isOverseas) overseasCount++;
// //           }
          
// //           if (selectedPlayers.length === 11 && isTeamValid(selectedPlayers)) {
// //             const combinationKey = selectedPlayers
// //               .map(p => p.id)
// //               .sort()
// //               .join('-');
            
// //             if (!usedCombinations.has(combinationKey)) {
// //               usedCombinations.add(combinationKey);
// //               teams.push({
// //                 players: selectedPlayers,
// //                 captain,
// //                 viceCaptain,
// //                 teamName: `Team ${teams.length + 1}`
// //               });
// //             }
// //           }
// //         }
        
// //         setGeneratedTeams(teams);
// //         onBalanceUpdate(userBalance - requiredCredits);
// //       } catch (error) {
// //         console.error("Error generating teams:", error);
// //       } finally {
// //         setIsGenerating(false);
// //       }
// //     }, 100);
// //   }, [team1, team2, teamCount, riskLevel, userBalance, onBalanceUpdate]);

// //   return {
// //     generatedTeams,
// //     isGenerating,
// //     generateTeams,
// //     paymentDialog: showPaymentDialog && (
// //       <PaymentDialog
// //         currentBalance={userBalance}
// //         requiredAmount={(teamCount * 5) - userBalance}
// //         onPaymentSuccess={(amount) => {
// //           onBalanceUpdate(userBalance + amount);
// //           setShowPaymentDialog(false);
// //           generateTeams();
// //         }}
// //         onOpenChange={setShowPaymentDialog}
// //         open={showPaymentDialog}
// //       />
// //     )
// //   };
// // }




// // // components/TeamGenerator.tsx
// // "use client";

// // import { useState, useCallback } from "react";
// // import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";
// // import { calculatePlayerRiskScore, isTeamValid } from "@/lib/teamUtils";
// // import { PaymentDialog } from "./PaymentDialog";

// // interface TeamGeneratorProps {
// //   team1: Team;
// //   team2: Team;
// //   teamCount: number;
// //   riskLevel: number;
// //   userBalance: number;
// //   onBalanceUpdate?: (newBalance: number) => void; // Made optional
// // }

// // export default function TeamGenerator({
// //   team1,
// //   team2,
// //   teamCount,
// //   riskLevel,
// //   userBalance,
// //   onBalanceUpdate = () => {} // Default empty function
// // }: TeamGeneratorProps) {
// //   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
// //   const [isGenerating, setIsGenerating] = useState(false);
// //   const [showPaymentDialog, setShowPaymentDialog] = useState(false);

// //   const requiredCredits = teamCount * 5;
// //   const needsPayment = userBalance < requiredCredits;
// //   const paymentAmount = requiredCredits - userBalance;

// //   const generateTeams = useCallback(() => {
// //     if (needsPayment) {
// //       setShowPaymentDialog(true);
// //       return;
// //     }

// //     setIsGenerating(true);
    
// //     setTimeout(() => {
// //       try {
// //         // ... (keep existing team generation logic) ...
        
// //         setGeneratedTeams(teams);
// //         onBalanceUpdate(userBalance - requiredCredits);
// //       } catch (error) {
// //         console.error("Error generating teams:", error);
// //       } finally {
// //         setIsGenerating(false);
// //       }
// //     }, 100);
// //   }, [team1, team2, teamCount, riskLevel, userBalance, onBalanceUpdate, needsPayment, requiredCredits]);

// //   return {
// //     generatedTeams,
// //     isGenerating,
// //     generateTeams,
// //     paymentDialog: showPaymentDialog && (
// //       <PaymentDialog
// //         currentBalance={userBalance}
// //         requiredAmount={paymentAmount}
// //         onPaymentSuccess={(amount) => {
// //           onBalanceUpdate(userBalance + amount);
// //           setShowPaymentDialog(false);
// //           generateTeams();
// //         }}
// //         onOpenChange={setShowPaymentDialog}
// //         open={showPaymentDialog}
// //       />
// //     ),
// //     paymentInfo: (
// //       <div className="mt-4 space-y-2">
// //         <button
// //           onClick={generateTeams}
// //           disabled={isGenerating}
// //           className={`
// //             w-full px-6 py-3 rounded-lg font-bold transition-colors
// //             ${isGenerating ? 'bg-gray-500 cursor-not-allowed' :
// //               needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-600 hover:bg-blue-700'}
// //             text-white shadow-md
// //             sm:w-auto sm:px-8
// //           `}
// //         >
// //           {isGenerating ? (
// //             <span className="flex items-center justify-center gap-2">
// //               <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
// //                 {/* Spinner icon */}
// //               </svg>
// //               Generating...
// //             </span>
// //           ) : needsPayment ? (
// //             `Pay ₹${paymentAmount} to Generate Teams`
// //           ) : (
// //             `Generate ${teamCount} Teams (₹${requiredCredits})`
// //           )}
// //         </button>

// //         <div className="text-sm flex flex-wrap gap-2 justify-between">
// //           <span className={`font-medium ${needsPayment ? 'text-yellow-600' : 'text-green-600'}`}>
// //             Your Balance: ₹{userBalance}
// //           </span>
// //           <span>
// //             {needsPayment ? (
// //               <span className="text-red-600">
// //                 Need ₹{paymentAmount} more
// //               </span>
// //             ) : (
// //               <span className="text-gray-600">
// //                 Will deduct ₹{requiredCredits}
// //               </span>
// //             )}
// //           </span>
// //           </div>
// //       </div>
// //     )
// //   };
// // }


//  // components/TeamGenerator.tsx

// "use client";

// import { useState, useCallback } from "react";
// import { calculatePlayerRiskScore, isTeamValid } from "@/lib/teamUtils";
// import { PaymentDialog } from "./PaymentDialog";
// import { Team , PlayerDetail, GeneratedTeam } from "../../types/match";

// interface TeamGeneratorProps {
//   team1: Team;
//   team2: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate?: (newBalance: number) => void;
// }

// export default function TeamGenerator({
//   team1,
//   team2,
//   teamCount,
//   riskLevel,
//   userBalance,
//   onBalanceUpdate = () => {}
// }: TeamGeneratorProps) {
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);

//   const requiredCredits = teamCount * 5;
//   const needsPayment = userBalance < requiredCredits;
//   const paymentAmount = requiredCredits - userBalance;

//   const generateTeams = useCallback(() => {
//     if (needsPayment) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     setIsGenerating(true);
    
//     setTimeout(() => {
//       try {
//         // Initialize players array
//         const allPlayers = [
//           ...team1.playerDetails.map(p => ({ ...p, teamName: team1.name })),
//           ...team2.playerDetails.map(p => ({ ...p, teamName: team2.name }))
//         ].filter(player => !player.substitute);

//         // Calculate risk scores
//         const playersWithRisk = allPlayers.map(player => ({
//           ...player,
//           riskScore: calculatePlayerRiskScore(
//             Math.floor(Math.random() * 100) + 1,
//             riskLevel
//           )
//         }));

//         // Team generation logic
//         const teams: GeneratedTeam[] = [];
//         const usedCombinations = new Set<string>();
//         const MAX_ATTEMPTS = 1000;
//         let attempts = 0;

//         while (teams.length < teamCount && attempts < MAX_ATTEMPTS) {
//           attempts++;
          
//           // Sort players by risk score (lower is better)
//           const sortedPlayers = [...playersWithRisk].sort((a, b) => a.riskScore - b.riskScore);
          
//           // Select captain and vice-captain (lowest risk players)
//           const captain = sortedPlayers[0];
//           const viceCaptain = sortedPlayers[1];
          
//           // Filter out captain and vice-captain
//           const remainingPlayers = playersWithRisk.filter(p =>
//             p.id !== captain.id && p.id !== viceCaptain.id
//           );
          
//           // Start building team
//           const selectedPlayers = [captain, viceCaptain];
//           const teamRoles = {
//             'WK': captain.role === 'WK' ? 1 : 0,
//             'BAT': captain.role === 'BAT' ? 1 : 0,
//             'AR': captain.role === 'AR' ? 1 : 0,
//             'BOWL': captain.role === 'BOWL' ? 1 : 0,
//           };
//           let overseasCount = [captain, viceCaptain].filter(p => p.isOverseas).length;
          
//           // Helper function to get players by role
//           const getPlayersByRole = (role: string) =>
//             remainingPlayers.filter(p =>
//               p.role === role &&
//               !selectedPlayers.includes(p) &&
//               (p.isOverseas ? overseasCount < 4 : true)
//             );
          
//           // Fill mandatory roles first
//           const mandatoryRoles = [
//             { role: 'WK', min: 1, current: teamRoles['WK'] },
//             { role: 'BAT', min: 2, current: teamRoles['BAT'] },
//             { role: 'AR', min: 1, current: teamRoles['AR'] },
//             { role: 'BOWL', min: 1, current: teamRoles['BOWL'] }
//           ];
          
//           for (const { role, min, current } of mandatoryRoles) {
//             while (current < min && selectedPlayers.length < 11) {
//               const candidates = getPlayersByRole(role);
//               if (candidates.length === 0) break;
              
//               // Select player with lowest risk score
//               const candidate = candidates.sort((a, b) => a.riskScore - b.riskScore)[0];
//               selectedPlayers.push(candidate);
//               teamRoles[role]++;
//               if (candidate.isOverseas) overseasCount++;
//             }
//           }
          
//           // Fill remaining spots with best available players
//           while (selectedPlayers.length < 11) {
//             const availablePlayers = remainingPlayers.filter(p =>
//               !selectedPlayers.includes(p) &&
//               (p.isOverseas ? overseasCount < 4 : true)
//             );
            
//             if (availablePlayers.length === 0) break;
            
//             // Sort available players by risk score
//             const sortedAvailable = [...availablePlayers].sort((a, b) => a.riskScore - b.riskScore);
//             // Take top 20% of available players to choose from
//             const candidates = sortedAvailable.slice(0, Math.ceil(sortedAvailable.length * 0.2));
            
//             // Randomly select from top candidates
//             const randomPlayer = candidates[Math.floor(Math.random() * candidates.length)];
//             selectedPlayers.push(randomPlayer);
//             teamRoles[randomPlayer.role]++;
//             if (randomPlayer.isOverseas) overseasCount++;
//           }
          
//           // Check if team is valid and unique
//           if (selectedPlayers.length === 11 && isTeamValid(selectedPlayers)) {
//             const combinationKey = selectedPlayers
//               .map(p => p.id)
//               .sort()
//               .join('-');
            
//             if (!usedCombinations.has(combinationKey)) {
//               usedCombinations.add(combinationKey);
//               teams.push({
//                 players: selectedPlayers,
//                 captain,
//                 viceCaptain,
//                 teamName: `Team ${teams.length + 1}`
//               });
//             }
//           }
//         }

//         setGeneratedTeams(teams);
//         onBalanceUpdate(userBalance - requiredCredits);
//       } catch (error) {
//         console.error("Error generating teams:", error);
//       } finally {
//         setIsGenerating(false);
//       }
//     }, 100);
//   }, [team1, team2, teamCount, riskLevel, userBalance, onBalanceUpdate, needsPayment, requiredCredits]);

//   return {
//     generatedTeams,
//     isGenerating,
//     generateTeams,
//     paymentDialog: showPaymentDialog && (
//       <PaymentDialog
//         currentBalance={userBalance}
//         requiredAmount={paymentAmount}
//         onPaymentSuccess={(amount) => {
//           onBalanceUpdate(userBalance + amount);
//           setShowPaymentDialog(false);
//           generateTeams();
//         }}
//         onOpenChange={setShowPaymentDialog}
//         open={showPaymentDialog}
//       />
//     ),
//     paymentInfo: (
//       <div className="mt-4 space-y-2">
//         <button
//           onClick={generateTeams}
//           disabled={isGenerating}
//           className={`
//             w-full px-6 py-3 rounded-lg font-bold transition-colors
//             ${isGenerating ? 'bg-gray-500 cursor-not-allowed' :
//               needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-600 hover:bg-blue-700'}
//             text-white shadow-md
//             sm:w-auto sm:px-8
//           `}
//         >
//           {isGenerating ? (
//             <span className="flex items-center justify-center gap-2">
//               <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//               </svg>
//               Generating...
//             </span>
//           ) : needsPayment ? (
//             `Pay ₹${paymentAmount} to Generate Teams`
//           ) : (
//             `Generate ${teamCount} Teams (₹${requiredCredits})`
//           )}
//         </button>
        
//         <div className="flex justify-between text-sm">
//           <span>Your balance: ₹{userBalance}</span>
//           <span className={needsPayment ? 'text-red-500' : 'text-green-500'}>
//             {needsPayment ? `Need ₹${paymentAmount} more` : 'Sufficient balance'}
//           </span>
//         </div>
//       </div>
//     )
//   };
// }





























// // components/TeamGenerator.tsx
// "use client";

// import { useState, useCallback } from "react";
// import { PaymentDialog } from "./PaymentDialog";
// import { Team, PlayerDetail, GeneratedTeam } from "@/types/match";

// interface TeamGeneratorProps {
//   team1: Team;
//   team2: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate?: (newBalance: number) => void;
// }

// export default function TeamGenerator({
//   team1,
//   team2,
//   teamCount,
//   riskLevel,
//   userBalance,
//   onBalanceUpdate = () => {}
// }: TeamGeneratorProps) {
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);

//   const requiredCredits = teamCount * 5;
//   const needsPayment = userBalance < requiredCredits;
//   const paymentAmount = requiredCredits - userBalance;

//   const calculatePlayerScore = (player: PlayerDetail, riskLevel: number) => {
//     // Base score combines selection percentage and role importance
//     let score = (player.selectionPercentage || 0) * 100;
    
//     // Role weights (adjust based on format - T20, ODI, etc.)
//     const roleWeights: Record<string, number> = {
//       'BAT': 1.2,
//       'AR': 1.3,
//       'WK': 1.1,
//       'BOWL': 1.0
//     };
    
//     score *= roleWeights[player.role] || 1.0;
    
//     // Apply risk factor (higher risk level means more variance)
//     const riskFactor = 1 + (Math.random() * riskLevel / 50);
//     return score * riskFactor;
//   };

//   const generateTeams = useCallback(() => {
//     if (needsPayment) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     setIsGenerating(true);
//     setGeneratedTeams([]);
    
//     // Timeout to allow UI to update before heavy computation
//     setTimeout(() => {
//       try {
//         // Combine and filter players
//         const allPlayers = [
//           ...team1.playerDetails.map(p => ({ ...p, teamName: team1.name })),
//           ...team2.playerDetails.map(p => ({ ...p, teamName: team2.name }))
//         ].filter(p => !p.substitute);
        
//         // Score all players
//         const scoredPlayers = allPlayers.map(player => ({
//           ...player,
//           score: calculatePlayerScore(player, riskLevel)
//         }));
        
//         // Generate teams
//         const newTeams: GeneratedTeam[] = [];
//         const MAX_ATTEMPTS = teamCount * 10;
//         let attempts = 0;
        
//         while (newTeams.length < teamCount && attempts < MAX_ATTEMPTS) {
//           attempts++;
          
//           // Create a team with proper balance
//           const team = createBalancedTeam(scoredPlayers);
//           if (team) {
//             newTeams.push(team);
//           }
//         }
        
//         setGeneratedTeams(newTeams);
//         onBalanceUpdate(userBalance - requiredCredits);
//       } catch (error) {
//         console.error("Error generating teams:", error);
//       } finally {
//         setIsGenerating(false);
//       }
//     }, 100);
//   }, [team1, team2, teamCount, riskLevel, userBalance, needsPayment]);

//   const createBalancedTeam = (players: PlayerDetail[]) => {
//     // Sort players by score (descending)
//     const sortedPlayers = [...players].sort((a, b) => b.score! - a.score!);
    
//     // Select captain and vice-captain (top 10% of players)
//     const captainPool = sortedPlayers.slice(0, Math.ceil(sortedPlayers.length * 0.1));
//     const captain = captainPool[Math.floor(Math.random() * captainPool.length)];
    
//     const vcPool = captainPool.filter(p => p.id !== captain.id);
//     const viceCaptain = vcPool[Math.floor(Math.random() * vcPool.length)] || captainPool[1];
    
//     // Filter out captain and vice-captain
//     const remainingPlayers = sortedPlayers.filter(p =>
//       p.id !== captain.id && p.id !== viceCaptain.id
//     );
    
//     // Team composition rules
//     const teamRules = {
//       minBatsmen: 3,
//       minAllRounders: 1,
//       minBowlers: 3,
//       minWicketKeepers: 1,
//       maxOverseas: 4
//     };
    
//     // Initialize team
//     const teamPlayers: PlayerDetail[] = [captain, viceCaptain];
//     let overseasCount = [captain, viceCaptain].filter(p => p.isOverseas).length;
//     const teamComposition = {
//       BAT: captain.role === 'BAT' ? 1 : 0,
//       AR: captain.role === 'AR' ? 1 : 0,
//       BOWL: captain.role === 'BOWL' ? 1 : 0,
//       WK: captain.role === 'WK' ? 1 : 0
//     };
    
//     // Fill mandatory positions first
//     fillMandatoryPositions(teamPlayers, remainingPlayers, teamComposition, teamRules, overseasCount);
    
//     // Fill remaining spots with best available players
//     fillRemainingSpots(teamPlayers, remainingPlayers, teamComposition, teamRules, overseasCount);
    
//     // Validate team
//     if (teamPlayers.length !== 11) return null;
//     if (overseasCount > teamRules.maxOverseas) return null;
    
//     return {
//       players: teamPlayers,
//       captain,
//       viceCaptain,
//       teamName: `Team ${generatedTeams.length + 1}`
//     };
//   };

//   const fillMandatoryPositions = (
//     teamPlayers: PlayerDetail[],
//     remainingPlayers: PlayerDetail[],
//     teamComposition: Record<string, number>,
//     teamRules: any,
//     overseasCount: number
//   ) => {
//     const positions = [
//       { role: 'BAT', target: teamRules.minBatsmen },
//       { role: 'AR', target: teamRules.minAllRounders },
//       { role: 'BOWL', target: teamRules.minBowlers },
//       { role: 'WK', target: teamRules.minWicketKeepers }
//     ];
    
//     for (const { role, target } of positions) {
//       while (teamComposition[role] < target && teamPlayers.length < 11) {
//         const candidates = remainingPlayers
//           .filter(p => p.role === role)
//           .filter(p => p.isOverseas ? overseasCount < teamRules.maxOverseas : true)
//           .filter(p => !teamPlayers.includes(p));
        
//         if (candidates.length === 0) break;
        
//         // Select best available player for this position
//         const bestCandidate = candidates.reduce((best, current) =>
//           current.score! > best.score! ? current : best
//         );
        
//         teamPlayers.push(bestCandidate);
//         teamComposition[role]++;
//         if (bestCandidate.isOverseas) overseasCount++;
//       }
//     }
//   };

//   const fillRemainingSpots = (
//     teamPlayers: PlayerDetail[],
//     remainingPlayers: PlayerDetail[],
//     teamComposition: Record<string, number>,
//     teamRules: any,
//     overseasCount: number
//   ) => {
//     while (teamPlayers.length < 11) {
//       const availablePlayers = remainingPlayers
//         .filter(p => !teamPlayers.includes(p))
//         .filter(p => p.isOverseas ? overseasCount < teamRules.maxOverseas : true);
      
//       if (availablePlayers.length === 0) break;
      
//       // Select best available player
//       const bestPlayer = availablePlayers.reduce((best, current) =>
//         current.score! > best.score! ? current : best
//       );
      
//       teamPlayers.push(bestPlayer);
//       teamComposition[bestPlayer.role]++;
//       if (bestPlayer.isOverseas) overseasCount++;
//     }
//   };

//   return {
//     generatedTeams,
//     isGenerating,
//     generateTeams,
//     paymentDialog: showPaymentDialog && (
//       <PaymentDialog
//         currentBalance={userBalance}
//         requiredAmount={paymentAmount}
//         onPaymentSuccess={(amount) => {
//           onBalanceUpdate(userBalance + amount);
//           setShowPaymentDialog(false);
//           generateTeams();
//         }}
//         onOpenChange={setShowPaymentDialog}
//         open={showPaymentDialog}
//       />
//     ),
//     paymentInfo: (
//       <div className="mt-4 space-y-2">
//         <button
//           onClick={generateTeams}
//           disabled={isGenerating}
//           className={`
//             w-full px-6 py-3 rounded-lg font-bold transition-colors
//             ${isGenerating ? 'bg-gray-500 cursor-not-allowed' :
//               needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-600 hover:bg-blue-700'}
//             text-white shadow-md
//           `}
//         >
//           {isGenerating ? (
//             <span className="flex items-center justify-center gap-2">
//               <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//               </svg>
//               Generating...
//             </span>
//           ) : needsPayment ? (
//             `Pay ₹${paymentAmount} to Generate Teams`
//           ) : (
//             `Generate ${teamCount} Teams (₹${requiredCredits})`
//           )}
//         </button>
        
//         <div className="flex justify-between text-sm">
//           <span>Your balance: ₹{userBalance}</span>
//           <span className={needsPayment ? 'text-red-500' : 'text-green-500'}>
//             {needsPayment ? `Need ₹${paymentAmount} more` : 'Sufficient balance'}
//           </span>
//         </div>
//       </div>
//     )
//   };
// }



// // components/TeamGenerator.tsx
// "use client";

// import { useState, useCallback } from "react";
// import { PaymentDialog } from "./PaymentDialog";
// // import { Team } from "../../types/match";
// import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";

// interface TeamGeneratorProps {
//   team1: Team;
//   team2: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate?: (newBalance: number) => void;
// }

// export default function TeamGenerator({
//   team1,
//   team2,
//   teamCount,
//   riskLevel,
//   userBalance,
//   onBalanceUpdate = () => {}
// }: TeamGeneratorProps) {
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);

//   const requiredCredits = teamCount * 5;
//   const needsPayment = userBalance < requiredCredits;
//   const paymentAmount = requiredCredits - userBalance;

//   const calculatePlayerScore = (player: PlayerDetail, riskLevel: number) => {
//     // Base score uses selectPerc (higher is safer)
//     let score = player.selectPerc || 0;
    
//     // Apply role importance (1-opener, 2-middle, 3-allrounder, 4-bowler)
//     const roleWeights = [1.4, 1.2, 1.3, 1.1]; // Higher weight for openers
//     const roleIndex = (player.roleOrder || 4) - 1; // Default to bowler if not specified
//     score *= roleWeights[roleIndex] || 1.0;
    
//     // Apply risk factor (higher risk level means more variance)
//     const riskFactor = 1 + (Math.random() * (100 - riskLevel) / 50);
//     return score * riskFactor;
//   };

//   const generateTeams = useCallback(() => {
//     if (needsPayment) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     setIsGenerating(true);
//     setGeneratedTeams([]);
    
//     setTimeout(() => {
//       try {
//         // Combine and filter players
//         const allPlayers = [
//           ...team1.playerDetails.map(p => ({ ...p, teamName: team1.name })),
//           ...team2.playerDetails.map(p => ({ ...p, teamName: team2.name }))
//         ].filter(p => !p.substitute && p.select); // Only selected players
        
//         // Score all players
//         const scoredPlayers = allPlayers.map(player => ({
//           ...player,
//           score: calculatePlayerScore(player, riskLevel),
//           captainScore: (player.selCapPerc || 0) * (player.selectPerc || 0),
//           vcScore: (player.selVcPerc || 0) * (player.selectPerc || 0)
//         }));
        
//         // Generate teams
//         const newTeams: GeneratedTeam[] = [];
//         const MAX_ATTEMPTS = teamCount * 20;
//         let attempts = 0;
        
//         while (newTeams.length < teamCount && attempts < MAX_ATTEMPTS) {
//           attempts++;
          
//           // Create a team with proper balance
//           const team = createBalancedTeam(scoredPlayers);
//           if (team) {
//             newTeams.push(team);
//           }
//         }
        
//         setGeneratedTeams(newTeams);
//         onBalanceUpdate(userBalance - requiredCredits);
//       } catch (error) {
//         console.error("Error generating teams:", error);
//       } finally {
//         setIsGenerating(false);
//       }
//     }, 100);
//   }, [team1, team2, teamCount, riskLevel, userBalance, needsPayment]);

//   const createBalancedTeam = (players: PlayerDetail[]) => {
//     // Sort players by score (descending)
//     const sortedPlayers = [...players].sort((a, b) => b.score! - a.score!);
    
//     // Select captain from top captain scorers
//     const captainPool = [...sortedPlayers]
//       .sort((a, b) => b.captainScore! - a.captainScore!)
//       .slice(0, Math.ceil(sortedPlayers.length * 0.2));
//     const captain = captainPool[Math.floor(Math.random() * captainPool.length)];
    
//     // Select vice-captain from top VC scorers (excluding captain)
//     const vcPool = [...sortedPlayers]
//       .filter(p => p.id !== captain.id)
//       .sort((a, b) => b.vcScore! - a.vcScore!)
//       .slice(0, Math.ceil(sortedPlayers.length * 0.2));
//     const viceCaptain = vcPool[Math.floor(Math.random() * vcPool.length)] || captainPool[1];
    
//     // Filter out captain and vice-captain
//     const remainingPlayers = sortedPlayers.filter(p =>
//       p.id !== captain.id && p.id !== viceCaptain.id
//     );
    
//     // Team composition rules
//     const teamRules = {
//       minOpeners: 2,       // roleOrder 1
//       minMiddleOrder: 1,   // roleOrder 2
//       minAllRounders: 1,   // roleOrder 3
//       minBowlers: 3,       // roleOrder 4
//       maxPlayersFromOneTeam: 7,
//       minPlayersFromOneTeam: 4,
//       maxOverseas: 4
//     };
    
//     // Initialize team
//     const teamPlayers: PlayerDetail[] = [captain, viceCaptain];
//     let overseasCount = [captain, viceCaptain].filter(p => p.isOverseas).length;
    
//     // Track team composition
//     const teamComposition = {
//       openers: captain.roleOrder === 1 ? 1 : 0,
//       middleOrder: captain.roleOrder === 2 ? 1 : 0,
//       allRounders: captain.roleOrder === 3 ? 1 : 0,
//       bowlers: captain.roleOrder === 4 ? 1 : 0,
//       team1Count: captain.teamName === team1.name ? 1 : 0,
//       team2Count: captain.teamName === team2.name ? 1 : 0
//     };
    
//     // Update composition for vice-captain
//     if (viceCaptain.roleOrder === 1) teamComposition.openers++;
//     else if (viceCaptain.roleOrder === 2) teamComposition.middleOrder++;
//     else if (viceCaptain.roleOrder === 3) teamComposition.allRounders++;
//     else if (viceCaptain.roleOrder === 4) teamComposition.bowlers++;
    
//     if (viceCaptain.teamName === team1.name) teamComposition.team1Count++;
//     else if (viceCaptain.teamName === team2.name) teamComposition.team2Count++;
    
//     // Fill mandatory positions first
//     fillMandatoryPositions(teamPlayers, remainingPlayers, teamComposition, teamRules, overseasCount);
    
//     // Fill remaining spots with best available players
//     fillRemainingSpots(teamPlayers, remainingPlayers, teamComposition, teamRules, overseasCount);
    
//     // Validate team
//     if (teamPlayers.length !== 11) return null;
//     if (overseasCount > teamRules.maxOverseas) return null;
//     if (
//       teamComposition.team1Count > teamRules.maxPlayersFromOneTeam ||
//       teamComposition.team2Count > teamRules.maxPlayersFromOneTeam ||
//       teamComposition.team1Count < teamRules.minPlayersFromOneTeam ||
//       teamComposition.team2Count < teamRules.minPlayersFromOneTeam
//     ) return null;
    
//     return {
//       players: teamPlayers,
//       captain,
//       viceCaptain,
//       teamName: `Team ${generatedTeams.length + 1}`
//     };
//   };

//   const fillMandatoryPositions = (
//     teamPlayers: PlayerDetail[],
//     remainingPlayers: PlayerDetail[],
//     teamComposition: any,
//     teamRules: any,
//     overseasCount: number
//   ) => {
//     const positions = [
//       { role: 'openers', target: teamRules.minOpeners, roleOrder: 1 },
//       { role: 'middleOrder', target: teamRules.minMiddleOrder, roleOrder: 2 },
//       { role: 'allRounders', target: teamRules.minAllRounders, roleOrder: 3 },
//       { role: 'bowlers', target: teamRules.minBowlers, roleOrder: 4 }
//     ];
    
//     for (const { role, target, roleOrder } of positions) {
//       while (teamComposition[role] < target && teamPlayers.length < 11) {
//         const candidates = remainingPlayers
//           .filter(p => p.roleOrder === roleOrder)
//           .filter(p => p.isOverseas ? overseasCount < teamRules.maxOverseas : true)
//           .filter(p => {
//             // Check team balance
//             if (p.teamName === team1.name) {
//               return teamComposition.team1Count < teamRules.maxPlayersFromOneTeam;
//             } else {
//               return teamComposition.team2Count < teamRules.maxPlayersFromOneTeam;
//             }
//           })
//           .filter(p => !teamPlayers.includes(p));
        
//         if (candidates.length === 0) break;
        
//         // Select best available player for this position
//         const bestCandidate = candidates.reduce((best, current) =>
//           current.score! > best.score! ? current : best
//         );
        
//         teamPlayers.push(bestCandidate);
//         teamComposition[role]++;
//         if (bestCandidate.isOverseas) overseasCount++;
//         if (bestCandidate.teamName === team1.name) teamComposition.team1Count++;
//         else teamComposition.team2Count++;
//       }
//     }
//   };

//   const fillRemainingSpots = (
//     teamPlayers: PlayerDetail[],
//     remainingPlayers: PlayerDetail[],
//     teamComposition: any,
//     teamRules: any,
//     overseasCount: number
//   ) => {
//     while (teamPlayers.length < 11) {
//       const availablePlayers = remainingPlayers
//         .filter(p => !teamPlayers.includes(p))
//         .filter(p => p.isOverseas ? overseasCount < teamRules.maxOverseas : true)
//         .filter(p => {
//           // Check team balance
//           if (p.teamName === team1.name) {
//             return teamComposition.team1Count < teamRules.maxPlayersFromOneTeam;
//           } else {
//             return teamComposition.team2Count < teamRules.maxPlayersFromOneTeam;
//           }
//         });
      
//       if (availablePlayers.length === 0) break;
      
//       // Select best available player considering team balance
//       const bestPlayer = availablePlayers.reduce((best, current) => {
//         // Prefer players that help balance the team
//         let currentScore = current.score!;
//         let bestScore = best.score!;
        
//         // Boost score if it helps balance team counts
//         if (current.teamName === team1.name && teamComposition.team1Count < teamRules.minPlayersFromOneTeam) {
//           currentScore *= 1.2;
//         } else if (current.teamName === team2.name && teamComposition.team2Count < teamRules.minPlayersFromOneTeam) {
//           currentScore *= 1.2;
//         }
        
//         return currentScore > bestScore ? current : best;
//       });
      
//       teamPlayers.push(bestPlayer);
//       if (bestPlayer.isOverseas) overseasCount++;
//       if (bestPlayer.teamName === team1.name) teamComposition.team1Count++;
//       else teamComposition.team2Count++;
      
//       // Update role counts
//       if (bestPlayer.roleOrder === 1) teamComposition.openers++;
//       else if (bestPlayer.roleOrder === 2) teamComposition.middleOrder++;
//       else if (bestPlayer.roleOrder === 3) teamComposition.allRounders++;
//       else if (bestPlayer.roleOrder === 4) teamComposition.bowlers++;
//     }
//   };

//   return {
//     generatedTeams,
//     isGenerating,
//     generateTeams,
//     paymentDialog: showPaymentDialog && (
//       <PaymentDialog
//         currentBalance={userBalance}
//         requiredAmount={paymentAmount}
//         onPaymentSuccess={(amount) => {
//           onBalanceUpdate(userBalance + amount);
//           setShowPaymentDialog(false);
//           generateTeams();
//         }}
//         onOpenChange={setShowPaymentDialog}
//         open={showPaymentDialog}
//       />
//     ),
//     paymentInfo: (
//       <div className="mt-4 space-y-2">
//         <button
//           onClick={generateTeams}
//           disabled={isGenerating}
//           className={`
//             w-full px-6 py-3 rounded-lg font-bold transition-colors
//             ${isGenerating ? 'bg-gray-500 cursor-not-allowed' :
//               needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-600 hover:bg-blue-700'}
//             text-white shadow-md
//           `}
//         >
//           {isGenerating ? (
//             <span className="flex items-center justify-center gap-2">
//               <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//               </svg>
//               Generating...
//             </span>
//           ) : needsPayment ? (
//             `Pay ₹${paymentAmount} to Generate Teams`
//           ) : (
//             `Generate ${teamCount} Teams (₹${requiredCredits})`
//           )}
//         </button>
        
//         <div className="flex justify-between text-sm">
//           <span>Your balance: ₹{userBalance}</span>
//           <span className={needsPayment ? 'text-red-500' : 'text-green-500'}>
//             {needsPayment ? `Need ₹${paymentAmount} more` : 'Sufficient balance'}
//           </span>
//         </div>
//       </div>
//     )
//   };
// }




// app/build-team/[matchId]/page.tsx
// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { doc, onSnapshot } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import Header from "@/components/Header";
// import { format } from "date-fns";
// import { enIN } from "date-fns/locale";
// import MatchHeader from "@/components/MatchHeader";
// import RiskSlider from "@/components/RiskSlider";
// import TeamCountSlider from "@/components/TeamCountSlider";
// import TeamGenerator from "@/components/TeamGenerator";
// import TeamCard from "@/components/TeamCard";
// import { MatchData } from "@/types/match";

// export default function MatchPage() {
//   const [riskLevel, setRiskLevel] = useState(50);
//   const [teamCount, setTeamCount] = useState(5);
//   const [userBalance, setUserBalance] = useState(100);
//   const { matchId } = useParams();
//   const [matchData, setMatchData] = useState<MatchData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!matchId) {
//       setError("Invalid match ID");
//       setLoading(false);
//       return;
//     }

//     setLoading(true);
//     const docRef = doc(db, "matchinfo", matchId as string);
//     const unsubscribe = onSnapshot(
//       docRef,
//       (docSnap) => {
//         setLoading(false);
//         if (docSnap.exists()) {
//           const data = docSnap.data() as MatchData;
//           setMatchData(data);
//         } else {
//           setError("Match data not found");
//         }
//       },
//       (error) => {
//         setLoading(false);
//         setError("Failed to fetch match data");
//       }
//     );

//     return () => unsubscribe();
//   }, [matchId]);

//   if (loading) return <div className="p-6 text-white">Loading match details...</div>;
//   if (error) return <div className="p-6 text-red-500">{error}</div>;
//   if (!matchData?.matchInfo) return <div className="p-6 text-white">No match data found.</div>;

//   const { matchInfo } = matchData;
//   const { team1, team2 } = matchInfo;

//   const {
//     generatedTeams,
//     isGenerating,
//     generateTeams,
//     paymentDialog,
//     paymentInfo
//   } = TeamGenerator({
//     team1: team1!,
//     team2: team2!,
//     teamCount,
//     riskLevel,
//     userBalance,
//     onBalanceUpdate: setUserBalance
//   });

//   return (
//     <div className="bg-gray-900 min-h-screen text-white">
//       <Header />
//       <div className="container mx-auto p-4">
//         <MatchHeader matchInfo={matchInfo} />
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
//           <div className="md:col-span-2 space-y-6">
//             <div className="bg-gray-800 p-6 rounded-lg">
//               <h2 className="text-xl font-bold mb-4">Team Configuration</h2>
//               <div className="space-y-6">
//                 <RiskSlider riskLevel={riskLevel} setRiskLevel={setRiskLevel} />
//                 <TeamCountSlider teamCount={teamCount} setTeamCount={setTeamCount} />
//                 {paymentInfo}
//               </div>
//             </div>

//             {generatedTeams.length > 0 && (
//               <div className="bg-gray-800 p-6 rounded-lg">
//                 <h2 className="text-xl font-bold mb-4">Generated Teams ({generatedTeams.length})</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {generatedTeams.map((team, index) => (
//                     <TeamCard
//                       key={index}
//                       team={team}
//                       index={index}
//                       isSelected={false}
//                       onToggleSelect={() => {}}
//                     />
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>

//           <div className="bg-gray-800 p-6 rounded-lg">
//             <h2 className="text-xl font-bold mb-4">Match Info</h2>
//             {matchInfo.venue && (
//               <div className="mb-4">
//                 <h3 className="font-semibold text-lg">Venue</h3>
//                 <p>{matchInfo.venue.name}, {matchInfo.venue.city}</p>
//                 <p className="text-sm text-gray-400">
//                   Pitch: {matchInfo.venue.pitchtype || "Unknown"} |
//                   Avg. Score: {matchInfo.venue.avgscore || "N/A"}
//                 </p>
//               </div>
//             )}
            
//             {matchInfo.tossResults && (
//               <div className="mb-4">
//                 <h3 className="font-semibold text-lg">Toss Result</h3>
//                 <p>
//                   {matchInfo.tossResults.tossWinnerName} won the toss and chose to {matchInfo.tossResults.decision}
//                 </p>
//                 <p className="text-sm text-gray-400">
//                   {format(new Date(matchInfo.tossResults.announcedAt!), "h:mm a, MMMM d, yyyy", { locale: enIN })}
//                 </p>
//               </div>
//             )}

//             <div className="mt-6">
//               <h3 className="font-semibold text-lg mb-2">Team Squads</h3>
//               <div className="space-y-4">
//                 {[team1, team2].map((team) => (
//                   <div key={team?.id} className="bg-gray-700 p-3 rounded">
//                     <h4 className="font-medium flex items-center">
//                       <img
//                         src={team?.logo || "/fallback.png"}
//                         alt={team?.name}
//                         className="w-6 h-6 mr-2"
//                       />
//                       {team?.name}
//                     </h4>
//                     <div className="text-sm mt-2">
//                       {team?.playerDetails
//                         .filter(p => !p.substitute)
//                         .slice(0, 5)
//                         .map(p => p.name)
//                         .join(", ")}
//                       {team?.playerDetails.length! > 5 && "..."}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {paymentDialog}
//     </div>
//   );
// }














// // components/TeamGenerator.tsx
// "use client";

// import { useState, useCallback, useMemo } from "react";
// import { PaymentDialog } from "./PaymentDialog";
// import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";

// interface TeamGeneratorProps {
//   team1: Team;
//   team2: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate?: (newBalance: number) => void;
// }

// export default function TeamGenerator({
//   team1,
//   team2,
//   teamCount,
//   riskLevel,
//   userBalance,
//   onBalanceUpdate = () => {}
// }: TeamGeneratorProps) {
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);

//   const requiredCredits = teamCount * 5;
//   const needsPayment = userBalance < requiredCredits;
//   const paymentAmount = requiredCredits - userBalance;

//   const calculatePlayerScore = useCallback((player: PlayerDetail, riskLevel: number) => {
//     let score = player.selectPerc || 0;
//     const roleWeights = [1.4, 1.2, 1.3, 1.1];
//     const roleIndex = (player.roleOrder || 4) - 1;
//     score *= roleWeights[roleIndex] || 1.0;
//     const riskFactor = 1 + (Math.random() * (100 - riskLevel) / 50);
//     return score * riskFactor;
//   }, []);

//   const createBalancedTeam = useCallback((players: PlayerDetail[]) => {
//     const sortedPlayers = [...players].sort((a, b) => b.score! - a.score!);
//     const captainPool = [...sortedPlayers]
//       .sort((a, b) => b.selCapPerc! - a.selCapPerc!)
//       .slice(0, Math.ceil(sortedPlayers.length * 0.2));
//     const captain = captainPool[Math.floor(Math.random() * captainPool.length)];
    
//     const vcPool = [...sortedPlayers]
//       .filter(p => p.id !== captain.id)
//       .sort((a, b) => b.selVcPerc! - a.selVcPerc!)
//       .slice(0, Math.ceil(sortedPlayers.length * 0.2));
//     const viceCaptain = vcPool[Math.floor(Math.random() * vcPool.length)] || captainPool[1];
    
//     const remainingPlayers = sortedPlayers.filter(p =>
//       p.id !== captain.id && p.id !== viceCaptain.id
//     );
    
//     const teamRules = {
//       minOpeners: 2,
//       minMiddleOrder: 1,
//       minAllRounders: 1,
//       minBowlers: 3,
//       maxPlayersFromOneTeam: 7,
//       minPlayersFromOneTeam: 4,
//       maxOverseas: 4
//     };
    
//     const teamPlayers: PlayerDetail[] = [captain, viceCaptain];
//     let overseasCount = [captain, viceCaptain].filter(p => p.isOverseas).length;
    
//     const teamComposition = {
//       openers: captain.roleOrder === 1 ? 1 : 0,
//       middleOrder: captain.roleOrder === 2 ? 1 : 0,
//       allRounders: captain.roleOrder === 3 ? 1 : 0,
//       bowlers: captain.roleOrder === 4 ? 1 : 0,
//       team1Count: captain.teamName === team1.name ? 1 : 0,
//       team2Count: captain.teamName === team2.name ? 1 : 0
//     };
    
//     if (viceCaptain.roleOrder === 1) teamComposition.openers++;
//     else if (viceCaptain.roleOrder === 2) teamComposition.middleOrder++;
//     else if (viceCaptain.roleOrder === 3) teamComposition.allRounders++;
//     else if (viceCaptain.roleOrder === 4) teamComposition.bowlers++;
    
//     if (viceCaptain.teamName === team1.name) teamComposition.team1Count++;
//     else if (viceCaptain.teamName === team2.name) teamComposition.team2Count++;
    
//     const positions = [
//       { role: 'openers', target: teamRules.minOpeners, roleOrder: 1 },
//       { role: 'middleOrder', target: teamRules.minMiddleOrder, roleOrder: 2 },
//       { role: 'allRounders', target: teamRules.minAllRounders, roleOrder: 3 },
//       { role: 'bowlers', target: teamRules.minBowlers, roleOrder: 4 }
//     ];
    
//     for (const { role, target, roleOrder } of positions) {
//       while (teamComposition[role] < target && teamPlayers.length < 11) {
//         const candidates = remainingPlayers
//           .filter(p => p.roleOrder === roleOrder)
//           .filter(p => p.isOverseas ? overseasCount < teamRules.maxOverseas : true)
//           .filter(p => {
//             if (p.teamName === team1.name) {
//               return teamComposition.team1Count < teamRules.maxPlayersFromOneTeam;
//             } else {
//               return teamComposition.team2Count < teamRules.maxPlayersFromOneTeam;
//             }
//           })
//           .filter(p => !teamPlayers.includes(p));
        
//         if (candidates.length === 0) break;
        
//         const bestCandidate = candidates.reduce((best, current) =>
//           current.score! > best.score! ? current : best
//         );
        
//         teamPlayers.push(bestCandidate);
//         teamComposition[role]++;
//         if (bestCandidate.isOverseas) overseasCount++;
//         if (bestCandidate.teamName === team1.name) teamComposition.team1Count++;
//         else teamComposition.team2Count++;
//       }
//     }
    
//     while (teamPlayers.length < 11) {
//       const availablePlayers = remainingPlayers
//         .filter(p => !teamPlayers.includes(p))
//         .filter(p => p.isOverseas ? overseasCount < teamRules.maxOverseas : true)
//         .filter(p => {
//           if (p.teamName === team1.name) {
//             return teamComposition.team1Count < teamRules.maxPlayersFromOneTeam;
//           } else {
//             return teamComposition.team2Count < teamRules.maxPlayersFromOneTeam;
//           }
//         });
      
//       if (availablePlayers.length === 0) break;
      
//       const bestPlayer = availablePlayers.reduce((best, current) => {
//         let currentScore = current.score!;
//         let bestScore = best.score!;
        
//         if (current.teamName === team1.name && teamComposition.team1Count < teamRules.minPlayersFromOneTeam) {
//           currentScore *= 1.2;
//         } else if (current.teamName === team2.name && teamComposition.team2Count < teamRules.minPlayersFromOneTeam) {
//           currentScore *= 1.2;
//         }
        
//         return currentScore > bestScore ? current : best;
//       });
      
//       teamPlayers.push(bestPlayer);
//       if (bestPlayer.isOverseas) overseasCount++;
//       if (bestPlayer.teamName === team1.name) teamComposition.team1Count++;
//       else teamComposition.team2Count++;
      
//       if (bestPlayer.roleOrder === 1) teamComposition.openers++;
//       else if (bestPlayer.roleOrder === 2) teamComposition.middleOrder++;
//       else if (bestPlayer.roleOrder === 3) teamComposition.allRounders++;
//       else if (bestPlayer.roleOrder === 4) teamComposition.bowlers++;
//     }
    
//     if (teamPlayers.length !== 11) return null;
//     if (overseasCount > teamRules.maxOverseas) return null;
//     if (
//       teamComposition.team1Count > teamRules.maxPlayersFromOneTeam ||
//       teamComposition.team2Count > teamRules.maxPlayersFromOneTeam ||
//       teamComposition.team1Count < teamRules.minPlayersFromOneTeam ||
//       teamComposition.team2Count < teamRules.minPlayersFromOneTeam
//     ) return null;
    
//     return {
//       players: teamPlayers,
//       captain,
//       viceCaptain,
//       teamName: `Team ${generatedTeams.length + 1}`
//     };
//   }, [team1.name, team2.name, generatedTeams.length]);

//   const handleGenerateTeams = useCallback(() => {
//     if (needsPayment) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     setIsGenerating(true);
//     setGeneratedTeams([]);
    
//     setTimeout(() => {
//       try {
//         const allPlayers = [
//           ...team1.playerDetails.map(p => ({ ...p, teamName: team1.name })),
//           ...team2.playerDetails.map(p => ({ ...p, teamName: team2.name }))
//         ].filter(p => !p.substitute && p.select);
        
//         const scoredPlayers = allPlayers.map(player => ({
//           ...player,
//           score: calculatePlayerScore(player, riskLevel),
//           captainScore: (player.selCapPerc || 0) * (player.selectPerc || 0),
//           vcScore: (player.selVcPerc || 0) * (player.selectPerc || 0)
//         }));
        
//         const newTeams: GeneratedTeam[] = [];
//         const MAX_ATTEMPTS = teamCount * 20;
//         let attempts = 0;
        
//         while (newTeams.length < teamCount && attempts < MAX_ATTEMPTS) {
//           attempts++;
//           const team = createBalancedTeam(scoredPlayers);
//           if (team) newTeams.push(team);
//         }
        
//         setGeneratedTeams(newTeams);
//         onBalanceUpdate(userBalance - requiredCredits);
//       } catch (error) {
//         console.error("Error generating teams:", error);
//       } finally {
//         setIsGenerating(false);
//       }
//     }, 100);
//   }, [
//     team1, team2, teamCount, riskLevel,
//     userBalance, needsPayment, requiredCredits,
//     onBalanceUpdate, calculatePlayerScore, createBalancedTeam
//   ]);

//   const paymentDialog = useMemo(() => {
//     return showPaymentDialog ? (
//       <PaymentDialog
//         currentBalance={userBalance}
//         requiredAmount={paymentAmount}
//         onPaymentSuccess={(amount) => {
//           onBalanceUpdate(userBalance + amount);
//           setShowPaymentDialog(false);
//           handleGenerateTeams();
//         }}
//         onOpenChange={setShowPaymentDialog}
//         open={showPaymentDialog}
//       />
//     ) : null;
//   }, [showPaymentDialog, userBalance, paymentAmount, onBalanceUpdate, handleGenerateTeams]);

//   const paymentInfo = useMemo(() => {
//     return (
//       <div className="mt-4 space-y-2">
//         <button
//           onClick={handleGenerateTeams}
//           disabled={isGenerating}
//           className={`
//             w-full px-6 py-3 rounded-lg font-bold transition-colors
//             ${isGenerating ? 'bg-gray-500 cursor-not-allowed' :
//               needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-600 hover:bg-blue-700'}
//             text-white shadow-md
//           `}
//         >
//           {isGenerating ? (
//             <span className="flex items-center justify-center gap-2">
//               <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//               </svg>
//               Generating...
//             </span>
//           ) : needsPayment ? (
//             `Pay ₹${paymentAmount} to Generate Teams`
//           ) : (
//             `Generate ${teamCount} Teams (₹${requiredCredits})`
//           )}
//         </button>
        
//         <div className="flex justify-between text-sm">
//           <span>Your balance: ₹{userBalance}</span>
//           <span className={needsPayment ? 'text-red-500' : 'text-green-500'}>
//             {needsPayment ? `Need ₹${paymentAmount} more` : 'Sufficient balance'}
//           </span>
//         </div>
//       </div>
//     );
//   }, [isGenerating, needsPayment, paymentAmount, requiredCredits, teamCount, userBalance, handleGenerateTeams]);

//   return {
//     generatedTeams,
//     isGenerating,
//     generateTeams: handleGenerateTeams,
//     paymentDialog,
//     paymentInfo
//   };
// }










// "use client";

// import { useState, useCallback, useMemo } from "react";
// import { PaymentDialog } from "./PaymentDialog";
// import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";

// interface TeamGeneratorProps {
//   team1?: Team;
//   team2?: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate?: (newBalance: number) => void;
// }

// export const useTeamGenerator = ({
//   team1,
//   team2,
//   teamCount,
//   riskLevel,
//   userBalance,
//   onBalanceUpdate = () => {}
// }: TeamGeneratorProps) => {
//   // All hooks called unconditionally at the top
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);

//   // Memoized values
//   const requiredCredits = useMemo(() => teamCount * 5, [teamCount]);
//   const needsPayment = useMemo(() => userBalance < requiredCredits, [userBalance, requiredCredits]);
//   const paymentAmount = useMemo(() => requiredCredits - userBalance, [requiredCredits, userBalance]);

//   // Calculate player score with proper null checks
//   const calculatePlayerScore = useCallback((player: PlayerDetail, riskLevel: number) => {
//     const baseScore = player.selectPerc || 0;
//     const roleWeights = [1.4, 1.2, 1.3, 1.1];
//     const roleIndex = (player.roleOrder || 4) - 1;
//     const weightedScore = baseScore * (roleWeights[roleIndex] || 1.0);
//     const riskFactor = 1 + (Math.random() * (100 - riskLevel) / 50);
//     return weightedScore * riskFactor;
//   }, []);

//   // Create balanced team with proper null checks
//   const createBalancedTeam = useCallback((players: PlayerDetail[]) => {
//     if (!team1 || !team2) return null;
    
//     // Filter out substitute players and ensure they are selected
//     const eligiblePlayers = players.filter(p => !p.substitute && p.select);
//     if (eligiblePlayers.length < 11) return null;
    
//     const sortedPlayers = [...eligiblePlayers].sort((a, b) => (b.score || 0) - (a.score || 0));
    
//     // Select captain from top 20% of captain candidates
//     const captainPool = [...sortedPlayers]
//       .sort((a, b) => (b.selCapPerc || 0) - (a.selCapPerc || 0))
//       .slice(0, Math.ceil(sortedPlayers.length * 0.2));
//     if (captainPool.length === 0) return null;
    
//     const captain = captainPool[Math.floor(Math.random() * captainPool.length)];
    
//     // Select vice-captain from top 20% of VC candidates (excluding captain)
//     const vcPool = [...sortedPlayers]
//       .filter(p => p.id !== captain.id)
//       .sort((a, b) => (b.selVcPerc || 0) - (a.selVcPerc || 0))
//       .slice(0, Math.ceil(sortedPlayers.length * 0.2));
//     const viceCaptain = vcPool[Math.floor(Math.random() * vcPool.length)] || captainPool[1];
//     if (!viceCaptain) return null;
    
//     // Initialize team composition tracking
//     const teamComposition = {
//       openers: captain.roleOrder === 1 ? 1 : 0,
//       middleOrder: captain.roleOrder === 2 ? 1 : 0,
//       allRounders: captain.roleOrder === 3 ? 1 : 0,
//       bowlers: captain.roleOrder === 4 ? 1 : 0,
//       team1Count: captain.teamName === team1.name ? 1 : 0,
//       team2Count: captain.teamName === team2.name ? 1 : 0,
//       overseas: [captain, viceCaptain].filter(p => p.isOverseas).length
//     };

//     // Update composition for vice-captain
//     if (viceCaptain.roleOrder === 1) teamComposition.openers++;
//     else if (viceCaptain.roleOrder === 2) teamComposition.middleOrder++;
//     else if (viceCaptain.roleOrder === 3) teamComposition.allRounders++;
//     else if (viceCaptain.roleOrder === 4) teamComposition.bowlers++;
    
//     if (viceCaptain.teamName === team1.name) teamComposition.team1Count++;
//     else if (viceCaptain.teamName === team2.name) teamComposition.team2Count++;

//     const remainingPlayers = sortedPlayers.filter(p =>
//       p.id !== captain.id && p.id !== viceCaptain.id
//     );

//     const teamPlayers: PlayerDetail[] = [captain, viceCaptain];

//     // Fill mandatory positions
//     const positions = [
//       { role: 'openers', target: 2, roleOrder: 1 },
//       { role: 'middleOrder', target: 1, roleOrder: 2 },
//       { role: 'allRounders', target: 1, roleOrder: 3 },
//       { role: 'bowlers', target: 3, roleOrder: 4 }
//     ];

//     for (const { role, target, roleOrder } of positions) {
//       while (teamComposition[role] < target && teamPlayers.length < 11) {
//         const candidates = remainingPlayers
//           .filter(p => p.roleOrder === roleOrder)
//           .filter(p => p.isOverseas ? teamComposition.overseas < 4 : true)
//           .filter(p => {
//             const teamCount = p.teamName === team1.name
//               ? teamComposition.team1Count
//               : teamComposition.team2Count;
//             return teamCount < 7;
//           })
//           .filter(p => !teamPlayers.includes(p));

//         if (candidates.length === 0) break;

//         const bestCandidate = candidates.reduce((best, current) =>
//           (current.score || 0) > (best.score || 0) ? current : best
//         );

//         teamPlayers.push(bestCandidate);
//         teamComposition[role]++;
//         if (bestCandidate.isOverseas) teamComposition.overseas++;
//         if (bestCandidate.teamName === team1.name) teamComposition.team1Count++;
//         else teamComposition.team2Count++;
//       }
//     }

//     // Validate team composition
//     if (teamPlayers.length !== 11) return null;
//     if (teamComposition.overseas > 4) return null;
//     if (teamComposition.team1Count > 7 || teamComposition.team2Count > 7) return null;
//     if (teamComposition.team1Count < 4 || teamComposition.team2Count < 4) return null;

//     return {
//       players: teamPlayers,
//       captain,
//       viceCaptain,
//       teamName: `Team ${generatedTeams.length + 1}`
//     };
//   }, [team1, team2, generatedTeams.length]);

//   const handleGenerateTeams = useCallback(() => {
//     if (!team1 || !team2) {
//       console.error("Cannot generate teams - missing team data");
//       return;
//     }

//     if (needsPayment) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     setIsGenerating(true);
//     setGeneratedTeams([]);
    
//     setTimeout(() => {
//       try {
//         // Only include players who are not substitutes and are selected
//         const allPlayers = [
//           ...(team1.playerDetails || []).map(p => ({ ...p, teamName: team1.name })),
//           ...(team2.playerDetails || []).map(p => ({ ...p, teamName: team2.name }))
//         ].filter(p => !p.substitute && p.select);

//         if (allPlayers.length < 11) {
//           console.error("Not enough eligible players to form a team");
//           setIsGenerating(false);
//           return;
//         }

//         const scoredPlayers = allPlayers.map(player => ({
//           ...player,
//           score: calculatePlayerScore(player, riskLevel),
//           captainScore: (player.selCapPerc || 0) * (player.selectPerc || 0),
//           vcScore: (player.selVcPerc || 0) * (player.selectPerc || 0)
//         }));

//         const newTeams: GeneratedTeam[] = [];
//         const MAX_ATTEMPTS = teamCount * 20;
//         let attempts = 0;

//         while (newTeams.length < teamCount && attempts < MAX_ATTEMPTS) {
//           attempts++;
//           const team = createBalancedTeam(scoredPlayers);
//           if (team) newTeams.push(team);
//         }

//         if (newTeams.length === 0) {
//           console.error("Failed to generate any valid teams");
//         }

//         setGeneratedTeams(newTeams);
//         onBalanceUpdate(userBalance - requiredCredits);
//       } catch (error) {
//         console.error("Error generating teams:", error);
//       } finally {
//         setIsGenerating(false);
//       }
//     }, 100);
//   }, [
//     team1, team2, teamCount, riskLevel,
//     userBalance, needsPayment, requiredCredits,
//     onBalanceUpdate, calculatePlayerScore, createBalancedTeam
//   ]);

//   const paymentDialog = useMemo(() => (
//     showPaymentDialog ? (
//       <PaymentDialog
//         currentBalance={userBalance}
//         requiredAmount={paymentAmount}
//         onPaymentSuccess={(amount) => {
//           onBalanceUpdate(userBalance + amount);
//           setShowPaymentDialog(false);
//           handleGenerateTeams();
//         }}
//         onOpenChange={setShowPaymentDialog}
//         open={showPaymentDialog}
//       />
//     ) : null
//   ), [showPaymentDialog, userBalance, paymentAmount, onBalanceUpdate, handleGenerateTeams]);

//   const paymentInfo = useMemo(() => (
//     <div className="mt-4 space-y-2">
//       <button
//         onClick={handleGenerateTeams}
//         disabled={isGenerating || !team1 || !team2}
//         className={`
//           w-full px-6 py-3 rounded-lg font-bold transition-colors
//           ${isGenerating ? 'bg-gray-500 cursor-not-allowed' :
//             !team1 || !team2 ? 'bg-gray-500 cursor-not-allowed' :
//             needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-600 hover:bg-blue-700'}
//           text-white shadow-md
//         `}
//       >
//         {isGenerating ? (
//           <span className="flex items-center justify-center gap-2">
//             <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//             Generating...
//           </span>
//         ) : !team1 || !team2 ? (
//           "Missing team data"
//         ) : needsPayment ? (
//           `Pay ₹${paymentAmount} to Generate Teams`
//         ) : (
//           `Generate ${teamCount} Teams (₹${requiredCredits})`
//         )}
//       </button>
//       <div className="flex justify-between text-sm">
//         <span>Your balance: ₹{userBalance}</span>
//         {team1 && team2 ? (
//           <span className={needsPayment ? 'text-red-500' : 'text-green-500'}>
//             {needsPayment ? `Need ₹${paymentAmount} more` : 'Sufficient balance'}
//           </span>
//         ) : (
//           <span className="text-red-500">Cannot generate teams</span>
//         )}
//       </div>
//     </div>
//   ), [isGenerating, needsPayment, paymentAmount, requiredCredits, teamCount, userBalance, handleGenerateTeams, team1, team2]);

//   return {
//     generatedTeams,
//     isGenerating,
//     generateTeams: handleGenerateTeams,
//     paymentDialog,
//     paymentInfo
//   };
// };






// "use client";

// import { useState, useCallback, useMemo } from "react";
// import { PaymentDialog } from "./PaymentDialog";
// import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";

// interface TeamGeneratorProps {
//   team1?: Team;
//   team2?: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate?: (newBalance: number) => void;
// }

// export const useTeamGenerator = ({
//   team1,
//   team2,
//   teamCount,
//   riskLevel,
//   userBalance,
//   onBalanceUpdate = () => {}
// }: TeamGeneratorProps) => {
//   // State
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [teamError, setTeamError] = useState<string | null>(null);

//   // Memoized values
//   const requiredCredits = useMemo(() => teamCount * 5, [teamCount]);
//   const needsPayment = useMemo(() => userBalance < requiredCredits, [userBalance, requiredCredits]);
//   const paymentAmount = useMemo(() => requiredCredits - userBalance, [requiredCredits, userBalance]);

//   // Calculate player score
//   const calculatePlayerScore = useCallback((player: PlayerDetail, riskLevel: number) => {
//     const baseScore = player.selectPerc || 0;
//     const roleWeights = [1.4, 1.2, 1.3, 1.1];
//     const roleIndex = (player.roleOrder || 4) - 1;
//     const weightedScore = baseScore * (roleWeights[roleIndex] || 1.0);
//     const riskFactor = 1 + (Math.random() * (100 - riskLevel) / 50);
//     return weightedScore * riskFactor;
//   }, []);

//   // Create balanced team
//   const createBalancedTeam = useCallback((players: PlayerDetail[]) => {
//     if (!team1 || !team2) return null;
    
//     const sortedPlayers = [...players].sort((a, b) => (b.score || 0) - (a.score || 0));
    
//     // Select captain
//     const captainPool = [...sortedPlayers]
//       .sort((a, b) => (b.selCapPerc || 0) - (a.selCapPerc || 0))
//       .slice(0, Math.ceil(sortedPlayers.length * 0.2));
//     if (captainPool.length === 0) return null;
    
//     const captain = captainPool[Math.floor(Math.random() * captainPool.length)];
    
//     // Select vice-captain
//     const vcPool = [...sortedPlayers]
//       .filter(p => p.id !== captain.id)
//       .sort((a, b) => (b.selVcPerc || 0) - (a.selVcPerc || 0))
//       .slice(0, Math.ceil(sortedPlayers.length * 0.2));
//     const viceCaptain = vcPool[Math.floor(Math.random() * vcPool.length)] || captainPool[1];
//     if (!viceCaptain) return null;
    
//     // Initialize team composition
//     const teamComposition = {
//       openers: captain.roleOrder === 1 ? 1 : 0,
//       middleOrder: captain.roleOrder === 2 ? 1 : 0,
//       allRounders: captain.roleOrder === 3 ? 1 : 0,
//       bowlers: captain.roleOrder === 4 ? 1 : 0,
//       team1Count: captain.teamName === team1.name ? 1 : 0,
//       team2Count: captain.teamName === team2.name ? 1 : 0,
//       overseas: [captain, viceCaptain].filter(p => p.isOverseas).length
//     };

//     // Update composition for vice-captain
//     if (viceCaptain.roleOrder === 1) teamComposition.openers++;
//     else if (viceCaptain.roleOrder === 2) teamComposition.middleOrder++;
//     else if (viceCaptain.roleOrder === 3) teamComposition.allRounders++;
//     else if (viceCaptain.roleOrder === 4) teamComposition.bowlers++;
    
//     if (viceCaptain.teamName === team1.name) teamComposition.team1Count++;
//     else if (viceCaptain.teamName === team2.name) teamComposition.team2Count++;

//     const remainingPlayers = sortedPlayers.filter(p =>
//       p.id !== captain.id && p.id !== viceCaptain.id
//     );

//     const teamPlayers: PlayerDetail[] = [captain, viceCaptain];

//     // Fill positions
//     const positions = [
//       { role: 'openers', target: 2, roleOrder: 1 },
//       { role: 'middleOrder', target: 1, roleOrder: 2 },
//       { role: 'allRounders', target: 1, roleOrder: 3 },
//       { role: 'bowlers', target: 3, roleOrder: 4 }
//     ];

//     for (const { role, target, roleOrder } of positions) {
//       while (teamComposition[role] < target && teamPlayers.length < 11) {
//         const candidates = remainingPlayers
//           .filter(p => p.roleOrder === roleOrder)
//           .filter(p => p.isOverseas ? teamComposition.overseas < 4 : true)
//           .filter(p => {
//             const teamCount = p.teamName === team1.name
//               ? teamComposition.team1Count
//               : teamComposition.team2Count;
//             return teamCount < 7;
//           })
//           .filter(p => !teamPlayers.includes(p));

//         if (candidates.length === 0) break;

//         const bestCandidate = candidates.reduce((best, current) =>
//           (current.score || 0) > (best.score || 0) ? current : best
//         );

//         teamPlayers.push(bestCandidate);
//         teamComposition[role]++;
//         if (bestCandidate.isOverseas) teamComposition.overseas++;
//         if (bestCandidate.teamName === team1.name) teamComposition.team1Count++;
//         else teamComposition.team2Count++;
//       }
//     }

//     // Validate team
//     if (teamPlayers.length !== 11) return null;
//     if (teamComposition.overseas > 4) return null;
//     if (teamComposition.team1Count > 7 || teamComposition.team2Count > 7) return null;
//     if (teamComposition.team1Count < 4 || teamComposition.team2Count < 4) return null;

//     return {
//       players: teamPlayers,
//       captain,
//       viceCaptain,
//       teamName: `Team ${generatedTeams.length + 1}`
//     };
//   }, [team1, team2, generatedTeams.length]);

//   // Generate teams handler
//   const handleGenerateTeams = useCallback(() => {
//     if (!team1 || !team2) {
//       setTeamError("Missing team data");
//       return;
//     }

//     if (needsPayment) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     setIsGenerating(true);
//     setTeamError(null);
//     setGeneratedTeams([]);
    
//     setTimeout(() => {
//       try {
//         // Get all non-substitute players
//         const allPlayers = [
//           ...(team1.playerDetails || []).map(p => ({ ...p, teamName: team1.name })),
//           ...(team2.playerDetails || []).map(p => ({ ...p, teamName: team2.name }))
//         ].filter(p => !p.substitute);

//         if (allPlayers.length < 11) {
//           setTeamError("Not enough players to form a team (minimum 11 required)");
//           setIsGenerating(false);
//           return;
//         }

//         // Try to use selected players first
//         const selectedPlayers = allPlayers.filter(p => p.select);
//         const playersToUse = selectedPlayers.length >= 11 ? selectedPlayers : allPlayers;

//         if (selectedPlayers.length < 11) {
//           setTeamError("Using all available players (not enough selected)");
//         }

//         const scoredPlayers = playersToUse.map(player => ({
//           ...player,
//           score: calculatePlayerScore(player, riskLevel),
//           captainScore: (player.selCapPerc || 0) * (player.selectPerc || 0),
//           vcScore: (player.selVcPerc || 0) * (player.selectPerc || 0)
//         }));

//         const newTeams: GeneratedTeam[] = [];
//         const MAX_ATTEMPTS = teamCount * 20;
//         let attempts = 0;

//         while (newTeams.length < teamCount && attempts < MAX_ATTEMPTS) {
//           attempts++;
//           const team = createBalancedTeam(scoredPlayers);
//           if (team) newTeams.push(team);
//         }

//         if (newTeams.length === 0) {
//           setTeamError("Failed to generate valid teams - try adjusting parameters");
//         }

//         setGeneratedTeams(newTeams);
//         onBalanceUpdate(userBalance - requiredCredits);
//       } catch (error) {
//         setTeamError("Error generating teams");
//         console.error("Error generating teams:", error);
//       } finally {
//         setIsGenerating(false);
//       }
//     }, 100);
//   }, [
//     team1, team2, teamCount, riskLevel,
//     userBalance, needsPayment, requiredCredits,
//     onBalanceUpdate, calculatePlayerScore, createBalancedTeam
//   ]);

//   // Payment dialog
//   const paymentDialog = useMemo(() => (
//     showPaymentDialog ? (
//       <PaymentDialog
//         currentBalance={userBalance}
//         requiredAmount={paymentAmount}
//         onPaymentSuccess={(amount) => {
//           onBalanceUpdate(userBalance + amount);
//           setShowPaymentDialog(false);
//           handleGenerateTeams();
//         }}
//         onOpenChange={setShowPaymentDialog}
//         open={showPaymentDialog}
//       />
//     ) : null
//   ), [showPaymentDialog, userBalance, paymentAmount, onBalanceUpdate, handleGenerateTeams]);

//   // Payment info with status indicators
//   const paymentInfo = useMemo(() => {
//     const nonSubstitutePlayers = [
//       ...(team1?.playerDetails?.filter(p => !p.substitute) || []),
//       ...(team2?.playerDetails?.filter(p => !p.substitute) || [])
//     ];
//     const selectedPlayers = nonSubstitutePlayers.filter(p => p.select);
//     const hasEnoughSelected = selectedPlayers.length >= 11;
//     const hasEnoughPlayers = nonSubstitutePlayers.length >= 11;

//     return (
//       <div className="mt-4 space-y-2">
//         {teamError && (
//           <div className="bg-red-500/20 text-red-600 p-2 rounded text-sm">
//             {teamError}
//           </div>
//         )}
//         {!hasEnoughSelected && hasEnoughPlayers && (
//           <div className="bg-yellow-500/20 text-yellow-600 p-2 rounded text-sm">
//             Warning: Not enough players selected ({selectedPlayers.length}/11)
//           </div>
//         )}

//         <button
//           onClick={handleGenerateTeams}
//           disabled={isGenerating || !team1 || !team2 || !hasEnoughPlayers}
//           className={`
//             w-full px-6 py-3 rounded-lg font-bold transition-colors
//             ${isGenerating ? 'bg-gray-500 cursor-not-allowed' :
//               !team1 || !team2 ? 'bg-gray-500 cursor-not-allowed' :
//               !hasEnoughPlayers ? 'bg-gray-500 cursor-not-allowed' :
//               needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-600 hover:bg-blue-700'}
//             text-white shadow-md
//           `}
//         >
//           {isGenerating ? (
//             <span className="flex items-center justify-center gap-2">
//               <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//               </svg>
//               Generating...
//             </span>
//           ) : !team1 || !team2 ? (
//             "Missing team data"
//           ) : !hasEnoughPlayers ? (
//             "Not enough players"
//           ) : needsPayment ? (
//             `Pay ₹${paymentAmount} to Generate Teams`
//           ) : (
//             `Generate ${teamCount} Teams (₹${requiredCredits})`
//           )}
//         </button>

//         <div className="flex justify-between text-sm">
//           <span>Your balance: ₹{userBalance}</span>
//           {team1 && team2 ? (
//             <span className={needsPayment ? 'text-red-500' : 'text-green-500'}>
//               {needsPayment ? `Need ₹${paymentAmount} more` : 'Sufficient balance'}
//             </span>
//           ) : (
//             <span className="text-red-500">Cannot generate teams</span>
//           )}
//         </div>

//         <div className="flex justify-between text-sm">
//           <span>Available players: {nonSubstitutePlayers.length}</span>
//           <span className={hasEnoughSelected ? 'text-green-500' : 'text-yellow-500'}>
//             Selected: {selectedPlayers.length}/11
//           </span>
//         </div>
//       </div>
//     );
//   }, [
//     isGenerating, needsPayment, paymentAmount, requiredCredits,
//     teamCount, userBalance, handleGenerateTeams, team1, team2,
//     teamError
//   ]);

//   return {
//     generatedTeams,
//     isGenerating,
//     generateTeams: handleGenerateTeams,
//     paymentDialog,
//     paymentInfo,
//     teamError
//   };
// };



// // TeamGenerator.tsx

// "use client";

// import { useState, useCallback, useMemo } from "react";
// import { PaymentDialog } from "./PaymentDialog";
// import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";

// interface TeamGeneratorProps {
//   team1?: Team;
//   team2?: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate?: (newBalance: number) => void;
// }

// export const useTeamGenerator = ({
//   team1,
//   team2,
//   teamCount,
//   riskLevel,
//   userBalance,
//   onBalanceUpdate = () => {}
// }: TeamGeneratorProps) => {
//   // State
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [teamError, setTeamError] = useState<string | null>(null);

//   // Memoized values
//   const requiredCredits = useMemo(() => teamCount * 5, [teamCount]);
//   const needsPayment = useMemo(() => userBalance < requiredCredits, [userBalance, requiredCredits]);
//   const paymentAmount = useMemo(() => requiredCredits - userBalance, [requiredCredits, userBalance]);

//   // Calculate player score
//   const calculatePlayerScore = useCallback((player: PlayerDetail, riskLevel: number) => {
//     const baseScore = player.selectPerc || 0;
//     const roleWeights = [1.4, 1.2, 1.3, 1.1];
//     const roleIndex = (player.roleOrder || 4) - 1;
//     const weightedScore = baseScore * (roleWeights[roleIndex] || 1.0);
//     const riskFactor = 1 + (Math.random() * (100 - riskLevel) / 50);
//     return weightedScore * riskFactor;
//   }, []);

//   // Create balanced team
//   const createBalancedTeam = useCallback((players: PlayerDetail[]) => {
//     if (!team1 || !team2) return null;
    
//     const sortedPlayers = [...players].sort((a, b) => (b.score || 0) - (a.score || 0));
    
//     // Select captain
//     const captainPool = [...sortedPlayers]
//       .sort((a, b) => (b.selCapPerc || 0) - (a.selCapPerc || 0))
//       .slice(0, Math.ceil(sortedPlayers.length * 0.2));
//     if (captainPool.length === 0) return null;
    
//     const captain = captainPool[Math.floor(Math.random() * captainPool.length)];
    
//     // Select vice-captain
//     const vcPool = [...sortedPlayers]
//       .filter(p => p.id !== captain.id)
//       .sort((a, b) => (b.selVcPerc || 0) - (a.selVcPerc || 0))
//       .slice(0, Math.ceil(sortedPlayers.length * 0.2));
//     const viceCaptain = vcPool[Math.floor(Math.random() * vcPool.length)] || captainPool[1];
//     if (!viceCaptain) return null;
    
//     // Initialize team composition
//     const teamComposition = {
//       openers: captain.roleOrder === 1 ? 1 : 0,
//       middleOrder: captain.roleOrder === 2 ? 1 : 0,
//       allRounders: captain.roleOrder === 3 ? 1 : 0,
//       bowlers: captain.roleOrder === 4 ? 1 : 0,
//       team1Count: captain.teamName === team1.name ? 1 : 0,
//       team2Count: captain.teamName === team2.name ? 1 : 0,
//       overseas: [captain, viceCaptain].filter(p => p.isOverseas).length
//     };

//     // Update composition for vice-captain
//     if (viceCaptain.roleOrder === 1) teamComposition.openers++;
//     else if (viceCaptain.roleOrder === 2) teamComposition.middleOrder++;
//     else if (viceCaptain.roleOrder === 3) teamComposition.allRounders++;
//     else if (viceCaptain.roleOrder === 4) teamComposition.bowlers++;
    
//     if (viceCaptain.teamName === team1.name) teamComposition.team1Count++;
//     else if (viceCaptain.teamName === team2.name) teamComposition.team2Count++;

//     const remainingPlayers = sortedPlayers.filter(p =>
//       p.id !== captain.id && p.id !== viceCaptain.id
//     );

//     const teamPlayers: PlayerDetail[] = [captain, viceCaptain];

//     // Fill positions
//     const positions = [
//       { role: 'openers', target: 2, roleOrder: 1 },
//       { role: 'middleOrder', target: 1, roleOrder: 2 },
//       { role: 'allRounders', target: 1, roleOrder: 3 },
//       { role: 'bowlers', target: 3, roleOrder: 4 }
//     ];

//     for (const { role, target, roleOrder } of positions) {
//       while (teamComposition[role] < target && teamPlayers.length < 11) {
//         const candidates = remainingPlayers
//           .filter(p => p.roleOrder === roleOrder)
//           .filter(p => p.isOverseas ? teamComposition.overseas < 4 : true)
//           .filter(p => {
//             const teamCount = p.teamName === team1.name
//               ? teamComposition.team1Count
//               : teamComposition.team2Count;
//             return teamCount < 7;
//           })
//           .filter(p => !teamPlayers.includes(p));

//         if (candidates.length === 0) break;

//         const bestCandidate = candidates.reduce((best, current) =>
//           (current.score || 0) > (best.score || 0) ? current : best
//         );

//         teamPlayers.push(bestCandidate);
//         teamComposition[role]++;
//         if (bestCandidate.isOverseas) teamComposition.overseas++;
//         if (bestCandidate.teamName === team1.name) teamComposition.team1Count++;
//         else teamComposition.team2Count++;
//       }
//     }

//     // Validate team
//     if (teamPlayers.length !== 11) return null;
//     if (teamComposition.overseas > 4) return null;
//     if (teamComposition.team1Count > 7 || teamComposition.team2Count > 7) return null;
//     if (teamComposition.team1Count < 4 || teamComposition.team2Count < 4) return null;

//     return {
//       players: teamPlayers,
//       captain,
//       viceCaptain,
//       teamName: `Team ${generatedTeams.length + 1}`
//     };
//   }, [team1, team2, generatedTeams.length]);

//   // Generate teams handler
//   const handleGenerateTeams = useCallback(() => {
//     if (!team1 || !team2) {
//       setTeamError("Missing team data");
//       return;
//     }

//     if (needsPayment) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     setIsGenerating(true);
//     setTeamError(null);
//     setGeneratedTeams([]);
    
//     setTimeout(() => {
//       try {
//         // Get all non-substitute players
//         const allPlayers = [
//           ...(team1.playerDetails || []).map(p => ({ ...p, teamName: team1.name })),
//           ...(team2.playerDetails || []).map(p => ({ ...p, teamName: team2.name }))
//         ].filter(p => !p.substitute);

//         if (allPlayers.length < 11) {
//           setTeamError("Not enough players to form a team (minimum 11 required)");
//           setIsGenerating(false);
//           return;
//         }

//         // Try to use selected players first
//         const selectedPlayers = allPlayers.filter(p => p.select);
//         const playersToUse = selectedPlayers.length >= 11 ? selectedPlayers : allPlayers;

//         if (selectedPlayers.length < 11) {
//           setTeamError("Using all available players (not enough selected)");
//         }

//         const scoredPlayers = playersToUse.map(player => ({
//           ...player,
//           score: calculatePlayerScore(player, riskLevel),
//           captainScore: (player.selCapPerc || 0) * (player.selectPerc || 0),
//           vcScore: (player.selVcPerc || 0) * (player.selectPerc || 0)
//         }));

//         const newTeams: GeneratedTeam[] = [];
//         const MAX_ATTEMPTS = teamCount * 20;
//         let attempts = 0;

//         while (newTeams.length < teamCount && attempts < MAX_ATTEMPTS) {
//           attempts++;
//           const team = createBalancedTeam(scoredPlayers);
//           if (team) newTeams.push(team);
//         }

//         if (newTeams.length === 0) {
//           setTeamError("Failed to generate valid teams - try adjusting parameters");
//         }

//         setGeneratedTeams(newTeams);
//         onBalanceUpdate(userBalance - requiredCredits);
//       } catch (error) {
//         setTeamError("Error generating teams");
//         console.error("Error generating teams:", error);
//       } finally {
//         setIsGenerating(false);
//       }
//     }, 100);
//   }, [
//     team1, team2, teamCount, riskLevel,
//     userBalance, needsPayment, requiredCredits,
//     onBalanceUpdate, calculatePlayerScore, createBalancedTeam
//   ]);

//   // Payment dialog
//   const paymentDialog = useMemo(() => (
//     showPaymentDialog ? (
//       <PaymentDialog
//         currentBalance={userBalance}
//         requiredAmount={paymentAmount}
//         onPaymentSuccess={(amount) => {
//           onBalanceUpdate(userBalance + amount);
//           setShowPaymentDialog(false);
//           handleGenerateTeams();
//         }}
//         onOpenChange={setShowPaymentDialog}
//         open={showPaymentDialog}
//       />
//     ) : null
//   ), [showPaymentDialog, userBalance, paymentAmount, onBalanceUpdate, handleGenerateTeams]);

//   // Payment info with status indicators
//   const paymentInfo = useMemo(() => {
//     const nonSubstitutePlayers = [
//       ...(team1?.playerDetails?.filter(p => !p.substitute) || []),
//       ...(team2?.playerDetails?.filter(p => !p.substitute) || [])
//     ];
//     const selectedPlayers = nonSubstitutePlayers.filter(p => p.select);
//     const hasEnoughSelected = selectedPlayers.length >= 11;
//     const hasEnoughPlayers = nonSubstitutePlayers.length >= 11;

//     return (
//       <div className="mt-4 space-y-2">
//         {teamError && (
//           <div className="bg-red-500/20 text-red-600 p-2 rounded text-sm">
//             {teamError}
//           </div>
//         )}
//         {!hasEnoughSelected && hasEnoughPlayers && (
//           <div className="bg-yellow-500/20 text-yellow-600 p-2 rounded text-sm">
//             Warning: Not enough players selected ({selectedPlayers.length}/11)
//           </div>
//         )}

//         <button
//           onClick={handleGenerateTeams}
//           disabled={isGenerating || !team1 || !team2 || !hasEnoughPlayers}
//           className={`
//             w-full px-6 py-3 rounded-lg font-bold transition-colors
//             ${isGenerating ? 'bg-gray-500 cursor-not-allowed' :
//               !team1 || !team2 ? 'bg-gray-500 cursor-not-allowed' :
//               !hasEnoughPlayers ? 'bg-gray-500 cursor-not-allowed' :
//               needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-600 hover:bg-blue-700'}
//             text-white shadow-md
//           `}
//         >
//           {isGenerating ? (
//             <span className="flex items-center justify-center gap-2">
//               <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//               </svg>
//               Generating...
//             </span>
//           ) : !team1 || !team2 ? (
//             "Missing team data"
//           ) : !hasEnoughPlayers ? (
//             "Not enough players"
//           ) : needsPayment ? (
//             `Pay ₹${paymentAmount} to Generate Teams`
//           ) : (
//             `Generate ${teamCount} Teams (₹${requiredCredits})`
//           )}
//         </button>

//         <div className="flex justify-between text-sm">
//           <span>Your balance: ₹{userBalance}</span>
//           {team1 && team2 ? (
//             <span className={needsPayment ? 'text-red-500' : 'text-green-500'}>
//               {needsPayment ? `Need ₹${paymentAmount} more` : 'Sufficient balance'}
//             </span>
//           ) : (
//             <span className="text-red-500">Cannot generate teams</span>
//           )}
//         </div>

//         <div className="flex justify-between text-sm">
//           <span>Available players: {nonSubstitutePlayers.length}</span>
//           <span className={hasEnoughSelected ? 'text-green-500' : 'text-yellow-500'}>
//             Selected: {selectedPlayers.length}/11
//           </span>
//         </div>
//       </div>
//     );
//   }, [
//     isGenerating, needsPayment, paymentAmount, requiredCredits,
//     teamCount, userBalance, handleGenerateTeams, team1, team2,
//     teamError
//   ]);

//   return {
//     generatedTeams,
//     isGenerating,
//     generateTeams: handleGenerateTeams,
//     paymentDialog,
//     paymentInfo,
//     teamError
//   };
// };












// // app/components/TeamGenerator


// "use client";

// import { useState, useCallback, useMemo } from "react";
// import { PaymentDialog } from "./PaymentDialog";
// import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";

// interface TeamGeneratorProps {
//   team1?: Team;
//   team2?: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate?: (newBalance: number) => void;
// }

// export const useTeamGenerator = ({
//   team1,
//   team2,
//   teamCount,
//   riskLevel,
//   userBalance,
//   onBalanceUpdate = () => {}
// }: TeamGeneratorProps) => {
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [teamError, setTeamError] = useState<string | null>(null);

//   const requiredCredits = useMemo(() => teamCount * 5, [teamCount]);
//   const needsPayment = useMemo(() => userBalance < requiredCredits, [userBalance, requiredCredits]);
//   const paymentAmount = useMemo(() => requiredCredits - userBalance, [requiredCredits, userBalance]);

//   const calculatePlayerScore = useCallback((player: PlayerDetail, riskLevel: number) => {
//     const baseScore = player.selectPerc || 0;
//     const roleWeights = [1.4, 1.2, 1.3, 1.1];
//     const roleIndex = (player.roleOrder || 4) - 1;
//     const weightedScore = baseScore * (roleWeights[roleIndex] || 1.0);
//     const riskFactor = 1 + (Math.random() * (100 - riskLevel) / 50);
//     return weightedScore * riskFactor;
//   }, []);

//   const createBalancedTeam = useCallback((players: PlayerDetail[]) => {
//     if (!team1 || !team2) return null;
    
//     // Sort players by score
//     const sortedPlayers = [...players].sort((a, b) => (b.score || 0) - (a.score || 0));
    
//     // Select captain from top 30% of players
//     const captainPool = sortedPlayers.slice(0, Math.ceil(sortedPlayers.length * 0.3));
//     if (captainPool.length === 0) return null;
    
//     const captain = captainPool[Math.floor(Math.random() * captainPool.length)];
    
//     // Select vice-captain from remaining players
//     const vcPool = sortedPlayers.filter(p => p.id !== captain.id);
//     const viceCaptain = vcPool[0] || captainPool[1];
//     if (!viceCaptain) return null;
    
//     // Initialize team composition
//     const teamComposition = {
//       openers: 0,
//       middleOrder: 0,
//       allRounders: 0,
//       bowlers: 0,
//       team1Count: 0,
//       team2Count: 0,
//       overseas: 0
//     };

//     // Add captain and vice-captain to team
//     const teamPlayers: PlayerDetail[] = [captain, viceCaptain];
    
//     // Update composition for captain and vice-captain
//     [captain, viceCaptain].forEach(player => {
//       if (player.roleOrder === 1) teamComposition.openers++;
//       else if (player.roleOrder === 2) teamComposition.middleOrder++;
//       else if (player.roleOrder === 3) teamComposition.allRounders++;
//       else if (player.roleOrder === 4) teamComposition.bowlers++;
      
//       if (player.teamName === team1.name) teamComposition.team1Count++;
//       else if (player.teamName === team2.name) teamComposition.team2Count++;
      
//       if (player.isOverseas) teamComposition.overseas++;
//     });

//     const remainingPlayers = sortedPlayers.filter(p =>
//       p.id !== captain.id && p.id !== viceCaptain.id
//     );

//     // Fill remaining positions with more flexible rules
//     while (teamPlayers.length < 11) {
//       // Determine which positions we still need
//       const neededRoles = [];
//       if (teamComposition.openers < 2) neededRoles.push(1);
//       if (teamComposition.middleOrder < 3) neededRoles.push(2);
//       if (teamComposition.allRounders < 2) neededRoles.push(3);
//       if (teamComposition.bowlers < 4) neededRoles.push(4);
      
//       // If we've filled all position requirements, just take best available
//       if (neededRoles.length === 0) {
//         const bestAvailable = remainingPlayers[0];
//         if (!bestAvailable) break;
        
//         teamPlayers.push(bestAvailable);
//         remainingPlayers.splice(0, 1);
        
//         // Update composition
//         if (bestAvailable.roleOrder === 1) teamComposition.openers++;
//         else if (bestAvailable.roleOrder === 2) teamComposition.middleOrder++;
//         else if (bestAvailable.roleOrder === 3) teamComposition.allRounders++;
//         else if (bestAvailable.roleOrder === 4) teamComposition.bowlers++;
        
//         if (bestAvailable.teamName === team1.name) teamComposition.team1Count++;
//         else if (bestAvailable.teamName === team2.name) teamComposition.team2Count++;
        
//         if (bestAvailable.isOverseas) teamComposition.overseas++;
//         continue;
//       }
      
//       // Find best player for needed roles
//       const role = neededRoles[Math.floor(Math.random() * neededRoles.length)];
//       const candidates = remainingPlayers
//         .filter(p => p.roleOrder === role)
//         .filter(p => p.isOverseas ? teamComposition.overseas < 4 : true)
//         .filter(p => {
//           const teamCount = p.teamName === team1.name
//             ? teamComposition.team1Count
//             : teamComposition.team2Count;
//           return teamCount < 7;
//         });

//       if (candidates.length === 0) {
//         // If no candidates for this role, try next role
//         continue;
//       }

//       const bestCandidate = candidates.reduce((best, current) =>
//         (current.score || 0) > (best.score || 0) ? current : best
//       );

//       teamPlayers.push(bestCandidate);
//       remainingPlayers.splice(remainingPlayers.indexOf(bestCandidate), 1);
      
//       // Update composition
//       if (bestCandidate.roleOrder === 1) teamComposition.openers++;
//       else if (bestCandidate.roleOrder === 2) teamComposition.middleOrder++;
//       else if (bestCandidate.roleOrder === 3) teamComposition.allRounders++;
//       else if (bestCandidate.roleOrder === 4) teamComposition.bowlers++;
      
//       if (bestCandidate.teamName === team1.name) teamComposition.team1Count++;
//       else if (bestCandidate.teamName === team2.name) teamComposition.team2Count++;
      
//       if (bestCandidate.isOverseas) teamComposition.overseas++;
//     }

//     // Final validation
//     if (teamPlayers.length !== 11) return null;
//     if (teamComposition.overseas > 4) return null;
//     if (teamComposition.team1Count > 7 || teamComposition.team2Count > 7) return null;
//     if (teamComposition.team1Count < 4 || teamComposition.team2Count < 4) return null;

//     return {
//       players: teamPlayers,
//       captain,
//       viceCaptain,
//       teamName: `Team ${generatedTeams.length + 1}`
//     };
//   }, [team1, team2, generatedTeams.length]);

//   const handleGenerateTeams = useCallback(() => {
//     if (!team1 || !team2) {
//       setTeamError("Missing team data");
//       return;
//     }

//     if (needsPayment) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     setIsGenerating(true);
//     setTeamError(null);
//     setGeneratedTeams([]);
    
//     setTimeout(() => {
//       try {
//         // Get all non-substitute players
//         const allPlayers = [
//           ...(team1.playerDetails || []).map(p => ({
//             ...p,
//             teamName: team1.name,
//             select: p.select !== false // Default to true if not specified
//           })),
//           ...(team2.playerDetails || []).map(p => ({
//             ...p,
//             teamName: team2.name,
//             select: p.select !== false // Default to true if not specified
//           }))
//         ].filter(p => !p.substitute);

//         if (allPlayers.length < 11) {
//           setTeamError(`Not enough players to form a team (${allPlayers.length} available, minimum 11 required)`);
//           setIsGenerating(false);
//           return;
//         }

//         // Calculate scores for all players
//         const scoredPlayers = allPlayers.map(player => ({
//           ...player,
//           score: calculatePlayerScore(player, riskLevel),
//           captainScore: (player.selCapPerc || 0) * (player.selectPerc || 0),
//           vcScore: (player.selVcPerc || 0) * (player.selectPerc || 0)
//         }));

//         const newTeams: GeneratedTeam[] = [];
//         const MAX_ATTEMPTS = teamCount * 10;
//         let attempts = 0;

//         while (newTeams.length < teamCount && attempts < MAX_ATTEMPTS) {
//           attempts++;
//           const team = createBalancedTeam(scoredPlayers);
//           if (team) newTeams.push(team);
//         }

//         if (newTeams.length === 0) {
//           setTeamError("Failed to generate valid teams. Try adjusting risk level or team count.");
//         } else if (newTeams.length < teamCount) {
//           setTeamError(`Only generated ${newTeams.length} of ${teamCount} teams. Try adjusting parameters.`);
//         }

//         setGeneratedTeams(newTeams);
//         onBalanceUpdate(userBalance - requiredCredits);
//       } catch (error) {
//         setTeamError("Error generating teams. Please try again.");
//         console.error("Error generating teams:", error);
//       } finally {
//         setIsGenerating(false);
//       }
//     }, 100);
//   }, [
//     team1, team2, teamCount, riskLevel,
//     userBalance, needsPayment, requiredCredits,
//     onBalanceUpdate, calculatePlayerScore, createBalancedTeam
//   ]);

//   const paymentDialog = useMemo(() => (
//     showPaymentDialog ? (
//       <PaymentDialog
//         currentBalance={userBalance}
//         requiredAmount={paymentAmount}
//         onPaymentSuccess={(amount) => {
//           onBalanceUpdate(userBalance + amount);
//           setShowPaymentDialog(false);
//           handleGenerateTeams();
//         }}
//         onOpenChange={setShowPaymentDialog}
//         open={showPaymentDialog}
//       />
//     ) : null
//   ), [showPaymentDialog, userBalance, paymentAmount, onBalanceUpdate, handleGenerateTeams]);

//   const paymentInfo = useMemo(() => {
//     const nonSubstitutePlayers = [
//       ...(team1?.playerDetails?.filter(p => !p.substitute) || []),
//       ...(team2?.playerDetails?.filter(p => !p.substitute) || [])
//     ];
//     const selectedPlayers = nonSubstitutePlayers.filter(p => p.select !== false);
//     const hasEnoughSelected = selectedPlayers.length >= 11;
//     const hasEnoughPlayers = nonSubstitutePlayers.length >= 11;

//     return (
//       <div className="mt-4 space-y-2">
//         {teamError && (
//           <div className="bg-red-500/20 text-red-600 p-2 rounded text-sm">
//             {teamError}
//           </div>
//         )}
//         {!hasEnoughSelected && hasEnoughPlayers && (
//           <div className="bg-yellow-500/20 text-yellow-600 p-2 rounded text-sm">
//             Using all available players ({nonSubstitutePlayers.length} total)
//           </div>
//         )}

//         <button
//           onClick={handleGenerateTeams}
//           disabled={isGenerating || !team1 || !team2 || !hasEnoughPlayers}
//           className={`
//             w-full px-6 py-3 rounded-lg font-bold transition-colors
//             ${isGenerating ? 'bg-gray-500 cursor-not-allowed' :
//               !team1 || !team2 ? 'bg-gray-500 cursor-not-allowed' :
//               !hasEnoughPlayers ? 'bg-gray-500 cursor-not-allowed' :
//               needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-600 hover:bg-blue-700'}
//             text-white shadow-md
//           `}
//         >
//           {isGenerating ? (
//             <span className="flex items-center justify-center gap-2">
//               <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//               </svg>
//               Generating...
//             </span>
//           ) : !team1 || !team2 ? (
//             "Missing team data"
//           ) : !hasEnoughPlayers ? (
//             `Not enough players (${nonSubstitutePlayers.length}/11)`
//           ) : needsPayment ? (
//             `Pay ₹${paymentAmount} to Generate Teams`
//           ) : (
//             `Generate ${teamCount} Teams (₹${requiredCredits})`
//           )}
//         </button>

//         <div className="flex justify-between text-sm">
//           <span>Your balance: ₹{userBalance}</span>
//           {team1 && team2 ? (
//             <span className={needsPayment ? 'text-red-500' : 'text-green-500'}>
//               {needsPayment ? `Need ₹${paymentAmount} more` : 'Sufficient balance'}
//             </span>
//           ) : (
//             <span className="text-red-500">Cannot generate teams</span>
//           )}
//         </div>

//         <div className="flex justify-between text-sm">
//           <span>Available players: {nonSubstitutePlayers.length}</span>
//           <span className={hasEnoughSelected ? 'text-green-500' : 'text-yellow-500'}>
//             {hasEnoughSelected ? 'Enough players' : 'Using all players'}
//           </span>
//         </div>
//       </div>
//     );
//   }, [
//     isGenerating, needsPayment, paymentAmount, requiredCredits,
//     teamCount, userBalance, handleGenerateTeams, team1, team2,
//     teamError
//   ]);

//   return {
//     generatedTeams,
//     isGenerating,
//     generateTeams: handleGenerateTeams,
//     paymentDialog,
//     paymentInfo,
//     teamError
//   };
// };











// "use client";

// import { useState, useCallback, useMemo } from "react";
// import { PaymentDialog } from "./PaymentDialog";
// import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";
// import { db } from "@/lib/firebase";
// import { doc, updateDoc, increment } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";

// interface TeamGeneratorProps {
//   team1?: Team;
//   team2?: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate?: (newBalance: number) => void;
// }

// export const useTeamGenerator = ({
//   team1,
//   team2,
//   teamCount,
//   riskLevel,
//   userBalance,
//   onBalanceUpdate = () => {}
// }: TeamGeneratorProps) => {
//   const { user } = useUser();
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [teamError, setTeamError] = useState<string | null>(null);

//   const requiredCredits = useMemo(() => teamCount * 5, [teamCount]);
//   const needsPayment = useMemo(() => userBalance < requiredCredits, [userBalance, requiredCredits]);
//   const paymentAmount = useMemo(() => Math.max(requiredCredits - userBalance, 0), [requiredCredits, userBalance]);

//   const calculatePlayerScore = useCallback((player: PlayerDetail, riskLevel: number) => {
//     const baseScore = player.selectPerc || 0;
//     const roleWeights = [1.4, 1.2, 1.3, 1.1];
//     const roleIndex = (player.roleOrder || 4) - 1;
//     const weightedScore = baseScore * (roleWeights[roleIndex] || 1.0);
//     const riskFactor = 1 + (Math.random() * (100 - riskLevel) / 50);
//     return weightedScore * riskFactor;
//   }, []);

//   const debitCredits = async (amount: number) => {
//     if (!user) return false;
    
//     try {
//       const userRef = doc(db, "users", user.id);
//       await updateDoc(userRef, {
//         credits: increment(-amount)
//       });
//       return true;
//     } catch (error) {
//       console.error("Error debiting credits:", error);
//       return false;
//     }
//   };

//   const createBalancedTeam = useCallback((players: PlayerDetail[]) => {
//     if (!team1 || !team2) return null;
    
//     const sortedPlayers = [...players].sort((a, b) => (b.score || 0) - (a.score || 0));
//     const captainPool = sortedPlayers.slice(0, Math.ceil(sortedPlayers.length * 0.3));
//     if (captainPool.length === 0) return null;
    
//     const captain = captainPool[Math.floor(Math.random() * captainPool.length)];
//     const vcPool = sortedPlayers.filter(p => p.id !== captain.id);
//     const viceCaptain = vcPool[0] || captainPool[1];
//     if (!viceCaptain) return null;
    
//     const teamComposition = {
//       openers: 0,
//       middleOrder: 0,
//       allRounders: 0,
//       bowlers: 0,
//       team1Count: 0,
//       team2Count: 0,
//       overseas: 0
//     };

//     const teamPlayers: PlayerDetail[] = [captain, viceCaptain];
    
//     [captain, viceCaptain].forEach(player => {
//       if (player.roleOrder === 1) teamComposition.openers++;
//       else if (player.roleOrder === 2) teamComposition.middleOrder++;
//       else if (player.roleOrder === 3) teamComposition.allRounders++;
//       else if (player.roleOrder === 4) teamComposition.bowlers++;
      
//       if (player.teamName === team1.name) teamComposition.team1Count++;
//       else if (player.teamName === team2.name) teamComposition.team2Count++;
      
//       if (player.isOverseas) teamComposition.overseas++;
//     });

//     const remainingPlayers = sortedPlayers.filter(p => p.id !== captain.id && p.id !== viceCaptain.id);

//     while (teamPlayers.length < 11) {
//       const neededRoles = [];
//       if (teamComposition.openers < 2) neededRoles.push(1);
//       if (teamComposition.middleOrder < 3) neededRoles.push(2);
//       if (teamComposition.allRounders < 2) neededRoles.push(3);
//       if (teamComposition.bowlers < 4) neededRoles.push(4);
      
//       if (neededRoles.length === 0) {
//         const bestAvailable = remainingPlayers[0];
//         if (!bestAvailable) break;
        
//         teamPlayers.push(bestAvailable);
//         remainingPlayers.splice(0, 1);
        
//         if (bestAvailable.roleOrder === 1) teamComposition.openers++;
//         else if (bestAvailable.roleOrder === 2) teamComposition.middleOrder++;
//         else if (bestAvailable.roleOrder === 3) teamComposition.allRounders++;
//         else if (bestAvailable.roleOrder === 4) teamComposition.bowlers++;
        
//         if (bestAvailable.teamName === team1.name) teamComposition.team1Count++;
//         else if (bestAvailable.teamName === team2.name) teamComposition.team2Count++;
        
//         if (bestAvailable.isOverseas) teamComposition.overseas++;
//         continue;
//       }
      
//       const role = neededRoles[Math.floor(Math.random() * neededRoles.length)];
//       const candidates = remainingPlayers
//         .filter(p => p.roleOrder === role)
//         .filter(p => p.isOverseas ? teamComposition.overseas < 4 : true)
//         .filter(p => {
//           const teamCount = p.teamName === team1.name
//             ? teamComposition.team1Count
//             : teamComposition.team2Count;
//           return teamCount < 7;
//         });

//       if (candidates.length === 0) continue;

//       const bestCandidate = candidates.reduce((best, current) =>
//         (current.score || 0) > (best.score || 0) ? current : best
//       );

//       teamPlayers.push(bestCandidate);
//       remainingPlayers.splice(remainingPlayers.indexOf(bestCandidate), 1);
      
//       if (bestCandidate.roleOrder === 1) teamComposition.openers++;
//       else if (bestCandidate.roleOrder === 2) teamComposition.middleOrder++;
//       else if (bestCandidate.roleOrder === 3) teamComposition.allRounders++;
//       else if (bestCandidate.roleOrder === 4) teamComposition.bowlers++;
      
//       if (bestCandidate.teamName === team1.name) teamComposition.team1Count++;
//       else if (bestCandidate.teamName === team2.name) teamComposition.team2Count++;
      
//       if (bestCandidate.isOverseas) teamComposition.overseas++;
//     }

//     if (teamPlayers.length !== 11) return null;
//     if (teamComposition.overseas > 4) return null;
//     if (teamComposition.team1Count > 7 || teamComposition.team2Count > 7) return null;
//     if (teamComposition.team1Count < 4 || teamComposition.team2Count < 4) return null;

//     return {
//       players: teamPlayers,
//       captain,
//       viceCaptain,
//       teamName: `Team ${generatedTeams.length + 1}`
//     };
//   }, [team1, team2, generatedTeams.length]);

//   const handleGenerateTeams = useCallback(async () => {
//     if (!team1 || !team2) {
//       setTeamError("Missing team data");
//       return;
//     }

//     if (!user) {
//       setTeamError("You need to be signed in to generate teams");
//       return;
//     }

//     if (needsPayment) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     setIsGenerating(true);
//     setTeamError(null);
//     setGeneratedTeams([]);
    
//     try {
//       const debitSuccess = await debitCredits(requiredCredits);
//       if (!debitSuccess) {
//         throw new Error("Failed to debit credits");
//       }

//       const allPlayers = [
//         ...(team1.playerDetails || []).map(p => ({
//           ...p,
//           teamName: team1.name,
//           select: p.select !== false
//         })),
//         ...(team2.playerDetails || []).map(p => ({
//           ...p,
//           teamName: team2.name,
//           select: p.select !== false
//         }))
//       ].filter(p => !p.substitute);

//       if (allPlayers.length < 11) {
//         setTeamError(`Not enough players to form a team (${allPlayers.length} available, minimum 11 required)`);
//         setIsGenerating(false);
//         return;
//       }

//       const scoredPlayers = allPlayers.map(player => ({
//         ...player,
//         score: calculatePlayerScore(player, riskLevel),
//         captainScore: (player.selCapPerc || 0) * (player.selectPerc || 0),
//         vcScore: (player.selVcPerc || 0) * (player.selectPerc || 0)
//       }));

//       const newTeams: GeneratedTeam[] = [];
//       const MAX_ATTEMPTS = teamCount * 10;
//       let attempts = 0;

//       while (newTeams.length < teamCount && attempts < MAX_ATTEMPTS) {
//         attempts++;
//         const team = createBalancedTeam(scoredPlayers);
//         if (team) newTeams.push(team);
//       }

//       if (newTeams.length === 0) {
//         setTeamError("Failed to generate valid teams. Try adjusting risk level or team count.");
//       } else if (newTeams.length < teamCount) {
//         setTeamError(`Only generated ${newTeams.length} of ${teamCount} teams. Try adjusting parameters.`);
//       }

//       setGeneratedTeams(newTeams);
//       onBalanceUpdate(userBalance - requiredCredits);
//     } catch (error) {
//       setTeamError("Error generating teams. Please try again.");
//       console.error("Error generating teams:", error);
//     } finally {
//       setIsGenerating(false);
//     }
//   }, [
//     team1, team2, teamCount, riskLevel,
//     userBalance, needsPayment, requiredCredits,
//     onBalanceUpdate, user, calculatePlayerScore, createBalancedTeam
//   ]);

//   const paymentDialog = useMemo(() => (
//     showPaymentDialog ? (
//       <PaymentDialog
//         currentBalance={userBalance}
//         requiredAmount={paymentAmount}
//         onPaymentSuccess={(amount) => {
//           onBalanceUpdate(userBalance + amount);
//           setShowPaymentDialog(false);
//           handleGenerateTeams();
//         }}
//         onOpenChange={setShowPaymentDialog}
//         open={showPaymentDialog}
//       />
//     ) : null
//   ), [showPaymentDialog, userBalance, paymentAmount, onBalanceUpdate, handleGenerateTeams]);

//   const paymentInfo = useMemo(() => {
//     const nonSubstitutePlayers = [
//       ...(team1?.playerDetails?.filter(p => !p.substitute) || []),
//       ...(team2?.playerDetails?.filter(p => !p.substitute) || [])
//     ];
//     const selectedPlayers = nonSubstitutePlayers.filter(p => p.select !== false);
//     const hasEnoughSelected = selectedPlayers.length >= 11;
//     const hasEnoughPlayers = nonSubstitutePlayers.length >= 11;

//     return (
//       <div className="mt-4 space-y-2">
//         {teamError && (
//           <div className="bg-red-500/20 text-red-600 p-2 rounded text-sm">
//             {teamError}
//           </div>
//         )}
//         {!hasEnoughSelected && hasEnoughPlayers && (
//           <div className="bg-yellow-500/20 text-yellow-600 p-2 rounded text-sm">
//             Using all available players ({nonSubstitutePlayers.length} total)
//           </div>
//         )}

//         <button
//           onClick={handleGenerateTeams}
//           disabled={isGenerating || !team1 || !team2 || !hasEnoughPlayers}
//           className={`
//             w-full px-6 py-3 rounded-lg font-bold transition-colors
//             ${isGenerating ? 'bg-gray-500 cursor-not-allowed' :
//               !team1 || !team2 ? 'bg-gray-500 cursor-not-allowed' :
//               !hasEnoughPlayers ? 'bg-gray-500 cursor-not-allowed' :
//               needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-600 hover:bg-blue-700'}
//             text-white shadow-md
//           `}
//         >
//           {isGenerating ? (
//             <span className="flex items-center justify-center gap-2">
//               <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//               </svg>
//               Generating...
//             </span>
//           ) : !team1 || !team2 ? (
//             "Missing team data"
//           ) : !hasEnoughPlayers ? (
//             `Not enough players (${nonSubstitutePlayers.length}/11)`
//           ) : needsPayment ? (
//             `Add ₹${paymentAmount} to Generate Teams`
//           ) : (
//             `Generate ${teamCount} Teams (₹${requiredCredits})`
//           )}
//         </button>

//         <div className="flex justify-between text-sm">
//           <span>Your balance: ₹{userBalance}</span>
//           {team1 && team2 ? (
//             <span className={needsPayment ? 'text-red-500' : 'text-green-500'}>
//               {needsPayment ? `Need ₹${paymentAmount} more` : 'Sufficient balance'}
//             </span>
//           ) : (
//             <span className="text-red-500">Cannot generate teams</span>
//           )}
//         </div>

//         <div className="flex justify-between text-sm">
//           <span>Available players: {nonSubstitutePlayers.length}</span>
//           <span className={hasEnoughSelected ? 'text-green-500' : 'text-yellow-500'}>
//             {hasEnoughSelected ? 'Enough players' : 'Using all players'}
//           </span>
//         </div>
//       </div>
//     );
//   }, [
//     isGenerating, needsPayment, paymentAmount, requiredCredits,
//     teamCount, userBalance, handleGenerateTeams, team1, team2,
//     teamError
//   ]);

//   return {
//     generatedTeams,
//     isGenerating,
//     generateTeams: handleGenerateTeams,
//     paymentDialog,
//     paymentInfo,
//     teamError
//   };
// };









// //app/components/TeamGenerator.tsx
// "use client";

// import { useState, useCallback, useMemo } from "react";
// import { PaymentDialog } from "./PaymentDialog";
// import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";
// import { db } from "@/lib/firebase";
// import { doc, runTransaction } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";

// interface TeamGeneratorProps {
//   team1?: Team;
//   team2?: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate: (newBalance: number) => void;
// }

// export const useTeamGenerator = ({
//   team1,
//   team2,
//   teamCount,
//   riskLevel,
//   userBalance,
//   onBalanceUpdate
// }: TeamGeneratorProps) => {
//   const { user } = useUser();
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [teamError, setTeamError] = useState<string | null>(null);

//   const requiredCredits = useMemo(() => teamCount * 5, [teamCount]);
//   const needsPayment = useMemo(() => userBalance < requiredCredits, [userBalance, requiredCredits]);
//   const paymentAmount = useMemo(() => Math.max(requiredCredits - userBalance, 0), [requiredCredits, userBalance]);

//   const calculatePlayerScore = (player: PlayerDetail, riskLevel: number) => {
//     const baseScore = player.selectPerc || 0;
//     const roleWeights = [1.4, 1.2, 1.3, 1.1];
//     const roleIndex = (player.roleOrder || 4) - 1;
//     const weightedScore = baseScore * (roleWeights[roleIndex] || 1.0);
//     const riskFactor = 1 + (Math.random() * (100 - riskLevel) / 50);
//     return weightedScore * riskFactor;
//   };

//   const createBalancedTeam = (players: PlayerDetail[]) => {
//     if (!team1 || !team2) return null;
    
//     const sortedPlayers = [...players].sort((a, b) => (b.score || 0) - (a.score || 0));
//     const captainPool = sortedPlayers.slice(0, Math.ceil(sortedPlayers.length * 0.3));
//     if (captainPool.length === 0) return null;
    
//     const captain = captainPool[Math.floor(Math.random() * captainPool.length)];
//     const vcPool = sortedPlayers.filter(p => p.id !== captain.id);
//     const viceCaptain = vcPool[0] || captainPool[1];
//     if (!viceCaptain) return null;
    
//     const teamComposition = {
//       openers: 0,
//       middleOrder: 0,
//       allRounders: 0,
//       bowlers: 0,
//       team1Count: 0,
//       team2Count: 0,
//       overseas: 0
//     };

//     const teamPlayers: PlayerDetail[] = [captain, viceCaptain];
    
//     [captain, viceCaptain].forEach(player => {
//       if (player.roleOrder === 1) teamComposition.openers++;
//       else if (player.roleOrder === 2) teamComposition.middleOrder++;
//       else if (player.roleOrder === 3) teamComposition.allRounders++;
//       else if (player.roleOrder === 4) teamComposition.bowlers++;
      
//       if (player.teamName === team1.name) teamComposition.team1Count++;
//       else if (player.teamName === team2.name) teamComposition.team2Count++;
      
//       if (player.isOverseas) teamComposition.overseas++;
//     });

//     const remainingPlayers = sortedPlayers.filter(p => p.id !== captain.id && p.id !== viceCaptain.id);

//     while (teamPlayers.length < 11) {
//       const neededRoles = [];
//       if (teamComposition.openers < 2) neededRoles.push(1);
//       if (teamComposition.middleOrder < 3) neededRoles.push(2);
//       if (teamComposition.allRounders < 2) neededRoles.push(3);
//       if (teamComposition.bowlers < 4) neededRoles.push(4);
      
//       if (neededRoles.length === 0) {
//         const bestAvailable = remainingPlayers[0];
//         if (!bestAvailable) break;
        
//         teamPlayers.push(bestAvailable);
//         remainingPlayers.splice(0, 1);
        
//         if (bestAvailable.roleOrder === 1) teamComposition.openers++;
//         else if (bestAvailable.roleOrder === 2) teamComposition.middleOrder++;
//         else if (bestAvailable.roleOrder === 3) teamComposition.allRounders++;
//         else if (bestAvailable.roleOrder === 4) teamComposition.bowlers++;
        
//         if (bestAvailable.teamName === team1.name) teamComposition.team1Count++;
//         else if (bestAvailable.teamName === team2.name) teamComposition.team2Count++;
        
//         if (bestAvailable.isOverseas) teamComposition.overseas++;
//         continue;
//       }
      
//       const role = neededRoles[Math.floor(Math.random() * neededRoles.length)];
//       const candidates = remainingPlayers
//         .filter(p => p.roleOrder === role)
//         .filter(p => p.isOverseas ? teamComposition.overseas < 4 : true)
//         .filter(p => {
//           const teamCount = p.teamName === team1.name
//             ? teamComposition.team1Count
//             : teamComposition.team2Count;
//           return teamCount < 7;
//         });

//       if (candidates.length === 0) continue;

//       const bestCandidate = candidates.reduce((best, current) =>
//         (current.score || 0) > (best.score || 0) ? current : best
//       );

//       teamPlayers.push(bestCandidate);
//       remainingPlayers.splice(remainingPlayers.indexOf(bestCandidate), 1);
      
//       if (bestCandidate.roleOrder === 1) teamComposition.openers++;
//       else if (bestCandidate.roleOrder === 2) teamComposition.middleOrder++;
//       else if (bestCandidate.roleOrder === 3) teamComposition.allRounders++;
//       else if (bestCandidate.roleOrder === 4) teamComposition.bowlers++;
      
//       if (bestCandidate.teamName === team1.name) teamComposition.team1Count++;
//       else if (bestCandidate.teamName === team2.name) teamComposition.team2Count++;
      
//       if (bestCandidate.isOverseas) teamComposition.overseas++;
//     }

//     if (teamPlayers.length !== 11) return null;
//     if (teamComposition.overseas > 4) return null;
//     if (teamComposition.team1Count > 7 || teamComposition.team2Count > 7) return null;
//     if (teamComposition.team1Count < 4 || teamComposition.team2Count < 4) return null;

//     return {
//       players: teamPlayers,
//       captain,
//       viceCaptain,
//       teamName: `Team ${generatedTeams.length + 1}`
//     };
//   };

//   const handleGenerateTeams = useCallback(async () => {
//     if (!team1 || !team2) {
//       setTeamError("Missing team data");
//       return;
//     }

//     if (!user) {
//       setTeamError("You need to be signed in to generate teams");
//       return;
//     }

//     if (userBalance < requiredCredits) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     setIsGenerating(true);
//     setTeamError(null);
    
//     try {
//       // First verify and deduct credits
//       await runTransaction(db, async (transaction) => {
//         const userRef = doc(db, "users", user.id);
//         const userDoc = await transaction.get(userRef);
        
//         if (!userDoc.exists()) {
//           throw new Error("User document not found");
//         }
        
//         const currentBalance = userDoc.data().credits || 0;
//         if (currentBalance < requiredCredits) {
//           throw new Error("Insufficient balance");
//         }
        
//         transaction.update(userRef, {
//           credits: increment(-requiredCredits)
//         });
//       });

//       // Then generate teams
//       const allPlayers = [
//         ...(team1.playerDetails || []).map(p => ({
//           ...p,
//           teamName: team1.name,
//           select: p.select !== false
//         })),
//         ...(team2.playerDetails || []).map(p => ({
//           ...p,
//           teamName: team2.name,
//           select: p.select !== false
//         }))
//       ].filter(p => !p.substitute);

//       if (allPlayers.length < 11) {
//         throw new Error(`Not enough players (${allPlayers.length}/11)`);
//       }

//       const scoredPlayers = allPlayers.map(player => ({
//         ...player,
//         score: calculatePlayerScore(player, riskLevel),
//         captainScore: (player.selCapPerc || 0) * (player.selectPerc || 0),
//         vcScore: (player.selVcPerc || 0) * (player.selectPerc || 0)
//       }));

//       const newTeams: GeneratedTeam[] = [];
//       const MAX_ATTEMPTS = teamCount * 10;
//       let attempts = 0;

//       while (newTeams.length < teamCount && attempts < MAX_ATTEMPTS) {
//         attempts++;
//         const team = createBalancedTeam(scoredPlayers);
//         if (team) newTeams.push(team);
//       }

//       if (newTeams.length === 0) {
//         throw new Error("Failed to generate valid teams");
//       }

//       setGeneratedTeams(newTeams);
//       onBalanceUpdate(userBalance - requiredCredits);
//     } catch (error) {
//       setTeamError(error instanceof Error ? error.message : "Failed to generate teams");
//     } finally {
//       setIsGenerating(false);
//     }
//   }, [team1, team2, teamCount, riskLevel, userBalance, requiredCredits, user, onBalanceUpdate]);

//   const paymentDialog = showPaymentDialog && (
//     <PaymentDialog
//       currentBalance={userBalance}
//       requiredAmount={paymentAmount}
//       onPaymentSuccess={(amount) => {
//         onBalanceUpdate(userBalance + amount);
//         setShowPaymentDialog(false);
//         handleGenerateTeams();
//       }}
//       onOpenChange={setShowPaymentDialog}
//       open={showPaymentDialog}
//     />
//   );

//   const paymentInfo = (
//     <div className="mt-4 space-y-2">
//       {teamError && (
//         <div className="bg-red-500/20 text-red-600 p-2 rounded text-sm">
//           {teamError}
//         </div>
//       )}

//       <button
//         onClick={handleGenerateTeams}
//         disabled={isGenerating || !team1 || !team2}
//         className={`
//           w-full px-6 py-3 rounded-lg font-bold transition-colors
//           ${isGenerating ? 'bg-gray-500 cursor-not-allowed' :
//             !team1 || !team2 ? 'bg-gray-500 cursor-not-allowed' :
//             needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-600 hover:bg-blue-700'}
//           text-white shadow-md
//         `}
//       >
//         {isGenerating ? (
//           <span className="flex items-center justify-center gap-2">
//             <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//             Generating...
//           </span>
//         ) : !team1 || !team2 ? (
//           "Missing team data"
//         ) : needsPayment ? (
//           `Add ₹${paymentAmount} to Generate Teams`
//         ) : (
//           `Generate ${teamCount} Teams (₹${requiredCredits})`
//         )}
//       </button>

//       <div className="flex justify-between text-sm">
//         <span>Your balance: ₹{userBalance}</span>
//         <span className={needsPayment ? 'text-red-500' : 'text-green-500'}>
//           {needsPayment ? `Need ₹${paymentAmount} more` : 'Sufficient balance'}
//         </span>
//       </div>
//     </div>
//   );

//   return {
//     generatedTeams,
//     isGenerating,
//     generateTeams: handleGenerateTeams,
//     paymentDialog,
//     paymentInfo,
//     teamError
//   };
// };








// // app/components/TeamGenerator.tsx


// "use client";

// import { useState, useCallback, useMemo } from "react";
// import { PaymentDialog } from "./PaymentDialog";
// import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";
// import { db } from "@/lib/firebase";
// import { doc, runTransaction, increment } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";

// interface TeamGeneratorProps {
//   team1?: Team;
//   team2?: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate: (newBalance: number) => void;
// }

// export const useTeamGenerator = ({
//   team1,
//   team2,
//   teamCount,
//   riskLevel,
//   userBalance,
//   onBalanceUpdate
// }: TeamGeneratorProps) => {
//   const { user } = useUser();
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const requiredCredits = useMemo(() => teamCount * 5, [teamCount]);
//   const needsPayment = useMemo(() => userBalance < requiredCredits, [userBalance, requiredCredits]);
//   const paymentAmount = useMemo(() => Math.max(requiredCredits - userBalance, 50), [requiredCredits, userBalance]);

//   const calculatePlayerScore = (player: PlayerDetail, riskLevel: number) => {
//     const baseScore = player.selectPerc || 0;
//     const roleWeights = [1.4, 1.2, 1.3, 1.1];
//     const roleIndex = (player.roleOrder || 4) - 1;
//     const weightedScore = baseScore * (roleWeights[roleIndex] || 1.0);
//     const riskFactor = 1 + (Math.random() * (100 - riskLevel) / 50);
//     return weightedScore * riskFactor;
//   };

//   const createBalancedTeam = useCallback((players: PlayerDetail[]) => {
//     if (!team1 || !team2) return null;
    
//     const sortedPlayers = [...players].sort((a, b) => (b.score || 0) - (a.score || 0));
//     const captainPool = sortedPlayers.slice(0, Math.ceil(sortedPlayers.length * 0.3));
//     if (captainPool.length === 0) return null;
    
//     const captain = captainPool[Math.floor(Math.random() * captainPool.length)];
//     const vcPool = sortedPlayers.filter(p => p.id !== captain.id);
//     const viceCaptain = vcPool[0] || captainPool[1];
//     if (!viceCaptain) return null;
    
//     const teamComposition = {
//       openers: 0,
//       middleOrder: 0,
//       allRounders: 0,
//       bowlers: 0,
//       team1Count: 0,
//       team2Count: 0,
//       overseas: 0
//     };

//     const teamPlayers: PlayerDetail[] = [captain, viceCaptain];
    
//     [captain, viceCaptain].forEach(player => {
//       if (player.roleOrder === 1) teamComposition.openers++;
//       else if (player.roleOrder === 2) teamComposition.middleOrder++;
//       else if (player.roleOrder === 3) teamComposition.allRounders++;
//       else if (player.roleOrder === 4) teamComposition.bowlers++;
      
//       if (player.teamName === team1.name) teamComposition.team1Count++;
//       else if (player.teamName === team2.name) teamComposition.team2Count++;
      
//       if (player.isOverseas) teamComposition.overseas++;
//     });

//     const remainingPlayers = sortedPlayers.filter(p => p.id !== captain.id && p.id !== viceCaptain.id);

//     while (teamPlayers.length < 11) {
//       const neededRoles = [];
//       if (teamComposition.openers < 2) neededRoles.push(1);
//       if (teamComposition.middleOrder < 3) neededRoles.push(2);
//       if (teamComposition.allRounders < 2) neededRoles.push(3);
//       if (teamComposition.bowlers < 4) neededRoles.push(4);
      
//       if (neededRoles.length === 0) {
//         const bestAvailable = remainingPlayers[0];
//         if (!bestAvailable) break;
        
//         teamPlayers.push(bestAvailable);
//         remainingPlayers.splice(0, 1);
        
//         if (bestAvailable.roleOrder === 1) teamComposition.openers++;
//         else if (bestAvailable.roleOrder === 2) teamComposition.middleOrder++;
//         else if (bestAvailable.roleOrder === 3) teamComposition.allRounders++;
//         else if (bestAvailable.roleOrder === 4) teamComposition.bowlers++;
        
//         if (bestAvailable.teamName === team1.name) teamComposition.team1Count++;
//         else if (bestAvailable.teamName === team2.name) teamComposition.team2Count++;
        
//         if (bestAvailable.isOverseas) teamComposition.overseas++;
//         continue;
//       }
      
//       const role = neededRoles[Math.floor(Math.random() * neededRoles.length)];
//       const candidates = remainingPlayers
//         .filter(p => p.roleOrder === role)
//         .filter(p => p.isOverseas ? teamComposition.overseas < 4 : true)
//         .filter(p => {
//           const teamCount = p.teamName === team1.name
//             ? teamComposition.team1Count
//             : teamComposition.team2Count;
//           return teamCount < 7;
//         });

//       if (candidates.length === 0) continue;

//       const bestCandidate = candidates.reduce((best, current) =>
//         (current.score || 0) > (best.score || 0) ? current : best
//       );

//       teamPlayers.push(bestCandidate);
//       remainingPlayers.splice(remainingPlayers.indexOf(bestCandidate), 1);
      
//       if (bestCandidate.roleOrder === 1) teamComposition.openers++;
//       else if (bestCandidate.roleOrder === 2) teamComposition.middleOrder++;
//       else if (bestCandidate.roleOrder === 3) teamComposition.allRounders++;
//       else if (bestCandidate.roleOrder === 4) teamComposition.bowlers++;
      
//       if (bestCandidate.teamName === team1.name) teamComposition.team1Count++;
//       else if (bestCandidate.teamName === team2.name) teamComposition.team2Count++;
      
//       if (bestCandidate.isOverseas) teamComposition.overseas++;
//     }

//     if (teamPlayers.length !== 11) return null;
//     if (teamComposition.overseas > 4) return null;
//     if (teamComposition.team1Count > 7 || teamComposition.team2Count > 7) return null;
//     if (teamComposition.team1Count < 4 || teamComposition.team2Count < 4) return null;

//     return {
//       players: teamPlayers,
//       captain,
//       viceCaptain,
//       teamName: `Team ${generatedTeams.length + 1}`
//     };
//   }, [team1, team2, generatedTeams.length]);

//   const handleGenerateTeams = useCallback(async () => {
//     if (!team1 || !team2) {
//       setError("Select both teams first");
//       return;
//     }

//     if (!user) {
//       setError("Please sign in");
//       return;
//     }

//     if (needsPayment) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     setIsGenerating(true);
//     setError(null);

//     try {
//       await runTransaction(db, async (transaction) => {
//         const userRef = doc(db, "users", user.id);
//         const userDoc = await transaction.get(userRef);
        
//         if (!userDoc.exists()) throw new Error("User not found");
//         if ((userDoc.data().credits || 0) < requiredCredits) {
//           throw new Error("Insufficient balance");
//         }
        
//         transaction.update(userRef, {
//           credits: increment(-requiredCredits)
//         });
//       });

//       const allPlayers = [
//         ...(team1.playerDetails || []).map(p => ({
//           ...p,
//           teamName: team1.name,
//           select: p.select !== false
//         })),
//         ...(team2.playerDetails || []).map(p => ({
//           ...p,
//           teamName: team2.name,
//           select: p.select !== false
//         }))
//       ].filter(p => !p.substitute);

//       if (allPlayers.length < 11) {
//         throw new Error(`Not enough players (${allPlayers.length}/11)`);
//       }

//       const scoredPlayers = allPlayers.map(player => ({
//         ...player,
//         score: calculatePlayerScore(player, riskLevel),
//         captainScore: (player.selCapPerc || 0) * (player.selectPerc || 0),
//         vcScore: (player.selVcPerc || 0) * (player.selectPerc || 0)
//       }));

//       const newTeams: GeneratedTeam[] = [];
//       const MAX_ATTEMPTS = teamCount * 10;
//       let attempts = 0;

//       while (newTeams.length < teamCount && attempts < MAX_ATTEMPTS) {
//         attempts++;
//         const team = createBalancedTeam(scoredPlayers);
//         if (team) newTeams.push(team);
//       }

//       if (newTeams.length === 0) {
//         throw new Error("Failed to generate valid teams");
//       }

//       setGeneratedTeams(newTeams);
//       onBalanceUpdate(userBalance - requiredCredits);
//     } catch (err: any) {
//       setError(err.message || "Failed to generate teams");
//     } finally {
//       setIsGenerating(false);
//     }
//   }, [team1, team2, teamCount, riskLevel, user, userBalance, requiredCredits, needsPayment, onBalanceUpdate, createBalancedTeam]);

//   const paymentDialog = showPaymentDialog && (
//     <PaymentDialog
//       currentBalance={userBalance}
//       requiredAmount={paymentAmount}
//       onPaymentSuccess={(amount) => {
//         onBalanceUpdate(userBalance + amount);
//         setShowPaymentDialog(false);
//         handleGenerateTeams();
//       }}
//       onOpenChange={setShowPaymentDialog}
//       open={showPaymentDialog}
//     />
//   );

//   const generateButton = (
//     <div className="space-y-2">
//       <button
//         onClick={handleGenerateTeams}
//         disabled={isGenerating || !team1 || !team2}
//         className={`
//           w-full px-4 py-3 rounded-md font-bold
//           ${isGenerating ? 'bg-gray-500' :
//            needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' :
//            'bg-blue-500 hover:bg-blue-600'}
//           text-white transition-colors
//         `}
//       >
//         {isGenerating ? (
//           <span className="flex items-center justify-center gap-2">
//             <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//             Generating...
//           </span>
//         ) : !team1 || !team2 ? (
//           "Select both teams"
//         ) : needsPayment ? (
//           `Add ₹${paymentAmount} to Generate`
//         ) : (
//           `Generate ${teamCount} Teams (₹${requiredCredits})`
//         )}
//       </button>

//       <div className="flex justify-between text-sm">
//         <span>Your Credits: ₹{userBalance}</span>
//         {needsPayment ? (
//           <span className="text-yellow-500">Need ₹{paymentAmount} more</span>
//         ) : (
//           <span className="text-green-500">Sufficient balance</span>
//         )}
//       </div>

//       {error && <div className="text-red-500 text-sm">{error}</div>}
//     </div>
//   );

//   return {
//     generatedTeams,
//     isGenerating,
//     generateButton,
//     paymentDialog,
//     error
//   };
// };








// // app/components/TeamGenerator.tsx
// "use client";

// import { useState, useCallback, useMemo } from "react";
// import { PaymentDialog } from "./PaymentDialog";
// import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";
// import { db } from "@/lib/firebase";
// import { doc, runTransaction, increment, setDoc, collection } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";

// interface TeamGeneratorProps {
//   team1?: Team;
//   team2?: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate: (newBalance: number) => void;
// }

// export const useTeamGenerator = ({
//   team1,
//   team2,
//   teamCount,
//   riskLevel,
//   userBalance,
//   onBalanceUpdate
// }: TeamGeneratorProps) => {
//   const { user } = useUser();
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const requiredCredits = useMemo(() => teamCount * 5, [teamCount]);
//   const needsPayment = useMemo(() => userBalance < requiredCredits, [userBalance, requiredCredits]);
//   const paymentAmount = useMemo(() => Math.max(requiredCredits - userBalance, 50), [requiredCredits, userBalance]);

//   const calculatePlayerScore = (player: PlayerDetail, riskLevel: number) => {
//     const baseScore = player.selectPerc || 0;
//     const roleWeights = {
//       'WK-Batsman': 1.5,
//       'Batsman': 1.3,
//       'All-Rounder': 1.4,
//       'Bowler': 1.2
//     };
    
//     // Adjust weights based on risk level
//     const riskFactor = riskLevel / 100;
//     const weightedScore = baseScore * (roleWeights[player.role] || 1.0);
    
//     // For low risk, favor higher selected players more
//     if (riskLevel < 40) {
//       return weightedScore * (1 + (baseScore / 100));
//     }
//     // For medium risk, add some randomness but still favor selected players
//     else if (riskLevel < 70) {
//       return weightedScore * (0.9 + (Math.random() * 0.3));
//     }
//     // For high risk, more randomness and chance for lower selected players
//     else {
//       return weightedScore * (0.7 + (Math.random() * 0.6));
//     }
//   };

//   const createBalancedTeam = useCallback((players: PlayerDetail[]) => {
//     if (!team1 || !team2) return null;
    
//     // Get team short names
//     const team1Short = team1.shortName || team1.name.split(' ').map(n => n[0]).join('');
//     const team2Short = team2.shortName || team2.name.split(' ').map(n => n[0]).join('');
    
//     // First filter out substitutes and non-selected players
//     const availablePlayers = players.filter(p => !p.substitute && p.select !== false);
    
//     // Sort by calculated score
//     const sortedPlayers = [...availablePlayers].sort((a, b) => (b.score || 0) - (a.score || 0));
    
//     // Select captain and vice-captain based on risk level
//     let captainPool, viceCaptainPool;
    
//     if (riskLevel < 40) { // Low risk - top 20% players
//       captainPool = sortedPlayers.slice(0, Math.ceil(sortedPlayers.length * 0.2));
//       viceCaptainPool = sortedPlayers.slice(0, Math.ceil(sortedPlayers.length * 0.3));
//     } else if (riskLevel < 70) { // Medium risk - top 40% players
//       captainPool = sortedPlayers.slice(0, Math.ceil(sortedPlayers.length * 0.4));
//       viceCaptainPool = sortedPlayers.slice(0, Math.ceil(sortedPlayers.length * 0.6));
//     } else { // High risk - any player can be captain
//       captainPool = sortedPlayers;
//       viceCaptainPool = sortedPlayers;
//     }
    
//     if (captainPool.length === 0) return null;
    
//     const captain = captainPool[Math.floor(Math.random() * captainPool.length)];
//     const vcPool = viceCaptainPool.filter(p => p.id !== captain.id);
//     const viceCaptain = vcPool[Math.floor(Math.random() * vcPool.length)] || captainPool[1];
//     if (!viceCaptain) return null;
    
//     const teamComposition = {
//       'WK-Batsman': 0,
//       'Batsman': 0,
//       'All-Rounder': 0,
//       'Bowler': 0,
//       [team1Short]: 0,
//       [team2Short]: 0,
//       overseas: 0
//     };

//     const teamPlayers: PlayerDetail[] = [captain, viceCaptain];
    
//     // Update composition with captain and vice-captain
//     [captain, viceCaptain].forEach(player => {
//       teamComposition[player.role]++;
      
//       if (player.teamName === team1.name) teamComposition[team1Short]++;
//       else if (player.teamName === team2.name) teamComposition[team2Short]++;
      
//       if (player.isOverseas) teamComposition.overseas++;
//     });

//     const remainingPlayers = sortedPlayers.filter(p =>
//       p.id !== captain.id && p.id !== viceCaptain.id
//     );

//     // Function to get needed roles based on current composition
//     const getNeededRoles = () => {
//       const needed = [];
//       if (teamComposition['WK-Batsman'] < 1) needed.push('WK-Batsman');
//       if (teamComposition['Batsman'] < 3) needed.push('Batsman');
//       if (teamComposition['All-Rounder'] < 2) needed.push('All-Rounder');
//       if (teamComposition['Bowler'] < 3) needed.push('Bowler');
//       return needed.length > 0 ? needed : ['Batsman', 'All-Rounder', 'Bowler'];
//     };

//     while (teamPlayers.length < 11) {
//       const neededRoles = getNeededRoles();
      
//       // Filter players based on risk level
//       let candidates = remainingPlayers.filter(p => {
//         // For low risk, prefer higher selected percentage players
//         if (riskLevel < 40) return (p.selectPerc || 0) > 30;
//         // For medium risk, allow some lower selected players
//         if (riskLevel < 70) return (p.selectPerc || 0) > 15;
//         // For high risk, any player is allowed
//         return true;
//       });
      
//       // Filter by needed roles
//       candidates = candidates.filter(p => neededRoles.includes(p.role));
      
//       // Filter by team balance (4-7 players from each team)
//       candidates = candidates.filter(p => {
//         const team = p.teamName === team1.name ? team1Short : team2Short;
//         return teamComposition[team] < 7;
//       });
      
//       // Filter by overseas limit
//       candidates = candidates.filter(p =>
//         p.isOverseas ? teamComposition.overseas < 4 : true
//       );
      
//       if (candidates.length === 0) {
//         // If no candidates found, relax some constraints
//         candidates = remainingPlayers.filter(p => neededRoles.includes(p.role));
//         if (candidates.length === 0) break;
//       }
      
//       // Select player based on risk level
//       let selectedPlayer;
//       if (riskLevel < 40) {
//         // Low risk - pick highest selected percentage
//         selectedPlayer = candidates.reduce((best, current) =>
//           (current.selectPerc || 0) > (best.selectPerc || 0) ? current : best
//         );
//       } else if (riskLevel < 70) {
//         // Medium risk - weighted random from top 50%
//         const topHalf = candidates.slice(0, Math.ceil(candidates.length * 0.5));
//         selectedPlayer = topHalf[Math.floor(Math.random() * topHalf.length)];
//       } else {
//         // High risk - completely random
//         selectedPlayer = candidates[Math.floor(Math.random() * candidates.length)];
//       }
      
//       if (!selectedPlayer) break;
      
//       teamPlayers.push(selectedPlayer);
//       remainingPlayers.splice(remainingPlayers.indexOf(selectedPlayer), 1);
      
//       // Update composition
//       teamComposition[selectedPlayer.role]++;
//       if (selectedPlayer.teamName === team1.name) teamComposition[team1Short]++;
//       else if (selectedPlayer.teamName === team2.name) teamComposition[team2Short]++;
//       if (selectedPlayer.isOverseas) teamComposition.overseas++;
//     }

//     // Validate team
//     if (teamPlayers.length !== 11) return null;
//     if (teamComposition.overseas > 4) return null;
//     if (teamComposition[team1Short] > 7 || teamComposition[team2Short] > 7) return null;
//     if (teamComposition[team1Short] < 4 || teamComposition[team2Short] < 4) return null;
//     if (teamComposition['WK-Batsman'] < 1) return null;

//     return {
//       players: teamPlayers,
//       captain,
//       viceCaptain,
//       teamName: `Team ${generatedTeams.length + 1}`,
//       teamComposition,
//       riskLevel
//     };
//   }, [team1, team2, generatedTeams.length, riskLevel]);

//   const saveTeamToFirestore = async (team: GeneratedTeam) => {
//     if (!user) return;
    
//     try {
//       const userTeamsRef = collection(db, "users", user.id, "savedTeams");
//       const teamRef = doc(userTeamsRef);
      
//       await setDoc(teamRef, {
//         ...team,
//         createdAt: new Date().toISOString(),
//         matchId: `${team1?.id}-${team2?.id}`,
//         matchName: `${team1?.name} vs ${team2?.name}`
//       });
//     } catch (err) {
//       console.error("Failed to save team:", err);
//     }
//   };

//   const handleGenerateTeams = useCallback(async () => {
//     if (!team1 || !team2) {
//       setError("Select both teams first");
//       return;
//     }

//     if (!user) {
//       setError("Please sign in");
//       return;
//     }

//     if (needsPayment) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     setIsGenerating(true);
//     setError(null);

//     try {
//       await runTransaction(db, async (transaction) => {
//         const userRef = doc(db, "users", user.id);
//         const userDoc = await transaction.get(userRef);
        
//         if (!userDoc.exists()) throw new Error("User not found");
//         if ((userDoc.data().credits || 0) < requiredCredits) {
//           throw new Error("Insufficient balance");
//         }
        
//         transaction.update(userRef, {
//           credits: increment(-requiredCredits)
//         });
//       });

//       const allPlayers = [
//         ...(team1.playerDetails || []).map(p => ({
//           ...p,
//           teamName: team1.name,
//           select: p.select !== false
//         })),
//         ...(team2.playerDetails || []).map(p => ({
//           ...p,
//           teamName: team2.name,
//           select: p.select !== false
//         }))
//       ].filter(p => !p.substitute);

//       if (allPlayers.length < 11) {
//         throw new Error(`Not enough players (${allPlayers.length}/11)`);
//       }

//       const scoredPlayers = allPlayers.map(player => ({
//         ...player,
//         score: calculatePlayerScore(player, riskLevel),
//         captainScore: (player.selCapPerc || 0) * (player.selectPerc || 0),
//         vcScore: (player.selVcPerc || 0) * (player.selectPerc || 0)
//       }));

//       const newTeams: GeneratedTeam[] = [];
//       const MAX_ATTEMPTS = teamCount * 10;
//       let attempts = 0;

//       while (newTeams.length < teamCount && attempts < MAX_ATTEMPTS) {
//         attempts++;
//         const team = createBalancedTeam(scoredPlayers);
//         if (team) {
//           newTeams.push(team);
//           await saveTeamToFirestore(team);
//         }
//       }

//       if (newTeams.length === 0) {
//         throw new Error("Failed to generate valid teams");
//       }

//       setGeneratedTeams(newTeams);
//       onBalanceUpdate(userBalance - requiredCredits);
//     } catch (err: any) {
//       setError(err.message || "Failed to generate teams");
//     } finally {
//       setIsGenerating(false);
//     }
//   }, [team1, team2, teamCount, riskLevel, user, userBalance, requiredCredits, needsPayment, onBalanceUpdate, createBalancedTeam]);

//   const paymentDialog = showPaymentDialog && (
//     <PaymentDialog
//       currentBalance={userBalance}
//       requiredAmount={paymentAmount}
//       onPaymentSuccess={(amount) => {
//         onBalanceUpdate(userBalance + amount);
//         setShowPaymentDialog(false);
//         handleGenerateTeams();
//       }}
//       onOpenChange={setShowPaymentDialog}
//       open={showPaymentDialog}
//     />
//   );

//   const generateButton = (
//     <div className="space-y-2">
//       <button
//         onClick={handleGenerateTeams}
//         disabled={isGenerating || !team1 || !team2}
//         className={`
//           w-full px-4 py-3 rounded-md font-bold
//           ${isGenerating ? 'bg-gray-500' :
//            needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' :
//            'bg-blue-500 hover:bg-blue-600'}
//           text-white transition-colors
//         `}
//       >
//         {isGenerating ? (
//           <span className="flex items-center justify-center gap-2">
//             <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//             Generating...
//           </span>
//         ) : !team1 || !team2 ? (
//           "Select both teams"
//         ) : needsPayment ? (
//           `Add ₹${paymentAmount} to Generate`
//         ) : (
//           `Generate ${teamCount} Teams (₹${requiredCredits})`
//         )}
//       </button>

//       <div className="flex justify-between text-sm">
//         <span>Your Credits: ₹{userBalance}</span>
//         {needsPayment ? (
//           <span className="text-yellow-500">Need ₹{paymentAmount} more</span>
//         ) : (
//           <span className="text-green-500">Sufficient balance</span>
//         )}
//       </div>

//       {error && <div className="text-red-500 text-sm">{error}</div>}
//     </div>
//   );

//   return {
//     generatedTeams,
//     isGenerating,
//     generateButton,
//     paymentDialog,
//     error
//   };
// };




// "use client";

// import { useState, useCallback, useMemo } from "react";
// import { PaymentDialog } from "./PaymentDialog";
// import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";
// import { db } from "@/lib/firebase";
// import { doc, runTransaction, increment, setDoc, collection } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";

// interface TeamGeneratorProps {
//   team1?: Team;
//   team2?: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate: (newBalance: number) => void;
//   matchId: string;
// }

// export const useTeamGenerator = ({
//   team1,
//   team2,
//   teamCount,
//   riskLevel,
//   userBalance,
//   onBalanceUpdate,
//   matchId
// }: TeamGeneratorProps) => {
//   const { user } = useUser();
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const requiredCredits = useMemo(() => teamCount * 5, [teamCount]);
//   const needsPayment = useMemo(() => userBalance < requiredCredits, [userBalance, requiredCredits]);
//   const paymentAmount = useMemo(() => Math.max(requiredCredits - userBalance, 50), [requiredCredits, userBalance]);

//   const calculatePlayerScore = (player: PlayerDetail) => {
//     const baseScore = player.selectPerc || 0;
//     const roleWeights = {
//       'WK-Batsman': 1.5,
//       'Batsman': 1.3,
//       'All-Rounder': 1.4,
//       'Bowler': 1.2
//     };
    
//     let riskFactor;
//     if (riskLevel < 30) {
//       riskFactor = 1 + (baseScore / 100);
//     } else if (riskLevel < 70) {
//       riskFactor = 0.9 + (Math.random() * 0.3);
//     } else {
//       riskFactor = 0.7 + (Math.random() * 0.6);
//     }
    
//     return baseScore * (roleWeights[player.role] || 1.0) * riskFactor;
//   };

//   const createBalancedTeam = useCallback((players: PlayerDetail[]) => {
//     if (!team1 || !team2) return null;
    
//     const MAX_ATTEMPTS = 50;
//     let attempts = 0;
    
//     const team1Short = team1.shortName || team1.name.split(' ').map(n => n[0]).join('');
//     const team2Short = team2.shortName || team2.name.split(' ').map(n => n[0]).join('');

//     while (attempts < MAX_ATTEMPTS) {
//       attempts++;
//       const teamComposition = {
//         'WK-Batsman': 0,
//         'Batsman': 0,
//         'All-Rounder': 0,
//         'Bowler': 0,
//         [team1Short]: 0,
//         [team2Short]: 0,
//         overseas: 0,
//         totalScore: 0
//       };

//       const availablePlayers = players
//         .filter(p => !p.substitute && p.select !== false)
//         .map(p => ({ ...p }));

//       const shuffledPlayers = [...availablePlayers].sort(() => Math.random() - 0.5);

//       let captain, viceCaptain;
      
//       if (riskLevel < 30) {
//         const topPlayers = [...shuffledPlayers]
//           .sort((a, b) => (b.selectPerc || 0) - (a.selectPerc || 0))
//           .slice(0, Math.ceil(shuffledPlayers.length * 0.2));
//         captain = topPlayers[Math.floor(Math.random() * topPlayers.length)];
//         viceCaptain = topPlayers.find(p => p.id !== captain?.id) || topPlayers[0];
//       } else if (riskLevel < 70) {
//         const topPlayers = [...shuffledPlayers]
//           .sort((a, b) => (b.selectPerc || 0) - (a.selectPerc || 0))
//           .slice(0, Math.ceil(shuffledPlayers.length * 0.4));
//         captain = topPlayers[Math.floor(Math.random() * topPlayers.length)];
//         viceCaptain = topPlayers.find(p => p.id !== captain?.id) || topPlayers[0];
//       } else {
//         captain = shuffledPlayers[Math.floor(Math.random() * shuffledPlayers.length)];
//         viceCaptain = shuffledPlayers.find(p => p.id !== captain?.id) || shuffledPlayers[0];
//       }

//       if (!captain || !viceCaptain) continue;

//       const teamPlayers: PlayerDetail[] = [captain, viceCaptain];
      
//       [captain, viceCaptain].forEach(player => {
//         teamComposition[player.role]++;
//         teamComposition.totalScore += player.score || 0;
        
//         if (player.teamName === team1.name) teamComposition[team1Short]++;
//         else if (player.teamName === team2.name) teamComposition[team2Short]++;
        
//         if (player.isOverseas) teamComposition.overseas++;
//       });

//       const remainingPlayers = shuffledPlayers.filter(p =>
//         p.id !== captain.id && p.id !== viceCaptain.id
//       );

//       const getNeededRoles = () => {
//         const needed = [];
//         if (teamComposition['WK-Batsman'] < 1) needed.push('WK-Batsman');
//         if (teamComposition['Batsman'] < 3) needed.push('Batsman');
//         if (teamComposition['All-Rounder'] < 2) needed.push('All-Rounder');
//         if (teamComposition['Bowler'] < 3) needed.push('Bowler');
//         return needed.length > 0 ? needed : ['Batsman', 'All-Rounder', 'Bowler'];
//       };

//       while (teamPlayers.length < 11 && remainingPlayers.length > 0) {
//         const neededRoles = getNeededRoles();
        
//         let candidates = remainingPlayers.filter(p => {
//           if (!neededRoles.includes(p.role)) return false;
          
//           const team = p.teamName === team1.name ? team1Short : team2Short;
//           if (teamComposition[team] >= 7) return false;
          
//           if (p.isOverseas && teamComposition.overseas >= 4) return false;
          
//           return true;
//         });

//         if (candidates.length === 0) {
//           candidates = remainingPlayers.filter(p => neededRoles.includes(p.role));
//           if (candidates.length === 0) break;
//         }

//         let selectedPlayer;
//         if (riskLevel < 30) {
//           candidates.sort((a, b) => (b.selectPerc || 0) - (a.selectPerc || 0));
//           selectedPlayer = candidates[0];
//         } else if (riskLevel < 70) {
//           candidates.sort((a, b) => (b.score || 0) - (a.score || 0));
//           const topHalf = candidates.slice(0, Math.ceil(candidates.length * 0.5));
//           selectedPlayer = topHalf[Math.floor(Math.random() * topHalf.length)];
//         } else {
//           selectedPlayer = candidates[Math.floor(Math.random() * candidates.length)];
//         }

//         if (!selectedPlayer) break;

//         teamPlayers.push(selectedPlayer);
        
//         teamComposition[selectedPlayer.role]++;
//         teamComposition.totalScore += selectedPlayer.score || 0;
//         if (selectedPlayer.teamName === team1.name) teamComposition[team1Short]++;
//         else if (selectedPlayer.teamName === team2.name) teamComposition[team2Short]++;
//         if (selectedPlayer.isOverseas) teamComposition.overseas++;

//         const playerIndex = remainingPlayers.findIndex(p => p.id === selectedPlayer.id);
//         if (playerIndex !== -1) {
//           remainingPlayers.splice(playerIndex, 1);
//         }
//       }

//       // Final validation
//       if (teamPlayers.length !== 11) continue;
//       if (teamComposition.overseas > 4) continue;
//       if (teamComposition[team1Short] > 7 || teamComposition[team2Short] > 7) continue;
//       if (teamComposition[team1Short] < 4 || teamComposition[team2Short] < 4) continue;
//       if (teamComposition['WK-Batsman'] < 1) continue;

//       return {
//         players: teamPlayers,
//         captain,
//         viceCaptain,
//         teamName: `Team ${generatedTeams.length + 1}`,
//         teamComposition,
//         riskLevel,
//         matchId,
//         createdAt: new Date().toISOString()
//       };
//     }

//     return null;
//   }, [team1, team2, generatedTeams.length, riskLevel, matchId]);

//   const saveTeamToFirestore = async (team: GeneratedTeam) => {
//     if (!user) return;
    
//     try {
//       const userTeamsRef = collection(db, "users", user.id, "savedTeams");
//       const teamRef = doc(userTeamsRef);
      
//       await setDoc(teamRef, {
//         ...team,
//         userId: user.id,
//         userEmail: user.primaryEmailAddress?.emailAddress,
//         matchName: `${team1?.name} vs ${team2?.name}`,
//         team1ShortName: team1?.shortName || team1?.name.split(' ').map(n => n[0]).join(''),
//         team2ShortName: team2?.shortName || team2?.name.split(' ').map(n => n[0]).join(''),
//         team1Logo: team1?.logo,
//         team2Logo: team2?.logo
//       });
//     } catch (err) {
//       console.error("Failed to save team:", err);
//     }
//   };

//   const handleGenerateTeams = useCallback(async () => {
//     if (!team1 || !team2) {
//       setError("Select both teams first");
//       return;
//     }

//     if (!user) {
//       setError("Please sign in");
//       return;
//     }

//     if (needsPayment) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     // Additional validation checks
//     const allPlayers = [
//       ...(team1.playerDetails || []).filter(p => !p.substitute && p.select !== false),
//       ...(team2.playerDetails || []).filter(p => !p.substitute && p.select !== false)
//     ];

//     if (allPlayers.length < 11) {
//       setError(`Not enough players (${allPlayers.length}/11). Please check your filters.`);
//       return;
//     }

//     const hasWicketKeeper = allPlayers.some(p => p.role === 'WK-Batsman');
//     if (!hasWicketKeeper) {
//       setError("No wicket-keeper available. Please check your player filters.");
//       return;
//     }

//     setIsGenerating(true);
//     setError(null);

//     try {
//       await runTransaction(db, async (transaction) => {
//         const userRef = doc(db, "users", user.id);
//         const userDoc = await transaction.get(userRef);
        
//         if (!userDoc.exists()) throw new Error("User not found");
//         if ((userDoc.data().credits || 0) < requiredCredits) {
//           throw new Error("Insufficient balance");
//         }
        
//         transaction.update(userRef, {
//           credits: increment(-requiredCredits)
//         });
//       });

//       const scoredPlayers = allPlayers.map(player => ({
//         ...player,
//         score: calculatePlayerScore(player),
//         captainScore: (player.selCapPerc || 0) * (player.selectPerc || 0),
//         vcScore: (player.selVcPerc || 0) * (player.selectPerc || 0)
//       }));

//       const newTeams: GeneratedTeam[] = [];
//       const TOTAL_ATTEMPTS = teamCount * 50;
//       let attempts = 0;

//       while (newTeams.length < teamCount && attempts < TOTAL_ATTEMPTS) {
//         attempts++;
//         const team = createBalancedTeam(scoredPlayers);
//         if (team) {
//           newTeams.push(team);
//           await saveTeamToFirestore(team);
//         }
//       }

//       if (newTeams.length === 0) {
//         throw new Error("Failed to generate valid teams after multiple attempts. Try adjusting your risk level or player filters.");
//       }

//       setGeneratedTeams(newTeams);
//       onBalanceUpdate(userBalance - requiredCredits);
//     } catch (err: any) {
//       setError(err.message || "Failed to generate teams");
//       console.error("Team generation error:", err);
//     } finally {
//       setIsGenerating(false);
//     }
//   }, [
//     team1, team2, teamCount, riskLevel, user,
//     userBalance, requiredCredits, needsPayment,
//     onBalanceUpdate, createBalancedTeam, matchId
//   ]);

//   const paymentDialog = showPaymentDialog && (
//     <PaymentDialog
//       currentBalance={userBalance}
//       requiredAmount={paymentAmount}
//       onPaymentSuccess={(amount) => {
//         onBalanceUpdate(userBalance + amount);
//         setShowPaymentDialog(false);
//         handleGenerateTeams();
//       }}
//       onOpenChange={setShowPaymentDialog}
//       open={showPaymentDialog}
//     />
//   );

//   const generateButton = (
//     <div className="space-y-2">
//       <button
//         onClick={handleGenerateTeams}
//         disabled={isGenerating || !team1 || !team2}
//         className={`
//           w-full px-4 py-3 rounded-md font-bold
//           ${isGenerating ? 'bg-gray-500' :
//            needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' :
//            'bg-blue-500 hover:bg-blue-600'}
//           text-white transition-colors
//         `}
//       >
//         {isGenerating ? (
//           <span className="flex items-center justify-center gap-2">
//             <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//             Generating...
//           </span>
//         ) : !team1 || !team2 ? (
//           "Select both teams"
//         ) : needsPayment ? (
//           `Add ₹${paymentAmount} to Generate`
//         ) : (
//           `Generate ${teamCount} Teams (₹${requiredCredits})`
//         )}
//       </button>

//       <div className="flex justify-between text-sm">
//         <span>Your Credits: ₹{userBalance}</span>
//         {needsPayment ? (
//           <span className="text-yellow-500">Need ₹{paymentAmount} more</span>
//         ) : (
//           <span className="text-green-500">Sufficient balance</span>
//         )}
//       </div>

//       {error && (
//         <div className="text-red-500 text-sm p-2 bg-red-50 rounded">
//           {error}
//           {error.includes("Not enough players") && (
//             <div className="text-xs mt-1">Try adjusting player filters or selecting different teams</div>
//           )}
//         </div>
//       )}
//     </div>
//   );

//   return {
//     generatedTeams,
//     isGenerating,
//     generateButton,
//     paymentDialog,
//     error,
//     setError // Expose setError to allow clearing errors from parent
//   };
// };











// // app/components/TeamGenerator.tsx
// "use client";

// import { useState, useCallback, useMemo, useEffect } from "react";
// import { PaymentDialog } from "./PaymentDialog";
// import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";
// import { db } from "@/lib/firebase";
// import { doc, runTransaction, increment, setDoc, collection } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";

// interface TeamGeneratorProps {
//   team1?: Team;
//   team2?: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate: (newBalance: number) => void;
//   matchId: string;
// }

// export const useTeamGenerator = ({
//   team1,
//   team2,
//   teamCount,
//   riskLevel,
//   userBalance,
//   onBalanceUpdate,
//   matchId
// }: TeamGeneratorProps) => {
//   const { user } = useUser();
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [retryCount, setRetryCount] = useState(0);

//   const requiredCredits = useMemo(() => teamCount * 5, [teamCount]);
//   const needsPayment = useMemo(() => userBalance < requiredCredits, [userBalance, requiredCredits]);
//   const paymentAmount = useMemo(() => Math.max(requiredCredits - userBalance, 50), [requiredCredits, userBalance]);

//   // Reset error when teams change
//   useEffect(() => {
//     setError(null);
//   }, [team1, team2]);

//   const calculatePlayerScore = (player: PlayerDetail) => {
//     const baseScore = player.selectPerc || 0;
//     const roleWeights = {
//       'WK-Batsman': 1.5,
//       'Batsman': 1.3,
//       'All-Rounder': 1.4,
//       'Bowler': 1.2
//     };
    
//     let riskFactor;
//     if (riskLevel < 30) { // Safe
//       riskFactor = 1 + (baseScore / 100);
//     } else if (riskLevel < 70) { // Balanced
//       riskFactor = 0.9 + (Math.random() * 0.3);
//     } else { // Aggressive
//       riskFactor = 0.7 + (Math.random() * 0.6);
//     }
    
//     return baseScore * (roleWeights[player.role] || 1.0) * riskFactor;
//   };

//   const createBalancedTeam = useCallback((players: PlayerDetail[]) => {
//     if (!team1 || !team2) return null;
    
//     const MAX_ATTEMPTS = 100; // Increased attempts
//     let attempts = 0;
    
//     const team1Short = team1.shortName || team1.name.split(' ').map(n => n[0]).join('');
//     const team2Short = team2.shortName || team2.name.split(' ').map(n => n[0]).join('');

//     // Get all available players
//     const availablePlayers = players
//       .filter(p => !p.substitute && p.select !== false)
//       .map(p => ({ ...p })); // Clone to avoid mutation

//     // Check if we have at least 1 WK-Batsman
//     const hasWicketKeeper = availablePlayers.some(p => p.role === 'WK-Batsman');
//     if (!hasWicketKeeper) {
//       throw new Error("No wicket-keeper available in selected players");
//     }

//     while (attempts < MAX_ATTEMPTS) {
//       attempts++;
//       const teamComposition = {
//         'WK-Batsman': 0,
//         'Batsman': 0,
//         'All-Rounder': 0,
//         'Bowler': 0,
//         [team1Short]: 0,
//         [team2Short]: 0,
//         overseas: 0,
//         totalScore: 0
//       };

//       // Shuffle players for better randomization
//       const shuffledPlayers = [...availablePlayers].sort(() => Math.random() - 0.5);

//       // Select captain and vice-captain
//       let captain, viceCaptain;
      
//       // Different selection strategies based on risk level
//       if (riskLevel < 30) { // Safe - top 15% by selection percentage
//         const topPlayers = [...shuffledPlayers]
//           .sort((a, b) => (b.selectPerc || 0) - (a.selectPerc || 0))
//           .slice(0, Math.ceil(shuffledPlayers.length * 0.15));
//         if (topPlayers.length === 0) continue;
//         captain = topPlayers[Math.floor(Math.random() * topPlayers.length)];
//         viceCaptain = topPlayers.find(p => p.id !== captain?.id) || topPlayers[0];
//       } else if (riskLevel < 70) { // Balanced - top 30% by selection percentage
//         const topPlayers = [...shuffledPlayers]
//           .sort((a, b) => (b.selectPerc || 0) - (a.selectPerc || 0))
//           .slice(0, Math.ceil(shuffledPlayers.length * 0.3));
//         if (topPlayers.length === 0) continue;
//         captain = topPlayers[Math.floor(Math.random() * topPlayers.length)];
//         viceCaptain = topPlayers.find(p => p.id !== captain?.id) || topPlayers[0];
//       } else { // Aggressive - any player
//         captain = shuffledPlayers[Math.floor(Math.random() * shuffledPlayers.length)];
//         viceCaptain = shuffledPlayers.find(p => p.id !== captain?.id) || shuffledPlayers[0];
//       }

//       if (!captain || !viceCaptain) continue;

//       const teamPlayers: PlayerDetail[] = [captain, viceCaptain];
      
//       // Update composition
//       [captain, viceCaptain].forEach(player => {
//         teamComposition[player.role]++;
//         teamComposition.totalScore += player.score || 0;
        
//         if (player.teamName === team1.name) teamComposition[team1Short]++;
//         else if (player.teamName === team2.name) teamComposition[team2Short]++;
        
//         if (player.isOverseas) teamComposition.overseas++;
//       });

//       // Remove selected players from pool
//       const remainingPlayers = shuffledPlayers.filter(p =>
//         p.id !== captain.id && p.id !== viceCaptain.id
//       );

//       // Function to get needed roles
//       const getNeededRoles = () => {
//         const needed = [];
//         if (teamComposition['WK-Batsman'] < 1) needed.push('WK-Batsman');
//         if (teamComposition['Batsman'] < 3) needed.push('Batsman');
//         if (teamComposition['All-Rounder'] < 2) needed.push('All-Rounder');
//         if (teamComposition['Bowler'] < 3) needed.push('Bowler');
//         return needed.length > 0 ? needed : ['Batsman', 'All-Rounder', 'Bowler'];
//       };

//       // Fill remaining spots
//       while (teamPlayers.length < 11 && remainingPlayers.length > 0) {
//         const neededRoles = getNeededRoles();
        
//         // Filter candidates based on constraints
//         let candidates = remainingPlayers.filter(p => {
//           // Check role
//           if (!neededRoles.includes(p.role)) return false;
          
//           // Check team balance
//           const team = p.teamName === team1.name ? team1Short : team2Short;
//           if (teamComposition[team] >= 7) return false;
          
//           // Check overseas limit
//           if (p.isOverseas && teamComposition.overseas >= 4) return false;
          
//           return true;
//         });

//         // If no candidates found, relax some constraints
//         if (candidates.length === 0) {
//           candidates = remainingPlayers.filter(p => neededRoles.includes(p.role));
//           if (candidates.length === 0) break;
//         }

//         // Select player based on risk level
//         let selectedPlayer;
//         if (riskLevel < 30) { // Safe - highest selection percentage
//           candidates.sort((a, b) => (b.selectPerc || 0) - (a.selectPerc || 0));
//           selectedPlayer = candidates[0];
//         } else if (riskLevel < 70) { // Balanced - weighted random from top 50%
//           candidates.sort((a, b) => (b.score || 0) - (a.score || 0));
//           const topHalf = candidates.slice(0, Math.ceil(candidates.length * 0.5));
//           selectedPlayer = topHalf[Math.floor(Math.random() * topHalf.length)];
//         } else { // Aggressive - completely random
//           selectedPlayer = candidates[Math.floor(Math.random() * candidates.length)];
//         }

//         if (!selectedPlayer) break;

//         teamPlayers.push(selectedPlayer);
        
//         // Update composition
//         teamComposition[selectedPlayer.role]++;
//         teamComposition.totalScore += selectedPlayer.score || 0;
//         if (selectedPlayer.teamName === team1.name) teamComposition[team1Short]++;
//         else if (selectedPlayer.teamName === team2.name) teamComposition[team2Short]++;
//         if (selectedPlayer.isOverseas) teamComposition.overseas++;

//         // Remove selected player from pool
//         const playerIndex = remainingPlayers.findIndex(p => p.id === selectedPlayer.id);
//         if (playerIndex !== -1) {
//           remainingPlayers.splice(playerIndex, 1);
//         }
//       }

//       // Final validation
//       if (teamPlayers.length !== 11) continue;
//       if (teamComposition.overseas > 4) continue;
//       if (teamComposition[team1Short] > 7 || teamComposition[team2Short] > 7) continue;
//       if (teamComposition[team1Short] < 4 || teamComposition[team2Short] < 4) continue;
//       if (teamComposition['WK-Batsman'] < 1) continue;

//       // If we get here, we have a valid team
//       return {
//         players: teamPlayers,
//         captain,
//         viceCaptain,
//         teamName: `Team ${generatedTeams.length + 1}`,
//         teamComposition,
//         riskLevel,
//         matchId,
//         createdAt: new Date().toISOString()
//       };
//     }

//     return null;
//   }, [team1, team2, generatedTeams.length, riskLevel, matchId]);

//   const saveTeamToFirestore = async (team: GeneratedTeam) => {
//     if (!user) return;
    
//     try {
//       const userTeamsRef = collection(db, "users", user.id, "savedTeams");
//       const teamRef = doc(userTeamsRef);
      
//       await setDoc(teamRef, {
//         ...team,
//         userId: user.id,
//         userEmail: user.primaryEmailAddress?.emailAddress,
//         matchName: `${team1?.name} vs ${team2?.name}`,
//         team1ShortName: team1?.shortName || team1?.name.split(' ').map(n => n[0]).join(''),
//         team2ShortName: team2?.shortName || team2?.name.split(' ').map(n => n[0]).join(''),
//         team1Logo: team1?.logo,
//         team2Logo: team2?.logo
//       });
//     } catch (err) {
//       console.error("Failed to save team:", err);
//     }
//   };

//   const handleGenerateTeams = useCallback(async () => {
//     if (!team1 || !team2) {
//       setError("Select both teams first");
//       return;
//     }

//     if (!user) {
//       setError("Please sign in to generate teams");
//       return;
//     }

//     if (needsPayment) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     // Pre-validation checks
//     const allPlayers = [
//       ...(team1.playerDetails || []).filter(p => !p.substitute && p.select !== false),
//       ...(team2.playerDetails || []).filter(p => !p.substitute && p.select !== false)
//     ];

//     if (allPlayers.length < 11) {
//       setError(`Not enough players (${allPlayers.length}/11). Please check your filters or select different teams.`);
//       return;
//     }

//     const hasWicketKeeper = allPlayers.some(p => p.role === 'WK-Batsman');
//     if (!hasWicketKeeper) {
//       setError("No wicket-keeper available in selected players. Please adjust your filters.");
//       return;
//     }

//     setIsGenerating(true);
//     setError(null);
//     setRetryCount(prev => prev + 1); // Increment retry count to force re-render

//     try {
//       // Deduct credits
//       await runTransaction(db, async (transaction) => {
//         const userRef = doc(db, "users", user.id);
//         const userDoc = await transaction.get(userRef);
        
//         if (!userDoc.exists()) throw new Error("User not found");
//         if ((userDoc.data().credits || 0) < requiredCredits) {
//           throw new Error("Insufficient balance");
//         }
        
//         transaction.update(userRef, {
//           credits: increment(-requiredCredits)
//         });
//       });

//       // Score players
//       const scoredPlayers = allPlayers.map(player => ({
//         ...player,
//         score: calculatePlayerScore(player),
//         captainScore: (player.selCapPerc || 0) * (player.selectPerc || 0),
//         vcScore: (player.selVcPerc || 0) * (player.selectPerc || 0)
//       }));

//       // Generate teams
//       const newTeams: GeneratedTeam[] = [];
//       const TOTAL_ATTEMPTS = teamCount * 100; // Increased total attempts
//       let attempts = 0;

//       while (newTeams.length < teamCount && attempts < TOTAL_ATTEMPTS) {
//         attempts++;
//         const team = createBalancedTeam(scoredPlayers);
//         if (team) {
//           newTeams.push(team);
//           await saveTeamToFirestore(team);
//         }
//       }

//       if (newTeams.length === 0) {
//         throw new Error(`Failed to generate valid teams after ${TOTAL_ATTEMPTS} attempts. Try adjusting your risk level or player filters.`);
//       }

//       setGeneratedTeams(newTeams);
//       onBalanceUpdate(userBalance - requiredCredits);
//     } catch (err: any) {
//       setError(err.message || "Failed to generate teams");
//       console.error("Team generation error:", {
//         error: err,
//         team1: team1?.name,
//         team2: team2?.name,
//         playerCount: allPlayers.length,
//         riskLevel
//       });
//     } finally {
//       setIsGenerating(false);
//     }
//   }, [
//     team1, team2, teamCount, riskLevel, user,
//     userBalance, requiredCredits, needsPayment,
//     onBalanceUpdate, createBalancedTeam, matchId,
//     retryCount // Add retryCount to dependencies
//   ]);

//   const paymentDialog = showPaymentDialog && (
//     <PaymentDialog
//       currentBalance={userBalance}
//       requiredAmount={paymentAmount}
//       onPaymentSuccess={(amount) => {
//         onBalanceUpdate(userBalance + amount);
//         setShowPaymentDialog(false);
//         handleGenerateTeams();
//       }}
//       onOpenChange={setShowPaymentDialog}
//       open={showPaymentDialog}
//     />
//   );

//   const generateButton = (
//     <div className="space-y-2">
//       <button
//         onClick={handleGenerateTeams}
//         disabled={isGenerating || !team1 || !team2}
//         className={`
//           w-full px-4 py-3 rounded-md font-bold
//           ${isGenerating ? 'bg-gray-500' :
//            needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' :
//            'bg-blue-500 hover:bg-blue-600'}
//           text-white transition-colors
//         `}
//       >
//         {isGenerating ? (
//           <span className="flex items-center justify-center gap-2">
//             <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//             Generating...
//           </span>
//         ) : !team1 || !team2 ? (
//           "Select both teams"
//         ) : needsPayment ? (
//           `Add ₹${paymentAmount} to Generate`
//         ) : (
//           `Generate ${teamCount} Teams (₹${requiredCredits})`
//         )}
//       </button>

//       <div className="flex justify-between text-sm">
//         <span>Your Credits: ₹{userBalance}</span>
//         {needsPayment ? (
//           <span className="text-yellow-500">Need ₹{paymentAmount} more</span>
//         ) : (
//           <span className="text-green-500">Sufficient balance</span>
//         )}
//       </div>

//       {error && (
//         <div className="text-red-500 text-sm p-2 bg-red-50 rounded-lg">
//           <p className="font-medium">{error}</p>
//           {error.includes("Not enough players") && (
//             <p className="text-xs mt-1">Try adjusting player filters or selecting different teams</p>
//           )}
//           {error.includes("wicket-keeper") && (
//             <p className="text-xs mt-1">Ensure at least one WK-Batsman is selected</p>
//           )}
//           {error.includes("Failed to generate") && (
//             <div className="text-xs mt-1 space-y-1">
//               <p>Possible solutions:</p>
//               <ul className="list-disc pl-5">
//                 <li>Increase risk level for more flexibility</li>
//                 <li>Check if you have enough players from both teams</li>
//                 <li>Ensure you have players in all roles (WK, Batsman, All-Rounder, Bowler)</li>
//               </ul>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );

//   return {
//     generatedTeams,
//     isGenerating,
//     generateButton,
//     paymentDialog,
//     error,
//     setError
//   };
// };







// // app/components/TeamGenerator.tsx
// "use client";

// import { useState, useCallback, useMemo, useEffect } from "react";
// import { PaymentDialog } from "./PaymentDialog";
// import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";
// import { db } from "@/lib/firebase";
// import { doc, runTransaction, increment, setDoc, collection } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";

// interface TeamGeneratorProps {
//   team1?: Team;
//   team2?: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate: (newBalance: number) => void;
//   matchId: string;
// }

// export const useTeamGenerator = ({
//   team1,
//   team2,
//   teamCount,
//   riskLevel,
//   userBalance,
//   onBalanceUpdate,
//   matchId
// }: TeamGeneratorProps) => {
//   const { user } = useUser();
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [retryCount, setRetryCount] = useState(0);

//   const requiredCredits = useMemo(() => teamCount * 5, [teamCount]);
//   const needsPayment = useMemo(() => userBalance < requiredCredits, [userBalance, requiredCredits]);
//   const paymentAmount = useMemo(() => Math.max(requiredCredits - userBalance, 50), [requiredCredits, userBalance]);

//   useEffect(() => {
//     setError(null);
//   }, [team1, team2, riskLevel]);

//   const calculatePlayerScore = (player: PlayerDetail) => {
//     const baseScore = player.selectPerc || 0;
//     const roleWeights = {
//       'WK-Batsman': 1.5,
//       'Batsman': 1.3,
//       'All-Rounder': 1.4,
//       'Bowler': 1.2
//     };
    
//     let riskFactor;
//     if (riskLevel < 30) {
//       riskFactor = 1 + (baseScore / 100);
//     } else if (riskLevel < 70) {
//       riskFactor = 0.9 + (Math.random() * 0.3);
//     } else {
//       riskFactor = 0.7 + (Math.random() * 0.6);
//     }
    
//     return baseScore * (roleWeights[player.role] || 1.0) * riskFactor;
//   };

//   const createBalancedTeam = useCallback((players: PlayerDetail[], attemptCount: number) => {
//     if (!team1 || !team2) return null;
    
//     const team1Short = team1.shortName || team1.name.split(' ').map(n => n[0]).join('');
//     const team2Short = team2.shortName || team2.name.split(' ').map(n => n[0]).join('');

//     // Get available players
//     const availablePlayers = players
//       .filter(p => !p.substitute && p.select !== false)
//       .map(p => ({ ...p }));

//     // Check minimum requirements
//     const hasWicketKeeper = availablePlayers.some(p => p.role === 'WK-Batsman');
//     if (!hasWicketKeeper) return null;

//     // Different strategies based on attempt count
//     const strategy = attemptCount < 100 ? 'strict' :
//                     attemptCount < 300 ? 'relaxed' :
//                     'fallback';

//     // Try multiple team-building approaches
//     const teamAttempts = [
//       tryBuildTeamWithStrictRules,
//       tryBuildTeamWithRelaxedRules,
//       tryBuildTeamWithFallbackRules
//     ];

//     for (const buildTeam of teamAttempts) {
//       const team = buildTeam(availablePlayers, team1Short, team2Short, strategy);
//       if (team) return team;
//     }

//     return null;

//     // Team building strategies
//     function tryBuildTeamWithStrictRules(players: PlayerDetail[], team1Short: string, team2Short: string) {
//       const teamComposition = initTeamComposition();
//       const teamPlayers: PlayerDetail[] = [];
      
//       // Select captain and vice-captain
//       const { captain, viceCaptain, remainingPlayers } = selectCaptainAndViceCaptain(players);
//       if (!captain || !viceCaptain) return null;

//       teamPlayers.push(captain, viceCaptain);
//       updateComposition(teamComposition, [captain, viceCaptain]);

//       // Fill remaining spots
//       while (teamPlayers.length < 11 && remainingPlayers.length > 0) {
//         const neededRoles = getNeededRoles(teamComposition);
//         const candidates = getCandidates(remainingPlayers, neededRoles, teamComposition, team1Short, team2Short);
        
//         if (candidates.length === 0) break;

//         const selectedPlayer = selectPlayer(candidates);
//         if (!selectedPlayer) break;

//         teamPlayers.push(selectedPlayer);
//         updateComposition(teamComposition, [selectedPlayer]);
//         removePlayerFromPool(remainingPlayers, selectedPlayer);
//       }

//       return validateTeam(teamPlayers, teamComposition) ?
//         createTeamObject(teamPlayers, captain, viceCaptain) :
//         null;
//     }

//     function tryBuildTeamWithRelaxedRules(players: PlayerDetail[], team1Short: string, team2Short: string) {
//       // Similar to strict but relaxes some constraints
//       const teamComposition = initTeamComposition();
//       const teamPlayers: PlayerDetail[] = [];
      
//       // Select captain and vice-captain with relaxed rules
//       const topPlayers = [...players]
//         .sort((a, b) => (b.score || 0) - (a.score || 0))
//         .slice(0, Math.ceil(players.length * 0.5));
      
//       const captain = topPlayers[Math.floor(Math.random() * topPlayers.length)];
//       const viceCaptain = topPlayers.find(p => p.id !== captain?.id) || topPlayers[0];
//       if (!captain || !viceCaptain) return null;

//       teamPlayers.push(captain, viceCaptain);
//       updateComposition(teamComposition, [captain, viceCaptain]);

//       const remainingPlayers = players.filter(p =>
//         p.id !== captain.id && p.id !== viceCaptain.id
//       );

//       // Fill remaining spots with relaxed constraints
//       while (teamPlayers.length < 11 && remainingPlayers.length > 0) {
//         const neededRoles = getNeededRoles(teamComposition);
//         let candidates = remainingPlayers.filter(p => neededRoles.includes(p.role));
        
//         // Relax team balance constraints
//         candidates = candidates.filter(p => {
//           const team = p.teamName === team1.name ? team1Short : team2Short;
//           return teamComposition[team] < 8; // Relaxed from 7 to 8
//         });

//         if (candidates.length === 0) break;

//         const selectedPlayer = selectPlayer(candidates);
//         if (!selectedPlayer) break;

//         teamPlayers.push(selectedPlayer);
//         updateComposition(teamComposition, [selectedPlayer]);
//         removePlayerFromPool(remainingPlayers, selectedPlayer);
//       }

//       return validateTeam(teamPlayers, teamComposition, true) ?
//         createTeamObject(teamPlayers, captain, viceCaptain) :
//         null;
//     }

//     function tryBuildTeamWithFallbackRules(players: PlayerDetail[], team1Short: string, team2Short: string) {
//       // Fallback strategy when all else fails
//       const teamComposition = initTeamComposition();
//       const teamPlayers: PlayerDetail[] = [];
      
//       // Just pick the best available players regardless of constraints
//       const sortedPlayers = [...players]
//         .sort((a, b) => (b.score || 0) - (a.score || 0));
      
//       const captain = sortedPlayers[0];
//       const viceCaptain = sortedPlayers[1] || sortedPlayers[0];
//       if (!captain || !viceCaptain) return null;

//       teamPlayers.push(captain, viceCaptain);
//       updateComposition(teamComposition, [captain, viceCaptain]);

//       // Take next best players
//       for (let i = 2; i < 11 && i < sortedPlayers.length; i++) {
//         teamPlayers.push(sortedPlayers[i]);
//         updateComposition(teamComposition, [sortedPlayers[i]]);
//       }

//       // Still try to meet basic requirements
//       if (teamComposition['WK-Batsman'] < 1) {
//         const wk = players.find(p => p.role === 'WK-Batsman');
//         if (wk) {
//           teamPlayers[teamPlayers.length - 1] = wk;
//           updateComposition(teamComposition, [wk]);
//         }
//       }

//       return teamPlayers.length === 11 ?
//         createTeamObject(teamPlayers, captain, viceCaptain) :
//         null;
//     }

//     // Helper functions
//     function initTeamComposition() {
//       return {
//         'WK-Batsman': 0,
//         'Batsman': 0,
//         'All-Rounder': 0,
//         'Bowler': 0,
//         [team1Short]: 0,
//         [team2Short]: 0,
//         overseas: 0,
//         totalScore: 0
//       };
//     }

//     function selectCaptainAndViceCaptain(players: PlayerDetail[]) {
//       let captain, viceCaptain;
      
//       if (riskLevel < 30) {
//         const topPlayers = [...players]
//           .sort((a, b) => (b.selectPerc || 0) - (a.selectPerc || 0))
//           .slice(0, Math.ceil(players.length * 0.2));
//         captain = topPlayers[Math.floor(Math.random() * topPlayers.length)];
//         viceCaptain = topPlayers.find(p => p.id !== captain?.id) || topPlayers[0];
//       } else if (riskLevel < 70) {
//         const topPlayers = [...players]
//           .sort((a, b) => (b.selectPerc || 0) - (a.selectPerc || 0))
//           .slice(0, Math.ceil(players.length * 0.4));
//         captain = topPlayers[Math.floor(Math.random() * topPlayers.length)];
//         viceCaptain = topPlayers.find(p => p.id !== captain?.id) || topPlayers[0];
//       } else {
//         captain = players[Math.floor(Math.random() * players.length)];
//         viceCaptain = players.find(p => p.id !== captain?.id) || players[0];
//       }

//       const remainingPlayers = players.filter(p =>
//         p.id !== captain?.id && p.id !== viceCaptain?.id
//       );

//       return { captain, viceCaptain, remainingPlayers };
//     }

//     function getNeededRoles(composition: any) {
//       const needed = [];
//       if (composition['WK-Batsman'] < 1) needed.push('WK-Batsman');
//       if (composition['Batsman'] < 3) needed.push('Batsman');
//       if (composition['All-Rounder'] < 2) needed.push('All-Rounder');
//       if (composition['Bowler'] < 3) needed.push('Bowler');
//       return needed.length > 0 ? needed : ['Batsman', 'All-Rounder', 'Bowler'];
//     }

//     function getCandidates(players: PlayerDetail[], neededRoles: string[], composition: any, team1Short: string, team2Short: string) {
//       return players.filter(p => {
//         if (!neededRoles.includes(p.role)) return false;
        
//         const team = p.teamName === team1.name ? team1Short : team2Short;
//         if (composition[team] >= 7) return false;
        
//         if (p.isOverseas && composition.overseas >= 4) return false;
        
//         return true;
//       });
//     }

//     function selectPlayer(candidates: PlayerDetail[]) {
//       if (riskLevel < 30) {
//         candidates.sort((a, b) => (b.selectPerc || 0) - (a.selectPerc || 0));
//         return candidates[0];
//       } else if (riskLevel < 70) {
//         candidates.sort((a, b) => (b.score || 0) - (a.score || 0));
//         const topHalf = candidates.slice(0, Math.ceil(candidates.length * 0.5));
//         return topHalf[Math.floor(Math.random() * topHalf.length)];
//       } else {
//         return candidates[Math.floor(Math.random() * candidates.length)];
//       }
//     }

//     function updateComposition(composition: any, players: PlayerDetail[]) {
//       players.forEach(player => {
//         composition[player.role]++;
//         composition.totalScore += player.score || 0;
        
//         if (player.teamName === team1.name) composition[team1Short]++;
//         else if (player.teamName === team2.name) composition[team2Short]++;
        
//         if (player.isOverseas) composition.overseas++;
//       });
//     }

//     function removePlayerFromPool(players: PlayerDetail[], player: PlayerDetail) {
//       const index = players.findIndex(p => p.id === player.id);
//       if (index !== -1) players.splice(index, 1);
//     }

//     function validateTeam(players: PlayerDetail[], composition: any, relaxed = false) {
//       if (players.length !== 11) return false;
//       if (composition.overseas > 4) return false;
//       if (!relaxed) {
//         if (composition[team1Short] > 7 || composition[team2Short] > 7) return false;
//         if (composition[team1Short] < 4 || composition[team2Short] < 4) return false;
//       }
//       if (composition['WK-Batsman'] < 1) return false;
//       return true;
//     }

//     function createTeamObject(players: PlayerDetail[], captain: PlayerDetail, viceCaptain: PlayerDetail) {
//       return {
//         players,
//         captain,
//         viceCaptain,
//         teamName: `Team ${generatedTeams.length + 1}`,
//         teamComposition: calculateTeamComposition(players),
//         riskLevel,
//         matchId,
//         createdAt: new Date().toISOString()
//       };
//     }

//     function calculateTeamComposition(players: PlayerDetail[]) {
//       const composition = initTeamComposition();
//       updateComposition(composition, players);
//       return composition;
//     }
//   }, [team1, team2, generatedTeams.length, riskLevel, matchId]);

//   const saveTeamToFirestore = async (team: GeneratedTeam) => {
//     if (!user) return;
    
//     try {
//       const userTeamsRef = collection(db, "users", user.id, "savedTeams");
//       const teamRef = doc(userTeamsRef);
      
//       await setDoc(teamRef, {
//         ...team,
//         userId: user.id,
//         userEmail: user.primaryEmailAddress?.emailAddress,
//         matchName: `${team1?.name} vs ${team2?.name}`,
//         team1ShortName: team1?.shortName || team1?.name.split(' ').map(n => n[0]).join(''),
//         team2ShortName: team2?.shortName || team2?.name.split(' ').map(n => n[0]).join(''),
//         team1Logo: team1?.logo,
//         team2Logo: team2?.logo
//       });
//     } catch (err) {
//       console.error("Failed to save team:", err);
//     }
//   };

//   const handleGenerateTeams = useCallback(async () => {
//     if (!team1 || !team2) {
//       setError("Select both teams first");
//       return;
//     }

//     if (!user) {
//       setError("Please sign in to generate teams");
//       return;
//     }

//     if (needsPayment) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     // Pre-validation checks
//     const allPlayers = [
//       ...(team1.playerDetails || []).filter(p => !p.substitute && p.select !== false),
//       ...(team2.playerDetails || []).filter(p => !p.substitute && p.select !== false)
//     ];

//     if (allPlayers.length < 11) {
//       setError(`Not enough players (${allPlayers.length}/11). Please check your filters or select different teams.`);
//       return;
//     }

//     const hasWicketKeeper = allPlayers.some(p => p.role === 'WK-Batsman');
//     if (!hasWicketKeeper) {
//       setError("No wicket-keeper available in selected players. Please adjust your filters.");
//       return;
//     }

//     setIsGenerating(true);
//     setError(null);
//     setRetryCount(prev => prev + 1);

//     try {
//       // Deduct credits
//       await runTransaction(db, async (transaction) => {
//         const userRef = doc(db, "users", user.id);
//         const userDoc = await transaction.get(userRef);
        
//         if (!userDoc.exists()) throw new Error("User not found");
//         if ((userDoc.data().credits || 0) < requiredCredits) {
//           throw new Error("Insufficient balance");
//         }
        
//         transaction.update(userRef, {
//           credits: increment(-requiredCredits)
//         });
//       });

//       // Score players
//       const scoredPlayers = allPlayers.map(player => ({
//         ...player,
//         score: calculatePlayerScore(player),
//         captainScore: (player.selCapPerc || 0) * (player.selectPerc || 0),
//         vcScore: (player.selVcPerc || 0) * (player.selectPerc || 0)
//       }));

//       // Generate teams with progressive fallback strategies
//       const newTeams: GeneratedTeam[] = [];
//       const TOTAL_ATTEMPTS = teamCount * 500; // Increased total attempts
//       let attempts = 0;

//       while (newTeams.length < teamCount && attempts < TOTAL_ATTEMPTS) {
//         attempts++;
//         const team = createBalancedTeam(scoredPlayers, attempts);
//         if (team) {
//           newTeams.push(team);
//           await saveTeamToFirestore(team);
//         }
//       }

//       if (newTeams.length === 0) {
//         throw new Error(`Failed to generate valid teams after ${TOTAL_ATTEMPTS} attempts. Possible solutions:
// 1. Increase risk level for more flexibility
// 2. Check if you have enough players from both teams
// 3. Ensure you have players in all roles (WK, Batsman, All-Rounder, Bowler)
// 4. Relax player filters if too restrictive`);
//       }

//       setGeneratedTeams(newTeams);
//       onBalanceUpdate(userBalance - requiredCredits);
//     } catch (err: any) {
//       setError(err.message || "Failed to generate teams");
//       console.error("Team generation error:", {
//         error: err,
//         team1: team1?.name,
//         team2: team2?.name,
//         playerCount: allPlayers.length,
//         riskLevel,
//         players: allPlayers.map(p => ({
//           name: p.name,
//           role: p.role,
//           team: p.teamName,
//           overseas: p.isOverseas,
//           selectPerc: p.selectPerc
//         }))
//       });
//     } finally {
//       setIsGenerating(false);
//     }
//   }, [
//     team1, team2, teamCount, riskLevel, user,
//     userBalance, requiredCredits, needsPayment,
//     onBalanceUpdate, createBalancedTeam, matchId,
//     retryCount
//   ]);

//   const paymentDialog = showPaymentDialog && (
//     <PaymentDialog
//       currentBalance={userBalance}
//       requiredAmount={paymentAmount}
//       onPaymentSuccess={(amount) => {
//         onBalanceUpdate(userBalance + amount);
//         setShowPaymentDialog(false);
//         handleGenerateTeams();
//       }}
//       onOpenChange={setShowPaymentDialog}
//       open={showPaymentDialog}
//     />
//   );

//   const generateButton = (
//     <div className="space-y-2">
//       <button
//         onClick={handleGenerateTeams}
//         disabled={isGenerating || !team1 || !team2}
//         className={`
//           w-full px-4 py-3 rounded-md font-bold
//           ${isGenerating ? 'bg-gray-500' :
//            needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' :
//            'bg-blue-500 hover:bg-blue-600'}
//           text-white transition-colors
//         `}
//       >
//         {isGenerating ? (
//           <span className="flex items-center justify-center gap-2">
//             <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//             Generating...
//           </span>
//         ) : !team1 || !team2 ? (
//           "Select both teams"
//         ) : needsPayment ? (
//           `Add ₹${paymentAmount} to Generate`
//         ) : (
//           `Generate ${teamCount} Teams (₹${requiredCredits})`
//         )}
//       </button>

//       <div className="flex justify-between text-sm">
//         <span>Your Credits: ₹{userBalance}</span>
//         {needsPayment ? (
//           <span className="text-yellow-500">Need ₹{paymentAmount} more</span>
//         ) : (
//           <span className="text-green-500">Sufficient balance</span>
//         )}
//       </div>

//       {error && (
//         <div className="text-red-500 text-sm p-2 bg-red-50 rounded-lg">
//           <p className="font-medium">{error.split('\n')[0]}</p>
//           {error.includes('\n') && (
//             <div className="mt-2 text-xs space-y-1">
//               {error.split('\n').slice(1).map((line, i) => (
//                 <p key={i}>{line.trim()}</p>
//               ))}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );

//   return {
//     generatedTeams,
//     isGenerating,
//     generateButton,
//     paymentDialog,
//     error,
//     setError
//   };
// };












// "use client";

// import { useState, useCallback, useMemo, useEffect } from "react";
// import { PaymentDialog } from "./PaymentDialog";
// import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";
// import { db } from "@/lib/firebase";
// import { doc, runTransaction, increment, setDoc, collection, query, where, orderBy, getDocs } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";

// interface TeamGeneratorProps {
//   team1?: Team;
//   team2?: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate: (newBalance: number) => void;
//   matchId: string;
// }

// export const useTeamGenerator = ({
//   team1,
//   team2,
//   teamCount,
//   riskLevel,
//   userBalance,
//   onBalanceUpdate,
//   matchId
// }: TeamGeneratorProps) => {
//   const { user } = useUser();
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [retryCount, setRetryCount] = useState(0);

//   const requiredCredits = useMemo(() => teamCount * 5, [teamCount]);
//   const needsPayment = useMemo(() => userBalance < requiredCredits, [userBalance, requiredCredits]);
//   const paymentAmount = useMemo(() => Math.max(requiredCredits - userBalance, 50), [requiredCredits, userBalance]);

//   useEffect(() => {
//     setError(null);
//   }, [team1, team2, riskLevel]);

//   const calculatePlayerScore = (player: PlayerDetail) => {
//     const baseScore = player.selectPerc || 0;
//     const roleWeights = {
//       'WK-Batsman': 1.5,
//       'Batsman': 1.3,
//       'All-Rounder': 1.4,
//       'Bowler': 1.2
//     };
    
//     let riskFactor;
//     if (riskLevel < 30) {
//       riskFactor = 1 + (baseScore / 100);
//     } else if (riskLevel < 70) {
//       riskFactor = 0.9 + (Math.random() * 0.3);
//     } else {
//       riskFactor = 0.7 + (Math.random() * 0.6);
//     }
    
//     return baseScore * (roleWeights[player.role] || 1.0) * riskFactor;
//   };

//   const createBalancedTeam = useCallback((players: PlayerDetail[]) => {
//     if (!team1 || !team2) return null;
    
//     const MAX_ATTEMPTS = 100;
//     let attempts = 0;
    
//     const team1Short = team1.shortName || team1.name.split(' ').map(n => n[0]).join('');
//     const team2Short = team2.shortName || team2.name.split(' ').map(n => n[0]).join('');

//     while (attempts < MAX_ATTEMPTS) {
//       attempts++;
//       const teamComposition = {
//         'WK-Batsman': 0,
//         'Batsman': 0,
//         'All-Rounder': 0,
//         'Bowler': 0,
//         [team1Short]: 0,
//         [team2Short]: 0,
//         overseas: 0,
//         totalScore: 0
//       };

//       const availablePlayers = players
//         .filter(p => !p.substitute && p.select !== false)
//         .map(p => ({ ...p }));

//       const shuffledPlayers = [...availablePlayers].sort(() => Math.random() - 0.5);

//       let captain, viceCaptain;
      
//       if (riskLevel < 30) {
//         const topPlayers = [...shuffledPlayers]
//           .sort((a, b) => (b.selectPerc || 0) - (a.selectPerc || 0))
//           .slice(0, Math.ceil(shuffledPlayers.length * 0.2));
//         captain = topPlayers[Math.floor(Math.random() * topPlayers.length)];
//         viceCaptain = topPlayers.find(p => p.id !== captain?.id) || topPlayers[0];
//       } else if (riskLevel < 70) {
//         const topPlayers = [...shuffledPlayers]
//           .sort((a, b) => (b.selectPerc || 0) - (a.selectPerc || 0))
//           .slice(0, Math.ceil(shuffledPlayers.length * 0.4));
//         captain = topPlayers[Math.floor(Math.random() * topPlayers.length)];
//         viceCaptain = topPlayers.find(p => p.id !== captain?.id) || topPlayers[0];
//       } else {
//         captain = shuffledPlayers[Math.floor(Math.random() * shuffledPlayers.length)];
//         viceCaptain = shuffledPlayers.find(p => p.id !== captain?.id) || shuffledPlayers[0];
//       }

//       if (!captain || !viceCaptain) continue;

//       const teamPlayers: PlayerDetail[] = [captain, viceCaptain];
      
//       [captain, viceCaptain].forEach(player => {
//         teamComposition[player.role]++;
//         teamComposition.totalScore += player.score || 0;
        
//         if (player.teamName === team1.name) teamComposition[team1Short]++;
//         else if (player.teamName === team2.name) teamComposition[team2Short]++;
        
//         if (player.isOverseas) teamComposition.overseas++;
//       });

//       const remainingPlayers = shuffledPlayers.filter(p =>
//         p.id !== captain.id && p.id !== viceCaptain.id
//       );

//       const getNeededRoles = () => {
//         const needed = [];
//         if (teamComposition['WK-Batsman'] < 1) needed.push('WK-Batsman');
//         if (teamComposition['Batsman'] < 3) needed.push('Batsman');
//         if (teamComposition['All-Rounder'] < 2) needed.push('All-Rounder');
//         if (teamComposition['Bowler'] < 3) needed.push('Bowler');
//         return needed.length > 0 ? needed : ['Batsman', 'All-Rounder', 'Bowler'];
//       };

//       while (teamPlayers.length < 11 && remainingPlayers.length > 0) {
//         const neededRoles = getNeededRoles();
        
//         let candidates = remainingPlayers.filter(p => {
//           if (!neededRoles.includes(p.role)) return false;
          
//           const team = p.teamName === team1.name ? team1Short : team2Short;
//           if (teamComposition[team] >= 7) return false;
          
//           if (p.isOverseas && teamComposition.overseas >= 4) return false;
          
//           return true;
//         });

//         if (candidates.length === 0) {
//           candidates = remainingPlayers.filter(p => neededRoles.includes(p.role));
//           if (candidates.length === 0) break;
//         }

//         let selectedPlayer;
//         if (riskLevel < 30) {
//           candidates.sort((a, b) => (b.selectPerc || 0) - (a.selectPerc || 0));
//           selectedPlayer = candidates[0];
//         } else if (riskLevel < 70) {
//           candidates.sort((a, b) => (b.score || 0) - (a.score || 0));
//           const topHalf = candidates.slice(0, Math.ceil(candidates.length * 0.5));
//           selectedPlayer = topHalf[Math.floor(Math.random() * topHalf.length)];
//         } else {
//           selectedPlayer = candidates[Math.floor(Math.random() * candidates.length)];
//         }

//         if (!selectedPlayer) break;

//         teamPlayers.push(selectedPlayer);
        
//         teamComposition[selectedPlayer.role]++;
//         teamComposition.totalScore += selectedPlayer.score || 0;
//         if (selectedPlayer.teamName === team1.name) teamComposition[team1Short]++;
//         else if (selectedPlayer.teamName === team2.name) teamComposition[team2Short]++;
//         if (selectedPlayer.isOverseas) teamComposition.overseas++;

//         const playerIndex = remainingPlayers.findIndex(p => p.id === selectedPlayer.id);
//         if (playerIndex !== -1) {
//           remainingPlayers.splice(playerIndex, 1);
//         }
//       }

//       if (teamPlayers.length !== 11) continue;
//       if (teamComposition.overseas > 4) continue;
//       if (teamComposition[team1Short] > 7 || teamComposition[team2Short] > 7) continue;
//       if (teamComposition[team1Short] < 4 || teamComposition[team2Short] < 4) continue;
//       if (teamComposition['WK-Batsman'] < 1) continue;

//       return {
//         players: teamPlayers,
//         captain,
//         viceCaptain,
//         teamName: `Team ${generatedTeams.length + 1}`,
//         teamComposition,
//         riskLevel,
//         matchId,
//         createdAt: new Date().toISOString()
//       };
//     }

//     return null;
//   }, [team1, team2, generatedTeams.length, riskLevel, matchId]);

//   const saveTeamToFirestore = async (team: GeneratedTeam) => {
//     if (!user || !matchId) {
//       console.error("User or matchId missing - cannot save team");
//       return;
//     }
    
//     try {
//       const teamData = {
//         players: team.players,
//         captain: team.captain,
//         viceCaptain: team.viceCaptain,
//         teamName: team.teamName,
//         teamComposition: team.teamComposition,
//         riskLevel: team.riskLevel,
//         matchId: matchId,
//         createdAt: team.createdAt,
//         userId: user.id,
//         userEmail: user.primaryEmailAddress?.emailAddress || '',
//         matchName: `${team1?.name} vs ${team2?.name}`,
//         team1ShortName: team1?.shortName || team1?.name.split(' ').map(n => n[0]).join(''),
//         team2ShortName: team2?.shortName || team2?.name.split(' ').map(n => n[0]).join(''),
//         team1Logo: team1?.logo || '/fallback-team.png',
//         team2Logo: team2?.logo || '/fallback-team.png'
//       };

//       // Validate no undefined values
//       Object.entries(teamData).forEach(([key, value]) => {
//         if (value === undefined) {
//           throw new Error(`Field ${key} is undefined`);
//         }
//       });

//       const userTeamsRef = collection(db, "users", user.id, "savedTeams");
//       const teamRef = doc(userTeamsRef);
      
//       await setDoc(teamRef, teamData);
//     } catch (err) {
//       console.error("Failed to save team:", err);
//       throw err;
//     }
//   };

//   const fetchSavedTeams = async () => {
//     if (!user || !matchId) return [];
    
//     try {
//       const q = query(
//         collection(db, "users", user.id, "savedTeams"),
//         where("matchId", "==", matchId),
//         orderBy("createdAt", "desc")
//       );
//       const querySnapshot = await getDocs(q);
//       return querySnapshot.docs.map(doc => doc.data() as GeneratedTeam);
//     } catch (err) {
//       console.error("Failed to fetch saved teams:", err);
//       return [];
//     }
//   };

//   const handleGenerateTeams = useCallback(async () => {
//     if (!team1 || !team2) {
//       setError("Select both teams first");
//       return;
//     }

//     if (!user) {
//       setError("Please sign in to generate teams");
//       return;
//     }

//     if (!matchId) {
//       setError("Match ID is missing - please refresh the page");
//       return;
//     }

//     if (needsPayment) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     const allPlayers = [
//       ...(team1.playerDetails || []).filter(p => !p.substitute && p.select !== false),
//       ...(team2.playerDetails || []).filter(p => !p.substitute && p.select !== false)
//     ];

//     if (allPlayers.length < 11) {
//       setError(`Not enough players (${allPlayers.length}/11). Please check your filters.`);
//       return;
//     }

//     const hasWicketKeeper = allPlayers.some(p => p.role === 'WK-Batsman');
//     if (!hasWicketKeeper) {
//       setError("No wicket-keeper available in selected players");
//       return;
//     }

//     setIsGenerating(true);
//     setError(null);
//     setRetryCount(prev => prev + 1);

//     try {
//       await runTransaction(db, async (transaction) => {
//         const userRef = doc(db, "users", user.id);
//         const userDoc = await transaction.get(userRef);
        
//         if (!userDoc.exists()) throw new Error("User not found");
//         if ((userDoc.data().credits || 0) < requiredCredits) {
//           throw new Error("Insufficient balance");
//         }
        
//         transaction.update(userRef, {
//           credits: increment(-requiredCredits)
//         });
//       });

//       const scoredPlayers = allPlayers.map(player => ({
//         ...player,
//         score: calculatePlayerScore(player),
//         captainScore: (player.selCapPerc || 0) * (player.selectPerc || 0),
//         vcScore: (player.selVcPerc || 0) * (player.selectPerc || 0)
//       }));

//       const newTeams: GeneratedTeam[] = [];
//       const TOTAL_ATTEMPTS = teamCount * 100;
//       let attempts = 0;

//       while (newTeams.length < teamCount && attempts < TOTAL_ATTEMPTS) {
//         attempts++;
//         const team = createBalancedTeam(scoredPlayers);
//         if (team) {
//           try {
//             await saveTeamToFirestore(team);
//             newTeams.push(team);
//           } catch (saveError) {
//             console.error("Failed to save team:", saveError);
//           }
//         }
//       }

//       if (newTeams.length === 0) {
//         throw new Error(`Failed to generate valid teams after ${TOTAL_ATTEMPTS} attempts. Try adjusting your risk level or player filters.`);
//       }

//       // Fetch all saved teams for this match
//       const savedTeams = await fetchSavedTeams();
//       setGeneratedTeams(savedTeams);
//       onBalanceUpdate(userBalance - requiredCredits);
//     } catch (err: any) {
//       setError(err.message || "Failed to generate teams");
//       console.error("Team generation error:", err);
//     } finally {
//       setIsGenerating(false);
//     }
//   }, [
//     team1, team2, teamCount, riskLevel, user,
//     userBalance, requiredCredits, needsPayment,
//     onBalanceUpdate, createBalancedTeam, matchId,
//     retryCount
//   ]);

//   const paymentDialog = showPaymentDialog && (
//     <PaymentDialog
//       currentBalance={userBalance}
//       requiredAmount={paymentAmount}
//       onPaymentSuccess={(amount) => {
//         onBalanceUpdate(userBalance + amount);
//         setShowPaymentDialog(false);
//         handleGenerateTeams();
//       }}
//       onOpenChange={setShowPaymentDialog}
//       open={showPaymentDialog}
//     />
//   );

//   const generateButton = (
//     <div className="space-y-2">
//       <button
//         onClick={handleGenerateTeams}
//         disabled={isGenerating || !team1 || !team2}
//         className={`
//           w-full px-4 py-3 rounded-md font-bold
//           ${isGenerating ? 'bg-gray-500' :
//            needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' :
//            'bg-blue-500 hover:bg-blue-600'}
//           text-white transition-colors
//         `}
//       >
//         {isGenerating ? (
//           <span className="flex items-center justify-center gap-2">
//             <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//             Generating...
//           </span>
//         ) : !team1 || !team2 ? (
//           "Select both teams"
//         ) : needsPayment ? (
//           `Add ₹${paymentAmount} to Generate`
//         ) : (
//           `Generate ${teamCount} Teams (₹${requiredCredits})`
//         )}
//       </button>

//       <div className="flex justify-between text-sm">
//         <span>Your Credits: ₹{userBalance}</span>
//         {needsPayment ? (
//           <span className="text-yellow-500">Need ₹{paymentAmount} more</span>
//         ) : (
//           <span className="text-green-500">Sufficient balance</span>
//         )}
//       </div>

//       {error && (
//         <div className="text-red-500 text-sm p-2 bg-red-50 rounded-lg">
//           <p className="font-medium">{error}</p>
//           {error.includes("Not enough players") && (
//             <p className="text-xs mt-1">Try adjusting player filters or selecting different teams</p>
//           )}
//           {error.includes("wicket-keeper") && (
//             <p className="text-xs mt-1">Ensure at least one WK-Batsman is selected</p>
//           )}
//           {error.includes("Failed to generate") && (
//             <div className="text-xs mt-1 space-y-1">
//               <p>Possible solutions:</p>
//               <ul className="list-disc pl-5">
//                 <li>Increase risk level for more flexibility</li>
//                 <li>Check if you have enough players from both teams</li>
//                 <li>Ensure you have players in all roles (WK, Batsman, All-Rounder, Bowler)</li>
//               </ul>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );

//   return {
//     generatedTeams,
//     isGenerating,
//     generateButton,
//     paymentDialog,
//     error,
//     setError,
//     fetchSavedTeams
//   };
// };









// // app/components/TeamGenerator.tsx
// "use client";

// import { useState, useCallback, useMemo, useEffect } from "react";
// import { PaymentDialog } from "./PaymentDialog";
// import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";
// import { db } from "@/lib/firebase";
// import { doc, runTransaction, increment, setDoc, collection, query, where, orderBy, getDocs } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";

// interface TeamGeneratorProps {
//   team1?: Team;
//   team2?: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate: (newBalance: number) => void;
//   matchId: string;
// }

// export const useTeamGenerator = ({
//   team1,
//   team2,
//   teamCount,
//   riskLevel,
//   userBalance,
//   onBalanceUpdate,
//   matchId
// }: TeamGeneratorProps) => {
//   const { user } = useUser();
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const requiredCredits = useMemo(() => teamCount * 5, [teamCount]);
//   const needsPayment = useMemo(() => userBalance < requiredCredits, [userBalance, requiredCredits]);
//   const paymentAmount = useMemo(() => Math.max(requiredCredits - userBalance, 50), [requiredCredits, userBalance]);

//   const calculatePlayerScore = (player: PlayerDetail) => {
//     const baseScore = player.selectPerc || 0;
//     const roleWeights = {
//       'WK-Batsman': 1.5,
//       'Batsman': 1.3,
//       'All-Rounder': 1.4,
//       'Bowler': 1.2
//     };
    
//     let riskFactor;
//     if (riskLevel < 30) {
//       riskFactor = 1 + (baseScore / 100);
//     } else if (riskLevel < 70) {
//       riskFactor = 0.9 + (Math.random() * 0.3);
//     } else {
//       riskFactor = 0.7 + (Math.random() * 0.6);
//     }
    
//     return baseScore * (roleWeights[player.role] || 1.0) * riskFactor;
//   };

//   const createBalancedTeam = useCallback((players: PlayerDetail[]) => {
//     if (!team1 || !team2) return null;
    
//     const MAX_ATTEMPTS = 100;
//     let attempts = 0;
    
//     const team1Short = team1.shortName || team1.name.split(' ').map(n => n[0]).join('');
//     const team2Short = team2.shortName || team2.name.split(' ').map(n => n[0]).join('');

//     while (attempts < MAX_ATTEMPTS) {
//       attempts++;
//       const teamComposition = {
//         'WK-Batsman': 0,
//         'Batsman': 0,
//         'All-Rounder': 0,
//         'Bowler': 0,
//         [team1Short]: 0,
//         [team2Short]: 0,
//         overseas: 0,
//         totalScore: 0
//       };

//       const availablePlayers = players
//         .filter(p => !p.substitute && p.select !== false)
//         .map(p => ({ ...p }));

//       const shuffledPlayers = [...availablePlayers].sort(() => Math.random() - 0.5);

//       let captain, viceCaptain;
      
//       if (riskLevel < 30) {
//         const topPlayers = [...shuffledPlayers]
//           .sort((a, b) => (b.selectPerc || 0) - (a.selectPerc || 0))
//           .slice(0, Math.ceil(shuffledPlayers.length * 0.2));
//         captain = topPlayers[Math.floor(Math.random() * topPlayers.length)];
//         viceCaptain = topPlayers.find(p => p.id !== captain?.id) || topPlayers[0];
//       } else if (riskLevel < 70) {
//         const topPlayers = [...shuffledPlayers]
//           .sort((a, b) => (b.selectPerc || 0) - (a.selectPerc || 0))
//           .slice(0, Math.ceil(shuffledPlayers.length * 0.4));
//         captain = topPlayers[Math.floor(Math.random() * topPlayers.length)];
//         viceCaptain = topPlayers.find(p => p.id !== captain?.id) || topPlayers[0];
//       } else {
//         captain = shuffledPlayers[Math.floor(Math.random() * shuffledPlayers.length)];
//         viceCaptain = shuffledPlayers.find(p => p.id !== captain?.id) || shuffledPlayers[0];
//       }

//       if (!captain || !viceCaptain) continue;

//       const teamPlayers: PlayerDetail[] = [captain, viceCaptain];
      
//       [captain, viceCaptain].forEach(player => {
//         teamComposition[player.role]++;
//         teamComposition.totalScore += player.score || 0;
        
//         if (player.teamName === team1.name) teamComposition[team1Short]++;
//         else if (player.teamName === team2.name) teamComposition[team2Short]++;
        
//         if (player.isOverseas) teamComposition.overseas++;
//       });

//       const remainingPlayers = shuffledPlayers.filter(p =>
//         p.id !== captain.id && p.id !== viceCaptain.id
//       );

//       const getNeededRoles = () => {
//         const needed = [];
//         if (teamComposition['WK-Batsman'] < 1) needed.push('WK-Batsman');
//         if (teamComposition['Batsman'] < 3) needed.push('Batsman');
//         if (teamComposition['All-Rounder'] < 2) needed.push('All-Rounder');
//         if (teamComposition['Bowler'] < 3) needed.push('Bowler');
//         return needed.length > 0 ? needed : ['Batsman', 'All-Rounder', 'Bowler'];
//       };

//       while (teamPlayers.length < 11 && remainingPlayers.length > 0) {
//         const neededRoles = getNeededRoles();
        
//         let candidates = remainingPlayers.filter(p => {
//           if (!neededRoles.includes(p.role)) return false;
          
//           const team = p.teamName === team1.name ? team1Short : team2Short;
//           if (teamComposition[team] >= 7) return false;
          
//           if (p.isOverseas && teamComposition.overseas >= 4) return false;
          
//           return true;
//         });

//         if (candidates.length === 0) {
//           candidates = remainingPlayers.filter(p => neededRoles.includes(p.role));
//           if (candidates.length === 0) break;
//         }

//         let selectedPlayer;
//         if (riskLevel < 30) {
//           candidates.sort((a, b) => (b.selectPerc || 0) - (a.selectPerc || 0));
//           selectedPlayer = candidates[0];
//         } else if (riskLevel < 70) {
//           candidates.sort((a, b) => (b.score || 0) - (a.score || 0));
//           const topHalf = candidates.slice(0, Math.ceil(candidates.length * 0.5));
//           selectedPlayer = topHalf[Math.floor(Math.random() * topHalf.length)];
//         } else {
//           selectedPlayer = candidates[Math.floor(Math.random() * candidates.length)];
//         }

//         if (!selectedPlayer) break;

//         teamPlayers.push(selectedPlayer);
        
//         teamComposition[selectedPlayer.role]++;
//         teamComposition.totalScore += selectedPlayer.score || 0;
//         if (selectedPlayer.teamName === team1.name) teamComposition[team1Short]++;
//         else if (selectedPlayer.teamName === team2.name) teamComposition[team2Short]++;
//         if (selectedPlayer.isOverseas) teamComposition.overseas++;

//         const playerIndex = remainingPlayers.findIndex(p => p.id === selectedPlayer.id);
//         if (playerIndex !== -1) {
//           remainingPlayers.splice(playerIndex, 1);
//         }
//       }

//       if (teamPlayers.length !== 11) continue;
//       if (teamComposition.overseas > 4) continue;
//       if (teamComposition[team1Short] > 7 || teamComposition[team2Short] > 7) continue;
//       if (teamComposition[team1Short] < 4 || teamComposition[team2Short] < 4) continue;
//       if (teamComposition['WK-Batsman'] < 1) continue;

//       return {
//         players: teamPlayers,
//         captain,
//         viceCaptain,
//         teamName: `Team ${generatedTeams.length + 1}`,
//         teamComposition,
//         riskLevel,
//         matchId,
//         createdAt: new Date().toISOString()
//       };
//     }

//     return null;
//   }, [team1, team2, generatedTeams.length, riskLevel, matchId]);

//   const saveTeamToFirestore = async (team: GeneratedTeam) => {
//     if (!user || !matchId) return;
    
//     try {
//       const teamData = {
//         ...team,
//         userId: user.id,
//         userEmail: user.primaryEmailAddress?.emailAddress || '',
//         matchName: `${team1?.name} vs ${team2?.name}`,
//         team1ShortName: team1?.shortName || team1?.name.split(' ').map(n => n[0]).join(''),
//         team2ShortName: team2?.shortName || team2?.name.split(' ').map(n => n[0]).join(''),
//         team1Logo: team1?.logo || '/fallback-team.png',
//         team2Logo: team2?.logo || '/fallback-team.png'
//       };

//       const userTeamsRef = collection(db, "users", user.id, "savedTeams");
//       const teamRef = doc(userTeamsRef);
      
//       await setDoc(teamRef, teamData);
//     } catch (err) {
//       console.error("Failed to save team:", err);
//     }
//   };

//   const fetchSavedTeams = async () => {
//     if (!user || !matchId) return [];
    
//     try {
//       const q = query(
//         collection(db, "users", user.id, "savedTeams"),
//         where("matchId", "==", matchId),
//         orderBy("createdAt", "desc")
//       );
//       const querySnapshot = await getDocs(q);
//       return querySnapshot.docs.map(doc => doc.data() as GeneratedTeam);
//     } catch (err) {
//       console.error("Failed to fetch saved teams:", err);
//       return [];
//     }
//   };

//   const handleGenerateTeams = useCallback(async () => {
//     if (!team1 || !team2) {
//       setError("Select both teams first");
//       return;
//     }

//     if (!user) {
//       setError("Please sign in to generate teams");
//       return;
//     }

//     if (needsPayment) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     const allPlayers = [
//       ...(team1.playerDetails || []).filter(p => !p.substitute && p.select !== false),
//       ...(team2.playerDetails || []).filter(p => !p.substitute && p.select !== false)
//     ];

//     if (allPlayers.length < 11) {
//       setError(`Not enough players (${allPlayers.length}/11). Please check your filters.`);
//       return;
//     }

//     const hasWicketKeeper = allPlayers.some(p => p.role === 'WK-Batsman');
//     if (!hasWicketKeeper) {
//       setError("No wicket-keeper available in selected players");
//       return;
//     }

//     setIsGenerating(true);
//     setError(null);

//     try {
//       await runTransaction(db, async (transaction) => {
//         const userRef = doc(db, "users", user.id);
//         const userDoc = await transaction.get(userRef);
        
//         if (!userDoc.exists()) throw new Error("User not found");
//         if ((userDoc.data().credits || 0) < requiredCredits) {
//           throw new Error("Insufficient balance");
//         }
        
//         transaction.update(userRef, {
//           credits: increment(-requiredCredits)
//         });
//       });

//       const scoredPlayers = allPlayers.map(player => ({
//         ...player,
//         score: calculatePlayerScore(player),
//         captainScore: (player.selCapPerc || 0) * (player.selectPerc || 0),
//         vcScore: (player.selVcPerc || 0) * (player.selectPerc || 0)
//       }));

//       const newTeams: GeneratedTeam[] = [];
//       const TOTAL_ATTEMPTS = teamCount * 100;
//       let attempts = 0;

//       while (newTeams.length < teamCount && attempts < TOTAL_ATTEMPTS) {
//         attempts++;
//         const team = createBalancedTeam(scoredPlayers);
//         if (team) {
//           await saveTeamToFirestore(team);
//           newTeams.push(team);
//         }
//       }

//       if (newTeams.length === 0) {
//         throw new Error(`Failed to generate valid teams after ${TOTAL_ATTEMPTS} attempts. Try adjusting your risk level or player filters.`);
//       }

//       const savedTeams = await fetchSavedTeams();
//       setGeneratedTeams(savedTeams);
//       onBalanceUpdate(userBalance - requiredCredits);
//     } catch (err: any) {
//       setError(err.message || "Failed to generate teams");
//     } finally {
//       setIsGenerating(false);
//     }
//   }, [
//     team1, team2, teamCount, riskLevel, user,
//     userBalance, requiredCredits, needsPayment,
//     onBalanceUpdate, createBalancedTeam, matchId
//   ]);

//   const paymentDialog = showPaymentDialog && (
//     <PaymentDialog
//       currentBalance={userBalance}
//       requiredAmount={paymentAmount}
//       onPaymentSuccess={(amount) => {
//         onBalanceUpdate(userBalance + amount);
//         setShowPaymentDialog(false);
//         handleGenerateTeams();
//       }}
//       onOpenChange={setShowPaymentDialog}
//       open={showPaymentDialog}
//     />
//   );

//   const generateButton = (
//     <div className="space-y-2">
//       <button
//         onClick={handleGenerateTeams}
//         disabled={isGenerating || !team1 || !team2}
//         className={`
//           w-full px-4 py-3 rounded-md font-bold
//           ${isGenerating ? 'bg-gray-500' :
//            needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' :
//            'bg-blue-500 hover:bg-blue-600'}
//           text-white transition-colors
//         `}
//       >
//         {isGenerating ? (
//           <span className="flex items-center justify-center gap-2">
//             <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//             Generating...
//           </span>
//         ) : !team1 || !team2 ? (
//           "Select both teams"
//         ) : needsPayment ? (
//           `Add ₹${paymentAmount} to Generate`
//         ) : (
//           `Generate ${teamCount} Teams (₹${requiredCredits})`
//         )}
//       </button>

//       <div className="flex justify-between text-sm">
//         <span>Your Credits: ₹{userBalance}</span>
//         {needsPayment ? (
//           <span className="text-yellow-500">Need ₹{paymentAmount} more</span>
//         ) : (
//           <span className="text-green-500">Sufficient balance</span>
//         )}
//       </div>

//       {error && (
//         <div className="text-red-500 text-sm p-2 bg-red-50 rounded-lg">
//           <p className="font-medium">{error}</p>
//           {error.includes("Not enough players") && (
//             <p className="text-xs mt-1">Try adjusting player filters or selecting different teams</p>
//           )}
//           {error.includes("wicket-keeper") && (
//             <p className="text-xs mt-1">Ensure at least one WK-Batsman is selected</p>
//           )}
//           {error.includes("Failed to generate") && (
//             <div className="text-xs mt-1 space-y-1">
//               <p>Possible solutions:</p>
//               <ul className="list-disc pl-5">
//                 <li>Increase risk level for more flexibility</li>
//                 <li>Check if you have enough players from both teams</li>
//                 <li>Ensure you have players in all roles (WK, Batsman, All-Rounder, Bowler)</li>
//               </ul>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );

//   return {
//     generatedTeams,
//     isGenerating,
//     generateButton,
//     paymentDialog,
//     error,
//     setError,
//     fetchSavedTeams
//   };
// };







// "use client";

// import { useState, useCallback, useMemo, useEffect } from "react";
// import { PaymentDialog } from "./PaymentDialog";
// import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";
// import { db } from "@/lib/firebase";
// import { doc, runTransaction, increment, setDoc, collection, query, where, orderBy, getDocs } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";

// interface TeamGeneratorProps {
//   team1?: Team;
//   team2?: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate: (newBalance: number) => void;
//   matchId: string;
// }

// export const useTeamGenerator = ({
//   team1,
//   team2,
//   teamCount,
//   riskLevel,
//   userBalance,
//   onBalanceUpdate,
//   matchId
// }: TeamGeneratorProps) => {
//   const { user } = useUser();
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const requiredCredits = useMemo(() => teamCount * 5, [teamCount]);
//   const needsPayment = useMemo(() => userBalance < requiredCredits, [userBalance, requiredCredits]);
//   const paymentAmount = useMemo(() => Math.max(requiredCredits - userBalance, 50), [requiredCredits, userBalance]);

//   const calculatePlayerScore = (player: PlayerDetail) => {
//     const baseScore = player.selectPerc || 0;
//     const roleWeights = {
//       'WK-Batsman': 1.5,
//       'Batsman': 1.3,
//       'All-Rounder': 1.4,
//       'Bowler': 1.2
//     };
    
//     let riskFactor;
//     if (riskLevel < 30) {
//       riskFactor = 1 + (baseScore / 100);
//     } else if (riskLevel < 70) {
//       riskFactor = 0.9 + (Math.random() * 0.3);
//     } else {
//       riskFactor = 0.7 + (Math.random() * 0.6);
//     }
    
//     return baseScore * (roleWeights[player.role] || 1.0) * riskFactor;
//   };

//   const createBalancedTeam = useCallback((players: PlayerDetail[]) => {
//     if (!team1 || !team2) return null;
    
//     const MAX_ATTEMPTS = 100;
//     let attempts = 0;
    
//     const team1Short = team1.shortName || team1.name.split(' ').map(n => n[0]).join('');
//     const team2Short = team2.shortName || team2.name.split(' ').map(n => n[0]).join('');

//     while (attempts < MAX_ATTEMPTS) {
//       attempts++;
//       const teamComposition = {
//         'WK-Batsman': 0,
//         'Batsman': 0,
//         'All-Rounder': 0,
//         'Bowler': 0,
//         [team1Short]: 0,
//         [team2Short]: 0,
//         overseas: 0,
//         totalScore: 0
//       };

//       const availablePlayers = players
//         .filter(p => !p.substitute && p.select !== false)
//         .map(p => ({ ...p }));

//       const shuffledPlayers = [...availablePlayers].sort(() => Math.random() - 0.5);

//       let captain, viceCaptain;
      
//       if (riskLevel < 30) {
//         const topPlayers = [...shuffledPlayers]
//           .sort((a, b) => (b.selectPerc || 0) - (a.selectPerc || 0))
//           .slice(0, Math.ceil(shuffledPlayers.length * 0.2));
//         captain = topPlayers[Math.floor(Math.random() * topPlayers.length)];
//         viceCaptain = topPlayers.find(p => p.id !== captain?.id) || topPlayers[0];
//       } else if (riskLevel < 70) {
//         const topPlayers = [...shuffledPlayers]
//           .sort((a, b) => (b.selectPerc || 0) - (a.selectPerc || 0))
//           .slice(0, Math.ceil(shuffledPlayers.length * 0.4));
//         captain = topPlayers[Math.floor(Math.random() * topPlayers.length)];
//         viceCaptain = topPlayers.find(p => p.id !== captain?.id) || topPlayers[0];
//       } else {
//         captain = shuffledPlayers[Math.floor(Math.random() * shuffledPlayers.length)];
//         viceCaptain = shuffledPlayers.find(p => p.id !== captain?.id) || shuffledPlayers[0];
//       }

//       if (!captain || !viceCaptain) continue;

//       const teamPlayers: PlayerDetail[] = [captain, viceCaptain];
      
//       [captain, viceCaptain].forEach(player => {
//         teamComposition[player.role]++;
//         teamComposition.totalScore += player.score || 0;
        
//         if (player.teamName === team1.name) teamComposition[team1Short]++;
//         else if (player.teamName === team2.name) teamComposition[team2Short]++;
        
//         if (player.isOverseas) teamComposition.overseas++;
//       });

//       const remainingPlayers = shuffledPlayers.filter(p =>
//         p.id !== captain.id && p.id !== viceCaptain.id
//       );

//       const getNeededRoles = () => {
//         const needed = [];
//         if (teamComposition['WK-Batsman'] < 1) needed.push('WK-Batsman');
//         if (teamComposition['Batsman'] < 3) needed.push('Batsman');
//         if (teamComposition['All-Rounder'] < 2) needed.push('All-Rounder');
//         if (teamComposition['Bowler'] < 3) needed.push('Bowler');
//         return needed.length > 0 ? needed : ['Batsman', 'All-Rounder', 'Bowler'];
//       };

//       while (teamPlayers.length < 11 && remainingPlayers.length > 0) {
//         const neededRoles = getNeededRoles();
        
//         let candidates = remainingPlayers.filter(p => {
//           if (!neededRoles.includes(p.role)) return false;
          
//           const team = p.teamName === team1.name ? team1Short : team2Short;
//           if (teamComposition[team] >= 7) return false;
          
//           if (p.isOverseas && teamComposition.overseas >= 4) return false;
          
//           return true;
//         });

//         if (candidates.length === 0) {
//           candidates = remainingPlayers.filter(p => neededRoles.includes(p.role));
//           if (candidates.length === 0) break;
//         }

//         let selectedPlayer;
//         if (riskLevel < 30) {
//           candidates.sort((a, b) => (b.selectPerc || 0) - (a.selectPerc || 0));
//           selectedPlayer = candidates[0];
//         } else if (riskLevel < 70) {
//           candidates.sort((a, b) => (b.score || 0) - (a.score || 0));
//           const topHalf = candidates.slice(0, Math.ceil(candidates.length * 0.5));
//           selectedPlayer = topHalf[Math.floor(Math.random() * topHalf.length)];
//         } else {
//           selectedPlayer = candidates[Math.floor(Math.random() * candidates.length)];
//         }

//         if (!selectedPlayer) break;

//         teamPlayers.push(selectedPlayer);
        
//         teamComposition[selectedPlayer.role]++;
//         teamComposition.totalScore += selectedPlayer.score || 0;
//         if (selectedPlayer.teamName === team1.name) teamComposition[team1Short]++;
//         else if (selectedPlayer.teamName === team2.name) teamComposition[team2Short]++;
//         if (selectedPlayer.isOverseas) teamComposition.overseas++;

//         const playerIndex = remainingPlayers.findIndex(p => p.id === selectedPlayer.id);
//         if (playerIndex !== -1) {
//           remainingPlayers.splice(playerIndex, 1);
//         }
//       }

//       if (teamPlayers.length !== 11) continue;
//       if (teamComposition.overseas > 4) continue;
//       if (teamComposition[team1Short] > 7 || teamComposition[team2Short] > 7) continue;
//       if (teamComposition[team1Short] < 4 || teamComposition[team2Short] < 4) continue;
//       if (teamComposition['WK-Batsman'] < 1) continue;

//       return {
//         players: teamPlayers,
//         captain,
//         viceCaptain,
//         teamName: `Team ${generatedTeams.length + 1}`,
//         teamComposition,
//         riskLevel,
//         matchId,
//         createdAt: new Date().toISOString()
//       };
//     }

//     return null;
//   }, [team1, team2, generatedTeams.length, riskLevel, matchId]);

//   const saveTeamToFirestore = async (team: GeneratedTeam) => {
//     if (!user || !matchId) return;
    
//     try {
//       const teamData = {
//         ...team,
//         userId: user.id,
//         userEmail: user.primaryEmailAddress?.emailAddress || '',
//         matchName: `${team1?.name} vs ${team2?.name}`,
//         team1ShortName: team1?.shortName || team1?.name.split(' ').map(n => n[0]).join(''),
//         team2ShortName: team2?.shortName || team2?.name.split(' ').map(n => n[0]).join(''),
//         team1Logo: team1?.logo || '/fallback-team.png',
//         team2Logo: team2?.logo || '/fallback-team.png'
//       };

//       const userTeamsRef = collection(db, "users", user.id, "savedTeams");
//       const teamRef = doc(userTeamsRef);
      
//       await setDoc(teamRef, teamData);
//     } catch (err) {
//       console.error("Failed to save team:", err);
//     }
//   };

//   const fetchSavedTeams = async () => {
//     if (!user || !matchId) return [];
    
//     try {
//       // First try with the composite index query
//       try {
//         const q = query(
//           collection(db, "users", user.id, "savedTeams"),
//           where("matchId", "==", matchId),
//           orderBy("createdAt", "desc")
//         );
//         const querySnapshot = await getDocs(q);
//         return querySnapshot.docs.map(doc => doc.data() as GeneratedTeam);
//       } catch (indexError) {
//         // Fallback to simple query if index doesn't exist
//         console.log("Falling back to simple query without ordering");
//         const q = query(
//           collection(db, "users", user.id, "savedTeams"),
//           where("matchId", "==", matchId)
//         );
//         const querySnapshot = await getDocs(q);
//         const teams = querySnapshot.docs.map(doc => doc.data() as GeneratedTeam);
//         // Sort manually if needed
//         return teams.sort((a, b) =>
//           new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
//         );
//       }
//     } catch (err) {
//       console.error("Failed to fetch saved teams:", err);
//       return [];
//     }
//   };

//   const handleGenerateTeams = useCallback(async () => {
//     if (!team1 || !team2) {
//       setError("Select both teams first");
//       return;
//     }

//     if (!user) {
//       setError("Please sign in to generate teams");
//       return;
//     }

//     if (needsPayment) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     const allPlayers = [
//       ...(team1.playerDetails || []).filter(p => !p.substitute && p.select !== false),
//       ...(team2.playerDetails || []).filter(p => !p.substitute && p.select !== false)
//     ];

//     if (allPlayers.length < 11) {
//       setError(`Not enough players (${allPlayers.length}/11). Please check your filters.`);
//       return;
//     }

//     const hasWicketKeeper = allPlayers.some(p => p.role === 'WK-Batsman');
//     if (!hasWicketKeeper) {
//       setError("No wicket-keeper available in selected players");
//       return;
//     }

//     setIsGenerating(true);
//     setError(null);

//     try {
//       await runTransaction(db, async (transaction) => {
//         const userRef = doc(db, "users", user.id);
//         const userDoc = await transaction.get(userRef);
        
//         if (!userDoc.exists()) throw new Error("User not found");
//         if ((userDoc.data().credits || 0) < requiredCredits) {
//           throw new Error("Insufficient balance");
//         }
        
//         transaction.update(userRef, {
//           credits: increment(-requiredCredits)
//         });
//       });

//       const scoredPlayers = allPlayers.map(player => ({
//         ...player,
//         score: calculatePlayerScore(player),
//         captainScore: (player.selCapPerc || 0) * (player.selectPerc || 0),
//         vcScore: (player.selVcPerc || 0) * (player.selectPerc || 0)
//       }));

//       const newTeams: GeneratedTeam[] = [];
//       const TOTAL_ATTEMPTS = teamCount * 100;
//       let attempts = 0;

//       while (newTeams.length < teamCount && attempts < TOTAL_ATTEMPTS) {
//         attempts++;
//         const team = createBalancedTeam(scoredPlayers);
//         if (team) {
//           await saveTeamToFirestore(team);
//           newTeams.push(team);
//         }
//       }

//       if (newTeams.length === 0) {
//         throw new Error(`Failed to generate valid teams after ${TOTAL_ATTEMPTS} attempts. Try adjusting your risk level or player filters.`);
//       }

//       const savedTeams = await fetchSavedTeams();
//       setGeneratedTeams(savedTeams);
//       onBalanceUpdate(userBalance - requiredCredits);
//     } catch (err: any) {
//       setError(err.message || "Failed to generate teams");
//     } finally {
//       setIsGenerating(false);
//     }
//   }, [
//     team1, team2, teamCount, riskLevel, user,
//     userBalance, requiredCredits, needsPayment,
//     onBalanceUpdate, createBalancedTeam, matchId
//   ]);

//   const paymentDialog = showPaymentDialog && (
//     <PaymentDialog
//       currentBalance={userBalance}
//       requiredAmount={paymentAmount}
//       onPaymentSuccess={(amount) => {
//         onBalanceUpdate(userBalance + amount);
//         setShowPaymentDialog(false);
//         handleGenerateTeams();
//       }}
//       onOpenChange={setShowPaymentDialog}
//       open={showPaymentDialog}
//     />
//   );

//   const generateButton = (
//     <div className="space-y-2">
//       <button
//         onClick={handleGenerateTeams}
//         disabled={isGenerating || !team1 || !team2}
//         className={`
//           w-full px-4 py-3 rounded-md font-bold
//           ${isGenerating ? 'bg-gray-500' :
//            needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' :
//            'bg-blue-500 hover:bg-blue-600'}
//           text-white transition-colors
//         `}
//       >
//         {isGenerating ? (
//           <span className="flex items-center justify-center gap-2">
//             <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//             Generating...
//           </span>
//         ) : !team1 || !team2 ? (
//           "Select both teams"
//         ) : needsPayment ? (
//           `Add ₹${paymentAmount} to Generate`
//         ) : (
//           `Generate ${teamCount} Teams (₹${requiredCredits})`
//         )}
//       </button>

//       <div className="flex justify-between text-sm">
//         <span>Your Credits: ₹{userBalance}</span>
//         {needsPayment ? (
//           <span className="text-yellow-500">Need ₹{paymentAmount} more</span>
//         ) : (
//           <span className="text-green-500">Sufficient balance</span>
//         )}
//       </div>

//       {error && (
//         <div className="text-red-500 text-sm p-2 bg-red-50 rounded-lg">
//           <p className="font-medium">{error}</p>
//           {error.includes("Not enough players") && (
//             <p className="text-xs mt-1">Try adjusting player filters or selecting different teams</p>
//           )}
//           {error.includes("wicket-keeper") && (
//             <p className="text-xs mt-1">Ensure at least one WK-Batsman is selected</p>
//           )}
//           {error.includes("Failed to generate") && (
//             <div className="text-xs mt-1 space-y-1">
//               <p>Possible solutions:</p>
//               <ul className="list-disc pl-5">
//                 <li>Increase risk level for more flexibility</li>
//                 <li>Check if you have enough players from both teams</li>
//                 <li>Ensure you have players in all roles (WK, Batsman, All-Rounder, Bowler)</li>
//               </ul>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );

//   return {
//     generatedTeams,
//     isGenerating,
//     generateButton,
//     paymentDialog,
//     error,
//     setError,
//     fetchSavedTeams
//   };
// };





// "use client";

// import { useState, useCallback, useMemo, useEffect } from "react";
// import { PaymentDialog } from "./PaymentDialog";
// import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";
// import { db } from "@/lib/firebase";
// import { doc, runTransaction, increment, setDoc, collection, query, where, orderBy, getDocs } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";

// interface TeamGeneratorProps {
//   team1?: Team;
//   team2?: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate: (newBalance: number) => void;
//   matchId: string;
// }

// export const useTeamGenerator = ({
//   team1,
//   team2,
//   teamCount,
//   riskLevel,
//   userBalance,
//   onBalanceUpdate,
//   matchId
// }: TeamGeneratorProps) => {
//   const { user } = useUser();
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [roleCounts, setRoleCounts] = useState({
//     wk: 0,
//     batsmen: 0,
//     allRounders: 0,
//     bowlers: 0
//   });

//   const requiredCredits = useMemo(() => teamCount * 5, [teamCount]);
//   const needsPayment = useMemo(() => userBalance < requiredCredits, [userBalance, requiredCredits]);
//   const paymentAmount = useMemo(() => Math.max(requiredCredits - userBalance, 50), [requiredCredits, userBalance]);

//   const calculatePlayerScore = (player: PlayerDetail) => {
//     const baseScore = player.selectPerc || 0;
//     const roleWeights = {
//       'WK-Batsman': 1.5,
//       'Batsman': 1.3,
//       'All-Rounder': 1.4,
//       'Bowler': 1.2
//     };
    
//     let riskFactor;
//     if (riskLevel < 30) {
//       riskFactor = 1 + (baseScore / 100);
//     } else if (riskLevel < 70) {
//       riskFactor = 0.9 + (Math.random() * 0.3);
//     } else {
//       riskFactor = 0.7 + (Math.random() * 0.6);
//     }
    
//     return baseScore * (roleWeights[player.role] || 1.0) * riskFactor;
//   };

//   const createBalancedTeam = useCallback((players: PlayerDetail[]) => {
//     if (!team1 || !team2) return null;
    
//     const MAX_ATTEMPTS = 500;
//     let attempts = 0;
    
//     const team1Short = team1.shortName || team1.name.split(' ').map(n => n[0]).join('');
//     const team2Short = team2.shortName || team2.name.split(' ').map(n => n[0]).join('');

//     // Pre-filter available players and calculate scores
//     const availablePlayers = players
//       .filter(p => !p.substitute && p.select !== false)
//       .map(p => ({ ...p, score: calculatePlayerScore(p) }));

//     while (attempts < MAX_ATTEMPTS) {
//       attempts++;
//       const teamComposition = {
//         'WK-Batsman': 0,
//         'Batsman': 0,
//         'All-Rounder': 0,
//         'Bowler': 0,
//         [team1Short]: 0,
//         [team2Short]: 0,
//         overseas: 0,
//         totalScore: 0
//       };

//       // Fresh shuffle for each attempt
//       const shuffledPlayers = [...availablePlayers].sort(() => Math.random() - 0.5);

//       // Select captain and vice-captain
//       let captain, viceCaptain;
//       const selectTopPlayers = (percentage: number) => {
//         const count = Math.ceil(shuffledPlayers.length * percentage);
//         return [...shuffledPlayers]
//           .sort((a, b) => (b.score || 0) - (a.score || 0))
//           .slice(0, count);
//       };

//       if (riskLevel < 30) {
//         const topPlayers = selectTopPlayers(0.2);
//         captain = topPlayers[0];
//         viceCaptain = topPlayers[1] || topPlayers[0];
//       } else if (riskLevel < 70) {
//         const topPlayers = selectTopPlayers(0.4);
//         captain = topPlayers[Math.floor(Math.random() * topPlayers.length)];
//         viceCaptain = topPlayers.find(p => p.id !== captain?.id) || topPlayers[0];
//       } else {
//         captain = shuffledPlayers[Math.floor(Math.random() * shuffledPlayers.length)];
//         viceCaptain = shuffledPlayers.find(p => p.id !== captain?.id) || shuffledPlayers[0];
//       }

//       if (!captain || !viceCaptain) continue;

//       const teamPlayers: PlayerDetail[] = [captain, viceCaptain];
      
//       // Update composition with captain/vice-captain
//       [captain, viceCaptain].forEach(player => {
//         teamComposition[player.role]++;
//         teamComposition.totalScore += player.score || 0;
//         teamComposition[player.teamName === team1.name ? team1Short : team2Short]++;
//         if (player.isOverseas) teamComposition.overseas++;
//       });

//       const remainingPlayers = shuffledPlayers.filter(p =>
//         p.id !== captain.id && p.id !== viceCaptain.id
//       );

//       // Fill remaining spots
//       while (teamPlayers.length < 11 && remainingPlayers.length > 0) {
//         const neededRoles = [];
//         if (teamComposition['WK-Batsman'] < 1) neededRoles.push('WK-Batsman');
//         if (teamComposition['Batsman'] < 3) neededRoles.push('Batsman');
//         if (teamComposition['All-Rounder'] < 2) neededRoles.push('All-Rounder');
//         if (teamComposition['Bowler'] < 3) neededRoles.push('Bowler');
        
//         const rolesToConsider = neededRoles.length > 0 ? neededRoles : ['Batsman', 'All-Rounder', 'Bowler'];
        
//         let candidates = remainingPlayers.filter(p => {
//           if (!rolesToConsider.includes(p.role)) return false;
//           const team = p.teamName === team1.name ? team1Short : team2Short;
//           if (teamComposition[team] >= 7) return false;
//           if (p.isOverseas && teamComposition.overseas >= 4) return false;
//           return true;
//         });

//         // If no candidates with strict filters, loosen them
//         if (candidates.length === 0) {
//           candidates = remainingPlayers.filter(p => rolesToConsider.includes(p.role));
//           if (candidates.length === 0) break;
//         }

//         // Select player based on risk level
//         let selectedPlayer;
//         if (riskLevel < 30) {
//           candidates.sort((a, b) => (b.score || 0) - (a.score || 0));
//           selectedPlayer = candidates[0];
//         } else if (riskLevel < 70) {
//           candidates.sort((a, b) => (b.score || 0) - (a.score || 0));
//           const topHalf = candidates.slice(0, Math.ceil(candidates.length * 0.5));
//           selectedPlayer = topHalf[Math.floor(Math.random() * topHalf.length)];
//         } else {
//           selectedPlayer = candidates[Math.floor(Math.random() * candidates.length)];
//         }

//         if (!selectedPlayer) break;

//         teamPlayers.push(selectedPlayer);
//         teamComposition[selectedPlayer.role]++;
//         teamComposition.totalScore += selectedPlayer.score || 0;
//         teamComposition[selectedPlayer.teamName === team1.name ? team1Short : team2Short]++;
//         if (selectedPlayer.isOverseas) teamComposition.overseas++;

//         // Remove selected player
//         const index = remainingPlayers.findIndex(p => p.id === selectedPlayer.id);
//         if (index !== -1) remainingPlayers.splice(index, 1);
//       }

//       // Validate final team
//       if (teamPlayers.length !== 11) continue;
//       if (teamComposition.overseas > 4) continue;
//       if (teamComposition[team1Short] > 7 || teamComposition[team2Short] > 7) continue;
//       if (teamComposition[team1Short] < 4 || teamComposition[team2Short] < 4) continue;
//       if (teamComposition['WK-Batsman'] < 1) continue;
//       if (teamComposition['Batsman'] < 3) continue;
//       if (teamComposition['All-Rounder'] < 2) continue;
//       if (teamComposition['Bowler'] < 3) continue;

//       return {
//         players: teamPlayers,
//         captain,
//         viceCaptain,
//         teamName: `Team ${generatedTeams.length + 1}`,
//         teamComposition,
//         riskLevel,
//         matchId,
//         createdAt: new Date().toISOString()
//       };
//     }

//     return null;
//   }, [team1, team2, generatedTeams.length, riskLevel, matchId]);

//   const saveTeamToFirestore = async (team: GeneratedTeam) => {
//     if (!user || !matchId) return;
    
//     try {
//       const teamData = {
//         ...team,
//         userId: user.id,
//         userEmail: user.primaryEmailAddress?.emailAddress || '',
//         matchName: `${team1?.name} vs ${team2?.name}`,
//         team1ShortName: team1?.shortName || team1?.name.split(' ').map(n => n[0]).join(''),
//         team2ShortName: team2?.shortName || team2?.name.split(' ').map(n => n[0]).join(''),
//         team1Logo: team1?.logo || '/fallback-team.png',
//         team2Logo: team2?.logo || '/fallback-team.png'
//       };

//       const userTeamsRef = collection(db, "users", user.id, "savedTeams");
//       const teamRef = doc(userTeamsRef);
      
//       await setDoc(teamRef, teamData);
//     } catch (err) {
//       console.error("Failed to save team:", err);
//     }
//   };

//   const fetchSavedTeams = async () => {
//     if (!user || !matchId) return [];
    
//     try {
//       // First try with the composite index query
//       try {
//         const q = query(
//           collection(db, "users", user.id, "savedTeams"),
//           where("matchId", "==", matchId),
//           orderBy("createdAt", "desc")
//         );
//         const querySnapshot = await getDocs(q);
//         return querySnapshot.docs.map(doc => doc.data() as GeneratedTeam);
//       } catch (indexError) {
//         // Fallback to simple query if index doesn't exist
//         console.log("Falling back to simple query without ordering");
//         const q = query(
//           collection(db, "users", user.id, "savedTeams"),
//           where("matchId", "==", matchId)
//         );
//         const querySnapshot = await getDocs(q);
//         const teams = querySnapshot.docs.map(doc => doc.data() as GeneratedTeam);
//         // Sort manually if needed
//         return teams.sort((a, b) =>
//           new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
//         );
//       }
//     } catch (err) {
//       console.error("Failed to fetch saved teams:", err);
//       return [];
//     }
//   };

//   const handleGenerateTeams = useCallback(async () => {
//     if (!team1 || !team2) {
//       setError("Select both teams first");
//       return;
//     }

//     if (!user) {
//       setError("Please sign in to generate teams");
//       return;
//     }

//     if (needsPayment) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     const allPlayers = [
//       ...(team1.playerDetails || []).filter(p => !p.substitute && p.select !== false),
//       ...(team2.playerDetails || []).filter(p => !p.substitute && p.select !== false)
//     ];

//     // Check player counts by role
//     const currentRoleCounts = {
//       wk: allPlayers.filter(p => p.role === 'WK-Batsman').length,
//       batsmen: allPlayers.filter(p => p.role === 'Batsman').length,
//       allRounders: allPlayers.filter(p => p.role === 'All-Rounder').length,
//       bowlers: allPlayers.filter(p => p.role === 'Bowler').length
//     };
//     setRoleCounts(currentRoleCounts);

//     // Validate minimum requirements
//     if (currentRoleCounts.wk < 1) {
//       setError("Need at least 1 Wicket-Keeper");
//       return;
//     }
//     if (currentRoleCounts.batsmen < 3) {
//       setError("Need at least 3 Batsmen");
//       return;
//     }
//     if (currentRoleCounts.allRounders < 2) {
//       setError("Need at least 2 All-Rounders");
//       return;
//     }
//     if (currentRoleCounts.bowlers < 3) {
//       setError("Need at least 3 Bowlers");
//       return;
//     }
//     if (allPlayers.length < 11) {
//       setError(`Not enough players (${allPlayers.length}/11). Please check your filters.`);
//       return;
//     }

//     setIsGenerating(true);
//     setError(null);

//     try {
//       // Deduct credits
//       await runTransaction(db, async (transaction) => {
//         const userRef = doc(db, "users", user.id);
//         const userDoc = await transaction.get(userRef);
        
//         if (!userDoc.exists()) throw new Error("User not found");
//         if ((userDoc.data().credits || 0) < requiredCredits) {
//           throw new Error("Insufficient balance");
//         }
        
//         transaction.update(userRef, {
//           credits: increment(-requiredCredits)
//         });
//       });

//       // Generate teams
//       const newTeams: GeneratedTeam[] = [];
//       const TOTAL_ATTEMPTS = teamCount * 100;
//       let attempts = 0;

//       while (newTeams.length < teamCount && attempts < TOTAL_ATTEMPTS) {
//         attempts++;
//         const team = createBalancedTeam(allPlayers);
//         if (team) {
//           await saveTeamToFirestore(team);
//           newTeams.push(team);
//         }
//       }

//       if (newTeams.length === 0) {
//         throw new Error(`Failed to generate valid teams after ${TOTAL_ATTEMPTS} attempts. Try adjusting your risk level or player filters.`);
//       }

//       // Update UI with saved teams
//       const savedTeams = await fetchSavedTeams();
//       setGeneratedTeams(savedTeams);
//       onBalanceUpdate(userBalance - requiredCredits);
//     } catch (err: any) {
//       setError(err.message || "Failed to generate teams");
//     } finally {
//       setIsGenerating(false);
//     }
//   }, [
//     team1, team2, teamCount, riskLevel, user,
//     userBalance, requiredCredits, needsPayment,
//     onBalanceUpdate, createBalancedTeam, matchId
//   ]);

//   const paymentDialog = showPaymentDialog && (
//     <PaymentDialog
//       currentBalance={userBalance}
//       requiredAmount={paymentAmount}
//       onPaymentSuccess={(amount) => {
//         onBalanceUpdate(userBalance + amount);
//         setShowPaymentDialog(false);
//         handleGenerateTeams();
//       }}
//       onOpenChange={setShowPaymentDialog}
//       open={showPaymentDialog}
//     />
//   );

//   const generateButton = (
//     <div className="space-y-2">
//       <button
//         onClick={handleGenerateTeams}
//         disabled={isGenerating || !team1 || !team2}
//         className={`
//           w-full px-4 py-3 rounded-md font-bold
//           ${isGenerating ? 'bg-gray-500' :
//            needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' :
//            'bg-blue-500 hover:bg-blue-600'}
//           text-white transition-colors
//         `}
//       >
//         {isGenerating ? (
//           <span className="flex items-center justify-center gap-2">
//             <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//             Generating...
//           </span>
//         ) : !team1 || !team2 ? (
//           "Select both teams"
//         ) : needsPayment ? (
//           `Add ₹${paymentAmount} to Generate`
//         ) : (
//           `Generate ${teamCount} Teams (₹${requiredCredits})`
//         )}
//       </button>

//       <div className="flex justify-between text-sm">
//         <span>Your Credits: ₹{userBalance}</span>
//         {needsPayment ? (
//           <span className="text-yellow-500">Need ₹{paymentAmount} more</span>
//         ) : (
//           <span className="text-green-500">Sufficient balance</span>
//         )}
//       </div>

//       {error && (
//         <div className="text-red-500 text-sm p-2 bg-red-50 rounded-lg">
//           <p className="font-medium">{error}</p>
//           {error.includes("Need at least") && (
//             <div className="mt-2 text-xs">
//               <p>Current player counts:</p>
//               <ul className="list-disc pl-5">
//                 <li>Wicket-Keepers: {roleCounts.wk}</li>
//                 <li>Batsmen: {roleCounts.batsmen} (min 3)</li>
//                 <li>All-Rounders: {roleCounts.allRounders} (min 2)</li>
//                 <li>Bowlers: {roleCounts.bowlers} (min 3)</li>
//               </ul>
//             </div>
//           )}
//           {error.includes("Not enough players") && (
//             <p className="text-xs mt-1">Try adjusting player filters or selecting different teams</p>
//           )}
//           {error.includes("Failed to generate") && (
//             <div className="text-xs mt-1 space-y-1">
//               <p>Possible solutions:</p>
//               <ul className="list-disc pl-5">
//                 <li>Increase risk level for more flexibility</li>
//                 <li>Check if you have enough players from both teams</li>
//                 <li>Ensure you have players in all roles (WK, Batsman, All-Rounder, Bowler)</li>
//               </ul>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );

//   return {
//     generatedTeams,
//     isGenerating,
//     generateButton,
//     paymentDialog,
//     error,
//     setError,
//     fetchSavedTeams
//   };
// };








// // app/components/TeamGenerator.tsx

// "use client";

// import { useState, useCallback, useMemo, useEffect } from "react";
// import { PaymentDialog } from "./PaymentDialog";
// import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";
// import { db } from "@/lib/firebase";
// import { doc, runTransaction, increment, setDoc, collection, query, where, orderBy, getDocs } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";

// interface TeamGeneratorProps {
//   team1?: Team;
//   team2?: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate: (newBalance: number) => void;
//   matchId: string;
// }

// export const useTeamGenerator = ({
//   team1,
//   team2,
//   teamCount,
//   riskLevel,
//   userBalance,
//   onBalanceUpdate,
//   matchId
// }: TeamGeneratorProps) => {
//   const { user } = useUser();
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [roleCounts, setRoleCounts] = useState({
//     wk: 0,
//     battingAllrounders: 0,
//     bowlingAllrounders: 0,
//     bowlers: 0
//   });

//   const requiredCredits = useMemo(() => teamCount * 5, [teamCount]);
//   const needsPayment = useMemo(() => userBalance < requiredCredits, [userBalance, requiredCredits]);
//   const paymentAmount = useMemo(() => Math.max(requiredCredits - userBalance, 50), [requiredCredits, userBalance]);

//   const normalizeRole = (role: string): string => {
//     const roleMap: Record<string, string> = {
//       'All-Rounder': 'Bowling Allrounder',
//       'Batsman': 'Batting Allrounder',
//       'Batsman Allrounder': 'Batting Allrounder',
//       'Bowler Allrounder': 'Bowling Allrounder'
//     };
//     return roleMap[role] || role;
//   };

//   const calculatePlayerScore = (player: PlayerDetail) => {
//     const normalizedRole = normalizeRole(player.role);
//     const baseScore = player.selectPerc || 0;
//     const roleWeights = {
//       'WK-Batsman': 1.5,
//       'Batting Allrounder': 1.4,
//       'Bowling Allrounder': 1.3,
//       'Bowler': 1.2
//     };
    
//     let riskFactor;
//     if (riskLevel < 30) {
//       riskFactor = 1 + (baseScore / 100);
//     } else if (riskLevel < 70) {
//       riskFactor = 0.9 + (Math.random() * 0.3);
//     } else {
//       riskFactor = 0.7 + (Math.random() * 0.6);
//     }
    
//     return baseScore * (roleWeights[normalizedRole] || 1.0) * riskFactor;
//   };

//   const createBalancedTeam = useCallback((players: PlayerDetail[]) => {
//     if (!team1 || !team2) return null;
    
//     const MAX_ATTEMPTS = 500;
//     let attempts = 0;
    
//     const team1Short = team1.shortName || team1.name.split(' ').map(n => n[0]).join('');
//     const team2Short = team2.shortName || team2.name.split(' ').map(n => n[0]).join('');

//     const availablePlayers = players
//       .filter(p => !p.substitute && p.select !== false)
//       .map(p => ({
//         ...p,
//         role: normalizeRole(p.role),
//         score: calculatePlayerScore(p)
//       }));

//     while (attempts < MAX_ATTEMPTS) {
//       attempts++;
//       const teamComposition = {
//         'WK-Batsman': 0,
//         'Batting Allrounder': 0,
//         'Bowling Allrounder': 0,
//         'Bowler': 0,
//         [team1Short]: 0,
//         [team2Short]: 0,
//         overseas: 0,
//         totalScore: 0
//       };

//       const shuffledPlayers = [...availablePlayers].sort(() => Math.random() - 0.5);

//       let captain, viceCaptain;
//       const selectTopPlayers = (percentage: number) => {
//         const count = Math.ceil(shuffledPlayers.length * percentage);
//         return [...shuffledPlayers]
//           .sort((a, b) => (b.score || 0) - (a.score || 0))
//           .slice(0, count);
//       };

//       if (riskLevel < 30) {
//         const topPlayers = selectTopPlayers(0.2);
//         captain = topPlayers[0];
//         viceCaptain = topPlayers[1] || topPlayers[0];
//       } else if (riskLevel < 70) {
//         const topPlayers = selectTopPlayers(0.4);
//         captain = topPlayers[Math.floor(Math.random() * topPlayers.length)];
//         viceCaptain = topPlayers.find(p => p.id !== captain?.id) || topPlayers[0];
//       } else {
//         captain = shuffledPlayers[Math.floor(Math.random() * shuffledPlayers.length)];
//         viceCaptain = shuffledPlayers.find(p => p.id !== captain?.id) || shuffledPlayers[0];
//       }

//       if (!captain || !viceCaptain) continue;

//       const teamPlayers: PlayerDetail[] = [captain, viceCaptain];
      
//       [captain, viceCaptain].forEach(player => {
//         teamComposition[player.role]++;
//         teamComposition.totalScore += player.score || 0;
//         teamComposition[player.teamName === team1.name ? team1Short : team2Short]++;
//         if (player.isOverseas) teamComposition.overseas++;
//       });

//       const remainingPlayers = shuffledPlayers.filter(p =>
//         p.id !== captain.id && p.id !== viceCaptain.id
//       );

//       while (teamPlayers.length < 11 && remainingPlayers.length > 0) {
//         const neededRoles = [];
//         if (teamComposition['WK-Batsman'] < 1) neededRoles.push('WK-Batsman');
//         if (teamComposition['Batting Allrounder'] < 3) neededRoles.push('Batting Allrounder');
//         if (teamComposition['Bowling Allrounder'] < 2) neededRoles.push('Bowling Allrounder');
//         if (teamComposition['Bowler'] < 3) neededRoles.push('Bowler');
        
//         const rolesToConsider = neededRoles.length > 0 ? neededRoles : ['Batting Allrounder', 'Bowling Allrounder', 'Bowler'];
        
//         let candidates = remainingPlayers.filter(p => {
//           if (!rolesToConsider.includes(p.role)) return false;
//           const team = p.teamName === team1.name ? team1Short : team2Short;
//           if (teamComposition[team] >= 7) return false;
//           if (p.isOverseas && teamComposition.overseas >= 4) return false;
//           return true;
//         });

//         if (candidates.length === 0) {
//           candidates = remainingPlayers.filter(p => rolesToConsider.includes(p.role));
//           if (candidates.length === 0) break;
//         }

//         let selectedPlayer;
//         if (riskLevel < 30) {
//           candidates.sort((a, b) => (b.score || 0) - (a.score || 0));
//           selectedPlayer = candidates[0];
//         } else if (riskLevel < 70) {
//           candidates.sort((a, b) => (b.score || 0) - (a.score || 0));
//           const topHalf = candidates.slice(0, Math.ceil(candidates.length * 0.5));
//           selectedPlayer = topHalf[Math.floor(Math.random() * topHalf.length)];
//         } else {
//           selectedPlayer = candidates[Math.floor(Math.random() * candidates.length)];
//         }

//         if (!selectedPlayer) break;

//         teamPlayers.push(selectedPlayer);
//         teamComposition[selectedPlayer.role]++;
//         teamComposition.totalScore += selectedPlayer.score || 0;
//         teamComposition[selectedPlayer.teamName === team1.name ? team1Short : team2Short]++;
//         if (selectedPlayer.isOverseas) teamComposition.overseas++;

//         const index = remainingPlayers.findIndex(p => p.id === selectedPlayer.id);
//         if (index !== -1) remainingPlayers.splice(index, 1);
//       }

//       if (teamPlayers.length !== 11) continue;
//       if (teamComposition.overseas > 4) continue;
//       if (teamComposition[team1Short] > 7 || teamComposition[team2Short] > 7) continue;
//       if (teamComposition[team1Short] < 4 || teamComposition[team2Short] < 4) continue;
//       if (teamComposition['WK-Batsman'] < 1) continue;
//       if (teamComposition['Batting Allrounder'] < 3) continue;
//       if (teamComposition['Bowling Allrounder'] < 2) continue;
//       if (teamComposition['Bowler'] < 3) continue;

//       return {
//         players: teamPlayers,
//         captain,
//         viceCaptain,
//         teamName: `Team ${generatedTeams.length + 1}`,
//         teamComposition,
//         riskLevel,
//         matchId,
//         createdAt: new Date().toISOString()
//       };
//     }

//     return null;
//   }, [team1, team2, generatedTeams.length, riskLevel, matchId]);

//   const saveTeamToFirestore = async (team: GeneratedTeam) => {
//     if (!user || !matchId) return;
    
//     try {
//       const teamData = {
//         ...team,
//         userId: user.id,
//         userEmail: user.primaryEmailAddress?.emailAddress || '',
//         matchName: `${team1?.name} vs ${team2?.name}`,
//         team1ShortName: team1?.shortName || team1?.name.split(' ').map(n => n[0]).join(''),
//         team2ShortName: team2?.shortName || team2?.name.split(' ').map(n => n[0]).join(''),
//         team1Logo: team1?.logo || '/fallback-team.png',
//         team2Logo: team2?.logo || '/fallback-team.png'
//       };

//       const userTeamsRef = collection(db, "users", user.id, "savedTeams");
//       const teamRef = doc(userTeamsRef);
      
//       await setDoc(teamRef, teamData);
//     } catch (err) {
//       console.error("Failed to save team:", err);
//     }
//   };

//   const fetchSavedTeams = async () => {
//     if (!user || !matchId) return [];
    
//     try {
//       // First try with simple query (no ordering)
//       const simpleQuery = query(
//         collection(db, "users", user.id, "savedTeams"),
//         where("matchId", "==", matchId)
//       );
//       const querySnapshot = await getDocs(simpleQuery);
//       const teams = querySnapshot.docs.map(doc => doc.data() as GeneratedTeam);
      
//       // Sort manually by createdAt
//       return teams.sort((a, b) =>
//         new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
//       );
//     } catch (err) {
//       console.error("Failed to fetch saved teams:", err);
//       return [];
//     }
//   };

//   const handleGenerateTeams = useCallback(async () => {
//     if (!team1 || !team2) {
//       setError("Select both teams first");
//       return;
//     }

//     if (!user) {
//       setError("Please sign in to generate teams");
//       return;
//     }

//     if (needsPayment) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     const allPlayers = [
//       ...(team1.playerDetails || []).filter(p => !p.substitute && p.select !== false),
//       ...(team2.playerDetails || []).filter(p => !p.substitute && p.select !== false)
//     ];

//     const currentRoleCounts = {
//       wk: allPlayers.filter(p => normalizeRole(p.role) === 'WK-Batsman').length,
//       battingAllrounders: allPlayers.filter(p => normalizeRole(p.role) === 'Batting Allrounder').length,
//       bowlingAllrounders: allPlayers.filter(p => normalizeRole(p.role) === 'Bowling Allrounder').length,
//       bowlers: allPlayers.filter(p => normalizeRole(p.role) === 'Bowler').length
//     };
//     setRoleCounts(currentRoleCounts);

//     const errors = [];
//     if (currentRoleCounts.wk < 1) errors.push("1 Wicket-Keeper (WK-Batsman)");
//     if (currentRoleCounts.battingAllrounders < 3) errors.push("3 Batting Allrounders");
//     if (currentRoleCounts.bowlingAllrounders < 2) errors.push("2 Bowling Allrounders");
//     if (currentRoleCounts.bowlers < 3) errors.push("3 Bowlers");

//     if (errors.length > 0) {
//       setError(`Need at least ${errors.join(", ")}`);
//       return;
//     }

//     if (allPlayers.length < 11) {
//       setError(`Not enough players (${allPlayers.length}/11). Please check your filters.`);
//       return;
//     }

//     setIsGenerating(true);
//     setError(null);

//     try {
//       await runTransaction(db, async (transaction) => {
//         const userRef = doc(db, "users", user.id);
//         const userDoc = await transaction.get(userRef);
        
//         if (!userDoc.exists()) throw new Error("User not found");
//         if ((userDoc.data().credits || 0) < requiredCredits) {
//           throw new Error("Insufficient balance");
//         }
        
//         transaction.update(userRef, {
//           credits: increment(-requiredCredits)
//         });
//       });

//       const newTeams: GeneratedTeam[] = [];
//       const TOTAL_ATTEMPTS = teamCount * 100;
//       let attempts = 0;

//       while (newTeams.length < teamCount && attempts < TOTAL_ATTEMPTS) {
//         attempts++;
//         const team = createBalancedTeam(allPlayers);
//         if (team) {
//           await saveTeamToFirestore(team);
//           newTeams.push(team);
//         }
//       }

//       if (newTeams.length === 0) {
//         throw new Error(`Failed to generate valid teams after ${TOTAL_ATTEMPTS} attempts. Try adjusting your risk level or player filters.`);
//       }

//       const savedTeams = await fetchSavedTeams();
//       setGeneratedTeams(savedTeams);
//       onBalanceUpdate(userBalance - requiredCredits);
//     } catch (err: any) {
//       setError(err.message || "Failed to generate teams");
//     } finally {
//       setIsGenerating(false);
//     }
//   }, [
//     team1, team2, teamCount, riskLevel, user,
//     userBalance, requiredCredits, needsPayment,
//     onBalanceUpdate, createBalancedTeam, matchId
//   ]);

//   const generateButton = (
//     <div className="space-y-2">
//       <button
//         onClick={handleGenerateTeams}
//         disabled={isGenerating || !team1 || !team2}
//         className={`
//           w-full px-4 py-3 rounded-md font-bold
//           ${isGenerating ? 'bg-gray-500' :
//            needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' :
//            'bg-blue-500 hover:bg-blue-600'}
//           text-white transition-colors
//         `}
//       >
//         {isGenerating ? (
//           <span className="flex items-center justify-center gap-2">
//             <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//             Generating...
//           </span>
//         ) : !team1 || !team2 ? (
//           "Select both teams"
//         ) : needsPayment ? (
//           `Add ₹${paymentAmount} to Generate`
//         ) : (
//           `Generate ${teamCount} Teams (₹${requiredCredits})`
//         )}
//       </button>

//       <div className="flex justify-between text-sm">
//         <span>Your Credits: ₹{userBalance}</span>
//         {needsPayment ? (
//           <span className="text-yellow-500">Need ₹{paymentAmount} more</span>
//         ) : (
//           <span className="text-green-500">Sufficient balance</span>
//         )}
//       </div>

//       {error && (
//         <div className="text-red-500 text-sm p-2 bg-red-50 rounded-lg">
//           <p className="font-medium">{error}</p>
//           {error.includes("Need at least") && (
//             <div className="mt-2 text-xs">
//               <p>Current player counts:</p>
//               <ul className="list-disc pl-5">
//                 <li>WK-Batsman: {roleCounts.wk} (min 1)</li>
//                 <li>Batting Allrounders: {roleCounts.battingAllrounders} (min 3)</li>
//                 <li>Bowling Allrounders: {roleCounts.bowlingAllrounders} (min 2)</li>
//                 <li>Bowlers: {roleCounts.bowlers} (min 3)</li>
//               </ul>
//             </div>
//           )}
//           {error.includes("Not enough players") && (
//             <p className="text-xs mt-1">Try adjusting player filters or selecting different teams</p>
//           )}
//         </div>
//       )}
//     </div>
//   );

//   const paymentDialog = showPaymentDialog && (
//     <PaymentDialog
//       currentBalance={userBalance}
//       requiredAmount={paymentAmount}
//       onPaymentSuccess={(amount) => {
//         onBalanceUpdate(userBalance + amount);
//         setShowPaymentDialog(false);
//         handleGenerateTeams();
//       }}
//       onOpenChange={setShowPaymentDialog}
//       open={showPaymentDialog}
//     />
//   );

//   return {
//     generatedTeams,
//     isGenerating,
//     generateButton,
//     paymentDialog,
//     error,
//     setError,
//     fetchSavedTeams
//   };
// };









// "use client";

// import { useState, useCallback, useMemo, useEffect } from "react";
// import { PaymentDialog } from "./PaymentDialog";
// import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";
// import { db } from "@/lib/firebase";
// import { doc, runTransaction, increment, setDoc, collection, query, where, getDocs } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";

// interface TeamGeneratorProps {
//   team1?: Team;
//   team2?: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate: (newBalance: number) => void;
//   matchId: string;
// }

// export const useTeamGenerator = ({
//   team1,
//   team2,
//   teamCount,
//   riskLevel,
//   userBalance,
//   onBalanceUpdate,
//   matchId
// }: TeamGeneratorProps) => {
//   const { user } = useUser();
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [roleCounts, setRoleCounts] = useState({
//     wk: 0,
//     battingAllrounders: 0,
//     bowlingAllrounders: 0,
//     bowlers: 0
//   });

//   const requiredCredits = useMemo(() => teamCount * 5, [teamCount]);
//   const needsPayment = useMemo(() => userBalance < requiredCredits, [userBalance, requiredCredits]);
//   const paymentAmount = useMemo(() => Math.max(requiredCredits - userBalance, 50), [requiredCredits, userBalance]);

//   const normalizeRole = (role: string): string => {
//     const roleMap: Record<string, string> = {
//       'All-Rounder': 'Bowling Allrounder',
//       'Batsman': 'Batting Allrounder',
//       'Batsman Allrounder': 'Batting Allrounder',
//       'Bowler Allrounder': 'Bowling Allrounder'
//     };
//     return roleMap[role] || role;
//   };

//   const calculatePlayerScore = (player: PlayerDetail) => {
//     const normalizedRole = normalizeRole(player.role);
//     const baseScore = player.selectPerc || 0;
//     const roleWeights = {
//       'WK-Batsman': 1.5,
//       'Batting Allrounder': 1.4,
//       'Bowling Allrounder': 1.3,
//       'Bowler': 1.2
//     };
    
//     let riskFactor;
//     if (riskLevel < 30) {
//       riskFactor = 1 + (baseScore / 100);
//     } else if (riskLevel < 70) {
//       riskFactor = 0.9 + (Math.random() * 0.3);
//     } else {
//       riskFactor = 0.7 + (Math.random() * 0.6);
//     }
    
//     return baseScore * (roleWeights[normalizedRole] || 1.0) * riskFactor;
//   };

//   const createBalancedTeam = useCallback((players: PlayerDetail[]) => {
//     if (!team1 || !team2) return null;
    
//     const MAX_ATTEMPTS = 500;
//     let attempts = 0;
    
//     const team1Short = team1.shortName || team1.name.split(' ').map(n => n[0]).join('');
//     const team2Short = team2.shortName || team2.name.split(' ').map(n => n[0]).join('');

//     const availablePlayers = players
//       .filter(p => !p.substitute && p.select !== false)
//       .map(p => ({
//         ...p,
//         role: normalizeRole(p.role),
//         score: calculatePlayerScore(p)
//       }));

//     while (attempts < MAX_ATTEMPTS) {
//       attempts++;
//       const teamComposition = {
//         'WK-Batsman': 0,
//         'Batting Allrounder': 0,
//         'Bowling Allrounder': 0,
//         'Bowler': 0,
//         [team1Short]: 0,
//         [team2Short]: 0,
//         overseas: 0,
//         totalScore: 0
//       };

//       const shuffledPlayers = [...availablePlayers].sort(() => Math.random() - 0.5);

//       let captain, viceCaptain;
//       const selectTopPlayers = (percentage: number) => {
//         const count = Math.ceil(shuffledPlayers.length * percentage);
//         return [...shuffledPlayers]
//           .sort((a, b) => (b.score || 0) - (a.score || 0))
//           .slice(0, count);
//       };

//       if (riskLevel < 30) {
//         const topPlayers = selectTopPlayers(0.2);
//         captain = topPlayers[0];
//         viceCaptain = topPlayers[1] || topPlayers[0];
//       } else if (riskLevel < 70) {
//         const topPlayers = selectTopPlayers(0.4);
//         captain = topPlayers[Math.floor(Math.random() * topPlayers.length)];
//         viceCaptain = topPlayers.find(p => p.id !== captain?.id) || topPlayers[0];
//       } else {
//         captain = shuffledPlayers[Math.floor(Math.random() * shuffledPlayers.length)];
//         viceCaptain = shuffledPlayers.find(p => p.id !== captain?.id) || shuffledPlayers[0];
//       }

//       if (!captain || !viceCaptain) continue;

//       const teamPlayers: PlayerDetail[] = [captain, viceCaptain];
      
//       [captain, viceCaptain].forEach(player => {
//         teamComposition[player.role]++;
//         teamComposition.totalScore += player.score || 0;
//         teamComposition[player.teamName === team1.name ? team1Short : team2Short]++;
//         if (player.isOverseas) teamComposition.overseas++;
//       });

//       const remainingPlayers = shuffledPlayers.filter(p =>
//         p.id !== captain.id && p.id !== viceCaptain.id
//       );

//       while (teamPlayers.length < 11 && remainingPlayers.length > 0) {
//         const neededRoles = [];
//         if (teamComposition['WK-Batsman'] < 1) neededRoles.push('WK-Batsman');
//         if (teamComposition['Batting Allrounder'] < 3) neededRoles.push('Batting Allrounder');
//         if (teamComposition['Bowling Allrounder'] < 2) neededRoles.push('Bowling Allrounder');
//         if (teamComposition['Bowler'] < 3) neededRoles.push('Bowler');
        
//         const rolesToConsider = neededRoles.length > 0 ? neededRoles : ['Batting Allrounder', 'Bowling Allrounder', 'Bowler'];
        
//         let candidates = remainingPlayers.filter(p => {
//           if (!rolesToConsider.includes(p.role)) return false;
//           const team = p.teamName === team1.name ? team1Short : team2Short;
//           if (teamComposition[team] >= 7) return false;
//           if (p.isOverseas && teamComposition.overseas >= 4) return false;
//           return true;
//         });

//         if (candidates.length === 0) {
//           candidates = remainingPlayers.filter(p => rolesToConsider.includes(p.role));
//           if (candidates.length === 0) break;
//         }

//         let selectedPlayer;
//         if (riskLevel < 30) {
//           candidates.sort((a, b) => (b.score || 0) - (a.score || 0));
//           selectedPlayer = candidates[0];
//         } else if (riskLevel < 70) {
//           candidates.sort((a, b) => (b.score || 0) - (a.score || 0));
//           const topHalf = candidates.slice(0, Math.ceil(candidates.length * 0.5));
//           selectedPlayer = topHalf[Math.floor(Math.random() * topHalf.length)];
//         } else {
//           selectedPlayer = candidates[Math.floor(Math.random() * candidates.length)];
//         }

//         if (!selectedPlayer) break;

//         teamPlayers.push(selectedPlayer);
//         teamComposition[selectedPlayer.role]++;
//         teamComposition.totalScore += selectedPlayer.score || 0;
//         teamComposition[selectedPlayer.teamName === team1.name ? team1Short : team2Short]++;
//         if (selectedPlayer.isOverseas) teamComposition.overseas++;

//         const index = remainingPlayers.findIndex(p => p.id === selectedPlayer.id);
//         if (index !== -1) remainingPlayers.splice(index, 1);
//       }

//       if (teamPlayers.length !== 11) continue;
//       if (teamComposition.overseas > 4) continue;
//       if (teamComposition[team1Short] > 7 || teamComposition[team2Short] > 7) continue;
//       if (teamComposition[team1Short] < 4 || teamComposition[team2Short] < 4) continue;
//       if (teamComposition['WK-Batsman'] < 1) continue;
//       if (teamComposition['Batting Allrounder'] < 3) continue;
//       if (teamComposition['Bowling Allrounder'] < 2) continue;
//       if (teamComposition['Bowler'] < 3) continue;

//       return {
//         players: teamPlayers,
//         captain,
//         viceCaptain,
//         teamName: `Team ${generatedTeams.length + 1}`,
//         teamComposition,
//         riskLevel,
//         matchId,
//         createdAt: new Date().toISOString()
//       };
//     }

//     return null;
//   }, [team1, team2, generatedTeams.length, riskLevel, matchId]);

//   const saveTeamToFirestore = async (team: GeneratedTeam) => {
//     if (!user || !matchId) return;
    
//     try {
//       const teamData = {
//         ...team,
//         userId: user.id,
//         userEmail: user.primaryEmailAddress?.emailAddress || '',
//         matchName: `${team1?.name} vs ${team2?.name}`,
//         team1ShortName: team1?.shortName || team1?.name.split(' ').map(n => n[0]).join(''),
//         team2ShortName: team2?.shortName || team2?.name.split(' ').map(n => n[0]).join(''),
//         team1Logo: team1?.logo || '/fallback-team.png',
//         team2Logo: team2?.logo || '/fallback-team.png'
//       };

//       const userTeamsRef = collection(db, "users", user.id, "savedTeams");
//       const teamRef = doc(userTeamsRef);
      
//       await setDoc(teamRef, teamData);
//     } catch (err) {
//       console.error("Failed to save team:", err);
//     }
//   };

//   const fetchSavedTeams = useCallback(async () => {
//     if (!user || !matchId) return [];
    
//     try {
//       const q = query(
//         collection(db, "users", user.id, "savedTeams"),
//         where("matchId", "==", matchId)
//       );
//       const querySnapshot = await getDocs(q);
//       const teams = querySnapshot.docs.map(doc => doc.data() as GeneratedTeam);
      
//       return teams.sort((a, b) =>
//         new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
//       );
//     } catch (err) {
//       console.error("Failed to fetch saved teams:", err);
//       return [];
//     }
//   }, [user, matchId]);

//   const handleGenerateTeams = useCallback(async () => {
//     if (!team1 || !team2) {
//       setError("Select both teams first");
//       return;
//     }

//     if (!user) {
//       setError("Please sign in to generate teams");
//       return;
//     }

//     if (needsPayment) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     const allPlayers = [
//       ...(team1.playerDetails || []).filter(p => !p.substitute && p.select !== false),
//       ...(team2.playerDetails || []).filter(p => !p.substitute && p.select !== false)
//     ];

//     const currentRoleCounts = {
//       wk: allPlayers.filter(p => normalizeRole(p.role) === 'WK-Batsman').length,
//       battingAllrounders: allPlayers.filter(p => normalizeRole(p.role) === 'Batting Allrounder').length,
//       bowlingAllrounders: allPlayers.filter(p => normalizeRole(p.role) === 'Bowling Allrounder').length,
//       bowlers: allPlayers.filter(p => normalizeRole(p.role) === 'Bowler').length
//     };
//     setRoleCounts(currentRoleCounts);

//     const errors = [];
//     if (currentRoleCounts.wk < 1) errors.push("1 Wicket-Keeper (WK-Batsman)");
//     if (currentRoleCounts.battingAllrounders < 3) errors.push("3 Batting Allrounders");
//     if (currentRoleCounts.bowlingAllrounders < 2) errors.push("2 Bowling Allrounders");
//     if (currentRoleCounts.bowlers < 3) errors.push("3 Bowlers");

//     if (errors.length > 0) {
//       setError(`Need at least ${errors.join(", ")}`);
//       return;
//     }

//     if (allPlayers.length < 11) {
//       setError(`Not enough players (${allPlayers.length}/11). Please check your filters.`);
//       return;
//     }

//     setIsGenerating(true);
//     setError(null);

//     try {
//       await runTransaction(db, async (transaction) => {
//         const userRef = doc(db, "users", user.id);
//         const userDoc = await transaction.get(userRef);
        
//         if (!userDoc.exists()) throw new Error("User not found");
//         if ((userDoc.data().credits || 0) < requiredCredits) {
//           throw new Error("Insufficient balance");
//         }
        
//         transaction.update(userRef, {
//           credits: increment(-requiredCredits)
//         });
//       });

//       const newTeams: GeneratedTeam[] = [];
//       const TOTAL_ATTEMPTS = teamCount * 100;
//       let attempts = 0;

//       while (newTeams.length < teamCount && attempts < TOTAL_ATTEMPTS) {
//         attempts++;
//         const team = createBalancedTeam(allPlayers);
//         if (team) {
//           await saveTeamToFirestore(team);
//           newTeams.push(team);
//         }
//       }

//       if (newTeams.length === 0) {
//         throw new Error(`Failed to generate valid teams after ${TOTAL_ATTEMPTS} attempts. Try adjusting your risk level or player filters.`);
//       }

//       const savedTeams = await fetchSavedTeams();
//       setGeneratedTeams(savedTeams);
//       onBalanceUpdate(userBalance - requiredCredits);
//     } catch (err: any) {
//       setError(err.message || "Failed to generate teams");
//     } finally {
//       setIsGenerating(false);
//     }
//   }, [
//     team1, team2, teamCount, riskLevel, user,
//     userBalance, requiredCredits, needsPayment,
//     onBalanceUpdate, createBalancedTeam, matchId,
//     fetchSavedTeams
//   ]);

//   const generateButton = (
//     <div className="space-y-2">
//       <button
//         onClick={handleGenerateTeams}
//         disabled={isGenerating || !team1 || !team2}
//         className={`
//           w-full px-4 py-3 rounded-md font-bold
//           ${isGenerating ? 'bg-gray-500' :
//            needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' :
//            'bg-blue-500 hover:bg-blue-600'}
//           text-white transition-colors
//         `}
//       >
//         {isGenerating ? (
//           <span className="flex items-center justify-center gap-2">
//             <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//             Generating...
//           </span>
//         ) : !team1 || !team2 ? (
//           "Select both teams"
//         ) : needsPayment ? (
//           `Add ₹${paymentAmount} to Generate`
//         ) : (
//           `Generate ${teamCount} Teams (₹${requiredCredits})`
//         )}
//       </button>

//       <div className="flex justify-between text-sm">
//         <span>Your Credits: ₹{userBalance}</span>
//         {needsPayment ? (
//           <span className="text-yellow-500">Need ₹{paymentAmount} more</span>
//         ) : (
//           <span className="text-green-500">Sufficient balance</span>
//         )}
//       </div>

//       {error && (
//         <div className="text-red-500 text-sm p-2 bg-red-50 rounded-lg">
//           <p className="font-medium">{error}</p>
//           {error.includes("Need at least") && (
//             <div className="mt-2 text-xs">
//               <p>Current player counts:</p>
//               <ul className="list-disc pl-5">
//                 <li>WK-Batsman: {roleCounts.wk} (min 1)</li>
//                 <li>Batting Allrounders: {roleCounts.battingAllrounders} (min 3)</li>
//                 <li>Bowling Allrounders: {roleCounts.bowlingAllrounders} (min 2)</li>
//                 <li>Bowlers: {roleCounts.bowlers} (min 3)</li>
//               </ul>
//             </div>
//           )}
//           {error.includes("Not enough players") && (
//             <p className="text-xs mt-1">Try adjusting player filters or selecting different teams</p>
//           )}
//         </div>
//       )}
//     </div>
//   );

//   const paymentDialog = showPaymentDialog && (
//     <PaymentDialog
//       currentBalance={userBalance}
//       requiredAmount={paymentAmount}
//       onPaymentSuccess={(amount) => {
//         onBalanceUpdate(userBalance + amount);
//         setShowPaymentDialog(false);
//         handleGenerateTeams();
//       }}
//       onOpenChange={setShowPaymentDialog}
//       open={showPaymentDialog}
//     />
//   );

//   return {
//     generatedTeams,
//     isGenerating,
//     generateButton,
//     paymentDialog,
//     error,
//     setError,
//     fetchSavedTeams,
//     setGeneratedTeams
//   };
// };










// "use client";

// import { useState, useCallback, useMemo, useEffect } from "react";
// import { PaymentDialog } from "./PaymentDialog";
// import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";
// import { db } from "@/lib/firebase";
// import {
//   doc,
//   runTransaction,
//   increment,
//   setDoc,
//   collection,
//   query,
//   orderBy,
//   getDocs
// } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";

// interface TeamGeneratorProps {
//   team1?: Team;
//   team2?: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate: (newBalance: number) => void;
//   matchId: string;
// }

// export const useTeamGenerator = ({
//   team1,
//   team2,
//   teamCount,
//   riskLevel,
//   userBalance,
//   onBalanceUpdate,
//   matchId
// }: TeamGeneratorProps) => {
//   const { user } = useUser();
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [roleCounts, setRoleCounts] = useState({
//     wk: 0,
//     battingAllrounders: 0,
//     bowlingAllrounders: 0,
//     bowlers: 0
//   });

//   const requiredCredits = useMemo(() => teamCount * 10, [teamCount]);
//   const needsPayment = useMemo(() => userBalance < requiredCredits, [userBalance, requiredCredits]);
//   const paymentAmount = useMemo(() => Math.max(requiredCredits - userBalance, 50), [requiredCredits, userBalance]);

//   const normalizeRole = (role: string): string => {
//     const roleMap: Record<string, string> = {
//       'All-Rounder': 'Bowling Allrounder',
//       'Batsman': 'Batting Allrounder',
//       'Batsman Allrounder': 'Batting Allrounder',
//       'Bowler Allrounder': 'Bowling Allrounder'
//     };
//     return roleMap[role] || role;
//   };

//   const calculatePlayerScore = (player: PlayerDetail) => {
//     const normalizedRole = normalizeRole(player.role);
//     const baseScore = player.selectPerc || 0;
//     const roleWeights = {
//       'WK-Batsman': 1.5,
//       'Batting Allrounder': 1.4,
//       'Bowling Allrounder': 1.3,
//       'Bowler': 1.2
//     };
    
//     let riskFactor;
//     if (riskLevel < 30) {
//       riskFactor = 1 + (baseScore / 100);
//     } else if (riskLevel < 70) {
//       riskFactor = 0.9 + (Math.random() * 0.3);
//     } else {
//       riskFactor = 0.7 + (Math.random() * 0.6);
//     }
    
//     return baseScore * (roleWeights[normalizedRole] || 1.0) * riskFactor;
//   };

//   const createBalancedTeam = useCallback((players: PlayerDetail[]) => {
//     if (!team1 || !team2) return null;
    
//     const MAX_ATTEMPTS = 500;
//     let attempts = 0;
    
//     const team1Short = team1.shortName || team1.name.split(' ').map(n => n[0]).join('');
//     const team2Short = team2.shortName || team2.name.split(' ').map(n => n[0]).join('');

//     const availablePlayers = players
//       .filter(p => !p.substitute && p.select !== false)
//       .map(p => ({
//         ...p,
//         role: normalizeRole(p.role),
//         score: calculatePlayerScore(p)
//       }));

//     while (attempts < MAX_ATTEMPTS) {
//       attempts++;
//       const teamComposition = {
//         'WK-Batsman': 0,
//         'Batting Allrounder': 0,
//         'Bowling Allrounder': 0,
//         'Bowler': 0,
//         [team1Short]: 0,
//         [team2Short]: 0,
//         overseas: 0,
//         totalScore: 0
//       };

//       const shuffledPlayers = [...availablePlayers].sort(() => Math.random() - 0.5);

//       let captain, viceCaptain;
//       const selectTopPlayers = (percentage: number) => {
//         const count = Math.ceil(shuffledPlayers.length * percentage);
//         return [...shuffledPlayers]
//           .sort((a, b) => (b.score || 0) - (a.score || 0))
//           .slice(0, count);
//       };

//       if (riskLevel < 30) {
//         const topPlayers = selectTopPlayers(0.2);
//         captain = topPlayers[0];
//         viceCaptain = topPlayers[1] || topPlayers[0];
//       } else if (riskLevel < 70) {
//         const topPlayers = selectTopPlayers(0.4);
//         captain = topPlayers[Math.floor(Math.random() * topPlayers.length)];
//         viceCaptain = topPlayers.find(p => p.id !== captain?.id) || topPlayers[0];
//       } else {
//         captain = shuffledPlayers[Math.floor(Math.random() * shuffledPlayers.length)];
//         viceCaptain = shuffledPlayers.find(p => p.id !== captain?.id) || shuffledPlayers[0];
//       }

//       if (!captain || !viceCaptain) continue;

//       const teamPlayers: PlayerDetail[] = [captain, viceCaptain];
      
//       [captain, viceCaptain].forEach(player => {
//         teamComposition[player.role]++;
//         teamComposition.totalScore += player.score || 0;
//         teamComposition[player.teamName === team1.name ? team1Short : team2Short]++;
//         if (player.isOverseas) teamComposition.overseas++;
//       });

//       const remainingPlayers = shuffledPlayers.filter(p =>
//         p.id !== captain.id && p.id !== viceCaptain.id
//       );

//       while (teamPlayers.length < 11 && remainingPlayers.length > 0) {
//         const neededRoles = [];
//         if (teamComposition['WK-Batsman'] < 1) neededRoles.push('WK-Batsman');
//         if (teamComposition['Batting Allrounder'] < 3) neededRoles.push('Batting Allrounder');
//         if (teamComposition['Bowling Allrounder'] < 2) neededRoles.push('Bowling Allrounder');
//         if (teamComposition['Bowler'] < 3) neededRoles.push('Bowler');
        
//         const rolesToConsider = neededRoles.length > 0 ? neededRoles : ['Batting Allrounder', 'Bowling Allrounder', 'Bowler'];
        
//         let candidates = remainingPlayers.filter(p => {
//           if (!rolesToConsider.includes(p.role)) return false;
//           const team = p.teamName === team1.name ? team1Short : team2Short;
//           if (teamComposition[team] >= 7) return false;
//           if (p.isOverseas && teamComposition.overseas >= 4) return false;
//           return true;
//         });

//         if (candidates.length === 0) {
//           candidates = remainingPlayers.filter(p => rolesToConsider.includes(p.role));
//           if (candidates.length === 0) break;
//         }

//         let selectedPlayer;
//         if (riskLevel < 30) {
//           candidates.sort((a, b) => (b.score || 0) - (a.score || 0));
//           selectedPlayer = candidates[0];
//         } else if (riskLevel < 70) {
//           candidates.sort((a, b) => (b.score || 0) - (a.score || 0));
//           const topHalf = candidates.slice(0, Math.ceil(candidates.length * 0.5));
//           selectedPlayer = topHalf[Math.floor(Math.random() * topHalf.length)];
//         } else {
//           selectedPlayer = candidates[Math.floor(Math.random() * candidates.length)];
//         }

//         if (!selectedPlayer) break;

//         teamPlayers.push(selectedPlayer);
//         teamComposition[selectedPlayer.role]++;
//         teamComposition.totalScore += selectedPlayer.score || 0;
//         teamComposition[selectedPlayer.teamName === team1.name ? team1Short : team2Short]++;
//         if (selectedPlayer.isOverseas) teamComposition.overseas++;

//         const index = remainingPlayers.findIndex(p => p.id === selectedPlayer.id);
//         if (index !== -1) remainingPlayers.splice(index, 1);
//       }

//       if (teamPlayers.length !== 11) continue;
//       if (teamComposition.overseas > 4) continue;
//       if (teamComposition[team1Short] > 7 || teamComposition[team2Short] > 7) continue;
//       if (teamComposition[team1Short] < 4 || teamComposition[team2Short] < 4) continue;
//       if (teamComposition['WK-Batsman'] < 1) continue;
//       if (teamComposition['Batting Allrounder'] < 3) continue;
//       if (teamComposition['Bowling Allrounder'] < 2) continue;
//       if (teamComposition['Bowler'] < 3) continue;

//       return {
//         players: teamPlayers,
//         captain,
//         viceCaptain,
//         teamName: `Team ${generatedTeams.length + 1}`,
//         teamComposition,
//         riskLevel,
//         matchId,
//         createdAt: new Date().toISOString()
//       };
//     }

//     return null;
//   }, [team1, team2, generatedTeams.length, riskLevel, matchId]);

//   const saveTeamToFirestore = async (team: GeneratedTeam) => {
//     if (!user || !matchId) return;
    
//     try {
//       const teamData = {
//         ...team,
//         userId: user.id,
//         userEmail: user.primaryEmailAddress?.emailAddress || '',
//         matchName: `${team1?.name} vs ${team2?.name}`,
//         team1ShortName: team1?.shortName || team1?.name.split(' ').map(n => n[0]).join(''),
//         team2ShortName: team2?.shortName || team2?.name.split(' ').map(n => n[0]).join(''),
//         team1Logo: team1?.logo || '/fallback-team.png',
//         team2Logo: team2?.logo || '/fallback-team.png'
//       };

//       const matchTeamsRef = collection(db, "users", user.id, "matches", matchId, "teams");
//       const teamRef = doc(matchTeamsRef);
      
//       await setDoc(teamRef, teamData);
//       return teamRef.id; // Return the new team ID
//     } catch (err) {
//       console.error("Failed to save team:", err);
//       throw err;
//     }
//   };

//   const fetchSavedTeams = useCallback(async () => {
//     if (!user || !matchId) return [];
    
//     try {
//       const q = query(
//         collection(db, "users", user.id, "matches", matchId, "teams"),
//         orderBy("createdAt", "desc")
//       );
//       const querySnapshot = await getDocs(q);
//       return querySnapshot.docs.map(doc => ({
//         ...doc.data() as GeneratedTeam,
//         id: doc.id
//       }));
//     } catch (err) {
//       console.error("Failed to fetch saved teams:", err);
//       return [];
//     }
//   }, [user, matchId]);

//   const handleGenerateTeams = useCallback(async () => {
//     if (!team1 || !team2) {
//       setError("Select both teams first");
//       return;
//     }

//     if (!user) {
//       setError("Please sign in to generate teams");
//       return;
//     }

//     if (needsPayment) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     const allPlayers = [
//       ...(team1.playerDetails || []).filter(p => !p.substitute && p.select !== false),
//       ...(team2.playerDetails || []).filter(p => !p.substitute && p.select !== false)
//     ];

//     const currentRoleCounts = {
//       wk: allPlayers.filter(p => normalizeRole(p.role) === 'WK-Batsman').length,
//       battingAllrounders: allPlayers.filter(p => normalizeRole(p.role) === 'Batting Allrounder').length,
//       bowlingAllrounders: allPlayers.filter(p => normalizeRole(p.role) === 'Bowling Allrounder').length,
//       bowlers: allPlayers.filter(p => normalizeRole(p.role) === 'Bowler').length
//     };
//     setRoleCounts(currentRoleCounts);

//     const errors = [];
//     if (currentRoleCounts.wk < 1) errors.push("1 Wicket-Keeper (WK-Batsman)");
//     if (currentRoleCounts.battingAllrounders < 3) errors.push("3 Batting Allrounders");
//     if (currentRoleCounts.bowlingAllrounders < 2) errors.push("2 Bowling Allrounders");
//     if (currentRoleCounts.bowlers < 3) errors.push("3 Bowlers");

//     if (errors.length > 0) {
//       setError(`Need at least ${errors.join(", ")}`);
//       return;
//     }

//     if (allPlayers.length < 11) {
//       setError(`Not enough players (${allPlayers.length}/11). Please check your filters.`);
//       return;
//     }

//     setIsGenerating(true);
//     setError(null);

//     try {
//       await runTransaction(db, async (transaction) => {
//         const userRef = doc(db, "users", user.id);
//         const userDoc = await transaction.get(userRef);
        
//         if (!userDoc.exists()) throw new Error("User not found");
//         if ((userDoc.data().credits || 0) < requiredCredits) {
//           throw new Error("Insufficient balance");
//         }
        
//         transaction.update(userRef, {
//           credits: increment(-requiredCredits)
//         });
//       });

//       const newTeams: GeneratedTeam[] = [];
//       const TOTAL_ATTEMPTS = teamCount * 100;
//       let attempts = 0;

//       while (newTeams.length < teamCount && attempts < TOTAL_ATTEMPTS) {
//         attempts++;
//         const team = createBalancedTeam(allPlayers);
//         if (team) {
//           await saveTeamToFirestore(team);
//           newTeams.push(team);
//         }
//       }

//       if (newTeams.length === 0) {
//         throw new Error(`Failed to generate valid teams after ${TOTAL_ATTEMPTS} attempts. Try adjusting your risk level or player filters.`);
//       }

//       const savedTeams = await fetchSavedTeams();
//       setGeneratedTeams(savedTeams);
//       onBalanceUpdate(userBalance - requiredCredits);
//     } catch (err: any) {
//       setError(err.message || "Failed to generate teams");
//     } finally {
//       setIsGenerating(false);
//     }
//   }, [
//     team1, team2, teamCount, riskLevel, user,
//     userBalance, requiredCredits, needsPayment,
//     onBalanceUpdate, createBalancedTeam, matchId,
//     fetchSavedTeams
//   ]);

//   const generateButton = (
//     <div className="space-y-2">
//       <button
//         onClick={handleGenerateTeams}
//         disabled={isGenerating || !team1 || !team2}
//         className={`
//           w-full px-4 py-3 rounded-md font-bold
//           ${isGenerating ? 'bg-gray-500' :
//            needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' :
//            'bg-blue-500 hover:bg-blue-600'}
//           text-white transition-colors
//         `}
//       >
//         {isGenerating ? (
//           <span className="flex items-center justify-center gap-2">
//             <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//             Generating...
//           </span>
//         ) : !team1 || !team2 ? (
//           "Select both teams"
//         ) : needsPayment ? (
//           `Add ₹${paymentAmount} to Generate`
//         ) : (
//           `Generate ${teamCount} Teams (₹${requiredCredits})`
//         )}
//       </button>

//       <div className="flex justify-between text-sm">
//         <span>Your Credits: ₹{userBalance}</span>
//         {needsPayment ? (
//           <span className="text-yellow-500">Need ₹{paymentAmount} more</span>
//         ) : (
//           <span className="text-green-500">Sufficient balance</span>
//         )}
//       </div>

//       {error && (
//         <div className="text-red-500 text-sm p-2 bg-red-50 rounded-lg">
//           <p className="font-medium">{error}</p>
//           {error.includes("Need at least") && (
//             <div className="mt-2 text-xs">
//               <p>Current player counts:</p>
//               <ul className="list-disc pl-5">
//                 <li>WK-Batsman: {roleCounts.wk} (min 1)</li>
//                 <li>Batting Allrounders: {roleCounts.battingAllrounders} (min 3)</li>
//                 <li>Bowling Allrounders: {roleCounts.bowlingAllrounders} (min 2)</li>
//                 <li>Bowlers: {roleCounts.bowlers} (min 3)</li>
//               </ul>
//             </div>
//           )}
//           {error.includes("Not enough players") && (
//             <p className="text-xs mt-1">Try adjusting player filters or selecting different teams</p>
//           )}
//         </div>
//       )}
//     </div>
//   );

//   const paymentDialog = showPaymentDialog && (
//     <PaymentDialog
//       currentBalance={userBalance}
//       requiredAmount={paymentAmount}
//       onPaymentSuccess={(amount) => {
//         onBalanceUpdate(userBalance + amount);
//         setShowPaymentDialog(false);
//         handleGenerateTeams();
//       }}
//       onOpenChange={setShowPaymentDialog}
//       open={showPaymentDialog}
//     />
//   );

//   return {
//     generatedTeams,
//     isGenerating,
//     generateButton,
//     paymentDialog,
//     error,
//     setError,
//     fetchSavedTeams,
//     setGeneratedTeams
//   };
// };










// "use client";

// import { useState, useCallback, useMemo } from "react";
// import { PaymentDialog } from "./PaymentDialog";
// import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";
// import { db } from "@/lib/firebase";
// import {
//   doc,
//   runTransaction,
//   increment,
//   setDoc,
//   collection,
//   query,
//   orderBy,
//   getDocs,
//   limit
// } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";

// interface TeamGeneratorProps {
//   team1?: Team;
//   team2?: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate: (newBalance: number) => void;
//   matchId: string;
// }

// export const useTeamGenerator = ({
//   team1,
//   team2,
//   teamCount,
//   riskLevel,
//   userBalance,
//   onBalanceUpdate,
//   matchId
// }: TeamGeneratorProps) => {
//   const { user } = useUser();
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [roleCounts, setRoleCounts] = useState({
//     wk: 0,
//     battingAllrounders: 0,
//     bowlingAllrounders: 0,
//     bowlers: 0
//   });

//   const MAX_TEAMS_PER_MATCH = 100;
//   const requiredCredits = useMemo(() => teamCount * 10, [teamCount]);
//   const needsPayment = useMemo(() => userBalance < requiredCredits, [userBalance, requiredCredits]);
//   const paymentAmount = useMemo(() => Math.max(requiredCredits - userBalance, 50), [requiredCredits, userBalance]);

//   const normalizeRole = (role: string): string => {
//     const roleMap: Record<string, string> = {
//       'All-Rounder': 'Bowling Allrounder',
//       'Batsman': 'Batting Allrounder',
//       'Batsman Allrounder': 'Batting Allrounder',
//       'Bowler Allrounder': 'Bowling Allrounder'
//     };
//     return roleMap[role] || role;
//   };

//   const calculatePlayerScore = (player: PlayerDetail) => {
//     const normalizedRole = normalizeRole(player.role);
//     const baseScore = player.selectPerc || 0;
//     const roleWeights = {
//       'WK-Batsman': 1.5,
//       'Batting Allrounder': 1.4,
//       'Bowling Allrounder': 1.3,
//       'Bowler': 1.2
//     };
    
//     let riskFactor;
//     if (riskLevel < 30) {
//       riskFactor = 1 + (baseScore / 100);
//     } else if (riskLevel < 70) {
//       riskFactor = 0.9 + (Math.random() * 0.3);
//     } else {
//       riskFactor = 0.7 + (Math.random() * 0.6);
//     }
    
//     return baseScore * (roleWeights[normalizedRole] || 1.0) * riskFactor;
//   };
//   const createBalancedTeam = useCallback((players: PlayerDetail[], existingTeamCount: number) => {
//     if (!team1 || !team2) return null;
    
//     const MAX_ATTEMPTS = 500;
//     let attempts = 0;
    
//     const team1Short = team1.shortName || team1.name.split(' ').map(n => n[0]).join('');
//     const team2Short = team2.shortName || team2.name.split(' ').map(n => n[0]).join('');
  
//     // Filter and prepare players only once
//     const availablePlayers = players
//       .filter(p => !p.substitute && p.select !== false)
//       .map(p => ({
//         ...p,
//         role: normalizeRole(p.role),
//         score: calculatePlayerScore(p)
//       }));
  
//     // Early validation - check if we have enough players for each role
//     const roleCounts = {
//       'WK-Batsman': availablePlayers.filter(p => p.role === 'WK-Batsman').length,
//       'Batting Allrounder': availablePlayers.filter(p => p.role === 'Batting Allrounder').length,
//       'Bowling Allrounder': availablePlayers.filter(p => p.role === 'Bowling Allrounder').length,
//       'Bowler': availablePlayers.filter(p => p.role === 'Bowler').length
//     };
  
//     if (
//       roleCounts['WK-Batsman'] < 1 ||
//       roleCounts['Batting Allrounder'] < 3 ||
//       roleCounts['Bowling Allrounder'] < 2 ||
//       roleCounts['Bowler'] < 3
//     ) {
//       throw new Error(`Insufficient players for required roles`);
//     }
  
//     // Sort players by score once to improve selection
//     const sortedPlayers = [...availablePlayers].sort((a, b) => (b.score || 0) - (a.score || 0));
  
//     while (attempts < MAX_ATTEMPTS) {
//       attempts++;
//       const teamComposition = {
//         'WK-Batsman': 0,
//         'Batting Allrounder': 0,
//         'Bowling Allrounder': 0,
//         'Bowler': 0,
//         [team1Short]: 0,
//         [team2Short]: 0,
//         overseas: 0,
//         totalScore: 0
//       };
  
//       // Create a fresh shuffled copy for each attempt
//       const shuffledPlayers = [...sortedPlayers].sort(() => Math.random() - 0.5);
  
//       let captain, viceCaptain;
//       const selectTopPlayers = (percentage: number) => {
//         const count = Math.ceil(shuffledPlayers.length * percentage);
//         return [...shuffledPlayers]
//           .sort((a, b) => (b.score || 0) - (a.score || 0))
//           .slice(0, count);
//       };
  
//       // Improved captain/vice-captain selection
//       if (riskLevel < 30) {
//         const topPlayers = selectTopPlayers(0.2);
//         captain = topPlayers[0];
//         viceCaptain = topPlayers[1] || topPlayers[0];
//       } else if (riskLevel < 70) {
//         const topPlayers = selectTopPlayers(0.4);
//         captain = topPlayers[Math.floor(Math.random() * Math.min(topPlayers.length, 3))]; // Pick from top 3
//         viceCaptain = topPlayers.find(p => p.id !== captain?.id) || topPlayers[0];
//       } else {
//         const candidates = shuffledPlayers.slice(0, Math.ceil(shuffledPlayers.length * 0.6));
//         captain = candidates[Math.floor(Math.random() * candidates.length)];
//         viceCaptain = candidates.find(p => p.id !== captain?.id) || candidates[0];
//       }
  
//       if (!captain || !viceCaptain) continue;
  
//       const teamPlayers: PlayerDetail[] = [captain, viceCaptain];
      
//       [captain, viceCaptain].forEach(player => {
//         teamComposition[player.role]++;
//         teamComposition.totalScore += player.score || 0;
//         teamComposition[player.teamName === team1.name ? team1Short : team2Short]++;
//         if (player.isOverseas) teamComposition.overseas++;
//       });
  
//       const remainingPlayers = shuffledPlayers.filter(p =>
//         p.id !== captain.id && p.id !== viceCaptain.id
//       );
  
//       // Improved role filling logic
//       const roleRequirements = [
//         { role: 'WK-Batsman', min: 1, current: teamComposition['WK-Batsman'] },
//         { role: 'Batting Allrounder', min: 3, current: teamComposition['Batting Allrounder'] },
//         { role: 'Bowling Allrounder', min: 2, current: teamComposition['Bowling Allrounder'] },
//         { role: 'Bowler', min: 3, current: teamComposition['Bowler'] }
//       ];
  
//       while (teamPlayers.length < 11 && remainingPlayers.length > 0) {
//         // Find which roles still need players
//         const neededRoles = roleRequirements
//           .filter(r => r.current < r.min)
//           .map(r => r.role);
  
//         const rolesToConsider = neededRoles.length > 0
//           ? neededRoles
//           : ['Batting Allrounder', 'Bowling Allrounder', 'Bowler'];
        
//         // Find suitable candidates
//         let candidates = remainingPlayers.filter(p => {
//           if (!rolesToConsider.includes(p.role)) return false;
//           const team = p.teamName === team1.name ? team1Short : team2Short;
//           if (teamComposition[team] >= 7) return false;
//           if (p.isOverseas && teamComposition.overseas >= 4) return false;
//           return true;
//         });
  
//         // If no candidates found with all constraints, relax some constraints
//         if (candidates.length === 0) {
//           candidates = remainingPlayers.filter(p => rolesToConsider.includes(p.role));
//         }
  
//         if (candidates.length === 0) break;
  
//         // Select player based on risk level
//         let selectedPlayer;
//         if (riskLevel < 30) {
//           // For low risk, always pick the highest score available
//           candidates.sort((a, b) => (b.score || 0) - (a.score || 0));
//           selectedPlayer = candidates[0];
//         } else if (riskLevel < 70) {
//           // For medium risk, pick from top 50% by score
//           candidates.sort((a, b) => (b.score || 0) - (a.score || 0));
//           const topHalf = candidates.slice(0, Math.ceil(candidates.length * 0.5));
//           selectedPlayer = topHalf[Math.floor(Math.random() * topHalf.length)];
//         } else {
//           // For high risk, pick randomly but with weighted probability based on score
//           const totalScore = candidates.reduce((sum, p) => sum + (p.score || 0), 0);
//           let random = Math.random() * totalScore;
//           for (const player of candidates) {
//             random -= player.score || 0;
//             if (random <= 0) {
//               selectedPlayer = player;
//               break;
//             }
//           }
//           selectedPlayer = selectedPlayer || candidates[0];
//         }
  
//         if (!selectedPlayer) break;
  
//         teamPlayers.push(selectedPlayer);
//         teamComposition[selectedPlayer.role]++;
//         teamComposition.totalScore += selectedPlayer.score || 0;
//         teamComposition[selectedPlayer.teamName === team1.name ? team1Short : team2Short]++;
//         if (selectedPlayer.isOverseas) teamComposition.overseas++;
  
//         // Update role requirements
//         const roleIndex = roleRequirements.findIndex(r => r.role === selectedPlayer.role);
//         if (roleIndex !== -1) {
//           roleRequirements[roleIndex].current++;
//         }
  
//         // Remove selected player from remaining players
//         const index = remainingPlayers.findIndex(p => p.id === selectedPlayer.id);
//         if (index !== -1) remainingPlayers.splice(index, 1);
//       }
  
//       // Final validation
//       if (teamPlayers.length !== 11) continue;
//       if (teamComposition.overseas > 4) continue;
//       if (teamComposition[team1Short] > 7 || teamComposition[team2Short] > 7) continue;
//       if (teamComposition[team1Short] < 4 || teamComposition[team2Short] < 4) continue;
//       if (teamComposition['WK-Batsman'] < 1) continue;
//       if (teamComposition['Batting Allrounder'] < 3) continue;
//       if (teamComposition['Bowling Allrounder'] < 2) continue;
//       if (teamComposition['Bowler'] < 3) continue;
  
//       return {
//         players: teamPlayers,
//         captain,
//         viceCaptain,
//         teamName: `Team ${existingTeamCount + 1}`,
//         teamComposition,
//         riskLevel,
//         matchId,
//         createdAt: new Date().toISOString()
//       };
//     }
  
//     return null;
//   }, [team1, team2, riskLevel, matchId]);

//     return null;
//   }, [team1, team2, riskLevel, matchId]);

//   const getTeamCountForMatch = async (): Promise<number> => {
//     if (!user || !matchId) return 0;
    
//     try {
//       const q = query(
//         collection(db, "users", user.id, "matches", matchId, "teams"),
//         limit(MAX_TEAMS_PER_MATCH)
//       );
//       const querySnapshot = await getDocs(q);
//       return querySnapshot.size;
//     } catch (err) {
//       console.error("Failed to count teams:", err);
//       return 0;
//     }
//   };

//   const saveTeamToFirestore = async (team: GeneratedTeam) => {
//     if (!user || !matchId) return;
    
//     try {
//       const teamsCount = await getTeamCountForMatch();
//       if (teamsCount >= MAX_TEAMS_PER_MATCH) {
//         throw new Error(`Maximum of ${MAX_TEAMS_PER_MATCH} teams reached for this match`);
//       }

//       const teamData = {
//         ...team,
//         userId: user.id,
//         userEmail: user.primaryEmailAddress?.emailAddress || '',
//         matchName: `${team1?.name} vs ${team2?.name}`,
//         team1ShortName: team1?.shortName || team1?.name.split(' ').map(n => n[0]).join(''),
//         team2ShortName: team2?.shortName || team2?.name.split(' ').map(n => n[0]).join(''),
//         team1Logo: team1?.logo || '/fallback-team.png',
//         team2Logo: team2?.logo || '/fallback-team.png'
//       };

//       const matchTeamsRef = collection(db, "users", user.id, "matches", matchId, "teams");
//       const teamRef = doc(matchTeamsRef);
      
//       await setDoc(teamRef, teamData);
//       return teamRef.id;
//     } catch (err) {
//       console.error("Failed to save team:", err);
//       throw err;
//     }
//   };

//   const fetchSavedTeams = useCallback(async () => {
//     if (!user || !matchId) return [];
    
//     try {
//       const q = query(
//         collection(db, "users", user.id, "matches", matchId, "teams"),
//         orderBy("createdAt", "desc"),
//         limit(MAX_TEAMS_PER_MATCH)
//       );
//       const querySnapshot = await getDocs(q);
//       return querySnapshot.docs.map(doc => ({
//         ...doc.data() as GeneratedTeam,
//         id: doc.id
//       }));
//     } catch (err) {
//       console.error("Failed to fetch saved teams:", err);
//       return [];
//     }
//   }, [user, matchId]);

//   const handleGenerateTeams = useCallback(async () => {
//     if (!team1 || !team2) {
//       setError("Select both teams first");
//       return;
//     }

//     if (!user) {
//       setError("Please sign in to generate teams");
//       return;
//     }

//     const currentTeamCount = await getTeamCountForMatch();
//     if (currentTeamCount >= MAX_TEAMS_PER_MATCH) {
//       setError(`You've reached the maximum of ${MAX_TEAMS_PER_MATCH} teams for this match`);
//       return;
//     }

//     const remainingTeamSlots = MAX_TEAMS_PER_MATCH - currentTeamCount;
//     const teamsToGenerate = Math.min(teamCount, remainingTeamSlots);

//     if (teamsToGenerate <= 0) {
//       setError(`You've reached the maximum of ${MAX_TEAMS_PER_MATCH} teams for this match`);
//       return;
//     }

//     if (needsPayment) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     const allPlayers = [
//       ...(team1.playerDetails || []).filter(p => !p.substitute && p.select !== false),
//       ...(team2.playerDetails || []).filter(p => !p.substitute && p.select !== false)
//     ];

//     const currentRoleCounts = {
//       wk: allPlayers.filter(p => normalizeRole(p.role) === 'WK-Batsman').length,
//       battingAllrounders: allPlayers.filter(p => normalizeRole(p.role) === 'Batting Allrounder').length,
//       bowlingAllrounders: allPlayers.filter(p => normalizeRole(p.role) === 'Bowling Allrounder').length,
//       bowlers: allPlayers.filter(p => normalizeRole(p.role) === 'Bowler').length
//     };
//     setRoleCounts(currentRoleCounts);

//     const errors = [];
//     if (currentRoleCounts.wk < 1) errors.push("1 Wicket-Keeper (WK-Batsman)");
//     if (currentRoleCounts.battingAllrounders < 3) errors.push("3 Batting Allrounders");
//     if (currentRoleCounts.bowlingAllrounders < 2) errors.push("2 Bowling Allrounders");
//     if (currentRoleCounts.bowlers < 3) errors.push("3 Bowlers");

//     if (errors.length > 0) {
//       setError(`Need at least ${errors.join(", ")}`);
//       return;
//     }

//     if (allPlayers.length < 11) {
//       setError(`Not enough players (${allPlayers.length}/11). Please check your filters.`);
//       return;
//     }

//     setIsGenerating(true);
//     setError(null);

//     try {
//       await runTransaction(db, async (transaction) => {
//         const userRef = doc(db, "users", user.id);
//         const userDoc = await transaction.get(userRef);
        
//         if (!userDoc.exists()) throw new Error("User not found");
//         if ((userDoc.data().credits || 0) < requiredCredits) {
//           throw new Error("Insufficient balance");
//         }
        
//         transaction.update(userRef, {
//           credits: increment(-requiredCredits)
//         });
//       });

//       const newTeams: GeneratedTeam[] = [];
//       const TOTAL_ATTEMPTS = teamsToGenerate * 100;
//       let attempts = 0;

//       while (newTeams.length < teamsToGenerate && attempts < TOTAL_ATTEMPTS) {
//         attempts++;
//         const team = createBalancedTeam(allPlayers, currentTeamCount + newTeams.length);
//         if (team) {
//           await saveTeamToFirestore(team);
//           newTeams.push(team);
//         }
//       }

//       if (newTeams.length === 0) {
//         throw new Error(`Failed to generate valid teams after ${TOTAL_ATTEMPTS} attempts. Try adjusting your risk level or player filters.`);
//       }

//       const savedTeams = await fetchSavedTeams();
//       setGeneratedTeams(savedTeams);
//       onBalanceUpdate(userBalance - requiredCredits);
//     } catch (err: any) {
//       setError(err.message || "Failed to generate teams");
//     } finally {
//       setIsGenerating(false);
//     }
//   }, [
//     team1, team2, teamCount, riskLevel, user,
//     userBalance, requiredCredits, needsPayment,
//     onBalanceUpdate, createBalancedTeam, matchId,
//     fetchSavedTeams
//   ]);

//   const generateButton = (
//     <div className="space-y-2">
//       <button
//         onClick={handleGenerateTeams}
//         disabled={isGenerating || !team1 || !team2}
//         className={`
//           w-full px-4 py-3 rounded-md font-bold
//           ${isGenerating ? 'bg-gray-500' :
//            needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' :
//            'bg-blue-500 hover:bg-blue-600'}
//           text-white transition-colors
//         `}
//       >
//         {isGenerating ? (
//           <span className="flex items-center justify-center gap-2">
//             <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//             Generating...
//           </span>
//         ) : !team1 || !team2 ? (
//           "Select both teams"
//         ) : needsPayment ? (
//           `Add ₹${paymentAmount} to Generate`
//         ) : (
//           `Generate ${teamCount} Teams (₹${requiredCredits})`
//         )}
//       </button>

//       <div className="flex justify-between text-sm">
//         <span>Your Credits: ₹{userBalance}</span>
//         {needsPayment ? (
//           <span className="text-yellow-500">Need ₹{paymentAmount} more</span>
//         ) : (
//           <span className="text-green-500">Sufficient balance</span>
//         )}
//       </div>

//       {error && (
//         <div className="text-red-500 text-sm p-2 bg-red-50 rounded-lg">
//           <p className="font-medium">{error}</p>
//           {error.includes("Need at least") && (
//             <div className="mt-2 text-xs">
//               <p>Current player counts:</p>
//               <ul className="list-disc pl-5">
//                 <li>WK-Batsman: {roleCounts.wk} (min 1)</li>
//                 <li>Batting Allrounders: {roleCounts.battingAllrounders} (min 3)</li>
//                 <li>Bowling Allrounders: {roleCounts.bowlingAllrounders} (min 2)</li>
//                 <li>Bowlers: {roleCounts.bowlers} (min 3)</li>
//               </ul>
//             </div>
//           )}
//           {error.includes("Not enough players") && (
//             <p className="text-xs mt-1">Try adjusting player filters or selecting different teams</p>
//           )}
//         </div>
//       )}
//     </div>
//   );

//   const paymentDialog = showPaymentDialog && (
//     <PaymentDialog
//       currentBalance={userBalance}
//       requiredAmount={paymentAmount}
//       onPaymentSuccess={(amount) => {
//         onBalanceUpdate(userBalance + amount);
//         setShowPaymentDialog(false);
//         handleGenerateTeams();
//       }}
//       onOpenChange={setShowPaymentDialog}
//       open={showPaymentDialog}
//     />
//   );

//   return {
//     generatedTeams,
//     isGenerating,
//     generateButton,
//     paymentDialog,
//     error,
//     setError,
//     fetchSavedTeams,
//     setGeneratedTeams
//   };
// };



// // TeamGenerator.tsx

// "use client";

// import { useState, useCallback, useMemo } from "react";
// import { PaymentDialog } from "./PaymentDialog";
// import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";
// import { db } from "@/lib/firebase";
// import {
//   doc,
//   runTransaction,
//   increment,
//   setDoc,
//   collection,
//   query,
//   orderBy,
//   getDocs,
//   limit
// } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";

// interface TeamGeneratorProps {
//   team1?: Team;
//   team2?: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate: (newBalance: number) => void;
//   matchId: string;
// }

// export const useTeamGenerator = ({
//   team1,
//   team2,
//   teamCount,
//   riskLevel,
//   userBalance,
//   onBalanceUpdate,
//   matchId
// }: TeamGeneratorProps) => {
//   const { user } = useUser();
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [roleCounts, setRoleCounts] = useState({
//     wk: 0,
//     battingAllrounders: 0,
//     bowlingAllrounders: 0,
//     bowlers: 0
//   });

//   const MAX_TEAMS_PER_MATCH = 100;
//   const requiredCredits = useMemo(() => teamCount * 10, [teamCount]);
//   const needsPayment = useMemo(() => userBalance < requiredCredits, [userBalance, requiredCredits]);
//   const paymentAmount = useMemo(() => Math.max(requiredCredits - userBalance, 50), [requiredCredits, userBalance]);

//   const normalizeRole = (role: string): string => {
//     const roleMap: Record<string, string> = {
//       'All-Rounder': 'Bowling Allrounder',
//       'Batsman': 'Batting Allrounder',
//       'Batsman Allrounder': 'Batting Allrounder',
//       'Bowler Allrounder': 'Bowling Allrounder'
//     };
//     return roleMap[role] || role;
//   };

//   const calculatePlayerScore = (player: PlayerDetail) => {
//     const normalizedRole = normalizeRole(player.role);
//     const baseScore = player.selectPerc || 0;
//     const roleWeights = {
//       'WK-Batsman': 1.5,
//       'Batting Allrounder': 1.4,
//       'Bowling Allrounder': 1.3,
//       'Bowler': 1.2
//     };
    
//     let riskFactor;
//     if (riskLevel < 30) {
//       riskFactor = 1 + (baseScore / 100);
//     } else if (riskLevel < 70) {
//       riskFactor = 0.9 + (Math.random() * 0.3);
//     } else {
//       riskFactor = 0.7 + (Math.random() * 0.6);
//     }
    
//     return baseScore * (roleWeights[normalizedRole] || 1.0) * riskFactor;
//   };

//   const createBalancedTeam = useCallback((players: PlayerDetail[], existingTeamCount: number) => {
//     if (!team1 || !team2) return null;
    
//     const MAX_ATTEMPTS = 500;
//     let attempts = 0;
    
//     const team1Short = team1.shortName || team1.name.split(' ').map(n => n[0]).join('');
//     const team2Short = team2.shortName || team2.name.split(' ').map(n => n[0]).join('');
  
//     // Filter and prepare players only once
//     const availablePlayers = players
//       .filter(p => !p.substitute && p.select !== false)
//       .map(p => ({
//         ...p,
//         role: normalizeRole(p.role),
//         score: calculatePlayerScore(p)
//       }));
  
//     // Early validation - check if we have enough players for each role
//     const roleCounts = {
//       'WK-Batsman': availablePlayers.filter(p => p.role === 'WK-Batsman').length,
//       'Batting Allrounder': availablePlayers.filter(p => p.role === 'Batting Allrounder').length,
//       'Bowling Allrounder': availablePlayers.filter(p => p.role === 'Bowling Allrounder').length,
//       'Bowler': availablePlayers.filter(p => p.role === 'Bowler').length
//     };
  
//     if (
//       roleCounts['WK-Batsman'] < 1 ||
//       roleCounts['Batting Allrounder'] < 3 ||
//       roleCounts['Bowling Allrounder'] < 2 ||
//       roleCounts['Bowler'] < 3
//     ) {
//       throw new Error(`Insufficient players for required roles`);
//     }
  
//     // Sort players by score once to improve selection
//     const sortedPlayers = [...availablePlayers].sort((a, b) => (b.score || 0) - (a.score || 0));
  
//     while (attempts < MAX_ATTEMPTS) {
//       attempts++;
//       const teamComposition = {
//         'WK-Batsman': 0,
//         'Batting Allrounder': 0,
//         'Bowling Allrounder': 0,
//         'Bowler': 0,
//         [team1Short]: 0,
//         [team2Short]: 0,
//         overseas: 0,
//         totalScore: 0
//       };
  
//       // Create a fresh shuffled copy for each attempt
//       const shuffledPlayers = [...sortedPlayers].sort(() => Math.random() - 0.5);
  
//       let captain, viceCaptain;
//       const selectTopPlayers = (percentage: number) => {
//         const count = Math.ceil(shuffledPlayers.length * percentage);
//         return [...shuffledPlayers]
//           .sort((a, b) => (b.score || 0) - (a.score || 0))
//           .slice(0, count);
//       };
  
//       // Improved captain/vice-captain selection
//       if (riskLevel < 30) {
//         const topPlayers = selectTopPlayers(0.2);
//         captain = topPlayers[0];
//         viceCaptain = topPlayers[1] || topPlayers[0];
//       } else if (riskLevel < 70) {
//         const topPlayers = selectTopPlayers(0.4);
//         captain = topPlayers[Math.floor(Math.random() * Math.min(topPlayers.length, 3))];
//         viceCaptain = topPlayers.find(p => p.id !== captain?.id) || topPlayers[0];
//       } else {
//         const candidates = shuffledPlayers.slice(0, Math.ceil(shuffledPlayers.length * 0.6));
//         captain = candidates[Math.floor(Math.random() * candidates.length)];
//         viceCaptain = candidates.find(p => p.id !== captain?.id) || candidates[0];
//       }
  
//       if (!captain || !viceCaptain) continue;
  
//       const teamPlayers: PlayerDetail[] = [captain, viceCaptain];
      
//       [captain, viceCaptain].forEach(player => {
//         teamComposition[player.role]++;
//         teamComposition.totalScore += player.score || 0;
//         teamComposition[player.teamName === team1.name ? team1Short : team2Short]++;
//         if (player.isOverseas) teamComposition.overseas++;
//       });
  
//       const remainingPlayers = shuffledPlayers.filter(p =>
//         p.id !== captain.id && p.id !== viceCaptain.id
//       );
  
//       // Improved role filling logic
//       const roleRequirements = [
//         { role: 'WK-Batsman', min: 1, current: teamComposition['WK-Batsman'] },
//         { role: 'Batting Allrounder', min: 3, current: teamComposition['Batting Allrounder'] },
//         { role: 'Bowling Allrounder', min: 2, current: teamComposition['Bowling Allrounder'] },
//         { role: 'Bowler', min: 3, current: teamComposition['Bowler'] }
//       ];
  
//       while (teamPlayers.length < 11 && remainingPlayers.length > 0) {
//         // Find which roles still need players
//         const neededRoles = roleRequirements
//           .filter(r => r.current < r.min)
//           .map(r => r.role);
  
//         const rolesToConsider = neededRoles.length > 0
//           ? neededRoles
//           : ['Batting Allrounder', 'Bowling Allrounder', 'Bowler'];
        
//         // Find suitable candidates
//         let candidates = remainingPlayers.filter(p => {
//           if (!rolesToConsider.includes(p.role)) return false;
//           const team = p.teamName === team1.name ? team1Short : team2Short;
//           if (teamComposition[team] >= 7) return false;
//           if (p.isOverseas && teamComposition.overseas >= 4) return false;
//           return true;
//         });
  
//         // If no candidates found with all constraints, relax some constraints
//         if (candidates.length === 0) {
//           candidates = remainingPlayers.filter(p => rolesToConsider.includes(p.role));
//         }
  
//         if (candidates.length === 0) break;
  
//         // Select player based on risk level
//         let selectedPlayer;
//         if (riskLevel < 30) {
//           candidates.sort((a, b) => (b.score || 0) - (a.score || 0));
//           selectedPlayer = candidates[0];
//         } else if (riskLevel < 70) {
//           candidates.sort((a, b) => (b.score || 0) - (a.score || 0));
//           const topHalf = candidates.slice(0, Math.ceil(candidates.length * 0.5));
//           selectedPlayer = topHalf[Math.floor(Math.random() * topHalf.length)];
//         } else {
//           const totalScore = candidates.reduce((sum, p) => sum + (p.score || 0), 0);
//           let random = Math.random() * totalScore;
//           for (const player of candidates) {
//             random -= player.score || 0;
//             if (random <= 0) {
//               selectedPlayer = player;
//               break;
//             }
//           }
//           selectedPlayer = selectedPlayer || candidates[0];
//         }
  
//         if (!selectedPlayer) break;
  
//         teamPlayers.push(selectedPlayer);
//         teamComposition[selectedPlayer.role]++;
//         teamComposition.totalScore += selectedPlayer.score || 0;
//         teamComposition[selectedPlayer.teamName === team1.name ? team1Short : team2Short]++;
//         if (selectedPlayer.isOverseas) teamComposition.overseas++;
  
//         // Update role requirements
//         const roleIndex = roleRequirements.findIndex(r => r.role === selectedPlayer.role);
//         if (roleIndex !== -1) {
//           roleRequirements[roleIndex].current++;
//         }
  
//         // Remove selected player from remaining players
//         const index = remainingPlayers.findIndex(p => p.id === selectedPlayer.id);
//         if (index !== -1) remainingPlayers.splice(index, 1);
//       }
  
//       // Final validation
//       if (teamPlayers.length !== 11) continue;
//       if (teamComposition.overseas > 4) continue;
//       if (teamComposition[team1Short] > 7 || teamComposition[team2Short] > 7) continue;
//       if (teamComposition[team1Short] < 4 || teamComposition[team2Short] < 4) continue;
//       if (teamComposition['WK-Batsman'] < 1) continue;
//       if (teamComposition['Batting Allrounder'] < 3) continue;
//       if (teamComposition['Bowling Allrounder'] < 2) continue;
//       if (teamComposition['Bowler'] < 3) continue;
  
//       return {
//         players: teamPlayers,
//         captain,
//         viceCaptain,
//         teamName: `Team ${existingTeamCount + 1}`,
//         teamComposition,
//         riskLevel,
//         matchId,
//         createdAt: new Date().toISOString()
//       };
//     }
  
//     return null;
//   }, [team1, team2, riskLevel, matchId]);

//   const getTeamCountForMatch = async (): Promise<number> => {
//     if (!user || !matchId) return 0;
    
//     try {
//       const q = query(
//         collection(db, "users", user.id, "matches", matchId, "teams"),
//         limit(MAX_TEAMS_PER_MATCH)
//       );
//       const querySnapshot = await getDocs(q);
//       return querySnapshot.size;
//     } catch (err) {
//       console.error("Failed to count teams:", err);
//       return 0;
//     }
//   };

//   const saveTeamToFirestore = async (team: GeneratedTeam) => {
//     if (!user || !matchId) return;
    
//     try {
//       const teamsCount = await getTeamCountForMatch();
//       if (teamsCount >= MAX_TEAMS_PER_MATCH) {
//         throw new Error(`Maximum of ${MAX_TEAMS_PER_MATCH} teams reached for this match`);
//       }

//       const teamData = {
//         ...team,
//         userId: user.id,
//         userEmail: user.primaryEmailAddress?.emailAddress || '',
//         matchName: `${team1?.name} vs ${team2?.name}`,
//         team1ShortName: team1?.shortName || team1?.name.split(' ').map(n => n[0]).join(''),
//         team2ShortName: team2?.shortName || team2?.name.split(' ').map(n => n[0]).join(''),
//         team1Logo: team1?.logo || '/fallback-team.png',
//         team2Logo: team2?.logo || '/fallback-team.png'
//       };

//       const matchTeamsRef = collection(db, "users", user.id, "matches", matchId, "teams");
//       const teamRef = doc(matchTeamsRef);
      
//       await setDoc(teamRef, teamData);
//       return teamRef.id;
//     } catch (err) {
//       console.error("Failed to save team:", err);
//       throw err;
//     }
//   };

//   const fetchSavedTeams = useCallback(async () => {
//     if (!user || !matchId) return [];
    
//     try {
//       const q = query(
//         collection(db, "users", user.id, "matches", matchId, "teams"),
//         orderBy("createdAt", "desc"),
//         limit(MAX_TEAMS_PER_MATCH)
//       );
//       const querySnapshot = await getDocs(q);
//       return querySnapshot.docs.map(doc => ({
//         ...doc.data() as GeneratedTeam,
//         id: doc.id
//       }));
//     } catch (err) {
//       console.error("Failed to fetch saved teams:", err);
//       return [];
//     }
//   }, [user, matchId]);

//   const handleGenerateTeams = useCallback(async () => {
//     if (!team1 || !team2) {
//       setError("Select both teams first");
//       return;
//     }

//     if (!user) {
//       setError("Please sign in to generate teams");
//       return;
//     }

//     const currentTeamCount = await getTeamCountForMatch();
//     if (currentTeamCount >= MAX_TEAMS_PER_MATCH) {
//       setError(`You've reached the maximum of ${MAX_TEAMS_PER_MATCH} teams for this match`);
//       return;
//     }

//     const remainingTeamSlots = MAX_TEAMS_PER_MATCH - currentTeamCount;
//     const teamsToGenerate = Math.min(teamCount, remainingTeamSlots);

//     if (teamsToGenerate <= 0) {
//       setError(`You've reached the maximum of ${MAX_TEAMS_PER_MATCH} teams for this match`);
//       return;
//     }

//     if (needsPayment) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     const allPlayers = [
//       ...(team1.playerDetails || []).filter(p => !p.substitute && p.select !== false),
//       ...(team2.playerDetails || []).filter(p => !p.substitute && p.select !== false)
//     ];

//     const currentRoleCounts = {
//       wk: allPlayers.filter(p => normalizeRole(p.role) === 'WK-Batsman').length,
//       battingAllrounders: allPlayers.filter(p => normalizeRole(p.role) === 'Batting Allrounder').length,
//       bowlingAllrounders: allPlayers.filter(p => normalizeRole(p.role) === 'Bowling Allrounder').length,
//       bowlers: allPlayers.filter(p => normalizeRole(p.role) === 'Bowler').length
//     };
//     setRoleCounts(currentRoleCounts);

//     const errors = [];
//     if (currentRoleCounts.wk < 1) errors.push("1 Wicket-Keeper (WK-Batsman)");
//     if (currentRoleCounts.battingAllrounders < 3) errors.push("3 Batting Allrounders");
//     if (currentRoleCounts.bowlingAllrounders < 2) errors.push("2 Bowling Allrounders");
//     if (currentRoleCounts.bowlers < 3) errors.push("3 Bowlers");

//     if (errors.length > 0) {
//       setError(`Need at least ${errors.join(", ")}`);
//       return;
//     }

//     if (allPlayers.length < 11) {
//       setError(`Not enough players (${allPlayers.length}/11). Please check your filters.`);
//       return;
//     }

//     setIsGenerating(true);
//     setError(null);

//     try {
//       await runTransaction(db, async (transaction) => {
//         const userRef = doc(db, "users", user.id);
//         const userDoc = await transaction.get(userRef);
        
//         if (!userDoc.exists()) throw new Error("User not found");
//         if ((userDoc.data().credits || 0) < requiredCredits) {
//           throw new Error("Insufficient balance");
//         }
        
//         transaction.update(userRef, {
//           credits: increment(-requiredCredits)
//         });
//       });

//       const newTeams: GeneratedTeam[] = [];
//       const TOTAL_ATTEMPTS = teamsToGenerate * 100;
//       let attempts = 0;

//       while (newTeams.length < teamsToGenerate && attempts < TOTAL_ATTEMPTS) {
//         attempts++;
//         const team = createBalancedTeam(allPlayers, currentTeamCount + newTeams.length);
//         if (team) {
//           await saveTeamToFirestore(team);
//           newTeams.push(team);
//         }
//       }

//       if (newTeams.length === 0) {
//         throw new Error(`Failed to generate valid teams after ${TOTAL_ATTEMPTS} attempts. Try adjusting your risk level or player filters.`);
//       }

//       const savedTeams = await fetchSavedTeams();
//       setGeneratedTeams(savedTeams);
//       onBalanceUpdate(userBalance - requiredCredits);
//     } catch (err: any) {
//       setError(err.message || "Failed to generate teams");
//     } finally {
//       setIsGenerating(false);
//     }
//   }, [
//     team1, team2, teamCount, riskLevel, user,
//     userBalance, requiredCredits, needsPayment,
//     onBalanceUpdate, createBalancedTeam, matchId,
//     fetchSavedTeams
//   ]);

//   const generateButton = (
//     <div className="space-y-2">
//       <button
//         onClick={handleGenerateTeams}
//         disabled={isGenerating || !team1 || !team2}
//         className={`
//           w-full px-4 py-3 rounded-md font-bold
//           ${isGenerating ? 'bg-gray-500' :
//            needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' :
//            'bg-blue-500 hover:bg-blue-600'}
//           text-white transition-colors
//         `}
//       >
//         {isGenerating ? (
//           <span className="flex items-center justify-center gap-2">
//             <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//             Generating...
//           </span>
//         ) : !team1 || !team2 ? (
//           "Select both teams"
//         ) : needsPayment ? (
//           `Add ₹${paymentAmount} to Generate`
//         ) : (
//           `Generate ${teamCount} Teams (₹${requiredCredits})`
//         )}
//       </button>

//       <div className="flex justify-between text-sm">
//         <span>Your Credits: ₹{userBalance}</span>
//         {needsPayment ? (
//           <span className="text-yellow-500">Need ₹{paymentAmount} more</span>
//         ) : (
//           <span className="text-green-500">Sufficient balance</span>
//         )}
//       </div>

//       {error && (
//         <div className="text-red-500 text-sm p-2 bg-red-50 rounded-lg">
//           <p className="font-medium">{error}</p>
//           {error.includes("Need at least") && (
//             <div className="mt-2 text-xs">
//               <p>Current player counts:</p>
//               <ul className="list-disc pl-5">
//                 <li>WK-Batsman: {roleCounts.wk} (min 1)</li>
//                 <li>Batting Allrounders: {roleCounts.battingAllrounders} (min 3)</li>
//                 <li>Bowling Allrounders: {roleCounts.bowlingAllrounders} (min 2)</li>
//                 <li>Bowlers: {roleCounts.bowlers} (min 3)</li>
//               </ul>
//             </div>
//           )}
//           {error.includes("Not enough players") && (
//             <p className="text-xs mt-1">Try adjusting player filters or selecting different teams</p>
//           )}
//         </div>
//       )}
//     </div>
//   );

//   const paymentDialog = showPaymentDialog && (
//     <PaymentDialog
//       currentBalance={userBalance}
//       requiredAmount={paymentAmount}
//       onPaymentSuccess={(amount) => {
//         onBalanceUpdate(userBalance + amount);
//         setShowPaymentDialog(false);
//         handleGenerateTeams();
//       }}
//       onOpenChange={setShowPaymentDialog}
//       open={showPaymentDialog}
//     />
//   );

//   return {
//     generatedTeams,
//     isGenerating,
//     generateButton,
//     paymentDialog,
//     error,
//     setError,
//     fetchSavedTeams,
//     setGeneratedTeams
//   };
// };








// // TeamGenerator.tsx

// "use client";

// import { useState, useCallback, useMemo } from "react";
// import { PaymentDialog } from "./PaymentDialog";
// import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";
// import { db } from "@/lib/firebase";
// import {
//   doc,
//   runTransaction,
//   increment,
//   setDoc,
//   collection,
//   query,
//   orderBy,
//   getDocs,
//   limit
// } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";

// interface TeamGeneratorProps {
//   team1?: Team;
//   team2?: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate: (newBalance: number) => void;
//   matchId: string;
// }

// export const useTeamGenerator = ({
//   team1,
//   team2,
//   teamCount,
//   riskLevel,
//   userBalance,
//   onBalanceUpdate,
//   matchId
// }: TeamGeneratorProps) => {
//   const { user } = useUser();
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [roleCounts, setRoleCounts] = useState({
//     wk: 0,
//     battingAllrounders: 0,
//     bowlingAllrounders: 0,
//     bowlers: 0
//   });

//   const MAX_TEAMS_PER_MATCH = 100;
//   const requiredCredits = useMemo(() => teamCount * 10, [teamCount]);
//   const needsPayment = useMemo(() => userBalance < requiredCredits, [userBalance, requiredCredits]);
//   const paymentAmount = useMemo(() => Math.max(requiredCredits - userBalance, 50), [requiredCredits, userBalance]);

//   const normalizeRole = (role: string): string => {
//     const roleMap: Record<string, string> = {
//       'All-Rounder': 'Bowling Allrounder',
//       'Batsman': 'Batting Allrounder',
//       'Batsman Allrounder': 'Batting Allrounder',
//       'Bowler Allrounder': 'Bowling Allrounder'
//     };
//     return roleMap[role] || role;
//   };

//   const calculatePlayerScore = (player: PlayerDetail) => {
//     const normalizedRole = normalizeRole(player.role);
//     const baseScore = player.selectPerc !== undefined ? player.selectPerc :
//                      player.selectedBy !== undefined ? player.selectedBy : 0;
    
//     const roleWeights = {
//       'WK-Batsman': 1.5,
//       'Batting Allrounder': 1.4,
//       'Bowling Allrounder': 1.3,
//       'Bowler': 1.2
//     };
    
//     let riskFactor;
//     if (riskLevel < 30) {
//       riskFactor = 1 + (baseScore / 100);
//     } else if (riskLevel < 70) {
//       riskFactor = 0.9 + (Math.random() * 0.3);
//     } else {
//       riskFactor = 0.7 + (Math.random() * 0.6);
//     }
    
//     return baseScore * (roleWeights[normalizedRole] || 1.0) * riskFactor;
//   };

//   const createBalancedTeam = useCallback((players: PlayerDetail[], existingTeamCount: number) => {
//     if (!team1 || !team2) return null;
    
//     const MAX_ATTEMPTS = 500;
//     let attempts = 0;
    
//     const team1Short = team1.shortName || team1.name.split(' ').map(n => n[0]).join('');
//     const team2Short = team2.shortName || team2.name.split(' ').map(n => n[0]).join('');

//     const availablePlayers = players
//       .filter(p => !p.substitute && p.select !== false)
//       .map(p => ({
//         ...p,
//         role: normalizeRole(p.role),
//         score: calculatePlayerScore(p),
//         selectionInfo: p.selectPerc !== undefined ? p.selectPerc :
//                      p.selectedBy !== undefined ? p.selectedBy : 0
//       }));

//     const roleCounts = {
//       'WK-Batsman': availablePlayers.filter(p => p.role === 'WK-Batsman').length,
//       'Batting Allrounder': availablePlayers.filter(p => p.role === 'Batting Allrounder').length,
//       'Bowling Allrounder': availablePlayers.filter(p => p.role === 'Bowling Allrounder').length,
//       'Bowler': availablePlayers.filter(p => p.role === 'Bowler').length
//     };

//     if (
//       roleCounts['WK-Batsman'] < 1 ||
//       (roleCounts['Batting Allrounder'] + roleCounts['Bowling Allrounder']) < 5 ||
//       roleCounts['Bowler'] < 3
//     ) {
//       throw new Error(`Insufficient players for required roles`);
//     }

//     const sortedPlayers = [...availablePlayers].sort((a, b) => (b.score || 0) - (a.score || 0));

//     while (attempts < MAX_ATTEMPTS) {
//       attempts++;
//       const teamComposition = {
//         'WK-Batsman': 0,
//         'Batting Allrounder': 0,
//         'Bowling Allrounder': 0,
//         'Bowler': 0,
//         [team1Short]: 0,
//         [team2Short]: 0,
//         overseas: 0,
//         totalScore: 0
//       };

//       const shuffledPlayers = [...sortedPlayers].sort(() => Math.random() - 0.5);

//       let captain, viceCaptain;
//       const topPlayers = shuffledPlayers.slice(0, Math.ceil(shuffledPlayers.length * 0.3));
      
//       if (topPlayers.length >= 2) {
//         captain = topPlayers[0];
//         viceCaptain = topPlayers[1];
//       } else if (topPlayers.length === 1) {
//         captain = topPlayers[0];
//         viceCaptain = shuffledPlayers.find(p => p.id !== captain.id) || captain;
//       } else {
//         continue;
//       }

//       const teamPlayers: PlayerDetail[] = [captain, viceCaptain];
      
//       [captain, viceCaptain].forEach(player => {
//         teamComposition[player.role]++;
//         teamComposition.totalScore += player.score || 0;
//         teamComposition[player.teamName === team1.name ? team1Short : team2Short]++;
//         if (player.isOverseas) teamComposition.overseas++;
//       });

//       const remainingPlayers = shuffledPlayers.filter(p =>
//         p.id !== captain.id && p.id !== viceCaptain.id
//       );

//       while (teamPlayers.length < 11 && remainingPlayers.length > 0) {
//         const neededRoles = [];
//         if (teamComposition['WK-Batsman'] < 1) neededRoles.push('WK-Batsman');
//         if (teamComposition['Batting Allrounder'] + teamComposition['Bowling Allrounder'] < 5) {
//           neededRoles.push('Batting Allrounder', 'Bowling Allrounder');
//         }
//         if (teamComposition['Bowler'] < 3) neededRoles.push('Bowler');

//         const rolesToConsider = neededRoles.length > 0 ? neededRoles :
//           ['Batting Allrounder', 'Bowling Allrounder', 'Bowler'];

//         let candidates = remainingPlayers.filter(p => {
//           if (!rolesToConsider.includes(p.role)) return false;
//           const team = p.teamName === team1.name ? team1Short : team2Short;
//           if (teamComposition[team] >= 8) return false;
//           if (p.isOverseas && teamComposition.overseas >= 5) return false;
//           return true;
//         });

//         if (candidates.length === 0) {
//           candidates = remainingPlayers.filter(p => rolesToConsider.includes(p.role));
//         }

//         if (candidates.length === 0) break;

//         let selectedPlayer;
//         if (riskLevel < 30) {
//           candidates.sort((a, b) => (b.score || 0) - (a.score || 0));
//           selectedPlayer = candidates[0];
//         } else if (riskLevel < 70) {
//           candidates.sort((a, b) => (b.score || 0) - (a.score || 0));
//           const topHalf = candidates.slice(0, Math.ceil(candidates.length * 0.5));
//           selectedPlayer = topHalf[Math.floor(Math.random() * topHalf.length)];
//         } else {
//           selectedPlayer = candidates[Math.floor(Math.random() * candidates.length)];
//         }

//         teamPlayers.push(selectedPlayer);
//         teamComposition[selectedPlayer.role]++;
//         teamComposition.totalScore += selectedPlayer.score || 0;
//         teamComposition[selectedPlayer.teamName === team1.name ? team1Short : team2Short]++;
//         if (selectedPlayer.isOverseas) teamComposition.overseas++;

//         const index = remainingPlayers.findIndex(p => p.id === selectedPlayer.id);
//         if (index !== -1) remainingPlayers.splice(index, 1);
//       }

//       if (teamPlayers.length !== 11) continue;
//       if (teamComposition.overseas > 5) continue;
//       if (teamComposition[team1Short] > 8 || teamComposition[team2Short] > 8) continue;
//       if (teamComposition['WK-Batsman'] < 1) continue;
//       if ((teamComposition['Batting Allrounder'] + teamComposition['Bowling Allrounder']) < 5) continue;
//       if (teamComposition['Bowler'] < 3) continue;

//       return {
//         players: teamPlayers,
//         captain,
//         viceCaptain,
//         teamName: `Team ${existingTeamCount + 1}`,
//         teamComposition,
//         riskLevel,
//         matchId,
//         createdAt: new Date().toISOString()
//       };
//     }

//     return null;
//   }, [team1, team2, riskLevel, matchId]);

//   const getTeamCountForMatch = async (): Promise<number> => {
//     if (!user || !matchId) return 0;
    
//     try {
//       const q = query(
//         collection(db, "users", user.id, "matches", matchId, "teams"),
//         limit(MAX_TEAMS_PER_MATCH)
//       );
//       const querySnapshot = await getDocs(q);
//       return querySnapshot.size;
//     } catch (err) {
//       console.error("Failed to count teams:", err);
//       return 0;
//     }
//   };

//   const saveTeamToFirestore = async (team: GeneratedTeam) => {
//     if (!user || !matchId) return;
    
//     try {
//       const teamsCount = await getTeamCountForMatch();
//       if (teamsCount >= MAX_TEAMS_PER_MATCH) {
//         throw new Error(`Maximum of ${MAX_TEAMS_PER_MATCH} teams reached for this match`);
//       }

//       const teamData = {
//         ...team,
//         userId: user.id,
//         userEmail: user.primaryEmailAddress?.emailAddress || '',
//         matchName: `${team1?.name} vs ${team2?.name}`,
//         team1ShortName: team1?.shortName || team1?.name.split(' ').map(n => n[0]).join(''),
//         team2ShortName: team2?.shortName || team2?.name.split(' ').map(n => n[0]).join(''),
//         team1Logo: team1?.logo || '/fallback-team.png',
//         team2Logo: team2?.logo || '/fallback-team.png'
//       };

//       const matchTeamsRef = collection(db, "users", user.id, "matches", matchId, "teams");
//       const teamRef = doc(matchTeamsRef);
      
//       await setDoc(teamRef, teamData);
//       return teamRef.id;
//     } catch (err) {
//       console.error("Failed to save team:", err);
//       throw err;
//     }
//   };

//   const fetchSavedTeams = useCallback(async () => {
//     if (!user || !matchId) return [];
    
//     try {
//       const q = query(
//         collection(db, "users", user.id, "matches", matchId, "teams"),
//         orderBy("createdAt", "desc"),
//         limit(MAX_TEAMS_PER_MATCH)
//       );
//       const querySnapshot = await getDocs(q);
//       return querySnapshot.docs.map(doc => ({
//         ...doc.data() as GeneratedTeam,
//         id: doc.id
//       }));
//     } catch (err) {
//       console.error("Failed to fetch saved teams:", err);
//       return [];
//     }
//   }, [user, matchId]);

//   const handleGenerateTeams = useCallback(async () => {
//     if (!team1 || !team2) {
//       setError("Select both teams first");
//       return;
//     }

//     if (!user) {
//       setError("Please sign in to generate teams");
//       return;
//     }

//     const currentTeamCount = await getTeamCountForMatch();
//     if (currentTeamCount >= MAX_TEAMS_PER_MATCH) {
//       setError(`You've reached the maximum of ${MAX_TEAMS_PER_MATCH} teams for this match`);
//       return;
//     }

//     const remainingTeamSlots = MAX_TEAMS_PER_MATCH - currentTeamCount;
//     const teamsToGenerate = Math.min(teamCount, remainingTeamSlots);

//     if (teamsToGenerate <= 0) {
//       setError(`You've reached the maximum of ${MAX_TEAMS_PER_MATCH} teams for this match`);
//       return;
//     }

//     if (needsPayment) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     const allPlayers = [
//       ...(team1.playerDetails || []).filter(p => !p.substitute && p.select !== false),
//       ...(team2.playerDetails || []).filter(p => !p.substitute && p.select !== false)
//     ];

//     const currentRoleCounts = {
//       wk: allPlayers.filter(p => normalizeRole(p.role) === 'WK-Batsman').length,
//       battingAllrounders: allPlayers.filter(p => normalizeRole(p.role) === 'Batting Allrounder').length,
//       bowlingAllrounders: allPlayers.filter(p => normalizeRole(p.role) === 'Bowling Allrounder').length,
//       bowlers: allPlayers.filter(p => normalizeRole(p.role) === 'Bowler').length
//     };
//     setRoleCounts(currentRoleCounts);

//     const errors = [];
//     if (currentRoleCounts.wk < 1) errors.push("1 Wicket-Keeper (WK-Batsman)");
//     if ((currentRoleCounts.battingAllrounders + currentRoleCounts.bowlingAllrounders) < 5) errors.push("5 Allrounders (combined)");
//     if (currentRoleCounts.bowlers < 3) errors.push("3 Bowlers");

//     if (errors.length > 0) {
//       setError(`Need at least ${errors.join(", ")}`);
//       return;
//     }

//     if (allPlayers.length < 11) {
//       setError(`Not enough players (${allPlayers.length}/11). Please check your filters.`);
//       return;
//     }

//     setIsGenerating(true);
//     setError(null);

//     try {
//       await runTransaction(db, async (transaction) => {
//         const userRef = doc(db, "users", user.id);
//         const userDoc = await transaction.get(userRef);
        
//         if (!userDoc.exists()) throw new Error("User not found");
//         if ((userDoc.data().credits || 0) < requiredCredits) {
//           throw new Error("Insufficient balance");
//         }
        
//         transaction.update(userRef, {
//           credits: increment(-requiredCredits)
//         });
//       });

//       const newTeams: GeneratedTeam[] = [];
//       const TOTAL_ATTEMPTS = teamsToGenerate * 100;
//       let attempts = 0;

//       while (newTeams.length < teamsToGenerate && attempts < TOTAL_ATTEMPTS) {
//         attempts++;
//         const team = createBalancedTeam(allPlayers, currentTeamCount + newTeams.length);
//         if (team) {
//           await saveTeamToFirestore(team);
//           newTeams.push(team);
//         }
//       }

//       if (newTeams.length === 0) {
//         throw new Error(`Failed to generate valid teams after ${TOTAL_ATTEMPTS} attempts. Try adjusting your risk level or player filters.`);
//       }

//       const savedTeams = await fetchSavedTeams();
//       setGeneratedTeams(savedTeams);
//       onBalanceUpdate(userBalance - requiredCredits);
//     } catch (err: any) {
//       setError(err.message || "Failed to generate teams");
//     } finally {
//       setIsGenerating(false);
//     }
//   }, [
//     team1, team2, teamCount, riskLevel, user,
//     userBalance, requiredCredits, needsPayment,
//     onBalanceUpdate, createBalancedTeam, matchId,
//     fetchSavedTeams
//   ]);

//   const generateButton = (
//     <div className="space-y-2">
//       <button
//         onClick={handleGenerateTeams}
//         disabled={isGenerating || !team1 || !team2}
//         className={`
//           w-full px-4 py-3 rounded-md font-bold
//           ${isGenerating ? 'bg-gray-500' :
//            needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' :
//            'bg-blue-500 hover:bg-blue-600'}
//           text-white transition-colors
//         `}
//       >
//         {isGenerating ? (
//           <span className="flex items-center justify-center gap-2">
//             <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//             Generating...
//           </span>
//         ) : !team1 || !team2 ? (
//           "Select both teams"
//         ) : needsPayment ? (
//           `Add ₹${paymentAmount} to Generate`
//         ) : (
//           `Generate ${teamCount} Teams (₹${requiredCredits})`
//         )}
//       </button>

//       <div className="flex justify-between text-sm">
//         <span>Your Credits: ₹{userBalance}</span>
//         {needsPayment ? (
//           <span className="text-yellow-500">Need ₹{paymentAmount} more</span>
//         ) : (
//           <span className="text-green-500">Sufficient balance</span>
//         )}
//       </div>

//       {error && (
//         <div className="text-red-500 text-sm p-2 bg-red-50 rounded-lg">
//           <p className="font-medium">{error}</p>
//           {error.includes("Need at least") && (
//             <div className="mt-2 text-xs">
//               <p>Current player counts:</p>
//               <ul className="list-disc pl-5">
//                 <li>WK-Batsman: {roleCounts.wk} (min 1)</li>
//                 <li>Batting Allrounders: {roleCounts.battingAllrounders}</li>
//                 <li>Bowling Allrounders: {roleCounts.bowlingAllrounders}</li>
//                 <li>Total Allrounders: {roleCounts.battingAllrounders + roleCounts.bowlingAllrounders} (min 5 combined)</li>
//                 <li>Bowlers: {roleCounts.bowlers} (min 3)</li>
//               </ul>
//               <p className="mt-1">Try adjusting player filters or selecting different teams</p>
//             </div>
//           )}
//           {error.includes("Not enough players") && (
//             <p className="text-xs mt-1">Try adjusting player filters or selecting different teams</p>
//           )}
//         </div>
//       )}
//     </div>
//   );

//   const paymentDialog = showPaymentDialog && (
//     <PaymentDialog
//       currentBalance={userBalance}
//       requiredAmount={paymentAmount}
//       onPaymentSuccess={(amount) => {
//         onBalanceUpdate(userBalance + amount);
//         setShowPaymentDialog(false);
//         handleGenerateTeams();
//       }}
//       onOpenChange={setShowPaymentDialog}
//       open={showPaymentDialog}
//     />
//   );

//   return {
//     generatedTeams,
//     isGenerating,
//     generateButton,
//     paymentDialog,
//     error,
//     setError,
//     fetchSavedTeams,
//     setGeneratedTeams
//   };
// };





// // TeamGenerator.tsx
// "use client";

// import { useState, useCallback, useMemo } from "react";
// import { PaymentDialog } from "./PaymentDialog";
// import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";
// import { db } from "@/lib/firebase";
// import {
//   doc,
//   runTransaction,
//   increment,
//   setDoc,
//   collection,
//   query,
//   orderBy,
//   getDocs,
//   limit
// } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";

// interface TeamGeneratorProps {
//   team1?: Team;
//   team2?: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate: (newBalance: number) => void;
//   matchId: string;
// }

// export const useTeamGenerator = ({
//   team1,
//   team2,
//   teamCount,
//   riskLevel,
//   userBalance,
//   onBalanceUpdate,
//   matchId
// }: TeamGeneratorProps) => {
//   const { user } = useUser();
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [roleCounts, setRoleCounts] = useState({
//     wk: 0,
//     battingAllrounders: 0,
//     bowlingAllrounders: 0,
//     bowlers: 0
//   });

//   const MAX_TEAMS_PER_MATCH = 100;
//   const requiredCredits = useMemo(() => teamCount * 10, [teamCount]);
//   const needsPayment = useMemo(() => userBalance < requiredCredits, [userBalance, requiredCredits]);
//   const paymentAmount = useMemo(() => Math.max(requiredCredits - userBalance, 50), [requiredCredits, userBalance]);

//   const normalizeRole = (role: string): string => {
//     const roleMap: Record<string, string> = {
//       'All-Rounder': 'Bowling Allrounder',
//       'Batsman': 'Batting Allrounder',
//       'Batsman Allrounder': 'Batting Allrounder',
//       'Bowler Allrounder': 'Bowling Allrounder'
//     };
//     return roleMap[role] || role;
//   };

//   const calculatePlayerScore = (player: PlayerDetail) => {
//     const normalizedRole = normalizeRole(player.role);
//     const baseScore = player.selectPerc !== undefined ? player.selectPerc :
//                      player.selectedBy !== undefined ? player.selectedBy : 0;
    
//     const roleWeights = {
//       'WK-Batsman': 1.5,
//       'Batting Allrounder': 1.4,
//       'Bowling Allrounder': 1.3,
//       'Bowler': 1.2
//     };
    
//     let riskFactor;
//     if (riskLevel < 30) {
//       riskFactor = 1 + (baseScore / 100);
//     } else if (riskLevel < 70) {
//       riskFactor = 0.9 + (Math.random() * 0.3);
//     } else {
//       riskFactor = 0.7 + (Math.random() * 0.6);
//     }
    
//     return baseScore * (roleWeights[normalizedRole] || 1.0) * riskFactor;
//   };

//   const createBalancedTeam = useCallback((players: PlayerDetail[], existingTeamCount: number) => {
//     if (!team1 || !team2) return null;
    
//     const MAX_ATTEMPTS = 500;
//     let attempts = 0;
    
//     const team1Short = team1.shortName || team1.name.split(' ').map(n => n[0]).join('');
//     const team2Short = team2.shortName || team2.name.split(' ').map(n => n[0]).join('');

//     const availablePlayers = players
//       .filter(p => !p.substitute && p.select !== false)
//       .map(p => ({
//         ...p,
//         role: normalizeRole(p.role),
//         score: calculatePlayerScore(p),
//         selectionInfo: p.selectPerc !== undefined ? `Select%: ${p.selectPerc}` :
//                      p.selectedBy !== undefined ? `Selected: ${p.selectedBy}` : 'No data'
//       }));

//     const roleCounts = {
//       'WK-Batsman': availablePlayers.filter(p => p.role === 'WK-Batsman').length,
//       'Batting Allrounder': availablePlayers.filter(p => p.role === 'Batting Allrounder').length,
//       'Bowling Allrounder': availablePlayers.filter(p => p.role === 'Bowling Allrounder').length,
//       'Bowler': availablePlayers.filter(p => p.role === 'Bowler').length
//     };

//     if (
//       roleCounts['WK-Batsman'] < 1 ||
//       (roleCounts['Batting Allrounder'] + roleCounts['Bowling Allrounder']) < 5 ||
//       roleCounts['Bowler'] < 3
//     ) {
//       throw new Error(`Insufficient players for required roles`);
//     }

//     const sortedPlayers = [...availablePlayers].sort((a, b) => (b.score || 0) - (a.score || 0));

//     while (attempts < MAX_ATTEMPTS) {
//       attempts++;
//       const teamComposition = {
//         'WK-Batsman': 0,
//         'Batting Allrounder': 0,
//         'Bowling Allrounder': 0,
//         'Bowler': 0,
//         [team1Short]: 0,
//         [team2Short]: 0,
//         overseas: 0,
//         totalScore: 0
//       };

//       const shuffledPlayers = [...sortedPlayers].sort(() => Math.random() - 0.5);

//       let captain, viceCaptain;
//       const topPlayers = shuffledPlayers.slice(0, Math.ceil(shuffledPlayers.length * 0.3));
      
//       if (topPlayers.length >= 2) {
//         captain = topPlayers[0];
//         viceCaptain = topPlayers[1];
//       } else if (topPlayers.length === 1) {
//         captain = topPlayers[0];
//         viceCaptain = shuffledPlayers.find(p => p.id !== captain.id) || captain;
//       } else {
//         continue;
//       }

//       const teamPlayers: PlayerDetail[] = [captain, viceCaptain];
      
//       [captain, viceCaptain].forEach(player => {
//         teamComposition[player.role]++;
//         teamComposition.totalScore += player.score || 0;
//         teamComposition[player.teamName === team1.name ? team1Short : team2Short]++;
//         if (player.isOverseas) teamComposition.overseas++;
//       });

//       const remainingPlayers = shuffledPlayers.filter(p =>
//         p.id !== captain.id && p.id !== viceCaptain.id
//       );

//       while (teamPlayers.length < 11 && remainingPlayers.length > 0) {
//         const neededRoles = [];
//         if (teamComposition['WK-Batsman'] < 1) neededRoles.push('WK-Batsman');
//         if (teamComposition['Batting Allrounder'] + teamComposition['Bowling Allrounder'] < 5) {
//           neededRoles.push('Batting Allrounder', 'Bowling Allrounder');
//         }
//         if (teamComposition['Bowler'] < 3) neededRoles.push('Bowler');

//         const rolesToConsider = neededRoles.length > 0 ? neededRoles :
//           ['Batting Allrounder', 'Bowling Allrounder', 'Bowler'];

//         let candidates = remainingPlayers.filter(p => {
//           if (!rolesToConsider.includes(p.role)) return false;
//           const team = p.teamName === team1.name ? team1Short : team2Short;
//           if (teamComposition[team] >= 8) return false;
//           if (p.isOverseas && teamComposition.overseas >= 5) return false;
//           return true;
//         });

//         if (candidates.length === 0) {
//           candidates = remainingPlayers.filter(p => rolesToConsider.includes(p.role));
//         }

//         if (candidates.length === 0) break;

//         let selectedPlayer;
//         if (riskLevel < 30) {
//           candidates.sort((a, b) => (b.score || 0) - (a.score || 0));
//           selectedPlayer = candidates[0];
//         } else if (riskLevel < 70) {
//           candidates.sort((a, b) => (b.score || 0) - (a.score || 0));
//           const topHalf = candidates.slice(0, Math.ceil(candidates.length * 0.5));
//           selectedPlayer = topHalf[Math.floor(Math.random() * topHalf.length)];
//         } else {
//           selectedPlayer = candidates[Math.floor(Math.random() * candidates.length)];
//         }

//         teamPlayers.push(selectedPlayer);
//         teamComposition[selectedPlayer.role]++;
//         teamComposition.totalScore += selectedPlayer.score || 0;
//         teamComposition[selectedPlayer.teamName === team1.name ? team1Short : team2Short]++;
//         if (selectedPlayer.isOverseas) teamComposition.overseas++;

//         const index = remainingPlayers.findIndex(p => p.id === selectedPlayer.id);
//         if (index !== -1) remainingPlayers.splice(index, 1);
//       }

//       if (teamPlayers.length !== 11) continue;
//       if (teamComposition.overseas > 5) continue;
//       if (teamComposition[team1Short] > 8 || teamComposition[team2Short] > 8) continue;
//       if (teamComposition['WK-Batsman'] < 1) continue;
//       if ((teamComposition['Batting Allrounder'] + teamComposition['Bowling Allrounder']) < 5) continue;
//       if (teamComposition['Bowler'] < 3) continue;

//       return {
//         players: teamPlayers,
//         captain,
//         viceCaptain,
//         teamName: `Team ${existingTeamCount + 1}`,
//         teamComposition,
//         riskLevel,
//         matchId,
//         createdAt: new Date().toISOString()
//       };
//     }

//     return null;
//   }, [team1, team2, riskLevel, matchId]);

//   const getTeamCountForMatch = async (): Promise<number> => {
//     if (!user || !matchId) return 0;
    
//     try {
//       const q = query(
//         collection(db, "users", user.id, "matches", matchId, "teams"),
//         limit(MAX_TEAMS_PER_MATCH)
//       );
//       const querySnapshot = await getDocs(q);
//       return querySnapshot.size;
//     } catch (err) {
//       console.error("Failed to count teams:", err);
//       return 0;
//     }
//   };

//   const saveTeamToFirestore = async (team: GeneratedTeam) => {
//     if (!user || !matchId) return;
    
//     try {
//       const teamsCount = await getTeamCountForMatch();
//       if (teamsCount >= MAX_TEAMS_PER_MATCH) {
//         throw new Error(`Maximum of ${MAX_TEAMS_PER_MATCH} teams reached for this match`);
//       }

//       const teamData = {
//         ...team,
//         userId: user.id,
//         userEmail: user.primaryEmailAddress?.emailAddress || '',
//         matchName: `${team1?.name} vs ${team2?.name}`,
//         team1ShortName: team1?.shortName || team1?.name.split(' ').map(n => n[0]).join(''),
//         team2ShortName: team2?.shortName || team2?.name.split(' ').map(n => n[0]).join(''),
//         team1Logo: team1?.logo || '/fallback-team.png',
//         team2Logo: team2?.logo || '/fallback-team.png'
//       };

//       const matchTeamsRef = collection(db, "users", user.id, "matches", matchId, "teams");
//       const teamRef = doc(matchTeamsRef);
      
//       await setDoc(teamRef, teamData);
//       return teamRef.id;
//     } catch (err) {
//       console.error("Failed to save team:", err);
//       throw err;
//     }
//   };

//   const fetchSavedTeams = useCallback(async () => {
//     if (!user || !matchId) return [];
    
//     try {
//       const q = query(
//         collection(db, "users", user.id, "matches", matchId, "teams"),
//         orderBy("createdAt", "desc"),
//         limit(MAX_TEAMS_PER_MATCH)
//       );
//       const querySnapshot = await getDocs(q);
//       return querySnapshot.docs.map(doc => ({
//         ...doc.data() as GeneratedTeam,
//         id: doc.id
//       }));
//     } catch (err) {
//       console.error("Failed to fetch saved teams:", err);
//       return [];
//     }
//   }, [user, matchId]);

//   const handleGenerateTeams = useCallback(async () => {
//     if (!team1 || !team2) {
//       setError("Select both teams first");
//       return;
//     }

//     if (!user) {
//       setError("Please sign in to generate teams");
//       return;
//     }

//     const currentTeamCount = await getTeamCountForMatch();
//     if (currentTeamCount >= MAX_TEAMS_PER_MATCH) {
//       setError(`You've reached the maximum of ${MAX_TEAMS_PER_MATCH} teams for this match`);
//       return;
//     }

//     const remainingTeamSlots = MAX_TEAMS_PER_MATCH - currentTeamCount;
//     const teamsToGenerate = Math.min(teamCount, remainingTeamSlots);

//     if (teamsToGenerate <= 0) {
//       setError(`You've reached the maximum of ${MAX_TEAMS_PER_MATCH} teams for this match`);
//       return;
//     }

//     if (needsPayment) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     const allPlayers = [
//       ...(team1.playerDetails || []).filter(p => !p.substitute && p.select !== false),
//       ...(team2.playerDetails || []).filter(p => !p.substitute && p.select !== false)
//     ];

//     const currentRoleCounts = {
//       wk: allPlayers.filter(p => normalizeRole(p.role) === 'WK-Batsman').length,
//       battingAllrounders: allPlayers.filter(p => normalizeRole(p.role) === 'Batting Allrounder').length,
//       bowlingAllrounders: allPlayers.filter(p => normalizeRole(p.role) === 'Bowling Allrounder').length,
//       bowlers: allPlayers.filter(p => normalizeRole(p.role) === 'Bowler').length
//     };
//     setRoleCounts(currentRoleCounts);

//     const errors = [];
//     if (currentRoleCounts.wk < 1) errors.push("1 Wicket-Keeper (WK-Batsman)");
//     if ((currentRoleCounts.battingAllrounders + currentRoleCounts.bowlingAllrounders) < 5) errors.push("5 Allrounders (combined)");
//     if (currentRoleCounts.bowlers < 3) errors.push("3 Bowlers");

//     if (errors.length > 0) {
//       setError(`Need at least ${errors.join(", ")}`);
//       return;
//     }

//     if (allPlayers.length < 11) {
//       setError(`Not enough players (${allPlayers.length}/11). Please check your filters.`);
//       return;
//     }

//     setIsGenerating(true);
//     setError(null);

//     try {
//       await runTransaction(db, async (transaction) => {
//         const userRef = doc(db, "users", user.id);
//         const userDoc = await transaction.get(userRef);
        
//         if (!userDoc.exists()) throw new Error("User not found");
//         if ((userDoc.data().credits || 0) < requiredCredits) {
//           throw new Error("Insufficient balance");
//         }
        
//         transaction.update(userRef, {
//           credits: increment(-requiredCredits)
//         });
//       });

//       const newTeams: GeneratedTeam[] = [];
//       const TOTAL_ATTEMPTS = teamsToGenerate * 100;
//       let attempts = 0;

//       while (newTeams.length < teamsToGenerate && attempts < TOTAL_ATTEMPTS) {
//         attempts++;
//         const team = createBalancedTeam(allPlayers, currentTeamCount + newTeams.length);
//         if (team) {
//           await saveTeamToFirestore(team);
//           newTeams.push(team);
//         }
//       }

//       if (newTeams.length === 0) {
//         throw new Error(`Failed to generate valid teams after ${TOTAL_ATTEMPTS} attempts. Try adjusting your risk level or player filters.`);
//       }

//       const savedTeams = await fetchSavedTeams();
//       setGeneratedTeams(savedTeams);
//       onBalanceUpdate(userBalance - requiredCredits);
//     } catch (err: any) {
//       setError(err.message || "Failed to generate teams");
//     } finally {
//       setIsGenerating(false);
//     }
//   }, [
//     team1, team2, teamCount, riskLevel, user,
//     userBalance, requiredCredits, needsPayment,
//     onBalanceUpdate, createBalancedTeam, matchId,
//     fetchSavedTeams
//   ]);

//   const generateButton = (
//     <div className="space-y-2">
//       <button
//         onClick={handleGenerateTeams}
//         disabled={isGenerating || !team1 || !team2}
//         className={`
//           w-full px-4 py-3 rounded-md font-bold
//           ${isGenerating ? 'bg-gray-500' :
//            needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' :
//            'bg-blue-500 hover:bg-blue-600'}
//           text-white transition-colors
//         `}
//       >
//         {isGenerating ? (
//           <span className="flex items-center justify-center gap-2">
//             <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//             Generating...
//           </span>
//         ) : !team1 || !team2 ? (
//           "Select both teams"
//         ) : needsPayment ? (
//           `Add ₹${paymentAmount} to Generate`
//         ) : (
//           `Generate ${teamCount} Teams (₹${requiredCredits})`
//         )}
//       </button>

//       <div className="flex justify-between text-sm">
//         <span>Your Credits: ₹{userBalance}</span>
//         {needsPayment ? (
//           <span className="text-yellow-500">Need ₹{paymentAmount} more</span>
//         ) : (
//           <span className="text-green-500">Sufficient balance</span>
//         )}
//       </div>

//       {error && (
//         <div className="text-red-500 text-sm p-2 bg-red-50 rounded-lg">
//           <p className="font-medium">{error}</p>
//           {error.includes("Need at least") && (
//             <div className="mt-2 text-xs">
//               <p>Current player counts:</p>
//               <ul className="list-disc pl-5">
//                 <li>WK-Batsman: {roleCounts.wk} (min 1)</li>
//                 <li>Batting Allrounders: {roleCounts.battingAllrounders}</li>
//                 <li>Bowling Allrounders: {roleCounts.bowlingAllrounders}</li>
//                 <li>Total Allrounders: {roleCounts.battingAllrounders + roleCounts.bowlingAllrounders} (min 5 combined)</li>
//                 <li>Bowlers: {roleCounts.bowlers} (min 3)</li>
//               </ul>
//               <p className="mt-1">Try adjusting player filters or selecting different teams</p>
//             </div>
//           )}
//           {error.includes("Not enough players") && (
//             <p className="text-xs mt-1">Try adjusting player filters or selecting different teams</p>
//           )}
//         </div>
//       )}
//     </div>
//   );

//   const paymentDialog = showPaymentDialog && (
//     <PaymentDialog
//       currentBalance={userBalance}
//       requiredAmount={paymentAmount}
//       onPaymentSuccess={(amount) => {
//         onBalanceUpdate(userBalance + amount);
//         setShowPaymentDialog(false);
//         handleGenerateTeams();
//       }}
//       onOpenChange={setShowPaymentDialog}
//       open={showPaymentDialog}
//     />
//   );

//   return {
//     generatedTeams,
//     isGenerating,
//     generateButton,
//     paymentDialog,
//     error,
//     setError,
//     fetchSavedTeams,
//     setGeneratedTeams
//   };
// };




















// // TeamGenerator.tsx
// "use client";

// import { useState, useCallback, useMemo } from "react";
// import { PaymentDialog } from "./PaymentDialog";
// import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";
// import { db } from "@/lib/firebase";
// import {
//   doc,
//   runTransaction,
//   increment,
//   setDoc,
//   collection,
//   query,
//   orderBy,
//   getDocs,
//   limit
// } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";

// interface TeamGeneratorProps {
//   team1?: Team;
//   team2?: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate: (newBalance: number) => void;
//   matchId: string;
// }

// export const useTeamGenerator = ({
//   team1,
//   team2,
//   teamCount,
//   riskLevel,
//   userBalance,
//   onBalanceUpdate,
//   matchId
// }: TeamGeneratorProps) => {
//   const { user } = useUser();
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [roleCounts, setRoleCounts] = useState({
//     wk: 0,
//     battingAllrounders: 0,
//     bowlingAllrounders: 0,
//     bowlers: 0
//   });

//   const MAX_TEAMS_PER_MATCH = 100;
//   const requiredCredits = useMemo(() => teamCount * 10, [teamCount]);
//   const needsPayment = useMemo(() => userBalance < requiredCredits, [userBalance, requiredCredits]);
//   const paymentAmount = useMemo(() => Math.max(requiredCredits - userBalance, 50), [requiredCredits, userBalance]);

//   const normalizeRole = (role: string): string => {
//     const roleMap: Record<string, string> = {
//       'All-Rounder': 'Bowling Allrounder',
//       'Batsman': 'Batting Allrounder',
//       'Batsman Allrounder': 'Batting Allrounder',
//       'Bowler Allrounder': 'Bowling Allrounder'
//     };
//     return roleMap[role] || role;
//   };

//   const calculatePlayerScore = (player: PlayerDetail) => {
//     const normalizedRole = normalizeRole(player.role);
    
//     // Handle all cases of selection data
//     let selectionPercentage = 0;
//     if (typeof player.selectPerc === 'number') {
//       selectionPercentage = player.selectPerc;
//     } else if (typeof player.selectedBy === 'number') {
//       selectionPercentage = player.selectedBy;
//     } else if (player.selectedBy === false) {
//       selectionPercentage = 0;
//     }
    
//     const roleWeights = {
//       'WK-Batsman': 1.5,
//       'Batting Allrounder': 1.4,
//       'Bowling Allrounder': 1.3,
//       'Bowler': 1.2
//     };
    
//     let riskFactor;
//     if (riskLevel < 30) {
//       riskFactor = 1 + (selectionPercentage / 100);
//     } else if (riskLevel < 70) {
//       riskFactor = 0.9 + (Math.random() * 0.3);
//     } else {
//       riskFactor = 0.7 + (Math.random() * 0.6);
//     }
    
//     return selectionPercentage * (roleWeights[normalizedRole] || 1.0) * riskFactor;
//   };

//   const createBalancedTeam = useCallback((players: PlayerDetail[], existingTeamCount: number) => {
//     if (!team1 || !team2) return null;
    
//     const MAX_ATTEMPTS = 1000; // Increased from 500 to 1000
//     let attempts = 0;
    
//     const team1Short = team1.shortName || team1.name.split(' ').map(n => n[0]).join('');
//     const team2Short = team2.shortName || team2.name.split(' ').map(n => n[0]).join('');

//     const availablePlayers = players
//       .filter(p => !p.substitute && p.select !== false)
//       .map(p => ({
//         ...p,
//         role: normalizeRole(p.role),
//         score: calculatePlayerScore(p),
//         selectionInfo: typeof p.selectPerc === 'number' ? `Select%: ${p.selectPerc}` :
//                       typeof p.selectedBy === 'number' ? `Selected: ${p.selectedBy}` :
//                       p.selectedBy === false ? 'Not selected' : 'No data'
//       }));

//     // More relaxed validation
//     const roleCounts = {
//       'WK-Batsman': availablePlayers.filter(p => p.role === 'WK-Batsman').length,
//       'Batting Allrounder': availablePlayers.filter(p => p.role === 'Batting Allrounder').length,
//       'Bowling Allrounder': availablePlayers.filter(p => p.role === 'Bowling Allrounder').length,
//       'Bowler': availablePlayers.filter(p => p.role === 'Bowler').length
//     };

//     if (availablePlayers.length < 11) {
//       throw new Error(`Not enough players (${availablePlayers.length}/11)`);
//     }

//     if (roleCounts['WK-Batsman'] < 1) {
//       throw new Error("Need at least 1 Wicket-Keeper");
//     }

//     const totalAllrounders = roleCounts['Batting Allrounder'] + roleCounts['Bowling Allrounder'];
//     if (totalAllrounders < 3) {
//       throw new Error("Need at least 3 Allrounders");
//     }

//     if (roleCounts['Bowler'] < 2) {
//       throw new Error("Need at least 2 Bowlers");
//     }

//     const sortedPlayers = [...availablePlayers].sort((a, b) => (b.score || 0) - (a.score || 0));

//     while (attempts < MAX_ATTEMPTS) {
//       attempts++;
//       const teamComposition = {
//         'WK-Batsman': 0,
//         'Batting Allrounder': 0,
//         'Bowling Allrounder': 0,
//         'Bowler': 0,
//         [team1Short]: 0,
//         [team2Short]: 0,
//         overseas: 0,
//         totalScore: 0
//       };

//       const shuffledPlayers = [...sortedPlayers].sort(() => Math.random() - 0.5);

//       // More flexible captain selection
//       let captain, viceCaptain;
//       const potentialCaptains = shuffledPlayers.filter(p => p.score > 0);
      
//       if (potentialCaptains.length >= 2) {
//         captain = potentialCaptains[0];
//         viceCaptain = potentialCaptains[1];
//       } else if (potentialCaptains.length === 1) {
//         captain = potentialCaptains[0];
//         viceCaptain = shuffledPlayers.find(p => p.id !== captain.id) || captain;
//       } else {
//         continue;
//       }

//       const teamPlayers: PlayerDetail[] = [captain, viceCaptain];
      
//       [captain, viceCaptain].forEach(player => {
//         teamComposition[player.role]++;
//         teamComposition.totalScore += player.score || 0;
//         teamComposition[player.teamName === team1.name ? team1Short : team2Short]++;
//         if (player.isOverseas) teamComposition.overseas++;
//       });

//       const remainingPlayers = shuffledPlayers.filter(p =>
//         p.id !== captain.id && p.id !== viceCaptain.id
//       );

//       // Fill remaining spots with flexible rules
//       while (teamPlayers.length < 11 && remainingPlayers.length > 0) {
//         const neededRoles = [];
//         if (teamComposition['WK-Batsman'] < 1) neededRoles.push('WK-Batsman');
//         if (teamComposition['Batting Allrounder'] + teamComposition['Bowling Allrounder'] < 5) {
//           neededRoles.push('Batting Allrounder', 'Bowling Allrounder');
//         }
//         if (teamComposition['Bowler'] < 3) neededRoles.push('Bowler');

//         const rolesToConsider = neededRoles.length > 0 ? neededRoles :
//           ['Batting Allrounder', 'Bowling Allrounder', 'Bowler'];

//         let candidates = remainingPlayers.filter(p => {
//           if (!rolesToConsider.includes(p.role)) return false;
//           const team = p.teamName === team1.name ? team1Short : team2Short;
//           if (teamComposition[team] >= 8) return false;
//           if (p.isOverseas && teamComposition.overseas >= 5) return false;
//           return true;
//         });

//         if (candidates.length === 0) {
//           candidates = remainingPlayers.filter(p => rolesToConsider.includes(p.role));
//         }

//         if (candidates.length === 0) break;

//         let selectedPlayer;
//         if (riskLevel < 30) {
//           candidates.sort((a, b) => (b.score || 0) - (a.score || 0));
//           selectedPlayer = candidates[0];
//         } else if (riskLevel < 70) {
//           candidates.sort((a, b) => (b.score || 0) - (a.score || 0));
//           const topHalf = candidates.slice(0, Math.ceil(candidates.length * 0.5));
//           selectedPlayer = topHalf[Math.floor(Math.random() * topHalf.length)];
//         } else {
//           selectedPlayer = candidates[Math.floor(Math.random() * candidates.length)];
//         }

//         teamPlayers.push(selectedPlayer);
//         teamComposition[selectedPlayer.role]++;
//         teamComposition.totalScore += selectedPlayer.score || 0;
//         teamComposition[selectedPlayer.teamName === team1.name ? team1Short : team2Short]++;
//         if (selectedPlayer.isOverseas) teamComposition.overseas++;

//         const index = remainingPlayers.findIndex(p => p.id === selectedPlayer.id);
//         if (index !== -1) remainingPlayers.splice(index, 1);
//       }

//       // Final validation with relaxed rules
//       if (teamPlayers.length !== 11) continue;
//       if (teamComposition.overseas > 5) continue;
//       if (teamComposition[team1Short] > 8 || teamComposition[team2Short] > 8) continue;
//       if (teamComposition['WK-Batsman'] < 1) continue;
//       if (teamComposition['Batting Allrounder'] + teamComposition['Bowling Allrounder'] < 3) continue;
//       if (teamComposition['Bowler'] < 2) continue;

//       return {
//         players: teamPlayers,
//         captain,
//         viceCaptain,
//         teamName: `Team ${existingTeamCount + 1}`,
//         teamComposition,
//         riskLevel,
//         matchId,
//         createdAt: new Date().toISOString()
//       };
//     }

//     return null;
//   }, [team1, team2, riskLevel, matchId]);
//   const getTeamCountForMatch = async (): Promise<number> => {
//     if (!user || !matchId) return 0;
    
//     try {
//       const q = query(
//         collection(db, "users", user.id, "matches", matchId, "teams"),
//         limit(MAX_TEAMS_PER_MATCH)
//       );
//       const querySnapshot = await getDocs(q);
//       return querySnapshot.size;
//     } catch (err) {
//       console.error("Failed to count teams:", err);
//       return 0;
//     }
//   };

//   const saveTeamToFirestore = async (team: GeneratedTeam) => {
//     if (!user || !matchId) return;
    
//     try {
//       const teamsCount = await getTeamCountForMatch();
//       if (teamsCount >= MAX_TEAMS_PER_MATCH) {
//         throw new Error(`Maximum of ${MAX_TEAMS_PER_MATCH} teams reached for this match`);
//       }

//       const teamData = {
//         ...team,
//         userId: user.id,
//         userEmail: user.primaryEmailAddress?.emailAddress || '',
//         matchName: `${team1?.name} vs ${team2?.name}`,
//         team1ShortName: team1?.shortName || team1?.name.split(' ').map(n => n[0]).join(''),
//         team2ShortName: team2?.shortName || team2?.name.split(' ').map(n => n[0]).join(''),
//         team1Logo: team1?.logo || '/fallback-team.png',
//         team2Logo: team2?.logo || '/fallback-team.png'
//       };

//       const matchTeamsRef = collection(db, "users", user.id, "matches", matchId, "teams");
//       const teamRef = doc(matchTeamsRef);
      
//       await setDoc(teamRef, teamData);
//       return teamRef.id;
//     } catch (err) {
//       console.error("Failed to save team:", err);
//       throw err;
//     }
//   };

//   const fetchSavedTeams = useCallback(async () => {
//     if (!user || !matchId) return [];
    
//     try {
//       const q = query(
//         collection(db, "users", user.id, "matches", matchId, "teams"),
//         orderBy("createdAt", "desc"),
//         limit(MAX_TEAMS_PER_MATCH)
//       );
//       const querySnapshot = await getDocs(q);
//       return querySnapshot.docs.map(doc => ({
//         ...doc.data() as GeneratedTeam,
//         id: doc.id
//       }));
//     } catch (err) {
//       console.error("Failed to fetch saved teams:", err);
//       return [];
//     }
//   }, [user, matchId]);

//   const handleGenerateTeams = useCallback(async () => {
//     if (!team1 || !team2) {
//       setError("Select both teams first");
//       return;
//     }

//     if (!user) {
//       setError("Please sign in to generate teams");
//       return;
//     }

//     const currentTeamCount = await getTeamCountForMatch();
//     if (currentTeamCount >= MAX_TEAMS_PER_MATCH) {
//       setError(`You've reached the maximum of ${MAX_TEAMS_PER_MATCH} teams for this match`);
//       return;
//     }

//     const remainingTeamSlots = MAX_TEAMS_PER_MATCH - currentTeamCount;
//     const teamsToGenerate = Math.min(teamCount, remainingTeamSlots);

//     if (teamsToGenerate <= 0) {
//       setError(`You've reached the maximum of ${MAX_TEAMS_PER_MATCH} teams for this match`);
//       return;
//     }

//     if (needsPayment) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     const allPlayers = [
//       ...(team1.playerDetails || []).filter(p => !p.substitute && p.select !== false),
//       ...(team2.playerDetails || []).filter(p => !p.substitute && p.select !== false)
//     ];

//     const currentRoleCounts = {
//       wk: allPlayers.filter(p => normalizeRole(p.role) === 'WK-Batsman').length,
//       battingAllrounders: allPlayers.filter(p => normalizeRole(p.role) === 'Batting Allrounder').length,
//       bowlingAllrounders: allPlayers.filter(p => normalizeRole(p.role) === 'Bowling Allrounder').length,
//       bowlers: allPlayers.filter(p => normalizeRole(p.role) === 'Bowler').length
//     };
//     setRoleCounts(currentRoleCounts);

//     const errors = [];
//     if (currentRoleCounts.wk < 1) errors.push("1 Wicket-Keeper (WK-Batsman)");
//     if ((currentRoleCounts.battingAllrounders + currentRoleCounts.bowlingAllrounders) < 5) errors.push("5 Allrounders (combined)");
//     if (currentRoleCounts.bowlers < 3) errors.push("3 Bowlers");

//     if (errors.length > 0) {
//       setError(`Need at least ${errors.join(", ")}`);
//       return;
//     }

//     if (allPlayers.length < 11) {
//       setError(`Not enough players (${allPlayers.length}/11). Please check your filters.`);
//       return;
//     }

//     setIsGenerating(true);
//     setError(null);

//     try {
//       await runTransaction(db, async (transaction) => {
//         const userRef = doc(db, "users", user.id);
//         const userDoc = await transaction.get(userRef);
        
//         if (!userDoc.exists()) throw new Error("User not found");
//         if ((userDoc.data().credits || 0) < requiredCredits) {
//           throw new Error("Insufficient balance");
//         }
        
//         transaction.update(userRef, {
//           credits: increment(-requiredCredits)
//         });
//       });

//       const newTeams: GeneratedTeam[] = [];
//       const TOTAL_ATTEMPTS = teamsToGenerate * 100;
//       let attempts = 0;

//       while (newTeams.length < teamsToGenerate && attempts < TOTAL_ATTEMPTS) {
//         attempts++;
//         const team = createBalancedTeam(allPlayers, currentTeamCount + newTeams.length);
//         if (team) {
//           await saveTeamToFirestore(team);
//           newTeams.push(team);
//         }
//       }

//       if (newTeams.length === 0) {
//         throw new Error(`Failed to generate valid teams after ${TOTAL_ATTEMPTS} attempts. Try adjusting your risk level or player filters.`);
//       }

//       const savedTeams = await fetchSavedTeams();
//       setGeneratedTeams(savedTeams);
//       onBalanceUpdate(userBalance - requiredCredits);
//     } catch (err: any) {
//       setError(err.message || "Failed to generate teams");
//     } finally {
//       setIsGenerating(false);
//     }
//   }, [
//     team1, team2, teamCount, riskLevel, user,
//     userBalance, requiredCredits, needsPayment,
//     onBalanceUpdate, createBalancedTeam, matchId,
//     fetchSavedTeams
//   ]);

//   const generateButton = (
//     <div className="space-y-2">
//       <button
//         onClick={handleGenerateTeams}
//         disabled={isGenerating || !team1 || !team2}
//         className={`
//           w-full px-4 py-3 rounded-md font-bold
//           ${isGenerating ? 'bg-gray-500' :
//            needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' :
//            'bg-blue-500 hover:bg-blue-600'}
//           text-white transition-colors
//         `}
//       >
//         {isGenerating ? (
//           <span className="flex items-center justify-center gap-2">
//             <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//             Generating...
//           </span>
//         ) : !team1 || !team2 ? (
//           "Select both teams"
//         ) : needsPayment ? (
//           `Add ₹${paymentAmount} to Generate`
//         ) : (
//           `Generate ${teamCount} Teams (₹${requiredCredits})`
//         )}
//       </button>

//       <div className="flex justify-between text-sm">
//         <span>Your Credits: ₹{userBalance}</span>
//         {needsPayment ? (
//           <span className="text-yellow-500">Need ₹{paymentAmount} more</span>
//         ) : (
//           <span className="text-green-500">Sufficient balance</span>
//         )}
//       </div>

//       {error && (
//         <div className="text-red-500 text-sm p-2 bg-red-50 rounded-lg">
//           <p className="font-medium">{error}</p>
//           {error.includes("Need at least") && (
//             <div className="mt-2 text-xs">
//               <p>Current player counts:</p>
//               <ul className="list-disc pl-5">
//                 <li>WK-Batsman: {roleCounts.wk} (min 1)</li>
//                 <li>Batting Allrounders: {roleCounts.battingAllrounders}</li>
//                 <li>Bowling Allrounders: {roleCounts.bowlingAllrounders}</li>
//                 <li>Total Allrounders: {roleCounts.battingAllrounders + roleCounts.bowlingAllrounders} (min 5 combined)</li>
//                 <li>Bowlers: {roleCounts.bowlers} (min 3)</li>
//               </ul>
//               <p className="mt-1">Try adjusting player filters or selecting different teams</p>
//             </div>
//           )}
//           {error.includes("Not enough players") && (
//             <p className="text-xs mt-1">Try adjusting player filters or selecting different teams</p>
//           )}
//         </div>
//       )}
//     </div>
//   );

//   const paymentDialog = showPaymentDialog && (
//     <PaymentDialog
//       currentBalance={userBalance}
//       requiredAmount={paymentAmount}
//       onPaymentSuccess={(amount) => {
//         onBalanceUpdate(userBalance + amount);
//         setShowPaymentDialog(false);
//         handleGenerateTeams();
//       }}
//       onOpenChange={setShowPaymentDialog}
//       open={showPaymentDialog}
//     />
//   );

//   return {
//     generatedTeams,
//     isGenerating,
//     generateButton,
//     paymentDialog,
//     error,
//     setError,
//     fetchSavedTeams,
//     setGeneratedTeams
//   };
// };












// // app/TeamGenerator.tsx
// "use client";

// import { useState, useCallback, useMemo } from "react";
// import { PaymentDialog } from "./PaymentDialog";
// import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";
// import { db } from "@/lib/firebase";
// import {
//   doc,
//   runTransaction,
//   increment,
//   setDoc,
//   collection,
//   query,
//   orderBy,
//   getDocs,
//   limit
// } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";

// interface TeamGeneratorProps {
//   team1?: Team;
//   team2?: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate: (newBalance: number) => void;
//   matchId: string;
// }

// export const useTeamGenerator = ({
//   team1,
//   team2,
//   teamCount,
//   riskLevel,
//   userBalance,
//   onBalanceUpdate,
//   matchId
// }: TeamGeneratorProps) => {
//   const { user } = useUser();
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [roleCounts, setRoleCounts] = useState({
//     wk: 0,
//     battingAllrounders: 0,
//     bowlingAllrounders: 0,
//     bowlers: 0
//   });

//   const MAX_TEAMS_PER_MATCH = 100;
//   const requiredCredits = useMemo(() => teamCount * 10, [teamCount]);
//   const needsPayment = useMemo(() => userBalance < requiredCredits, [userBalance, requiredCredits]);
//   const paymentAmount = useMemo(() => Math.max(requiredCredits - userBalance, 50), [requiredCredits, userBalance]);

//   const normalizeRole = (role: string): string => {
//     const roleMap: Record<string, string> = {
//       'All-Rounder': 'Bowling Allrounder',
//       'Batsman': 'Batting Allrounder',
//       'Batsman Allrounder': 'Batting Allrounder',
//       'Bowler Allrounder': 'Bowling Allrounder',
//       'Wicketkeeper': 'WK-Batsman',
//       'WK': 'WK-Batsman'
//     };
//     return roleMap[role] || role;
//   };

//   const calculatePlayerScore = (player: PlayerDetail) => {
//     if (!player.selectedBy) return 0; // Ensure selectedBy exists
    
//     const normalizedRole = normalizeRole(player.role);
//     const baseScore = player.selectedBy;
    
//     // Role weights based on importance
//     const roleWeights = {
//       'WK-Batsman': 1.5,
//       'Batting Allrounder': 1.4,
//       'Bowling Allrounder': 1.3,
//       'Bowler': 1.2
//     };
    
//     // Risk factor based on risk level
//     let riskFactor;
//     if (riskLevel < 30) {
//       // Safe picks - favor higher selectedBy players
//       riskFactor = 1 + (baseScore / 100);
//     } else if (riskLevel < 70) {
//       // Balanced approach - some randomness
//       riskFactor = 0.9 + (Math.random() * 0.3);
//     } else {
//       // Aggressive - more randomness
//       riskFactor = 0.7 + (Math.random() * 0.6);
//     }
    
//     return baseScore * (roleWeights[normalizedRole] || 1.0) * riskFactor;
//   };

//   const createBalancedTeam = useCallback((players: PlayerDetail[], existingTeamCount: number) => {
//     if (!team1 || !team2) return null;
    
//     const MAX_ATTEMPTS = 500;
//     let attempts = 0;
    
//     const team1Short = team1.shortName || team1.name.split(' ').map(n => n[0]).join('');
//     const team2Short = team2.shortName || team2.name.split(' ').map(n => n[0]).join('');

//     // Filter and prepare players with calculated scores
//     const availablePlayers = players
//       .filter(p => !p.substitute && p.select !== false && p.selectedBy !== undefined)
//       .map(p => ({
//         ...p,
//         role: normalizeRole(p.role),
//         score: calculatePlayerScore(p),
//         normalizedSelectedBy: (p.selectedBy || 0) / 100 // Normalize to 0-1 range
//       }));

//     // Validate we have enough players of each role
//     const roleCounts = {
//       'WK-Batsman': availablePlayers.filter(p => p.role === 'WK-Batsman').length,
//       'Batting Allrounder': availablePlayers.filter(p => p.role === 'Batting Allrounder').length,
//       'Bowling Allrounder': availablePlayers.filter(p => p.role === 'Bowling Allrounder').length,
//       'Bowler': availablePlayers.filter(p => p.role === 'Bowler').length
//     };

//     // Early validation checks
//     if (availablePlayers.length < 11) {
//       throw new Error(`Not enough players (${availablePlayers.length}/11)`);
//     }

//     setRoleCounts({
//       wk: roleCounts['WK-Batsman'],
//       battingAllrounders: roleCounts['Batting Allrounder'],
//       bowlingAllrounders: roleCounts['Bowling Allrounder'],
//       bowlers: roleCounts['Bowler']
//     });

//     // Sort players by score for initial ranking
//     const sortedPlayers = [...availablePlayers].sort((a, b) => (b.score || 0) - (a.score || 0));

//     while (attempts < MAX_ATTEMPTS) {
//       attempts++;
//       const teamComposition = {
//         'WK-Batsman': 0,
//         'Batting Allrounder': 0,
//         'Bowling Allrounder': 0,
//         'Bowler': 0,
//         [team1Short]: 0,
//         [team2Short]: 0,
//         overseas: 0,
//         totalScore: 0
//       };

//       // Shuffle players for randomness
//       const shuffledPlayers = [...sortedPlayers].sort(() => Math.random() - 0.5);

//       // Select captain and vice-captain based on risk level
//       let captain, viceCaptain;
      
//       if (riskLevel < 30) {
//         // Safe picks - top 20% of players
//         const topPlayers = shuffledPlayers.slice(0, Math.ceil(shuffledPlayers.length * 0.2));
//         captain = topPlayers[0];
//         viceCaptain = topPlayers[1] || topPlayers[0];
//       } else if (riskLevel < 70) {
//         // Balanced - top 40% with some randomness
//         const topPlayers = shuffledPlayers.slice(0, Math.ceil(shuffledPlayers.length * 0.4));
//         captain = topPlayers[Math.floor(Math.random() * Math.min(topPlayers.length, 3))];
//         viceCaptain = topPlayers.find(p => p.id !== captain?.id) || topPlayers[0];
//       } else {
//         // Aggressive - wider pool with more randomness
//         const candidates = shuffledPlayers.slice(0, Math.ceil(shuffledPlayers.length * 0.6));
//         captain = candidates[Math.floor(Math.random() * candidates.length)];
//         viceCaptain = candidates.find(p => p.id !== captain?.id) || candidates[0];
//       }

//       if (!captain || !viceCaptain) continue;

//       const teamPlayers: PlayerDetail[] = [captain, viceCaptain];
      
//       // Update composition with captain and vice-captain
//       [captain, viceCaptain].forEach(player => {
//         teamComposition[player.role]++;
//         teamComposition.totalScore += player.score || 0;
//         teamComposition[player.teamName === team1.name ? team1Short : team2Short]++;
//         if (player.isOverseas) teamComposition.overseas++;
//       });

//       const remainingPlayers = shuffledPlayers.filter(p =>
//         p.id !== captain.id && p.id !== viceCaptain.id
//       );

//       // Define role requirements
//       const roleRequirements = [
//         { role: 'WK-Batsman', min: 1, max: 2 },
//         { role: 'Batting Allrounder', min: 3, max: 4 },
//         { role: 'Bowling Allrounder', min: 2, max: 3 },
//         { role: 'Bowler', min: 3, max: 5 }
//       ];

//       // Fill remaining team slots
//       while (teamPlayers.length < 11 && remainingPlayers.length > 0) {
//         const neededRoles = roleRequirements
//           .filter(r => teamComposition[r.role] < r.min)
//           .map(r => r.role);

//         const rolesToConsider = neededRoles.length > 0
//           ? neededRoles
//           : ['Batting Allrounder', 'Bowling Allrounder', 'Bowler'];
        
//         // Filter candidates based on team composition constraints
//         let candidates = remainingPlayers.filter(p => {
//           if (!rolesToConsider.includes(p.role)) return false;
//           const team = p.teamName === team1.name ? team1Short : team2Short;
//           if (teamComposition[team] >= 7) return false;
//           if (p.isOverseas && teamComposition.overseas >= 4) return false;
//           return true;
//         });

//         // If no candidates meet strict criteria, relax constraints
//         if (candidates.length === 0) {
//           candidates = remainingPlayers.filter(p => rolesToConsider.includes(p.role));
//         }

//         if (candidates.length === 0) break;

//         let selectedPlayer;
        
//         // Selection strategy based on risk level
//         if (riskLevel < 30) {
//           // Safe - pick highest score
//           candidates.sort((a, b) => (b.score || 0) - (a.score || 0));
//           selectedPlayer = candidates[0];
//         } else if (riskLevel < 70) {
//           // Balanced - random from top half
//           candidates.sort((a, b) => (b.score || 0) - (a.score || 0));
//           const topHalf = candidates.slice(0, Math.ceil(candidates.length * 0.5));
//           selectedPlayer = topHalf[Math.floor(Math.random() * topHalf.length)];
//         } else {
//           // Aggressive - weighted random based on score
//           const totalScore = candidates.reduce((sum, p) => sum + (p.score || 0), 0);
//           let random = Math.random() * totalScore;
//           for (const player of candidates) {
//             random -= player.score || 0;
//             if (random <= 0) {
//               selectedPlayer = player;
//               break;
//             }
//           }
//           selectedPlayer = selectedPlayer || candidates[0];
//         }

//         teamPlayers.push(selectedPlayer);
//         teamComposition[selectedPlayer.role]++;
//         teamComposition.totalScore += selectedPlayer.score || 0;
//         teamComposition[selectedPlayer.teamName === team1.name ? team1Short : team2Short]++;
//         if (selectedPlayer.isOverseas) teamComposition.overseas++;

//         // Remove selected player from remaining pool
//         const index = remainingPlayers.findIndex(p => p.id === selectedPlayer.id);
//         if (index !== -1) remainingPlayers.splice(index, 1);
//       }

//       // Final validation checks
//       if (teamPlayers.length !== 11) continue;
//       if (teamComposition.overseas > 4) continue;
//       if (teamComposition[team1Short] > 7 || teamComposition[team2Short] > 7) continue;
//       if (teamComposition[team1Short] < 4 || teamComposition[team2Short] < 4) continue;
//       if (teamComposition['WK-Batsman'] < 1) continue;
//       if (teamComposition['Batting Allrounder'] < 3) continue;
//       if (teamComposition['Bowling Allrounder'] < 2) continue;
//       if (teamComposition['Bowler'] < 3) continue;

//       // If all checks pass, return the valid team
//       return {
//         players: teamPlayers,
//         captain,
//         viceCaptain,
//         teamName: `Team ${existingTeamCount + 1}`,
//         teamComposition,
//         riskLevel,
//         matchId,
//         createdAt: new Date().toISOString()
//       };
//     }

//     return null;
//   }, [team1, team2, riskLevel, matchId]);

//   const getTeamCountForMatch = async (): Promise<number> => {
//     if (!user || !matchId) return 0;
    
//     try {
//       const q = query(
//         collection(db, "users", user.id, "matches", matchId, "teams"),
//         limit(MAX_TEAMS_PER_MATCH)
//       );
//       const querySnapshot = await getDocs(q);
//       return querySnapshot.size;
//     } catch (err) {
//       console.error("Failed to count teams:", err);
//       return 0;
//     }
//   };

//   const saveTeamToFirestore = async (team: GeneratedTeam) => {
//     if (!user || !matchId) return;
    
//     try {
//       const teamsCount = await getTeamCountForMatch();
//       if (teamsCount >= MAX_TEAMS_PER_MATCH) {
//         throw new Error(`Maximum of ${MAX_TEAMS_PER_MATCH} teams reached for this match`);
//       }

//       const teamData = {
//         ...team,
//         userId: user.id,
//         userEmail: user.primaryEmailAddress?.emailAddress || '',
//         matchName: `${team1?.name} vs ${team2?.name}`,
//         team1ShortName: team1?.shortName || team1?.name.split(' ').map(n => n[0]).join(''),
//         team2ShortName: team2?.shortName || team2?.name.split(' ').map(n => n[0]).join(''),
//         team1Logo: team1?.logo || '/fallback-team.png',
//         team2Logo: team2?.logo || '/fallback-team.png'
//       };

//       const matchTeamsRef = collection(db, "users", user.id, "matches", matchId, "teams");
//       const teamRef = doc(matchTeamsRef);
      
//       await setDoc(teamRef, teamData);
//       return teamRef.id;
//     } catch (err) {
//       console.error("Failed to save team:", err);
//       throw err;
//     }
//   };

//   const fetchSavedTeams = useCallback(async () => {
//     if (!user || !matchId) return [];
    
//     try {
//       const q = query(
//         collection(db, "users", user.id, "matches", matchId, "teams"),
//         orderBy("createdAt", "desc"),
//         limit(MAX_TEAMS_PER_MATCH)
//       );
//       const querySnapshot = await getDocs(q);
//       return querySnapshot.docs.map(doc => ({
//         ...doc.data() as GeneratedTeam,
//         id: doc.id
//       }));
//     } catch (err) {
//       console.error("Failed to fetch saved teams:", err);
//       return [];
//     }
//   }, [user, matchId]);

//   const handleGenerateTeams = useCallback(async () => {
//     if (!team1 || !team2) {
//       setError("Select both teams first");
//       return;
//     }

//     if (!user) {
//       setError("Please sign in to generate teams");
//       return;
//     }

//     const currentTeamCount = await getTeamCountForMatch();
//     if (currentTeamCount >= MAX_TEAMS_PER_MATCH) {
//       setError(`You've reached the maximum of ${MAX_TEAMS_PER_MATCH} teams for this match`);
//       return;
//     }

//     const remainingTeamSlots = MAX_TEAMS_PER_MATCH - currentTeamCount;
//     const teamsToGenerate = Math.min(teamCount, remainingTeamSlots);

//     if (teamsToGenerate <= 0) {
//       setError(`You've reached the maximum of ${MAX_TEAMS_PER_MATCH} teams for this match`);
//       return;
//     }

//     if (needsPayment) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     const allPlayers = [
//       ...(team1.playerDetails || []).filter(p => !p.substitute && p.select !== false),
//       ...(team2.playerDetails || []).filter(p => !p.substitute && p.select !== false)
//     ];

//     const currentRoleCounts = {
//       wk: allPlayers.filter(p => normalizeRole(p.role) === 'WK-Batsman').length,
//       battingAllrounders: allPlayers.filter(p => normalizeRole(p.role) === 'Batting Allrounder').length,
//       bowlingAllrounders: allPlayers.filter(p => normalizeRole(p.role) === 'Bowling Allrounder').length,
//       bowlers: allPlayers.filter(p => normalizeRole(p.role) === 'Bowler').length
//     };
//     setRoleCounts(currentRoleCounts);

//     const errors = [];
//     if (currentRoleCounts.wk < 1) errors.push("1 Wicket-Keeper (WK-Batsman)");
//     if (currentRoleCounts.battingAllrounders < 3) errors.push("3 Batting Allrounders");
//     if (currentRoleCounts.bowlingAllrounders < 2) errors.push("2 Bowling Allrounders");
//     if (currentRoleCounts.bowlers < 3) errors.push("3 Bowlers");

//     if (errors.length > 0) {
//       setError(`Need at least ${errors.join(", ")}`);
//       return;
//     }

//     if (allPlayers.length < 11) {
//       setError(`Not enough players (${allPlayers.length}/11). Please check your filters.`);
//       return;
//     }

//     setIsGenerating(true);
//     setError(null);

//     try {
//       await runTransaction(db, async (transaction) => {
//         const userRef = doc(db, "users", user.id);
//         const userDoc = await transaction.get(userRef);
        
//         if (!userDoc.exists()) throw new Error("User not found");
//         if ((userDoc.data().credits || 0) < requiredCredits) {
//           throw new Error("Insufficient balance");
//         }
        
//         transaction.update(userRef, {
//           credits: increment(-requiredCredits)
//         });
//       });

//       const newTeams: GeneratedTeam[] = [];
//       const TOTAL_ATTEMPTS = teamsToGenerate * 100;
//       let attempts = 0;

//       while (newTeams.length < teamsToGenerate && attempts < TOTAL_ATTEMPTS) {
//         attempts++;
//         const team = createBalancedTeam(allPlayers, currentTeamCount + newTeams.length);
//         if (team) {
//           await saveTeamToFirestore(team);
//           newTeams.push(team);
//         }
//       }

//       if (newTeams.length === 0) {
//         throw new Error(`Failed to generate valid teams after ${TOTAL_ATTEMPTS} attempts. Try adjusting your risk level or player filters.`);
//       }

//       const savedTeams = await fetchSavedTeams();
//       setGeneratedTeams(savedTeams);
//       onBalanceUpdate(userBalance - requiredCredits);
//     } catch (err: any) {
//       setError(err.message || "Failed to generate teams");
//     } finally {
//       setIsGenerating(false);
//     }
//   }, [
//     team1, team2, teamCount, riskLevel, user,
//     userBalance, requiredCredits, needsPayment,
//     onBalanceUpdate, createBalancedTeam, matchId,
//     fetchSavedTeams
//   ]);

//   const generateButton = (
//     <div className="space-y-2">
//       <button
//         onClick={handleGenerateTeams}
//         disabled={isGenerating || !team1 || !team2}
//         className={`
//           w-full px-4 py-3 rounded-md font-bold
//           ${isGenerating ? 'bg-gray-500' :
//            needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' :
//            'bg-blue-500 hover:bg-blue-600'}
//           text-white transition-colors
//         `}
//       >
//         {isGenerating ? (
//           <span className="flex items-center justify-center gap-2">
//             <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//             Generating...
//           </span>
//         ) : !team1 || !team2 ? (
//           "Select both teams"
//         ) : needsPayment ? (
//           `Add ₹${paymentAmount} to Generate`
//         ) : (
//           `Generate ${teamCount} Teams (₹${requiredCredits})`
//         )}
//       </button>

//       <div className="flex justify-between text-sm">
//         <span>Your Credits: ₹{userBalance}</span>
//         {needsPayment ? (
//           <span className="text-yellow-500">Need ₹${paymentAmount} more</span>
//         ) : (
//           <span className="text-green-500">Sufficient balance</span>
//         )}
//       </div>

//       {error && (
//         <div className="text-red-500 text-sm p-2 bg-red-50 rounded-lg">
//           <p className="font-medium">{error}</p>
//           {error.includes("Need at least") && (
//             <div className="mt-2 text-xs">
//               <p>Current player counts:</p>
//               <ul className="list-disc pl-5">
//                 <li>WK-Batsman: {roleCounts.wk} (min 1)</li>
//                 <li>Batting Allrounders: {roleCounts.battingAllrounders} (min 3)</li>
//                 <li>Bowling Allrounders: {roleCounts.bowlingAllrounders} (min 2)</li>
//                 <li>Bowlers: {roleCounts.bowlers} (min 3)</li>
//               </ul>
//             </div>
//           )}
//           {error.includes("Not enough players") && (
//             <p className="text-xs mt-1">Try adjusting player filters or selecting different teams</p>
//           )}
//         </div>
//       )}
//     </div>
//   );

//   const paymentDialog = showPaymentDialog && (
//     <PaymentDialog
//       currentBalance={userBalance}
//       requiredAmount={paymentAmount}
//       onPaymentSuccess={(amount) => {
//         onBalanceUpdate(userBalance + amount);
//         setShowPaymentDialog(false);
//         handleGenerateTeams();
//       }}
//       onOpenChange={setShowPaymentDialog}
//       open={showPaymentDialog}
//     />
//   );

//   return {
//     generatedTeams,
//     isGenerating,
//     generateButton,
//     paymentDialog,
//     error,
//     setError,
//     fetchSavedTeams,
//     setGeneratedTeams
//   };
// };





// // TeamGenerator.tsx
// "use client";
// import { useState, useCallback, useMemo } from "react";
// import { PaymentDialog } from "./PaymentDialog";
// import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";
// import { db } from "@/lib/firebase";
// import {
//   doc,
//   runTransaction,
//   increment,
//   setDoc,
//   collection,
//   query,
//   orderBy,
//   getDocs,
//   limit
// } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";

// interface TeamGeneratorProps {
//   team1?: Team;
//   team2?: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate: (newBalance: number) => void;
//   matchId: string;
// }

// export const useTeamGenerator = ({
//   team1,
//   team2,
//   teamCount,
//   riskLevel,
//   userBalance,
//   onBalanceUpdate,
//   matchId
// }: TeamGeneratorProps) => {
//   const { user } = useUser();
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [roleCounts, setRoleCounts] = useState({
//     wk: 0,
//     battingAllrounders: 0,
//     bowlingAllrounders: 0,
//     bowlers: 0
//   });

//   const MAX_TEAMS_PER_MATCH = 100;
//   const requiredCredits = useMemo(() => teamCount * 10, [teamCount]);
//   const needsPayment = useMemo(() => userBalance < requiredCredits, [userBalance, requiredCredits]);
//   const paymentAmount = useMemo(() => Math.max(requiredCredits - userBalance, 50), [requiredCredits, userBalance]);

//   const getPlayerPool = useCallback(() => {
//     if (!team1 || !team2) return [];
    
//     return [
//       ...(team1.playerDetails || []).filter(p => !p.substitute && p.select !== false),
//       ...(team2.playerDetails || []).filter(p => !p.substitute && p.select !== false)
//     ].map(p => ({
//       ...p,
//       roleOrder: getRoleOrder(p.role),
//       selectedBy: p.selectedBy || 0,
//       selCapPerc: p.selCapPerc || 0,
//       selVcPerc: p.selVcPerc || 0
//     }));
//   }, [team1, team2]);

//   const getRoleOrder = (role: string): number => {
//     const normalized = normalizeRole(role);
//     switch(normalized) {
//       case 'WK-Batsman': return 1;
//       case 'Batsman': return 2;
//       case 'Batting Allrounder': return 2;
//       case 'Bowling Allrounder': return 3;
//       case 'Bowler': return 4;
//       default: return 4;
//     }
//   };

//   const normalizeRole = (role: string): string => {
//     const roleMap: Record<string, string> = {
//       'All-Rounder': 'Bowling Allrounder',
//       'Batsman': 'Batsman',
//       'Batsman Allrounder': 'Batting Allrounder',
//       'Bowler Allrounder': 'Bowling Allrounder',
//       'Wicketkeeper': 'WK-Batsman',
//       'WK': 'WK-Batsman'
//     };
//     return roleMap[role] || role;
//   };

//   const calculatePlayerScore = (player: PlayerDetail, forCaptaincy = false) => {
//     const baseScore = forCaptaincy ?
//       (player.selCapPerc || player.selectedBy || 0) :
//       (player.selectedBy || 0);
    
//     let riskFactor = 1;
//     if (riskLevel < 30) {
//       riskFactor = 1 + (baseScore / 100);
//     } else if (riskLevel < 70) {
//       riskFactor = 0.8 + (Math.random() * 0.4);
//     } else {
//       riskFactor = 0.5 + (Math.random() * 0.8);
//     }
    
//     return baseScore * riskFactor;
//   };

//   const createBalancedTeam = useCallback((players: PlayerDetail[], existingTeamCount: number) => {
//     if (!team1 || !team2) return null;
    
//     const MAX_ATTEMPTS = 200;
//     const team1Short = team1.shortName || 'T1';
//     const team2Short = team2.shortName || 'T2';
    
//     const availablePlayers = players.filter(p =>
//       p.selectedBy !== undefined && p.selectedBy > 0
//     );

//     const roleCounts = {
//       'WK-Batsman': availablePlayers.filter(p => normalizeRole(p.role) === 'WK-Batsman').length,
//       'Batsman': availablePlayers.filter(p => normalizeRole(p.role) === 'Batsman').length,
//       'Batting Allrounder': availablePlayers.filter(p => normalizeRole(p.role) === 'Batting Allrounder').length,
//       'Bowling Allrounder': availablePlayers.filter(p => normalizeRole(p.role) === 'Bowling Allrounder').length,
//       'Bowler': availablePlayers.filter(p => normalizeRole(p.role) === 'Bowler').length
//     };

//     if (availablePlayers.length < 11) {
//       throw new Error(`Not enough players (${availablePlayers.length}/11)`);
//     }

//     let attempts = 0;
//     while (attempts < MAX_ATTEMPTS) {
//       attempts++;
//       const teamComposition = {
//         'WK-Batsman': 0,
//         'Batsman': 0,
//         'Batting Allrounder': 0,
//         'Bowling Allrounder': 0,
//         'Bowler': 0,
//         [team1Short]: 0,
//         [team2Short]: 0,
//         overseas: 0,
//         totalScore: 0
//       };

//       const sortedPlayers = [...availablePlayers].sort((a, b) =>
//         (calculatePlayerScore(b) - calculatePlayerScore(a))
//       );

//       let captainPool, viceCaptainPool;
      
//       if (riskLevel < 30) {
//         captainPool = sortedPlayers.slice(0, Math.ceil(sortedPlayers.length * 0.2));
//         viceCaptainPool = sortedPlayers.slice(0, Math.ceil(sortedPlayers.length * 0.4));
//       } else if (riskLevel < 70) {
//         captainPool = sortedPlayers.slice(0, Math.ceil(sortedPlayers.length * 0.4));
//         viceCaptainPool = sortedPlayers.slice(0, Math.ceil(sortedPlayers.length * 0.6));
//       } else {
//         captainPool = sortedPlayers.slice(0, Math.ceil(sortedPlayers.length * 0.6));
//         viceCaptainPool = sortedPlayers.slice(0, Math.ceil(sortedPlayers.length * 0.8));
//       }

//       const captain = captainPool[Math.floor(Math.random() * captainPool.length)];
//       const viceCaptain = viceCaptainPool.filter(p => p.id !== captain?.id)[0] || captainPool[0];

//       if (!captain || !viceCaptain) continue;

//       const teamPlayers: PlayerDetail[] = [captain, viceCaptain];
      
//       [captain, viceCaptain].forEach(player => {
//         const role = normalizeRole(player.role);
//         teamComposition[role]++;
//         teamComposition[player.teamName === team1.name ? team1Short : team2Short]++;
//         if (player.isOverseas) teamComposition.overseas++;
//         teamComposition.totalScore += calculatePlayerScore(player);
//       });

//       const remainingPlayers = sortedPlayers.filter(p =>
//         p.id !== captain.id && p.id !== viceCaptain.id
//       );

//       const rolePriority = [
//         { role: 'WK-Batsman', min: 1, max: 2 },
//         { role: 'Batsman', min: 2, max: 4 },
//         { role: 'Batting Allrounder', min: 1, max: 3 },
//         { role: 'Bowling Allrounder', min: 1, max: 3 },
//         { role: 'Bowler', min: 3, max: 5 }
//       ];

//       while (teamPlayers.length < 11 && remainingPlayers.length > 0) {
//         const neededRoles = rolePriority
//           .filter(r => teamComposition[r.role] < r.min)
//           .map(r => r.role);

//         const rolesToConsider = neededRoles.length > 0 ? neededRoles :
//           ['Batsman', 'Batting Allrounder', 'Bowling Allrounder', 'Bowler'];
        
//         let candidates = remainingPlayers.filter(p => {
//           const role = normalizeRole(p.role);
//           if (!rolesToConsider.includes(role)) return false;
//           const team = p.teamName === team1.name ? team1Short : team2Short;
//           if (teamComposition[team] >= 8) return false;
//           if (p.isOverseas && teamComposition.overseas >= 5) return false;
//           return true;
//         });

//         if (candidates.length === 0) {
//           candidates = remainingPlayers.filter(p =>
//             rolesToConsider.includes(normalizeRole(p.role))
//           );
//         }

//         if (candidates.length === 0) break;

//         let selectedPlayer;
//         if (riskLevel < 30) {
//           candidates.sort((a, b) => calculatePlayerScore(b) - calculatePlayerScore(a));
//           selectedPlayer = candidates[0];
//         } else if (riskLevel < 70) {
//           candidates.sort((a, b) => calculatePlayerScore(b) - calculatePlayerScore(a));
//           const topHalf = candidates.slice(0, Math.ceil(candidates.length * 0.5));
//           selectedPlayer = topHalf[Math.floor(Math.random() * topHalf.length)];
//         } else {
//           const totalScore = candidates.reduce((sum, p) => sum + calculatePlayerScore(p), 0);
//           let random = Math.random() * totalScore;
//           for (const player of candidates) {
//             random -= calculatePlayerScore(player);
//             if (random <= 0) {
//               selectedPlayer = player;
//               break;
//             }
//           }
//           selectedPlayer = selectedPlayer || candidates[0];
//         }

//         if (!selectedPlayer) break;

//         teamPlayers.push(selectedPlayer);
//         const role = normalizeRole(selectedPlayer.role);
//         teamComposition[role]++;
//         teamComposition[selectedPlayer.teamName === team1.name ? team1Short : team2Short]++;
//         if (selectedPlayer.isOverseas) teamComposition.overseas++;
//         teamComposition.totalScore += calculatePlayerScore(selectedPlayer);

//         const index = remainingPlayers.findIndex(p => p.id === selectedPlayer.id);
//         if (index !== -1) remainingPlayers.splice(index, 1);
//       }

//       if (teamPlayers.length !== 11) continue;
//       if (teamComposition.overseas > 5) continue;
//       if (teamComposition[team1Short] > 8 || teamComposition[team2Short] > 8) continue;
//       if (teamComposition[team1Short] < 3 || teamComposition[team2Short] < 3) continue;
//       if (teamComposition['WK-Batsman'] < 1) continue;
//       if (teamComposition['Batsman'] + teamComposition['Batting Allrounder'] < 3) continue;
//       if (teamComposition['Bowling Allrounder'] < 1) continue;
//       if (teamComposition['Bowler'] < 3) continue;

//       const sortedTeamPlayers = [...teamPlayers].sort((a, b) =>
//         (a.roleOrder || 4) - (b.roleOrder || 4)
//       );

//       return {
//         players: sortedTeamPlayers,
//         captain,
//         viceCaptain,
//         teamName: `Team ${existingTeamCount + 1}`,
//         teamComposition,
//         riskLevel,
//         matchId,
//         createdAt: new Date().toISOString()
//       };
//     }

//     return null;
//   }, [team1, team2, riskLevel, matchId]);

//   const getTeamCountForMatch = async (): Promise<number> => {
//     if (!user || !matchId) return 0;
    
//     try {
//       const q = query(
//         collection(db, "users", user.id, "matches", matchId, "teams"),
//         limit(MAX_TEAMS_PER_MATCH)
//       );
//       const querySnapshot = await getDocs(q);
//       return querySnapshot.size;
//     } catch (err) {
//       console.error("Failed to count teams:", err);
//       return 0;
//     }
//   };

//   const saveTeamToFirestore = async (team: GeneratedTeam) => {
//     if (!user || !matchId) return;
    
//     try {
//       const teamsCount = await getTeamCountForMatch();
//       if (teamsCount >= MAX_TEAMS_PER_MATCH) {
//         throw new Error(`Maximum of ${MAX_TEAMS_PER_MATCH} teams reached for this match`);
//       }

//       const teamData = {
//         ...team,
//         userId: user.id,
//         userEmail: user.primaryEmailAddress?.emailAddress || '',
//         matchName: `${team1?.name} vs ${team2?.name}`,
//         team1ShortName: team1?.shortName || team1?.name.split(' ').map(n => n[0]).join(''),
//         team2ShortName: team2?.shortName || team2?.name.split(' ').map(n => n[0]).join(''),
//         team1Logo: team1?.logo || '/fallback-team.png',
//         team2Logo: team2?.logo || '/fallback-team.png'
//       };

//       const matchTeamsRef = collection(db, "users", user.id, "matches", matchId, "teams");
//       const teamRef = doc(matchTeamsRef);
      
//       await setDoc(teamRef, teamData);
//       return teamRef.id;
//     } catch (err) {
//       console.error("Failed to save team:", err);
//       throw err;
//     }
//   };

//   const fetchSavedTeams = useCallback(async () => {
//     if (!user || !matchId) return [];
    
//     try {
//       const q = query(
//         collection(db, "users", user.id, "matches", matchId, "teams"),
//         orderBy("createdAt", "desc"),
//         limit(MAX_TEAMS_PER_MATCH)
//       );
//       const querySnapshot = await getDocs(q);
//       return querySnapshot.docs.map(doc => ({
//         ...doc.data() as GeneratedTeam,
//         id: doc.id
//       }));
//     } catch (err) {
//       console.error("Failed to fetch saved teams:", err);
//       return [];
//     }
//   }, [user, matchId]);

//   const handleGenerateTeams = useCallback(async () => {
//     if (!team1 || !team2) {
//       setError("Select both teams first");
//       return;
//     }

//     if (!user) {
//       setError("Please sign in to generate teams");
//       return;
//     }

//     const currentTeamCount = await getTeamCountForMatch();
//     if (currentTeamCount >= MAX_TEAMS_PER_MATCH) {
//       setError(`You've reached the maximum of ${MAX_TEAMS_PER_MATCH} teams for this match`);
//       return;
//     }

//     const remainingTeamSlots = MAX_TEAMS_PER_MATCH - currentTeamCount;
//     const teamsToGenerate = Math.min(teamCount, remainingTeamSlots);

//     if (teamsToGenerate <= 0) {
//       setError(`You've reached the maximum of ${MAX_TEAMS_PER_MATCH} teams for this match`);
//       return;
//     }

//     if (needsPayment) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     const allPlayers = getPlayerPool();

//     const currentRoleCounts = {
//       wk: allPlayers.filter(p => normalizeRole(p.role) === 'WK-Batsman').length,
//       battingAllrounders: allPlayers.filter(p => normalizeRole(p.role) === 'Batting Allrounder').length,
//       bowlingAllrounders: allPlayers.filter(p => normalizeRole(p.role) === 'Bowling Allrounder').length,
//       bowlers: allPlayers.filter(p => normalizeRole(p.role) === 'Bowler').length
//     };
//     setRoleCounts(currentRoleCounts);

//     const errors = [];
//     if (currentRoleCounts.wk < 1) errors.push("1 Wicket-Keeper (WK-Batsman)");
//     if (currentRoleCounts.battingAllrounders < 3) errors.push("3 Batting Allrounders");
//     if (currentRoleCounts.bowlingAllrounders < 2) errors.push("2 Bowling Allrounders");
//     if (currentRoleCounts.bowlers < 3) errors.push("3 Bowlers");

//     if (errors.length > 0) {
//       setError(`Need at least ${errors.join(", ")}`);
//       return;
//     }

//     if (allPlayers.length < 11) {
//       setError(`Not enough players (${allPlayers.length}/11). Please check your filters.`);
//       return;
//     }

//     setIsGenerating(true);
//     setError(null);

//     try {
//       await runTransaction(db, async (transaction) => {
//         const userRef = doc(db, "users", user.id);
//         const userDoc = await transaction.get(userRef);
        
//         if (!userDoc.exists()) throw new Error("User not found");
//         if ((userDoc.data().credits || 0) < requiredCredits) {
//           throw new Error("Insufficient balance");
//         }
        
//         transaction.update(userRef, {
//           credits: increment(-requiredCredits)
//         });
//       });

//       const newTeams: GeneratedTeam[] = [];
//       const TOTAL_ATTEMPTS = teamsToGenerate * 100;
//       let attempts = 0;

//       while (newTeams.length < teamsToGenerate && attempts < TOTAL_ATTEMPTS) {
//         attempts++;
//         const team = createBalancedTeam(allPlayers, currentTeamCount + newTeams.length);
//         if (team) {
//           await saveTeamToFirestore(team);
//           newTeams.push(team);
//         }
//       }

//       if (newTeams.length === 0) {
//         throw new Error(`Failed to generate valid teams after ${TOTAL_ATTEMPTS} attempts. Try adjusting your risk level or player filters.`);
//       }

//       const savedTeams = await fetchSavedTeams();
//       setGeneratedTeams(savedTeams);
//       onBalanceUpdate(userBalance - requiredCredits);
//     } catch (err: any) {
//       setError(err.message || "Failed to generate teams");
//     } finally {
//       setIsGenerating(false);
//     }
//   }, [
//     team1, team2, teamCount, riskLevel, user,
//     userBalance, requiredCredits, needsPayment,
//     onBalanceUpdate, createBalancedTeam, matchId,
//     fetchSavedTeams, getPlayerPool
//   ]);

//   const generateButton = (
//     <div className="space-y-2">
//       <button
//         onClick={handleGenerateTeams}
//         disabled={isGenerating || !team1 || !team2}
//         className={`
//           w-full px-4 py-3 rounded-md font-bold
//           ${isGenerating ? 'bg-gray-500' :
//            needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' :
//            'bg-blue-500 hover:bg-blue-600'}
//           text-white transition-colors
//         `}
//       >
//         {isGenerating ? (
//           <span className="flex items-center justify-center gap-2">
//             <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//             Generating...
//           </span>
//         ) : !team1 || !team2 ? (
//           "Select both teams"
//         ) : needsPayment ? (
//           `Add ₹${paymentAmount} to Generate`
//         ) : (
//           `Generate ${teamCount} Teams (₹${requiredCredits})`
//         )}
//       </button>

//       <div className="flex justify-between text-sm">
//         <span>Your Credits: ₹{userBalance}</span>
//         {needsPayment ? (
//           <span className="text-yellow-500">Need ₹{paymentAmount} more</span>
//         ) : (
//           <span className="text-green-500">Sufficient balance</span>
//         )}
//       </div>

//       {error && (
//         <div className="text-red-500 text-sm p-2 bg-red-50 rounded-lg">
//           <p className="font-medium">{error}</p>
//           {error.includes("Need at least") && (
//             <div className="mt-2 text-xs">
//               <p>Current player counts:</p>
//               <ul className="list-disc pl-5">
//                 <li>WK-Batsman: {roleCounts.wk} (min 1)</li>
//                 <li>Batting Allrounders: {roleCounts.battingAllrounders} (min 3)</li>
//                 <li>Bowling Allrounders: {roleCounts.bowlingAllrounders} (min 2)</li>
//                 <li>Bowlers: {roleCounts.bowlers} (min 3)</li>
//               </ul>
//             </div>
//           )}
//           {error.includes("Not enough players") && (
//             <p className="text-xs mt-1">Try adjusting player filters or selecting different teams</p>
//           )}
//         </div>
//       )}
//     </div>
//   );

//   const paymentDialog = showPaymentDialog && (
//     <PaymentDialog
//       currentBalance={userBalance}
//       requiredAmount={paymentAmount}
//       onPaymentSuccess={(amount) => {
//         onBalanceUpdate(userBalance + amount);
//         setShowPaymentDialog(false);
//         handleGenerateTeams();
//       }}
//       onOpenChange={setShowPaymentDialog}
//       open={showPaymentDialog}
//     />
//   );

//   return {
//     generatedTeams,
//     isGenerating,
//     generateButton,
//     paymentDialog,
//     error,
//     setError,
//     fetchSavedTeams,
//     setGeneratedTeams
//   };
// };








// "use client";
// import { useState, useCallback, useMemo, useEffect } from "react";
// import { PaymentDialog } from "./PaymentDialog";
// import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";
// import { db } from "@/lib/firebase";
// import {
//   doc,
//   runTransaction,
//   increment,
//   setDoc,
//   collection,
//   query,
//   orderBy,
//   getDocs,
//   limit
// } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";

// interface TeamGeneratorProps {
//   team1?: Team;
//   team2?: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate: (newBalance: number) => void;
//   matchId: string;
// }

// export const useTeamGenerator = ({
//   team1,
//   team2,
//   teamCount,
//   riskLevel,
//   userBalance,
//   onBalanceUpdate,
//   matchId
// }: TeamGeneratorProps) => {
//   const { user } = useUser();
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [roleCounts, setRoleCounts] = useState({
//     wk: 0,
//     battingAllrounders: 0,
//     bowlingAllrounders: 0,
//     bowlers: 0
//   });

//   const MAX_TEAMS_PER_MATCH = 100;
//   const requiredCredits = useMemo(() => teamCount * 10, [teamCount]);
//   const needsPayment = useMemo(() => userBalance < requiredCredits, [userBalance, requiredCredits]);
//   const paymentAmount = useMemo(() => Math.max(requiredCredits - userBalance, 50), [requiredCredits, userBalance]);

//   // Add localStorage key
//   const localStorageKey = useMemo(() =>
//     `matchTeams_${matchId}_${user?.id}`,
//     [matchId, user?.id]
//   );

//   // Load from localStorage on mount
//   useEffect(() => {
//     if (!matchId || !user?.id) return;
    
//     try {
//       const savedTeams = localStorage.getItem(localStorageKey);
//       if (savedTeams) {
//         setGeneratedTeams(JSON.parse(savedTeams));
//       }
//     } catch (err) {
//       console.error("Failed to load from localStorage:", err);
//     }
//   }, [localStorageKey, matchId, user?.id]);

//   // Save to localStorage when teams change
//   useEffect(() => {
//     if (!matchId || !user?.id || generatedTeams.length === 0) return;
    
//     try {
//       localStorage.setItem(
//         localStorageKey,
//         JSON.stringify(generatedTeams)
//       );
//     } catch (err) {
//       console.error("Failed to save to localStorage:", err);
//     }
//   }, [generatedTeams, localStorageKey]);

//   const getPlayerPool = useCallback(() => {
//     if (!team1 || !team2) return [];
    
//     return [
//       ...(team1.playerDetails || []).filter(p => !p.substitute && p.select !== false),
//       ...(team2.playerDetails || []).filter(p => !p.substitute && p.select !== false)
//     ].map(p => ({
//       ...p,
//       roleOrder: getRoleOrder(p.role),
//       selectedBy: p.selectedBy || 0,
//       selCapPerc: p.selCapPerc || 0,
//       selVcPerc: p.selVcPerc || 0
//     }));
//   }, [team1, team2]);

//   const getRoleOrder = (role: string): number => {
//     const normalized = normalizeRole(role);
//     switch(normalized) {
//       case 'WK-Batsman': return 1;
//       case 'Batsman': return 2;
//       case 'Batting Allrounder': return 2;
//       case 'Bowling Allrounder': return 3;
//       case 'Bowler': return 4;
//       default: return 4;
//     }
//   };

//   const normalizeRole = (role: string): string => {
//     const roleMap: Record<string, string> = {
//       'All-Rounder': 'Bowling Allrounder',
//       'Batsman': 'Batsman',
//       'Batsman Allrounder': 'Batting Allrounder',
//       'Bowler Allrounder': 'Bowling Allrounder',
//       'Wicketkeeper': 'WK-Batsman',
//       'WK': 'WK-Batsman'
//     };
//     return roleMap[role] || role;
//   };

//   const calculatePlayerScore = (player: PlayerDetail, forCaptaincy = false) => {
//     const baseScore = forCaptaincy ?
//       (player.selCapPerc || player.selectedBy || 0) :
//       (player.selectedBy || 0);
    
//     let riskFactor = 1;
//     if (riskLevel < 30) {
//       riskFactor = 1 + (baseScore / 100);
//     } else if (riskLevel < 70) {
//       riskFactor = 0.8 + (Math.random() * 0.4);
//     } else {
//       riskFactor = 0.5 + (Math.random() * 0.8);
//     }
    
//     return baseScore * riskFactor;
//   };

//   const createBalancedTeam = useCallback((players: PlayerDetail[], existingTeamCount: number) => {
//     if (!team1 || !team2) return null;
    
//     const MAX_ATTEMPTS = 200;
//     const team1Short = team1.shortName || 'T1';
//     const team2Short = team2.shortName || 'T2';
    
//     const availablePlayers = players.filter(p =>
//       p.selectedBy !== undefined && p.selectedBy > 0
//     );

//     const roleCounts = {
//       'WK-Batsman': availablePlayers.filter(p => normalizeRole(p.role) === 'WK-Batsman').length,
//       'Batsman': availablePlayers.filter(p => normalizeRole(p.role) === 'Batsman').length,
//       'Batting Allrounder': availablePlayers.filter(p => normalizeRole(p.role) === 'Batting Allrounder').length,
//       'Bowling Allrounder': availablePlayers.filter(p => normalizeRole(p.role) === 'Bowling Allrounder').length,
//       'Bowler': availablePlayers.filter(p => normalizeRole(p.role) === 'Bowler').length
//     };

//     if (availablePlayers.length < 11) {
//       throw new Error(`Not enough players (${availablePlayers.length}/11)`);
//     }

//     let attempts = 0;
//     while (attempts < MAX_ATTEMPTS) {
//       attempts++;
//       const teamComposition = {
//         'WK-Batsman': 0,
//         'Batsman': 0,
//         'Batting Allrounder': 0,
//         'Bowling Allrounder': 0,
//         'Bowler': 0,
//         [team1Short]: 0,
//         [team2Short]: 0,
//         overseas: 0,
//         totalScore: 0
//       };

//       const sortedPlayers = [...availablePlayers].sort((a, b) =>
//         (calculatePlayerScore(b) - calculatePlayerScore(a))
//       );

//       let captainPool, viceCaptainPool;
      
//       if (riskLevel < 30) {
//         captainPool = sortedPlayers.slice(0, Math.ceil(sortedPlayers.length * 0.2));
//         viceCaptainPool = sortedPlayers.slice(0, Math.ceil(sortedPlayers.length * 0.4));
//       } else if (riskLevel < 70) {
//         captainPool = sortedPlayers.slice(0, Math.ceil(sortedPlayers.length * 0.4));
//         viceCaptainPool = sortedPlayers.slice(0, Math.ceil(sortedPlayers.length * 0.6));
//       } else {
//         captainPool = sortedPlayers.slice(0, Math.ceil(sortedPlayers.length * 0.6));
//         viceCaptainPool = sortedPlayers.slice(0, Math.ceil(sortedPlayers.length * 0.8));
//       }

//       const captain = captainPool[Math.floor(Math.random() * captainPool.length)];
//       const viceCaptain = viceCaptainPool.filter(p => p.id !== captain?.id)[0] || captainPool[0];

//       if (!captain || !viceCaptain) continue;

//       const teamPlayers: PlayerDetail[] = [captain, viceCaptain];
      
//       [captain, viceCaptain].forEach(player => {
//         const role = normalizeRole(player.role);
//         teamComposition[role]++;
//         teamComposition[player.teamName === team1.name ? team1Short : team2Short]++;
//         if (player.isOverseas) teamComposition.overseas++;
//         teamComposition.totalScore += calculatePlayerScore(player);
//       });

//       const remainingPlayers = sortedPlayers.filter(p =>
//         p.id !== captain.id && p.id !== viceCaptain.id
//       );

//       const rolePriority = [
//         { role: 'WK-Batsman', min: 1, max: 2 },
//         { role: 'Batsman', min: 2, max: 4 },
//         { role: 'Batting Allrounder', min: 1, max: 3 },
//         { role: 'Bowling Allrounder', min: 1, max: 3 },
//         { role: 'Bowler', min: 3, max: 5 }
//       ];

//       while (teamPlayers.length < 11 && remainingPlayers.length > 0) {
//         const neededRoles = rolePriority
//           .filter(r => teamComposition[r.role] < r.min)
//           .map(r => r.role);

//         const rolesToConsider = neededRoles.length > 0 ? neededRoles :
//           ['Batsman', 'Batting Allrounder', 'Bowling Allrounder', 'Bowler'];
        
//         let candidates = remainingPlayers.filter(p => {
//           const role = normalizeRole(p.role);
//           if (!rolesToConsider.includes(role)) return false;
//           const team = p.teamName === team1.name ? team1Short : team2Short;
//           if (teamComposition[team] >= 8) return false;
//           if (p.isOverseas && teamComposition.overseas >= 5) return false;
//           return true;
//         });

//         if (candidates.length === 0) {
//           candidates = remainingPlayers.filter(p =>
//             rolesToConsider.includes(normalizeRole(p.role))
//           );
//         }

//         if (candidates.length === 0) break;

//         let selectedPlayer;
//         if (riskLevel < 30) {
//           candidates.sort((a, b) => calculatePlayerScore(b) - calculatePlayerScore(a));
//           selectedPlayer = candidates[0];
//         } else if (riskLevel < 70) {
//           candidates.sort((a, b) => calculatePlayerScore(b) - calculatePlayerScore(a));
//           const topHalf = candidates.slice(0, Math.ceil(candidates.length * 0.5));
//           selectedPlayer = topHalf[Math.floor(Math.random() * topHalf.length)];
//         } else {
//           const totalScore = candidates.reduce((sum, p) => sum + calculatePlayerScore(p), 0);
//           let random = Math.random() * totalScore;
//           for (const player of candidates) {
//             random -= calculatePlayerScore(player);
//             if (random <= 0) {
//               selectedPlayer = player;
//               break;
//             }
//           }
//           selectedPlayer = selectedPlayer || candidates[0];
//         }

//         if (!selectedPlayer) break;

//         teamPlayers.push(selectedPlayer);
//         const role = normalizeRole(selectedPlayer.role);
//         teamComposition[role]++;
//         teamComposition[selectedPlayer.teamName === team1.name ? team1Short : team2Short]++;
//         if (selectedPlayer.isOverseas) teamComposition.overseas++;
//         teamComposition.totalScore += calculatePlayerScore(selectedPlayer);

//         const index = remainingPlayers.findIndex(p => p.id === selectedPlayer.id);
//         if (index !== -1) remainingPlayers.splice(index, 1);
//       }

//       if (teamPlayers.length !== 11) continue;
//       if (teamComposition.overseas > 5) continue;
//       if (teamComposition[team1Short] > 8 || teamComposition[team2Short] > 8) continue;
//       if (teamComposition[team1Short] < 3 || teamComposition[team2Short] < 3) continue;
//       if (teamComposition['WK-Batsman'] < 1) continue;
//       if (teamComposition['Batsman'] + teamComposition['Batting Allrounder'] < 3) continue;
//       if (teamComposition['Bowling Allrounder'] < 1) continue;
//       if (teamComposition['Bowler'] < 3) continue;

//       const sortedTeamPlayers = [...teamPlayers].sort((a, b) =>
//         (a.roleOrder || 4) - (b.roleOrder || 4)
//       );

//       return {
//         players: sortedTeamPlayers,
//         captain,
//         viceCaptain,
//         teamName: `Team ${existingTeamCount + 1}`,
//         teamComposition,
//         riskLevel,
//         matchId,
//         createdAt: new Date().toISOString()
//       };
//     }

//     return null;
//   }, [team1, team2, riskLevel, matchId]);

//   const getTeamCountForMatch = async (): Promise<number> => {
//     if (!user || !matchId) return 0;
    
//     try {
//       const q = query(
//         collection(db, "users", user.id, "matches", matchId, "teams"),
//         limit(MAX_TEAMS_PER_MATCH)
//       );
//       const querySnapshot = await getDocs(q);
//       return querySnapshot.size;
//     } catch (err) {
//       console.error("Failed to count teams:", err);
//       return 0;
//     }
//   };

//   const saveTeamToFirestore = async (team: GeneratedTeam) => {
//     if (!user || !matchId) return;
    
//     try {
//       const teamsCount = await getTeamCountForMatch();
//       if (teamsCount >= MAX_TEAMS_PER_MATCH) {
//         throw new Error(`Maximum of ${MAX_TEAMS_PER_MATCH} teams reached for this match`);
//       }

//       const teamData = {
//         ...team,
//         userId: user.id,
//         userEmail: user.primaryEmailAddress?.emailAddress || '',
//         matchName: `${team1?.name} vs ${team2?.name}`,
//         team1ShortName: team1?.shortName || team1?.name.split(' ').map(n => n[0]).join(''),
//         team2ShortName: team2?.shortName || team2?.name.split(' ').map(n => n[0]).join(''),
//         team1Logo: team1?.logo || '/fallback-team.png',
//         team2Logo: team2?.logo || '/fallback-team.png'
//       };

//       const matchTeamsRef = collection(db, "users", user.id, "matches", matchId, "teams");
//       const teamRef = doc(matchTeamsRef);
      
//       await setDoc(teamRef, teamData);
//       return teamRef.id;
//     } catch (err) {
//       console.error("Failed to save team:", err);
//       throw err;
//     }
//   };

//   const fetchSavedTeams = useCallback(async () => {
//     if (!user || !matchId) return [];
    
//     try {
//       // Check localStorage first
//       const localTeams = localStorage.getItem(localStorageKey);
//       if (localTeams) {
//         return JSON.parse(localTeams);
//       }

//       // Fallback to Firestore
//       const q = query(
//         collection(db, "users", user.id, "matches", matchId, "teams"),
//         orderBy("createdAt", "desc"),
//         limit(MAX_TEAMS_PER_MATCH)
//       );
//       const querySnapshot = await getDocs(q);
//       const teams = querySnapshot.docs.map(doc => ({
//         ...doc.data() as GeneratedTeam,
//         id: doc.id
//       }));
      
//       // Save to localStorage
//       localStorage.setItem(localStorageKey, JSON.stringify(teams));
//       return teams;
//     } catch (err) {
//       console.error("Failed to fetch saved teams:", err);
//       return [];
//     }
//   }, [user, matchId, localStorageKey]);

//   const handleGenerateTeams = useCallback(async () => {
//     if (!team1 || !team2) {
//       setError("Select both teams first");
//       return;
//     }

//     if (!user) {
//       setError("Please sign in to generate teams");
//       return;
//     }

//     const currentTeamCount = await getTeamCountForMatch();
//     if (currentTeamCount >= MAX_TEAMS_PER_MATCH) {
//       setError(`You've reached the maximum of ${MAX_TEAMS_PER_MATCH} teams for this match`);
//       return;
//     }

//     const remainingTeamSlots = MAX_TEAMS_PER_MATCH - currentTeamCount;
//     const teamsToGenerate = Math.min(teamCount, remainingTeamSlots);

//     if (teamsToGenerate <= 0) {
//       setError(`You've reached the maximum of ${MAX_TEAMS_PER_MATCH} teams for this match`);
//       return;
//     }

//     if (needsPayment) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     const allPlayers = getPlayerPool();

//     const currentRoleCounts = {
//       wk: allPlayers.filter(p => normalizeRole(p.role) === 'WK-Batsman').length,
//       battingAllrounders: allPlayers.filter(p => normalizeRole(p.role) === 'Batting Allrounder').length,
//       bowlingAllrounders: allPlayers.filter(p => normalizeRole(p.role) === 'Bowling Allrounder').length,
//       bowlers: allPlayers.filter(p => normalizeRole(p.role) === 'Bowler').length
//     };
//     setRoleCounts(currentRoleCounts);

//     const errors = [];
//     if (currentRoleCounts.wk < 1) errors.push("1 Wicket-Keeper (WK-Batsman)");
//     if (currentRoleCounts.battingAllrounders < 3) errors.push("3 Batting Allrounders");
//     if (currentRoleCounts.bowlingAllrounders < 2) errors.push("2 Bowling Allrounders");
//     if (currentRoleCounts.bowlers < 3) errors.push("3 Bowlers");

//     if (errors.length > 0) {
//       setError(`Need at least ${errors.join(", ")}`);
//       return;
//     }

//     if (allPlayers.length < 11) {
//       setError(`Not enough players (${allPlayers.length}/11). Please check your filters.`);
//       return;
//     }

//     setIsGenerating(true);
//     setError(null);

//     try {
//       await runTransaction(db, async (transaction) => {
//         const userRef = doc(db, "users", user.id);
//         const userDoc = await transaction.get(userRef);
        
//         if (!userDoc.exists()) throw new Error("User not found");
//         if ((userDoc.data().credits || 0) < requiredCredits) {
//           throw new Error("Insufficient balance");
//         }
        
//         transaction.update(userRef, {
//           credits: increment(-requiredCredits)
//         });
//       });

//       const newTeams: GeneratedTeam[] = [];
//       const TOTAL_ATTEMPTS = teamsToGenerate * 100;
//       let attempts = 0;

//       while (newTeams.length < teamsToGenerate && attempts < TOTAL_ATTEMPTS) {
//         attempts++;
//         const team = createBalancedTeam(allPlayers, currentTeamCount + newTeams.length);
//         if (team) {
//           await saveTeamToFirestore(team);
//           newTeams.push(team);
//         }
//       }

//       if (newTeams.length === 0) {
//         throw new Error(`Failed to generate valid teams after ${TOTAL_ATTEMPTS} attempts. Try adjusting your risk level or player filters.`);
//       }

//       const savedTeams = await fetchSavedTeams();
//       setGeneratedTeams(savedTeams);
//       onBalanceUpdate(userBalance - requiredCredits);
//     } catch (err: any) {
//       setError(err.message || "Failed to generate teams");
//     } finally {
//       setIsGenerating(false);
//     }
//   }, [
//     team1, team2, teamCount, riskLevel, user,
//     userBalance, requiredCredits, needsPayment,
//     onBalanceUpdate, createBalancedTeam, matchId,
//     fetchSavedTeams, getPlayerPool
//   ]);

//   const generateButton = (
//     <div className="space-y-2">
//       <button
//         onClick={handleGenerateTeams}
//         disabled={isGenerating || !team1 || !team2}
//         className={`
//           w-full px-4 py-3 rounded-md font-bold
//           ${isGenerating ? 'bg-gray-500' :
//            needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' :
//            'bg-blue-500 hover:bg-blue-600'}
//           text-white transition-colors
//         `}
//       >
//         {isGenerating ? (
//           <span className="flex items-center justify-center gap-2">
//             <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//             Generating...
//           </span>
//         ) : !team1 || !team2 ? (
//           "Select both teams"
//         ) : needsPayment ? (
//           `Add ₹${paymentAmount} to Generate`
//         ) : (
//           `Generate ${teamCount} Teams (₹${requiredCredits})`
//         )}
//       </button>

//       <div className="flex justify-between text-sm">
//         <span>Your Credits: ₹{userBalance}</span>
//         {needsPayment ? (
//           <span className="text-yellow-500">Need ₹{paymentAmount} more</span>
//         ) : (
//           <span className="text-green-500">Sufficient balance</span>
//         )}
//       </div>

//       {error && (
//         <div className="text-red-500 text-sm p-2 bg-red-50 rounded-lg">
//           <p className="font-medium">{error}</p>
//           {error.includes("Need at least") && (
//             <div className="mt-2 text-xs">
//               <p>Current player counts:</p>
//               <ul className="list-disc pl-5">
//                 <li>WK-Batsman: {roleCounts.wk} (min 1)</li>
//                 <li>Batting Allrounders: {roleCounts.battingAllrounders} (min 3)</li>
//                 <li>Bowling Allrounders: {roleCounts.bowlingAllrounders} (min 2)</li>
//                 <li>Bowlers: {roleCounts.bowlers} (min 3)</li>
//               </ul>
//             </div>
//           )}
//           {error.includes("Not enough players") && (
//             <p className="text-xs mt-1">Try adjusting player filters or selecting different teams</p>
//           )}
//         </div>
//       )}
//     </div>
//   );

//   const paymentDialog = showPaymentDialog && (
//     <PaymentDialog
//       currentBalance={userBalance}
//       requiredAmount={paymentAmount}
//       onPaymentSuccess={(amount) => {
//         onBalanceUpdate(userBalance + amount);
//         setShowPaymentDialog(false);
//         handleGenerateTeams();
//       }}
//       onOpenChange={setShowPaymentDialog}
//       open={showPaymentDialog}
//     />
//   );

//   return {
//     generatedTeams,
//     isGenerating,
//     generateButton,
//     paymentDialog,
//     error,
//     setError,
//     fetchSavedTeams,
//     setGeneratedTeams
//   };
// };









// "use client";
// import { useState, useCallback, useMemo, useEffect } from "react";
// import { PaymentDialog } from "./PaymentDialog";
// import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";
// import { db } from "@/lib/firebase";
// import { 
//   doc, 
//   runTransaction, 
//   increment, 
//   setDoc, 
//   collection, 
//   query, 
//   orderBy, 
//   getDocs,
//   limit
// } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";

// interface TeamGeneratorProps {
//   team1?: Team;
//   team2?: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate: (newBalance: number) => void;
//   matchId: string;
// }

// interface EnhancedPlayerDetail extends PlayerDetail {
//   roleOrder: number;
//   selectedBy: number;
//   selCapPerc?: number;
//   selVcPerc?: number;
// }

// export const useTeamGenerator = ({ 
//   team1, 
//   team2, 
//   teamCount, 
//   riskLevel,
//   userBalance,
//   onBalanceUpdate,
//   matchId
// }: TeamGeneratorProps) => {
//   const { user } = useUser();
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [roleCounts, setRoleCounts] = useState({
//     wk: 0,
//     battingAllrounders: 0,
//     bowlingAllrounders: 0,
//     bowlers: 0
//   });

//   const MAX_TEAMS_PER_MATCH = 20;
//   const requiredCredits = useMemo(() => teamCount * 10, [teamCount]);
//   const needsPayment = useMemo(() => userBalance < requiredCredits, [userBalance, requiredCredits]);
//   const paymentAmount = useMemo(() => Math.max(requiredCredits - userBalance, 50), [requiredCredits, userBalance]);
//   const localStorageKey = useMemo(() => `matchTeams_${matchId}_${user?.id}`, [matchId, user?.id]);

//   // Load from localStorage and Firestore on mount
//   useEffect(() => {
//     const loadTeams = async () => {
//       if (!matchId || !user?.id) return;
      
//       try {
//         // Check localStorage first
//         const savedTeams = localStorage.getItem(localStorageKey);
//         if (savedTeams) {
//           setGeneratedTeams(JSON.parse(savedTeams));
//           return;
//         }

//         // If not in localStorage, fetch from Firestore
//         const teams = await fetchSavedTeams();
//         if (teams.length > 0) {
//           setGeneratedTeams(teams);
//           localStorage.setItem(localStorageKey, JSON.stringify(teams));
//         }
//       } catch (err) {
//         console.error("Failed to load teams:", err);
//       }
//     };

//     loadTeams();
//   }, [localStorageKey, matchId, user?.id]);

//   const getPlayerPool = useCallback((): EnhancedPlayerDetail[] => {
//     if (!team1 || !team2) return [];
    
//     return [
//       ...(team1.playerDetails || []).filter(p => !p.substitute && p.select !== false),
//       ...(team2.playerDetails || []).filter(p => !p.substitute && p.select !== false)
//     ].map(p => ({
//       ...p,
//       roleOrder: getRoleOrder(p.role),
//       selectedBy: p.selectedBy || 0.1,
//       selCapPerc: p.selCapPerc || 0.1,
//       selVcPerc: p.selVcPerc || 0.1
//     }));
//   }, [team1, team2]);

//   const getRoleOrder = (role: string): number => {
//     const normalized = normalizeRole(role);
//     switch(normalized) {
//       case 'WK-Batsman': return 1;
//       case 'Batsman': return 2;
//       case 'Batting Allrounder': return 2;
//       case 'Bowling Allrounder': return 3;
//       case 'Bowler': return 4;
//       default: return 4;
//     }
//   };

//   const normalizeRole = (role: string): string => {
//     const roleMap: Record<string, string> = {
//       'All-Rounder': 'Bowling Allrounder',
//       'Batsman': 'Batsman',
//       'Batsman Allrounder': 'Batting Allrounder',
//       'Bowler Allrounder': 'Bowling Allrounder',
//       'Wicketkeeper': 'WK-Batsman',
//       'WK': 'WK-Batsman'
//     };
//     return roleMap[role] || role;
//   };

//   const calculatePlayerScore = (player: EnhancedPlayerDetail, forCaptaincy = false) => {
//     const baseScore = forCaptaincy ? 
//       (player.selCapPerc || player.selectedBy) : 
//       (player.selectedBy);
    
//     const riskFactor = 0.5 + (0.5 * (riskLevel / 100)) + (Math.random() * 0.3);
//     return baseScore * riskFactor;
//   };

//   const createBalancedTeam = useCallback((players: EnhancedPlayerDetail[], existingTeamCount: number) => {
//     if (!team1 || !team2) return null;
    
//     const MAX_ATTEMPTS = 500;
//     const team1Short = team1.shortName || 'T1';
//     const team2Short = team2.shortName || 'T2';
    
//     const availablePlayers = players.filter(p => 
//       p.selectedBy !== undefined && p.selectedBy > 0
//     );

//     const sortedPlayers = [...availablePlayers].sort((a, b) => 
//       (b.selectedBy || 0) - (a.selectedBy || 0)
//     );

//     let lastFailedReason = '';
//     let attempts = 0;
//     while (attempts < MAX_ATTEMPTS) {
//       attempts++;
//       const teamComposition = {
//         'WK-Batsman': 0,
//         'Batsman': 0,
//         'Batting Allrounder': 0,
//         'Bowling Allrounder': 0,
//         'Bowler': 0,
//         [team1Short]: 0,
//         [team2Short]: 0,
//         overseas: 0,
//         totalScore: 0
//       };

//       const poolSize = Math.ceil(sortedPlayers.length * (riskLevel < 30 ? 0.2 : riskLevel < 70 ? 0.4 : 0.6));
      
//       const captainPool = sortedPlayers
//         .slice(0, poolSize)
//         .sort((a, b) => calculatePlayerScore(b, true) - calculatePlayerScore(a, true));
      
//       const viceCaptainPool = sortedPlayers
//         .slice(0, poolSize * 2)
//         .sort((a, b) => calculatePlayerScore(b, true) - calculatePlayerScore(a, true));

//       const captain = captainPool[Math.floor(Math.random() * Math.min(captainPool.length, 5))];
//       const viceCaptain = viceCaptainPool.find(p => p.id !== captain?.id) || captainPool[0];

//       if (!captain || !viceCaptain) {
//         lastFailedReason = 'Could not select captain/vice-captain';
//         continue;
//       }

//       const teamPlayers: EnhancedPlayerDetail[] = [captain, viceCaptain];
      
//       [captain, viceCaptain].forEach(player => {
//         const role = normalizeRole(player.role);
//         teamComposition[role]++;
//         teamComposition[player.teamName === team1.name ? team1Short : team2Short]++;
//         if (player.isOverseas) teamComposition.overseas++;
//         teamComposition.totalScore += calculatePlayerScore(player);
//       });

//       const remainingPlayers = sortedPlayers.filter(p => 
//         p.id !== captain.id && p.id !== viceCaptain.id
//       );

//       while (teamPlayers.length < 11 && remainingPlayers.length > 0) {
//         const neededRoles = getNeededRoles(teamComposition);
//         const rolesToConsider = neededRoles.length > 0 ? neededRoles : 
//           ['Batsman', 'Batting Allrounder', 'Bowling Allrounder', 'Bowler'];
        
//         let candidates = remainingPlayers.filter(p => {
//           const role = normalizeRole(p.role);
//           const team = p.teamName === team1.name ? team1Short : team2Short;
//           const isCriticalNeed = neededRoles.length > 0 && neededRoles.includes(role);
          
//           return (
//             (neededRoles.length === 0 || isCriticalNeed) &&
//             (teamComposition[team] < 8 || isCriticalNeed) &&
//             (!p.isOverseas || teamComposition.overseas < 5 || isCriticalNeed)
//           );
//         });

//         if (candidates.length === 0 && neededRoles.length > 0) {
//           candidates = remainingPlayers.filter(p => 
//             neededRoles.includes(normalizeRole(p.role))
//           );
//         }

//         if (candidates.length === 0) {
//           candidates = remainingPlayers;
//         }

//         if (candidates.length === 0) {
//           lastFailedReason = `No candidates found (needed: ${neededRoles.join(', ')})`;
//           break;
//         }

//         let selectedPlayer;
//         if (riskLevel < 40) {
//           const topCount = Math.ceil(candidates.length * 0.3);
//           candidates = candidates.slice(0, topCount);
//           selectedPlayer = candidates[0];
//         } else if (riskLevel < 70) {
//           const topCount = Math.ceil(candidates.length * 0.5);
//           const topCandidates = candidates.slice(0, topCount);
//           const totalWeight = topCandidates.reduce((sum, p) => sum + (p.selectedBy || 0.1), 0);
//           let random = Math.random() * totalWeight;
//           for (const player of topCandidates) {
//             random -= player.selectedBy || 0.1;
//             if (random <= 0) {
//               selectedPlayer = player;
//               break;
//             }
//           }
//           selectedPlayer = selectedPlayer || topCandidates[0];
//         } else {
//           const totalWeight = candidates.reduce((sum, p) => sum + (p.selectedBy || 0.1), 0);
//           let random = Math.random() * totalWeight;
//           for (const player of candidates) {
//             random -= player.selectedBy || 0.1;
//             if (random <= 0) {
//               selectedPlayer = player;
//               break;
//             }
//           }
//           selectedPlayer = selectedPlayer || candidates[0];
//         }

//         if (!selectedPlayer) {
//           lastFailedReason = 'Failed to select player from candidates';
//           break;
//         }

//         teamPlayers.push(selectedPlayer);
//         const role = normalizeRole(selectedPlayer.role);
//         teamComposition[role]++;
//         teamComposition[selectedPlayer.teamName === team1.name ? team1Short : team2Short]++;
//         if (selectedPlayer.isOverseas) teamComposition.overseas++;
//         teamComposition.totalScore += calculatePlayerScore(selectedPlayer);

//         const index = remainingPlayers.findIndex(p => p.id === selectedPlayer.id);
//         if (index !== -1) remainingPlayers.splice(index, 1);
//       }

//       if (!validateTeam(teamPlayers, teamComposition, team1Short, team2Short)) {
//         continue;
//       }

//       return {
//         players: [...teamPlayers].sort((a, b) => (a.roleOrder || 4) - (b.roleOrder || 4)),
//         captain,
//         viceCaptain,
//         substitutes: [],
//         teamName: `Team ${existingTeamCount + 1}`,
//         teamComposition,
//         riskLevel,
//         matchId,
//         createdAt: new Date().toISOString()
//       };
//     }

//     console.error(`Team generation failed after ${MAX_ATTEMPTS} attempts. Last reason: ${lastFailedReason}`);
//     return null;
//   }, [team1, team2, riskLevel, matchId]);

//   const getNeededRoles = (composition: any) => {
//     const roleRequirements = [
//       { role: 'WK-Batsman', min: 1 },
//       { role: 'Batsman', min: 2 },
//       { role: 'Batting Allrounder', min: 1 },
//       { role: 'Bowling Allrounder', min: 1 },
//       { role: 'Bowler', min: 3 }
//     ];
    
//     return roleRequirements
//       .filter(r => composition[r.role] < r.min)
//       .map(r => r.role);
//   };

//   const validateTeam = (players: EnhancedPlayerDetail[], composition: any, team1Short: string, team2Short: string) => {
//     if (players.length !== 11) {
//       return false;
//     }
//     if (composition.overseas > 5) {
//       return false;
//     }
    
//     const wkCount = composition['WK-Batsman'];
//     const batCount = composition['Batsman'] + composition['Batting Allrounder'];
//     const bowlCount = composition['Bowler'] + composition['Bowling Allrounder'];
    
//     return (
//       wkCount >= 1 &&
//       batCount >= 3 &&
//       bowlCount >= 3 &&
//       composition[team1Short] >= 3 && 
//       composition[team2Short] >= 3 &&
//       composition[team1Short] <= 8 &&
//       composition[team2Short] <= 8
//     );
//   };

//   const getTeamCountForMatch = async (): Promise<number> => {
//     if (!user || !matchId) return 0;
    
//     try {
//       const q = query(
//         collection(db, "users", user.id, "matches", matchId, "teams"),
//         limit(MAX_TEAMS_PER_MATCH)
//       );
//       const querySnapshot = await getDocs(q);
//       return querySnapshot.size;
//     } catch (err) {
//       console.error("Failed to count teams:", err);
//       return 0;
//     }
//   };

//   const saveTeamToFirestore = async (team: GeneratedTeam) => {
//     if (!user || !matchId) return;
    
//     try {
//       const teamsCount = await getTeamCountForMatch();
//       if (teamsCount >= MAX_TEAMS_PER_MATCH) {
//         throw new Error(`Maximum of ${MAX_TEAMS_PER_MATCH} teams reached for this match`);
//       }

//       const teamData = {
//         ...team,
//         userId: user.id,
//         userEmail: user.primaryEmailAddress?.emailAddress || '',
//         matchName: `${team1?.name} vs ${team2?.name}`,
//         team1ShortName: team1?.shortName || team1?.name.split(' ').map(n => n[0]).join(''),
//         team2ShortName: team2?.shortName || team2?.name.split(' ').map(n => n[0]).join(''),
//         team1Logo: team1?.logo || '/fallback-team.png',
//         team2Logo: team2?.logo || '/fallback-team.png'
//       };

//       const matchTeamsRef = collection(db, "users", user.id, "matches", matchId, "teams");
//       const teamRef = doc(matchTeamsRef);
      
//       await setDoc(teamRef, teamData);
//       return teamRef.id;
//     } catch (err) {
//       console.error("Failed to save team:", err);
//       throw err;
//     }
//   };

//   const fetchSavedTeams = useCallback(async (): Promise<GeneratedTeam[]> => {
//     if (!user || !matchId) return [];
    
//     try {
//       const q = query(
//         collection(db, "users", user.id, "matches", matchId, "teams"),
//         orderBy("createdAt", "desc"),
//         limit(MAX_TEAMS_PER_MATCH)
//       );
//       const querySnapshot = await getDocs(q);
//       const teams = querySnapshot.docs.map(doc => ({
//         ...doc.data() as GeneratedTeam,
//         id: doc.id
//       }));
      
//       return teams;
//     } catch (err) {
//       console.error("Failed to fetch saved teams:", err);
//       return [];
//     }
//   }, [user, matchId]);

//   const handleGenerateTeams = useCallback(async () => {
//     if (!team1 || !team2) {
//       setError("Select both teams first");
//       return;
//     }

//     if (!user) {
//       setError("Please sign in to generate teams");
//       return;
//     }

//     const currentTeamCount = await getTeamCountForMatch();
//     if (currentTeamCount >= MAX_TEAMS_PER_MATCH) {
//       setError(`You've reached the maximum of ${MAX_TEAMS_PER_MATCH} teams for this match`);
//       return;
//     }

//     const remainingTeamSlots = MAX_TEAMS_PER_MATCH - currentTeamCount;
//     const teamsToGenerate = Math.min(teamCount, remainingTeamSlots);

//     if (teamsToGenerate <= 0) {
//       setError(`You've reached the maximum of ${MAX_TEAMS_PER_MATCH} teams for this match`);
//       return;
//     }

//     if (needsPayment) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     const allPlayers = getPlayerPool();

//     const currentRoleCounts = {
//       wk: allPlayers.filter(p => normalizeRole(p.role) === 'WK-Batsman').length,
//       battingAllrounders: allPlayers.filter(p => normalizeRole(p.role) === 'Batting Allrounder').length,
//       bowlingAllrounders: allPlayers.filter(p => normalizeRole(p.role) === 'Bowling Allrounder').length,
//       bowlers: allPlayers.filter(p => normalizeRole(p.role) === 'Bowler').length
//     };
//     setRoleCounts(currentRoleCounts);

//     const errors = [];
//     if (currentRoleCounts.wk < 1) errors.push("1 Wicket-Keeper (WK-Batsman)");
//     if (currentRoleCounts.battingAllrounders < 3) errors.push("3 Batting Allrounders");
//     if (currentRoleCounts.bowlingAllrounders < 2) errors.push("2 Bowling Allrounders");
//     if (currentRoleCounts.bowlers < 3) errors.push("3 Bowlers");

//     if (errors.length > 0) {
//       setError(`Need at least ${errors.join(", ")}`);
//       return;
//     }

//     if (allPlayers.length < 11) {
//       setError(`Not enough players (${allPlayers.length}/11). Please check your filters.`);
//       return;
//     }

//     setIsGenerating(true);
//     setError(null);

//     try {
//       await runTransaction(db, async (transaction) => {
//         const userRef = doc(db, "users", user.id);
//         const userDoc = await transaction.get(userRef);
        
//         if (!userDoc.exists()) throw new Error("User not found");
//         if ((userDoc.data().credits || 0) < requiredCredits) {
//           throw new Error("Insufficient balance");
//         }
        
//         transaction.update(userRef, {
//           credits: increment(-requiredCredits)
//         });
//       });

//       const newTeams: GeneratedTeam[] = [];
//       const TOTAL_ATTEMPTS = teamsToGenerate * 100;
//       let attempts = 0;

//       while (newTeams.length < teamsToGenerate && attempts < TOTAL_ATTEMPTS) {
//         attempts++;
//         const team = createBalancedTeam(allPlayers, currentTeamCount + newTeams.length);
//         if (team) {
//           const teamId = await saveTeamToFirestore(team);
//           newTeams.push({ ...team, id: teamId });
//         }
//       }

//       if (newTeams.length === 0) {
//         const playerCounts = {
//           total: allPlayers.length,
//           wk: allPlayers.filter(p => normalizeRole(p.role) === 'WK-Batsman').length,
//           batsmen: allPlayers.filter(p => ['Batsman', 'Batting Allrounder'].includes(normalizeRole(p.role))).length,
//           bowlers: allPlayers.filter(p => ['Bowler', 'Bowling Allrounder'].includes(normalizeRole(p.role))).length
//         };
        
//         throw new Error(
//           `Failed to generate valid teams after ${TOTAL_ATTEMPTS} attempts.\n` +
//           `Player counts: ${JSON.stringify(playerCounts, null, 2)}\n` +
//           `Try adjusting your risk level or ensuring you have enough players of each role.`
//         );
//       }

//       // Update both state and localStorage
//       const updatedTeams = [...newTeams, ...generatedTeams];
//       setGeneratedTeams(updatedTeams);
//       localStorage.setItem(localStorageKey, JSON.stringify(updatedTeams));
//       onBalanceUpdate(userBalance - requiredCredits);
//     } catch (err: any) {
//       setError(err.message || "Failed to generate teams");
//     } finally {
//       setIsGenerating(false);
//     }
//   }, [
//     team1, team2, teamCount, riskLevel, user, 
//     userBalance, requiredCredits, needsPayment, 
//     onBalanceUpdate, createBalancedTeam, matchId,
//     fetchSavedTeams, getPlayerPool, generatedTeams,
//     localStorageKey
//   ]);

//   const generateButton = (
//     <div className="space-y-2">
//       <button
//         onClick={handleGenerateTeams}
//         disabled={isGenerating || !team1 || !team2}
//         className={`
//           w-full px-4 py-3 rounded-md font-bold
//           ${isGenerating ? 'bg-gray-500' : 
//            needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' : 
//            'bg-blue-500 hover:bg-blue-600'}
//           text-white transition-colors
//         `}
//       >
//         {isGenerating ? (
//           <span className="flex items-center justify-center gap-2">
//             <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//             Generating...
//           </span>
//         ) : !team1 || !team2 ? (
//           "Select both teams"
//         ) : needsPayment ? (
//           `Add ₹${paymentAmount} to Generate`
//         ) : (
//           `Generate ${teamCount} Teams (₹${requiredCredits})`
//         )}
//       </button>

//       <div className="flex justify-between text-sm">
//         <span>Your Credits: ₹{userBalance}</span>
//         {needsPayment ? (
//           <span className="text-yellow-500">Need ₹{paymentAmount} more</span>
//         ) : (
//           <span className="text-green-500">Sufficient balance</span>
//         )}
//       </div>

//       {error && (
//         <div className="text-red-500 text-sm p-2 bg-red-50 rounded-lg">
//           <p className="font-medium">{error}</p>
//           {error.includes("Need at least") && (
//             <div className="mt-2 text-xs">
//               <p>Current player counts:</p>
//               <ul className="list-disc pl-5">
//                 <li>WK-Batsman: {roleCounts.wk} (min 1)</li>
//                 <li>Batting Allrounders: {roleCounts.battingAllrounders} (min 3)</li>
//                 <li>Bowling Allrounders: {roleCounts.bowlingAllrounders} (min 2)</li>
//                 <li>Bowlers: {roleCounts.bowlers} (min 3)</li>
//               </ul>
//             </div>
//           )}
//           {error.includes("Not enough players") && (
//             <p className="text-xs mt-1">Try adjusting player filters or selecting different teams</p>
//           )}
//         </div>
//       )}
//     </div>
//   );

//   const paymentDialog = showPaymentDialog && (
//     <PaymentDialog
//       currentBalance={userBalance}
//       requiredAmount={paymentAmount}
//       onPaymentSuccess={(amount) => {
//         onBalanceUpdate(userBalance + amount);
//         setShowPaymentDialog(false);
//         handleGenerateTeams();
//       }}
//       onOpenChange={setShowPaymentDialog}
//       open={showPaymentDialog}
//     />
//   );

//   return {
//     generatedTeams,
//     isGenerating,
//     generateButton,
//     paymentDialog,
//     error,
//     setError,
//     fetchSavedTeams,
//     setGeneratedTeams,
//     checkLineupChanges: useCallback(async () => {
//       if (!user?.id || !matchId) return;
      
//       try {
//         const savedTeams = localStorage.getItem(localStorageKey);
//         if (!savedTeams) return;
        
//         const teams: GeneratedTeam[] = JSON.parse(savedTeams);
//         const updatedTeams = [];
        
//         for (const team of teams) {
//           const playersWithStatus = team.players.map(player => ({
//             ...player,
//             isNowSubstitute: checkIfPlayerIsSubstitute(player.id)
//           }));
          
//           const nonPlayingPlayers = playersWithStatus.filter(p => p.isNowSubstitute);
//           if (nonPlayingPlayers.length === 0) {
//             updatedTeams.push(team);
//             continue;
//           }
          
//           const playingPlayers = playersWithStatus.filter(p => !p.isNowSubstitute);
//           const substitutes = team.substitutes || [];
//           let newPlayers = [...playingPlayers];
          
//           for (const nonPlayer of nonPlayingPlayers) {
//             const replacement = substitutes.find(sub => 
//               normalizeRole(sub.role) === normalizeRole(nonPlayer.role) &&
//               !newPlayers.some(p => p.id === sub.id)
//             );
            
//             if (replacement) {
//               newPlayers.push(replacement);
//             } else {
//               newPlayers.push(nonPlayer);
//             }
//           }
          
//           updatedTeams.push({
//             ...team,
//             players: newPlayers,
//             captain: newPlayers.find(p => p.id === team.captain.id) || team.captain,
//             viceCaptain: newPlayers.find(p => p.id === team.viceCaptain.id) || team.viceCaptain,
//             updatedAt: new Date().toISOString(),
//             hadChanges: nonPlayingPlayers.length > 0
//           });
//         }
        
//         localStorage.setItem(localStorageKey, JSON.stringify(updatedTeams));
//         setGeneratedTeams(updatedTeams);
        
//         if (updatedTeams.some(t => t.hadChanges)) {
//           alert('Some of your teams have been updated due to lineup changes');
//         }
        
//       } catch (err) {
//         console.error("Failed to check lineup changes:", err);
//       }
//     }, [user?.id, matchId, localStorageKey])
//   };
// };

// function checkIfPlayerIsSubstitute(playerId: string): boolean {
//   return Math.random() < 0.1;
// }



// "use client";
// import { useState, useCallback, useMemo, useEffect } from "react";
// import { PaymentDialog } from "./PaymentDialog";
// import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";
// import { db } from "@/lib/firebase";
// import { 
//   doc, 
//   runTransaction, 
//   increment, 
//   setDoc, 
//   collection, 
//   query, 
//   orderBy, 
//   getDocs,
//   limit
// } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";

// interface TeamGeneratorProps {
//   team1?: Team;
//   team2?: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate: (newBalance: number) => void;
//   matchId: string;
// }

// interface EnhancedPlayerDetail extends PlayerDetail {
//   roleOrder: number;
//   selectedBy: number;
//   selCapPerc?: number;
//   selVcPerc?: number;
//   normalizedRole: string;
// }

// export const useTeamGenerator = ({ 
//   team1, 
//   team2, 
//   teamCount, 
//   riskLevel,
//   userBalance,
//   onBalanceUpdate,
//   matchId
// }: TeamGeneratorProps) => {
//   const { user } = useUser();
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [roleCounts, setRoleCounts] = useState({
//     wk: 0,
//     batsmen: 0,
//     allrounders: 0,
//     bowlers: 0
//   });

//   const MAX_TEAMS_PER_MATCH = 20;
//   const requiredCredits = useMemo(() => teamCount * 10, [teamCount]);
//   const needsPayment = useMemo(() => userBalance < requiredCredits, [userBalance, requiredCredits]);
//   const paymentAmount = useMemo(() => Math.max(requiredCredits - userBalance, 50), [requiredCredits, userBalance]);
//   const localStorageKey = useMemo(() => `matchTeams_${matchId}_${user?.id}`, [matchId, user?.id]);

//   // Helper function: Get role order for sorting
//   const getRoleOrder = (role: string): number => {
//     const normalized = normalizeRole(role);
//     switch(normalized) {
//       case 'WK-Batsman': return 1;
//       case 'Batsman': return 2;
//       case 'Batting Allrounder': return 3;
//       case 'Bowling Allrounder': return 4;
//       case 'Bowler': return 5;
//       default: return 6;
//     }
//   };

//   // Helper function: Normalize role names
//   const normalizeRole = (role: string): string => {
//     if (!role) return 'Bowler';
    
//     const lowerRole = role.toLowerCase().trim();
//     if (lowerRole.includes('keep') || lowerRole.includes('wk')) return 'WK-Batsman';
//     if (lowerRole.includes('bat') && lowerRole.includes('all')) return 'Batting Allrounder';
//     if (lowerRole.includes('bowl') && lowerRole.includes('all')) return 'Bowling Allrounder';
//     if (lowerRole.includes('bat')) return 'Batsman';
//     if (lowerRole.includes('bowl')) return 'Bowler';
//     if (lowerRole.includes('all')) return 'Bowling Allrounder';
    
//     return 'Bowler';
//   };

//   // Add this function definition with the other helper functions
//   const getNeededRoles = (composition: any, riskLevel: number): string[] => {
//     const neededRoles: string[] = [];
    
//     // Always need at least 1 WK
//     if (composition['WK-Batsman'] < 1) {
//       neededRoles.push('WK-Batsman');
//     }
    
//     // Risk-based role requirements
//     if (riskLevel < 50) {
//       // Balanced approach (6-5 team ratio)
//       if (composition['Batsman'] + composition['Batting Allrounder'] < 4) {
//         neededRoles.push('Batsman', 'Batting Allrounder');
//       }
//       if (composition['Bowler'] + composition['Bowling Allrounder'] < 4) {
//         neededRoles.push('Bowler', 'Bowling Allrounder');
//       }
//     } else {
//       // Aggressive approach (7-4 team ratio)
//       if (composition['Batsman'] + composition['Batting Allrounder'] < 5) {
//         neededRoles.push('Batsman', 'Batting Allrounder');
//       }
//       if (composition['Bowler'] + composition['Bowling Allrounder'] < 3) {
//         neededRoles.push('Bowler', 'Bowling Allrounder');
//       }
//     }
    
//     return neededRoles.length > 0 ? neededRoles : 
//       ['Batsman', 'Batting Allrounder', 'Bowling Allrounder', 'Bowler'];
//   };

//   // And the validation function
//   const validateTeamWithRatio = (
//     players: EnhancedPlayerDetail[],
//     composition: any,
//     team1Short: string,
//     team2Short: string,
//     teamRatio: { main: number; secondary: number }
//   ) => {
//     if (players.length !== 11) return false;
    
//     // Check team ratio
//     const mainTeam = composition[team1Short] >= composition[team2Short] ? team1Short : team2Short;
//     const secondaryTeam = mainTeam === team1Short ? team2Short : team1Short;
    
//     if (composition[mainTeam] !== teamRatio.main || composition[secondaryTeam] !== teamRatio.secondary) {
//       return false;
//     }
    
//     // Must have at least 1 WK-Batsman
//     if (composition['WK-Batsman'] < 1) return false;
    
//     // Must have at least 3 batsmen (including batting allrounders)
//     const batCount = composition['Batsman'] + composition['Batting Allrounder'];
//     if (batCount < 3) return false;
    
//     // Must have at least 3 bowlers (including bowling allrounders)
//     const bowlCount = composition['Bowler'] + composition['Bowling Allrounder'];
//     if (bowlCount < 3) return false;
    
//     // Overseas player limit
//     if (composition.overseas > 5) return false;
    
//     return true;
//   };

//   // Get player pool with enhanced data
//   const getPlayerPool = useCallback((): EnhancedPlayerDetail[] => {
//     if (!team1 || !team2) return [];
    
//     // Get all playing players (non-substitutes)
//     const team1Players = team1.playerDetails?.filter(p => p.substitute === false) || [];
//     const team2Players = team2.playerDetails?.filter(p => p.substitute === false) || [];
    
//     const allPlayers = [...team1Players, ...team2Players].map(p => ({
//       ...p,
//       roleOrder: getRoleOrder(p.role),
//       normalizedRole: normalizeRole(p.role),
//       selectedBy: p.selectedBy || 0.1,
//       selCapPerc: p.selCapPerc || 0.1,
//       selVcPerc: p.selVcPerc || 0.1,
//       isPlaying: true
//     }));

//     // Calculate role counts for validation
//     const wkPlayers = allPlayers.filter(p => p.normalizedRole === 'WK-Batsman');
//     const batPlayers = allPlayers.filter(p => 
//       ['Batsman', 'Batting Allrounder'].includes(p.normalizedRole)
//     );
//     const bowlPlayers = allPlayers.filter(p => 
//       ['Bowler', 'Bowling Allrounder'].includes(p.normalizedRole)
//     );
//     const allPlayersCount = allPlayers.filter(p => 
//       ['Bowling Allrounder', 'Batting Allrounder'].includes(p.normalizedRole)
//     );

//     setRoleCounts({
//       wk: wkPlayers.length,
//       batsmen: batPlayers.length,
//       allrounders: allPlayersCount.length,
//       bowlers: bowlPlayers.length
//     });

//     // Validate minimum player requirements
//     if (wkPlayers.length < 1) {
//       setError(`Need at least 1 WK-Batsman (available: ${wkPlayers.length})`);
//       return [];
//     }
//     if (batPlayers.length < 3) {
//       setError(`Need at least 3 Batsmen (available: ${batPlayers.length})`);
//       return [];
//     }
//     if (bowlPlayers.length < 3) {
//       setError(`Need at least 3 Bowlers (available: ${bowlPlayers.length})`);
//       return [];
//     }

//     return allPlayers;
//   }, [team1, team2]);

//   // Risk-based player scoring
//   const calculatePlayerScore = (player: EnhancedPlayerDetail, forCaptaincy = false) => {
//     const baseScore = forCaptaincy ? 
//       (player.selCapPerc || player.selectedBy) : 
//       (player.selectedBy);
    
//     // Risk factor varies based on risk level
//     let riskFactor = 1;
//     if (riskLevel < 20) {
//       riskFactor = 1 + (Math.random() * 0.1); // Very safe
//     } else if (riskLevel < 40) {
//       riskFactor = 0.9 + (Math.random() * 0.2); // Safe
//     } else if (riskLevel < 60) {
//       riskFactor = 0.8 + (Math.random() * 0.4); // Moderate
//     } else if (riskLevel < 80) {
//       riskFactor = 0.6 + (Math.random() * 0.6); // Risky
//     } else {
//       riskFactor = 0.4 + (Math.random() * 0.8); // Very risky
//     }
    
//     return baseScore * riskFactor;
//   };

//   // Risk-based team composition
//   const getTeamCompositionByRisk = () => {
//     if (riskLevel < 20) return { wk: 1, bat: 4, ar: 2, bowl: 4 }; // Very safe
//     if (riskLevel < 40) return { wk: 1, bat: 3, ar: 3, bowl: 4 }; // Safe
//     if (riskLevel < 60) return { wk: 1, bat: 3, ar: 4, bowl: 3 }; // Moderate
//     if (riskLevel < 80) return { wk: 1, bat: 5, ar: 3, bowl: 2 }; // Risky
    
//     // Very risky - random extreme combinations
//     return Math.random() > 0.5 
//       ? { wk: 1, bat: 6, ar: 2, bowl: 2 } 
//       : { wk: 1, bat: 2, ar: 4, bowl: 4 };
//   };

//   // Weighted random selection
//   const weightedRandomPick = (players: EnhancedPlayerDetail[], field: 'selectedBy' | 'selCapPerc' | 'selVcPerc') => {
//     const totalWeight = players.reduce((sum, p) => sum + (p[field] || 0.1), 0);
//     let random = Math.random() * totalWeight;
    
//     for (const player of players) {
//       random -= player[field] || 0.1;
//       if (random <= 0) return player;
//     }
    
//     return players[0];
//   };

//   // Select player based on risk level
//   const selectPlayerByRisk = (players: EnhancedPlayerDetail[], risk: number) => {
//     if (players.length === 0) return null;
    
//     // Sort by selectedBy percentage
//     const sorted = [...players].sort((a, b) => (b.selectedBy || 0) - (a.selectedBy || 0));

//     if (risk < 20) {
//       // Very safe - top 20% of players
//       const topCount = Math.max(1, Math.ceil(sorted.length * 0.2));
//       return sorted[Math.floor(Math.random() * topCount)];
//     } else if (risk < 40) {
//       // Safe - top 40% with weighted random
//       const topCount = Math.max(1, Math.ceil(sorted.length * 0.4));
//       return weightedRandomPick(sorted.slice(0, topCount), 'selectedBy');
//     } else if (risk < 60) {
//       // Moderate - top 60% with some randomness
//       const topCount = Math.max(1, Math.ceil(sorted.length * 0.6));
//       return Math.random() > 0.7 
//         ? sorted[Math.floor(Math.random() * sorted.length)]
//         : weightedRandomPick(sorted.slice(0, topCount), 'selectedBy');
//     } else if (risk < 80) {
//       // Risky - more randomness
//       return Math.random() > 0.5 
//         ? weightedRandomPick(sorted, 'selectedBy')
//         : sorted[Math.floor(Math.random() * sorted.length)];
//     } else {
//       // Very risky - completely random
//       return sorted[Math.floor(Math.random() * sorted.length)];
//     }
//   };

//   // Select captain and vice-captain based on risk level
//   const selectCaptainAndViceCaptain = (players: EnhancedPlayerDetail[], risk: number) => {
//     // Get top 30% of players by selection percentage
//     const topPlayers = players.slice(0, Math.ceil(players.length * 0.3));
    
//     let captain, viceCaptain;

//     if (risk < 20) {
//       // Very safe - highest selected captain and vice-captain
//       captain = topPlayers[0];
//       viceCaptain = topPlayers[1] || topPlayers[0];
//     } else if (risk < 40) {
//       // Safe - highest captain, vice-captain from different role
//       captain = topPlayers[0];
//       viceCaptain = topPlayers.find(p => 
//         p.normalizedRole !== captain.normalizedRole
//       ) || topPlayers[1] || topPlayers[0];
//     } else if (risk < 60) {
//       // Moderate - captain from top 3, VC from top 5 different role
//       captain = topPlayers[Math.floor(Math.random() * Math.min(3, topPlayers.length))];
//       viceCaptain = topPlayers
//         .slice(0, 5)
//         .find(p => p.normalizedRole !== captain.normalizedRole) || 
//         topPlayers[1] || topPlayers[0];
//     } else if (risk < 80) {
//       // Risky - captain from top 5, VC from top 10
//       captain = topPlayers[Math.floor(Math.random() * Math.min(5, topPlayers.length))];
//       viceCaptain = topPlayers[Math.floor(Math.random() * Math.min(10, topPlayers.length))];
//     } else {
//       // Very risky - random captain and VC from top 30%
//       captain = topPlayers[Math.floor(Math.random() * topPlayers.length)];
//       viceCaptain = topPlayers.find(p => p.id !== captain.id) || topPlayers[0];
//     }

//     return { captain, viceCaptain };
//   };

//   // Team validation
//   const validateTeam = (players: EnhancedPlayerDetail[], composition: any, team1Short: string, team2Short: string) => {
//     if (players.length !== 11) return false;
    
//     // Must have at least 1 WK-Batsman
//     if (composition['WK-Batsman'] < 1) return false;
    
//     // Must have at least 3 batsmen (including batting allrounders)
//     const batCount = composition['Batsman'] + composition['Batting Allrounder'];
//     if (batCount < 3) return false;
    
//     // Must have at least 3 bowlers (including bowling allrounders)
//     const bowlCount = composition['Bowler'] + composition['Bowling Allrounder'];
//     if (bowlCount < 3) return false;
    
//     // Team balance (3-8 players from each team)
//     if (composition[team1Short] < 3 || composition[team2Short] < 3) return false;
//     if (composition[team1Short] > 8 || composition[team2Short] > 8) return false;
    
//     // Overseas player limit
//     if (composition.overseas > 5) return false;
    
//     return true;
//   };

//   // Create team based on risk level
//   const createBalancedTeam = useCallback((players: EnhancedPlayerDetail[], existingTeamCount: number) => {
//     if (!team1 || !team2) return null;
    
//     const MAX_ATTEMPTS = 200;
//     const team1Short = team1.shortName || 'T1';
//     const team2Short = team2.shortName || 'T2';
    
//     // For risk 50-100, use 7-4 team ratio (more aggressive)
//     const teamRatio = riskLevel >= 50 ? { main: 7, secondary: 4 } : { main: 6, secondary: 5 };
    
//     // Filter available players (non-substitutes)
//     const availablePlayers = players.filter(p => 
//       p.selectedBy !== undefined && p.selectedBy > 0 && p.substitute === false
//     );
    
//     if (availablePlayers.length < 11) {
//       setError(`Not enough available players (${availablePlayers.length}/11)`);
//       return null;
//     }
  
//     // Sort players by selection percentage
//     const sortedPlayers = [...availablePlayers].sort((a, b) => (b.selectedBy || 0) - (a.selectedBy || 0));
  
//     let attempts = 0;
//     while (attempts < MAX_ATTEMPTS) {
//       attempts++;
      
//       // Decide which team will have more players (main team)
//       const mainTeam = Math.random() > 0.5 ? team1Short : team2Short;
//       const secondaryTeam = mainTeam === team1Short ? team2Short : team1Short;
      
//       const teamComposition = {
//         'WK-Batsman': 0,
//         'Batsman': 0,
//         'Batting Allrounder': 0,
//         'Bowling Allrounder': 0,
//         'Bowler': 0,
//         [team1Short]: 0,
//         [team2Short]: 0,
//         overseas: 0,
//         totalScore: 0
//       };
  
//       // 1. Select Captain and Vice-Captain based on risk
//       const { captain, viceCaptain } = selectCaptainAndViceCaptain(sortedPlayers, riskLevel);
//       if (!captain || !viceCaptain) continue;
  
//       const teamPlayers: EnhancedPlayerDetail[] = [captain, viceCaptain];
      
//       // Update composition
//       [captain, viceCaptain].forEach(player => {
//         const role = player.normalizedRole;
//         teamComposition[role]++;
//         teamComposition[player.teamName === team1.name ? team1Short : team2Short]++;
//         if (player.isOverseas) teamComposition.overseas++;
//         teamComposition.totalScore += calculatePlayerScore(player);
//       });
  
//       // Remove captain and vice-captain from remaining players
//       const remainingPlayers = sortedPlayers.filter(p => 
//         p.id !== captain.id && p.id !== viceCaptain.id
//       );
  
//       // 2. Ensure Wicket-keeper
//       if (teamComposition['WK-Batsman'] === 0) {
//         const wkPlayers = remainingPlayers.filter(p => p.normalizedRole === 'WK-Batsman');
//         if (wkPlayers.length === 0) continue;
        
//         const wkPlayer = selectPlayerByRisk(wkPlayers, riskLevel);
//         teamPlayers.push(wkPlayer);
//         teamComposition['WK-Batsman']++;
//         teamComposition[wkPlayer.teamName === team1.name ? team1Short : team2Short]++;
//         if (wkPlayer.isOverseas) teamComposition.overseas++;
//         teamComposition.totalScore += calculatePlayerScore(wkPlayer);
        
//         remainingPlayers.splice(remainingPlayers.findIndex(p => p.id === wkPlayer.id), 1);
//       }
  
//       // 3. Fill remaining spots enforcing team ratio
//       while (teamPlayers.length < 11 && remainingPlayers.length > 0) {
//         // Check current team counts
//         const mainTeamCount = teamComposition[mainTeam];
//         const secondaryTeamCount = teamComposition[secondaryTeam];
        
//         // Determine which team we need to pick from
//         let allowedTeams = [];
//         if (mainTeamCount < teamRatio.main) {
//           allowedTeams.push(mainTeam);
//         }
//         if (secondaryTeamCount < teamRatio.secondary) {
//           allowedTeams.push(secondaryTeam);
//         }
        
//         // If we've filled our team ratio, just take any player
//         if (allowedTeams.length === 0) {
//           allowedTeams = [mainTeam, secondaryTeam];
//         }
  
//         // Determine which roles we still need
//         const neededRoles = getNeededRoles(teamComposition, riskLevel);
        
//         // Filter candidates based on needed roles and team balance
//         let candidates = remainingPlayers.filter(p => {
//           const team = p.teamName === team1.name ? team1Short : team2Short;
//           const teamAllowed = allowedTeams.includes(team);
//           const overseasOK = !p.isOverseas || teamComposition.overseas < 5;
//           const roleNeeded = neededRoles.includes(p.normalizedRole);
          
//           return teamAllowed && overseasOK && roleNeeded;
//         });
  
//         // If no candidates for needed roles, relax role requirement
//         if (candidates.length === 0) {
//           candidates = remainingPlayers.filter(p => {
//             const team = p.teamName === team1.name ? team1Short : team2Short;
//             return allowedTeams.includes(team) && 
//                    (!p.isOverseas || teamComposition.overseas < 5);
//           });
//         }
  
//         // If still no candidates, take any remaining player from allowed teams
//         if (candidates.length === 0) {
//           candidates = remainingPlayers.filter(p => {
//             const team = p.teamName === team1.name ? team1Short : team2Short;
//             return allowedTeams.includes(team);
//           });
//         }
  
//         if (candidates.length === 0) break;
  
//         // Select player based on risk level
//         const selectedPlayer = selectPlayerByRisk(candidates, riskLevel);
//         if (!selectedPlayer) break;
  
//         teamPlayers.push(selectedPlayer);
//         const role = selectedPlayer.normalizedRole;
//         teamComposition[role]++;
//         teamComposition[selectedPlayer.teamName === team1.name ? team1Short : team2Short]++;
//         if (selectedPlayer.isOverseas) teamComposition.overseas++;
//         teamComposition.totalScore += calculatePlayerScore(selectedPlayer);
  
//         remainingPlayers.splice(remainingPlayers.findIndex(p => p.id === selectedPlayer.id), 1);
//       }
  
//       // Final validation
//       if (validateTeamWithRatio(teamPlayers, teamComposition, team1Short, team2Short, teamRatio)) {
//         return {
//           players: [...teamPlayers].sort((a, b) => (a.roleOrder || 6) - (b.roleOrder || 6)),
//           captain,
//           viceCaptain,
//           substitutes: [],
//           teamName: `Team ${existingTeamCount + 1}`,
//           teamComposition,
//           riskLevel,
//           matchId,
//           createdAt: new Date().toISOString()
//         };
//       }
//     }
  
//     console.error(`Team generation failed after ${MAX_ATTEMPTS} attempts`);
//     setError(`Failed to generate valid team after ${MAX_ATTEMPTS} attempts. Try adjusting risk level.`);
//     return null;
//   }, [team1, team2, riskLevel, matchId]);

//   // Get team count from Firestore
//   const getTeamCountForMatch = async (): Promise<number> => {
//     if (!user || !matchId) return 0;
    
//     try {
//       const q = query(
//         collection(db, "users", user.id, "matches", matchId, "teams"),
//         limit(MAX_TEAMS_PER_MATCH)
//       );
//       const querySnapshot = await getDocs(q);
//       return querySnapshot.size;
//     } catch (err) {
//       console.error("Failed to count teams:", err);
//       return 0;
//     }
//   };

//   // Save team to Firestore
//   const saveTeamToFirestore = async (team: GeneratedTeam) => {
//     if (!user || !matchId) return;
    
//     try {
//       const teamData = {
//         ...team,
//         userId: user.id,
//         userEmail: user.primaryEmailAddress?.emailAddress || '',
//         matchName: `${team1?.name} vs ${team2?.name}`,
//         team1ShortName: team1?.shortName || team1?.name.split(' ').map(n => n[0]).join(''),
//         team2ShortName: team2?.shortName || team2?.name.split(' ').map(n => n[0]).join(''),
//         team1Logo: team1?.logo || '/fallback-team.png',
//         team2Logo: team2?.logo || '/fallback-team.png'
//       };

//       const matchTeamsRef = collection(db, "users", user.id, "matches", matchId, "teams");
//       const teamRef = doc(matchTeamsRef);
      
//       await setDoc(teamRef, teamData);
//       return teamRef.id;
//     } catch (err) {
//       console.error("Failed to save team:", err);
//       throw err;
//     }
//   };

//   // Fetch saved teams from Firestore
//   const fetchSavedTeams = useCallback(async (): Promise<GeneratedTeam[]> => {
//     if (!user || !matchId) return [];
    
//     try {
//       const q = query(
//         collection(db, "users", user.id, "matches", matchId, "teams"),
//         orderBy("createdAt", "desc"),
//         limit(MAX_TEAMS_PER_MATCH)
//       );
//       const querySnapshot = await getDocs(q);
//       return querySnapshot.docs.map(doc => ({
//         ...doc.data() as GeneratedTeam,
//         id: doc.id
//       }));
//     } catch (err) {
//       console.error("Failed to fetch saved teams:", err);
//       return [];
//     }
//   }, [user, matchId]);

//   // Load teams on mount
//   useEffect(() => {
//     const loadTeams = async () => {
//       if (!matchId || !user?.id) return;
      
//       try {
//         // Check localStorage first
//         const savedTeams = localStorage.getItem(localStorageKey);
//         if (savedTeams) {
//           setGeneratedTeams(JSON.parse(savedTeams));
//           return;
//         }

//         // Fallback to Firestore
//         const teams = await fetchSavedTeams();
//         if (teams.length > 0) {
//           setGeneratedTeams(teams);
//           localStorage.setItem(localStorageKey, JSON.stringify(teams));
//         }
//       } catch (err) {
//         console.error("Failed to load teams:", err);
//       }
//     };

//     loadTeams();
//   }, [localStorageKey, matchId, user?.id, fetchSavedTeams]);

//   // Main team generation handler
//   const handleGenerateTeams = useCallback(async () => {
//     if (!team1 || !team2) {
//       setError("Select both teams first");
//       return;
//     }

//     if (!user) {
//       setError("Please sign in to generate teams");
//       return;
//     }

//     const currentTeamCount = await getTeamCountForMatch();
//     if (currentTeamCount >= MAX_TEAMS_PER_MATCH) {
//       setError(`You've reached the maximum of ${MAX_TEAMS_PER_MATCH} teams for this match`);
//       return;
//     }

//     const remainingTeamSlots = MAX_TEAMS_PER_MATCH - currentTeamCount;
//     const teamsToGenerate = Math.min(teamCount, remainingTeamSlots);

//     if (teamsToGenerate <= 0) {
//       setError(`You've reached the maximum of ${MAX_TEAMS_PER_MATCH} teams for this match`);
//       return;
//     }

//     if (needsPayment) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     const allPlayers = getPlayerPool();
//     if (allPlayers.length < 11) {
//       setError(`Not enough players (${allPlayers.length}/11). Please check your filters.`);
//       return;
//     }

//     setIsGenerating(true);
//     setError(null);

//     try {
//       // Deduct credits
//       await runTransaction(db, async (transaction) => {
//         const userRef = doc(db, "users", user.id);
//         const userDoc = await transaction.get(userRef);
        
//         if (!userDoc.exists()) throw new Error("User not found");
//         if ((userDoc.data().credits || 0) < requiredCredits) {
//           throw new Error("Insufficient balance");
//         }
        
//         transaction.update(userRef, {
//           credits: increment(-requiredCredits)
//         });
//       });

//       // Generate teams
//       const newTeams: GeneratedTeam[] = [];
//       const TOTAL_ATTEMPTS = teamsToGenerate * 100;
//       let attempts = 0;

//       while (newTeams.length < teamsToGenerate && attempts < TOTAL_ATTEMPTS) {
//         attempts++;
//         const team = createBalancedTeam(allPlayers, currentTeamCount + newTeams.length);
//         if (team) {
//           const teamId = await saveTeamToFirestore(team);
//           newTeams.push({ ...team, id: teamId });
//         }
//       }

//       if (newTeams.length === 0) {
//         throw new Error(
//           `Failed to generate valid teams after ${TOTAL_ATTEMPTS} attempts.\n` +
//           `Player counts: WK: ${roleCounts.wk}, Batsmen: ${roleCounts.batsmen}, ` +
//           `Allrounders: ${roleCounts.allrounders}, Bowlers: ${roleCounts.bowlers}\n` +
//           `Try adjusting your risk level or player filters.`
//         );
//       }

//       // Update state and storage
//       const updatedTeams = [...newTeams, ...generatedTeams];
//       setGeneratedTeams(updatedTeams);
//       localStorage.setItem(localStorageKey, JSON.stringify(updatedTeams));
//       onBalanceUpdate(userBalance - requiredCredits);
//     } catch (err: any) {
//       setError(err.message || "Failed to generate teams");
//     } finally {
//       setIsGenerating(false);
//     }
//   }, [
//     team1, team2, teamCount, riskLevel, user, 
//     userBalance, requiredCredits, needsPayment, 
//     onBalanceUpdate, createBalancedTeam, matchId,
//     fetchSavedTeams, getPlayerPool, generatedTeams,
//     localStorageKey, roleCounts, getTeamCountForMatch,
//     saveTeamToFirestore
//   ]);

//   // Check for lineup changes
//   const checkLineupChanges = useCallback(async () => {
//     if (!user?.id || !matchId) return;
    
//     try {
//       const savedTeams = localStorage.getItem(localStorageKey);
//       if (!savedTeams) return;
      
//       const teams: GeneratedTeam[] = JSON.parse(savedTeams);
//       const updatedTeams = [];
      
//       for (const team of teams) {
//         const playersWithStatus = team.players.map(player => ({
//           ...player,
//           isNowSubstitute: checkIfPlayerIsSubstitute(player.id)
//         }));
        
//         const nonPlayingPlayers = playersWithStatus.filter(p => p.isNowSubstitute);
//         if (nonPlayingPlayers.length === 0) {
//           updatedTeams.push(team);
//           continue;
//         }
        
//         const playingPlayers = playersWithStatus.filter(p => !p.isNowSubstitute);
//         const substitutes = team.substitutes || [];
//         let newPlayers = [...playingPlayers];
        
//         for (const nonPlayer of nonPlayingPlayers) {
//           const replacement = substitutes.find(sub => 
//             normalizeRole(sub.role) === normalizeRole(nonPlayer.role) &&
//             !newPlayers.some(p => p.id === sub.id)
//           );
          
//           if (replacement) {
//             newPlayers.push(replacement);
//           } else {
//             newPlayers.push(nonPlayer);
//           }
//         }
        
//         updatedTeams.push({
//           ...team,
//           players: newPlayers,
//           captain: newPlayers.find(p => p.id === team.captain.id) || team.captain,
//           viceCaptain: newPlayers.find(p => p.id === team.viceCaptain.id) || team.viceCaptain,
//           updatedAt: new Date().toISOString(),
//           hadChanges: nonPlayingPlayers.length > 0
//         });
//       }
      
//       localStorage.setItem(localStorageKey, JSON.stringify(updatedTeams));
//       setGeneratedTeams(updatedTeams);
      
//       if (updatedTeams.some(t => t.hadChanges)) {
//         alert('Some of your teams have been updated due to lineup changes');
//       }
      
//     } catch (err) {
//       console.error("Failed to check lineup changes:", err);
//     }
//   }, [user?.id, matchId, localStorageKey]);

//   // Helper function to check player status
//   const checkIfPlayerIsSubstitute = (playerId: string): boolean => {
//     // In a real implementation, you would check against current match data
//     return Math.random() < 0.1; // 10% chance for demo
//   };

//   // Generate button component
//   const generateButton = (
//     <div className="space-y-2">
//       <button
//         onClick={handleGenerateTeams}
//         disabled={isGenerating || !team1 || !team2}
//         className={`
//           w-full px-4 py-3 rounded-md font-bold
//           ${isGenerating ? 'bg-gray-500' : 
//            needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' : 
//            'bg-blue-500 hover:bg-blue-600'}
//           text-white transition-colors
//         `}
//       >
//         {isGenerating ? (
//           <span className="flex items-center justify-center gap-2">
//             <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//             Generating...
//           </span>
//         ) : !team1 || !team2 ? (
//           "Select both teams"
//         ) : needsPayment ? (
//           `Add ₹${paymentAmount} to Generate`
//         ) : (
//           `Generate ${teamCount} Teams (₹${requiredCredits})`
//         )}
//       </button>

//       <div className="flex justify-between text-sm">
//         <span>Your Credits: ₹{userBalance}</span>
//         {needsPayment ? (
//           <span className="text-yellow-500">Need ₹${paymentAmount} more</span>
//         ) : (
//           <span className="text-green-500">Sufficient balance</span>
//         )}
//       </div>

//       {error && (
//         <div className="text-red-500 text-sm p-2 bg-red-50 rounded-lg">
//           <p className="font-medium">{error}</p>
//           {error.includes("Player counts") && (
//             <div className="mt-2 text-xs">
//               <p>Current player counts:</p>
//               <ul className="list-disc pl-5">
//                 <li>WK-Batsman: {roleCounts.wk} (min 1)</li>
//                 <li>Batsmen: {roleCounts.batsmen} (min 3 including allrounders)</li>
//                 <li>Bowlers: {roleCounts.bowlers} (min 3 including allrounders)</li>
//               </ul>
//               <p className="mt-1">Try adjusting filters or risk level.</p>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );

//   // Payment dialog
//   const paymentDialog = showPaymentDialog && (
//     <PaymentDialog
//       currentBalance={userBalance}
//       requiredAmount={paymentAmount}
//       onPaymentSuccess={(amount) => {
//         onBalanceUpdate(userBalance + amount);
//         setShowPaymentDialog(false);
//         handleGenerateTeams();
//       }}
//       onOpenChange={setShowPaymentDialog}
//       open={showPaymentDialog}
//     />
//   );

//   return {
//     generatedTeams,
//     isGenerating,
//     generateButton,
//     paymentDialog,
//     error,
//     setError,
//     fetchSavedTeams,
//     setGeneratedTeams,
//     checkLineupChanges
//   };
// };










// "use client";
// import { useState, useCallback, useMemo, useEffect } from "react";
// import { PaymentDialog } from "./PaymentDialog";
// import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";
// import { db } from "@/lib/firebase";
// import { 
//   doc, 
//   runTransaction, 
//   increment, 
//   setDoc, 
//   collection, 
//   query, 
//   orderBy, 
//   getDocs,
//   limit
// } from "firebase/firestore";
// import { useUser } from "@clerk/nextjs";

// interface TeamGeneratorProps {
//   team1?: Team;
//   team2?: Team;
//   teamCount: number;
//   riskLevel: number;
//   userBalance: number;
//   onBalanceUpdate: (newBalance: number) => void;
//   matchId: string;
// }

// interface EnhancedPlayerDetail extends PlayerDetail {
//   roleOrder: number;
//   selectedBy: number;
//   selCapPerc?: number;
//   selVcPerc?: number;
//   normalizedRole: string;
// }

// export const useTeamGenerator = ({ 
//   team1, 
//   team2, 
//   teamCount, 
//   riskLevel,
//   userBalance,
//   onBalanceUpdate,
//   matchId
// }: TeamGeneratorProps) => {
//   const { user } = useUser();
//   const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showPaymentDialog, setShowPaymentDialog] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [roleCounts, setRoleCounts] = useState({
//     wk: 0,
//     batsmen: 0,
//     allrounders: 0,
//     bowlers: 0
//   });

//   const MAX_TEAMS_PER_MATCH = 20;
//   const requiredCredits = useMemo(() => teamCount * 10, [teamCount]);
//   const needsPayment = useMemo(() => userBalance < requiredCredits, [userBalance, requiredCredits]);
//   const paymentAmount = useMemo(() => Math.max(requiredCredits - userBalance, 50), [requiredCredits, userBalance]);
//   const localStorageKey = useMemo(() => `matchTeams_${matchId}_${user?.id}`, [matchId, user?.id]);

//   // Helper function: Get role order for sorting
//   const getRoleOrder = (role: string): number => {
//     const normalized = normalizeRole(role);
//     switch(normalized) {
//       case 'WK-Batsman': return 1;
//       case 'Batsman': return 2;
//       case 'Batting Allrounder': return 3;
//       case 'Bowling Allrounder': return 4;
//       case 'Bowler': return 5;
//       default: return 6;
//     }
//   };

//   // Helper function: Normalize role names
//   const normalizeRole = (role: string): string => {
//     if (!role) return 'Bowler';
    
//     const lowerRole = role.toLowerCase().trim();
//     if (lowerRole.includes('keep') || lowerRole.includes('wk')) return 'WK-Batsman';
//     if (lowerRole.includes('bat') && lowerRole.includes('all')) return 'Batting Allrounder';
//     if (lowerRole.includes('bowl') && lowerRole.includes('all')) return 'Bowling Allrounder';
//     if (lowerRole.includes('bat')) return 'Batsman';
//     if (lowerRole.includes('bowl')) return 'Bowler';
//     if (lowerRole.includes('all')) return 'Bowling Allrounder';
    
//     return 'Bowler';
//   };

//   // Add this function definition with the other helper functions
//   const getNeededRoles = (composition: any, riskLevel: number): string[] => {
//     const neededRoles: string[] = [];
    
//     // Always need at least 1 WK
//     if (composition['WK-Batsman'] < 1) {
//       neededRoles.push('WK-Batsman');
//     }
    
//     // Risk-based role requirements
//     if (riskLevel < 50) {
//       // Balanced approach (6-5 team ratio)
//       if (composition['Batsman'] + composition['Batting Allrounder'] < 4) {
//         neededRoles.push('Batsman', 'Batting Allrounder');
//       }
//       if (composition['Bowler'] + composition['Bowling Allrounder'] < 4) {
//         neededRoles.push('Bowler', 'Bowling Allrounder');
//       }
//     } else {
//       // Aggressive approach (7-4 team ratio)
//       if (composition['Batsman'] + composition['Batting Allrounder'] < 5) {
//         neededRoles.push('Batsman', 'Batting Allrounder');
//       }
//       if (composition['Bowler'] + composition['Bowling Allrounder'] < 3) {
//         neededRoles.push('Bowler', 'Bowling Allrounder');
//       }
//     }
    
//     return neededRoles.length > 0 ? neededRoles : 
//       ['Batsman', 'Batting Allrounder', 'Bowling Allrounder', 'Bowler'];
//   };

//   // And the validation function
//   const validateTeamWithRatio = (
//     players: EnhancedPlayerDetail[],
//     composition: any,
//     team1Short: string,
//     team2Short: string,
//     teamRatio: { main: number; secondary: number }
//   ) => {
//     if (players.length !== 11) return false;
    
//     // Check team ratio
//     const mainTeam = composition[team1Short] >= composition[team2Short] ? team1Short : team2Short;
//     const secondaryTeam = mainTeam === team1Short ? team2Short : team1Short;
    
//     if (composition[mainTeam] !== teamRatio.main || composition[secondaryTeam] !== teamRatio.secondary) {
//       return false;
//     }
    
//     // Must have at least 1 WK-Batsman
//     if (composition['WK-Batsman'] < 1) return false;
    
//     // Must have at least 3 batsmen (including batting allrounders)
//     const batCount = composition['Batsman'] + composition['Batting Allrounder'];
//     if (batCount < 3) return false;
    
//     // Must have at least 3 bowlers (including bowling allrounders)
//     const bowlCount = composition['Bowler'] + composition['Bowling Allrounder'];
//     if (bowlCount < 3) return false;
    
//     // Overseas player limit
//     if (composition.overseas > 5) return false;
    
//     return true;
//   };

//   // Get player pool with enhanced data
//   const getPlayerPool = useCallback((): EnhancedPlayerDetail[] => {
//     if (!team1 || !team2) return [];
    
//     // Get all playing players (non-substitutes)
//     const team1Players = team1.playerDetails?.filter(p => p.substitute === false) || [];
//     const team2Players = team2.playerDetails?.filter(p => p.substitute === false) || [];
    
//     const allPlayers = [...team1Players, ...team2Players].map(p => ({
//       ...p,
//       roleOrder: getRoleOrder(p.role),
//       normalizedRole: normalizeRole(p.role),
//       selectedBy: p.selectedBy || 0.1,
//       selCapPerc: p.selCapPerc || 0.1,
//       selVcPerc: p.selVcPerc || 0.1,
//       isPlaying: true
//     }));

//     // Calculate role counts for validation
//     const wkPlayers = allPlayers.filter(p => p.normalizedRole === 'WK-Batsman');
//     const batPlayers = allPlayers.filter(p => 
//       ['Batsman', 'Batting Allrounder'].includes(p.normalizedRole)
//     );
//     const bowlPlayers = allPlayers.filter(p => 
//       ['Bowler', 'Bowling Allrounder'].includes(p.normalizedRole)
//     );
//     const allPlayersCount = allPlayers.filter(p => 
//       ['Bowling Allrounder', 'Batting Allrounder'].includes(p.normalizedRole)
//     );

//     setRoleCounts({
//       wk: wkPlayers.length,
//       batsmen: batPlayers.length,
//       allrounders: allPlayersCount.length,
//       bowlers: bowlPlayers.length
//     });

//     // Validate minimum player requirements
//     if (wkPlayers.length < 1) {
//       setError(`Need at least 1 WK-Batsman (available: ${wkPlayers.length})`);
//       return [];
//     }
//     if (batPlayers.length < 3) {
//       setError(`Need at least 3 Batsmen (available: ${batPlayers.length})`);
//       return [];
//     }
//     if (bowlPlayers.length < 3) {
//       setError(`Need at least 3 Bowlers (available: ${bowlPlayers.length})`);
//       return [];
//     }

//     return allPlayers;
//   }, [team1, team2]);

//   // Risk-based player scoring
//   const calculatePlayerScore = (player: EnhancedPlayerDetail, forCaptaincy = false) => {
//     const baseScore = forCaptaincy ? 
//       (player.selCapPerc || player.selectedBy) : 
//       (player.selectedBy);
    
//     // Risk factor varies based on risk level
//     let riskFactor = 1;
//     if (riskLevel < 20) {
//       riskFactor = 1 + (Math.random() * 0.1); // Very safe
//     } else if (riskLevel < 40) {
//       riskFactor = 0.9 + (Math.random() * 0.2); // Safe
//     } else if (riskLevel < 60) {
//       riskFactor = 0.8 + (Math.random() * 0.4); // Moderate
//     } else if (riskLevel < 80) {
//       riskFactor = 0.6 + (Math.random() * 0.6); // Risky
//     } else {
//       riskFactor = 0.4 + (Math.random() * 0.8); // Very risky
//     }
    
//     return baseScore * riskFactor;
//   };

//   // Risk-based team composition
//   const getTeamCompositionByRisk = () => {
//     if (riskLevel < 20) return { wk: 1, bat: 4, ar: 2, bowl: 4 }; // Very safe
//     if (riskLevel < 40) return { wk: 1, bat: 3, ar: 3, bowl: 4 }; // Safe
//     if (riskLevel < 60) return { wk: 1, bat: 3, ar: 4, bowl: 3 }; // Moderate
//     if (riskLevel < 80) return { wk: 1, bat: 5, ar: 3, bowl: 2 }; // Risky
    
//     // Very risky - random extreme combinations
//     return Math.random() > 0.5 
//       ? { wk: 1, bat: 6, ar: 2, bowl: 2 } 
//       : { wk: 1, bat: 2, ar: 4, bowl: 4 };
//   };

//   // Weighted random selection
//   const weightedRandomPick = (players: EnhancedPlayerDetail[], field: 'selectedBy' | 'selCapPerc' | 'selVcPerc') => {
//     const totalWeight = players.reduce((sum, p) => sum + (p[field] || 0.1), 0);
//     let random = Math.random() * totalWeight;
    
//     for (const player of players) {
//       random -= player[field] || 0.1;
//       if (random <= 0) return player;
//     }
    
//     return players[0];
//   };

//   // Select player based on risk level
//   const selectPlayerByRisk = (players: EnhancedPlayerDetail[], risk: number) => {
//     if (players.length === 0) return null;
    
//     // Sort by selectedBy percentage
//     const sorted = [...players].sort((a, b) => (b.selectedBy || 0) - (a.selectedBy || 0));

//     if (risk < 20) {
//       // Very safe - top 20% of players
//       const topCount = Math.max(1, Math.ceil(sorted.length * 0.2));
//       return sorted[Math.floor(Math.random() * topCount)];
//     } else if (risk < 40) {
//       // Safe - top 40% with weighted random
//       const topCount = Math.max(1, Math.ceil(sorted.length * 0.4));
//       return weightedRandomPick(sorted.slice(0, topCount), 'selectedBy');
//     } else if (risk < 60) {
//       // Moderate - top 60% with some randomness
//       const topCount = Math.max(1, Math.ceil(sorted.length * 0.6));
//       return Math.random() > 0.7 
//         ? sorted[Math.floor(Math.random() * sorted.length)]
//         : weightedRandomPick(sorted.slice(0, topCount), 'selectedBy');
//     } else if (risk < 80) {
//       // Risky - more randomness
//       return Math.random() > 0.5 
//         ? weightedRandomPick(sorted, 'selectedBy')
//         : sorted[Math.floor(Math.random() * sorted.length)];
//     } else {
//       // Very risky - completely random
//       return sorted[Math.floor(Math.random() * sorted.length)];
//     }
//   };

//   // Select captain and vice-captain based on risk level
//   const selectCaptainAndViceCaptain = (players: EnhancedPlayerDetail[], risk: number) => {
//     // Get top 30% of players by selection percentage
//     const topPlayers = players.slice(0, Math.ceil(players.length * 0.3));
    
//     let captain, viceCaptain;

//     if (risk < 20) {
//       // Very safe - highest selected captain and vice-captain
//       captain = topPlayers[0];
//       viceCaptain = topPlayers[1] || topPlayers[0];
//     } else if (risk < 40) {
//       // Safe - highest captain, vice-captain from different role
//       captain = topPlayers[0];
//       viceCaptain = topPlayers.find(p => 
//         p.normalizedRole !== captain.normalizedRole
//       ) || topPlayers[1] || topPlayers[0];
//     } else if (risk < 60) {
//       // Moderate - captain from top 3, VC from top 5 different role
//       captain = topPlayers[Math.floor(Math.random() * Math.min(3, topPlayers.length))];
//       viceCaptain = topPlayers
//         .slice(0, 5)
//         .find(p => p.normalizedRole !== captain.normalizedRole) || 
//         topPlayers[1] || topPlayers[0];
//     } else if (risk < 80) {
//       // Risky - captain from top 5, VC from top 10
//       captain = topPlayers[Math.floor(Math.random() * Math.min(5, topPlayers.length))];
//       viceCaptain = topPlayers[Math.floor(Math.random() * Math.min(10, topPlayers.length))];
//     } else {
//       // Very risky - random captain and VC from top 30%
//       captain = topPlayers[Math.floor(Math.random() * topPlayers.length)];
//       viceCaptain = topPlayers.find(p => p.id !== captain.id) || topPlayers[0];
//     }

//     return { captain, viceCaptain };
//   };

//   // Team validation
//   const validateTeam = (players: EnhancedPlayerDetail[], composition: any, team1Short: string, team2Short: string) => {
//     if (players.length !== 11) return false;
    
//     // Must have at least 1 WK-Batsman
//     if (composition['WK-Batsman'] < 1) return false;
    
//     // Must have at least 3 batsmen (including batting allrounders)
//     const batCount = composition['Batsman'] + composition['Batting Allrounder'];
//     if (batCount < 3) return false;
    
//     // Must have at least 3 bowlers (including bowling allrounders)
//     const bowlCount = composition['Bowler'] + composition['Bowling Allrounder'];
//     if (bowlCount < 3) return false;
    
//     // Team balance (3-8 players from each team)
//     if (composition[team1Short] < 3 || composition[team2Short] < 3) return false;
//     if (composition[team1Short] > 8 || composition[team2Short] > 8) return false;
    
//     // Overseas player limit
//     if (composition.overseas > 5) return false;
    
//     return true;
//   };

//   // Create team based on risk level
//   const createBalancedTeam = useCallback((players: EnhancedPlayerDetail[], existingTeamCount: number) => {
//     if (!team1 || !team2) return null;
    
//     const MAX_ATTEMPTS = 500; // Increased attempts for better success rate
//     const team1Short = team1.shortName || 'T1';
//     const team2Short = team2.shortName || 'T2';
    
//     // For risk 50-100, use 7-4 team ratio (more aggressive)
//     const teamRatio = riskLevel >= 50 ? { main: 7, secondary: 4 } : { main: 6, secondary: 5 };
    
//     // Filter available players (non-substitutes)
//     const availablePlayers = players.filter(p => 
//       p.selectedBy !== undefined && p.selectedBy > 0 && p.substitute === false
//     );
    
//     if (availablePlayers.length < 11) {
//       setError(`Not enough available players (${availablePlayers.length}/11)`);
//       return null;
//     }
  
//     // Sort players by selection percentage
//     const sortedPlayers = [...availablePlayers].sort((a, b) => (b.selectedBy || 0) - (a.selectedBy || 0));
  
//     let attempts = 0;
//     while (attempts < MAX_ATTEMPTS) {
//       attempts++;
      
//       // Decide which team will have more players (main team)
//       const mainTeam = Math.random() > 0.5 ? team1Short : team2Short;
//       const secondaryTeam = mainTeam === team1Short ? team2Short : team1Short;
      
//       const teamComposition = {
//         'WK-Batsman': 0,
//         'Batsman': 0,
//         'Batting Allrounder': 0,
//         'Bowling Allrounder': 0,
//         'Bowler': 0,
//         [team1Short]: 0,
//         [team2Short]: 0,
//         overseas: 0,
//         totalScore: 0
//       };
  
//       // 1. Select Captain and Vice-Captain based on risk
//       const { captain, viceCaptain } = selectCaptainAndViceCaptain(sortedPlayers, riskLevel);
//       if (!captain || !viceCaptain) continue;
  
//       const teamPlayers: EnhancedPlayerDetail[] = [captain, viceCaptain];
      
//       // Update composition
//       [captain, viceCaptain].forEach(player => {
//         const role = player.normalizedRole;
//         teamComposition[role]++;
//         teamComposition[player.teamName === team1.name ? team1Short : team2Short]++;
//         if (player.isOverseas) teamComposition.overseas++;
//         teamComposition.totalScore += calculatePlayerScore(player);
//       });
  
//       // Remove captain and vice-captain from remaining players
//       const remainingPlayers = sortedPlayers.filter(p => 
//         p.id !== captain.id && p.id !== viceCaptain.id
//       );
  
//       // 2. Ensure Wicket-keeper (try multiple times if needed)
//       let wkAttempts = 0;
//       while (teamComposition['WK-Batsman'] < 1 && wkAttempts < 10) {
//         wkAttempts++;
//         const wkPlayers = remainingPlayers.filter(p => p.normalizedRole === 'WK-Batsman');
//         if (wkPlayers.length === 0) break;
        
//         const wkPlayer = selectPlayerByRisk(wkPlayers, riskLevel);
//         if (!wkPlayer) continue;
        
//         teamPlayers.push(wkPlayer);
//         teamComposition['WK-Batsman']++;
//         teamComposition[wkPlayer.teamName === team1.name ? team1Short : team2Short]++;
//         if (wkPlayer.isOverseas) teamComposition.overseas++;
//         teamComposition.totalScore += calculatePlayerScore(wkPlayer);
        
//         remainingPlayers.splice(remainingPlayers.findIndex(p => p.id === wkPlayer.id), 1);
//       }
  
//       // 3. Fill remaining spots enforcing team ratio
//       while (teamPlayers.length < 11 && remainingPlayers.length > 0) {
//         // Check current team counts
//         const mainTeamCount = teamComposition[mainTeam];
//         const secondaryTeamCount = teamComposition[secondaryTeam];
        
//         // Determine which team we need to pick from
//         let allowedTeams = [];
//         if (mainTeamCount < teamRatio.main) {
//           allowedTeams.push(mainTeam);
//         }
//         if (secondaryTeamCount < teamRatio.secondary) {
//           allowedTeams.push(secondaryTeam);
//         }
        
//         // If we've filled our team ratio, just take any player
//         if (allowedTeams.length === 0) {
//           allowedTeams = [mainTeam, secondaryTeam];
//         }
  
//         // Determine which roles we still need
//         const neededRoles = getNeededRoles(teamComposition, riskLevel);
        
//         // Filter candidates based on needed roles and team balance
//         let candidates = remainingPlayers.filter(p => {
//           const team = p.teamName === team1.name ? team1Short : team2Short;
//           const teamAllowed = allowedTeams.includes(team);
//           const overseasOK = !p.isOverseas || teamComposition.overseas < 5;
//           const roleNeeded = neededRoles.includes(p.normalizedRole);
          
//           return teamAllowed && overseasOK && roleNeeded;
//         });
  
//         // If no candidates for needed roles, relax role requirement
//         if (candidates.length === 0) {
//           candidates = remainingPlayers.filter(p => {
//             const team = p.teamName === team1.name ? team1Short : team2Short;
//             return allowedTeams.includes(team) && 
//                    (!p.isOverseas || teamComposition.overseas < 5);
//           });
//         }
  
//         // If still no candidates, take any remaining player from allowed teams
//         if (candidates.length === 0) {
//           candidates = remainingPlayers.filter(p => {
//             const team = p.teamName === team1.name ? team1Short : team2Short;
//             return allowedTeams.includes(team);
//           });
//         }
  
//         if (candidates.length === 0) break;
  
//         // Select player based on risk level
//         const selectedPlayer = selectPlayerByRisk(candidates, riskLevel);
//         if (!selectedPlayer) break;
  
//         teamPlayers.push(selectedPlayer);
//         const role = selectedPlayer.normalizedRole;
//         teamComposition[role]++;
//         teamComposition[selectedPlayer.teamName === team1.name ? team1Short : team2Short]++;
//         if (selectedPlayer.isOverseas) teamComposition.overseas++;
//         teamComposition.totalScore += calculatePlayerScore(selectedPlayer);
  
//         remainingPlayers.splice(remainingPlayers.findIndex(p => p.id === selectedPlayer.id), 1);
//       }
  
//       // Final validation - must have exactly 11 players
//       if (teamPlayers.length === 11 && validateTeamWithRatio(teamPlayers, teamComposition, team1Short, team2Short, teamRatio)) {
//         // Add substitutes (top 4 players not in team, sorted by selectedBy)
//         const substitutes = sortedPlayers
//           .filter(p => !teamPlayers.some(tp => tp.id === p.id))
//           .sort((a, b) => (b.selectedBy || 0) - (a.selectedBy || 0))
//           .slice(0, 4);
  
//         return {
//           players: [...teamPlayers].sort((a, b) => (a.roleOrder || 6) - (b.roleOrder || 6)),
//           captain,
//           viceCaptain,
//           substitutes,
//           teamName: `Team ${existingTeamCount + 1}`,
//           teamComposition,
//           riskLevel,
//           matchId,
//           createdAt: new Date().toISOString(),
//           changes: 0 // Initialize changes count
//         };
//       }
//     }
  
//     console.error(`Team generation failed after ${MAX_ATTEMPTS} attempts`);
//     setError(`Failed to generate valid team after ${MAX_ATTEMPTS} attempts. Try adjusting risk level.`);
//     return null;
//   }, [team1, team2, riskLevel, matchId]);

//   // Get team count from Firestore
//   const getTeamCountForMatch = async (): Promise<number> => {
//     if (!user || !matchId) return 0;
    
//     try {
//       const q = query(
//         collection(db, "users", user.id, "matches", matchId, "teams"),
//         limit(MAX_TEAMS_PER_MATCH)
//       );
//       const querySnapshot = await getDocs(q);
//       return querySnapshot.size;
//     } catch (err) {
//       console.error("Failed to count teams:", err);
//       return 0;
//     }
//   };

//   // Save team to Firestore
//   const saveTeamToFirestore = async (team: GeneratedTeam) => {
//     if (!user || !matchId) return;
    
//     try {
//       const teamData = {
//         ...team,
//         userId: user.id,
//         userEmail: user.primaryEmailAddress?.emailAddress || '',
//         matchName: `${team1?.name} vs ${team2?.name}`,
//         team1ShortName: team1?.shortName || team1?.name.split(' ').map(n => n[0]).join(''),
//         team2ShortName: team2?.shortName || team2?.name.split(' ').map(n => n[0]).join(''),
//         team1Logo: team1?.logo || '/fallback-team.png',
//         team2Logo: team2?.logo || '/fallback-team.png'
//       };

//       const matchTeamsRef = collection(db, "users", user.id, "matches", matchId, "teams");
//       const teamRef = doc(matchTeamsRef);
      
//       await setDoc(teamRef, teamData);
//       return teamRef.id;
//     } catch (err) {
//       console.error("Failed to save team:", err);
//       throw err;
//     }
//   };

//   // Fetch saved teams from Firestore
//   const fetchSavedTeams = useCallback(async (): Promise<GeneratedTeam[]> => {
//     if (!user || !matchId) return [];
    
//     try {
//       const q = query(
//         collection(db, "users", user.id, "matches", matchId, "teams"),
//         orderBy("createdAt", "desc"),
//         limit(MAX_TEAMS_PER_MATCH)
//       );
//       const querySnapshot = await getDocs(q);
//       return querySnapshot.docs.map(doc => ({
//         ...doc.data() as GeneratedTeam,
//         id: doc.id
//       }));
//     } catch (err) {
//       console.error("Failed to fetch saved teams:", err);
//       return [];
//     }
//   }, [user, matchId]);

//   // Load teams on mount
//   useEffect(() => {
//     const loadTeams = async () => {
//       if (!matchId || !user?.id) return;
      
//       try {
//         // Check localStorage first
//         const savedTeams = localStorage.getItem(localStorageKey);
//         if (savedTeams) {
//           setGeneratedTeams(JSON.parse(savedTeams));
//           return;
//         }

//         // Fallback to Firestore
//         const teams = await fetchSavedTeams();
//         if (teams.length > 0) {
//           setGeneratedTeams(teams);
//           localStorage.setItem(localStorageKey, JSON.stringify(teams));
//         }
//       } catch (err) {
//         console.error("Failed to load teams:", err);
//       }
//     };

//     loadTeams();
//   }, [localStorageKey, matchId, user?.id, fetchSavedTeams]);

//   // Main team generation handler
//   const handleGenerateTeams = useCallback(async () => {
//     if (!team1 || !team2) {
//       setError("Select both teams first");
//       return;
//     }

//     if (!user) {
//       setError("Please sign in to generate teams");
//       return;
//     }

//     const currentTeamCount = await getTeamCountForMatch();
//     if (currentTeamCount >= MAX_TEAMS_PER_MATCH) {
//       setError(`You've reached the maximum of ${MAX_TEAMS_PER_MATCH} teams for this match`);
//       return;
//     }

//     const remainingTeamSlots = MAX_TEAMS_PER_MATCH - currentTeamCount;
//     const teamsToGenerate = Math.min(teamCount, remainingTeamSlots);

//     if (teamsToGenerate <= 0) {
//       setError(`You've reached the maximum of ${MAX_TEAMS_PER_MATCH} teams for this match`);
//       return;
//     }

//     if (needsPayment) {
//       setShowPaymentDialog(true);
//       return;
//     }

//     const allPlayers = getPlayerPool();
//     if (allPlayers.length < 11) {
//       setError(`Not enough players (${allPlayers.length}/11). Please check your filters.`);
//       return;
//     }

//     setIsGenerating(true);
//     setError(null);

//     try {
//       // Deduct credits
//       await runTransaction(db, async (transaction) => {
//         const userRef = doc(db, "users", user.id);
//         const userDoc = await transaction.get(userRef);
        
//         if (!userDoc.exists()) throw new Error("User not found");
//         if ((userDoc.data().credits || 0) < requiredCredits) {
//           throw new Error("Insufficient balance");
//         }
        
//         transaction.update(userRef, {
//           credits: increment(-requiredCredits)
//         });
//       });

//       // Generate teams
//       const newTeams: GeneratedTeam[] = [];
//       const TOTAL_ATTEMPTS = teamsToGenerate * 100;
//       let attempts = 0;

//       while (newTeams.length < teamsToGenerate && attempts < TOTAL_ATTEMPTS) {
//         attempts++;
//         const team = createBalancedTeam(allPlayers, currentTeamCount + newTeams.length);
//         if (team) {
//           const teamId = await saveTeamToFirestore(team);
//           newTeams.push({ ...team, id: teamId });
//         }
//       }

//       if (newTeams.length === 0) {
//         throw new Error(
//           `Failed to generate valid teams after ${TOTAL_ATTEMPTS} attempts.\n` +
//           `Player counts: WK: ${roleCounts.wk}, Batsmen: ${roleCounts.batsmen}, ` +
//           `Allrounders: ${roleCounts.allrounders}, Bowlers: ${roleCounts.bowlers}\n` +
//           `Try adjusting your risk level or player filters.`
//         );
//       }

//       // Update state and storage
//       const updatedTeams = [...newTeams, ...generatedTeams];
//       setGeneratedTeams(updatedTeams);
//       localStorage.setItem(localStorageKey, JSON.stringify(updatedTeams));
//       onBalanceUpdate(userBalance - requiredCredits);
//     } catch (err: any) {
//       setError(err.message || "Failed to generate teams");
//     } finally {
//       setIsGenerating(false);
//     }
//   }, [
//     team1, team2, teamCount, riskLevel, user, 
//     userBalance, requiredCredits, needsPayment, 
//     onBalanceUpdate, createBalancedTeam, matchId,
//     fetchSavedTeams, getPlayerPool, generatedTeams,
//     localStorageKey, roleCounts, getTeamCountForMatch,
//     saveTeamToFirestore
//   ]);

//   // Check for lineup changes
//   const checkLineupChanges = useCallback(async () => {
//     if (!user?.id || !matchId) return;
    
//     try {
//       const savedTeams = localStorage.getItem(localStorageKey);
//       if (!savedTeams) return;
      
//       const teams: GeneratedTeam[] = JSON.parse(savedTeams);
//       const updatedTeams = [];
      
//       for (const team of teams) {
//         const playersWithStatus = team.players.map(player => ({
//           ...player,
//           isNowSubstitute: checkIfPlayerIsSubstitute(player.id)
//         }));
        
//         const nonPlayingPlayers = playersWithStatus.filter(p => p.isNowSubstitute);
//         if (nonPlayingPlayers.length === 0) {
//           updatedTeams.push(team);
//           continue;
//         }
        
//         const playingPlayers = playersWithStatus.filter(p => !p.isNowSubstitute);
//         const substitutes = team.substitutes || [];
//         let newPlayers = [...playingPlayers];
        
//         for (const nonPlayer of nonPlayingPlayers) {
//           const replacement = substitutes.find(sub => 
//             normalizeRole(sub.role) === normalizeRole(nonPlayer.role) &&
//             !newPlayers.some(p => p.id === sub.id)
//           );
          
//           if (replacement) {
//             newPlayers.push(replacement);
//           } else {
//             newPlayers.push(nonPlayer);
//           }
//         }
        
//         updatedTeams.push({
//           ...team,
//           players: newPlayers,
//           captain: newPlayers.find(p => p.id === team.captain.id) || team.captain,
//           viceCaptain: newPlayers.find(p => p.id === team.viceCaptain.id) || team.viceCaptain,
//           updatedAt: new Date().toISOString(),
//           hadChanges: nonPlayingPlayers.length > 0
//         });
//       }
      
//       localStorage.setItem(localStorageKey, JSON.stringify(updatedTeams));
//       setGeneratedTeams(updatedTeams);
      
//       if (updatedTeams.some(t => t.hadChanges)) {
//         alert('Some of your teams have been updated on Linup or change players');
//       }
      
//     } catch (err) {
//       console.error("Failed to check lineup changes:", err);
//     }
//   }, [user?.id, matchId, localStorageKey]);

//   // Helper function to check player status
//   const checkIfPlayerIsSubstitute = (playerId: string): boolean => {
//     // In a real implementation, you would check against current match data
//     return Math.random() < 0.1; // 10% chance for demo
//   };

//   // Generate button component
//   const generateButton = (
//     <div className="space-y-2">
//       <button
//         onClick={handleGenerateTeams}
//         disabled={isGenerating || !team1 || !team2}
//         className={`
//           w-full px-4 py-3 rounded-md font-bold
//           ${isGenerating ? 'bg-gray-500' : 
//            needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' : 
//            'bg-blue-500 hover:bg-blue-600'}
//           text-white transition-colors
//         `}
//       >
//         {isGenerating ? (
//           <span className="flex items-center justify-center gap-2">
//             <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//             Generating...
//           </span>
//         ) : !team1 || !team2 ? (
//           "Select both teams"
//         ) : needsPayment ? (
//           `Add ₹${paymentAmount} to Generate`
//         ) : (
//           `Generate ${teamCount} Teams (₹${requiredCredits})`
//         )}
//       </button>

//       <div className="flex justify-between text-sm">
//         <span>Your Credits: ₹{userBalance}</span>
//         {needsPayment ? (
//           <span className="text-yellow-500">Need ₹{paymentAmount} more</span>
//         ) : (
//           <span className="text-green-500">Sufficient balance</span>
//         )}
//       </div>

//       {error && (
//         <div className="text-red-500 text-sm p-2 bg-red-50 rounded-lg">
//           <p className="font-medium">{error}</p>
//           {error.includes("Player counts") && (
//             <div className="mt-2 text-xs">
//               <p>Current player counts:</p>
//               <ul className="list-disc pl-5">
//                 <li>WK-Batsman: {roleCounts.wk} (min 1)</li>
//                 <li>Batsmen: {roleCounts.batsmen} (min 3 including allrounders)</li>
//                 <li>Bowlers: {roleCounts.bowlers} (min 3 including allrounders)</li>
//               </ul>
//               <p className="mt-1">Try adjusting filters or risk level.</p>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );

//   // Payment dialog
//   const paymentDialog = showPaymentDialog && (
//     <PaymentDialog
//       currentBalance={userBalance}
//       requiredAmount={paymentAmount}
//       onPaymentSuccess={(amount) => {
//         onBalanceUpdate(userBalance + amount);
//         setShowPaymentDialog(false);
//         handleGenerateTeams();
//       }}
//       onOpenChange={setShowPaymentDialog}
//       open={showPaymentDialog}
//     />
//   );

//   return {
//     generatedTeams,
//     isGenerating,
//     generateButton,
//     paymentDialog,
//     error,
//     setError,
//     fetchSavedTeams,
//     setGeneratedTeams,
//     checkLineupChanges
//   };
// };










"use client";
import { useState, useCallback, useMemo, useEffect } from "react";
import { PaymentDialog } from "./PaymentDialog";
import { Team, PlayerDetail, GeneratedTeam } from "../../types/match";
import { db } from "@/lib/firebase";
import { 
  doc, 
  runTransaction, 
  increment, 
  setDoc, 
  collection, 
  query, 
  orderBy, 
  getDocs,
  limit
} from "firebase/firestore";
import { useUser } from "@clerk/nextjs";

interface TeamGeneratorProps {
  team1?: Team;
  team2?: Team;
  teamCount: number;
  riskLevel: number;
  userBalance: number;
  onBalanceUpdate: (newBalance: number) => void;
  matchId: string;
}

interface EnhancedPlayerDetail extends PlayerDetail {
  roleOrder: number;
  selectedBy: number;
  selCapPerc?: number;
  selVcPerc?: number;
  normalizedRole: string;
}

export const useTeamGenerator = ({ 
  team1, 
  team2, 
  teamCount, 
  riskLevel,
  userBalance,
  onBalanceUpdate,
  matchId
}: TeamGeneratorProps) => {
  const { user } = useUser();
  const [generatedTeams, setGeneratedTeams] = useState<GeneratedTeam[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [roleCounts, setRoleCounts] = useState({
    wk: 0,
    batsmen: 0,
    allrounders: 0,
    bowlers: 0
  });

  const MAX_TEAMS_PER_MATCH = 20;
  const requiredCredits = useMemo(() => teamCount * 10, [teamCount]);
  const needsPayment = useMemo(() => userBalance < requiredCredits, [userBalance, requiredCredits]);
  const paymentAmount = useMemo(() => Math.max(requiredCredits - userBalance, 50), [requiredCredits, userBalance]);
  const localStorageKey = useMemo(() => `matchTeams_${matchId}_${user?.id}`, [matchId, user?.id]);

  const getRoleOrder = (role: string): number => {
    const normalized = normalizeRole(role);
    switch(normalized) {
      case 'WK-Batsman': return 1;
      case 'Batsman': return 2;
      case 'Batting Allrounder': return 3;
      case 'Bowling Allrounder': return 4;
      case 'Bowler': return 5;
      default: return 6;
    }
  };

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

  const getNeededRoles = (composition: any, riskLevel: number): string[] => {
    const neededRoles: string[] = [];
    
    if (composition['WK-Batsman'] < 1) {
      neededRoles.push('WK-Batsman');
    }
    
    if (riskLevel < 50) {
      if (composition['Batsman'] + composition['Batting Allrounder'] < 4) {
        neededRoles.push('Batsman', 'Batting Allrounder');
      }
      if (composition['Bowler'] + composition['Bowling Allrounder'] < 4) {
        neededRoles.push('Bowler', 'Bowling Allrounder');
      }
    } else {
      if (composition['Batsman'] + composition['Batting Allrounder'] < 5) {
        neededRoles.push('Batsman', 'Batting Allrounder');
      }
      if (composition['Bowler'] + composition['Bowling Allrounder'] < 3) {
        neededRoles.push('Bowler', 'Bowling Allrounder');
      }
    }
    
    return neededRoles.length > 0 ? neededRoles : 
      ['Batsman', 'Batting Allrounder', 'Bowling Allrounder', 'Bowler'];
  };

  const validateTeamWithRatio = (
    players: EnhancedPlayerDetail[],
    composition: any,
    team1Short: string,
    team2Short: string,
    teamRatio: { main: number; secondary: number }
  ) => {
    if (players.length !== 11) return false;
    
    const mainTeam = composition[team1Short] >= composition[team2Short] ? team1Short : team2Short;
    const secondaryTeam = mainTeam === team1Short ? team2Short : team1Short;
    
    if (composition[mainTeam] !== teamRatio.main || composition[secondaryTeam] !== teamRatio.secondary) {
      return false;
    }
    
    if (composition['WK-Batsman'] < 1) return false;
    
    const batCount = composition['Batsman'] + composition['Batting Allrounder'];
    if (batCount < 3) return false;
    
    const bowlCount = composition['Bowler'] + composition['Bowling Allrounder'];
    if (bowlCount < 3) return false;
    
    if (composition.overseas > 5) return false;
    
    return true;
  };

  const getPlayerPool = useCallback((): EnhancedPlayerDetail[] => {
    if (!team1 || !team2) return [];
    
    const team1Players = team1.playerDetails?.filter(p => p.substitute === false) || [];
    const team2Players = team2.playerDetails?.filter(p => p.substitute === false) || [];
    
    const allPlayers = [...team1Players, ...team2Players].map(p => ({
      ...p,
      roleOrder: getRoleOrder(p.role),
      normalizedRole: normalizeRole(p.role),
      selectedBy: p.selectedBy || 0.1,
      selCapPerc: p.selCapPerc || 0.1,
      selVcPerc: p.selVcPerc || 0.1,
      isPlaying: true
    }));

    const wkPlayers = allPlayers.filter(p => p.normalizedRole === 'WK-Batsman');
    const batPlayers = allPlayers.filter(p => 
      ['Batsman', 'Batting Allrounder'].includes(p.normalizedRole)
    );
    const bowlPlayers = allPlayers.filter(p => 
      ['Bowler', 'Bowling Allrounder'].includes(p.normalizedRole)
    );
    const allPlayersCount = allPlayers.filter(p => 
      ['Bowling Allrounder', 'Batting Allrounder'].includes(p.normalizedRole)
    );

    setRoleCounts({
      wk: wkPlayers.length,
      batsmen: batPlayers.length,
      allrounders: allPlayersCount.length,
      bowlers: bowlPlayers.length
    });

    if (wkPlayers.length < 1) {
      setError(`Need at least 1 WK-Batsman (available: ${wkPlayers.length})`);
      return [];
    }
    if (batPlayers.length < 3) {
      setError(`Need at least 3 Batsmen (available: ${batPlayers.length})`);
      return [];
    }
    if (bowlPlayers.length < 3) {
      setError(`Need at least 3 Bowlers (available: ${bowlPlayers.length})`);
      return [];
    }

    return allPlayers;
  }, [team1, team2]);

  const calculatePlayerScore = (player: EnhancedPlayerDetail, forCaptaincy = false) => {
    const baseScore = forCaptaincy ? 
      (player.selCapPerc || player.selectedBy) : 
      (player.selectedBy);
    
    let riskFactor = 1;
    if (riskLevel < 20) {
      riskFactor = 1 + (Math.random() * 0.1);
    } else if (riskLevel < 40) {
      riskFactor = 0.9 + (Math.random() * 0.2);
    } else if (riskLevel < 60) {
      riskFactor = 0.8 + (Math.random() * 0.4);
    } else if (riskLevel < 80) {
      riskFactor = 0.6 + (Math.random() * 0.6);
    } else {
      riskFactor = 0.4 + (Math.random() * 0.8);
    }
    
    return baseScore * riskFactor;
  };

  const getTeamCompositionByRisk = () => {
    if (riskLevel < 20) return { wk: 1, bat: 4, ar: 2, bowl: 4 };
    if (riskLevel < 40) return { wk: 1, bat: 3, ar: 3, bowl: 4 };
    if (riskLevel < 60) return { wk: 1, bat: 3, ar: 4, bowl: 3 };
    if (riskLevel < 80) return { wk: 1, bat: 5, ar: 3, bowl: 2 };
    
    return Math.random() > 0.5 
      ? { wk: 1, bat: 6, ar: 2, bowl: 2 } 
      : { wk: 1, bat: 2, ar: 4, bowl: 4 };
  };

  const weightedRandomPick = (players: EnhancedPlayerDetail[], field: 'selectedBy' | 'selCapPerc' | 'selVcPerc') => {
    const totalWeight = players.reduce((sum, p) => sum + (p[field] || 0.1), 0);
    let random = Math.random() * totalWeight;
    
    for (const player of players) {
      random -= player[field] || 0.1;
      if (random <= 0) return player;
    }
    
    return players[0];
  };

  const selectPlayerByRisk = (players: EnhancedPlayerDetail[], risk: number) => {
    if (players.length === 0) return null;
    
    const sorted = [...players].sort((a, b) => (b.selectedBy || 0) - (a.selectedBy || 0));

    if (risk < 20) {
      const topCount = Math.max(1, Math.ceil(sorted.length * 0.2));
      return sorted[Math.floor(Math.random() * topCount)];
    } else if (risk < 40) {
      const topCount = Math.max(1, Math.ceil(sorted.length * 0.4));
      return weightedRandomPick(sorted.slice(0, topCount), 'selectedBy');
    } else if (risk < 60) {
      const topCount = Math.max(1, Math.ceil(sorted.length * 0.6));
      return Math.random() > 0.7 
        ? sorted[Math.floor(Math.random() * sorted.length)]
        : weightedRandomPick(sorted.slice(0, topCount), 'selectedBy');
    } else if (risk < 80) {
      return Math.random() > 0.5 
        ? weightedRandomPick(sorted, 'selectedBy')
        : sorted[Math.floor(Math.random() * sorted.length)];
    } else {
      return sorted[Math.floor(Math.random() * sorted.length)];
    }
  };

  const selectCaptainAndViceCaptain = (players: EnhancedPlayerDetail[], risk: number) => {
    const topPlayers = players.slice(0, Math.ceil(players.length * 0.3));
    
    let captain, viceCaptain;

    if (risk < 20) {
      captain = topPlayers[0];
      viceCaptain = topPlayers[1] || topPlayers[0];
    } else if (risk < 40) {
      captain = topPlayers[0];
      viceCaptain = topPlayers.find(p => 
        p.normalizedRole !== captain.normalizedRole
      ) || topPlayers[1] || topPlayers[0];
    } else if (risk < 60) {
      captain = topPlayers[Math.floor(Math.random() * Math.min(3, topPlayers.length))];
      viceCaptain = topPlayers
        .slice(0, 5)
        .find(p => p.normalizedRole !== captain.normalizedRole) || 
        topPlayers[1] || topPlayers[0];
    } else if (risk < 80) {
      captain = topPlayers[Math.floor(Math.random() * Math.min(5, topPlayers.length))];
      viceCaptain = topPlayers[Math.floor(Math.random() * Math.min(10, topPlayers.length))];
    } else {
      captain = topPlayers[Math.floor(Math.random() * topPlayers.length)];
      viceCaptain = topPlayers.find(p => p.id !== captain.id) || topPlayers[0];
    }

    return { captain, viceCaptain };
  };

  const validateTeam = (players: EnhancedPlayerDetail[], composition: any, team1Short: string, team2Short: string) => {
    if (players.length !== 11) return false;
    
    if (composition['WK-Batsman'] < 1) return false;
    
    const batCount = composition['Batsman'] + composition['Batting Allrounder'];
    if (batCount < 3) return false;
    
    const bowlCount = composition['Bowler'] + composition['Bowling Allrounder'];
    if (bowlCount < 3) return false;
    
    if (composition[team1Short] < 3 || composition[team2Short] < 3) return false;
    if (composition[team1Short] > 8 || composition[team2Short] > 8) return false;
    
    if (composition.overseas > 5) return false;
    
    return true;
  };

  const createBalancedTeam = useCallback((players: EnhancedPlayerDetail[], existingTeamCount: number) => {
    if (!team1 || !team2) return null;
    
    const MAX_ATTEMPTS = 500;
    const team1Short = team1.shortName || 'T1';
    const team2Short = team2.shortName || 'T2';
    
    const teamRatio = riskLevel >= 50 ? { main: 7, secondary: 4 } : { main: 6, secondary: 5 };
    
    const availablePlayers = players.filter(p => 
      p.selectedBy !== undefined && p.selectedBy > 0 && p.substitute === false
    );
    
    if (availablePlayers.length < 11) {
      setError(`Not enough available players (${availablePlayers.length}/11)`);
      return null;
    }
  
    const sortedPlayers = [...availablePlayers].sort((a, b) => (b.selectedBy || 0) - (a.selectedBy || 0));
  
    let attempts = 0;
    while (attempts < MAX_ATTEMPTS) {
      attempts++;
      
      const mainTeam = Math.random() > 0.5 ? team1Short : team2Short;
      const secondaryTeam = mainTeam === team1Short ? team2Short : team1Short;
      
      const teamComposition = {
        'WK-Batsman': 0,
        'Batsman': 0,
        'Batting Allrounder': 0,
        'Bowling Allrounder': 0,
        'Bowler': 0,
        [team1Short]: 0,
        [team2Short]: 0,
        overseas: 0,
        totalScore: 0
      };
  
      const { captain, viceCaptain } = selectCaptainAndViceCaptain(sortedPlayers, riskLevel);
      if (!captain || !viceCaptain) continue;
  
      const teamPlayers: EnhancedPlayerDetail[] = [captain, viceCaptain];
      
      [captain, viceCaptain].forEach(player => {
        const role = player.normalizedRole;
        teamComposition[role]++;
        teamComposition[player.teamName === team1.name ? team1Short : team2Short]++;
        if (player.isOverseas) teamComposition.overseas++;
        teamComposition.totalScore += calculatePlayerScore(player);
      });
  
      const remainingPlayers = sortedPlayers.filter(p => 
        p.id !== captain.id && p.id !== viceCaptain.id
      );
  
      let wkAttempts = 0;
      while (teamComposition['WK-Batsman'] < 1 && wkAttempts < 10) {
        wkAttempts++;
        const wkPlayers = remainingPlayers.filter(p => p.normalizedRole === 'WK-Batsman');
        if (wkPlayers.length === 0) break;
        
        const wkPlayer = selectPlayerByRisk(wkPlayers, riskLevel);
        if (!wkPlayer) continue;
        
        teamPlayers.push(wkPlayer);
        teamComposition['WK-Batsman']++;
        teamComposition[wkPlayer.teamName === team1.name ? team1Short : team2Short]++;
        if (wkPlayer.isOverseas) teamComposition.overseas++;
        teamComposition.totalScore += calculatePlayerScore(wkPlayer);
        
        remainingPlayers.splice(remainingPlayers.findIndex(p => p.id === wkPlayer.id), 1);
      }
  
      while (teamPlayers.length < 11 && remainingPlayers.length > 0) {
        const mainTeamCount = teamComposition[mainTeam];
        const secondaryTeamCount = teamComposition[secondaryTeam];
        
        let allowedTeams = [];
        if (mainTeamCount < teamRatio.main) {
          allowedTeams.push(mainTeam);
        }
        if (secondaryTeamCount < teamRatio.secondary) {
          allowedTeams.push(secondaryTeam);
        }
        
        if (allowedTeams.length === 0) {
          allowedTeams = [mainTeam, secondaryTeam];
        }
  
        const neededRoles = getNeededRoles(teamComposition, riskLevel);
        
        let candidates = remainingPlayers.filter(p => {
          const team = p.teamName === team1.name ? team1Short : team2Short;
          const teamAllowed = allowedTeams.includes(team);
          const overseasOK = !p.isOverseas || teamComposition.overseas < 5;
          const roleNeeded = neededRoles.includes(p.normalizedRole);
          
          return teamAllowed && overseasOK && roleNeeded;
        });
  
        if (candidates.length === 0) {
          candidates = remainingPlayers.filter(p => {
            const team = p.teamName === team1.name ? team1Short : team2Short;
            return allowedTeams.includes(team) && 
                   (!p.isOverseas || teamComposition.overseas < 5);
          });
        }
  
        if (candidates.length === 0) {
          candidates = remainingPlayers.filter(p => {
            const team = p.teamName === team1.name ? team1Short : team2Short;
            return allowedTeams.includes(team);
          });
        }
  
        if (candidates.length === 0) break;
  
        const selectedPlayer = selectPlayerByRisk(candidates, riskLevel);
        if (!selectedPlayer) break;
  
        teamPlayers.push(selectedPlayer);
        const role = selectedPlayer.normalizedRole;
        teamComposition[role]++;
        teamComposition[selectedPlayer.teamName === team1.name ? team1Short : team2Short]++;
        if (selectedPlayer.isOverseas) teamComposition.overseas++;
        teamComposition.totalScore += calculatePlayerScore(selectedPlayer);
  
        remainingPlayers.splice(remainingPlayers.findIndex(p => p.id === selectedPlayer.id), 1);
      }
  
      if (teamPlayers.length === 11 && validateTeamWithRatio(teamPlayers, teamComposition, team1Short, team2Short, teamRatio)) {
        // Get all available players not in the playing 11
        const allAvailablePlayers = players.filter(p => 
          !teamPlayers.some(tp => tp.id === p.id) && p.substitute === false
        );
        
        // Select top 4 substitutes by selectedBy percentage
        const substitutes = [...allAvailablePlayers]
          .sort((a, b) => (b.selectedBy || 0) - (a.selectedBy || 0))
          .slice(0, 4);
  
        return {
          players: [...teamPlayers].sort((a, b) => (a.roleOrder || 6) - (b.roleOrder || 6)),
          captain,
          viceCaptain,
          substitutes,
          teamName: `Team ${existingTeamCount + 1}`,
          teamComposition,
          riskLevel,
          matchId,
          createdAt: new Date().toISOString(),
          changes: 0
        };
      }
    }
  
    console.error(`Team generation failed after ${MAX_ATTEMPTS} attempts`);
    setError(`Failed to generate valid team after ${MAX_ATTEMPTS} attempts. Try adjusting risk level.`);
    return null;
  }, [team1, team2, riskLevel, matchId]);

  const getTeamCountForMatch = async (): Promise<number> => {
    if (!user || !matchId) return 0;
    
    try {
      const q = query(
        collection(db, "users", user.id, "matches", matchId, "teams"),
        limit(MAX_TEAMS_PER_MATCH)
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.size;
    } catch (err) {
      console.error("Failed to count teams:", err);
      return 0;
    }
  };

  const saveTeamToFirestore = async (team: GeneratedTeam) => {
    if (!user || !matchId) return;
    
    try {
      const teamData = {
        ...team,
        userId: user.id,
        userEmail: user.primaryEmailAddress?.emailAddress || '',
        matchName: `${team1?.name} vs ${team2?.name}`,
        team1ShortName: team1?.shortName || team1?.name.split(' ').map(n => n[0]).join(''),
        team2ShortName: team2?.shortName || team2?.name.split(' ').map(n => n[0]).join(''),
        team1Logo: team1?.logo || '/fallback-team.png',
        team2Logo: team2?.logo || '/fallback-team.png'
      };

      const matchTeamsRef = collection(db, "users", user.id, "matches", matchId, "teams");
      const teamRef = doc(matchTeamsRef);
      
      await setDoc(teamRef, teamData);
      return teamRef.id;
    } catch (err) {
      console.error("Failed to save team:", err);
      throw err;
    }
  };

  const fetchSavedTeams = useCallback(async (): Promise<GeneratedTeam[]> => {
    if (!user || !matchId) return [];
    
    try {
      const q = query(
        collection(db, "users", user.id, "matches", matchId, "teams"),
        orderBy("createdAt", "desc"),
        limit(MAX_TEAMS_PER_MATCH)
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        ...doc.data() as GeneratedTeam,
        id: doc.id
      }));
    } catch (err) {
      console.error("Failed to fetch saved teams:", err);
      return [];
    }
  }, [user, matchId]);

  useEffect(() => {
    const loadTeams = async () => {
      if (!matchId || !user?.id) return;
      
      try {
        const savedTeams = localStorage.getItem(localStorageKey);
        if (savedTeams) {
          setGeneratedTeams(JSON.parse(savedTeams));
          return;
        }

        const teams = await fetchSavedTeams();
        if (teams.length > 0) {
          setGeneratedTeams(teams);
          localStorage.setItem(localStorageKey, JSON.stringify(teams));
        }
      } catch (err) {
        console.error("Failed to load teams:", err);
      }
    };

    loadTeams();
  }, [localStorageKey, matchId, user?.id, fetchSavedTeams]);

  const handleGenerateTeams = useCallback(async () => {
    if (!team1 || !team2) {
      setError("Select both teams first");
      return;
    }

    if (!user) {
      setError("Please sign in to generate teams");
      return;
    }

    const currentTeamCount = await getTeamCountForMatch();
    if (currentTeamCount >= MAX_TEAMS_PER_MATCH) {
      setError(`You've reached the maximum of ${MAX_TEAMS_PER_MATCH} teams for this match`);
      return;
    }

    const remainingTeamSlots = MAX_TEAMS_PER_MATCH - currentTeamCount;
    const teamsToGenerate = Math.min(teamCount, remainingTeamSlots);

    if (teamsToGenerate <= 0) {
      setError(`You've reached the maximum of ${MAX_TEAMS_PER_MATCH} teams for this match`);
      return;
    }

    if (needsPayment) {
      setShowPaymentDialog(true);
      return;
    }

    const allPlayers = getPlayerPool();
    if (allPlayers.length < 11) {
      setError(`Not enough players (${allPlayers.length}/11). Please check your filters.`);
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      await runTransaction(db, async (transaction) => {
        const userRef = doc(db, "users", user.id);
        const userDoc = await transaction.get(userRef);
        
        if (!userDoc.exists()) throw new Error("User not found");
        if ((userDoc.data().credits || 0) < requiredCredits) {
          throw new Error("Insufficient balance");
        }
        
        transaction.update(userRef, {
          credits: increment(-requiredCredits)
        });
      });

      const newTeams: GeneratedTeam[] = [];
      const TOTAL_ATTEMPTS = teamsToGenerate * 100;
      let attempts = 0;

      while (newTeams.length < teamsToGenerate && attempts < TOTAL_ATTEMPTS) {
        attempts++;
        const team = createBalancedTeam(allPlayers, currentTeamCount + newTeams.length);
        if (team) {
          const teamId = await saveTeamToFirestore(team);
          newTeams.push({ ...team, id: teamId });
        }
      }

      if (newTeams.length === 0) {
        throw new Error(
          `Failed to generate valid teams after ${TOTAL_ATTEMPTS} attempts.\n` +
          `Player counts: WK: ${roleCounts.wk}, Batsmen: ${roleCounts.batsmen}, ` +
          `Allrounders: ${roleCounts.allrounders}, Bowlers: ${roleCounts.bowlers}\n` +
          `Try adjusting your risk level or player filters.`
        );
      }

      const updatedTeams = [...newTeams, ...generatedTeams];
      setGeneratedTeams(updatedTeams);
      localStorage.setItem(localStorageKey, JSON.stringify(updatedTeams));
      onBalanceUpdate(userBalance - requiredCredits);
    } catch (err: any) {
      setError(err.message || "Failed to generate teams");
    } finally {
      setIsGenerating(false);
    }
  }, [
    team1, team2, teamCount, riskLevel, user, 
    userBalance, requiredCredits, needsPayment, 
    onBalanceUpdate, createBalancedTeam, matchId,
    fetchSavedTeams, getPlayerPool, generatedTeams,
    localStorageKey, roleCounts, getTeamCountForMatch,
    saveTeamToFirestore
  ]);

  const checkLineupChanges = useCallback(async () => {
    if (!user?.id || !matchId) return;
    
    try {
      const savedTeams = localStorage.getItem(localStorageKey);
      if (!savedTeams) return;
      
      const teams: GeneratedTeam[] = JSON.parse(savedTeams);
      const updatedTeams = [];
      
      for (const team of teams) {
        const playersWithStatus = team.players.map(player => ({
          ...player,
          isNowSubstitute: checkIfPlayerIsSubstitute(player.id)
        }));
        
        const nonPlayingPlayers = playersWithStatus.filter(p => p.isNowSubstitute);
        if (nonPlayingPlayers.length === 0) {
          updatedTeams.push(team);
          continue;
        }
        
        const playingPlayers = playersWithStatus.filter(p => !p.isNowSubstitute);
        const availableSubstitutes = team.substitutes?.filter(sub => 
          !playingPlayers.some(p => p.id === sub.id)
        ) || [];
        
        let newPlayers = [...playingPlayers];
        
        for (const nonPlayer of nonPlayingPlayers) {
          const replacement = availableSubstitutes.find(sub => 
            normalizeRole(sub.role) === normalizeRole(nonPlayer.role)
          );
          
          if (replacement) {
            newPlayers.push(replacement);
            availableSubstitutes.splice(availableSubstitutes.indexOf(replacement), 1);
          } else {
            newPlayers.push(nonPlayer);
          }
        }
        
        updatedTeams.push({
          ...team,
          players: newPlayers,
          captain: newPlayers.find(p => p.id === team.captain.id) || team.captain,
          viceCaptain: newPlayers.find(p => p.id === team.viceCaptain.id) || team.viceCaptain,
          updatedAt: new Date().toISOString(),
          hadChanges: nonPlayingPlayers.length > 0
        });
      }
      
      localStorage.setItem(localStorageKey, JSON.stringify(updatedTeams));
      setGeneratedTeams(updatedTeams);
      
      if (updatedTeams.some(t => t.hadChanges)) {
        alert('🔥 Minimum 10 Teams Needed to Win the Dream Team Mega Winnings 🏆');
      }
      
    } catch (err) {
      console.error("Failed to check lineup changes:", err);
    }
  }, [user?.id, matchId, localStorageKey]);

  const checkIfPlayerIsSubstitute = (playerId: string): boolean => {
    return Math.random() < 0.1;
  };

  const generateButton = (
    <div className="space-y-2">
      <button
        onClick={handleGenerateTeams}
        disabled={isGenerating || !team1 || !team2}
        className={`
          w-full px-4 py-3 rounded-md font-bold
          ${isGenerating ? 'bg-gray-500' : 
           needsPayment ? 'bg-yellow-500 hover:bg-yellow-600' : 
           'bg-blue-500 hover:bg-blue-600'}
          text-white transition-colors
        `}
      >
        {isGenerating ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating...
          </span>
        ) : !team1 || !team2 ? (
          "Select both teams"
        ) : needsPayment ? (
          `Add ₹${paymentAmount} to Generate`
        ) : (
          `Generate ${teamCount} Teams (₹${requiredCredits})`
        )}
      </button>

      <div className="flex justify-between text-sm">
        <span>Your Credits: ₹{userBalance}</span>
        {needsPayment ? (
          <span className="text-yellow-500">Need ₹{paymentAmount} more</span>
        ) : (
          <span className="text-green-500">Sufficient balance</span>
        )}
      </div>

      {error && (
        <div className="text-red-500 text-sm p-2 bg-red-50 rounded-lg">
          <p className="font-medium">{error}</p>
          {error.includes("Player counts") && (
            <div className="mt-2 text-xs">
              <p>Current player counts:</p>
              <ul className="list-disc pl-5">
                <li>WK-Batsman: {roleCounts.wk} (min 1)</li>
                <li>Batsmen: {roleCounts.batsmen} (min 3 including allrounders)</li>
                <li>Bowlers: {roleCounts.bowlers} (min 3 including allrounders)</li>
              </ul>
              <p className="mt-1">Try adjusting filters or risk level.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );

  const paymentDialog = showPaymentDialog && (
    <PaymentDialog
      currentBalance={userBalance}
      requiredAmount={paymentAmount}
      onPaymentSuccess={(amount) => {
        onBalanceUpdate(userBalance + amount);
        setShowPaymentDialog(false);
        handleGenerateTeams();
      }}
      onOpenChange={setShowPaymentDialog}
      open={showPaymentDialog}
    />
  );

  return {
    generatedTeams,
    isGenerating,
    generateButton,
    paymentDialog,
    error,
    setError,
    fetchSavedTeams,
    setGeneratedTeams,
    checkLineupChanges
  };
};