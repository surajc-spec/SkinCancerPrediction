import React, { useState } from "react";
import ModelSelector from "../Components/ModelSelector.jsx";
import ImageUploader from "../Components/ImageUploader.jsx";
import { predictSkinCancer } from "../services/api.js";
import { Loader2 } from "lucide-react"; 

const Home = () => {
  const [selectedModel, setSelectedModel] = useState("skin_models_custom_cnn");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [probability, setProbability] = useState(null);
  const [modelUsed, setModelUsed] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    if (!selectedModel || !image) {
      alert("Please select a model and upload an image!");
      return;
    }

    setLoading(true);
    try {
      const data = await predictSkinCancer(selectedModel, image);
      setPrediction(data.prediction);
      setProbability((data.probability * 100).toFixed(2));
      setModelUsed(data.model_used);
    } catch (err) {
      console.error(err);
      alert(err.message || "Prediction failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-secondary flex flex-col items-center justify-center p-6">
      {/* Header */}
      {/* <h1 className="text-3xl font-heading text-textColor mb-6 text-center">
        🧪 Skin Cancer Prediction
      </h1> */}

      {/* Main Card */}
      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6 border border-Grey">
        {/* Model Selector */}
        <ModelSelector
          selectedModel={selectedModel}
          setSelectedModel={setSelectedModel}
        />

        {/* Image Uploader */}
        <ImageUploader
          setImage={setImage}
          preview={preview}
          setPreview={setPreview}
        />

        {/* Predict Button */}
        <button
          onClick={handlePredict}
          disabled={loading}
          className="w-full bg-primary text-white py-3 mt-4 rounded-lg font-semibold hover:bg-accent transition duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin w-5 h-5" />
              Predicting...
            </>
          ) : (
            "Predict"
          )}
        </button>

        {/* Prediction Result */}
        {prediction && (
          <div className="mt-6 p-5 rounded-lg shadow-inner bg-emerald-50 border border-emerald-300">
            <h2 className="font-heading text-xl text-emerald-800 mb-3">
              Prediction Result
            </h2>
            <div className="space-y-1 text-emerald-900">
              <p>
                <span className="font-semibold">Label:</span> {prediction}
              </p>
              <p>
                <span className="font-semibold">Probability:</span> {probability}%
              </p>
              <p>
                <span className="font-semibold">Model Used:</span> {modelUsed}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <p className="mt-8 text-sm text-gray-500 text-center">
        ⚡ Powered by  DermaScan AI — Smart Skin Analyzer
      </p>
    </div>
  );
};

export default Home;
