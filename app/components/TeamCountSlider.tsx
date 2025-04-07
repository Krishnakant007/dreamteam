// // components/TeamCountSlider.tsx
// interface TeamCountSliderProps {
//   teamCount: number;
//   setTeamCount: (value: number) => void;
// }

// export default function TeamCountSlider({ teamCount, setTeamCount }: TeamCountSliderProps) {
//   return (
//     <div className="w-full md:w-1/2">
//       <label className="block mb-2 font-semibold">Select Teams: {teamCount}</label>
//       <input
//         type="range"
//         min="1"
//         max="100"
//         value={teamCount}
//         onChange={(e) => setTeamCount(Number(e.target.value))}
//         className="w-full h-3 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500"
//       />
//     </div>
//   );
// }



// // components/TeamCountSlider.tsx
// interface TeamCountSliderProps {
//   teamCount: number;
//   setTeamCount: (value: number) => void;
// }

// export default function TeamCountSlider({ teamCount, setTeamCount }: TeamCountSliderProps) {
//   return (
//     <div className="space-y-2">
//       <div className="flex justify-between">
//         <label className="font-semibold">Number of Teams</label>
//         <span className="bg-blue-500 px-2 rounded-full text-xs font-bold">
//           {teamCount}
//         </span>
//       </div>
//       <input
//         type="range"
//         min="1"
//         max="20"
//         value={teamCount}
//         onChange={(e) => setTeamCount(Number(e.target.value))}
//         className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-blue-400 to-purple-500"
//       />
//       <div className="flex justify-between text-xs text-gray-400">
//         <span>1 Team (₹5)</span>
//         <span>20 Teams (₹100)</span>
//       </div>
//     </div>
//   );
// }







// // components/TeamCountSlider.tsx
// interface TeamCountSliderProps {
//   value: number;
//   onChange: (value: number) => void;
// }

// export default function TeamCountSlider({ value, onChange }: TeamCountSliderProps) {
//   return (
//     <div className="space-y-2">
//       <div className="flex justify-between">
//         <label className="font-semibold">Number of Teams</label>
//         <span className="bg-blue-500 px-2 rounded-full text-xs font-bold">
//           {value}
//         </span>
//       </div>
//       <input
//         type="range"
//         min="1"
//         max="20"
//         value={value}
//         onChange={(e) => onChange(Number(e.target.value))}
//         className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-blue-400 to-purple-500"
//       />
//       <div className="flex justify-between text-xs text-gray-400">
//         <span>1 Team (₹10)</span>
//         <span>20 Teams (₹200)</span>
//       </div>
//     </div>
//   );
// }





// interface TeamCountSliderProps {
//   value: number;
//   onChange: (value: number) => void;
// }

// export default function TeamCountSlider({ value, onChange }: TeamCountSliderProps) {
//   // Calculate the position percentage (1-20 mapped to 0-100%)
//   const positionPercentage = ((value - 1) / (20 - 1)) * 100;

//   return (
//     <div className="space-y-3">
//       <div className="flex justify-between items-center">
//         <label className="font-semibold text-lg">Number of Teams</label>
//         <span className="bg-blue-500 px-3 py-1 rounded-full text-sm font-bold text-white">
//           {value} {value === 1 ? 'Team' : 'Teams'}
//         </span>
//       </div>
      
//       <div className="relative">
//         <input
//           type="range"
//           min="1"
//           max="20"
//           value={value}
//           onChange={(e) => onChange(Number(e.target.value))}
//           className="w-full h-3 rounded-full appearance-none cursor-pointer bg-gradient-to-r from-blue-400 to-purple-500"
//         />
//         <div
//           className="absolute top-0 transform -translate-y-full -translate-x-1/2 text-xs font-bold bg-white px-2 py-1 rounded-md shadow-sm"
//           style={{
//             left: `${positionPercentage}%`,
//             transition: 'left 0.2s ease',
//           }}
//         >
//           {value}
//         </div>
//       </div>
      
//       <div className="flex justify-between text-xs text-gray-400">
//         <span>1 Team (₹10)</span>
//         <span>10 Teams (₹100)</span>
//         <span>20 Teams (₹200)</span>
//       </div>
//     </div>
//   );
// }




interface TeamCountSliderProps {
  value: number;
  onChange: (value: number) => void;
}

export default function TeamCountSlider({ value, onChange }: TeamCountSliderProps) {
  // Calculate position percentage (1-20 mapped to 0-100%)
  const positionPercentage = ((value - 1) / 19) * 100;

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <label className="font-semibold text-lg">Number of Teams</label>
        <span className="bg-blue-500 px-3 py-1 rounded-full text-sm font-bold text-white">
          {value} {value === 1 ? 'Team' : 'Teams'} (₹{value * 10})
        </span>
      </div>
      
      <div className="relative pt-4"> {/* Added padding-top for indicator space */}
        <input
          type="range"
          min="1"
          max="20"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-3 rounded-full appearance-none cursor-pointer bg-gradient-to-r from-blue-400 to-purple-500"
        />
        <div 
          className="absolute top-0 left-0 transform -translate-x-1/2 text-xs font-bold bg-blue-500 text-white px-2 py-1 rounded-full shadow-md"
          style={{
            left: `${positionPercentage}%`,
            transition: 'left 0.2s ease',
          }}
        >
          {value}
        </div>
      </div>
      
      <div className="flex justify-between text-xs text-gray-400 mt-2">
        <span>1 Team (₹10)</span>
        <span>10 Teams (₹100)</span>
        <span>20 Teams (₹200)</span>
      </div>
    </div>
  );
}