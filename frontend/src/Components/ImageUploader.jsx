import React from "react";
import { Camera } from "lucide-react"; // ✅ Importing camera icon

const ImageUploader = ({ setImage, preview, setPreview }) => {
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="mb-6">
      <label className="block mb-2 text-lg font-heading text-textColor">
        Upload Image:
      </label>

      <div className="flex flex-col items-start gap-3">
        {/* Custom File Input with Icon */}
        <label
          htmlFor="file-upload"
          className="flex items-center gap-2 cursor-pointer bg-primary text-white font-medium px-4 py-2 rounded-lg shadow-md hover:bg-accent transition duration-200"
        >
          <Camera className="w-5 h-5" /> {/* 📸 Icon */}
          <span>Choose File</span>
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="hidden"
        />

        {/* Preview */}
        {preview && (
          <div className="mt-4 p-2 bg-secondary border border-Grey rounded-lg shadow-inner">
            <img
              src={preview}
              alt="Preview"
              className="w-48 h-48 object-contain rounded-md"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
