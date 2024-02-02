import { ICategory } from "@/interfaces/category.interface";
import { model, Schema, Document } from "mongoose";

export type CategoryDocument = ICategory & Document;

const categorySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const categoryModel = model<CategoryDocument>("Category", categorySchema);

export default categoryModel;
