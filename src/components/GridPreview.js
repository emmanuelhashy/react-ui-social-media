import React from "react";

const GridPreview = ({ gridSettings }) => {
  const { rows, columns, gap, itemColor, breakpoints } = gridSettings;

  const gridStyle = {
    display: "grid",
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${gap}px`,
  };

  const generateCSSCode = () => {
    return `
      display: grid;
      grid-template-rows: repeat(${rows}, 1fr);
      grid-template-columns: repeat(${columns}, 1fr);
      gap: ${gap}px;

      @media (min-width: 640px) {
        grid-template-columns: ${breakpoints.sm || `repeat(${columns}, 1fr)`};
      }

      @media (min-width: 768px) {
        grid-template-columns: ${breakpoints.md || `repeat(${columns}, 1fr)`};
      }
    `;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateCSSCode()).then(() =>
      alert("CSS code copied to clipboard!")
    );
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Grid Preview</h2>
      <div
        style={gridStyle}
        className="w-full h-96 bg-gray-200 overflow-hidden border rounded"
      >
        {Array.from({ length: rows * columns }).map((_, index) => (
          <div
            key={index}
            style={{ backgroundColor: itemColor }}
            className="text-white flex justify-center items-center font-semibold"
          >
            {index + 1}
          </div>
        ))}
      </div>
      <button
        onClick={copyToClipboard}
        style={{ backgroundColor: itemColor }}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
      >
        Copy CSS
      </button>
    </div>
  );
};

export default GridPreview;
