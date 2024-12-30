import { Schema, model, models } from "mongoose";

const TopicSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Topic = models.Topic || model("Topic", TopicSchema);

export default Topic;
