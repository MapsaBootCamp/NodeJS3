import * as mongoose from 'mongoose';

export enum Role {
  USER = 'user',
  ADMIN = 'admin',
}

export const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  age: Number,
  email: String,
  password: { type: String, required: true },
  role: { type: String, enum: Role, default: Role.USER },
  permissions: [{ type: mongoose.Types.ObjectId, ref: 'Permission' }],
});
