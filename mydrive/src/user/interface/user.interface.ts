import { Document } from 'mongoose';
import { Role } from '../schemas/user.schema';

export interface User extends Document {
  username: string;
  age?: number;
  email?: string;
  password: string;
  role: Role;
}
