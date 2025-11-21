// src/services/api.js
export const predictSkinCancer = async (model, image) => {
  if (!model || !image) throw new Error("Model and image required");

  const formData = new FormData();
  formData.append("model", model);  // Must match Flask backend key
  formData.append("image", image);  // Must be a File object

  const response = await fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Prediction failed");
  }

  return response.json(); // { prediction, probability, model_used }
};
