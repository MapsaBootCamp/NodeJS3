import { model, Schema, Document } from "mongoose";
import { IUser, Role } from "@interfaces/user.interface";

export type UserDocument = IUser & Document;

const userSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: String,
    birthDate: Date,
    verifiedEmail: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: Role,
      default: Role.User,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = model<UserDocument>("User", userSchema);

export default userModel;
