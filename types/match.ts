// types/match.ts
export interface PlayerDetail {
    id: number;
    name: string;
    fullName: string;
    nickName: string;
    role: string;
    captain: boolean;
    keeper: boolean;
    substitute: boolean;
    isOverseas: boolean;
    battingStyle?: string;
    bowlingStyle?: string;
    teamName?: string;
    image?: string;
    riskScore?: number;
  }
  
  export interface Team {
    id: number;
    name: string;
    logo?: string;
    playerDetails: PlayerDetail[];
  }
  
  export interface TossResults {
    tossWinnerId: number;
    decision: string;
    tossWinnerName: string;
  }
  
  export interface Venue {
    name: string;
    city: string;
    country: string;
    ground?: string;
    avgscore?: string;
    pitchtype?: string;
  }
  
  export interface MatchInfo {
    matchId: number;
    matchDescription: string;
    matchFormat: string;
    matchType: string;
    complete: boolean;
    domestic: boolean;
    matchStartTimestamp: number;
    matchCompleteTimestamp: number;
    dayNight: boolean;
    year: number;
    state: string;
    tossResults?: TossResults;
    team1?: Team;
    team2?: Team;
    venue?: Venue;
  }
  
  export interface MatchData {
    matchInfo: MatchInfo;
  }
  
  export interface GeneratedTeam {
    players: PlayerDetail[];
    captain: PlayerDetail;
    viceCaptain: PlayerDetail;
    teamName: string;
  }