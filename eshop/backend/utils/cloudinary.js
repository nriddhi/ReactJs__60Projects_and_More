const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

const cloudinaryUploadImg = async (imagePath, originalFileName) => {
  try {
    const data = await cloudinary.uploader.upload(imagePath, { public_id: originalFileName.toString() });
    return data;
  } catch (error) {
    return error;
  }
};

module.exports = cloudinaryUploadImg;
