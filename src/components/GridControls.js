import React from "react";

const GridControls = ({ gridSettings, setGridSettings }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGridSettings({ ...gridSettings, [name]: name === "gap" ? Number(value) : value });
  };

  const handleBreakpointChange = (e) => {
    const { name, value } = e.target;
    setGridSettings((prev) => ({
      ...prev,
      breakpoints: { ...prev.breakpoints, [name]: value },
    }));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Grid Controls</h2>
      <div className="space-y-4">
        <div>
          <label className="block font-medium">Rows</label>
          <input
            type="number"
            name="rows"
            value={gridSettings.rows}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded"
            min="1"
          />
        </div>
        <div>
          <label className="block font-medium">Columns</label>
          <input
            type="number"
            name="columns"
            value={gridSettings.columns}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded"
            min="1"
          />
        </div>
        <div>
          <label className="block font-medium">Gap (px)</label>
          <input
            type="number"
            name="gap"
            value={gridSettings.gap}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded"
            min="0"
          />
        </div>
        <div>
          <label className="block font-medium">Grid Item Color</label>
          <input
            type="color"
            name="itemColor"
            value={gridSettings.itemColor}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Small Screen Columns</label>
          <input
            type="text"
            name="sm"
            placeholder="e.g., repeat(2, 1fr)"
            onChange={handleBreakpointChange}
            className="mt-1 w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Medium Screen Columns</label>
          <input
            type="text"
            name="md"
            placeholder="e.g., repeat(3, 1fr)"
            onChange={handleBreakpointChange}
            className="mt-1 w-full p-2 border rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default GridControls;
