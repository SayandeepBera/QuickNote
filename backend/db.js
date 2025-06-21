const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook"; // Add database "inotebook"

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
    });
    console.log("✅ Connected to MongoDB successfully");
  } catch (error) {
      console.error("❌ Error connecting to MongoDB:", error);
      process.exit(1); // Exit app on error
  }
};

module.exports = connectToMongo;
