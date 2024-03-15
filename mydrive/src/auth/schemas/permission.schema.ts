import * as mongoose from 'mongoose';

export const permissionSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});
