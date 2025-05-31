
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch("/api/analyze", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    localStorage.setItem("recommendations", JSON.stringify(result));
    setUploading(false);
    navigate("/results");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-green-400 text-white">
      <h1 className="text-3xl mb-6 font-bold">Upload Your Bloodwork PDF</h1>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="mt-4 px-4 py-2 bg-white text-black rounded hover:bg-gray-200"
      >
        {uploading ? "Uploading..." : "Analyze"}
      </button>
    </div>
  );
}
