const CLOUDINARY_CLOUD_NAME =
  import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

const IMAGE_UPLOAD_PRESET =
  import.meta.env.VITE_CLOUDINARY_IMAGE_PRESET;

const PDF_UPLOAD_PRESET =
  import.meta.env.VITE_CLOUDINARY_PDF_PRESET;


/* ============================================================
   COMMON UPLOAD FUNCTION
   ============================================================ */

const uploadAssetToCloudinary = async (
  file,
  uploadPreset,
  resourceType,
  folder
) => {
  if (!CLOUDINARY_CLOUD_NAME) {
    throw new Error(
      "Cloudinary cloud name is missing."
    );
  }

  if (!uploadPreset) {
    throw new Error(
      "Cloudinary upload preset is missing."
    );
  }

  const formData = new FormData();

  formData.append("file", file);
  formData.append(
    "upload_preset",
    uploadPreset
  );
  formData.append(
    "folder",
    folder
  );

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/${resourceType}/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result?.error?.message ||
        "Cloudinary upload failed."
    );
  }

  return {
    url: result.secure_url,
    publicId: result.public_id,
    format: result.format,
    originalFilename:
      result.original_filename,
  };
};


/* ============================================================
   IMAGE UPLOAD
   ============================================================ */

export const uploadToCloudinary = async (
  file
) => {
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
  ];

  if (!allowedTypes.includes(file.type)) {
    throw new Error(
      "Only JPG, PNG and WEBP images are allowed."
    );
  }

  if (file.size > 10 * 1024 * 1024) {
    throw new Error(
      "Image must be smaller than 10 MB."
    );
  }

  return uploadAssetToCloudinary(
    file,
    IMAGE_UPLOAD_PRESET,
    "image",
    "infraplan/projects"
  );
};


/* ============================================================
   PDF UPLOAD
   ============================================================ */

export const uploadPdfToCloudinary = async (file) => {
  if (file.type !== "application/pdf") {
    throw new Error("Only PDF files are allowed.");
  }

  if (file.size > 20 * 1024 * 1024) {
    throw new Error("PDF must be smaller than 20 MB.");
  }

  return uploadAssetToCloudinary(
    file,
    PDF_UPLOAD_PRESET,
    "image",
    "infraplan/publications"
  );
};