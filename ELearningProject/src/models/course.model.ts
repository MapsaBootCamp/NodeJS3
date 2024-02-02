import { model, Schema, Document, Types } from "mongoose";
import { ChapterContentType, ICourse } from "@/interfaces/course.interface";

export type CourseDocument = ICourse & Document;

const chapterContentSchema = new Schema({
  contentType: {
    type: String,
    enum: ChapterContentType,
  },
  content: String,
  subTitle: String,
  videoDuration: Number,
});

const courseChapterSchema = new Schema({
  chapterNumber: Number,
  title: String,
  content: [chapterContentSchema],
});

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    mentor: { type: Types.ObjectId, ref: "User" },
    chapters: [courseChapterSchema],
    price: Number,
    category: { type: Types.ObjectId, ref: "Category" },
  },
  { timestamps: true }
);

const courseModel = model<CourseDocument>("Course", courseSchema);

export default courseModel;
