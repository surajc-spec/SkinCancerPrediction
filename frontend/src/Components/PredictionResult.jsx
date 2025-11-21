import React from "react";
import { CheckCircle, AlertTriangle } from "lucide-react"; // ✅ For icons

const PredictionResult = ({ prediction }) => {
  if (!prediction) return null;

  // Decide styling based on prediction text (you can adjust this logic)
  const isPositive = prediction.toLowerCase().includes("benign");

  return (
    <div
      className={`mt-6 p-4 rounded-lg shadow-md border flex items-center justify-center gap-3 ${
        isPositive
          ? "bg-green-50 border-green-300 text-green-800"
          : "bg-red-50 border-red-300 text-red-800"
      }`}
    >
      {isPositive ? (
        <CheckCircle className="w-6 h-6 text-green-600" />
      ) : (
        <AlertTriangle className="w-6 h-6 text-red-600" />
      )}
      <p className="text-lg font-semibold">
        <span className="mr-1">Prediction:</span> {prediction}
      </p>
    </div>
  );
};

export default PredictionResult;
