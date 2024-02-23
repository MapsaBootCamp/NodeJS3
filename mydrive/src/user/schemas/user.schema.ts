import * as mongoose from 'mongoose';

export enum Role {
  USER,
  ADMIN,
}

export const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  age: Number,
  email: String,
  password: { type: String, required: true },
  role: { type: String, enum: Role, default: Role.USER },
});
