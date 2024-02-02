import { Types } from "mongoose";

export enum ChapterContentType {
  Text = "text",
  Video = "video",
}

export interface ChapterContent {
  contentType: ChapterContentType;
  content: string;
  subTitle: string;
  videoDuration?: number;
}

export interface CourseChapter {
  chapterNumber: number;
  title: string;
  content: ChapterContent[];
}

export interface ICourse {
  title: string;
  mentor: Types.ObjectId;
  chapters: CourseChapter[];
  price?: number;
  category: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
