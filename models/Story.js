import mongoose from "mongoose";

const StorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },   // NEW
    subtitle: { type: String, required: true },   // NEW
    content: { type: String, required: true },
    likes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.Story || mongoose.model("Story", StorySchema);


