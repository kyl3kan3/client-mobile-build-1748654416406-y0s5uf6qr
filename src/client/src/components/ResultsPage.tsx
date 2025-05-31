
import React from "react";

export default function ResultsPage() {
  const data = JSON.parse(localStorage.getItem("recommendations")) || [];

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-2xl font-bold mb-4">Your AI Recommendations</h1>
      <ul className="list-disc pl-5 space-y-2">
        {data.length > 0 ? (
          data.map((item, idx) => <li key={idx}>{item}</li>)
        ) : (
          <li>No recommendations found.</li>
        )}
      </ul>
    </div>
  );
}
