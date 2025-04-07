import { firestore } from "@/lib/firebase";
import { collection, setDoc, doc, getDoc } from "firebase/firestore";

const API_BASE_URL = "https://cricbuzz-cricket.p.rapidapi.com";
const API_HEADERS = {
  "x-rapidapi-key": "d57866ff7dmshb876f17a427c55fp1c95b5jsnafaf7a959f0b",
  "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com"
};

async function fetchData(endpoint: string) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, { headers: API_HEADERS });
    if (!response.ok) throw new Error(`API request failed: ${response.status}`);
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return null;
  }
}

async function storeData(collectionName: string, data: any, idKey: string = "id") {
  if (!data) return;

  const collRef = collection(firestore, collectionName);

  for (const item of data) {
    const itemId = item[idKey]?.toString(); // Convert ID to string
    if (!itemId) continue;

    const docRef = doc(collRef, itemId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      await setDoc(docRef, item);
      console.log(`Stored ${collectionName} - ID: ${itemId}`);
    } else {
      console.log(`Skipping duplicate in ${collectionName} - ID: ${itemId}`);
    }
  }
}

export async function fetchAndStoreAllData() {
  console.log("Fetching and storing all cricket data...");

  // Matches Data
  await storeData("matches", await fetchData("/matches/list"));
  await storeData("match_info", await fetchData("/matches/get-info"));
  await storeData("match_teams", await fetchData("/matches/get-team"));
  await storeData("match_commentaries", await fetchData("/matches/get-commentaries"));
  await storeData("match_overs", await fetchData("/matches/get-overs"));
  await storeData("match_scorecards", await fetchData("/matches/get-scorecard"));
  await storeData("match_leanback", await fetchData("/matches/get-leanback"));

  // Schedules
  await storeData("schedules", await fetchData("/schedules/list"));

  // Series
  await storeData("series", await fetchData("/series/list"));
  await storeData("series_archives", await fetchData("/series/list-archives"));
  await storeData("series_matches", await fetchData("/series/get-matches"));
  await storeData("series_news", await fetchData("/series/get-news"));
  await storeData("series_squads", await fetchData("/series/get-squads"));
  await storeData("series_players", await fetchData("/series/get-players"));
  await storeData("series_venues", await fetchData("/series/get-venues"));
  await storeData("series_points_table", await fetchData("/series/get-points-table"));
  await storeData("series_stats", await fetchData("/series/get-stats"));

  // Teams
  await storeData("teams", await fetchData("/teams/list"));
  await storeData("team_schedules", await fetchData("/teams/get-schedules"));
  await storeData("team_results", await fetchData("/teams/get-results"));
  await storeData("team_news", await fetchData("/teams/get-news"));
  await storeData("team_players", await fetchData("/teams/get-players"));
  await storeData("team_stats", await fetchData("/teams/get-stats"));

  // Venues
  await storeData("venues", await fetchData("/venues/get-info"));
  await storeData("venue_stats", await fetchData("/venues/get-stats"));
  await storeData("venue_matches", await fetchData("/venues/get-matches"));

  // Players
  await storeData("players_trending", await fetchData("/players/list-trending"));
  await storeData("players_career", await fetchData("/players/get-career"));
  await storeData("players_news", await fetchData("/players/get-news"));
  await storeData("players_bowling", await fetchData("/players/get-bowling"));
  await storeData("players_batting", await fetchData("/players/get-batting"));
  await storeData("players_info", await fetchData("/players/get-info"));
  await storeData("players_search", await fetchData("/players/search"));

  // News
  await storeData("news", await fetchData("/news/list"));
  await storeData("news_detail", await fetchData("/news/detail"));
  await storeData("news_categories", await fetchData("/news/get-categories"));
  await storeData("news_by_category", await fetchData("/news/list-by-category"));
  await storeData("news_topics", await fetchData("/news/get-topics"));
  await storeData("news_by_topic", await fetchData("/news/list-by-topic"));

  // Photos
  await storeData("photos", await fetchData("/photos/list"));
  await storeData("photo_galleries", await fetchData("/photos/get-gallery"));

  // Stats
  await storeData("stats_icc_rankings", await fetchData("/stats/get-icc-rankings"));
  await storeData("stats_icc_standings", await fetchData("/stats/get-icc-standings"));
  await storeData("stats_records", await fetchData("/stats/get-records"));

  console.log("✅ All cricket data fetched and stored successfully.");
}
