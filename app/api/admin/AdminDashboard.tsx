"use client";
import { fetchAndStoreAllData } from "@/api/fetchAndStoreAllData";

export default function AdminDashboard() {
  const handleFetchData = async () => {
    await fetchAndStoreAllData();
    alert("Data fetched and stored successfully!");
  };

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
        onClick={handleFetchData}
      >
        Fetch & Store Cricket Data
      </button>
    </div>
  );
}
