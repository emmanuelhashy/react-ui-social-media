import React, { useState } from "react";
import GridPreview from "./components/GridPreview";
import GridControls from "./components/GridControls";

function App() {
  const [gridSettings, setGridSettings] = useState({
    rows: 3,
    columns: 3,
    gap: 10,
    itemColor: "#3b82f6",
    breakpoints: {
      sm: "",
      md: "",
    },
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">CSS Grid Simulator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <GridControls gridSettings={gridSettings} setGridSettings={setGridSettings} />
        <GridPreview gridSettings={gridSettings} />
      </div>
    </div>
  );
}

export default App;
